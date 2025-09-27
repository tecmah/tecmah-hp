// TECMAH株式会社 - 統一コンテンツ管理ファイル
// すべてのページで使用する文字列・データを一元管理

export interface CompanyInfo {
  name: string;
  nameEn: string;
  tagline: string;
  description: string;
  established: number;
  representative: string;
  address: {
    postal: string;
    prefecture: string;
    city: string;
    address: string;
    building: string;
    full: string;
  };
  contact: {
    phone: string;
    email: string;
    website: string;
  };
}

export interface ServiceInfo {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  href: string;
  icon: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  industry: string;
  description: string;
  result: {
    metric: string;
    value: string;
    description: string;
  };
  icon: string;
}

export interface PageMeta {
  title: string;
  description: string;
  keywords?: string[];
}

// 会社基本情報
export const company: CompanyInfo = {
  name: "TECMAH株式会社",
  nameEn: "TECMAH Inc.",
  tagline: "AI・データ活用・PdM/PM支援",
  description: "データドリブンな意思決定と生成AIを活用したプロダクト開発で、企業のデジタル変革を伴走支援します。",
  established: 2025,
  representative: "松浦 賢孝",
  address: {
    postal: "060-0062",
    prefecture: "北海道",
    city: "札幌市中央区",
    address: "南二条西5丁目31-1",
    building: "RMBld.701",
    full: "〒060-0062 北海道札幌市中央区南二条西5丁目31-1 RMBld.701"
  },
  contact: {
    email: "info@tecmah.com",
    website: "https://www.tecmah.com"
  }
};

// サービス情報
export const services: ServiceInfo[] = [
  {
    id: "ai-data",
    title: "生成AI・データ活用支援",
    subtitle: "最新のAI技術でビジネス価値を創出",
    description: "生成AIの活用構想からPoC、運用ガバナンスまで伴走し、事業インパクトを実現します。",
    features: [
      "Azure OpenAI / GPT-4o導入支援",
      "PoC構築・運用体制整備",
      "MLOps基盤構築・運用",
      "プロンプト設計・評価・改善"
    ],
    href: "/services/ai-data",
    icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>`
  },
  {
    id: "product-management",
    title: "PdM/PM伴走・プロダクトマネジメント",
    subtitle: "戦略から実行まで一貫支援",
    description: "戦略立案からロードマップ、開発体制構築、リリース運用まで一貫したPdM/PM伴走を提供します。",
    features: [
      "市場・ユーザー調査・分析",
      "アジャイル導入・スクラム推進",
      "開発チーム運営・マネジメント",
      "PdM人材育成・内製化支援"
    ],
    href: "/services/product-management",
    icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>`
  },
  {
    id: "dx-consulting",
    title: "新規事業・DXコンサルティング",
    subtitle: "持続可能な成長を実現",
    description: "市場検証・事業計画・KPI設計・オペレーション構築まで、成長を見据えたDX/新規事業を伴走します。",
    features: [
      "カスタマーインタビュー・検証",
      "事業計画・KPI設計・運用",
      "業務プロセス可視化・改善",
      "アライアンス戦略・パートナリング"
    ],
    href: "/services/dx-consulting",
    icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>`
  }
];

// 実績事例
export const caseStudies: CaseStudy[] = [
  {
    id: "education-saas",
    title: "教育SaaS企業",
    subtitle: "生成AIアダプティブ学習システム",
    industry: "教育",
    description: "生成AIと学習者データを活用したアダプティブ学習機能構築",
    result: {
      metric: "学習継続率",
      value: "+18%",
      description: "個別最適化により大幅改善"
    },
    icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>`
  },
  {
    id: "manufacturing-audio",
    title: "製造業",
    subtitle: "音声解析による異常検知システム",
    industry: "製造業",
    description: "音声認識・感情解析モデルで異常検知を自動化",
    result: {
      metric: "判定時間",
      value: "50%短縮",
      description: "平均4時間→2時間に短縮"
    },
    icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>`
  },
  {
    id: "retail-ai",
    title: "小売×生成AI",
    subtitle: "RAG構成インタラクティブミラー",
    industry: "小売業",
    description: "Azure OpenAIとRAG構成を活用したインタラクティブミラー",
    result: {
      metric: "パイロット導入",
      value: "3ヶ月",
      description: "迅速なプロトタイプ→導入"
    },
    icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>`
  },
  {
    id: "ai-startup",
    title: "AIスタートアップ",
    subtitle: "新規事業の事業性検証・投資判断支援",
    industry: "IT・AI",
    description: "市場調査・PoC開発・KPI設計で事業性検証を支援",
    result: {
      metric: "投資判断材料",
      value: "100%整備",
      description: "VCとの協議資料完成"
    },
    icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>`
  }
];

// 会社の強み・特徴
export const features = [
  {
    id: "practical-approach",
    title: "生成AI×PdMの実行力",
    description: "Azure OpenAI、GPT-4oなどの最新技術をビジネス要求に落とし込み、プロダクトマネジメント視点でスピーディに実装します。",
    icon: `<svg class="w-10 h-10 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>`
  },
  {
    id: "data-driven",
    title: "データドリブンな意思決定",
    description: "KPI設計、ダッシュボード構築、分析オペレーションの定着まで伴走し、継続的に学習する組織をつくります。",
    icon: `<svg class="w-10 h-10 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>`
  },
  {
    id: "partnership",
    title: "伴走型コンサルティング",
    description: "短期の成果創出から内製化支援まで、プロジェクトに最適なチーム構成で伴走。北海道から全国までリモート・オンサイト対応。",
    icon: `<svg class="w-10 h-10 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>`
  }
];

