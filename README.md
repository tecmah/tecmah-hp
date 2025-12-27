# 株式会社TECMAH - Webサイト

Astro + TypeScript + Tailwind CSS で構築されたコーポレートサイト

## プロジェクト概要

株式会社TECMAHのコーポレートサイト。Jekyll（Ruby）から Astro（TypeScript）に移行し、GitHub Pagesでの静的デプロイを実現。

### 特徴

- **ダークテーマ**: 黒・グレー基調のデザイン
- **統一コンテンツ管理**: TypeScriptベースのコンテンツ管理システム
- **静的サイト生成**: Astroによる最適化
- **TypeScript**: 型安全な開発環境
- **レスポンシブ**: モバイルファーストデザイン
- **SEO最適化**: メタタグ、構造化データ対応
- **SVGアイコン**: アイコンによる表現
- **経歴書LP**: スクロールアニメーション付きのインタラクティブな経歴書ページ（`/profile`）

## 技術スタック

| 技術 | バージョン | 用途 |
|------|------------|------|
| **Astro** | 4.x | 静的サイトジェネレーター |
| **TypeScript** | 5.x | 型安全な開発 |
| **Tailwind CSS** | 4.x | ユーティリティファーストCSS |
| **GitHub Pages** | - | 静的サイトホスティング |
| **GitHub Actions** | - | CI/CD自動デプロイ |

## プロジェクト構造

```
tecmah-hp/
├── src/
│   ├── components/          # 再利用可能コンポーネント
│   │   ├── Header.astro     # ナビゲーション
│   │   ├── Hero.astro       # メインビジュアル
│   │   ├── Services.astro   # サービス紹介
│   │   └── ...
│   ├── data/                # コンテンツ管理
│   │   ├── content.ts       # 統一コンテンツ管理ファイル
│   │   └── resume.ts        # 経歴書データ管理
│   ├── layouts/             # レイアウトテンプレート
│   │   └── Layout.astro     # ベースレイアウト
│   ├── pages/               # ページファイル
│   │   ├── index.astro      # ホームページ
│   │   ├── about.astro      # 会社概要
│   │   ├── services/        # サービス詳細ページ
│   │   │   ├── ai-data.astro          # AI・データ活用
│   │   │   ├── product-management.astro # PdM/PM伴走
│   │   │   └── dx-consulting.astro    # DXコンサルティング
│   │   ├── case-studies/    # 事例ページ
│   │   │   ├── [slug].astro # 個別事例詳細
│   │   │   └── index.astro  # 事例一覧
│   │   ├── contact.astro    # お問い合わせ
│   │   └── profile.astro    # 経歴書LP
│   └── styles/              # スタイルファイル
│       └── global.css       # ダークテーマCSS
├── public/                  # 静的アセット
│   ├── images/              # 画像ファイル
│   ├── logo.svg             # ロゴ
│   └── favicon.svg          # ファビコン
├── .github/workflows/       # GitHub Actions
│   └── deploy.yml           # デプロイ設定
├── astro.config.mjs         # Astro設定
├── package.json             # 依存関係
└── tsconfig.json            # TypeScript設定
```

## 開発環境セットアップ

### 前提条件

- Node.js 18.x 以上
- npm または yarn

### 1. 依存関係インストール

```bash
npm install
```

### 2. 開発サーバー起動

```bash
npm run dev
```

ブラウザで `http://localhost:4321` にアクセス

### 3. プロダクションビルド

```bash
npm run build
```

### 4. プレビュー（ビルド結果確認）

```bash
npm run preview
```

## デザインシステム

### ダークテーマ

```css
:root {
  /* ダークカラーパレット */
  --primary: #00d4aa;        /* TECMAHグリーン */
  --primary-dark: #00b894;
  --secondary: #6366f1;      /* ブルー */
  --accent: #8b5cf6;         /* パープル */
  --text: #ffffff;           /* ホワイト */
  --text-muted: #a1a1aa;     /* グレー */
  --background: #0a0a0b;     /* ダークブラック */
  --surface: #18181b;        /* ダークグレー */
  --surface-light: #27272a;  /* ライトダークグレー */
  --border: #3f3f46;         /* ボーダー */
}
```

