# RelayGrid

**Operations that scale with you.**

RelayGrid is a self-initiated B2B SaaS concept by Anthony Volatile. It explores an operating layer for growing companies: workflows, approvals, automation, ownership, and operational visibility. It is a portfolio project, not a client engagement or an operating business.

The project includes a complete visual identity, marketing site, interactive product workspace, onboarding demonstration, campaign system, email designs, and a portfolio case study. The audience is operating teams at companies with roughly 50–500 employees.

## Run locally

Use Node.js **20.19+**, preferably a current supported LTS release.

```sh
npm ci
npm run dev
```

Open http://127.0.0.1:3000.

```sh
npm run lint
npm run typecheck
npm run build
npm run preview
```

The production build exports static files to `out/`. `preview` serves that build at http://127.0.0.1:3001. Deploy `out/` to a static host that serves directory indexes and `404.html`. No environment secrets or backend are required.

## Stack

- Next.js 16.4 App Router and static export
- React 19.3 and TypeScript
- Plain CSS, organized by responsibility, with shared design tokens
- Self-hosted Geist Variable typography
- Lucide interface icons
- CSS and SVG charts; no charting or animation framework
- React context for workspace demo state
- Playwright and axe-core for browser validation
- Prettier and ESLint for source quality

## Routes

| Route                | Experience                                                                                                                                  |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `/`                  | Marketing homepage: product hero, problem, capabilities, product showcase, use cases, scale story, concept integrations, pricing, final CTA |
| `/product`           | Product overview with reusable interface components                                                                                         |
| `/solutions`         | Operations, Finance, Customer Success, and People Operations use cases                                                                      |
| `/pricing`           | Three fictional plans, billing toggle, and FAQ                                                                                              |
| `/resources`         | Practical workflow guidance and project materials                                                                                           |
| `/dashboard`         | Operating overview, metrics, activity, throughput, and bottlenecks                                                                          |
| `/workflows`         | Searchable/filterable workflow management; create, activate, and pause                                                                      |
| `/workflows/builder` | Select, configure, enable, add, remove, and test workflow steps                                                                             |
| `/approvals`         | Request detail drawer and approve / request changes / reject decisions                                                                      |
| `/analytics`         | Volume, completion, success, bottlenecks, throughput, and CSV export                                                                        |
| `/integrations`      | Illustrative connection gallery with local simulation                                                                                       |
| `/login`             | Fictional email validation and demo entry; no authentication                                                                                |
| `/onboarding`        | Six-step concept workspace setup; no invitations are sent                                                                                   |
| `/brand`             | Identity, color, typography, controls, icons, charts, and workflow language                                                                 |
| `/campaign`          | Six exportable campaign concepts                                                                                                            |
| `/emails`            | Three responsive email design previews                                                                                                      |
| `/case-study`        | Portfolio presentation with challenge, idea, identity, product, campaign, and implementation                                                |

## Architecture

```text
src/
  app/
    (marketing)/        Marketing and portfolio routes; shared header/footer
    (product)/          Product routes; shared context and workspace shell
    login/              Fictional login entry
    onboarding/         Guided concept onboarding
  components/
    ui/                 Identity, buttons, badges, icons, avatars, native dialog
    marketing/          Homepage, header, footer, pricing
    product/            Workspace shell, state, screens, charts, visual previews
    creative/           Campaign layouts and email previews
  lib/data.ts           Central fictional data, templates, and creative copy
  styles/               Base, marketing, product, portfolio, responsive styles
public/brand/           SVG and PNG identity assets, social image, shared tokens
portfolio-assets/       Email HTML, export instructions, QA and PNG captures
scripts/                Browser QA, creative export, email generation, static preview
```

Server components compose marketing pages. Client components handle only interactions: navigation, pricing, forms, and product state. Product routes share one provider. Approval decisions update pending counts across navigation. Each workflow has a separate editable template. Refreshing resets the demo; no personal information is stored or transmitted.

Charts have accessible summaries or labeled SVGs. Forms have associated labels and specific errors. Native dialogs provide modal focus containment, Escape dismissal, and focus restoration. Mobile navigation uses a drawer. Workflow and approval tables become structured rows rather than wide horizontal tables. Reduced-motion preferences disable animation.

## Brand

The symbol traces a continuous path through a modular grid, with an open corner for the next connection. The visual system uses ink `#101B19`, electric lime `#C4F566`, canvas `#F7F8F3`, forest `#526F5F`, and mist `#E7EBE3`. Geist Variable provides display and interface hierarchy; metadata uses restrained uppercase tracking. A 4px spacing unit, 6px control radii, 8px panel radii, and thin borders keep the system precise.

## Validation and exports

With the dev server running:

```sh
npm run test:smoke
npm run export:creative
npm run emails:generate
npm run format
```

Browser scripts use local Google Chrome on macOS. On another system, set `RELAYGRID_CHROME` to a Chromium executable. Set `RELAYGRID_BASE_URL` to test a different local server, including the static build at `http://127.0.0.1:3001`.

The smoke script checks 17 routes at 320, 375, 430, 768, 1024, 1280, and 1440px; scans desktop routes with axe; and exercises the main forms and product actions. Reports and captures are written to the ignored `portfolio-assets/exports/` directory. See [the export guide](portfolio-assets/EXPORT-GUIDE.md).

The production dependency audit has no known vulnerabilities at delivery. The development-only Next.js ESLint plugin includes a transitive `braces` advisory with no published compatible fix. Do not apply `npm audit fix --force`: its suggested downgrade changes the Next.js lint configuration to an older major. Review that tooling advisory when a compatible patch becomes available.

## Honest demo boundaries

All people, companies, metrics, amounts, and activity are fictional. Third-party names illustrate integration concepts; no real connection is implemented. Pricing is fictional. Login does not authenticate. Workflow runs simulate execution without external calls. Onboarding summarizes selected options before opening the fixed sample workspace. No backend, database, billing, messaging, account creation, security certification, customer endorsement, or measured business outcome is claimed.

The concept deployment is marked `noindex, nofollow`. Sites hosting configuration lives in `.openai/hosting.json`; it declares the static `out/` output and preserves the private project identity.

## High-value next steps

- Add conditional workflow branches and a keyboard-operable reordering interaction.
- Connect a future production version to authenticated users, persisted data, and an approval audit trail.
- Validate workflow assumptions with operations teams before turning the concept into a real service.
