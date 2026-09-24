// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.tecmah.com',
  base: '',
  output: 'static',
  trailingSlash: 'never',
  // 電子公告の URL 方針（Issue #22）:
  // - /ir/kessan/fy1（第1期 決算公告）は 2031-08-19 まで URL を変更しない
  // - 公告ページを動かす場合は必ずここに redirect を残す（static 出力では meta refresh ページが生成される）
  redirects: {
    // 半期報告（参考資料）が以前「公告掲載URL」として案内していたパス。公告一覧へ誘導する
    '/ir/kessan': '/koukoku',
    // 旧 経歴書LP。Issue #24 案Cで廃止し、会社概要の代表者紹介に統合した
    '/profile': '/about'
  },
  build: {
    assets: 'assets'
  },
  vite: {
    plugins: [tailwindcss()]
  }
});