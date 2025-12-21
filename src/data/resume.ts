// 経歴書データ - 松浦 賢孝
// Resume/CV data for modern profile page

export interface PersonalInfo {
  name: string;
  nameKana: string;
  title: string;
  subtitle: string;
  age: number;
  location: string;
  email: string;
  phone: string;
  image: string;
  tagline: string;
}

export interface SkillCategory {
  name: string;
  icon: string;
  skills: string[];
}

export interface WorkExperience {
  id: string;
  company: string;
  period: string;
  duration: string;
  role: string;
  projectTitle: string;
  description: string;
  highlights: string[];
  technologies: string[];
  isFeatured?: boolean;
}

export interface FeaturedProject {
  id: string;
  title: string;
  company: string;
  description: string;
  technologies: string[];
  achievement: string;
  icon: string;
}

export interface Metric {
  value: string;
  label: string;
  icon: string;
}

export interface SelfPRPoint {
  title: string;
  description: string;
  icon: string;
}

// 個人情報
export const personalInfo: PersonalInfo = {
  name: "松浦 賢孝",
  nameKana: "マツウラ ヨシノリ",
  title: "PdM / AI Engineer",
  subtitle: "技術とビジネスの架け橋",
  age: 34,
  location: "北海道札幌市",
  email: "info@tecmah.com",
  phone: "070-8359-2530",
  image: "/images/ceo-profile.png",
  tagline: "AI技術を活用した新規事業開発やPdM/AEとしてのプロジェクト推進に強みを持ち、技術とビジネスの両面から成果を生み出す"
};

// 自己PRポイント
export const selfPRPoints: SelfPRPoint[] = [
  {
    title: "技術とビジネスの両面",
    description: "システム開発の全工程を見通せるだけでなく、Azure AIやOpenAI、RAGを活用したクラウドネイティブ開発やデータ解析で、業務効率化やプロダクトの価値向上に貢献。",
    icon: "code"
  },
  {
    title: "チームビルディング",
    description: "単なる開発者ではなく、「チームの力を最大限引き出し、成果を上げる」ことを意識したリーダーシップを発揮。プロジェクトマネジメントに力を入れています。",
    icon: "users"
  },
  {
    title: "生成AI実装力",
    description: "Azure OpenAI、GPT-4o、RAGなどの最新技術をビジネス要求に落とし込み、プロダクトマネジメント視点でスピーディに実装します。",
    icon: "ai"
  },
  {
    title: "フルリモート対応",
    description: "顧客やメンバーとの円滑なコミュニケーションを大切にし、「技術の力でビジネスを加速させる」ことを目指しています。",
    icon: "remote"
  }
];

// スキルカテゴリ
export const skillCategories: SkillCategory[] = [
  {
    name: "プログラミング言語",
    icon: "code",
    skills: ["TypeScript", "Python", "Ruby", "Swift", "Kotlin", "C#", "Java", "PHP", "SQL", "VB"]
  },
  {
    name: "フレームワーク",
    icon: "framework",
    skills: ["Rails", "React", "Node.js", "FastAPI", "Flask", "Laravel", "Angular", ".NET"]
  },
  {
    name: "クラウド / インフラ",
    icon: "cloud",
    skills: ["AWS", "Azure", "Firebase", "Docker", "SageMaker", "Lambda", "S3", "BigQuery"]
  },
  {
    name: "AI / ML",
    icon: "ai",
    skills: ["Azure OpenAI", "GPT-4o", "RAG", "LLM", "プロンプト設計", "機械学習", "音声認識"]
  },
  {
    name: "ドメイン知識",
    icon: "domain",
    skills: ["不動産", "会計", "保険", "EC", "教育", "ヘルスケア", "人材", "製造業"]
  },
  {
    name: "マネジメント",
    icon: "management",
    skills: ["PdM", "PM", "PMO", "アジャイル", "スクラム", "KPI設計", "チームビルディング"]
  }
];

