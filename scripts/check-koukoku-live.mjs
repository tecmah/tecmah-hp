#!/usr/bin/env node
// 本番URLに掲載中の電子公告が生きていることを確認する（会社法第940条第1項第2号）
//
// postbuild の scripts/verify-koukoku.mjs はビルド成果物（dist）しか見ない。
// つまり「ソースは正しいがデプロイが止まっている」「独自ドメインのDNS/CNAMEが切れた」
// 「ホスティングを移して 404 になった」場合を検知できない。掲載義務期間（第1期: 2031年8月19日まで）は
// 何年も続くので、リポジトリを触らない期間に公告が落ちても誰も気づかない、という穴が残る。
//
// このスクリプトは GitHub Actions の定期実行（.github/workflows/koukoku-liveness.yml）から
// 実際に https://www.tecmah.com に HTTP GET し、次を確認する:
//  1. 登記した公告URL（トップ）が 200 で、/koukoku と /ir へのリンクがある
//  2. /koukoku が 200 で、各公告ページへのリンクがある
//  3. 各公告ページが 200 で、公告の記載事項・金額・日付が掲載時のまま
//
// 期待値は scripts/koukoku-expectations.mjs（dist 検証と共通）。
// 失敗したらジョブを失敗させ、GitHub の通知で気づけるようにする。
import {
  EXPECTED_NOTICES,
  KOUKOKU_PATH,
  SITE_ORIGIN,
  checkMandatoryNoticesPresent,
  checkNoticeContent,
  hasLink
} from "./koukoku-expectations.mjs";

const ORIGIN = (process.env.KOUKOKU_ORIGIN ?? SITE_ORIGIN).replace(/\/+$/, "");
const TIMEOUT_MS = 20000;

// 週1回しか走らないので、リトライ予算は「秒」ではなく「分」で取る。
// 5秒×3回では数分規模の CDN 障害で誤通知し、通知を無視される（狼少年になる）。
const ATTEMPTS = 4;
const BACKOFF_MS = [5000, 30000, 120000]; // 1→2, 2→3, 3→4 回目の待ち時間
const MAX_RETRY_AFTER_MS = 180000;

// 再試行しても結果が変わらない＝ページが恒久的に失われている状態。即座に確定させる。
//   404/410 … 消えた   451 … 法的理由でブロック
//   400/405/414 … こちらのリクエストが不正（＝このスクリプトのバグ）
//
// これ以外の 4xx は再試行する。www.tecmah.com は Cloudflare 経由（server: cloudflare / cf-ray）で
// GitHub Pages に繋がっており、次はいずれも一過性でありうる:
//   403 … Cloudflare の WAF / Bot Fight Mode によるチャレンジ
//   408 … Cloudflare のエッジ内部タイムアウト
//   429 … GitHub Pages / Cloudflare のレート制限
// ただし再試行を使い切れば必ず失敗させる。見逃し（落ちているのに通す）は作らない。
const PERMANENT_STATUS = new Set([400, 404, 405, 410, 414, 451]);

const failures = [];
const fail = (msg) => failures.push(msg);
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function fetchOnce(url) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    const res = await fetch(url, {
      redirect: "follow",
      signal: controller.signal,
      headers: { "user-agent": "tecmah-koukoku-liveness/1.0 (+https://www.tecmah.com/koukoku)" }
    });
    const body = await res.text();
    return { status: res.status, finalUrl: res.url, body, headers: res.headers };
  } finally {
    clearTimeout(timer);
  }
}

// サーバーが Retry-After で待ち時間を指定してきたら従う（秒数形式・HTTP-date 形式の両方）。
function retryAfterMs(headers) {
  const raw = headers?.get?.("retry-after");
  if (!raw) return null;
  const secs = Number(raw);
  const ms = Number.isFinite(secs) ? secs * 1000 : Date.parse(raw) - Date.now();
  if (!Number.isFinite(ms) || ms <= 0) return null;
  return Math.min(ms, MAX_RETRY_AFTER_MS);
}

