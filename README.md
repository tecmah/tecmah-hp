# TECMAH株式会社 公式サイト

TECMAH株式会社の公式ウェブサイト - AI・データ活用・PdM/PM支援を行うスタートアップ

## 概要

このサイトは、Jekyll + GitHub Pagesで構築されており、以下の特徴があります：

- **テーマ**: Jekyll Serif Theme (zerostaticthemes/jekyll-serif-theme) をベースにカスタマイズ
- **多言語対応**: 日本語（デフォルト）、英語（/en）
- **サービスコレクション**: `_services` コレクションを利用したサービス紹介カード
- **カスタムデザイン**: ブランドカラー、日英フォント、カードUI、アイコンを独自実装

## サイト構成

### 日本語版（メイン）
- **ホーム** (`/`) - 企業概要、サービス、実績、CTA
- **サービス** (`/services/`) - AI・データ活用・PM支援の詳細
- **実績** (`/work/`) - プロジェクト事例とケーススタディ
- **会社概要** (`/about/`) - ミッション、ビジョン、チーム情報
- **ポリシー** (`/policy/`) - プライバシーポリシー、利用規約
- **お問い合わせ** (`/contact/`) - コンタクトフォームと企業情報

### 英語版
- **Home** (`/en/`) - Company overview in English
- **Services** (`/en/services/`) - Service overview in English
- **Case Studies** (`/en/work/`) - Selected engagements in English
- **About** (`/en/about/`) - Company profile in English
- **Policies** (`/en/policy/`) - Policy overview in English
- **Contact** (`/en/contact/`) - Contact form in English

## ローカル開発

### 必要なもの
- Ruby (3.0+)
- Bundler
- Git

### セットアップ
```bash
# リポジトリをクローン
git clone https://github.com/tecmah/tecmah-hp.git
cd tecmah-hp

# 環境設定ファイルをコピー（オプション）
cp .env.example .env.local

# 依存関係をインストール
bundle install

# ローカルサーバーを起動
bundle exec jekyll serve

# ブラウザで http://localhost:4000 にアクセス
```

### 環境設定（Dotenv）
このプロジェクトでは、ローカル開発環境の設定にdotenvパターンを使用しています：

- **`.env.example`** - 環境変数のテンプレートファイル
- **`.env.local`** - ローカル開発用の設定（Git追跡対象外）
- **`.env.development`** - 開発環境用の設定（Git追跡対象外）
- **`.env.production`** - 本番環境用の設定（Git追跡対象外）

#### 使い方
1. `.env.example`を`.env.local`にコピー
2. 必要に応じて設定値を編集
3. Jekyll実行時に自動的に環境変数が読み込まれます

### 開発時の注意点
- `_config.yml`を変更した場合はサーバーの再起動が必要
- GitHub Pagesとの互換性を保つため、GitHub Pages gem を使用
- 新しいページは適切なFront Matterを設定

## デプロイメント

このサイトはGitHub Pagesで自動デプロイされます：

1. `main`ブランチにプッシュ
2. GitHub Actionsが自動でビルド・デプロイ
3. https://tecmah.github.io/tecmah-hp でアクセス可能

## カスタマイズ

### サイト設定
`_config.yml`で以下を変更できます：
- 会社情報
- サイトのメタデータ  
- ナビゲーションメニュー
- ソーシャルメディアリンク

### コンテンツ更新
- ページコンテンツ: 各ディレクトリの`index.md`を編集
- ブログ投稿: `_posts/`ディレクトリに新しいファイルを追加
- 画像: `assets/images/`ディレクトリに配置

### スタイリング
- `assets/css/style.scss` でブランドカラー・フォント・カードUIなどを調整
- 追加アイコンは `assets/images/icons/`、ロゴは `assets/images/logo/` 配下で管理
- レイアウトの上書きは `_layouts/`、ヘッダー/フッター等のカスタムは `_includes/`

## 技術スタック

- **Static Site Generator**: Jekyll 3.10.0
- **Theme**: Jekyll Serif Theme （カスタムオーバーライド）
- **Hosting**: GitHub Pages  
- **Languages**: HTML5, CSS3, JavaScript
- **Responsive Framework**: Built-in responsive design
- **Forms**: Formspree integration ready

## サポート・お問い合わせ

サイトに関する技術的な質問は、GitHubのIssuesまたは info@tecmah.com までご連絡ください。

---

© 2024 TECMAH株式会社. All rights reserved.
