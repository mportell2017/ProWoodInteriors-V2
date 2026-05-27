import { Metadata } from 'next';
import { generateServiceSchema, generateFAQSchema } from '@/lib/structured-data';
import { customBookcasesFAQs } from '@/lib/service-faqs';
import { LocationFAQs } from '@/components/locations/LocationFAQs';
import { ServiceAreaLinks } from '@/components/services/ServiceAreaLinks';
import { ServiceHero } from '@/components/services/ServiceHero';
import { ServiceIntro } from '@/components/services/ServiceIntro';
import { NumberedBenefits } from '@/components/services/NumberedBenefits';
import { CardGrid } from '@/components/services/CardGrid';
import { StatMoment } from '@/components/services/StatMoment';
import { ServiceProcessTimeline } from '@/components/services/ServiceProcessTimeline';
import { SimpleGallery } from '@/components/services/SimpleGallery';
import { ServiceCityGrid } from '@/components/services/ServiceCityGrid';
import { ServiceCTA } from '@/components/services/ServiceCTA';

export const metadata: Metadata = {
  title: 'Custom Bookcases',
  description:
    'Custom built-in bookcases in the St. Louis area. Solid wood construction, architectural design, seamless integration. Floor-to-ceiling, with cabinets, window seats. Since 1985.',
  alternates: { canonical: '/services/custom-bookcases' },
  openGraph: {
    title: 'Custom Bookcases | Professional Wood Interiors',
    description:
      'Custom built-in bookcases in the St. Louis area. Solid wood construction, architectural design, seamless integration.',
    type: 'website',
    siteName: 'Professional Wood Interiors',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Bookcases | Professional Wood Interiors',
    description:
      'Custom built-in bookcases in the St. Louis area. Solid wood construction, architectural design, seamless integration.',
  },
};

const serviceSchema = generateServiceSchema({
  name: 'Custom Bookcases & Built-Ins',
  slug: 'custom-bookcases',
  description:
    'Custom-built bookcases and built-ins for St. Louis area homes. Floor-to-ceiling shelving, integrated cabinets, and seamless architectural fit by a family-owned shop.',
});

const faqSchema = generateFAQSchema(customBookcasesFAQs);

