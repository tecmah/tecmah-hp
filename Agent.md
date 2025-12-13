# Agent.md - 株式会社TECMAH コーポレートサイト

このドキュメントは、AIコーディングエージェント（Cursor/Claude等）がこのプロジェクトを理解し、適切にコードを生成・修正するためのガイドラインです。

## プロジェクト概要

- **プロジェクト名**: tecmah-hp
- **目的**: 株式会社TECMAHのコーポレートサイト（静的サイト）
- **デプロイ先**: GitHub Pages
- **URL**: https://www.tecmah.com

### 技術スタック

| 技術 | バージョン | 用途 |
|------|-----------|------|
| **Astro** | 5.13.9 | 静的サイトジェネレーター |
| **TypeScript** | 5.x | 型安全な開発（strict mode） |
| **Tailwind CSS** | 4.1.13 | ユーティリティファーストCSS |
| **Node.js** | 18.x+ | 実行環境 |

## プロジェクト構造

```
tecmah-hp/
├── src/
│   ├── components/          # 再利用可能コンポーネント
│   ├── data/                # 統一コンテンツ管理（content.ts）
│   ├── layouts/             # レイアウトテンプレート
│   ├── pages/               # ページファイル（ルーティング）
│   └── styles/              # グローバルスタイル
├── public/                  # 静的アセット（画像、ロゴ等）
├── astro.config.mjs         # Astro設定
├── tsconfig.json            # TypeScript設定（strict mode）
└── package.json             # 依存関係
```

## コーディング規約

### 1. ファイル命名規則

#### Astroコンポーネント
- **PascalCase**: `Header.astro`, `Hero.astro`, `Services.astro`
- ファイル名はコンポーネント名と一致させる

#### TypeScriptファイル
- **camelCase**: `content.ts`, `utils.ts`
- データ管理ファイルは `content.ts` のように明確な名前を使用

#### ページファイル
- **kebab-case**: `case-studies.astro`, `ai-data.astro`
- 動的ルート: `[slug].astro`

### 2. Astroコンポーネント規約

#### 基本構造

```astro
---
// 1. 型定義（必要な場合）
export interface Props {
  title: string;
  description?: string;
}

// 2. インポート
import Layout from '../layouts/Layout.astro';
import { company, pageMeta } from '../data/content.ts';

// 3. Props の受け取り
const { title, description = "デフォルト値" } = Astro.props;

// 4. データ処理・計算（必要に応じて）
const pageData = pageMeta.home;
---

<!-- 5. HTMLテンプレート -->
<Layout title={pageData.title}>
  <main class="container">
    <h1>{title}</h1>
    {description && <p>{description}</p>}
  </main>
</Layout>

<!-- 6. スタイル（必要に応じて） -->
<style>
  /* コンポーネント固有のスタイル */
</style>

<!-- 7. スクリプト（必要に応じて） -->
<script>
  // クライアントサイドのJavaScript
</script>
```

#### 重要なルール

1. **フロントマター（---）の順序**
   - 型定義 → インポート → Props → データ処理

2. **Props の型定義**
   - 常に `export interface Props` で型を定義
   - オプショナルプロパティは `?` を使用

3. **デフォルト値の設定**
   - Props の分割代入でデフォルト値を設定
   - 例: `const { title = "デフォルトタイトル" } = Astro.props;`

4. **スタイルスコープ**
   - コンポーネント固有のスタイルは `<style>` タグ内に記述
   - グローバルスタイルは `src/styles/global.css` に記述

5. **スクリプトの実行タイミング**
   - DOM操作は `DOMContentLoaded` イベント内で実行
   - クライアントサイドで必要な場合のみ `<script>` を使用

### 3. TypeScript規約

#### 型定義

```typescript
// インターフェース定義（PascalCase）
export interface CompanyInfo {
  name: string;
  nameEn: string;
  tagline: string;
  // ...
}

// 型エイリアス（PascalCase）
export type ServiceId = "ai-data" | "product-management" | "dx-consulting";

// 定数（camelCase）
export const company: CompanyInfo = {
  name: "株式会社TECMAH",
  // ...
};
```

#### 重要なルール

1. **厳密な型チェック**
   - `tsconfig.json` で `strict: true` を使用
   - `any` 型は避ける（`unknown` を優先）

