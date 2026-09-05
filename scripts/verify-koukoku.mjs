#!/usr/bin/env node
// 電子公告（会社法440条・940条）の到達性ガード（Issue #22）
//
// ビルド後の dist/ を検査し、次が崩れていたら非0で終了してデプロイを止める:
//  1. 登記した公告URL（トップページ）から /koukoku へのリンクがある
//  2. /koukoku から各公告ページへのリンクがある
//  3. 各公告ページが存在し、公告の主要数値・日付が変わっていない
//  4. すべてのページ（フッター）から /koukoku へ辿れる
//
// 公告ページの URL・金額・日付は掲載期間（第1期: 2031-08-19 まで）中は変更してはならない。
// 意図的に変更する場合（新期の公告追加など）は、このファイルの EXPECTED も併せて更新すること。
import { readFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const DIST = process.env.DIST_DIR ?? "dist";
const KOUKOKU_PATH = "/koukoku";

// 掲載中の公告ページと、ページに含まれていなければならない文字列
const EXPECTED_NOTICES = [
  {
    path: "/ir/kessan/fy1",
    mustContain: [
      "決算公告",
      "貸借対照表",
      "7,843,932", // 資産合計
      "7,843,932", // 負債及び純資産合計（同額）
      "5,666,525", // 現金及び預金
      "1,405,674", // 繰越利益剰余金
      "2026年8月19日", // 公告日・定時株主総会終結日
      "2031年8月19日", // 掲載終了予定日
    ],
  },
];

// 検査対象外の静的ファイル
const IGNORED_HTML = new Set(["404.html", "test-fluid.html"]);

const failures = [];
const fail = (msg) => failures.push(msg);

function htmlPathFor(routePath) {
  const trimmed = routePath.replace(/^\/+|\/+$/g, "");
  return trimmed === "" ? join(DIST, "index.html") : join(DIST, trimmed, "index.html");
}

function readHtml(routePath) {
  const file = htmlPathFor(routePath);
  if (!existsSync(file)) {
    fail(`${routePath}: ${file} が存在しません`);
    return null;
  }
  return readFileSync(file, "utf8");
}

function hasLink(html, href) {
  return new RegExp(`href=["']${href.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}["']`).test(html);
}

function walkHtml(dir, acc = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) walkHtml(full, acc);
    else if (entry.endsWith(".html")) acc.push(full);
  }
  return acc;
}

// 1. トップページ → /koukoku
const top = readHtml("/");
if (top && !hasLink(top, KOUKOKU_PATH)) fail(`トップページに href="${KOUKOKU_PATH}" がありません`);
if (top && !hasLink(top, "/ir")) fail(`トップページに href="/ir" がありません`);

// 2. /koukoku → 各公告ページ
const koukoku = readHtml(KOUKOKU_PATH);
if (koukoku) {
  for (const notice of EXPECTED_NOTICES) {
    if (!hasLink(koukoku, notice.path)) fail(`${KOUKOKU_PATH} に href="${notice.path}" がありません`);
  }
}

// 3. 各公告ページの存在と内容
for (const notice of EXPECTED_NOTICES) {
  const html = readHtml(notice.path);
  if (!html) continue;
  for (const text of notice.mustContain) {
    if (!html.includes(text)) fail(`${notice.path} に「${text}」が含まれていません`);
  }
}

// 4. 全ページのフッターから /koukoku へ
if (existsSync(DIST)) {
  const pages = walkHtml(DIST).filter((f) => !IGNORED_HTML.has(relative(DIST, f)));
  if (pages.length === 0) fail(`${DIST} に HTML がありません（ビルド未実行？）`);
  for (const file of pages) {
    const html = readFileSync(file, "utf8");
    // Astro の redirects が生成する meta refresh ページはフッターを持たないので除外
    if (/<meta http-equiv="refresh"/i.test(html)) continue;
    if (!hasLink(html, KOUKOKU_PATH)) fail(`${relative(DIST, file)} に href="${KOUKOKU_PATH}" がありません`);
  }
} else {
  fail(`${DIST} が存在しません`);
}

if (failures.length > 0) {
  console.error("✖ 電子公告の到達性チェックに失敗しました:");
  for (const f of failures) console.error(`  - ${f}`);
  process.exit(1);
}

console.log(
  `✔ 電子公告の到達性チェック OK（/ → ${KOUKOKU_PATH} → ${EXPECTED_NOTICES.map((n) => n.path).join(", ")}）`
);
