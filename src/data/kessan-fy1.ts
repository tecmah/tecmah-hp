// 第1期 決算公告（2025年7月14日〜2026年6月30日）データ
// 会社法第440条第1項に基づく貸借対照表の全文公告
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
  disclosureUrl: string;
}

// 合計を計算するヘルパー関数
const sum = (items: ReadonlyArray<{ amount: number }>) =>
  items.reduce((acc, item) => acc + item.amount, 0);

// TODO: 定時株主総会（2026年9月上旬に開催予定・期限2026年9月30日）の終結後、
//       meetingDate / publishDate / publicationEndDate を確定日に差し替えてから公開する。
export const reportInfo: ReportInfo = {
  period: "第1期（2025年7月14日〜2026年6月30日）",
  baseDate: "2026年6月30日現在",
  meetingDate: "2026年9月4日",
  publishDate: "2026年9月7日",
  publicationEndDate: "2031年9月4日",
  companyName: company.name,
  address: company.address.full,
  representative: company.representative,
  disclosureUrl: `${company.contact.website}/ir/kessan/fy1`
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

  const equityData = {
    capital: 1000000,
    retainedEarnings: 1405674
  };

  const assetsCurrentTotal = sum(assetsData.current);
  const assetsFixedTotal = sum(assetsData.fixed);
  const assetsDeferredTotal = sum(assetsData.deferred);
  const liabilitiesCurrentTotal = sum(liabilitiesData.current);
  const liabilitiesFixedTotal = sum(liabilitiesData.fixed);

  const assetsTotal = assetsCurrentTotal + assetsFixedTotal + assetsDeferredTotal;
  const liabilitiesTotal = liabilitiesCurrentTotal + liabilitiesFixedTotal;
  const equityTotal = equityData.capital + equityData.retainedEarnings;

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
      total: equityTotal
    },
    liabilitiesAndEquityTotal: liabilitiesTotal + equityTotal
  };
})();

// 金額フォーマット関数
export function formatAmount(amount: number): string {
  return amount.toLocaleString("ja-JP");
}