2. **インターフェース vs 型エイリアス**
   - オブジェクト型は `interface` を使用
   - ユニオン型・交差型は `type` を使用

3. **エクスポート**
   - データ・型定義は `export` を使用
   - デフォルトエクスポートは避ける（名前付きエクスポートを推奨）

### 4. Tailwind CSS規約

#### クラス命名

```astro
<!-- 基本レイアウト -->
<div class="container mx-auto px-4 sm:px-6 lg:px-8">

<!-- レスポンシブデザイン（モバイルファースト） -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<!-- カラー（ダークテーマ） -->
<div class="bg-zinc-900 text-white border border-zinc-700">

<!-- ユーティリティクラス -->
<button class="btn btn-primary hover:bg-opacity-90 transition-all duration-200">
```

#### 重要なルール

1. **カスタムクラスとの併用**
   - グローバルクラス（`.btn`, `.card`, `.container`）は `src/styles/global.css` で定義
   - よく使うパターンはカスタムクラス化を検討

2. **ダークテーマカラー**
   - 背景: `bg-zinc-900`, `bg-zinc-800`, `bg-zinc-700`
   - テキスト: `text-white`, `text-gray-300`, `text-gray-400`
   - ボーダー: `border-zinc-700`, `border-zinc-600`

3. **レスポンシブブレークポイント**
   - `sm:` 640px以上
   - `md:` 768px以上
   - `lg:` 1024px以上
   - モバイルファーストで記述

4. **アニメーション**
   - `transition-all duration-200` などで滑らかなトランジション
   - `prefers-reduced-motion` に対応（global.cssで対応済み）

### 5. コンテンツ管理規約

#### 統一コンテンツ管理（src/data/content.ts）

**すべてのコンテンツは `content.ts` で一元管理**

```typescript
// ✅ 良い例: content.ts で管理
import { company, services, pageMeta } from '../data/content.ts';

<h1>{company.name}</h1>
<p>{pageMeta.home.description}</p>

// ❌ 悪い例: ハードコード
<h1>株式会社TECMAH</h1>
<p>会社の説明...</p>
```

#### 重要なルール

1. **文字列のハードコード禁止**
   - 会社名、サービス名、メッセージは `content.ts` から取得
   - 例外: フォームのプレースホルダー（可読性優先）

2. **型定義の活用**
   - すべてのデータにインターフェースを定義
   - TypeScriptの型チェックでデータの整合性を保証

3. **ページメタ情報**
   - SEO用のタイトル・説明は `pageMeta` オブジェクトで管理
   - Layoutコンポーネントで使用

### 6. コンポーネント設計規約

#### コンポーネントの責務

1. **単一責任の原則**
   - 1つのコンポーネントは1つの責務を持つ
   - 例: `Header.astro` → ナビゲーションのみ

2. **再利用性**
   - 共通パターンはコンポーネント化
   - Propsで柔軟にカスタマイズ可能にする

3. **コンポーネントの配置**
   - ページ固有: `src/pages/` 内に直接記述
   - 再利用可能: `src/components/` に分離

#### Props設計

```typescript
// ✅ 良い例: 明確な型定義とデフォルト値
export interface Props {
  title: string;
  description?: string;
  variant?: "primary" | "secondary";
}

const { 
  title, 
  description = "", 
  variant = "primary" 
} = Astro.props;

// ❌ 悪い例: 型がない、Propsが不明確
const { title, description, variant } = Astro.props;
```

### 7. スタイル規約

#### カスタムCSS変数

```css
/* ✅ 良い例: CSS変数を使用 */
.card {
  background: var(--surface);
  border: 1px solid var(--border);
}

/* ❌ 悪い例: ハードコード */
.card {
  background: #18181b;
  border: 1px solid #3f3f46;
}
```

#### カラーシステム

- **プライマリ**: `#00d4aa` (TECMAHグリーン)
- **セカンダリ**: `#6366f1` (ブルー)
- **背景**: `#0a0a0b` (ダークブラック)
- **サーフェス**: `#18181b` (ダークグレー)

### 8. パフォーマンス最適化規約

#### 画像最適化

```astro
<!-- ✅ 良い例: 適切な属性を設定 -->
<img
  src="/images/hero.jpg"
  alt="ヒーロー画像"
  width="1200"
  height="600"
  loading="lazy"
  decoding="async"
/>

<!-- picture要素でレスポンシブ対応 -->
<picture>
  <source srcset={logo.dark} media="(prefers-color-scheme: dark)" />
  <img src={logo.default} alt="ロゴ" />
</picture>
```

