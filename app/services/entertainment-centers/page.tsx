import { Metadata } from 'next';
import { generateServiceSchema, generateFAQSchema } from '@/lib/structured-data';
import { entertainmentCentersFAQs } from '@/lib/service-faqs';
import { LocationFAQs } from '@/components/locations/LocationFAQs';
import { ServiceAreaLinks } from '@/components/services/ServiceAreaLinks';
import { ServiceHero } from '@/components/services/ServiceHero';
import { ServiceIntro } from '@/components/services/ServiceIntro';
import { NumberedBenefits } from '@/components/services/NumberedBenefits';
import { CardGrid } from '@/components/services/CardGrid';
import { StatMoment } from '@/components/services/StatMoment';
import { ImageStrip } from '@/components/services/ImageStrip';
import { ServiceProcessTimeline } from '@/components/services/ServiceProcessTimeline';
import { EditorialGallery } from '@/components/services/EditorialGallery';
import { ServiceCityGrid } from '@/components/services/ServiceCityGrid';
import { ServiceCTA } from '@/components/services/ServiceCTA';

export const metadata: Metadata = {
  title: 'Entertainment Centers',
  description:
    'Custom entertainment centers in the St. Louis area. Built-in media centers with wire management, ventilation, adjustable shelving. Solid wood construction. Since 1985.',
  alternates: { canonical: '/services/entertainment-centers' },
  openGraph: {
    title: 'Entertainment Centers | Professional Wood Interiors',
    description:
      'Custom entertainment centers in the St. Louis area. Built-in media centers with wire management, ventilation, adjustable shelving.',
    type: 'website',
    siteName: 'Professional Wood Interiors',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Entertainment Centers | Professional Wood Interiors',
    description:
      'Custom entertainment centers in the St. Louis area. Built-in media centers with wire management, ventilation, adjustable shelving.',
  },
};

const serviceSchema = generateServiceSchema({
  name: 'Entertainment Centers',
  slug: 'entertainment-centers',
  description:
    'Handcrafted entertainment centers and media built-ins for St. Louis area homes. Custom sizing, integrated cable management, ventilation, and lighting.',
});

const faqSchema = generateFAQSchema(entertainmentCentersFAQs);

