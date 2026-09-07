import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://site.omeu.website',
  output: 'static',
  outDir: '../docs',
  integrations: [sitemap()],
  vite: {
    build: {
      assetsInlineLimit: 0,
    },
  },
});
