// 株式会社TECMAH - 統一コンテンツ管理ファイル
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

export interface IRHighlight {
  period: string;
  label: string;
  value: string;
  unit?: string;
  change?: string;
}

export interface KPI {
  label: string;
  q1?: string;
  q2?: string;
  q3?: string;
  q4?: string;
  unit?: string;
}

export interface IRDocument {
  id: string;
  title: string;
  date: string;
  type: "お知らせ" | "プレスリリース" | "法定公告";
  summary?: string;
  period?: string;
  pdfUrl?: string;
  htmlUrl?: string;
}

export interface IRFAQ {
  question: string;
  answer: string;
}

// 免責事項
export interface IRDisclaimer {
  title: string;
  items: string[];
}

// 会社情報リンク
export interface IRCompanyLink {
  title: string;
  description: string;
  href: string;
  icon: string;
}

// 会社基本情報
export const company: CompanyInfo = {
  name: "株式会社TECMAH",
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
    title: "株式会社TECMAH | AI・データ活用とPdM支援の伴走パートナー",
    description: "株式会社TECMAHは、生成AIとプロダクトマネジメントの専門知識で企業のデジタル変革を支援します。Azure OpenAI導入からPdM伴走、新規事業開発まで包括的にサポート。",
    keywords: ["AI", "データ活用", "プロダクトマネジメント", "DX", "コンサルティング", "生成AI", "Azure OpenAI"]
  },
  services: {
    title: "サービス一覧 | 株式会社TECMAH - AI・データ活用支援",
    description: "TECMAHの3つの専門サービス：生成AI・データ活用支援、PdM/PM伴走、新規事業・DXコンサルティング。お客様の事業成長を包括的に支援します。",
    keywords: ["サービス", "AI導入", "プロダクトマネジメント", "DXコンサルティング"]
  },
  about: {
    title: "会社概要 | 株式会社TECMAH - AI・データ活用とPdM支援",
    description: "株式会社TECMAHの会社概要。代表者情報、企業理念、事業内容をご紹介。AI時代の伴走パートナーとして、企業のデジタル変革を専門的に支援しています。",
    keywords: ["会社概要", "企業情報", "代表者", "松浦賢孝"]
  },
  "case-studies": {
    title: "導入事例・成功事例 | 株式会社TECMAH - AI・データ活用支援実績",
    description: "TECMAHの支援実績をご紹介。教育SaaS、製造業、小売業、AIスタートアップなど、様々な業界でのAI・データ活用、プロダクトマネジメント支援の成功事例。",
    keywords: ["導入事例", "成功事例", "実績", "AI導入", "データ活用事例"]
  },
  contact: {
    title: "お問い合わせ・無料相談予約 | 株式会社TECMAH",
    description: "株式会社TECMAHへのお問い合わせ・無料相談のお申し込み。初回60分のオンライン相談は無料。AI・データ活用、プロダクトマネジメント支援のご相談はお気軽に。",
    keywords: ["お問い合わせ", "無料相談", "相談予約", "コンタクト"]
  },
  profile: {
    title: "松浦 賢孝 - Profile | PdM / AI Engineer | 株式会社TECMAH",
    description: "松浦賢孝の経歴書。AI技術を活用した新規事業開発やPdM/AEとしてのプロジェクト推進に強みを持ち、技術とビジネスの両面から成果を生み出す。10年以上の開発・マネジメント経験。",
    keywords: ["松浦賢孝", "経歴書", "PdM", "AI Engineer", "プロダクトマネージャー", "職務経歴書"]
  },
  ir: {
    title: "投資家向け情報・法定公告 | 株式会社TECMAH",
    description: "株式会社TECMAHの法定公告（決算公告）および投資家向け情報を掲載しています。未上場企業のため、決算短信・有価証券報告書等の上場企業向け開示資料は作成していません。",
    keywords: ["IR", "投資家向け情報", "法定公告", "決算公告", "会社情報"]
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

// IR情報
export const irHighlights: IRHighlight[] = [
  {
    period: "2025年",
    label: "設立年",
    value: "2025",
    unit: "年"
  },
  {
    period: "2025年",
    label: "代表取締役",
    value: "松浦 賢孝"
  }
];

export const irKPIs: KPI[] = [
  {
    label: "売上高",
    unit: "万円"
  },
  {
    label: "営業利益",
    unit: "万円"
  },
  {
    label: "従業員数",
    unit: "名"
  }
];

export const irDocuments: IRDocument[] = [
  {
    id: "2025-12-ir-page",
    title: "投資家向け情報ページを公開しました",
    date: "2025-12-28",
    type: "お知らせ",
    summary: "当社の法定公告および投資家向け情報を掲載するIRページを公開いたしました。"
  },
  {
    id: "2025-07-establishment",
    title: "株式会社TECMAH 設立のお知らせ",
    date: "2025-07-01",
    type: "プレスリリース",
    summary: "AI・データ活用とプロダクトマネジメント支援を専門とする株式会社TECMAHを設立いたしました。北海道札幌市を拠点に、全国の企業向けDX支援事業を開始します。"
  },
  {
    id: "2025-07-service-start",
    title: "DX支援事業を開始しました",
    date: "2025-07-01",
    type: "お知らせ",
    summary: "生成AI・データ活用支援、PdM/PM伴走、新規事業・DXコンサルティングの3つのサービスを提供開始いたしました。"
  }
];

export const irFAQs: IRFAQ[] = [
  {
    question: "会社の事業内容について教えてください",
    answer: "当社は、AI・データ活用支援、プロダクトマネジメント支援、新規事業・DXコンサルティングを主要事業として、企業のデジタル変革を伴走支援しています。詳細は<a href=\"/services\" class=\"link\">サービスページ</a>をご覧ください。"
  },
  {
    question: "財務情報はどこで確認できますか",
    answer: "当社は2025年7月に設立されたばかりのため、第1期の決算公告は2026年に公開予定です。公開され次第、このページの「法定公告」セクションに掲載いたします。"
  },
  {
    question: "IRに関するお問い合わせはどこに連絡すればよいですか",
    answer: `IRに関するお問い合わせは、<a href="mailto:info@tecmah.com" class="link">info@tecmah.com</a> までご連絡ください。`
  },
  {
    question: "上場予定はありますか",
    answer: "現時点では上場予定はございません。今後の事業展開により検討してまいります。"
  },
  {
    question: "決算短信や有価証券報告書はありますか",
    answer: "当社は未上場企業のため、決算短信・有価証券報告書などの上場企業向け開示資料は作成していません。法定公告（決算公告）はこのページで公開いたします。"
  }
];

// IR免責事項
export const irDisclaimer: IRDisclaimer = {
  title: "免責事項",
  items: [
    "本ページは情報提供を目的として作成しており、投資勧誘を目的としたものではありません。",
    "記載内容は作成日時点の情報に基づいており、予告なく変更される場合があります。",
    "将来の見通しに関する記述が含まれる場合、実際の結果は外部環境等の要因により変動する可能性があります。",
    "当社は未上場企業のため、決算短信・有価証券報告書などの上場企業向け開示資料は作成していません。",
    "投資判断はご自身の責任において行ってください。"
  ]
};

// 会社情報リンク
export const irCompanyLinks: IRCompanyLink[] = [
  {
    title: "会社の取り組み",
    description: "2025年下半期の振り返りと2026年事業計画。中長期ロードマップをご覧いただけます。",
    href: "/company-update",
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>`
  },
  {
    title: "会社概要",
    description: "会社の基本情報、設立、所在地、代表者情報をご覧いただけます。",
    href: "/about",
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>`
  },
  {
    title: "事業内容・サービス",
    description: "AI・データ活用支援、PdM/PM伴走、DXコンサルティングの詳細をご覧いただけます。",
    href: "/services",
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>`
  },
  {
    title: "代表者プロフィール",
    description: "代表取締役 松浦 賢孝の経歴、専門分野をご覧いただけます。",
    href: "/profile",
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>`
  }
];

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