export default function EntertainmentCentersPage() {
  const entertainmentImages = [
    {
      src: '/images/gallery/Entertainment Centers/entertainment-center-01.jpg',
      alt: 'Custom entertainment center with integrated storage by Professional Wood Interiors - St. Louis, MO',
    },
    {
      src: '/images/gallery/Entertainment Centers/entertainment-fireplace-remodel-01.jpg',
      alt: 'Entertainment center with fireplace built-in by Professional Wood Interiors - St. Louis, MO',
    },
    {
      src: '/images/gallery/Entertainment Centers/entertainment-fireplace-remodel-02.jpg',
      alt: 'Custom media center with fireplace integration - Professional Wood Interiors - St. Louis, MO',
    },
    {
      src: '/images/gallery/Entertainment Centers/full fireplace entertainment center remodel-01.jpg',
      alt: 'Full wall entertainment center with fireplace by Professional Wood Interiors - St. Louis, MO',
    },
    {
      src: '/images/gallery/Entertainment Centers/full fireplace entertainment center remodel-02.jpg',
      alt: 'Floor-to-ceiling entertainment center with custom woodwork - Professional Wood Interiors - St. Louis, MO',
    },
    {
      src: '/images/gallery/Entertainment Centers/full fireplace entertainment center remodel-03.jpg',
      alt: 'Built-in media center with solid wood construction by Professional Wood Interiors - St. Louis, MO',
    },
    {
      src: '/images/gallery/Entertainment Centers/full fireplace entertainment center remodel-04.jpg',
      alt: 'Custom entertainment center with adjustable shelving - Professional Wood Interiors - St. Louis, MO',
    },
    {
      src: '/images/gallery/Entertainment Centers/full fireplace entertainment center remodel-05.jpg',
      alt: 'Architectural entertainment center with wire management by Professional Wood Interiors - St. Louis, MO',
    },
  ];

  const benefits = [
    {
      title: 'Sized to Your Wall',
      description:
        'No gaps at the sides, no unit that sits three inches too tall for the alcove. A built-in fills the space exactly, so the wall reads as architecture instead of furniture parked against it.',
    },
    {
      title: 'Engineered for Your Electronics',
      description:
        'Each component gets ventilation, access, and a shelf sized to fit. Heat escapes, remotes still reach the gear, and nothing is crammed into a cubby it was never meant for.',
    },
    {
      title: 'Cables, Out of Sight',
      description:
        'Power and signal runs are routed through the cabinetry from the start, so the only thing you see is the screen — not a tangle of cords behind a console.',
    },
    {
      title: 'Built to Outlast the Gear',
      description:
        'Solid-wood construction and a shop-applied finish mean the cabinetry will still look right through three generations of televisions.',
    },
  ];

  const engineeredIn = [
    {
      title: 'Custom sizing',
      description:
        'Built to the exact width, height, and depth of your wall and your TV — including above-fireplace installs.',
    },
    {
      title: 'Integrated wire management',
      description: 'Power and signal cables routed through the cabinetry so nothing shows.',
    },
    {
      title: 'Component ventilation',
      description: 'Airflow designed in for receivers, consoles, and amplifiers that run warm.',
    },
    {
      title: 'Adjustable shelving',
      description: 'Reconfigurable shelves that adapt as your equipment changes.',
    },
    {
      title: 'Hidden storage',
      description: 'Doors and drawers that tuck media, games, and everyday clutter out of sight.',
    },
    {
      title: 'Finish-matched to your room',
      description: 'Stained or painted to coordinate with your existing trim, built-ins, and décor.',
    },
  ];

  const processSteps = [
    {
      number: '01',
      title: 'In-Home Design Visit',
      description:
        'We measure the wall, look at your TV and components, and talk through how you use the room — focal-point screen or hidden behind doors, open shelving or closed storage. The visit takes about an hour.',
    },
    {
      number: '02',
      title: 'Design and Detailed Quote',
      description:
        'You receive a design with every dimension, wood species, finish, and storage decision specified, plus a fixed written quote. What you approve is exactly what we build.',
    },
    {
      number: '03',
      title: 'Shop Build and Finish',
      description:
        'Your entertainment center is built by hand and finished in our climate-controlled St. Louis shop, so the color is even and your home stays free of dust and fumes.',
    },
    {
      number: '04',
      title: 'On-Site Installation',
      description:
        'We install the built-in, route and conceal the cabling, set the shelving for your gear, and clean up — leaving you a finished wall, not a project.',
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
            <span className="block italic font-light text-umber">Entertainment</span>
            <span className="block">Centers, built</span>
            <span className="block">for your wall.</span>
          </>
        }
        intro="Media walls designed around your TV, your components, and your room — with wire management, ventilation, and storage engineered in, not added on."
        image={{ src: entertainmentImages[3].src, alt: entertainmentImages[3].alt }}
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
        lead="A store-bought media console is built to an average living room. Yours isn't average — so why should the centerpiece of it be?"
        left={[
          'A built-in entertainment center is designed around the wall it lives on: the exact width of the alcove, the height of your mounted TV, the depth your components need to breathe. Where a freestanding unit leaves gaps and wasted space, a built-in makes the whole wall feel intentional.',
          'We design around your equipment, not the other way around. Receivers, gaming consoles, sound bars, and cable boxes each get a home with airflow and access — and the cables that connect them disappear into the cabinetry.',
        ]}
        right={[
          "Whether you want the television to be the focal point or hidden behind doors when it's off, we build the solution around how your family actually uses the room.",
          'Every piece is built with the same solid-wood construction and joinery as our cabinetry, finished in our shop, and installed by the team that built it — furniture-grade millwork that becomes part of the house.',
        ]}
      />

      <NumberedBenefits
        eyebrow="Why Built-In"
        title="Why a Built-In Beats a Store-Bought Console"
        benefits={benefits}
      />

      <CardGrid
        eyebrow="The Details"
        title="What We Engineer In"
        subtitle="The practical features that separate a built-in from a piece of furniture."
        items={engineeredIn}
        columns={3}
        tone="cream"
      />

      <StatMoment
        eyebrow="Made to Measure"
        value="1-of-1"
        caption="built for your wall and your gear"
        body="We don't build to a catalog size. Every entertainment center is designed for one room — the dimensions of your wall, the equipment on your shelves, and the way your family actually watches. There is exactly one like it."
      />

      <ImageStrip src={entertainmentImages[7].src} />

      <ServiceProcessTimeline
        eyebrow="How It Works"
        title="From Empty Wall to Finished Built-In"
        subtitle="Four steps, the same crew throughout."
        steps={processSteps}
      />

      <EditorialGallery
        eyebrow="Recent Work"
        title="Entertainment Centers We've Built"
        subtitle="Custom media walls and fireplace built-ins for St. Louis homes."
        featuredCaption="Full-wall entertainment center, St. Louis"
        images={entertainmentImages}
        galleryHref="/showroom/entertainment-centers"
        ctaLabel="View All Entertainment Center Projects"
      />

      <ServiceCityGrid
        title="Entertainment Centers Across the St. Louis Metro"
        subtitle="We design and build media walls for homeowners throughout St. Louis County and St. Charles County."
        cities={cities}
        cardEyebrow="Entertainment Centers in"
        hrefFor={(city) => `/locations/${city.slug}`}
      />

      <ServiceAreaLinks />

      <LocationFAQs faqs={entertainmentCentersFAQs} />

      <ServiceCTA
        title="Ready to Design Your Entertainment Center?"
        body="Tell us about your wall and your equipment, and we'll show you what a built-in could look like. The in-home consultation is free — we'll measure, talk through options, and follow up with a detailed written quote."
        estimateLabel="Schedule a Consultation"
      />
    </>
  );
}
