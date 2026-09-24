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

// 掲載義務のある公告と、その掲載終了日（会社法第940条第1項第2号）。
//
// これが無いと、下の EXPECTED_NOTICES から公告エントリを丸ごと消したときに
// 「検査対象がゼロ件 → ループが回らない → ✔ OK」になり、ガードが自分の設定を
// 検査しているだけの自己参照になる。義務のほうを日付付きで別に持ち、
// 掲載終了日までは EXPECTED_NOTICES に存在することを強制する。
//
// 行を消すには「2031年8月19日まで掲載義務がある」と明記された行を消す必要があり、
// レビューで必ず目に入る。掲載終了日を過ぎたら、この行ごと削除してよい。
export const MANDATORY_NOTICES = [
  { path: "/ir/kessan/fy1", until: "2031-08-19", reason: "第1期決算公告（定時株主総会終結 2026-08-19 の5年後まで）" }
];

// 掲載義務期間中の公告が EXPECTED_NOTICES から欠けていないか検査する。
// 失敗メッセージの配列を返す（空なら OK）。
export function checkMandatoryNoticesPresent(today = new Date()) {
  const errors = [];
  for (const mandatory of MANDATORY_NOTICES) {
    // 掲載終了日の当日までは義務がある（終了日翌日の 00:00 JST を期限とみなす）
    const deadline = new Date(`${mandatory.until}T23:59:59+09:00`);
    if (today > deadline) continue;
    if (!EXPECTED_NOTICES.some((n) => n.path === mandatory.path)) {
      errors.push(
        `${mandatory.path} は ${mandatory.until} まで掲載義務があるのに ` +
          `EXPECTED_NOTICES から消えています（${mandatory.reason}）`
      );
    }
  }
  return errors;
}

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
      "第1期（2025年7月14日〜2026年6月30日）", // 会計期間
      "2026年6月30日現在", // 貸借対照表日
      "（単位：円）", // 金額の単位。貸借対照表の記載内容そのものなので金額と同様に凍結する
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
//
// 期待値の書き忘れ自体をエラーにする（fail-closed）。以前は mustContainPairs だけ
// `?? []` でフォールバックしていたため、ペアを書き忘れた公告は金額を1件も検証しないまま
// ✔ OK になっていた。公告ページは必ず貸借対照表を持つので、ペアが0件なのは設定ミス以外にない。
export function checkNoticeContent(notice, html) {
  const errors = [];
  const texts = notice.mustContain;
  const pairs = notice.mustContainPairs;

  if (!Array.isArray(texts) || texts.length === 0) {
    errors.push(`${notice.path}: mustContain が未定義です（koukoku-expectations.mjs を確認）`);
  }
  if (!Array.isArray(pairs) || pairs.length === 0) {
    errors.push(
      `${notice.path}: mustContainPairs が未定義です。金額が1件も検証されない状態なので、` +
        `貸借対照表の全科目を「ラベル→値」で追加すること`
    );
  }

  for (const text of texts ?? []) {
    if (!html.includes(text)) errors.push(`${notice.path} に「${text}」が含まれていません`);
  }
  for (const [label, value] of pairs ?? []) {
    if (!hasLabeledValue(html, label, value)) {
      errors.push(`${notice.path} の「${label}」が「${value}」ではありません`);
    }
  }
  return errors;
}
