// 第1期 決算公告（2025年7月14日〜2026年6月30日）データ
// 会社法第440条第1項に基づく貸借対照表の全文公告
//
// !!! 重要（Issue #22） !!!
// このデータが表示される公告ページ URL（/ir/kessan/fy1）は、会社法第940条第1項第2号により
// 定時株主総会の終結の日（2026年8月19日）後5年間 = 2031年8月19日まで継続して掲載する義務がある。
// それまで URL・金額・日付を変更しないこと。URL を動かす場合は必ず 301 リダイレクトを残すこと。
import { company } from "./content";

interface BalanceSheetItem {
  name: string;
  amount: number;
}

interface BalanceSheet {
  assets: {
    current: BalanceSheetItem[];
    currentTotal: number;
    fixed: BalanceSheetItem[];
    fixedTotal: number;
    deferred: BalanceSheetItem[];
    deferredTotal: number;
    total: number;
  };
  liabilities: {
    current: BalanceSheetItem[];
    currentTotal: number;
    fixed: BalanceSheetItem[];
    fixedTotal: number;
    total: number;
  };
  equity: {
    capital: number;
    /** その他利益剰余金の内訳（会社計算規則第76条）。利益準備金は0のため省略。 */
    otherRetainedEarnings: BalanceSheetItem[];
    otherRetainedEarningsTotal: number;
    retainedEarnings: number;
    total: number;
  };
  liabilitiesAndEquityTotal: number;
}

interface ReportInfo {
  period: string;
  baseDate: string;
  /** 定時株主総会の終結の日。掲載期間（会社法940条1項2号）の起算日。 */
  meetingDate: string;
  publishDate: string;
  /** 掲載終了予定日 = 定時株主総会の終結の日後5年 */
  publicationEndDate: string;
  companyName: string;
  address: string;
  representative: string;
  /** 公告ページのパス。掲載期間終了（2031年8月19日）まで固定。 */
  disclosurePath: string;
  disclosureUrl: string;
}

// 合計を計算するヘルパー関数
const sum = (items: ReadonlyArray<{ amount: number }>) =>
  items.reduce((acc, item) => acc + item.amount, 0);

// 定時株主総会は 2026-08-19 のみなし決議（会社法319条1項）で終結。
const DISCLOSURE_PATH = "/ir/kessan/fy1";

export const reportInfo: ReportInfo = {
  period: "第1期（2025年7月14日〜2026年6月30日）",
  baseDate: "2026年6月30日現在",
  meetingDate: "2026年8月19日",
  publishDate: "2026年8月19日",
  publicationEndDate: "2031年8月19日",
  companyName: company.name,
  address: company.address.full,
  representative: company.representative,
  disclosurePath: DISCLOSURE_PATH,
  disclosureUrl: `${company.contact.website}${DISCLOSURE_PATH}`
};

// 貸借対照表データ（単位：円）
// 合計値は明細から動的に計算
export const balanceSheet: BalanceSheet = (() => {
  const assetsData = {
    current: [
      { name: "現金及び預金", amount: 5666525 },
      { name: "売掛金", amount: 1161600 },
      { name: "貯蔵品", amount: 2000 },
      { name: "前渡金", amount: 110000 }
    ],
    fixed: [
      { name: "有形固定資産", amount: 473734 },
      { name: "投資その他の資産", amount: 141075 }
    ],
    deferred: [{ name: "創立費", amount: 288998 }]
  };

  const liabilitiesData = {
    current: [
      { name: "短期借入金", amount: 1008000 },
      { name: "未払金", amount: 273348 },
      { name: "未払法人税等", amount: 486700 },
      { name: "預り金", amount: 10210 }
    ],
    fixed: [{ name: "長期借入金", amount: 3660000 }]
  };

  // 第1期のため利益準備金・剰余金の配当はなく、利益剰余金の全額がその他利益剰余金（繰越利益剰余金）。
  const equityData = {
    capital: 1000000,
    otherRetainedEarnings: [{ name: "繰越利益剰余金", amount: 1405674 }]
  };

  const assetsCurrentTotal = sum(assetsData.current);
  const assetsFixedTotal = sum(assetsData.fixed);
  const assetsDeferredTotal = sum(assetsData.deferred);
  const liabilitiesCurrentTotal = sum(liabilitiesData.current);
  const liabilitiesFixedTotal = sum(liabilitiesData.fixed);

  const assetsTotal = assetsCurrentTotal + assetsFixedTotal + assetsDeferredTotal;
  const liabilitiesTotal = liabilitiesCurrentTotal + liabilitiesFixedTotal;
  const otherRetainedEarningsTotal = sum(equityData.otherRetainedEarnings);
  const retainedEarnings = otherRetainedEarningsTotal;
  const equityTotal = equityData.capital + retainedEarnings;

  return {
    assets: {
      ...assetsData,
      currentTotal: assetsCurrentTotal,
      fixedTotal: assetsFixedTotal,
      deferredTotal: assetsDeferredTotal,
      total: assetsTotal
    },
    liabilities: {
      ...liabilitiesData,
      currentTotal: liabilitiesCurrentTotal,
      fixedTotal: liabilitiesFixedTotal,
      total: liabilitiesTotal
    },
    equity: {
      ...equityData,
      otherRetainedEarningsTotal,
      retainedEarnings,
      total: equityTotal
    },
    liabilitiesAndEquityTotal: liabilitiesTotal + equityTotal
  };
})();

// 金額フォーマット関数
export function formatAmount(amount: number): string {
  return amount.toLocaleString("ja-JP");
}