### グラデーション

- **Primary**: `linear-gradient(135deg, #00d4aa 0%, #6366f1 100%)`
- **Secondary**: `linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)`
- **Hero**: `linear-gradient(135deg, #18181b 0%, #27272a 100%)`

### タイポグラフィ

- **メインフォント**: Inter, Noto Sans JP
- **見出し**: 700-800 weight
- **本文**: 400-500 weight
- **レスポンシブ**: `clamp()` 関数で可変サイズ
- **カラー**: 白文字ベースでコントラスト最適化

## コンテンツ管理システム

### 統一コンテンツ管理 (`src/data/content.ts`)

全サイトのコンテンツをTypeScriptで一元管理。

```typescript
// 会社基本情報
export const company: CompanyInfo = {
  name: "株式会社TECMAH",
  tagline: "AI・データ活用・PdM/PM支援",
  representative: "松浦 賢孝",
  established: 2025,
  address: {
    full: "〒060-0062 北海道札幌市中央区南二条西5丁目31-1 RMBld.701"
  },
  contact: {
    email: "info@tecmah.com"
  }
};

// サービス情報
export const services: ServiceInfo[] = [
  {
    id: "ai-data",
    title: "生成AI・データ活用支援",
    description: "生成AIの活用構想からPoC、運用ガバナンスまで伴走",
    features: [
      "Azure OpenAI / GPT-4o導入支援",
      "PoC構築・運用体制整備",
      "MLOps基盤構築・運用",
      "プロンプト設計・評価・改善"
    ]
  },
  // ... 他のサービス
];

// 実績事例
export const caseStudies: CaseStudy[] = [
  {
    title: "教育SaaS企業",
    result: { metric: "学習継続率", value: "+18%" }
  },
  // ... 他の事例
];
```

### コンテンツ活用

```astro
---
// コンポーネントでの使用例
import { company, services, messages } from '../data/content.ts';
---

<h1>{messages.hero.title}</h1>
<p>{company.description}</p>

{services.map(service => (
  <div class="card">
    <h3>{service.title}</h3>
    <p>{service.description}</p>
  </div>
))}
```

### 制約・集約できなかった要素

#### 1. フォームのプレースホルダー

```typescript
// 集約困難（HTMLの制約）
placeholder="株式会社〇〇"  // contact.astro内
placeholder="田中 太郎"    // 直接HTML属性
```

**理由**: Astroコンポーネント内でのHTML属性は、動的な日本語プレースホルダーとの相性が悪く、可読性を優先。

#### 2. ページタイトル（Layout）

```astro
<!-- 部分的に集約困難 -->
<Layout title="生成AI・データ活用支援 | 株式会社TECMAH">
```

**理由**: 各ページ固有のSEOタイトルは`pageMeta`で管理しているが、Layoutコンポーネントでの直接指定も併用。

#### 3. SVGアイコン（インライン）

```typescript
// 集約済み（content.ts内）
icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor">...</svg>`
```

**対応済み**: アイコンは文字列として`content.ts`に集約完了。

### 集約状況

| 要素 | 集約状況 | 管理場所 |
|------|----------|----------|
| 会社情報 | 完了 | `content.ts` → `company` |
| サービス情報 | 完了 | `content.ts` → `services` |
| 実績事例 | 完了 | `content.ts` → `caseStudies` |
| メッセージ・文言 | 完了 | `content.ts` → `messages` |
| ページメタ情報 | 完了 | `content.ts` → `pageMeta` |
| 経歴書データ | 完了 | `resume.ts` → `personalInfo`, `workExperiences`, etc. |
| フォームラベル | 部分的 | 各ページ |
| プレースホルダー | 個別管理 | 各ページ |

## デプロイ

### GitHub Pages自動デプロイ

1. **Push時**: `main`ブランチへのPushで自動デプロイ
2. **GitHub Actions**: `.github/workflows/deploy.yml`で設定
3. **公開URL**: `https://www.tecmah.com/`
4. **カスタムドメイン**: CNAMEファイルで設定済み