// Node の fetch は到達できない原因をすべて `TypeError: fetch failed` に潰してしまい、
// 区別できる情報は error.cause にしか入らない。通知だけで原因の当たりが付くよう展開する。
// 例: ENOTFOUND → DNS/CNAME、CERT_HAS_EXPIRED → 証明書、ECONNREFUSED → ホスト側の停止
function describeError(error) {
  if (error?.name === "AbortError") return `${TIMEOUT_MS}ms でタイムアウト（応答なし）`;
  const cause = error?.cause;
  // Node のバージョンによっては複数アドレスへの試行が AggregateError にまとまる
  const detail =
    cause?.code ??
    cause?.errors?.map((e) => e?.code).filter(Boolean).join(", ") ??
    cause?.message ??
    "";
  const message = error?.message ?? String(error);
  return detail ? `${message} (${detail})` : message;
}

// 本文まで取得できて 200 なら成功。PERMANENT_STATUS は即確定、それ以外は再試行する。
async function fetchPage(routePath) {
  const url = `${ORIGIN}${routePath}`;
  let lastError = null;
  for (let attempt = 1; attempt <= ATTEMPTS; attempt++) {
    let waitMs = BACKOFF_MS[attempt - 1] ?? BACKOFF_MS.at(-1);
    try {
      const res = await fetchOnce(url);
      if (res.status === 200) return res;

      if (PERMANENT_STATUS.has(res.status)) {
        const why =
          res.status === 451
            ? "法的理由によるブロック。至急、内容を確認すること"
            : "再試行しても回復しない種類の失敗";
        fail(`${url} が HTTP ${res.status} を返しました（掲載義務のあるページが到達不能／${why}）`);
        return null;
      }

      // Cloudflare のチャレンジは Node の fetch では突破できない。原因を取り違えて
      // 「公告が落ちた」と誤解しないよう、メッセージで区別しておく。
      const mitigated = res.headers?.get?.("cf-mitigated");
      lastError = mitigated
        ? `HTTP ${res.status}（cf-mitigated: ${mitigated} — Cloudflare のチャレンジ。` +
          `公告自体は落ちていない可能性が高い。WAF の Skip ルールで監視元を除外すること）`
        : `HTTP ${res.status}`;

      const hinted = retryAfterMs(res.headers);
      if (hinted) waitMs = hinted;
    } catch (error) {
      lastError = describeError(error);
    }
    if (attempt < ATTEMPTS) await sleep(waitMs);
  }
  fail(`${url} の取得に ${ATTEMPTS} 回失敗しました: ${lastError}`);
  return null;
}

// 0. 掲載義務期間中の公告が EXPECTED_NOTICES から消されていないか
//    （これが無いと、公告エントリごと削除したときに検査対象がゼロになって ✔ OK になる）
for (const error of checkMandatoryNoticesPresent()) fail(error);

// 1. 登記した公告URL（トップ）から /koukoku・/ir へ
const top = await fetchPage("/");
if (top) {
  if (!hasLink(top.body, KOUKOKU_PATH)) {
    fail(`トップページ（${top.finalUrl}）に href="${KOUKOKU_PATH}" がありません`);
  }
  if (!hasLink(top.body, "/ir")) {
    fail(`トップページ（${top.finalUrl}）に href="/ir" がありません`);
  }
}

// 2. /koukoku から各公告ページへ
const koukoku = await fetchPage(KOUKOKU_PATH);
if (koukoku) {
  for (const notice of EXPECTED_NOTICES) {
    if (!hasLink(koukoku.body, notice.path)) {
      fail(`${ORIGIN}${KOUKOKU_PATH} に href="${notice.path}" がありません`);
    }
  }
}

// 3. 各公告ページの内容が掲載時のまま
for (const notice of EXPECTED_NOTICES) {
  const page = await fetchPage(notice.path);
  if (!page) continue;
  for (const error of checkNoticeContent(notice, page.body)) fail(error);
}

if (failures.length > 0) {
  console.error(`✖ 本番の電子公告チェックに失敗しました（${ORIGIN}）:`);
  for (const f of failures) console.error(`  - ${f}`);
  console.error(
    "\n会社法第940条第1項第2号により、掲載義務期間中は公告を継続して掲載する必要がある。" +
      "\n公告が落ちている場合は復旧を最優先で行うこと。"
  );
  process.exit(1);
}

console.log(
  `✔ 本番の電子公告チェック OK（${ORIGIN} → ${KOUKOKU_PATH} → ${EXPECTED_NOTICES.map((n) => n.path).join(", ")}）`
);
