import { Metadata } from 'next';
import { getImagesByCategory } from '@/lib/gallery-utils';
import { generateServiceSchema, generateFAQSchema } from '@/lib/structured-data';
import { kitchenCabinetryFAQs } from '@/lib/service-faqs';
import { LocationFAQs } from '@/components/locations/LocationFAQs';
import { ServiceAreaLinks } from '@/components/services/ServiceAreaLinks';
import { ServiceHero } from '@/components/services/ServiceHero';
import { ServiceIntro } from '@/components/services/ServiceIntro';
import { DiptychList } from '@/components/services/DiptychList';
import { CardGrid } from '@/components/services/CardGrid';
import { StatMoment } from '@/components/services/StatMoment';
import { NumberedBenefits } from '@/components/services/NumberedBenefits';
import { ImageStrip } from '@/components/services/ImageStrip';
import { ServiceProcessTimeline } from '@/components/services/ServiceProcessTimeline';
import { EditorialGallery } from '@/components/services/EditorialGallery';
import { ServiceCityGrid } from '@/components/services/ServiceCityGrid';
import { ServiceCTA } from '@/components/services/ServiceCTA';

export const metadata: Metadata = {
  title: 'Kitchen Remodeling in St. Louis, MO',
  description:
    'Kitchen remodeling and custom cabinetry in St. Louis, Clayton, Chesterfield, and Wildwood. Full-scope kitchen design and handcrafted solid-wood cabinets built in our local shop since 1985. Free in-home consultation.',
  alternates: { canonical: '/services/kitchen-remodeling' },
  openGraph: {
    title: 'Kitchen Remodeling in St. Louis, MO | Professional Wood Interiors',
    description:
      'Kitchen remodeling and custom cabinetry in St. Louis. Full-scope kitchen design and handcrafted solid-wood cabinets built in our local shop since 1985.',
    type: 'website',
    siteName: 'Professional Wood Interiors',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kitchen Remodeling in St. Louis, MO',
    description:
      'Kitchen remodeling and custom cabinetry in St. Louis. Full-scope kitchen design and handcrafted solid-wood cabinets built in our local shop since 1985.',
  },
};

const serviceSchema = generateServiceSchema({
  name: 'Kitchen Remodeling and Custom Cabinetry',
  slug: 'kitchen-remodeling',
  description:
    'Full-scope kitchen remodeling and handcrafted custom cabinets for St. Louis area homes. Solid-wood construction, dovetail drawers, soft-close hardware, custom design, and coordinated trade management. Serving Clayton, Chesterfield, Wildwood, and the surrounding metro since 1985.',
});

const faqSchema = generateFAQSchema(kitchenCabinetryFAQs);

