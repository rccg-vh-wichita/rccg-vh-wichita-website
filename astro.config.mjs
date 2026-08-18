import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const isGitHubPages = process.env.DEPLOY_TARGET === 'github-pages';

export default defineConfig({
  site: isGitHubPages
    ? 'https://rccg-vh-wichita.github.io'
    : 'https://www.rccgvhwichita.com',
  base: isGitHubPages ? '/rccg-vh-wichita-website' : undefined,
  output: 'static',
  trailingSlash: 'always',
  integrations: [sitemap()],
  build: {
    format: 'directory'
  }
});
