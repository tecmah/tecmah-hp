// 代表者紹介データ（/about の「代表者プロフィール」で使用）
//
// 旧 /profile（経歴書LP）は Issue #24 の案Cにより廃止し、会社概要の代表者紹介に統合した。
// 会社サイトに載せるのは「代表者紹介として妥当な範囲」に絞る:
// - 個人の連絡先・年齢・全職歴は載せない（フルの職務経歴書は個人チャネルで管理）
// - 個人事業・フリーランスとしての営業要素（稼働可否など）は載せない

export interface CeoProfile {
  name: string;
  nameKana: string;
  role: string;
  title: string;
  image: string;
}

export interface CeoMetric {
  value: string;
  label: string;
}

export interface CareerHighlight {
  id: string;
  period: string;
  organization: string;
  role: string;
  summary: string;
}

export const ceoProfile: CeoProfile = {
  name: "松浦 賢孝",
  nameKana: "マツウラ ヨシノリ",
  role: "代表取締役",
  title: "PdM / AI Engineer",
  image: "/images/ceo-profile.png"
};

// 代表者個人の通算値。会社（TECMAH）としての支援実績（/case-studies）とは別物なのでラベルで区別する。
export const ceoMetrics: readonly CeoMetric[] = [
  { value: "10年以上", label: "開発・マネジメントの実務経験" },
  { value: "15件以上", label: "参画プロジェクト（代表者個人の通算）" },
  { value: "8領域", label: "ドメイン経験（教育・人材・不動産・保険・ヘルスケアほか）" }
];

// 主な経歴（抜粋）。新しい順。
export const careerHighlights: readonly CareerHighlight[] = [
  {
    id: "tecmah-2025",
    period: "2025年7月〜現在",
    organization: "株式会社TECMAH",
    role: "代表取締役",
    summary: "AI・データ活用支援、PdM/PM伴走、新規事業・DXコンサルティングを提供。"
  },
  {
    id: "ripla-2025",
    period: "2025年4月〜9月",
    organization: "株式会社ripla",
    role: "PMO / SE",
    summary: "AI教育プロダクトのアダプティブドリル改善。つまずき判定アルゴリズムの設計と、LLMを活用した個別最適化機能の企画を担当。"
  },
  {
    id: "hmcomm-2025",
    period: "2025年2月〜5月",
    organization: "株式会社Hmcomm",
    role: "PM / SE",
    summary: "音声データ解析による異常検知。音声認識アルゴリズム開発とデータ環境の整備。"
  },
  {
    id: "sapeet-2024",
    period: "2024年10月〜2025年3月",
    organization: "株式会社Sapeet",
    role: "PdM / AE",
    summary: "Azure OpenAI と RAG 構成によるインタラクティブミラー開発。音声UIからナレッジベースへアクセスする体験を実装。"
  },
  {
    id: "algoage-2023",
    period: "2023年9月〜2024年4月",
    organization: "株式会社Algoage",
    role: "PM / PMO",
    summary: "AI新規事業創出。市場調査・PoC構築からビジネスモデルの検証まで一貫して担当。"
  },
  {
    id: "nadja-2020",
    period: "2020年8月〜2021年3月",
    organization: "NADJA株式会社",
    role: "CTO / PM",
    summary: "不動産系Web・スマホアプリと対話型AI受付システムの開発をオフショア体制で統括。"
  },
  {
    id: "early-career",
    period: "2014年〜2020年",
    organization: "SIer・事業会社（複数）",
    role: "SE / チームリーダー",
    summary: "通信・官公庁・医療・保険領域の基幹システム開発。最大20名のチームを統括。"
  }
];
