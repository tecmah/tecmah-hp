# GitFlow ブランチ戦略

## ブランチ構成

### メインブランチ
- **main**: 本番環境用。常に安定した状態を保つ
- **develop**: 開発用メインブランチ。機能開発の統合先

### サポートブランチ
- **feature/**: 新機能開発用
- **release/**: リリース準備用
- **hotfix/**: 緊急修正用

## ブランチ命名規則

### Feature ブランチ
```
feature/TEC-XXX-機能名
feature/TEC-XXX-issue-description
```
例：
- `feature/TEC-386-homepage-redesign`
- `feature/TEC-401-contact-form-validation`

### Release ブランチ
```
release/v1.0.0
release/v1.1.0
```
例：
- `release/v1.0.0`
- `release/v2.0.0`

### Hotfix ブランチ
```
hotfix/TEC-XXX-issue-description
hotfix/urgent-security-fix
```
例：
- `hotfix/TEC-500-critical-bug-fix`
- `hotfix/urgent-security-patch`

## ワークフロー

### 1. 新機能開発
```bash
# developからfeatureブランチを作成
git checkout develop
git pull origin develop
git checkout -b feature/TEC-XXX-new-feature

# 開発作業...

# developにマージ
git checkout develop
git pull origin develop
git merge --no-ff feature/TEC-XXX-new-feature
git push origin develop

# featureブランチを削除
git branch -d feature/TEC-XXX-new-feature
```

### 2. リリース準備
```bash
# developからreleaseブランチを作成
git checkout develop
git pull origin develop
git checkout -b release/v1.0.0

# バージョン番号更新、バグ修正など...

# mainとdevelopにマージ
git checkout main
git merge --no-ff release/v1.0.0
git tag v1.0.0
git push origin main --tags

git checkout develop
git merge --no-ff release/v1.0.0
git push origin develop

# releaseブランチを削除
git branch -d release/v1.0.0
```

### 3. 緊急修正
```bash
# mainからhotfixブランチを作成
git checkout main
git pull origin main
git checkout -b hotfix/TEC-XXX-urgent-fix

# 修正作業...

# mainとdevelopにマージ
git checkout main
git merge --no-ff hotfix/TEC-XXX-urgent-fix
git tag v1.0.1
git push origin main --tags

git checkout develop
git merge --no-ff hotfix/TEC-XXX-urgent-fix
git push origin develop

# hotfixブランチを削除
git branch -d hotfix/TEC-XXX-urgent-fix
```

## 重要なルール

1. **mainブランチは常にデプロイ可能な状態を保つ**
2. **developブランチは統合テスト済みの状態を保つ**
3. **featureブランチはdevelopから分岐し、developにマージ**
4. **releaseブランチはdevelopから分岐し、mainとdevelopにマージ**
5. **hotfixブランチはmainから分岐し、mainとdevelopにマージ**
6. **マージ時は必ず--no-ffオプションを使用**
7. **ブランチ名は明確で分かりやすいものにする**
8. **作業完了後はブランチを削除する**

## 現在のブランチ状況

### 作成済みブランチ
- ✅ `develop` - 開発用メインブランチ
- ✅ `release/v1.0.0` - リリース準備用ブランチ（例）
- ✅ `hotfix/urgent-fix` - 緊急修正用ブランチ（例）

### 既存のfeatureブランチ
以下のブランチは適切に整理する必要があります：
- `feature/home-design-change`
- `feature/improvements-and-fixes`
- `feature/jekyll-theme-migration`
- `feature/serif-theme-implementation`
- `feature/tec-386-webサイトデザイン・コンテンツ改善プロジェクト`
- `feature/theme-cleanup`

## 次のステップ

1. 既存のfeatureブランチをdevelopにマージまたは削除
2. developブランチをリモートにプッシュ
3. チームメンバーにgitflowルールを共有
4. CI/CDパイプラインの設定（必要に応じて）
