import { Metadata } from 'next';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { generateServiceSchema, generateFAQSchema } from '@/lib/structured-data';
import { cabinetRefacingFAQs } from '@/lib/service-faqs';
import { LocationFAQs } from '@/components/locations/LocationFAQs';
import { ServiceAreaLinks } from '@/components/services/ServiceAreaLinks';
import { ServiceHero } from '@/components/services/ServiceHero';
import { ServiceIntro } from '@/components/services/ServiceIntro';
import { DiptychList } from '@/components/services/DiptychList';
import { NumberedBenefits } from '@/components/services/NumberedBenefits';
import { ComparisonTable } from '@/components/services/ComparisonTable';
import { ImageStrip } from '@/components/services/ImageStrip';
import { ServiceProcessTimeline } from '@/components/services/ServiceProcessTimeline';
import { ImageCardRow } from '@/components/services/ImageCardRow';
import { EditorialGallery } from '@/components/services/EditorialGallery';
import { ServiceCityGrid } from '@/components/services/ServiceCityGrid';
import { ServiceCTA } from '@/components/services/ServiceCTA';

export const metadata: Metadata = {
  title: 'Cabinet Refacing in St. Louis, MO',
  description:
    'Cabinet refacing in St. Louis, Clayton, Chesterfield, and Wildwood. Handcrafted solid-wood doors, drawer fronts, and custom finishes. Family-owned since 1985. Free in-home consultation.',
  alternates: { canonical: '/services/cabinet-refacing' },
  openGraph: {
    title: 'Cabinet Refacing in St. Louis, MO | Professional Wood Interiors',
    description:
      'Cabinet refacing in St. Louis, Clayton, Chesterfield, and Wildwood. Handcrafted solid-wood doors, drawer fronts, and custom finishes.',
    type: 'website',
    siteName: 'Professional Wood Interiors',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cabinet Refacing in St. Louis, MO | Professional Wood Interiors',
    description:
      'Cabinet refacing in St. Louis, Clayton, Chesterfield, and Wildwood. Handcrafted solid-wood doors, drawer fronts, and custom finishes.',
  },
};

const serviceSchema = generateServiceSchema({
  name: 'Cabinet Refacing',
  slug: 'cabinet-refacing',
  description:
    'Cabinet refacing for St. Louis area homeowners. Keep your existing cabinet boxes; get handcrafted new doors, drawer fronts, veneered cabinet surfaces, and custom finishes from a family-owned local shop. Serving Clayton, Chesterfield, Wildwood, and the surrounding St. Louis metro since 1985.',
});

const faqSchema = generateFAQSchema(cabinetRefacingFAQs);

