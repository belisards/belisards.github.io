import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://belisario.website',
  output: 'static',
  outDir: '../docs',
  integrations: [sitemap()],
  vite: {
    server: {
      allowedHosts: ['91.99.71.223.sslip.io'],
    },
    build: {
      assetsInlineLimit: 0,
    },
  },
});
