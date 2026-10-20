// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // GitHub Pages : https://lanvezsultan-ctrl.github.io/portfolio-franky-lanvez-OURO-BANGNA/
  // Avec un nom de domaine : site: 'https://mondomaine.com' et supprimer la ligne `base`.
  site: 'https://lanvezsultan-ctrl.github.io',
  base: '/portfolio-franky-lanvez-OURO-BANGNA',
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
