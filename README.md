# TECMAH株式会社 - OpenAI風スタイリッシュWebサイト

> 🚀 **Astro + TypeScript + Tailwind CSS** で構築されたモダンなAI企業サイト

## 🎯 プロジェクト概要

TECMAH株式会社のコーポレートサイトを、OpenAI風のスタイリッシュで最先端のデザインに刷新。
Jekyll（Ruby）から **Astro（TypeScript）** に移行し、GitHub Pagesでの静的デプロイを実現。

### 🌟 特徴

- **OpenAI風デザイン**: モダンなグラデーション、クリーンな配色、大胆なタイポグラフィ
- **高速パフォーマンス**: Astroによる静的サイト生成で最適化
- **完全TypeScript**: 型安全な開発環境
- **レスポンシブ**: モバイルファーストデザイン
- **SEO最適化**: メタタグ、構造化データ対応

## 🛠️ 技術スタック

| 技術 | バージョン | 用途 |
|------|------------|------|
| **Astro** | 4.x | 静的サイトジェネレーター |
| **TypeScript** | 5.x | 型安全な開発 |
| **Tailwind CSS** | 4.x | ユーティリティファーストCSS |
| **GitHub Pages** | - | 静的サイトホスティング |
| **GitHub Actions** | - | CI/CD自動デプロイ |

## 📁 プロジェクト構造

```
tecmah-hp/
├── src/
│   ├── components/          # 再利用可能コンポーネント
│   │   ├── Header.astro     # ナビゲーション
│   │   ├── Hero.astro       # メインビジュアル
│   │   ├── Services.astro   # サービス紹介
│   │   └── ...
│   ├── layouts/             # レイアウトテンプレート
│   │   └── Layout.astro     # ベースレイアウト
│   ├── pages/               # ページファイル
│   │   ├── index.astro      # ホームページ
│   │   ├── about.astro      # 会社概要
│   │   ├── services/        # サービスページ
│   │   └── contact.astro    # お問い合わせ
│   └── styles/              # スタイルファイル
│       └── global.css       # グローバルCSS
├── public/                  # 静的アセット
│   ├── images/              # 画像ファイル
│   ├── logo.svg             # ロゴ
│   └── favicon.svg          # ファビコン
├── archive/                 # 旧Jekyllファイル（参考用）
├── .github/workflows/       # GitHub Actions
│   └── deploy.yml           # デプロイ設定
├── astro.config.mjs         # Astro設定
├── package.json             # 依存関係
└── tsconfig.json            # TypeScript設定
```

## 🚀 開発環境セットアップ

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

## 🎨 デザインシステム

### カラーパレット

```css
:root {
  /* OpenAI風カラー */
  --primary: #10a37f;        /* TECMAHグリーン */
  --secondary: #3b82f6;      /* ブルー */
  --accent: #8b5cf6;         /* パープル */
  --text: #0f172a;           /* ダークグレー */
  --background: #ffffff;     /* ホワイト */
  --surface: #f8fafc;        /* ライトグレー */
}
```

### グラデーション

- **Primary**: `linear-gradient(135deg, #10a37f 0%, #3b82f6 100%)`
- **Secondary**: `linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)`
- **Hero**: `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`

### タイポグラフィ

- **メインフォント**: Inter, Noto Sans JP
- **見出し**: 700-800 weight
- **本文**: 400-500 weight
- **レスポンシブ**: `clamp()` 関数で可変サイズ

## 📄 コンテンツ管理

### 会社情報

```typescript
// 基本情報
const company = {
  name: "TECMAH株式会社",
  tagline: "AI・データ活用・PdM/PM支援",
  representative: "松浦賢孝",
  established: 2025,
  address: "〒060-0062 北海道札幌市中央区南二条西5丁目31-1 RMBld.701",
  email: "info@tecmah.com",
  phone: "+81-70-8359-2530"
};
```

### サービス情報

1. **生成AI・データ活用支援**
   - Azure OpenAI/GPT-4o導入
   - PoC構築・運用
   - MLOps体制整備

2. **PdM/PM伴走・プロダクトマネジメント**
   - 市場・ユーザー調査
   - アジャイル導入
   - 開発チーム運営

3. **新規事業・DXコンサルティング**
   - カスタマーインタビュー
   - 事業計画・KPI設計
   - プロセス可視化

### 実績事例

- **教育SaaS**: 学習継続率+18%向上
- **製造業**: 異常検知リードタイム50%短縮
- **小売AI**: 3ヶ月でパイロット導入
- **スタートアップ**: 投資判断材料整備

## 🚀 デプロイ

### GitHub Pages自動デプロイ

1. **Push時**: `main`ブランチへのPushで自動デプロイ
2. **GitHub Actions**: `.github/workflows/deploy.yml`で設定
3. **公開URL**: `https://tecmah.github.io/tecmah-hp/`

### 手動デプロイ

```bash
# ビルド
npm run build

# distフォルダをGitHub Pagesに手動アップロード
```

## 🔧 カスタマイズガイド

### 新しいページの追加

1. `src/pages/` にファイル作成
2. Layoutコンポーネントを使用
3. ナビゲーションに追加

```astro
---
// src/pages/new-page.astro
import Layout from '../layouts/Layout.astro';
---

<Layout title="新しいページ">
  <main>
    <h1>新しいページ</h1>
  </main>
</Layout>
```

### 新しいコンポーネントの作成

```astro
---
// src/components/NewComponent.astro
export interface Props {
  title: string;
}

const { title } = Astro.props;
---

<div class="card">
  <h2>{title}</h2>
  <slot />
</div>

<style>
  .card {
    /* OpenAI風スタイル */
  }
</style>
```

## 🐛 トラブルシューティング

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

# 開発サーバー詳細ログ
npm run dev -- --verbose
```

## 📊 パフォーマンス

### Lighthouse スコア目標

- **Performance**: 95+
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 95+

### 最適化施策

1. **画像最適化**: WebP形式、適切なサイズ
2. **フォント最適化**: preload、font-display
3. **JavaScript最小化**: 必要最小限のJS
4. **CSS最適化**: 未使用スタイル削除

## 📞 サポート・お問い合わせ

### 技術的なお問い合わせ

- **GitHub Issues**: バグ報告・機能要望
- **Email**: info@tecmah.com
- **Phone**: +81-70-8359-2530

### 営業・ビジネスお問い合わせ

- **無料相談**: [お問い合わせフォーム](https://tecmah.github.io/tecmah-hp/contact)
- **サービス詳細**: [サービスページ](https://tecmah.github.io/tecmah-hp/services)

---

## 📄 ライセンス

© 2025 TECMAH株式会社. All rights reserved.

---
