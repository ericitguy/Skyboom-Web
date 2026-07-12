// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// The canonical production origin. Update this to the live domain before deploy;
// every canonical URL, Open Graph URL, sitemap entry and JSON-LD `url` derives
// from it, so it must be correct for SEO.
const SITE = 'https://www.skyboomgh.com';

export default defineConfig({
  site: SITE,
  trailingSlash: 'never',
  build: {
    // Emit clean, extensionless URLs (/about instead of /about/index.html)
    format: 'file',
    inlineStylesheets: 'auto',
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
  integrations: [
    sitemap({
      changefreq: 'monthly',
      priority: 0.7,
      lastmod: new Date(),
    }),
  ],
  vite: {
    // Cast avoids a Vite Plugin type-version skew between @tailwindcss/vite and
    // Astro's bundled Vite; runtime is unaffected.
    plugins: [/** @type {any} */ (tailwindcss())],
  },
});
