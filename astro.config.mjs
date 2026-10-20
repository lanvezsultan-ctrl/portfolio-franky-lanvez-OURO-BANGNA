// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // GitHub Pages : https://<pseudo>.github.io/portfolio
  // Avec un nom de domaine : site: 'https://mondomaine.com' et supprimer la ligne `base`.
  site: 'https://PSEUDO-GITHUB.github.io', // TODO : remplacer PSEUDO-GITHUB par le pseudo GitHub
  base: '/portfolio',
  output: 'static',
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'fr', locales: { fr: 'fr-FR', en: 'en-US' } },
    }),
  ],
  build: { inlineStylesheets: 'auto' },
  vite: { build: { assetsInlineLimit: 2048 } },
});
