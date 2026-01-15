# Professional Wood Interiors Website

Next.js website for Professional Wood Interiors - Custom Cabinetry & Built-Ins in St. Louis, Missouri.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Convex** (Backend & Database)
- **SMTP2GO** (Email notifications)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn
- Convex account (free tier works)

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up Convex:**
   ```bash
   npx convex dev
   ```
   This will:
   - Create a Convex account (if needed)
   - Set up your Convex project
   - Give you environment variables to add to `.env.local`

3. **Create `.env.local` file:**
   ```env
   NEXT_PUBLIC_CONVEX_URL=your_convex_url_here
   
   # SMTP2GO Configuration
   SMTP2GO_HOST=mail.smtp2go.com
   SMTP2GO_USER=your_smtp2go_username
   SMTP2GO_API_KEY=your_smtp2go_api_key
   SMTP2GO_FROM_EMAIL=noreply@professionalwoodinteriors.com
   CONTACT_EMAIL=info@professionalwoodinteriors.com
   
   # Optional: Site URL for metadata
   NEXT_PUBLIC_SITE_URL=https://professionalwoodinteriors.com
   ```

4. **Seed initial data:**
   In the Convex dashboard, go to Functions and run the `seed:seedData` mutation to populate initial data.

5. **Add your images:**
   Place your images in the `public/images/` directory with this structure:
   ```
   public/
     images/
       logo.png
       hero/
         kitchen-hero.jpg
       services/
         kitchens-tile.jpg
         entertainment-tile.jpg
         bookcases-tile.jpg
         refacing-tile.jpg
       gallery/
         kitchen-1.jpg
         built-ins-1.jpg
         entertainment-1.jpg
         kitchen-2.jpg
         built-ins-2.jpg
         refacing-1.jpg
   ```

6. **Run the development server:**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with header/footer
│   ├── page.tsx            # Homepage
│   └── globals.css         # Global styles
├── components/
│   ├── Header.tsx          # Site header/navigation
│   ├── Footer.tsx          # Site footer
│   ├── ConvexClientProvider.tsx
│   └── homepage/           # Homepage sections
│       ├── HeroSection.tsx
│       ├── IntroSection.tsx
│       ├── ServiceAreaSection.tsx
│       ├── ProcessSection.tsx
│       ├── HowWeWorkSection.tsx
│       ├── ServiceTilesSection.tsx
│       ├── WhyChooseSection.tsx
│       ├── CTABand.tsx
│       ├── GallerySection.tsx
│       ├── ReviewsSection.tsx
│       └── ContactFormSection.tsx
├── convex/
│   ├── schema.ts           # Database schema
│   ├── queries.ts          # Database queries
│   ├── contact.ts          # Contact form mutations
│   ├── emails.ts           # Email sending (SMTP2GO)
│   └── seed.ts             # Seed data function
└── public/
    └── images/             # Your images go here
```

## Deployment

### Vercel

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Convex

Deploy Convex functions:
```bash
npx convex deploy
```

## Features

- ✅ Responsive homepage matching design
- ✅ Dynamic content from Convex
- ✅ Contact form with email notifications
- ✅ Image optimization with next/image
- ✅ SEO-ready (metadata, structured data)
- ✅ Accessible (semantic HTML, focus states)

## Next Steps

1. Complete remaining pages (services, locations, reviews, etc.)
2. Add sitemap.xml and robots.txt
3. Add JSON-LD structured data
4. Set up analytics (optional)

## Support

For issues or questions, contact [your contact info].
