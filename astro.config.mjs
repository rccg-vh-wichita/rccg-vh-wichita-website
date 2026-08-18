import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.rccgvhwichita.com',
  output: 'static',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      filter: (page) =>
        !page.endsWith('/404/') &&
        !page.includes('/events-1/') &&
        !page.endsWith('/events-page/')
    })
  ],
  build: {
    format: 'directory'
  }
});