export default function CustomKitchenCabinetryPage() {
  const kitchenImages = getImagesByCategory('Kitchens');
  const showcaseImages = kitchenImages.slice(1, 9);

  const remodelIncludes = [
    {
      title: 'Layout and Design',
      description:
        'We design the kitchen around how you actually cook, gather, and entertain — not a catalog floor plan. That often means reshaping the island, reconfiguring the pantry, changing the appliance wall, or opening into an adjacent room.',
    },
    {
      title: 'Custom Cabinetry Built to Your Space',
      description:
        'Every cabinet is built to your exact dimensions in our shop. Drawer configurations, interior shelving, roll-outs, appliance panels — all designed around what you actually store.',
    },
    {
      title: 'Islands, Pantries, and Beverage Stations',
      description:
        'The signature elements of most St. Louis remodels. Islands sized for seating and prep, pantries shaped around how your family shops, beverage stations that keep guests out of the cooking flow.',
    },
    {
      title: 'Appliance Integration',
      description:
        'Panel-ready refrigerators, custom hood surrounds, built-in microwaves and ovens — detailed to look intentional rather than bolted on after the fact.',
    },
    {
      title: 'Trim, Crown, and Architectural Detail',
      description:
        'Cabinetry blends into the rest of the home through matching trim profiles, crown molding, and finish carpentry that ties the space together.',
    },
    {
      title: 'Shop-Applied Finish, On-Site Install',
      description:
        'All cabinetry is finished in our climate-controlled shop and installed by our own team. No outside finisher, no separate installation company.',
    },
    {
      title: 'Coordinated Trades',
      description:
        'We manage the cabinetry scope and coordinate the electricians, plumbers, countertop fabricators, and other trades. You work with one point of contact, not five.',
    },
    {
      title: 'Final Detail and Walkthrough',
      description:
        "We're on-site until the last piece of crown molding is set, the punch list is closed, and you've signed off on every detail.",
    },
  ];

  const benefits = [
    {
      title: 'One Team, Start to Finish',
      description:
        'The people who design your kitchen build it and install it. No subcontracted cabinet shop, no separate finish crew, and no finger-pointing when something needs to be made right.',
    },
    {
      title: 'Built to Your Exact Space',
      description:
        "Every cabinet is made to your room's real dimensions, down to the inch. Fillers and dead corners disappear, and storage gets designed around what you actually own.",
    },
    {
      title: 'Shop-Finished, Not Site-Sprayed',
      description:
        'Cabinetry is finished in our climate-controlled shop, so the color is even, the surface is durable, and your home never deals with the dust and fumes of a site-sprayed finish.',
    },
    {
      title: 'One Point of Contact',
      description:
        'We coordinate the countertop fabricator, plumber, electrician, and appliance delivery — so you manage one relationship and one schedule instead of five.',
    },
  ];

  const buildStandard = [
    { title: 'Solid wood construction' },
    { title: 'Dovetail drawer boxes' },
    { title: 'Soft-close hinges and slides' },
    { title: 'Full-extension drawers' },
    { title: 'Custom storage solutions' },
    { title: 'A wide range of door styles' },
    { title: 'Professional installation' },
    { title: 'Coordinated trade management' },
  ];

  const processSteps = [
    {
      number: '01',
      title: 'In-Home Consultation',
      description:
        "We visit your home, measure the existing kitchen, and spend time understanding how you cook, entertain, and use the space. We talk through what's working, what isn't, and what you'd like the room to become.",
    },
    {
      number: '02',
      title: 'Design and Detailed Plans',
      description:
        'We develop layout plans — often with structural changes — and specify every door style, wood species, finish, hardware choice, and cabinet configuration. We walk you through all of it before any build begins.',
    },
    {
      number: '03',
      title: 'Shop Build (6–8 Weeks)',
      description:
        "Your cabinetry is built by hand in our St. Louis shop. You're welcome to visit and see the work in progress — for most clients, that's a highlight of the project.",
    },
    {
      number: '04',
      title: 'Installation and Trade Coordination (2–3 Weeks)',
      description:
        'Installation runs 2–3 weeks on-site. We coordinate the countertop template, appliance delivery, plumbing, electrical, and any other trades — so the kitchen comes together as a single finished room.',
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
            Kitchen
            <span className="block italic font-light text-umber">Remodeling,</span>
            <span className="block">designed and built in St. Louis.</span>
          </>
        }
        intro="Full-scope kitchen remodels and handcrafted cabinetry — designed around how your family actually cooks and gathers, built by hand in our local shop, coordinated by one team."
        image={{
          src: kitchenImages[0].src,
          alt: 'Custom St. Louis kitchen with handcrafted solid-wood cabinetry and island by Professional Wood Interiors.',
        }}
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
        lead="A kitchen is the one room that has to work every single day — and the room that carries the rest of the house. When the layout fights you, a fresh coat of paint won't fix it."
        left={[
          'A full remodel is the right call when your layout no longer fits how you live, when the cabinets themselves are failing, or when you want to open the kitchen into the family room. We design the room around your real routines — the island that hosts homework and holidays, the pantry shaped to how you shop.',
          'Unlike mass-produced cabinets that arrive in fixed sizes, every cabinet we build is sized to your exact space. No fillers, no dead corners, no compromise — just the most usable version of your room.',
        ]}
        right={[
          "We handle the cabinetry, islands, pantries, built-ins, and finish carpentry in-house, and coordinate the plumbers, electricians, and countertop fabricators we've worked alongside for years. One point of contact, one schedule, one standard of quality.",
          "We've designed and built kitchens for St. Louis families since 1985. Everything is built by hand in our local shop and installed by the same people who built it — never handed off to a separate crew.",
        ]}
      />

      <DiptychList
        eyebrow="Choosing Your Scope"
        title="Full Remodel or Cabinet Refacing?"
        subtitle="Not every kitchen needs a full remodel. Here's how to tell which scope actually fits your situation."
        columns={[
          {
            numeral: 'i.',
            heading: 'A full remodel fits when',
            accent: 'brass',
            items: [
              'You want to change the layout, move walls, or resize the island',
              'The cabinet boxes are damaged, warped, or failing',
              "You're opening the kitchen into adjacent rooms",
              'You want a different cabinet configuration entirely',
              "You're adding new appliance types or panel-ready integration",
            ],
          },
          {
            numeral: 'ii.',
            heading: 'Refacing is the better call when',
            accent: 'umber',
            items: [
              'Your existing cabinet boxes are structurally sound',
              'The layout still works for how you cook',
              'You mainly want new doors, finishes, and hardware',
              "You'd rather refresh what you have than rebuild from scratch",
              'You need a faster on-site timeline — about a week',
            ],
            link: { label: 'Learn about Cabinet Refacing', href: '/services/cabinet-refacing' },
          },
        ]}
        footnote="We'll walk through both options honestly at your consultation. If refacing is the better fit, we'll tell you — we'd rather match the right scope to your kitchen than sell you something bigger than you need."
      />

      <CardGrid
        eyebrow="Scope"
        title="What a Full Kitchen Remodel Includes"
        subtitle="From the first layout sketch to the last piece of crown molding."
        items={remodelIncludes}
        columns={2}
      />

      <StatMoment
        eyebrow="The Timeline"
        value="10–14"
        caption="weeks, design to walkthrough"
        body="Most full kitchen remodels run 10–14 weeks from approved design to final walkthrough — roughly 6–8 weeks of hand-building in our shop, then 2–3 weeks of installation and trade coordination on-site. You'll know the schedule before we start."
      />

      <NumberedBenefits
        eyebrow="Why Us"
        title="Why St. Louis Homeowners Trust Us With Their Kitchens"
        benefits={benefits}
      />

      <ImageStrip src={kitchenImages[12].src} />

      <CardGrid
        eyebrow="Build Standard"
        title="Every Kitchen We Build Includes"
        items={buildStandard}
        variant="checklist"
        columns={2}
        tone="cream"
      />

      <ServiceProcessTimeline
        eyebrow="How It Works"
        title="Our Kitchen Remodel Process"
        subtitle="Most projects run 10–14 weeks from design approval to final walkthrough."
        steps={processSteps}
      />

      <EditorialGallery
        eyebrow="Recent Work"
        title="Custom Kitchens Across St. Louis"
        subtitle="A selection of kitchens we've designed and built for area homes."
        featuredCaption="Recent custom kitchen, St. Louis"
        images={showcaseImages}
        galleryHref="/showroom/kitchens"
        ctaLabel="View All Kitchen Projects"
      />

      <ServiceCityGrid
        title="Kitchen Remodeling Across the St. Louis Metro"
        subtitle="We design and build kitchens for homeowners throughout St. Louis County and St. Charles County, with a concentration in these communities."
        cities={cities}
        cardEyebrow="Kitchen Remodeling in"
        hrefFor={(city) => `/locations/${city.slug}/kitchen-remodeling`}
      />

      <ServiceAreaLinks serviceLocationSlug="kitchen-remodeling" />

      <LocationFAQs faqs={kitchenCabinetryFAQs} />

      <ServiceCTA
        title="Ready to Start Designing Your Kitchen?"
        body="The in-home consultation is free and takes about an hour. We'll measure the kitchen, talk through what you want changed, walk you through both full-remodel and refacing scopes, and follow up with a detailed written plan."
        estimateLabel="Schedule a Consultation"
      />
    </>
  );
}
