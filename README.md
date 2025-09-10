# TECMAH株式会社 公式サイト

TECMAH株式会社の公式ウェブサイト - AI・データ活用・PdM/PM支援を行うスタートアップ

## 概要

このサイトは、Jekyll + GitHub Pagesで構築されており、以下の特徴があります：

- **テーマ**: Forty Jekyll Theme (andrewbanchich/forty-jekyll-theme)
- **多言語対応**: 日本語（デフォルト）、英語（/en）
- **レスポンシブデザイン**: モバイル・タブレット・デスクトップ対応
- **プロフェッショナルデザイン**: ビジネス向けの洗練されたUI

## サイト構成

### 日本語版（メイン）
- **ホーム** (`/`) - 企業概要、サービス、実績、CTA
- **サービス** (`/services/`) - AI・データ活用・PM支援の詳細
- **実績** (`/work/`) - プロジェクト事例とケーススタディ
- **会社概要** (`/about/`) - ミッション、ビジョン、チーム情報
- **ポリシー** (`/policy/`) - プライバシーポリシー、利用規約
- **お問い合わせ** (`/contact/`) - コンタクトフォームと企業情報

### 英語版（ミニマル）
- **Home** (`/en/`) - Company overview in English
- **Services** (`/en/services/`) - Service overview in English  
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

# 依存関係をインストール
bundle install

# ローカルサーバーを起動
bundle exec jekyll serve

# ブラウザで http://localhost:4000 にアクセス
```

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
- カスタムCSS: テーマの上書きが可能
- レイアウト: `_layouts/`で独自レイアウトを作成

## 技術スタック

- **Static Site Generator**: Jekyll 3.10.0
- **Theme**: Forty Jekyll Theme
- **Hosting**: GitHub Pages  
- **Languages**: HTML5, CSS3, JavaScript
- **Responsive Framework**: Built-in responsive design
- **Forms**: Formspree integration ready

## サポート・お問い合わせ

サイトに関する技術的な質問は、GitHubのIssuesまたは contact@tecmah.co.jp までご連絡ください。

---

© 2024 TECMAH株式会社. All rights reserved.
