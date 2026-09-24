// 第1期 半期報告（2025年7月〜12月）データ
// 参考資料。会社法第440条に基づく決算公告ではない（法定公告は /koukoku 配下の一覧から辿る）。

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
  // 公開時点（2025年12月30日）の値をリテラルで固定する。content.ts の company を参照すると、
  // 本店移転や代表者変更で公開済みの資料の記載が遡って書き換わってしまう。
  companyName: "株式会社TECMAH",
  address: "〒060-0062 北海道札幌市中央区南二条西5丁目31-1 RMBld.701",
  representative: "松浦 賢孝",
  disclosureUrl: "https://www.tecmah.com/ir/kessan/2025"
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
  const liabilitiesAndEquityTotal = liabilitiesTotal + equityTotal;

  // 貸借対照表の不変条件。kessan-fy1.ts と同じく、崩れたらビルドを失敗させて公開を止める。
  // 半期報告は法定公告ではない任意開示だが、貸借不一致の表を出すと開示資料としての信頼を損ない、
  // 法定公告である第1期決算公告の信頼性まで巻き添えにする。
  if (assetsTotal !== liabilitiesAndEquityTotal) {
    throw new Error(
      `[kessan-2025] 貸借が一致しません: 資産合計 ${assetsTotal} / 負債及び純資産合計 ${liabilitiesAndEquityTotal}`
    );
  }

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
    liabilitiesAndEquityTotal
  };
})();

// 金額フォーマット関数
export function formatAmount(amount: number): string {
  return amount.toLocaleString("ja-JP");
}