### 手動デプロイ

```bash
# ビルド
npm run build

# distフォルダをGitHub Pagesに手動アップロード
```

## wrkflw - ローカルワークフロー実行（オプション）

**注意**: wrkflwはオプションのツールです。GitHub Actionsが正常動作している場合は不要です。

### インストール（オプション）

```bash
npm install -g wrkflw
```

### 使用方法

```bash
# 基本実行
wrkflw run .github/workflows/deploy.yml

# デバッグモード
wrkflw run .github/workflows/deploy.yml --debug
```

### 詳細情報

詳しい使用方法は [`local-workflow.md`](./local-workflow.md) を参照してください。

## カスタマイズガイド

### 新しいページの追加

1. **ページメタ情報を追加**

```typescript
// src/data/content.ts
export const pageMeta = {
  // ... 既存のページ
  "new-page": {
    title: "新しいページ | 株式会社TECMAH",
    description: "新しいページの説明文",
    keywords: ["キーワード1", "キーワード2"]
  }
};
```

2. **ページファイル作成**

```astro
---
// src/pages/new-page.astro
import Layout from '../layouts/Layout.astro';
import { pageMeta } from '../data/content.ts';
---

<Layout title={pageMeta["new-page"].title}>
  <main class="pt-20">
    <section class="bg-zinc-900 py-20">
      <div class="container">
        <h1 class="text-4xl font-bold text-white">新しいページ</h1>
      </div>
    </section>
  </main>
</Layout>
```

3. **ナビゲーションに追加**

```typescript
// src/data/content.ts
export const navigation = {
  main: [
    { title: "ホーム", href: "/" },
    { title: "サービス", href: "/services" },
    { title: "新しいページ", href: "/new-page" }, // 追加
    // ...
  ]
};
```

### 新しいサービスの追加

```typescript
// src/data/content.ts
export const services: ServiceInfo[] = [
  // ... 既存のサービス
  {
    id: "new-service",
    title: "新サービス",
    subtitle: "サブタイトル",
    description: "サービスの説明文",
    features: [
      "機能1",
      "機能2",
      "機能3"
    ],
    href: "/services/new-service",
    icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor">...</svg>`
  }
];
```

### 新しい実績事例の追加

```typescript
// src/data/content.ts
export const caseStudies: CaseStudy[] = [
  // ... 既存の事例
  {
    id: "new-case",
    title: "新規事例",
    subtitle: "事例のサブタイトル",
    industry: "業界名",
    description: "事例の詳細説明",
    result: {
      metric: "改善指標",
      value: "数値",
      description: "結果の説明"
    },
    icon: `<svg>...</svg>`
  }
];
```

### コンポーネントでのコンテンツ活用

```astro
---
// src/components/NewComponent.astro
import { company, services } from '../data/content.ts';

export interface Props {
  serviceId?: string;
}

const { serviceId } = Astro.props;
const service = serviceId ? services.find(s => s.id === serviceId) : null;
---

<div class="card bg-zinc-800 p-8 rounded-2xl">
  {service ? (
    <>
      <h2 class="text-2xl font-bold text-white mb-4">{service.title}</h2>
      <p class="text-gray-300">{service.description}</p>
    </>
  ) : (
    <h2 class="text-2xl font-bold text-white">{company.name}</h2>
  )}
  <slot />
</div>
```

## 経歴書ページ（/profile）

代表取締役の経歴書をLP風の1ページで表示するインタラクティブなページ。

### URL

- **開発環境**: `http://localhost:4321/profile`
- **本番環境**: `https://www.tecmah.com/profile`

### ページ構成

