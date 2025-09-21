// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://tecmah.github.io',
  base: '/tecmah-hp',
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  }
});