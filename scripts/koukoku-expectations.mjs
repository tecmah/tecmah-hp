// 電子公告の期待値と照合ヘルパー（単一ソース）
//
// ビルド後の dist を検査する scripts/verify-koukoku.mjs と、
// 本番URLの生存を検査する scripts/check-koukoku-live.mjs の両方がここを読む。
// 期待値を二重管理しないこと。公告を追加・更新するときはこのファイルだけを直す。
//
// 掲載中の公告は、会社法第940条第1項第2号により定時株主総会の終結の日後5年間
// 継続して掲載する義務がある（第1期: 2031年8月19日まで）。

export const SITE_ORIGIN = "https://www.tecmah.com";
export const KOUKOKU_PATH = "/koukoku";

// 掲載中の公告ページと、ページに含まれていなければならない内容
//
// 金額を単独の文字列として並べてはいけない。貸借対照表には同額の行が複数あり
// （資産合計と負債及び純資産合計は必ず同額）、単独文字列だと片方の検査がもう片方に
// 素通りで満たされてしまう。必ず「ラベル → 金額」の対で照合すること。
export const EXPECTED_NOTICES = [
  {
    path: "/ir/kessan/fy1",
    // ページのどこかに1回以上あればよい文字列
    mustContain: [
      "決算公告",
      "貸借対照表",
      "会社法第440条",
      "2026年6月30日現在", // 貸借対照表日
      "2026年8月19日", // 公告日・定時株主総会終結日
      "2031年8月19日", // 掲載終了予定日
      "https://www.tecmah.com/ir/kessan/fy1", // 登記した公告URL配下の掲載URL
    ],
    // 隣接する2セルが「ラベル」「値」の順で並んでいることを検査する
    mustContainPairs: [
      // 公告の記載事項（公告時点の値。掲載義務期間中は変更禁止）
      ["商号", "株式会社TECMAH"],
      ["本店所在地", "〒060-0062 北海道札幌市中央区南二条西5丁目31-1 RMBld.701"],
      ["代表取締役", "松浦 賢孝"],
      // 資産の部
      ["現金及び預金", "5,666,525"],
      ["売掛金", "1,161,600"],
      ["貯蔵品", "2,000"],
      ["前渡金", "110,000"],
      ["流動資産合計", "6,940,125"],
      ["有形固定資産", "473,734"],
      ["投資その他の資産", "141,075"],
      ["固定資産合計", "614,809"],
      ["創立費", "288,998"],
      ["繰延資産合計", "288,998"],
      ["資産合計", "7,843,932"],
      // 負債の部
      ["短期借入金", "1,008,000"],
      ["未払金", "273,348"],
      ["未払法人税等", "486,700"],
      ["預り金", "10,210"],
      ["流動負債合計", "1,778,258"],
      ["長期借入金", "3,660,000"],
      ["固定負債合計", "3,660,000"],
      ["負債合計", "5,438,258"],
      // 純資産の部
      ["資本金", "1,000,000"],
      ["利益剰余金", "1,405,674"],
      ["その他利益剰余金", "1,405,674"],
      ["繰越利益剰余金", "1,405,674"],
      ["純資産合計", "2,405,674"],
      ["負債及び純資産合計", "7,843,932"],
    ],
  },
];

export function escapeRe(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function hasLink(html, href) {
  return new RegExp(`href=["']${escapeRe(href)}["']`).test(html);
}

// 「ラベルのセル」の直後に「値のセル」が来ることを検査する。
// td / th のどちらでも、属性（class や data-astro-cid-*）が付いていてもよい。
export function hasLabeledValue(html, label, value) {
  const re = new RegExp(
    `>${escapeRe(label)}</t[dh]>\\s*<t[dh][^>]*>${escapeRe(value)}</t[dh]>`
  );
  return re.test(html);
}

// 1ページ分の公告内容を検査し、失敗メッセージの配列を返す（空なら OK）。
export function checkNoticeContent(notice, html) {
  const errors = [];
  for (const text of notice.mustContain) {
    if (!html.includes(text)) errors.push(`${notice.path} に「${text}」が含まれていません`);
  }
  for (const [label, value] of notice.mustContainPairs ?? []) {
    if (!hasLabeledValue(html, label, value)) {
      errors.push(`${notice.path} の「${label}」が「${value}」ではありません`);
    }
  }
  return errors;
}