export default function CustomBookcasesPage() {
  const bookcaseImages = [
    {
      src: '/images/gallery/Bookcases/white  bookcase remodel-02.jpg',
      alt: 'Custom white bookcase with built-in shelving by Professional Wood Interiors - St. Louis, MO',
    },
    {
      src: '/images/gallery/Bookcases/white  bookcase remodel-03.jpg',
      alt: 'Floor-to-ceiling custom bookcase with solid wood construction - Professional Wood Interiors - St. Louis, MO',
    },
    {
      src: '/images/gallery/Bookcases/white  bookcase remodel-04.jpg',
      alt: 'Built-in bookcase with architectural detail by Professional Wood Interiors - St. Louis, MO',
    },
  ];

  const benefits = [
    {
      title: 'Fills the Whole Wall',
      description:
        'From the floor to the ceiling, around the window, into the alcove. A built-in uses the space a freestanding unit wastes — including the dead air that usually collects above store-bought shelves.',
    },
    {
      title: 'Scribed to Your Walls',
      description:
        "Real walls aren't plumb or square. We scribe and trim each built-in to your room on-site, so there are no gaps along the wall or ceiling — just a seamless fit.",
    },
    {
      title: 'Shelves That Hold',
      description:
        'Solid-wood shelves sized and supported for books, not the sagging laminate spans of a flat-pack kit. Adjustable, so the layout changes as your collection does.',
    },
    {
      title: 'Part of the House',
      description:
        'Finished to match your existing trim and built to stay, a built-in adds architectural character — and value — that furniture never will.',
    },
  ];

  const configurations = [
    {
      title: 'Floor to Ceiling',
      description: 'Full-height built-ins that maximize vertical storage and make a dramatic architectural statement.',
    },
    {
      title: 'With Integrated Cabinets',
      description: "Open shelving above, closed cabinet storage below — display what you want, hide what you don't.",
    },
    {
      title: 'Around Windows & Seats',
      description: 'Shelving wrapped around a window with a built-in bench, turning an awkward corner into a reading nook.',
    },
  ];

  const buildStandard = [
    { title: 'Solid-wood construction' },
    { title: 'Adjustable, weight-rated shelves' },
    { title: 'Scribed and trimmed to your walls' },
    { title: 'Finish matched to your trim and décor' },
    { title: 'Integrated cabinets and display lighting (optional)' },
    { title: 'Installed by the team that built it' },
  ];

  const processSteps = [
    {
      number: '01',
      title: 'In-Home Design Visit',
      description:
        "We measure the wall, look at the room's existing trim and architecture, and talk through how you'll use the shelves — books, display, storage, a window seat. The visit takes about an hour.",
    },
    {
      number: '02',
      title: 'Design and Detailed Quote',
      description:
        'You receive a design with every dimension, wood species, finish, and option specified, plus a fixed written quote. What you approve is exactly what we build.',
    },
    {
      number: '03',
      title: 'Shop Build and Finish',
      description:
        'Your bookcase is built by hand and finished in our climate-controlled St. Louis shop, so the color is even and your home stays free of dust and fumes.',
    },
    {
      number: '04',
      title: 'On-Site Installation',
      description:
        'We install the built-in, then scribe and trim it to your walls and ceiling so the fit is seamless. We clean up and leave you a finished wall.',
    },
  ];

  const cities = [
    { name: 'Clayton', slug: 'clayton' },
    { name: 'Chesterfield', slug: 'chesterfield' },
    { name: 'Wildwood', slug: 'wildwood' },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <ServiceHero
        eyebrow="Serving the St. Louis Metro Since 1985"
        title={
          <>
            Custom
            <span className="block italic font-light text-umber">Bookcases</span>
            <span className="block">built into</span>
            <span className="block">your home.</span>
          </>
        }
        intro="Floor-to-ceiling shelving, library walls, and built-ins designed for your room and scribed to your walls — furniture-grade millwork that becomes part of the architecture."
        image={{ src: bookcaseImages[0].src, alt: bookcaseImages[0].alt }}
        stat={{
          value: '40',
          label: (
            <>
              Years of <br />
              Local Craft
            </>
          ),
        }}
      />

      <ServiceIntro
        lead="Freestanding shelves sit in a room. A built-in becomes the room — scribed to the walls, sized to the ceiling, and finished to match the trim already there."
        left={[
          "A built-in bookcase is designed for one wall in one house. It fills the height you actually have, works around the window or fireplace that's already there, and leaves no awkward gap collecting dust on top. The result reads as original architecture, not furniture pushed into place.",
          'We build them like fine furniture: solid-wood construction, adjustable shelves that carry real weight, and joinery meant to last decades — not the cam-and-dowel particleboard of a flat-pack unit.',
        ]}
        right={[
          "Whether you want a simple run of shelves for a home office or a full library wall with cabinets and display lighting, we design around how you'll use it and what you'll put on it.",
          'Everything is finished in our shop and installed by the team that built it, then scribed and trimmed to your walls on-site so the fit is seamless. Built in St. Louis since 1985.',
        ]}
      />

      <NumberedBenefits
        eyebrow="Why Built-In"
        title="Why a Built-In Beats a Freestanding Bookshelf"
        benefits={benefits}
      />

      <CardGrid
        eyebrow="Configurations"
        title="Ways We Build Them"
        subtitle="Most projects combine these — designed around your room and how you'll use the shelves."
        items={configurations}
        columns={3}
        tone="cream"
      />

      <StatMoment
        eyebrow="Built to Stay"
        value="Built-in"
        caption="part of the house, not the furniture"
        body="A freestanding shelf moves out with you. A built-in stays — scribed to the walls, finished to match the trim, and counted as part of the home. It's the difference between buying furniture and adding architecture."
      />

      <CardGrid
        eyebrow="The Build"
        title="How We Build Every Bookcase"
        items={buildStandard}
        variant="checklist"
        columns={2}
      />

      <ServiceProcessTimeline
        eyebrow="How It Works"
        title="From Bare Wall to Built-In"
        subtitle="Four steps, the same crew throughout."
        steps={processSteps}
      />

      <SimpleGallery
        eyebrow="Recent Work"
        title="Built-In Bookcases We've Made"
        subtitle="Custom shelving and library walls for St. Louis homes."
        images={bookcaseImages}
        columns={3}
        galleryHref="/showroom/bookcases"
        ctaLabel="View All Bookcase Projects"
      />

      <ServiceCityGrid
        title="Custom Bookcases Across the St. Louis Metro"
        subtitle="We design and build built-ins for homeowners throughout St. Louis County and St. Charles County."
        cities={cities}
        cardEyebrow="Custom Bookcases in"
        hrefFor={(city) => `/locations/${city.slug}`}
      />

      <ServiceAreaLinks />

      <LocationFAQs faqs={customBookcasesFAQs} />

      <ServiceCTA
        title="Ready to Add Custom Built-Ins?"
        body="Tell us about the wall and how you'd use it, and we'll show you what a built-in could look like. The in-home consultation is free — we'll measure, talk through options, and follow up with a detailed written quote."
        estimateLabel="Schedule a Consultation"
      />
    </>
  );
}
