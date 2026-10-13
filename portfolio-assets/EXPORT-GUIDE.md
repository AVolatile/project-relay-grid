# RelayGrid portfolio capture guide

Run `npm run dev`, then `npm run export:creative`. The script writes PNGs to `portfolio-assets/exports/` using local Chrome, self-hosted fonts, and reduced motion.

## Included exports

| Material          | Route / output                                     | Recommended framing                                            |
| ----------------- | -------------------------------------------------- | -------------------------------------------------------------- |
| Homepage hero     | `/` · `homepage-hero-1440.png`                     | 1440 × 1000; first impression and product-led headline         |
| Complete homepage | `/` · `homepage-1440.png`                          | Full-page capture; use separate crops for long presentations   |
| Dashboard         | `/dashboard` · `dashboard-1440.png`                | Full workspace; 1440px width                                   |
| Workflow builder  | `/workflows/builder` · `workflow-builder-1440.png` | Canvas and inspector shown together                            |
| Analytics         | `/analytics` · `analytics-1440.png`                | Insight, metrics, and labeled data visualizations              |
| Brand system      | `/brand` · `brand-system-1440.png`                 | Crop identity, type, palette, and interface samples separately |
| Case study        | `/case-study` · `case-study-1440.png`              | Full presentation; crop into a portfolio narrative             |
| Mobile            | Homepage, dashboard, builder · `*-375.png`         | 375px width; deliberate stacked product layouts                |
| Social artwork    | `/campaign` · `campaign-*.png`                     | Systems, growth, meetings: 1200 × 1200                         |
| Display / launch  | `/campaign` · `campaign-*.png`                     | Handoff, approvals, launch: 1600 × 900                         |
| Email designs     | `/emails` · `email-*.png`                          | Individually captured rendered email containers                |

Campaign elements have stable IDs: `campaign-systems`, `campaign-growth`, `campaign-handoff`, `campaign-meetings`, `campaign-approvals`, and `campaign-launch`. Email IDs are `email-announcement`, `email-intelligence`, and `email-education`. The export script scales typography, spacing, and routed graphics to each intended canvas instead of enlarging a small screenshot.

## Reusable files

- `public/brand/symbol.svg`: scalable symbol
- `public/brand/wordmark.svg` and `.png`: identity lockup
- `public/brand/social.svg` and `.png`: 1200 × 630 sharing artwork
- `public/brand/tokens.css`: reusable color and geometry tokens
- `src/app/icon.svg` and `apple-icon.png`: application icons
- `portfolio-assets/emails/*.html`: three standalone, responsive, table-based email templates with inline styles

`npm run emails:generate` regenerates the email HTML from the site's central creative copy. These are design templates, not a sending system. Image links point at the concept deployment. Update the origin in `scripts/generate-emails.mjs` if hosting changes. Before actual email delivery, a production team would add subscription handling and test target email clients.

## Capture notes

Refresh before capturing to restore sample state. Use the product's “Reset demo” action while exploring. Hide browser chrome for artwork exports. Preserve the self-initiated concept framing in the portfolio description. Do not add invented performance results or testimonials.
