# RCCG Victory House Wichita Website

A static, responsive website for RCCG Victory House Wichita. It is built with Astro and is ready for GitHub Pages with a custom domain.

## Local preview

Requirements: Node.js 22.12 or newer.

```bash
npm install
npm run dev
```

Open `http://localhost:4321`.

To test the production build:

```bash
npm run build
npm run preview
```

## Main content locations

- Church details, service times, leaders, ministries, events, and resource links: `src/data/site.ts`
- Page copy and layout: `src/pages/`
- Shared header, footer, page hero, and calls to action: `src/components/`
- Design system and site-wide styles: `src/styles/global.css`
- Original recovered photography: `src/assets/images/`
- Custom domain: `public/CNAME`

Astro optimizes the large source photos into responsive WebP files during each build. Keep the high-resolution originals in `src/assets/images`; do not manually put the multi-megabyte originals in `public/`.

## Pages

- Home: `/`
- About and leadership: `/about-us/`
- Ministries: `/our-ministries/`
- Events: `/events/`
- Giving: `/donate/`
- Plan a visit: `/visit-us/`
- Watch and worship: `/sermons/`
- Gallery: `/gallery-4/`
- Resources: `/resources/`
- Church life: `/testimonials/`

Sermon Notes is intentionally dormant. Its complete page source is preserved at
`src/dormant-pages/sermon-notes.astro`; move it back to `src/pages/` and enable the
`sermonNotesAvailable` flag in `src/pages/sermons.astro` when the ministry is ready.

The current URL names intentionally preserve the main Wix URLs that search engines already knew. Frequently indexed legacy event URLs under `/events-1/` are generated as redirects to the new events page.

## Updating common information

### Change a service time

Edit `services` or `monthlyServices` in `src/data/site.ts`.

### Change contact details or social links

Edit the `church` object in `src/data/site.ts`. This updates shared links and footer details across the site.

### Add or update a ministry

Edit the `ministries` array in `src/data/site.ts`.

### Update the leadership list

Edit the `leaders` array in `src/data/site.ts`.

### Add a highlighted annual event

Edit the `recurringEvents` array in `src/data/site.ts`. The events page deliberately points visitors to Instagram for current dates so stale dates are not published accidentally.

## GitHub Pages deployment

The included `.github/workflows/deploy-pages.yml` workflow builds and deploys the site whenever `main` changes.

The workflow currently publishes the preview at
`https://rccg-vh-wichita.github.io/rccg-vh-wichita-website/`. It sets
`DEPLOY_TARGET=github-pages`, which makes Astro add the project path to internal
links and assets. The workflow also omits `CNAME` from the preview artifact so
the existing public church domain is not changed accidentally.

When the church is ready to move the custom domain:

1. Open repository **Settings → Pages**.
2. Under **Build and deployment**, select **GitHub Actions**.
3. Confirm `public/CNAME` contains `www.rccgvhwichita.com`.
4. Remove `DEPLOY_TARGET: github-pages` and the step that removes `dist/CNAME`
   from the workflow.
5. Configure the custom-domain DNS only after the preview deployment has been tested.

## Verification

```bash
npm run check
npm run build
npm audit
```

## Source recovery notes

The replacement was reconstructed from search-engine records, RCCG North America’s parish listing, archived Wix URLs, and publicly served original Wix media. See `migration/CONTENT-INVENTORY.md` for the recovered information map and items that should be confirmed before launch.
