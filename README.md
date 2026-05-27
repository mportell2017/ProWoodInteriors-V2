# Professional Wood Interiors Website

Next.js website for Professional Wood Interiors — Custom Cabinetry & Built-Ins in St. Louis, Missouri. Marketing site with local-SEO landing pages, a showroom gallery, and a contact form. **No database** — the contact form emails the team directly.

## Tech Stack

- **Next.js 16** (App Router, Turbopack)
- **React 19**
- **TypeScript**
- **Tailwind CSS 3** (custom design system — see [`DESIGN.md`](DESIGN.md))
- **React Hook Form + Zod** (contact-form validation)
- **Resend + React Email** (contact-form notifications — no database)
- **Cloudflare Turnstile** (contact-form bot protection)

## Getting Started

### Prerequisites

- Node.js 20+ and npm
- A [Resend](https://resend.com) account (for the contact form)
- A [Cloudflare Turnstile](https://dash.cloudflare.com/?to=/:account/turnstile) site (for bot protection)

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Create a `.env.local` file:**
   ```env
   # Site URL for metadata / Open Graph
   NEXT_PUBLIC_SITE_URL=https://www.prowoodinteriors.com

   # Resend — contact-form email notifications.
   # Get a key at https://resend.com/api-keys and verify the sending
   # domain (prowoodinteriors.com) at https://resend.com/domains.
   RESEND_API_KEY=your_resend_api_key

   # Cloudflare Turnstile — contact-form bot protection.
   NEXT_PUBLIC_TURNSTILE_SITE_KEY=your_turnstile_site_key
   TURNSTILE_SECRET_KEY=your_turnstile_secret_key
   ```

3. **Add gallery images:**
   Place images under `public/images/gallery/<Category>/` (categories: `Kitchens`, `Bedrooms`, `Bookcases`, `Entertainment Centers`). The gallery manifest is generated from these automatically.

4. **Run the development server:**
   ```bash
   npm run dev
   ```
   `dev` regenerates the gallery manifest first, then starts Next.js. Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Regenerate the gallery manifest, then start the dev server |
| `npm run build` | Production build (also runs `generate:gallery` via `prebuild`; runs a strict TypeScript check) |
| `npm run start` | Serve the production build |
| `npm run generate:gallery` | Rebuild `lib/gallery-manifest.ts` from `public/images/gallery/` |
| `npm run lint` | ⚠️ Currently non-functional — `next lint` was removed in Next 16 and the legacy `.eslintrc.json` crashes ESLint 9. Verify with `npx tsc --noEmit` + `npm run build` until the ESLint config is migrated to flat config. |

## Project Structure

```
app/                      # App Router pages, layouts, route handlers
  api/contact/            # Contact form POST endpoint (Turnstile verify → Resend send)
  services/               # Service pages (cabinet refacing, kitchens, bookcases, entertainment)
  showroom/               # Gallery category + project pages
  locations/              # City and per-service-per-city SEO landing pages
  internal/               # Internal-only pages (e.g. strategy dashboard)
  opengraph-image.tsx     # Dynamic OG images (root + per-location)
  robots.ts, sitemap.ts   # SEO infrastructure
  not-found.tsx, error.tsx, global-error.tsx
components/
  ui/                     # Reusable primitives (Button, Card, Section, Heading, CallButton, …)
  forms/                  # ContactForm + shared form parts
  emails/                 # React Email templates (ContactNotificationEmail)
  services/               # Editorial service-page section components
  locations/              # Location page components
  showroom/               # Gallery components
  homepage/               # Homepage sections
lib/                      # Data + helpers (business NAP, location data, structured data, gallery, …)
public/images/gallery/    # Source gallery images (drive the generated manifest)
scripts/                  # Build scripts (gallery manifest generator)
marketing/                # Marketing playbooks (not shipped with the site)
```

For a deeper architectural reference — adding cities, the contact-form internals, SEO schema, and design tokens — see [`CLAUDE.md`](CLAUDE.md) and [`DESIGN.md`](DESIGN.md).

## Contact Form

- The form (`components/forms/ContactForm.tsx`) POSTs to `app/api/contact/route.ts`.
- The route verifies the Cloudflare Turnstile token, then sends a notification via the **Resend Node SDK**, rendering `components/emails/ContactNotificationEmail.tsx` (a **React Email** template).
- Recipients are hardcoded in the route; `replyTo` is set to the submitter so replies go straight to the customer.
- **Production requires a verified sending domain.** Verify `prowoodinteriors.com` at [resend.com/domains](https://resend.com/domains) (add the SPF/DKIM/DMARC DNS records) or sends will be rejected.
- No database — email is the only record of a submission.

## Deployment

Deploys to any platform that supports Next.js (e.g. Vercel):

1. Push to GitHub and import the project.
2. Add the `.env.local` variables above in the host's environment settings.
3. Deploy. Pages are statically generated at build time where possible; `/api/contact` runs on demand (Node runtime).

## Features

- Responsive marketing site with a custom editorial design system
- Local-SEO city and per-service landing pages with structured data (JSON-LD)
- Showroom gallery driven by an auto-generated image manifest
- Contact form with Turnstile bot protection and Resend email notifications
- Dynamic Open Graph images, `sitemap.xml`, and `robots.txt`
