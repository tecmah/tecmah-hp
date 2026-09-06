// 電子公告（法定公告）データ
// 会社法第939条第1項第3号に基づく電子公告の一覧を一元管理する。
//
// 運用ルール:
// - 公告ページの URL（href）は、その公告の掲載期間が終了するまで変更しない
// - 決算公告の掲載期間は「定時株主総会の終結の日後5年を経過する日まで」（会社法第940条第1項第2号）
// - 新しい公告を出すときは legalNotices に追加し、ページを src/pages 配下に作成する
// - scripts/verify-koukoku.mjs がビルド後に到達性（トップ → /koukoku → 各公告）を検証する
import { company } from "./content";
import { reportInfo as kessanFy1 } from "./kessan-fy1";

export type LegalNoticeKind = "決算公告" | "その他の公告";

export interface LegalNotice {
  id: string;
  kind: LegalNoticeKind;
  title: string;
  /** 対象期間（決算公告の場合は事業年度） */
  period?: string;
  /** 公告日（掲載開始日） */
  publishDate: string;
  /** 掲載終了予定日 */
  publicationEndDate: string;
  /** 公告ページのパス。掲載期間中は固定。 */
  href: string;
  /** 根拠条文 */
  legalBasis: string;
}

export const koukokuMethod = {
  method: "電子公告",
  legalBasis: "会社法第939条第1項第3号",
  /** 公告を掲載するウェブサイト（登記上の公告URL） */
  siteUrl: company.contact.website,
  /** 公告一覧ページ */
  pageUrl: `${company.contact.website}/koukoku`,
  /** 決算公告の掲載期間の根拠 */
  kessanPeriodBasis: "会社法第940条第1項第2号"
} as const;

export const legalNotices: readonly LegalNotice[] = [
  {
    id: "kessan-fy1",
    kind: "決算公告",
    title: "第1期 決算公告（貸借対照表）",
    period: kessanFy1.period,
    publishDate: kessanFy1.publishDate,
    publicationEndDate: kessanFy1.publicationEndDate,
    href: kessanFy1.disclosurePath,
    legalBasis: "会社法第440条第1項"
  }
];

export const kessanNotices = legalNotices.filter((n) => n.kind === "決算公告");
export const otherNotices = legalNotices.filter((n) => n.kind !== "決算公告");
