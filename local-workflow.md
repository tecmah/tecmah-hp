# ローカルワークフロー実行ガイド

## wrkflw について

wrkflwは GitHub Actions をローカルで実行・デバッグするためのツールです。
本プロジェクトでは、GitHub Actionsのデプロイ前テストに使用できます。

## インストール（オプション）

```bash
# グローバルインストール
npm install -g wrkflw
```

**注意**: wrkflwは開発依存関係に含まれておらず、ローカル開発者が必要に応じてインストールします。

## 使用方法

### 基本実行
```bash
# GitHub Actionsワークフローをローカル実行
wrkflw run .github/workflows/deploy.yml
```

### デバッグモード
```bash
# 詳細ログ付きで実行
wrkflw run .github/workflows/deploy.yml --debug
```

### ステップ別実行
```bash
# ステップごとに確認しながら実行
wrkflw run .github/workflows/deploy.yml --step-by-step
```

## 設定ファイル（オプション）

必要に応じて `.wrkflw/config.yml` を作成できます：

```yaml
# .wrkflw/config.yml
workflows:
  build:
    file: .github/workflows/deploy.yml
    env:
      NODE_ENV: development
      CI: true

settings:
  runner:
    platform: linux
    arch: x64
  
  env:
    GITHUB_WORKSPACE: /github/workspace
    GITHUB_REPOSITORY: tecmah/tecmah-hp
    GITHUB_REF: refs/heads/main
    GITHUB_SHA: local-test

debug:
  verbose: true
  step_by_step: false
  preserve_artifacts: true
```

## GitHub Actions との違い

| 項目 | GitHub Actions | wrkflw (ローカル) |
|------|---------------|-------------------|
| 実行環境 | GitHub サーバー | ローカルマシン |
| シークレット | GitHub Secrets | 環境変数/設定ファイル |
| アーティファクト | GitHub Pages | ローカルディスクリ |
| デバッグ | ログのみ | インタラクティブ |

## 利用シーン

1. **プッシュ前テスト**: GitHub Actions の動作確認
2. **デバッグ**: ワークフローのトラブルシューティング
3. **開発**: 新しいワークフローステップの検証
4. **CI/CD最適化**: パフォーマンス改善の検証

## 注意事項

- **GitHub Secrets**: ローカルでは利用不可
- **デプロイ**: 実際のGitHub Pagesデプロイは実行されません
- **権限**: ローカル環境の権限制限に注意
- **依存関係**: Docker等の依存ツールが必要な場合があります

## トラブルシューティング

### よくある問題

1. **権限エラー**:
   ```bash
   sudo wrkflw run .github/workflows/deploy.yml
   ```

2. **Node.js バージョン不一致**:
   ```bash
   # nvmで正しいバージョンに切り替え
   nvm use 18
   ```

3. **依存関係の問題**:
   ```bash
   # npm キャッシュクリア
   npm cache clean --force
   ```

## まとめ

wrkflwは**完全にオプション**のツールです。GitHub Actionsが正常に動作している場合は不要ですが、ワークフローの開発・デバッグ時には非常に有用です。