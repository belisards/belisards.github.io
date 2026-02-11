import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://belisards.github.io',
  output: 'static',
  outDir: '../docs',
  integrations: [sitemap()],
  vite: {
    build: {
      assetsInlineLimit: 0,
    },
  },
});
