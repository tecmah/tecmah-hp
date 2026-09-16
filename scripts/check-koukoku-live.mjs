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
  checkNoticeContent,
  hasLink
} from "./koukoku-expectations.mjs";

const ORIGIN = (process.env.KOUKOKU_ORIGIN ?? SITE_ORIGIN).replace(/\/+$/, "");
const TIMEOUT_MS = 20000;
// 一時的なネットワーク断で夜間に誤通知しないよう、少しだけ粘る。
const ATTEMPTS = 3;
const RETRY_WAIT_MS = 5000;

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
    return { status: res.status, finalUrl: res.url, body };
  } finally {
    clearTimeout(timer);
  }
}

// 本文まで取得できて 200 なら成功。それ以外（5xx・ネットワークエラー）は再試行する。
// 404 は再試行しても変わらないので即座に確定させる。
async function fetchPage(routePath) {
  const url = `${ORIGIN}${routePath}`;
  let lastError = null;
  for (let attempt = 1; attempt <= ATTEMPTS; attempt++) {
    try {
      const res = await fetchOnce(url);
      if (res.status === 200) return res;
      if (res.status >= 400 && res.status < 500) {
        fail(`${url} が HTTP ${res.status} を返しました（掲載義務のあるページが到達不能）`);
        return null;
      }
      lastError = `HTTP ${res.status}`;
    } catch (error) {
      lastError = error instanceof Error ? error.message : String(error);
    }
    if (attempt < ATTEMPTS) await sleep(RETRY_WAIT_MS);
  }
  fail(`${url} の取得に ${ATTEMPTS} 回失敗しました: ${lastError}`);
  return null;
}

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