#### JavaScript最小化

- クライアントサイドJSは必要最小限に
- インラインスクリプトは `<script>` タグ内に記述
- 外部ライブラリは慎重に選択

### 9. SEO・アクセシビリティ規約

#### SEO

```astro
<!-- ✅ 良い例: メタタグを適切に設定 -->
<Layout 
  title={pageMeta.home.title}
  description={pageMeta.home.description}
>
```

#### アクセシビリティ

```astro
<!-- ✅ 良い例: 適切なaria属性とセマンティックHTML -->
<nav aria-label="メインナビゲーション">
  <button 
    type="button"
    aria-expanded="false"
    aria-controls="mobile-menu"
  >
    メニュー
  </button>
</nav>

<!-- 画像には必ずalt属性 -->
<img src="/logo.svg" alt="TECMAH ロゴ" />

<!-- スクリーンリーダー用テキスト -->
<span class="sr-only">視覚的に隠すが読み上げられるテキスト</span>
```

### 10. Git・コミット規約

#### ブランチ命名

- `feature/新機能名`
- `fix/バグ修正内容`
- `refactor/リファクタリング内容`

#### コミットメッセージ

- 日本語で明確に記述
- 例: `feat: お問い合わせフォームのバリデーション追加`

## ベストプラクティス

### 1. コンポーネント開発

1. **小さく始める**
   - まず必要な機能のみ実装
   - 後から拡張可能な設計にする

2. **型安全性**
   - Props、データ、関数のすべてに型を付ける
   - TypeScriptの恩恵を最大限活用

3. **再利用性**
   - 3回以上使うパターンはコンポーネント化を検討

### 2. パフォーマンス

1. **静的生成の活用**
   - Astroの静的サイト生成機能を最大限活用
   - クライアントサイドJSは最小限に

2. **画像最適化**
   - 適切なサイズ・フォーマットを使用
   - `loading="lazy"` で遅延読み込み

3. **CSS最適化**
   - TailwindのPurge機能で未使用スタイルを削除
   - インラインスタイルは最小限に

### 3. 保守性

1. **DRY原則**
   - 重複コードは避ける
   - 共通処理は関数・コンポーネント化

2. **可読性**
   - 明確な変数名・関数名を使用
   - コメントは「なぜ」を説明する

3. **一貫性**
   - 既存のコードスタイルに従う
   - チーム全体で統一された書き方

### 4. セキュリティ

1. **XSS対策**
   - ユーザー入力は適切にエスケープ
   - Astroの自動エスケープ機能を活用

2. **機密情報**
   - 環境変数は `.env` ファイルで管理
   - GitHubにコミットしない

## よくある質問・注意事項

### Q: 新しいページを追加するには？

1. `src/data/content.ts` の `pageMeta` にメタ情報を追加
2. `src/pages/` に新しい `.astro` ファイルを作成
3. `Layout` コンポーネントで `pageMeta` を使用

### Q: 新しいコンポーネントを追加するには？

1. `src/components/` に新しい `.astro` ファイルを作成
2. `export interface Props` で型定義
3. 必要に応じて `content.ts` からデータを取得

### Q: スタイルを追加するには？

- **コンポーネント固有**: コンポーネント内の `<style>` タグ
- **グローバル**: `src/styles/global.css`
- **ユーティリティ**: Tailwindクラスを優先

### Q: 画像を追加するには？

1. `public/images/` に画像を配置
2. パスは `/images/ファイル名` で参照
3. 適切な `alt`, `width`, `height`, `loading` 属性を設定

## 開発コマンド

```bash
# 開発サーバー起動
npm run dev

# プロダクションビルド
npm run build

# ビルド結果のプレビュー
npm run preview

# ビルドテスト（ビルド→プレビュー）
npm run test:build
```

## 参考資料

- [Astro公式ドキュメント](https://docs.astro.build/)
- [TypeScript公式ドキュメント](https://www.typescriptlang.org/docs/)
- [Tailwind CSS公式ドキュメント](https://tailwindcss.com/docs)
- プロジェクトREADME: `README.md`

---

**最終更新**: 2025年1月
**メンテナー**: 株式会社TECMAH開発チーム