export default function CabinetRefacingPage() {
  const refacingImages = Array.from({ length: 18 }, (_, i) => ({
    src: `/images/gallery/kitchen remodel/Kitchen Cabinet Refacing/kitchen-cabinet-remodel-refacing-${String(i + 1).padStart(2, '0')}.jpg`,
    alt: `Cabinet refacing project ${i + 1} - Custom kitchen cabinet doors and finishes by Professional Wood Interiors - St. Louis, MO`,
    category: 'Kitchens',
    project: 'Kitchen Cabinet Refacing',
  }));
  const showcaseImages = refacingImages.slice(1, 9);

  const benefits = [
    {
      title: 'A Complete Transformation',
      description:
        'Everything you see is rebuilt — new doors, drawer fronts, veneered surfaces, and hardware — while the structural cabinet boxes you already own stay right where they are.',
    },
    {
      title: 'About a Week On-Site',
      description:
        'Most refacing projects install in 5–7 business days. We build your new cabinet faces in our workshop and come to you for installation, so your daily routine barely changes.',
    },
    {
      title: 'Less Waste',
      description:
        'Functional cabinet boxes stay out of the landfill. The new doors and drawer fronts are solid hardwood — built to last as long as the originals.',
    },
    {
      title: 'Custom-Built Results',
      description:
        'Every door is built in our shop to fit your existing cabinet openings exactly. No catalog sizes, no fillers, no compromise on style.',
    },
  ];

  const processSteps = [
    {
      number: '01',
      title: 'In-Home Assessment',
      description:
        'We visit your home, measure every cabinet, check the structural condition of the boxes, and talk through what you want changed. If refacing is the right call for your kitchen, we show you door samples, wood species, finish options, and hardware on the spot. The visit takes about an hour.',
    },
    {
      number: '02',
      title: 'Design and Detailed Plan',
      description:
        'Within a few days you receive a detailed plan with every door style, dimension, wood species, finish, and piece of hardware specified. What you approve is exactly what we build — no substitutions, no surprises.',
    },
    {
      number: '03',
      title: 'Shop Build',
      description:
        'Your doors, drawer fronts, veneers, and any added pieces are built by hand in our climate-controlled St. Louis shop. Finishing happens in the same controlled environment, so your home never deals with on-site stain fumes or dust. We label every piece by cabinet for installation day.',
    },
    {
      number: '04',
      title: 'On-Site Installation',
      description:
        'Installers arrive with everything pre-built and finished. Old doors come off, veneers go onto box exteriors, new doors and drawer fronts mount, hardware installs, and the kitchen is cleaned up before we leave each day. Most projects wrap on-site in 5–7 business days.',
    },
  ];

  const doorStyles = [
    {
      title: 'Shaker',
      description:
        'Clean recessed-panel construction. The most popular style we build — works in transitional, contemporary, and modern-traditional kitchens.',
      image: refacingImages[1],
    },
    {
      title: 'Raised Panel',
      description:
        'Classic traditional profile with a contoured center panel. The right choice for formal kitchens and homes with substantial architectural detailing.',
      image: refacingImages[5],
    },
    {
      title: 'Slab',
      description:
        'Flat-front contemporary door with no profile. Often paired with horizontal grain orientation for a modern European look.',
      image: refacingImages[9],
    },
    {
      title: 'Beadboard',
      description:
        'Vertical groove pattern — a great fit for farmhouse, cottage, and traditional kitchen styles.',
      image: refacingImages[13],
    },
  ];

  const woodSpecies = [
    {
      name: 'Maple',
      detail: 'Smooth grain, takes paint beautifully',
      gradient: 'linear-gradient(175deg, #F0DEC0 0%, #E5D1B0 50%, #DEC8A5 100%)',
    },
    {
      name: 'Oak',
      detail: 'Pronounced grain, classic stained look',
      gradient: 'linear-gradient(175deg, #D4B084 0%, #C39A6A 50%, #B5895A 100%)',
    },
    {
      name: 'Cherry',
      detail: 'Warm tones that deepen with age',
      gradient: 'linear-gradient(175deg, #A66348 0%, #8B4F3F 50%, #74402F 100%)',
    },
    {
      name: 'Walnut',
      detail: 'Rich, dark, contemporary',
      gradient: 'linear-gradient(175deg, #5C3A26 0%, #45291A 50%, #311C11 100%)',
    },
    {
      name: 'Hickory',
      detail: 'Strong character and color variation',
      gradient: 'linear-gradient(175deg, #C49066 0%, #855936 60%, #A06F44 100%)',
    },
    {
      name: 'Painted-grade Maple',
      detail: 'Tight grain for the cleanest painted finish',
      gradient: 'linear-gradient(175deg, #F8F0E0 0%, #F2EAD8 50%, #ECE2CD 100%)',
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
        eyebrow="Serving St. Louis Since 1985"
        title={
          <>
            Cabinet
            <span className="block italic font-light text-umber">Refacing,</span>
            <span className="block">handcrafted</span>
            <span className="block">in St. Louis.</span>
          </>
        }
        intro="Handcrafted new doors, drawer fronts, and custom finishes — installed in about a week, while the cabinet boxes you already own stay right where they are."
        image={{
          src: refacingImages[16].src,
          alt: 'Finished cabinet refacing in a St. Louis kitchen: handcrafted solid-wood doors and crown molding by Professional Wood Interiors.',
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
        lead="Many St. Louis homes were built with cabinet boxes that are still structurally sound. Cabinet Refacing can bring new life to your old cabinets."
        left={[
          "What's usually dated is the face: tired oak doors, chipped paint, brass hardware from a different era, or a finish that hasn't aged gracefully. That's exactly what cabinet refacing solves.",
          'Refacing replaces everything visible while keeping the structural boxes you already own. New solid-wood doors. Matching drawer fronts. Veneer over the exposed exteriors. Soft-close hinges. Hardware in the finish you choose.',
        ]}
        right={[
          'The result is a kitchen that looks brand-new — in about a quarter of the time on-site, and with far less disruption than a full custom-cabinet replacement.',
          "We've been refacing kitchens for St. Louis families since 1985. Everything is built by hand in our local shop, installed by the same people who built it, and backed by a written warranty. No catalog ordering, no offshore manufacturing, no handing the install off to subcontractors.",
        ]}
      />

      <DiptychList
        eyebrow="The Basics"
        title="What Stays. What Changes."
        subtitle="Cabinet refacing keeps your existing cabinet boxes in place and replaces every visible surface. Unless someone opens a cabinet and inspects the interior, a refaced kitchen is visually indistinguishable from a brand-new one."
        columns={[
          {
            numeral: 'i.',
            heading: 'What stays',
            accent: 'umber',
            items: [
              'The structural cabinet boxes',
              'Your existing kitchen layout',
              'Interior shelving and dividers',
              'Plumbing and electrical',
            ],
          },
          {
            numeral: 'ii.',
            heading: 'What changes',
            accent: 'brass',
            items: [
              'Every cabinet door, custom-built to fit your openings',
              'Every drawer front, in matching wood and finish',
              'Veneer across visible exteriors and end panels',
              'All hinges, hardware, and soft-close mechanisms',
              'Optional: drawer boxes, pull-outs, crown molding, lighting',
            ],
          },
        ]}
      />

      <NumberedBenefits
        eyebrow="Why Refacing"
        title="Why St. Louis Homeowners Choose Refacing"
        benefits={benefits}
      />

      <ImageStrip src={refacingImages[7].src} />

      <ComparisonTable
        eyebrow="The Comparison"
        title="Refacing vs. Painting vs. Replacing"
        subtitle="The three most common ways to update kitchen cabinets — and how to decide which one fits your situation."
        columns={['Painting', 'Refacing', 'Replacement']}
        highlightColumnIndex={1}
        rows={[
          { label: 'Visual change', cells: ['New color only', 'New doors, fronts, finish, hardware', 'Complete new cabinetry'] },
          { label: 'Door style', cells: ['Stays the same', 'Any style you want', 'Any style you want'] },
          { label: 'Layout changes', cells: ['No', 'Minor only', 'Yes'] },
          { label: 'Durability', cells: ['5–10 years typical', '20+ years (solid wood)', '20+ years (solid wood)'] },
          { label: 'On-site time', cells: ['3–5 days', '5–7 business days', '2–3 weeks'] },
        ]}
        decisions={[
          {
            eyebrow: 'Choose painting',
            body: 'Your door style still works for you, you want the simplest possible update, and you accept the finish will need redoing in 5–10 years.',
          },
          {
            eyebrow: 'Choose refacing',
            body: 'Your cabinet boxes are sound, your layout works, and you want a transformed kitchen with new doors, hardware, and finishes — without remodel-level disruption.',
          },
          {
            eyebrow: 'Choose replacement',
            body: "You want to change the layout, the existing boxes are damaged or low-quality, or you're combining the kitchen with adjacent rooms.",
          },
        ]}
      />

      <ServiceProcessTimeline
        eyebrow="How It Works"
        title="From First Call to Finished Kitchen"
        subtitle="Four steps, same crew throughout. No hand-offs to subcontractors."
        steps={processSteps}
      />

      <ImageCardRow
        eyebrow="Door Styles"
        title="Built in Our Shop, Designed for Your Kitchen"
        subtitle="Every door is built by hand. We bring physical samples to your consultation so you can see grain, color, and finish in your kitchen lighting."
        cards={doorStyles.map((style) => ({
          title: style.title,
          description: style.description,
          image: {
            src: style.image.src,
            alt: `Example of ${style.title} cabinet door refacing in a St. Louis kitchen`,
          },
        }))}
        columns={4}
      />

      {/* ============================================================
          WOOD SPECIES — Color/grain swatches (bespoke to refacing)
          ============================================================ */}
      <Section tone="cream" className="py-16 sm:py-20 relative isolate overflow-hidden">
        {/* Subtle paper grain backdrop */}
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none opacity-[0.07] mix-blend-multiply paper-grain" />
        <div className="max-w-5xl mx-auto relative">
          <div className="text-center mb-12">
            <Heading as="h2" eyebrow="The Materials">
              Wood Species We Build With
            </Heading>
            <p className="mt-5 max-w-2xl mx-auto text-base text-ink/75 font-sans leading-relaxed">
              Approximations below — actual color and grain vary by board and finish. Physical samples come to your
              in-home consultation.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 sm:gap-6">
            {woodSpecies.map((species) => (
              <article key={species.name}>
                <div className="relative aspect-[3/2] mb-4 overflow-hidden" style={{ background: species.gradient }}>
                  {/* Grain texture overlay */}
                  <div aria-hidden="true" className="absolute inset-0 opacity-50 mix-blend-multiply wood-grain" />
                  {/* Soft top-light */}
                  <div aria-hidden="true" className="absolute inset-0 sheen-vertical" />
                  <div className="absolute inset-0 ring-1 ring-inset ring-ink/15 pointer-events-none" />
                </div>
                <h3 className="font-display text-lg text-ink">{species.name}</h3>
                <p className="text-sm text-ink/70 font-sans mt-1 leading-relaxed">{species.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <EditorialGallery
        eyebrow="Recent Work"
        title="Cabinet Refacing in St. Louis Kitchens"
        subtitle="A small selection of recent refacing projects."
        featuredCaption="Recent kitchen refacing, St. Louis"
        images={showcaseImages}
        galleryHref="/showroom/kitchens"
        ctaLabel="View All Kitchen Projects"
      />

      <ServiceCityGrid
        title="Refacing Across the St. Louis Metro"
        subtitle="We work with homeowners throughout St. Louis County and St. Charles County, with a particular concentration in these communities."
        cities={cities}
        cardEyebrow="Cabinet Refacing in"
        hrefFor={(city) => `/locations/${city.slug}/cabinet-refacing`}
      />

      <ServiceAreaLinks serviceLocationSlug="cabinet-refacing" />

      <LocationFAQs faqs={cabinetRefacingFAQs} />

      <ServiceCTA
        title="Ready to See What Refacing Could Do?"
        body="We'll come measure, assess your cabinet boxes, and show you door samples and finishes in your own kitchen lighting. No pressure, and no follow-up calls until you reach out."
      />
    </>
  );
}
