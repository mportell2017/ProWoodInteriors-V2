# ProWood Interiors Website - Development Documentation

## Overview
This Next.js 14 application uses the App Router with TypeScript and Tailwind CSS. The site showcases custom cabinetry and woodworking services with a focus on elegant design and local SEO.

## Technology Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Backend**: Convex (database, contact forms)
- **Email**: Nodemailer
- **Validation**: Zod

## Design System

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
app/                          # Next.js App Router pages
  services/[service-name]/    # Service pages (dynamic routes)
  showroom/[category]/        # Gallery category pages
  locations/[city]/           # City location pages (SEO)
components/
  ui/                         # Reusable UI components
  locations/                  # Location page components
  showroom/                   # Gallery components
  homepage/                   # Homepage-specific components
lib/                          # Utilities and data
  gallery-manifest.ts         # Auto-generated image catalog
  location-data.ts            # City location configuration
  structured-data.ts          # SEO schema generators
public/images/gallery/        # Gallery images organized by category
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

#### Forms
- **SoftCTA.tsx**: Contact form with project type selection
  - 8 project types: Kitchen, Bathroom, Bookcases, Entertainment, Home Office, Refacing, Mudroom, Other
  - Submits to Convex backend
  - Success/error states built-in

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

### Current Cities (All Implemented)
- Wildwood `/locations/wildwood`
- Chesterfield `/locations/chesterfield`
- Clayton `/locations/clayton`
- St. Peters `/locations/st-peters`
- St. Charles `/locations/st-charles`
- Wentzville `/locations/wentzville`
- St. Louis `/locations/st-louis`

Each city has unique, SEO-optimized content including local landmarks, neighborhood references, and city-specific FAQs.

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
Located in `lib/structured-data.ts`:
- `generateBreadcrumbs()`: Navigation breadcrumbs
- `generateGallerySchema()`: Image galleries
- `generateLocalBusinessSchema()`: Business info
- `generateLocalServiceSchema()`: City service pages

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

The contact form (SoftCTA component) is fully functional:
- Submits to Convex backend
- Sends email notifications via Nodemailer
- Pre-configured with all project types
- Can be dropped into any page

**Usage**:
```typescript
import { SoftCTA } from '@/components/homepage/SoftCTA';

// In your page
<SoftCTA />
```

## Notes for Future Development

### Planned Enhancements
- Location-specific testimonials
- Google Maps integration for service areas
- Cities index page at `/locations`
- Location-specific project galleries
- Blog posts about local projects

### Best Practices
- Always read existing files before modifying
- Reuse components whenever possible (don't duplicate)
- Follow established patterns (see service pages for reference)
- Test responsive behavior at all breakpoints
- Validate SEO with Google Rich Results Test
- Check Lighthouse scores before deploying

---

**Last Updated**: 2026-01-14
**Maintained by**: Claude Code
