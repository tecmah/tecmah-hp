// 第1期 半期報告（2025年7月〜12月）データ
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
  publishDate: string;
  companyName: string;
  address: string;
  representative: string;
  disclosureUrl: string;
}

// 合計を計算するヘルパー関数
const sum = (items: ReadonlyArray<{ amount: number }>) =>
  items.reduce((acc, item) => acc + item.amount, 0);

// 半期報告情報
export const reportInfo: ReportInfo = {
  period: "第1期 半期（2025年7月1日〜2025年12月31日）",
  publishDate: "2025年12月30日",
  companyName: company.name,
  address: company.address.full,
  representative: company.representative,
  disclosureUrl: `${company.contact.website}/ir/kessan/`
};

// 貸借対照表データ（単位：円）
// 合計値は明細から動的に計算
export const balanceSheet: BalanceSheet = (() => {
  const assetsData = {
    current: [{ name: "現金及び預金", amount: 1747879 }],
    fixed: [{ name: "繰延資産（創立費）", amount: 288998 }]
  };

  const liabilitiesData = {
    current: [{ name: "未払金", amount: 199570 }],
    fixed: [{ name: "長期借入金", amount: 2000000 }]
  };

  const equityData = {
    capital: 1000000,
    retainedEarnings: -1162693
  };

  const assetsCurrentTotal = sum(assetsData.current);
  const assetsFixedTotal = sum(assetsData.fixed);
  const liabilitiesCurrentTotal = sum(liabilitiesData.current);
  const liabilitiesFixedTotal = sum(liabilitiesData.fixed);

  const assetsTotal = assetsCurrentTotal + assetsFixedTotal;
  const liabilitiesTotal = liabilitiesCurrentTotal + liabilitiesFixedTotal;
  const equityTotal = equityData.capital + equityData.retainedEarnings;

  return {
    assets: {
      ...assetsData,
      currentTotal: assetsCurrentTotal,
      fixedTotal: assetsFixedTotal,
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
