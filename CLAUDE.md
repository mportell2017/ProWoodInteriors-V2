# ProWood Interiors Website - Development Documentation

## Overview
This Next.js 16 application uses the App Router with TypeScript and Tailwind CSS. The site showcases custom cabinetry and woodworking services with a focus on elegant design and local SEO.

## Technology Stack
- **Framework**: Next.js 16 (App Router, Turbopack by default)
- **React**: 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Contact form**: Next.js API route → Resend Node SDK with React Email templates (no database)
- **Validation**: Zod
- **Bot protection**: Cloudflare Turnstile (`@marsidev/react-turnstile`)

### Next.js 16 breaking changes to be aware of
- **`params` and `searchParams` are Promises** in dynamic routes. Await them:
  ```typescript
  export default async function Page(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    // use params.slug
  }
  ```
- Same for `cookies()` and `headers()` — they're async now.
- `next.config.js` no longer accepts an `eslint` block; run `next lint` via the CLI.

## Design System

**Agent-readable design contract:** [`DESIGN.md`](DESIGN.md) (Google Labs
[design.md](https://github.com/google-labs-code/design.md) format — alpha) captures
the tokens *and the rationale* behind them (color jobs, font roles, do's & don'ts).
Read it before any visual work. `tailwind.config.js` + `app/globals.css` remain the
**runtime source of truth**; keep DESIGN.md in sync by hand. You can validate it with
`npx @google/design.md lint DESIGN.md` (not yet a project dependency).

### Color Palette
```typescript
colors: {
  parchment: '#FBF7F0',  // Light backgrounds
  ink: '#23160F',         // Primary text
  brass: '#B58B4B',       // Accent/links
  oxblood: '#7A1D1D',     // CTA buttons
  walnut: '#2C1810',      // Dark sections
  umber: '#5B3A2A',       // Secondary text
}
```

### Typography
- **Display**: Fraunces (headings)
- **Body**: Open Sans (readable paragraphs)
- **Elegant**: Cormorant Garamond (decorative accents)

## Project Structure

### Key Directories
```
app/                                    # Next.js App Router pages
  api/contact/                          # Contact form POST endpoint
  services/[service-name]/              # Service pages (4 services)
  showroom/[category]/                  # Gallery category pages
  showroom/[category]/[project]/        # Individual project pages
  locations/[city]/                     # City SEO landing pages
    opengraph-image.tsx                 # Per-city dynamic OG image
  locations/[city]/[service]/           # Per-service, per-city SEO pages
    opengraph-image.tsx                 # Per-combo dynamic OG image
  opengraph-image.tsx                   # Root-level dynamic OG image
  robots.ts                             # Robots policy (allows everything except /api, /admin)
  not-found.tsx                         # Site-wide 404 page
  error.tsx                             # Route error boundary
  global-error.tsx                      # Root error boundary (very rare cases)
components/
  ui/                                   # Reusable UI primitives (Button, Card, Container, Heading, Section)
  forms/                                # Shared form code
    ContactForm.tsx                     # Long-form contact form (React Hook Form + Zod)
    contact-form-icons.tsx              # Project-type icons + projectTypes + timelineOptions arrays
  services/                             # Service-page components
    ServiceAreaLinks.tsx                # Internal-linking block (services → locations)
  locations/                            # Location page components
  showroom/                             # Gallery components
  homepage/                             # Homepage-specific components (HomeHero, SoftCTA, etc.)
lib/
  business.ts                           # NAP, founded year, primary service area (single source of truth)
  reviews-data.ts                       # Customer testimonials
  service-faqs.ts                       # Per-service FAQ content
  gallery-manifest.ts                   # Auto-generated image catalog
  gallery-utils.ts                      # Gallery lookup helpers
  location-data.ts                      # City landing page data
  service-location-data.ts              # Per-service, per-city data
  structured-data.ts                    # SEO schema generators (LocalBusiness, Service, FAQPage, Review, etc.)
public/images/gallery/                  # Gallery images by category
```

### Core Components

#### UI Components (components/ui/)
- **Heading.tsx**: Typography component with eyebrow text, accent styling
- **Section.tsx**: Layout sections with tone variants (parchment/walnut/clear)
- **Container.tsx**: Max-width wrapper with responsive padding
- **Button.tsx**: CTA buttons (primary/outline/ghost variants)
- **Card.tsx**: Content cards with hover effects

#### Gallery System
- **Gallery Manifest**: Auto-generated from images, 86 images catalogued
- **Regenerate**: Run `npm run generate:gallery` to update manifest
- **Categories**: Kitchens, Entertainment Centers, Bookcases, Bedrooms
- **Components**: GalleryGrid, GalleryImageCard, ShowroomLightbox

## City Location Landing Pages

### Architecture
City location pages use a dynamic route pattern for easy scaling. Add new cities by updating data configuration, not creating new pages.

**Route**: `app/locations/[city]/page.tsx`

### Data Configuration
**File**: [lib/location-data.ts](lib/location-data.ts)

Single source of truth for all city data. Each location includes:

**Required fields:**
- City name, slug, state, county
- Zip codes and coordinates (for SEO)
- Hero title and subtitle
- Description (intro paragraph)
- Service area (nearby cities)

**Optional SEO content fields:**
- `localExpertise`: Heading + array of paragraphs about local experience
- `whyChooseUs`: Heading + array of reasons (title + description each)
- `process`: Heading + array of steps (title + description each)
- `faqs`: Array of question/answer pairs

### Adding a New City

1. Open [lib/location-data.ts](lib/location-data.ts)
2. Add new object to `locations` array:
   ```typescript
   {
     city: 'New City',
     slug: 'new-city',
     state: 'Missouri',
     stateAbbr: 'MO',
     county: 'County Name',
     zipCodes: ['63000', '63001'],
     coordinates: {
       latitude: '38.0000',
       longitude: '-90.0000'
     },
     heroTitle: 'Custom Cabinetry in New City, Missouri',
     heroSubtitle: 'Unique subtitle for this city',
     description: 'City-specific description paragraph...',
     serviceArea: ['Nearby City 1', 'Nearby City 2'],
     localExpertise: {
       heading: 'Serving New City Homeowners',
       content: [
         'First paragraph about local expertise...',
         'Second paragraph...',
         'Third paragraph...'
       ]
     },
     whyChooseUs: {
       heading: 'Why New City Homeowners Choose Us',
       reasons: [
         { title: 'Reason 1', description: 'Description...' },
         { title: 'Reason 2', description: 'Description...' },
         // ... 5 reasons total
       ]
     },
     process: {
       heading: 'Our Process for New City Projects',
       steps: [
         { title: 'Step 1', description: 'Description...' },
         // ... 4 steps total
       ]
     },
     faqs: [
       { question: 'Question 1?', answer: 'Answer...' },
       // ... 5 FAQs total
     ]
   }
   ```
3. Run `npm run build`
4. New page automatically generated at `/locations/new-city`

**Time to add new city**: ~45-60 minutes (writing unique, SEO-optimized content)

**Important**: Each city should have completely unique content - different wording, local landmarks, neighborhood references, and FAQ questions. Avoid duplicating content across cities.

### Location Page Components

Located in `components/locations/`:

**Core Layout Components:**
1. **LocationHero.tsx**: Hero section with city-specific H1
2. **FloatingGallery.tsx**: Elegant 4-image picture frame gallery below hero
3. **ServiceGrid.tsx**: 4-card grid showing services (Refacing, Kitchens, Bookcases, Entertainment)
4. **LocationGallery.tsx**: Curated gallery showcase (8 images)
5. **LocationCTA.tsx**: Phone number + contact form section

**SEO Content Components:**
6. **LocationExpertise.tsx**: Local expertise section (3 paragraphs + CTA button)
7. **WhyChooseUs.tsx**: 5-reason grid with cards + CTA button
8. **ProcessSection.tsx**: 4-step numbered process + CTA button
9. **LocationFAQs.tsx**: Interactive accordion FAQ section (5 questions)

**Utility Components:**
10. **ContactButton.tsx**: Smooth-scroll anchor button (primary/secondary variants)
11. **LocationContactForm.tsx**: Standalone contact form without heading text

### SEO Strategy

**Metadata**: Each city gets unique title, description, Open Graph tags
**Structured Data**: ProfessionalService schema with:
- Location coordinates
- Service catalog (4 services)
- Service area coverage
- Business rating

**Static Generation**: All pages pre-rendered at build time for performance

### Service Areas Index
A `/locations` index page (`app/locations/page.tsx`) lists every city, grouped by county, and is linked from the header "Service Areas" menu and the sitemap. It imports the full `locations` array server-side.

### Header Navigation
`components/Navigation.tsx` is a client component. To keep its bundle light it pulls menu content from **`lib/nav-data.ts`** (`navServices`, `navCities`) — a deliberately slim mirror, *not* the heavy server-only `lib/location-data.ts`. When you add a city to `location-data.ts`, mirror it into `navCities` so the "Service Areas" menu and the `/locations` index stay in sync. NAP comes from `lib/business.ts` (`PHONE_DISPLAY`/`PHONE_TEL`) — never hardcode it here. The header surfaces a "What We Do" mega-menu (services + blurbs), a "Service Areas" dropdown, and a "Free Consultation" CTA with a folded-in "★★★★★ family-owned since 1985" trust signal.

### Current Cities (All Implemented)
- Wildwood `/locations/wildwood`
- Chesterfield `/locations/chesterfield`
- Clayton `/locations/clayton`
- St. Peters `/locations/st-peters`
- St. Charles `/locations/st-charles`
- Wentzville `/locations/wentzville`
- St. Louis `/locations/st-louis`

Each city has unique, SEO-optimized content including local landmarks, neighborhood references, and city-specific FAQs.

## Per-Service, Per-City SEO Landing Pages

To rank for service-specific local intent (e.g. "cabinet refacing chesterfield mo"), we run dedicated `/locations/[city]/[service]` pages alongside the generic city pages. Each page targets a single head term with exact-phrase match in the title, H1, and first paragraph.

**Route**: `app/locations/[city]/[service]/page.tsx`
**Data**: [lib/service-location-data.ts](lib/service-location-data.ts)

### Current service-location pages
- `/locations/chesterfield/cabinet-refacing`
- `/locations/chesterfield/kitchen-remodeling`
- `/locations/wildwood/cabinet-refacing`
- `/locations/wildwood/kitchen-remodeling`

`generateStaticParams` only emits the combos listed in `serviceLocations` — it is **not** a cross-product of cities × services. Other cities won't get service pages until they're added to the data file.

### Page anatomy (mirrors the implementation)
Breadcrumbs → service-specific H1 → 3-paragraph intro → project gallery → "What's Included" card grid → WhyChooseUs → ProcessSection (service-specific steps) → Local Considerations + cross-link to the sibling service → LocationFAQs → LocationCTA.

### Adding a new service-location combo
1. Add an entry to `serviceLocations` in `lib/service-location-data.ts` with all required fields (intro, included, whyChooseUs, process, considerations, faqs, galleryProjects).
2. Pick `galleryProjects` from names in the gallery manifest (e.g. "Kitchen Cabinet Refacing", "Vintage Kitchen"). Use non-overlapping `galleryImageRange` slices across cities so no two pages show identical galleries.
3. The parent city page automatically renders a "Looking for a specific service?" callout linking to any service-locations defined for that city — no edits needed there.
4. The sitemap picks up new entries automatically.
5. `npm run build` to verify.

**Content rules (important for SEO):**
- Each page must be genuinely unique — no spun variants. Google penalizes templated local content.
- Don't fabricate neighborhood or subdivision names. Stick to verifiable references (highways, parks, named landmarks, school districts) unless you have confirmed local names.
- Respect existing pricing wording already on the site (Chesterfield refacing = 40–60% less; Wildwood refacing = 40–50% less).

## Development Workflow

### Building
```bash
npm run dev          # Development server
npm run build        # Production build (tests static generation)
npm run start        # Start production server
```

### Gallery Management
```bash
npm run generate:gallery    # Regenerate gallery manifest from images
```

### Code Patterns

#### Creating New Pages
1. Follow App Router conventions: `app/[route]/page.tsx`
2. Export metadata for SEO: `export const metadata = { title, description }`
3. Use existing UI components for consistency
4. Follow responsive breakpoints: mobile (1 col) → tablet (2 cols) → desktop (3-4 cols)

#### Component Patterns
```typescript
// Use existing Section and Container for layout
<Section tone="parchment" className="py-16">
  <Container>
    <Heading as="h2" eyebrow="Our Services">
      What We Do
    </Heading>
    {/* Content */}
  </Container>
</Section>
```

#### Styling with Tailwind
- Use design tokens: `bg-parchment`, `text-ink`, `text-brass`
- Responsive: `md:grid-cols-2 lg:grid-cols-4`
- Spacing: Follow Tailwind scale (py-8, py-12, py-16)

## SEO Best Practices

### Heading Hierarchy
- One H1 per page (in hero)
- H2 for major sections
- H3 for subsections
- No skipped levels

### Structured Data
Located in `lib/structured-data.ts`. All schemas pull NAP from `lib/business.ts` — never hardcode address/phone here.

- `generateBreadcrumbSchema()` — BreadcrumbList for nav trails
- `generateImageGallerySchema()` — ImageGallery for showroom pages
- `generateLocalBusinessSchema()` — LocalBusiness with real address (12031 Wesford Dr, Maryland Heights, MO 63043), `areaServed` = Chesterfield/Wildwood/Clayton. Used on homepage, /our-story, /contact-us, /services, /reviews.
- `generateServiceSchema()` — Service for the 4 service pages
- `generateProductSchema()` — Product for individual showroom projects
- `generateLocalServiceSchema()` — ProfessionalService for city landing pages
- `generateServiceLocationSchema()` — Service schema for `/locations/[city]/[service]` pages
- `generateFAQSchema()` — FAQPage for rich results (used on each service page AND service-location pages)
- `generateReviewListSchema()` — LocalBusiness + embedded Review[] for `/reviews` page

### Performance
- Use Next.js `Image` component for all images
- Static generation where possible
- Lazy load images with `loading="lazy"`
- Optimize Lighthouse scores (target: >90 all categories)

## Implementation Plan Reference

For detailed implementation plans and architectural decisions, see:
- **Current Plan**: `C:\Users\mason\.claude\plans\witty-doodling-walrus.md`
- Includes component breakdowns, testing checklists, and future enhancements

## Contact Form Integration

The contact form is fully functional:
- POSTs to `app/api/contact/route.ts`
- Route verifies the Turnstile token, then sends the notification via the **Resend Node SDK** (`resend.emails.send`)
- The email body is a **React Email** template: `components/emails/ContactNotificationEmail.tsx`. Pass it to `send()` as a function call on the `react` param (`ContactNotificationEmail({...})`, not JSX) — the SDK renders both HTML and plain-text and escapes all values, so no manual HTML escaping in the route.
- `replyTo` is set to the submitter's email, so replying goes straight to the customer
- Recipients are hardcoded in the route (`CONTACT_RECIPIENTS`: `dave@prowoodinteriors.com`, `prowoodinteriors@gmail.com`); the `from` is `noreply@prowoodinteriors.com` (`FROM_ADDRESS`). Update there if they change.
- The route sets `export const runtime = 'nodejs'` — React Email rendering and the Resend SDK need Node APIs, not Edge.
- **`from` requires a verified domain.** Verify `prowoodinteriors.com` at https://resend.com/domains (add the SPF/DKIM/DMARC DNS records) or production sends will be rejected.
- No database — email is the only record of a submission
- Pre-configured with all project types

**Usage**:
```typescript
import { SoftCTA } from '@/components/homepage/SoftCTA';

// In your page
<SoftCTA />
```

**Required env vars** (`.env.local`):
- `RESEND_API_KEY` — Resend API key (from https://resend.com/api-keys)
- `TURNSTILE_SECRET_KEY` — Cloudflare Turnstile server secret
- `NEXT_PUBLIC_TURNSTILE_SITE_KEY` — Cloudflare Turnstile site key (exposed to client)

## Notes for Future Development

### Planned Enhancements
- Location-specific testimonials
- Google Maps integration for service areas
- Location-specific project galleries
- Blog posts about local projects
- Expand `/locations/[city]/[service]` coverage to more cities (Clayton, St. Peters, etc.) as local SEO priorities evolve

### Known Issues / Cleanup Candidates
- Page `<title>` tags duplicate "Professional Wood Interiors" on service-location pages (appears once in the per-page metaTitle and again as a site-wide template suffix). Cosmetic; one-line fix in either the page metadata or the root layout.
- 25 components still use `interface X` declarations where the project convention prefers `type X = …`. Maintain-mode observation — modernize during the next pass over each file.

### Recent foundational changes (2026-05-22)
Track for context if you're picking this up cold:
- `lib/business.ts` was created as the single source of truth for NAP, founded year (1985), and primary service area. All schemas and most UI surfaces now import from here.
- The two near-duplicate contact-form components were merged into `components/forms/ContactForm.tsx` (~900 → ~430 lines net reduction). `SoftCTA.tsx` and `LocationContactForm.tsx` are now thin wrappers.
- Navigation lives in `app/layout.tsx` (root), not per-page.
- TypeScript `ignoreBuildErrors` flag removed — strict typecheck is now part of every build.
- `nodemailer` removed from dependencies (contact route uses SMTP2GO HTTP API).
- Root `app/not-found.tsx`, `app/error.tsx`, `app/global-error.tsx`, `app/robots.ts`, `app/opengraph-image.tsx` all added.
- Dynamic OG images at `app/locations/[city]/opengraph-image.tsx` and `app/locations/[city]/[service]/opengraph-image.tsx`.
- FAQ schema now emitted on all 4 service pages (FAQ content lives in `lib/service-faqs.ts`).
- `ServiceAreaLinks` component cross-links service pages → city + service-location pages.

### Recent changes (2026-05-26)
- **Contact email swapped from SMTP2GO to Resend.** `app/api/contact/route.ts` now uses the `resend` Node SDK instead of the SMTP2GO HTTP API. The hand-built HTML string + `escapeHtml`/`escapeHtmlWithBreaks` helpers were replaced by a **React Email** template (`components/emails/ContactNotificationEmail.tsx`) passed on the `react` param. Turnstile verification is unchanged. New deps: `resend`, `@react-email/components`. Env var changed: `SMTP2GO_API_KEY` → `RESEND_API_KEY`. **Action required:** verify `prowoodinteriors.com` at https://resend.com/domains before production sends work.

### Best Practices
- Always read existing files before modifying
- Reuse components whenever possible (don't duplicate)
- Follow established patterns (see service pages for reference)
- Test responsive behavior at all breakpoints
- Validate SEO with Google Rich Results Test
- Check Lighthouse scores before deploying

---

**Last Updated**: 2026-05-26
**Maintained by**: Claude Code