| セクション | 説明 |
|------------|------|
| **Hero** | フルスクリーンHero、プロフィール画像、FluidBackground |
| **Metrics** | 経験年数・プロジェクト数などのカウントアップアニメーション |
| **About** | 4つの強みをカード形式で表示 |
| **Skills** | 6カテゴリのスキルタグ（言語、フレームワーク、クラウド、AI/ML、ドメイン、マネジメント） |
| **Featured Projects** | 注目プロジェクト4件をカード形式で表示 |
| **Career Timeline** | 縦型タイムラインで職務経歴を表示 |
| **Contact CTA** | お問い合わせへの誘導 |

### 特徴

- **スクロールアニメーション**: Intersection Observer APIによるフェードイン・スライドイン
- **カウントアップアニメーション**: メトリクスの数値がスクロール時にアニメーション
- **タイムライン表示**: 職務経歴を視覚的に表示（モバイル/デスクトップ対応）
- **グラスモーフィズム**: カードにblur効果を適用
- **アクセシビリティ対応**: `prefers-reduced-motion` でアニメーション無効化

### データ管理（`src/data/resume.ts`）

```typescript
// 個人情報
export const personalInfo: PersonalInfo = {
  name: "松浦 賢孝",
  title: "PdM / AI Engineer",
  tagline: "技術とビジネスの両面から成果を生み出す",
  // ...
};

// スキルカテゴリ
export const skillCategories: SkillCategory[] = [
  {
    name: "プログラミング言語",
    skills: ["TypeScript", "Python", "Ruby", "Swift", ...]
  },
  // ...
];

// 職務経歴
export const workExperiences: WorkExperience[] = [
  {
    company: "株式会社 古田土経営",
    period: "2025年10月～現在",
    role: "PM / 業務コンサルタント",
    projectTitle: "中小企業向け経営計画モデル設計支援",
    highlights: ["経営者支援プロセスの可視化", ...],
    technologies: ["Python", "TypeScript", "AWS SageMaker", ...]
  },
  // ...
];

// 注目プロジェクト
export const featuredProjects: FeaturedProject[] = [
  {
    title: "インタラクティブミラー開発",
    company: "株式会社Sapeet",
    achievement: "世界初のAIインタラクティブミラー",
    // ...
  },
  // ...
];
```

### カスタマイズ

#### 経歴情報の更新

`src/data/resume.ts` を編集：

```typescript
// 新しい職歴を追加
export const workExperiences: WorkExperience[] = [
  {
    id: "new-company-2025",
    company: "新しい会社名",
    period: "2025年12月～現在",
    duration: "現在進行中",
    role: "役割",
    projectTitle: "プロジェクト名",
    description: "プロジェクトの説明",
    highlights: ["成果1", "成果2"],
    technologies: ["技術1", "技術2"],
    isFeatured: true  // 注目プロジェクトとして表示
  },
  // ... 既存の経歴
];
```

#### スキルの追加

```typescript
export const skillCategories: SkillCategory[] = [
  {
    name: "プログラミング言語",
    icon: "code",
    skills: ["TypeScript", "Python", "Ruby", "NewSkill"]  // 追加
  },
  // ...
];
```

### アニメーション制御

```css
/* スクロールアニメーションの調整 */
.animate-on-scroll {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.animate-on-scroll.visible {
  opacity: 1;
  transform: translateY(0);
}

/* アニメーション無効化（アクセシビリティ） */
@media (prefers-reduced-motion: reduce) {
  .animate-on-scroll {
    opacity: 1;
    transform: none;
    transition: none;
  }
}
```

## トラブルシューティング

### よくある問題

#### 1. ビルドエラー

```bash
Error: Failed to resolve import
```

**解決策**: 
- パスの確認（相対パス/絶対パス）
- TypeScriptの型定義確認

#### 2. CSS適用されない

**解決策**:
- TailwindのPurge設定確認
- CSSの読み込み順序確認

#### 3. 画像が表示されない

**解決策**:
- publicフォルダ内の配置確認
- パスの確認（baseURL考慮）

### デバッグコマンド