// ページメタ情報
export const pageMeta: Record<string, PageMeta> = {
  home: {
    title: "TECMAH株式会社 | AI・データ活用とPdM支援の伴走パートナー",
    description: "TECMAH株式会社は、生成AIとプロダクトマネジメントの専門知識で企業のデジタル変革を支援します。Azure OpenAI導入からPdM伴走、新規事業開発まで包括的にサポート。",
    keywords: ["AI", "データ活用", "プロダクトマネジメント", "DX", "コンサルティング", "生成AI", "Azure OpenAI"]
  },
  services: {
    title: "サービス一覧 | TECMAH株式会社 - AI・データ活用支援",
    description: "TECMAHの3つの専門サービス：生成AI・データ活用支援、PdM/PM伴走、新規事業・DXコンサルティング。お客様の事業成長を包括的に支援します。",
    keywords: ["サービス", "AI導入", "プロダクトマネジメント", "DXコンサルティング"]
  },
  about: {
    title: "会社概要 | TECMAH株式会社 - AI・データ活用とPdM支援",
    description: "TECMAH株式会社の会社概要。代表者情報、企業理念、事業内容をご紹介。AI時代の伴走パートナーとして、企業のデジタル変革を専門的に支援しています。",
    keywords: ["会社概要", "企業情報", "代表者", "松浦賢孝"]
  },
  "case-studies": {
    title: "導入事例・成功事例 | TECMAH株式会社 - AI・データ活用支援実績",
    description: "TECMAHの支援実績をご紹介。教育SaaS、製造業、小売業、AIスタートアップなど、様々な業界でのAI・データ活用、プロダクトマネジメント支援の成功事例。",
    keywords: ["導入事例", "成功事例", "実績", "AI導入", "データ活用事例"]
  },
  contact: {
    title: "お問い合わせ・無料相談予約 | TECMAH株式会社",
    description: "TECMAH株式会社へのお問い合わせ・無料相談のお申し込み。初回60分のオンライン相談は無料。AI・データ活用、プロダクトマネジメント支援のご相談はお気軽に。",
    keywords: ["お問い合わせ", "無料相談", "相談予約", "コンタクト"]
  }
};

// 共通メッセージ・文言
export const messages = {
  hero: {
    badge: "AI・データ活用・PdM/PM支援",
    title: "TECMAHは、生成AIとプロダクトマネジメントで事業成長を加速させます",
    subtitle: "プロダクト戦略の立案からデータ基盤の整備、生成AIの活用企画と実装、内製化支援まで。ビジネスインパクトに直結する伴走型チームで、短期間でも確かな成果創出につなげます。"
  },
  cta: {
    primary: "無料相談を予約",
    secondary: "サービスを見る",
    consultation: {
      title: "まずはお気軽にご相談ください",
      subtitle: "初回60分のオンライン相談は無料です。お客様の課題をお聞かせください。最適な解決策をご提案します。"
    }
  },
  stats: {
    continuationRate: { value: "18%", label: "学習継続率向上" },
    leadTimeReduction: { value: "50%", label: "リードタイム短縮" },
    pilotPeriod: { value: "3ヶ月", label: "パイロット導入" },
    investmentSupport: { value: "100%", label: "投資判断支援" }
  }
};

// フッター情報
export const footer = {
  description: company.description,
  sections: {
    services: {
      title: "サービス",
      links: services.map(service => ({
        title: service.title.replace(/・.*$/, "").replace(/^.*・/, ""),
        href: service.href
      }))
    },
    company: {
      title: "会社情報",
      links: [
        { title: "会社概要", href: "/about" },
        { title: "事例", href: "/case-studies" },
        { title: "お問い合わせ", href: "/contact" },
        { title: "プライバシーポリシー", href: "/privacy" }
      ]
    }
  },
  copyright: `© ${new Date().getFullYear()} ${company.name}. All rights reserved.`
};

// ナビゲーション情報
export const navigation = {
  main: [
    { title: "ホーム", href: "/" },
    { title: "サービス", href: "/services" },
    { title: "会社概要", href: "/about" },
    { title: "事例", href: "/case-studies" }
  ],
  cta: { title: "無料相談", href: "/contact" }
};