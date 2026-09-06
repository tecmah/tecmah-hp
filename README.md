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
- **法定公告・IR の分離**: 電子公告（`/koukoku`）と投資家向け情報（`/ir`）を分け、ビルド時に到達性を検証

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
│   │   ├── koukoku.ts       # 電子公告（法定公告）一覧
│   │   ├── kessan-fy1.ts    # 第1期 決算公告データ（URL固定・変更禁止）
│   │   ├── kessan-2025.ts   # 第1期 半期報告（参考資料）データ
│   │   └── ceo-profile.ts   # 代表者紹介データ（/about で使用）
│   ├── layouts/             # レイアウトテンプレート
│   │   └── Layout.astro     # ベースレイアウト
│   ├── pages/               # ページファイル
│   │   ├── index.astro      # ホームページ
│   │   ├── about.astro      # 会社概要
│   │   ├── services/        # サービス詳細ページ
│   │   │   ├── ai-data.astro          # AI・データ活用
│   │   │   ├── product-management.astro # PdM/PM伴走
│   │   │   └── dx-consulting.astro    # DXコンサルティング
│   │   ├── case-studies.astro    # 事例一覧
│   │   ├── case-studies/    # 事例ページ
│   │   │   └── [slug].astro # 個別事例詳細
│   │   ├── contact.astro    # お問い合わせ
│   │   ├── privacy.astro    # プライバシーポリシー
│   │   ├── koukoku.astro    # 電子公告（法定公告の入口）
│   │   ├── ir.astro         # 投資家向け情報（IR）
│   │   ├── ir/kessan/fy1.astro   # 第1期 決算公告（2031-08-19 まで URL 固定）
│   │   └── ir/kessan/2025.astro  # 第1期 半期報告（参考資料）
│   └── styles/              # スタイルファイル
│       └── global.css       # ダークテーマCSS
├── scripts/                 # ビルド時チェック
│   └── verify-koukoku.mjs   # 電子公告の到達性ガード（postbuild）
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

## 法定公告 / IR / 個人ページの区分

会社サイトに置くページを、法的な性質で 3 つに分けている。混ぜないこと。

| 区分 | ページ | 性質 | 導線 |
|---|---|---|---|
| **法定公告（電子公告）** | `/koukoku` → `/ir/kessan/fy1` | 会社法 440条・939条・940条に基づく公告。営業的 CTA を置かない | トップのフッター「電子公告」、ヘッダー「IR情報」→ IR ページ内リンク |
| **投資家向け情報（IR）** | `/ir`（+ 参考資料 `/ir/kessan/2025`） | 任意開示（業績ハイライト・戦略・リスク・お知らせ） | ヘッダー「IR情報」、フッター「IR情報」 |
| **代表者紹介** | `/about` 内「代表者プロフィール」 | 会社概要の一部。個人事業・フリーランスの営業要素は載せない | 旧 `/profile` は廃止し `/about` へ redirect。公告・IR から個人ページへはリンクしない（ガードで検証） |

個人事業・家計等の個人コンテンツは会社サイトに掲載しない（Issue #24）。

削除済みページの転送方針:

| 旧URL | 対応 | 理由 |
|---|---|---|
| `/profile` | `/about` へ転送 | 内容を代表者紹介として統合したため、転送先に相当する情報がある |
| `/freelance-update` | 404（転送しない） | 個人事業の振り返り。会社サイトに転送先となる相当ページが無い |
| `/personal-update` | 404（転送しない） | 個人の家計・健康記録。会社サイトに載せる情報ではない |

なお GitHub Pages は 301 を返せないため、`/profile` の転送は Astro が生成する meta refresh ページによる。
検索評価の引き継ぎは限定的だが、旧URLは公開期間が短く実害は小さいと判断した。

### 電子公告の URL 固定ルール（Issue #22）

- 登記した公告 URL（`https://www.tecmah.com` トップ）→ フッター「電子公告」→ `/koukoku` → 各公告ページ、が会社法上の到達導線
- 決算公告は定時株主総会の終結の日後 **5 年間** 継続掲載が必要（会社法 940条1項2号）。第1期 `/ir/kessan/fy1` は **2031-08-19 まで URL・金額・日付を変更しない**
- 公告ページを動かす場合は `astro.config.mjs` の `redirects` に必ず 301 相当の転送を残す
- 新しい公告は `src/data/koukoku.ts` の `legalNotices` に追加し、`scripts/verify-koukoku.mjs` の `EXPECTED_NOTICES` も更新する

### ビルド時ガード

`npm run build` の `postbuild` で `scripts/verify-koukoku.mjs` が走り、以下が崩れているとビルドが失敗する（= デプロイが止まる）。

- トップページに `/koukoku` と `/ir` へのリンクがある
- `/koukoku` に各公告ページへのリンクがある
- 各公告ページが存在し、主要数値・日付（資産合計 7,843,932 円、公告日 2026-08-19、掲載終了 2031-08-19 など）が含まれる
- 全ページのフッターから `/koukoku` へ辿れる
- 公告・IR ページに個人ページ（旧 `/profile` など）へのリンクがない

```bash
npm run verify:koukoku   # ビルド済み dist/ に対して単独実行
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
| 代表者紹介データ | 完了 | `ceo-profile.ts` → `ceoProfile`, `ceoMetrics`, `careerHighlights` |
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

## 代表者紹介（/about）

旧 `/profile`（経歴書LP）は Issue #24 の案Cにより廃止し、会社概要（`/about`）の「代表者プロフィール」に統合した。
`/profile` へのアクセスは `astro.config.mjs` の `redirects` で `/about` に転送される。

### データ管理（`src/data/ceo-profile.ts`）

| エクスポート | 内容 |
|---|---|
| `ceoProfile` | 氏名・役職・肩書・写真・タグライン |
| `ceoMetrics` | 経験年数などの要約指標（3件） |
| `careerHighlights` | 主な経歴（抜粋、新しい順） |

会社サイトに載せるのは「代表者紹介として妥当な範囲」に絞る。個人の連絡先・年齢・全職歴、
個人事業・フリーランスとしての営業要素（稼働可否など）は載せない。フルの職務経歴書は個人チャネルで管理する。

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

- **Performance**: 60+（警告扱い）
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
        "categories:performance": "warn",
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