```bash
# 詳細ログでビルド
npm run build -- --verbose

# 型チェック
npx tsc --noEmit

# ビルドテスト
npm run test:build

# 開発サーバー詳細ログ
npm run dev -- --verbose
```

## パフォーマンス

### Lighthouse スコア目標

- **Performance**: 60+
- **Accessibility**: 90+
- **Best Practices**: 95+
- **SEO**: 95+

#### Lighthouse スコア測定フロー

- **手動測定（Chrome DevTools）**: Chromeで対象ページを開き、DevTools > Lighthouse > `Desktop` プロファイルを選択して「Analyze page load」を実行。`Performance`/`Accessibility` を個別に確認したい場合はカテゴリを切り替えて再実行します。
- **手動測定（Lighthouse CLI）**: 公開済みURLを対象にする場合は `npx lighthouse https://www.tecmah.com --view --preset=desktop` を実行。レポートがブラウザで開き、GitHubにアップロードせずに素早く数値を把握できます。

#### 自動測定（GitHub Actions）

- `.github/workflows/lighthouse-ci.yml` で **Lighthouse CI** ワークフローを定義。`main` ブランチへの push と Pull Request で自動実行され、`npm run build` の成果物に対して `npx lhci autorun` を流します。
- スコアが目標値を下回るとジョブが失敗し、PRのステータスで検知できます。詳細グラフはワークフローの「Run Lighthouse CI」ステップのログから確認します。
- 追加検証やローカルデバッグを行いたい場合は `wrkflw run .github/workflows/lighthouse-ci.yml` で同じ処理をそのまま再現できます。

#### ローカル測定コマンド

```bash
npm run build
npx lhci autorun --config=./lighthouserc.json
```

`lhci autorun` が `dist/` を起動して複数ページを連続計測します。CI と同じ設定を使うことで数値の再現性を担保できます。

#### 設定ファイル (`lighthouserc.json`)

ルート直下の `lighthouserc.json` で対象URLやしきい値を共通管理しています。

```json
{
  "ci": {
    "collect": {
      "staticDistDir": "./dist",
      "url": ["/", "/about", "/services/ai-data", "/case-studies", "/contact"],
      "numberOfRuns": 3,
      "settings": {
        "preset": "desktop",
        "emulatedFormFactor": "desktop",
        "throttlingMethod": "devtools"
      }
    },
    "assert": {
      "assertions": {
        "categories:performance": ["error", {"minScore": 0.6}],
        "categories:accessibility": ["error", {"minScore": 0.9}],
        "categories:best-practices": ["error", {"minScore": 0.95}],
        "categories:seo": ["error", {"minScore": 0.95}]
      }
    },
    "upload": {
      "target": "temporary-public-storage"
    }
  }
}
```

- `collect.staticDistDir` … `npm run build` で生成された `dist/` をホストし、主要5ページを3回ずつ計測。
- `assert.assertions` … READMEで定義した95点ラインをそのまま最小スコアに使用。基準を変えたい場合はここを編集します。
- `upload.target` … GitHub Actions 上では一時公開ストレージにアップロードし、ログに共有リンクを出力します（追加のシークレット設定不要）。
- `collect.settings` … `preset: "desktop"` とデスクトップ向けのエミュレーション/スロットリング方法を固定し、再現性を担保します。

### 最適化施策

1. **画像最適化**: WebP形式、適切なサイズ
2. **フォント最適化**: preload、font-display
3. **JavaScript最小化**: 必要最小限のJS
4. **CSS最適化**: 未使用スタイル削除

## サポート・お問い合わせ

### 技術的なお問い合わせ

- **GitHub Issues**: バグ報告・機能要望
- **Email**: info@tecmah.com

### 営業・ビジネスお問い合わせ

- **無料相談**: [お問い合わせフォーム](https://www.tecmah.com/contact)
- **サービス詳細**: [サービスページ](https://www.tecmah.com/services)

---

## ライセンス

© 2025 株式会社TECMAH. All rights reserved.

---
