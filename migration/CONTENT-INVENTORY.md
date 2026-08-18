# Wix Content Recovery Inventory

Research date: August 16, 2026.

At research time, `rccgvhwichita.com` returned a Wix 404. The replacement content was recovered from recent search indexing, the Internet Archive URL index, RCCG North America’s parish directory, and original image files still available from Wix’s public media CDN.

## Recovered main routes

- `/`
- `/about-us`
- `/our-ministries`
- `/events`
- `/events-page`
- `/donate`
- `/visit-us`
- `/gallery-4`
- `/resources`
- `/sermons`
- `/sermon-notes` (preserved in source but intentionally not published)
- `/testimonials`

The archive also listed more than 130 historical event and form URLs under `/events-1/`. The most meaningful indexed event slugs are preserved as static redirects in `src/pages/events-1/[slug].astro`.

## Recovered core content

- Mission statement: “Equipping brethren to be the best.”
- Vision: build, empower, and disciple the saved through the Word of God; reach the unsaved through evangelism and missions.
- Church established in May 2003 under Pastor Timothy and Pastor Praise Okeowo.
- Pastor Sam and Pastor Jane Kayode began leading in August 2019.
- Lead pastor biography and the 13-person ministry leadership list.
- Weekly and monthly service schedule.
- Address, main phone, visit-page phone, church email, pastor email, map link, and social profiles.
- Community outreach themes: clothing giveaways, diaper drives/giveaways, and practical family support.
- Recurring/special gathering names found in archived URLs, including African Praise Sunday, couples events, mental-health gatherings, prayer vigils, appreciation Sundays, and praise celebrations.
- Resource links for Open Heavens Daily, Verse of the Day, and the RCCG Sunday School Manual.

## Recovered original media

The following high-resolution Wix originals were recovered and renamed for maintainability:

- `src/assets/images/gathering.jpg` — originally `20TH ANN (26).jpg`
- `src/assets/images/choir.jpg` — originally `20TH ANN (116).jpg`
- `src/assets/images/worship.jpg` — originally `Photo Sep 03 2023, 10 18 04 PM_edited.jpg`
- `src/assets/images/prayer.jpg` — originally `20TH ANN (6).jpg`
- `src/assets/images/victory-house-logo.png` — the current Victory House Wichita identity used in the header and footer

These images are reused at different crops across the new site. Additional team portraits named in search indexing were not publicly recoverable at original quality and were not replaced with invented or stock portraits.

## Confirm before production launch

- The visit page previously showed `(316) 550-1378`, while the footer and RCCG North America directory showed `(316) 267-2673`. The new site treats `(316) 267-2673` as the primary public number; confirm this choice.
- Confirm that Sunday worship remains `10:00–11:30 AM`.
- Confirm that Wednesday Prayer & Bible Study remains `6:30–9:00 PM`.
- Confirm the three monthly service times.
- Confirm the current electronic-giving instructions. The new giving page intentionally asks visitors to contact the church rather than publishing an unverified Zelle recipient.
- Confirm that all people in the leadership list still hold the roles shown.
- Add original leadership portraits from Wix Media Manager if church account access becomes available.
- Decide whether event dates will be maintained directly in Git, through a calendar embed, or through a lightweight CMS.

## External sources consulted

- Existing/indexed site: `https://www.rccgvhwichita.com/`
- RCCG North America parish directory entry for Victory House, parish ID 297.
- Internet Archive CDX index for `rccgvhwichita.com/*`.
- Wix static media CDN for publicly served original image files.