// 職務経歴
export const workExperiences: WorkExperience[] = [
  {
    id: "kotasukeido-2025",
    company: "株式会社 古田土経営",
    period: "2025年10月～現在",
    duration: "現在進行中",
    role: "PM / 業務コンサルタント",
    projectTitle: "中小企業向け「経営計画 × 財務リテラシー」モデル設計支援",
    description: "経営者支援プロセスの全体像を整理し、意思決定ポイントを可視化。既存コンテンツ／帳票を棚卸しし、経営指標と現場アクションをつなぐ指標体系・アウトプット構成を設計。",
    highlights: [
      "経営者支援プロセスの可視化",
      "指標体系・アウトプット構成設計",
      "短期改善と中長期DX構想のロードマップ整理"
    ],
    technologies: ["Python", "TypeScript", "AWS SageMaker", "S3", "Lambda"],
    isFeatured: false
  },
  {
    id: "bakutan-2025",
    company: "株式会社bakutan",
    period: "2025年10月～現在",
    duration: "現在進行中",
    role: "Lead PM / データアナリスト",
    projectTitle: "人材領域におけるデータドリブンリテンション戦略の設計・施策立案",
    description: "大手人材サービス企業において、派遣スタッフの継続就業（リテンション）とマッチング精度の向上を目的としたデータ活用プロジェクト。",
    highlights: [
      "リテンション／マッチングに関する業務プロセス整理",
      "KPI／指標体系の設計",
      "改善施策と実行ロードマップの設計"
    ],
    technologies: ["Python", "TypeScript", "mastora", "AWS S3", "Lambda"],
    isFeatured: false
  },
  {
    id: "ripla-2025",
    company: "株式会社ripla",
    period: "2025年4月～2025年9月",
    duration: "6ヶ月",
    role: "PMO / SE",
    projectTitle: "AIを活用した教育プロダクトにおけるアダプティブドリルの改善",
    description: "教育サービス「Neoすらら」におけるアダプティブドリルおよび診断機能のAI活用設計・改修を担当。つまずき判定アルゴリズムの高度化、スキル構造の最適化を実施。",
    highlights: [
      "つまずきスキル判定アルゴリズム設計",
      "LLMを活用した個別最適化・ヒント提示機能の企画",
      "AWS SageMakerでのモデルファインチューニング"
    ],
    technologies: ["Python", "AWS SageMaker", "JupyterLab", "S3", "Lambda"],
    isFeatured: true
  },
  {
    id: "hmcomm-2025",
    company: "株式会社Hmcomm",
    period: "2025年2月～2025年5月",
    duration: "4ヶ月",
    role: "PM / SE",
    projectTitle: "音声データ解析による異常検知",
    description: "データ利活用に関わる経営・事業課題の解決。音声認識を中心としたアルゴリズムの開発とモジュール改修。",
    highlights: [
      "音声認識アルゴリズム開発",
      "データ環境の整備・構築",
      "AIモデルの開発支援"
    ],
    technologies: ["Python", "Flask", "FastAPI", "Linux"],
    isFeatured: true
  },
  {
    id: "sapeet-2024",
    company: "株式会社Sapeet",
    period: "2024年10月～2025年3月",
    duration: "6ヶ月",
    role: "PdM / AE",
    projectTitle: "インタラクティブミラー開発",
    description: "AIカメラレコメンドやフェイス・パーソナルカラー診断、ファッション診断など様々な機能を搭載した世界初のオリジナルインタラクティブミラー開発。Azure AI SearchとGPT-4oリアルタイムAPIを組み合わせたRAGパターンを実装。",
    highlights: [
      "Azure OpenAI + RAG構成の実装",
      "音声UIを通じたナレッジベースアクセス",
      "クラウドネイティブアーキテクチャ設計"
    ],
    technologies: ["Python", "TypeScript", "Node.js", "React", "Azure OpenAI", "Azure AI Search", "WebRTC"],
    isFeatured: true
  },
  {
    id: "algoage-2023",
    company: "株式会社Algoage",
    period: "2023年9月～2024年4月",
    duration: "9ヶ月",
    role: "PM / PMO",
    projectTitle: "AI新規事業創出",
    description: "AIで新規事業を作成。市場調査、予算確保、プロトタイプ構築からビジネスモデルの方向修正。シゴラクAIやチャットボット開発から運用、フェーズ拡大。",
    highlights: [
      "新規事業調査・有識者インタビュー",
      "PoC作成・機能整理",
      "Azure OpenAI + RAG活用"
    ],
    technologies: ["Python", "Azure OpenAI", "Azure AI Search", "RAG"],
    isFeatured: true
  },
  {
    id: "sunasterisk-2023",
    company: "株式会社Sun Asterisk",
    period: "2023年5月～2023年8月",
    duration: "3ヶ月",
    role: "PM / PMO",
    projectTitle: "睡眠ヘルスケアアプリケーション開発",
    description: "加速度・ジャイロセンサーを利用した睡眠ヘルスケアアプリケーション開発。オフショア開発でSleep Docを担当。",
    highlights: [
      "要件定義・設計・PJ管理",
      "オフショア開発マネジメント",
      "iOS/AppleWatch対応"
    ],
    technologies: ["Swift", "Ruby", "Firebase", "AWS", "Docker"],
    isFeatured: false
  },
  {
    id: "financie-2022",
    company: "株式会社フィナンシェ",
    period: "2022年6月～2023年3月",
    duration: "9ヶ月",
    role: "SE",
    projectTitle: "フィナンシェ事業に関するサーバーサイド開発",
    description: "NFT事業、フィナンシェ事業に関するサーバーサイド開発。会社独自トークンや決済等の実装、マイクロサービスのAPI開発。",
    highlights: [
      "独自トークン・決済システム実装",
      "マイクロサービスAPI開発",
      "Rails 7による開発"
    ],
    technologies: ["Ruby", "Rails 7", "PostgreSQL", "AWS", "Docker"],
    isFeatured: false
  },
  {
    id: "uuum-2021",
    company: "UUUM株式会社",
    period: "2021年7月～2022年5月",
    duration: "11ヶ月",
    role: "PM / PMO",
    projectTitle: "動画クリエイター向けプロジェクト実行支援",
    description: "予算、実績を管理する社内システム開発。事業部との要件定義、課題の整理、会計WebサービスとのAPI連携。",
    highlights: [
      "予実管理システム開発",
      "会計API連携",
      "業務改善提案"
    ],
    technologies: ["Ruby", "Rails 6", "PostgreSQL", "AWS", "Docker"],
    isFeatured: false
  },
  {
    id: "ace-2021",
    company: "株式会社ACE",
    period: "2021年4月～2021年7月",
    duration: "3ヶ月",
    role: "SE",
    projectTitle: "Android / iOS向けチャットゲームアプリ",
    description: "モバイルアプリケーション開発。要件定義から開発環境の整備、ベンダーコントロールまで担当。",
    highlights: [
      "Android/iOSアプリ開発",
      "開発環境整備",
      "クライアント対応"
    ],
    technologies: ["Kotlin", "Swift", "Firebase"],
    isFeatured: false
  },
  {
    id: "nadja-2020",
    company: "NADJA株式会社",
    period: "2020年8月～2021年3月",
    duration: "8ヶ月",
    role: "CTO / PM",
    projectTitle: "不動産系Webアプリ、スマホアプリ",
    description: "オフショア開発。新規不動産系送客Webアプリ、スマホアプリ、対話型AI受付会話システムの開発。CTO兼PMとしてディレクション全般を担当。",
    highlights: [
      "CTO兼PM担当",
      "オフショア開発管理",
      "対話型AI受付システム開発"
    ],
    technologies: ["PHP", "Laravel", "Angular", "Kotlin", "Swift", "AWS", "MySQL", "Docker"],
    isFeatured: false
  },
  {
    id: "nextinnovation-2019",
    company: "ネクストイノベーション株式会社",
    period: "2019年5月～2020年7月",
    duration: "14ヶ月",
    role: "SE",
    projectTitle: "薬剤販売Webシステム",
    description: "医療系システムのガイドラインに沿ったシステム設計・開発。新規身元確認システムのAPI設計から全開発を担当。",
    highlights: [
      "医療系ガイドライン準拠設計",
      "身元確認システム開発",
      "スクラム開発"
    ],
    technologies: ["Ruby", "Rails", "AWS", "MySQL", "Docker"],
    isFeatured: false
  },
  {
    id: "bulb-2018",
    company: "BULB株式会社",
    period: "2018年8月～2019年4月",
    duration: "10ヶ月",
    role: "SE",
    projectTitle: "シェアリングエコノミーWebシステム開発",
    description: "シェアリングエコノミーサービスの開発、改修。詳細設計からIssue管理、Cloud9環境構築を担当。",
    highlights: [
      "シェアリングサービス開発",
      "Cloud9環境構築",
      "顧客獲得プレゼン"
    ],
    technologies: ["Ruby", "Rails", "AWS", "MySQL"],
    isFeatured: false
  },
  {
    id: "technopro-2017",
    company: "株式会社テクノプロ・エンジニアリング",
    period: "2017年6月～2018年7月",
    duration: "13ヶ月",
    role: "SE",
    projectTitle: "官庁系水道顧客管理システム",
    description: "官庁系水道顧客管理システムのリプレース及び改修作業。改元対応を一人で担当。UI自動操作ツールによる大規模テスト自動化を実施。",
    highlights: [
      "改元対応を単独で完了",
      "テスト自動化による効率化",
      "業務改善提案"
    ],
    technologies: ["Delphi", "Pascal", "Oracle"],
    isFeatured: false
  },
  {
    id: "asianstream-2016",
    company: "AsianStream株式会社",
    period: "2016年6月～2017年4月",
    duration: "11ヶ月",
    role: "SE",
    projectTitle: "保険会社用ペーパーレスソフト / RFIDタグ管理システム",
    description: "保険会社用ペーパーレスソフト開発（アジャイル開発）およびRFIDタグ運用管理ソフト開発・保守。",
    highlights: [
      "アジャイル開発運用",
      "組込系開発",
      "タブレットアプリ開発"
    ],
    technologies: ["C#", ".NET", "C++", "Kotlin", "Oracle", "SQL Server"],
    isFeatured: false
  },
  {
    id: "nsfuture-2014",
    company: "株式会社エヌエスフューチャー",
    period: "2014年10月～2016年5月",
    duration: "1年8ヶ月",
    role: "TL / SL",
    projectTitle: "通信会社受付システムの設計・開発・保守",
    description: "通信会社受付システムの設計・開発・保守。保守からの障害解析を経て設計・開発チームへ移行。全国の顧客データを使用した大規模システム。",
    highlights: [
      "保守→設計・開発チーム移行",
      "障害解析・業務改善",
      "チームリーダーとして20名統括"
    ],
    technologies: ["Java", "VB", "SQL", "bash", "Oracle", "JSP", "Tomcat"],
    isFeatured: false
  }
];

// 注目プロジェクト
export const featuredProjects: FeaturedProject[] = [
  {
    id: "interactive-mirror",
    title: "インタラクティブミラー開発",
    company: "株式会社Sapeet",
    description: "Azure AI SearchとGPT-4oリアルタイムAPIを組み合わせたRAGパターンを実装し、音声UIを通じてナレッジベースへのアクセスを可能にするアプリケーション。",
    technologies: ["Azure OpenAI", "GPT-4o", "RAG", "WebRTC", "React"],
    achievement: "世界初のAIインタラクティブミラー",
    icon: "mirror"
  },
  {
    id: "adaptive-drill",
    title: "AIアダプティブドリル改善",
    company: "株式会社ripla",
    description: "教育サービス「Neoすらら」におけるつまずき判定アルゴリズムの高度化とLLMを活用した個別最適化機能の企画・実装。",
    technologies: ["Python", "AWS SageMaker", "LLM", "機械学習"],
    achievement: "学習継続率18%向上",
    icon: "education"
  },
  {
    id: "voice-anomaly",
    title: "音声解析異常検知システム",
    company: "株式会社Hmcomm",
    description: "音声認識を中心としたアルゴリズムの開発とデータ環境の整備・構築。AIモデルの開発支援。",
    technologies: ["Python", "Flask", "FastAPI", "音声認識"],
    achievement: "判定時間50%短縮",
    icon: "audio"
  },
  {
    id: "ai-business",
    title: "AI新規事業創出",
    company: "株式会社Algoage",
    description: "市場調査からPoC作成、ビジネスモデルの方向修正まで。シゴラクAIやチャットボット開発から運用まで一貫して担当。",
    technologies: ["Azure OpenAI", "RAG", "Python"],
    achievement: "新規事業の立ち上げ成功",
    icon: "rocket"
  }
];

// メトリクス
export const metrics: Metric[] = [
  {
    value: "10+",
    label: "年の経験",
    icon: "calendar"
  },
  {
    value: "15+",
    label: "プロジェクト",
    icon: "folder"
  },
  {
    value: "20+",
    label: "技術スタック",
    icon: "stack"
  },
  {
    value: "4",
    label: "担当役割",
    icon: "role"
  }
];

// 得意分野
export const specialties = {
  fields: ["Webアプリケーション開発", "システム設計", "データ解析"],
  technologies: ["TypeScript", "Python", "Ruby", "Rails", "Swift", "C#", "Java", "PHP", "SQL", "VB"],
  domains: ["Webシステム", "モバイルアプリケーション", "不動産業務", "会計業務", "保険業務", "EC", "インフラ構築"]
};

