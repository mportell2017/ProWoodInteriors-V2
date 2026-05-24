import { Metadata } from 'next';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Container } from '@/components/ui/Container';
import { ButtonLink } from '@/components/ui/Button';
import Image from 'next/image';
import Link from 'next/link';
import { generateServiceSchema, generateFAQSchema } from '@/lib/structured-data';
import { cabinetRefacingFAQs } from '@/lib/service-faqs';
import { LocationFAQs } from '@/components/locations/LocationFAQs';
import { ServiceAreaLinks } from '@/components/services/ServiceAreaLinks';

export const metadata: Metadata = {
  title: 'Cabinet Refacing in St. Louis, MO',
  description:
    'Cabinet refacing in St. Louis, Clayton, Chesterfield, and Wildwood. Handcrafted solid-wood doors, drawer fronts, and custom finishes — 40–50% less than full replacement. Family-owned since 1985. Free in-home consultation.',
  alternates: { canonical: '/services/cabinet-refacing' },
  openGraph: {
    title: 'Cabinet Refacing in St. Louis, MO | Professional Wood Interiors',
    description:
      'Cabinet refacing in St. Louis, Clayton, Chesterfield, and Wildwood. Handcrafted solid-wood doors, drawer fronts, and custom finishes — 40–50% less than full replacement.',
    type: 'website',
    siteName: 'Professional Wood Interiors',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cabinet Refacing in St. Louis, MO | Professional Wood Interiors',
    description:
      'Cabinet refacing in St. Louis, Clayton, Chesterfield, and Wildwood. Handcrafted solid-wood doors, drawer fronts, and custom finishes — 40–50% less than full replacement.',
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
      title: 'Cost Effective',
      description:
        'Save 40–50% compared to full cabinet replacement while still getting a dramatic transformation. The cabinet boxes you already own stay; everything visible gets rebuilt.',
    },
    {
      title: 'About a Week On-Site',
      description:
        'Most refacing projects install in 5–7 business days. The build happens off-site in our shop, so your daily routine barely changes.',
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
      title: 'Design and Detailed Quote',
      description:
        'Within a few days you receive a written quote with every door style, dimension, wood species, finish, and piece of hardware specified. There are no ballparks and no surprise charges later — what you approve is exactly what we build and exactly what you pay.',
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

  const priceVariables = [
    { title: 'Cabinet count', detail: 'More cabinets means more doors and drawer fronts to build by hand.' },
    { title: 'Wood species', detail: 'Painted-grade maple is typically less than walnut or cherry.' },
    { title: 'Door style', detail: 'Slab and shaker are simpler builds; raised panel adds shop time.' },
    { title: 'Hardware', detail: 'Soft-close hinges and pulls vary by finish, brand, and quantity.' },
    { title: 'Drawer boxes', detail: 'Replacing them in addition to fronts adds material and labor.' },
    { title: 'Add-ons', detail: 'Pull-out shelves, crown molding, under-cabinet lighting.' },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ============================================================
          HERO — Split editorial layout
          ============================================================ */}
      <section className="relative isolate overflow-hidden bg-parchment">
        <Container className="pt-12 pb-12 sm:pt-16 sm:pb-16 lg:pt-20 lg:pb-20">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: copy */}
            <div className="lg:col-span-6 xl:col-span-5">
              <div className="flex items-center gap-3 mb-7">
                <div className="h-px w-12 bg-gradient-to-r from-transparent via-brass/70 to-brass" />
                <span className="text-[11px] tracking-[0.22em] uppercase font-medium text-umber">
                  Serving St. Louis Since 1985
                </span>
              </div>

              <h1 className="font-display tracking-tight text-ink text-[44px] sm:text-6xl lg:text-[68px] leading-[1.02]">
                Cabinet
                <span className="block italic font-light text-umber">Refacing,</span>
                <span className="block">handcrafted</span>
                <span className="block">in St. Louis.</span>
              </h1>

              <p className="mt-8 text-base sm:text-lg leading-relaxed text-ink/80 font-sans max-w-md">
                Handcrafted new doors, drawer fronts, and custom finishes — installed in about a
                week, at 40–50% less than full cabinet replacement.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <a
                  href="tel:3144379988"
                  className="inline-flex items-center justify-center gap-3 px-7 py-4 text-base font-semibold tracking-wide text-parchment bg-oxblood hover:bg-oxblood/90 rounded-sm shadow-[0_10px_24px_rgba(122,29,29,0.22)] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-oxblood focus-visible:ring-offset-2"
                >
                  Call (314) 437-9988
                </a>
                <ButtonLink href="/contact-us" variant="outline">
                  Get a Free Estimate
                </ButtonLink>
              </div>

              <div className="mt-12 hidden lg:flex items-center gap-5">
                <span className="font-display italic text-5xl text-brass/60 font-light leading-none">
                  40
                </span>
                <div className="text-[11px] tracking-[0.22em] uppercase text-umber/70 font-medium leading-relaxed">
                  Years of <br />
                  Local Craft
                </div>
              </div>
            </div>

            {/* Right: framed image */}
            <div className="lg:col-span-6 xl:col-span-7">
              <div className="relative aspect-[5/6] sm:aspect-[4/5] lg:aspect-[4/5] overflow-hidden">
                <Image
                  src={refacingImages[16].src}
                  alt="Finished cabinet refacing in a St. Louis kitchen: handcrafted solid-wood doors and crown molding by Professional Wood Interiors."
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
                {/* Editorial frame */}
                <div className="absolute inset-0 z-10 pointer-events-none">
                  <div className="absolute inset-3 sm:inset-4 border border-parchment/40" />
                  <div className="absolute inset-4 sm:inset-5 border border-brass/30" />
                  {/* Corner ticks */}
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4 w-6 h-6 border-t-2 border-l-2 border-brass/60" />
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-6 h-6 border-t-2 border-r-2 border-brass/60" />
                  <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 w-6 h-6 border-b-2 border-l-2 border-brass/60" />
                  <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 w-6 h-6 border-b-2 border-r-2 border-brass/60" />
                </div>
                {/* Subtle warmth */}
                <div className="absolute inset-0 bg-gradient-to-tr from-ink/10 to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </Container>

        {/* Closing rule */}
        <div className="flex items-center justify-center gap-3 pb-2">
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-umber/25 to-transparent" />
          <svg className="w-3 h-3 text-umber/40" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L13.09 5.26L16 6L13.09 6.74L12 10L10.91 6.74L8 6L10.91 5.26L12 2Z" />
          </svg>
          <div className="h-px w-16 bg-gradient-to-l from-transparent via-umber/25 to-transparent" />
        </div>
      </section>

      {/* ============================================================
          INTRO — Two-column editorial with drop-cap
          ============================================================ */}
      <Section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-x-12 gap-y-8">
            <div className="lg:col-span-12">
              <p className="font-display text-2xl sm:text-[28px] leading-[1.35] text-ink first-letter:font-display first-letter:text-[5.5rem] first-letter:font-medium first-letter:text-brass first-letter:float-left first-letter:leading-[0.85] first-letter:mr-3 first-letter:mt-1">
                Many St. Louis homes — particularly in Clayton, Chesterfield, and Wildwood — were
                built with cabinet boxes that are still structurally sound.
              </p>
            </div>

            <div className="lg:col-span-6 space-y-5">
              <p className="text-[15px] sm:text-base text-ink/80 leading-[1.7] font-sans">
                What&apos;s usually dated is the face: tired oak doors, chipped paint, brass
                hardware from a different era, or a finish that hasn&apos;t aged gracefully.
                That&apos;s exactly what cabinet refacing solves.
              </p>
              <p className="text-[15px] sm:text-base text-ink/80 leading-[1.7] font-sans">
                Refacing replaces everything visible while keeping the structural boxes you
                already own. New solid-wood doors. Matching drawer fronts. Veneer over the exposed
                exteriors. Soft-close hinges. Hardware in the finish you choose.
              </p>
            </div>
            <div className="lg:col-span-6 space-y-5">
              <p className="text-[15px] sm:text-base text-ink/80 leading-[1.7] font-sans">
                The result is a kitchen that looks brand-new — typically for 40–50% less than full
                custom-cabinet replacement, in about a quarter of the time on-site.
              </p>
              <p className="text-[15px] sm:text-base text-ink/80 leading-[1.7] font-sans">
                We&apos;ve been refacing kitchens for St. Louis families since 1985. Everything is
                built by hand in our local shop, installed by the same people who built it, and
                backed by a written warranty. No catalog ordering, no offshore manufacturing, no
                handing the install off to subcontractors.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ============================================================
          STAYS / CHANGES — Visual diptych
          ============================================================ */}
      <Section tone="parchment" className="py-16 sm:py-20 border-t border-ink/5">
        <div className="max-w-5xl mx-auto">
          <Heading as="h2" eyebrow="The Basics" className="text-center">
            What Stays. What Changes.
          </Heading>

          <p className="mt-8 text-base text-ink/80 leading-[1.7] font-sans max-w-2xl mx-auto text-center">
            Cabinet refacing keeps your existing cabinet boxes in place and replaces every visible
            surface. Unless someone opens a cabinet and inspects the interior, a refaced kitchen
            is visually indistinguishable from a brand-new one.
          </p>

          <div className="mt-14 grid md:grid-cols-2 gap-px bg-ink/10 border border-ink/10">
            {/* Stays */}
            <div className="bg-parchment p-8 sm:p-10">
              <div className="flex items-baseline gap-3 mb-7">
                <span className="font-display italic text-3xl text-umber/60 leading-none">i.</span>
                <h3 className="font-display text-2xl text-ink">What stays</h3>
              </div>
              <ul className="space-y-4">
                {[
                  'The structural cabinet boxes',
                  'Your existing kitchen layout',
                  'Interior shelving and dividers',
                  'Plumbing and electrical',
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-4 text-[15px] text-ink/80 font-sans leading-relaxed"
                  >
                    <span className="mt-[0.6rem] inline-block h-px w-4 bg-umber/40 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Changes */}
            <div className="bg-parchment p-8 sm:p-10">
              <div className="flex items-baseline gap-3 mb-7">
                <span className="font-display italic text-3xl text-brass leading-none">ii.</span>
                <h3 className="font-display text-2xl text-ink">What changes</h3>
              </div>
              <ul className="space-y-4">
                {[
                  'Every cabinet door, custom-built to fit your openings',
                  'Every drawer front, in matching wood and finish',
                  'Veneer across visible exteriors and end panels',
                  'All hinges, hardware, and soft-close mechanisms',
                  'Optional: drawer boxes, pull-outs, crown molding, lighting',
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-4 text-[15px] text-ink/80 font-sans leading-relaxed"
                  >
                    <span className="mt-[0.6rem] inline-block h-px w-4 bg-brass flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* ============================================================
          STAT MOMENT — 40–50% Less
          ============================================================ */}
      <section className="relative isolate overflow-hidden bg-walnut text-parchment py-20 sm:py-24 lg:py-28">
        {/* Subtle radial atmosphere */}
        <div
          className="absolute inset-0 opacity-50 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(181,139,75,0.10) 0%, rgba(44,24,16,0) 60%)',
          }}
        />
        <Container>
          <div className="max-w-4xl mx-auto text-center relative">
            <p className="text-[11px] tracking-[0.24em] uppercase text-brass mb-8 font-medium">
              The Investment
            </p>

            <p className="font-display leading-[0.95] text-parchment">
              <span className="block text-[88px] sm:text-[140px] lg:text-[180px] italic font-light tracking-tight">
                40–50%
              </span>
            </p>

            <div className="mt-6 flex items-center justify-center gap-4">
              <div className="h-px w-12 sm:w-20 bg-gradient-to-r from-transparent to-brass/60" />
              <span className="font-elegant italic text-lg sm:text-2xl text-brass">
                less than full replacement
              </span>
              <div className="h-px w-12 sm:w-20 bg-gradient-to-l from-transparent to-brass/60" />
            </div>

            <p className="mt-10 max-w-2xl mx-auto text-base sm:text-[17px] text-parchment/75 leading-[1.7] font-sans">
              Every refacing project is priced specifically to the kitchen. As a general
              framework, custom refacing typically runs 40–50% less than fully replacing your
              cabinets with comparable custom work — sometimes more when the existing boxes are in
              particularly good shape.
            </p>
          </div>
        </Container>
      </section>

      {/* ============================================================
          BENEFITS — Numbered editorial
          ============================================================ */}
      <Section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <Heading as="h2" eyebrow="Why Refacing">
              Why St. Louis Homeowners Choose Refacing
            </Heading>
          </div>

          <div className="grid md:grid-cols-2 gap-x-14 gap-y-12">
            {benefits.map((benefit, idx) => (
              <article key={benefit.title}>
                <div className="flex items-baseline gap-5 sm:gap-6">
                  <span className="font-display italic text-5xl sm:text-6xl text-brass/70 font-light leading-none flex-shrink-0">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-display text-xl sm:text-2xl text-ink mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-[15px] sm:text-base text-ink/80 leading-[1.7] font-sans">
                      {benefit.description}
                    </p>
                  </div>
                </div>
                <div className="mt-7 ml-[4.25rem] sm:ml-[5rem] h-px bg-gradient-to-r from-umber/20 to-transparent" />
              </article>
            ))}
          </div>
        </div>
      </Section>

      {/* ============================================================
          COMPARISON TABLE — Refined
          ============================================================ */}
      <Section tone="parchment" className="py-16 sm:py-20 border-t border-ink/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <Heading as="h2" eyebrow="The Comparison">
              Refacing vs. Painting vs. Replacing
            </Heading>
            <p className="mt-5 text-base text-ink/75 max-w-2xl mx-auto font-sans leading-relaxed">
              The three most common ways to update kitchen cabinets — and how to decide which one
              fits your situation.
            </p>
          </div>

          <div className="overflow-x-auto -mx-4 sm:mx-0">
            <table className="w-full text-left min-w-[640px] sm:min-w-0">
              <thead>
                <tr className="border-y border-ink/15">
                  <th className="px-4 sm:px-6 py-5 font-display text-sm tracking-wide uppercase text-umber/70">
                    &nbsp;
                  </th>
                  <th className="px-4 sm:px-6 py-5 font-display text-base sm:text-lg text-ink/80 text-center">
                    Painting
                  </th>
                  <th className="relative px-4 sm:px-6 py-5 font-display text-base sm:text-lg text-ink text-center">
                    <span className="absolute top-0 left-1 right-1 h-[3px] bg-brass" />
                    Refacing
                  </th>
                  <th className="px-4 sm:px-6 py-5 font-display text-base sm:text-lg text-ink/80 text-center">
                    Replacement
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ink/8">
                {[
                  {
                    label: 'Visual change',
                    a: 'New color only',
                    b: 'New doors, fronts, finish, hardware',
                    c: 'Complete new cabinetry',
                  },
                  { label: 'Door style', a: 'Stays the same', b: 'Any style you want', c: 'Any style you want' },
                  { label: 'Layout changes', a: 'No', b: 'Minor only', c: 'Yes' },
                  { label: 'Durability', a: '5–10 years typical', b: '20+ years (solid wood)', c: '20+ years (solid wood)' },
                  { label: 'On-site time', a: '3–5 days', b: '5–7 business days', c: '2–3 weeks' },
                  { label: 'Relative cost', a: '$', b: '$$', c: '$$$$' },
                ].map((row, idx) => (
                  <tr key={row.label} className={idx % 2 === 1 ? 'bg-ink/[0.015]' : ''}>
                    <td className="px-4 sm:px-6 py-4 font-display text-[15px] sm:text-base text-ink">
                      {row.label}
                    </td>
                    <td className="px-4 sm:px-6 py-4 text-center text-[14px] sm:text-[15px] text-ink/70 font-sans">
                      {row.a}
                    </td>
                    <td className="relative px-4 sm:px-6 py-4 text-center text-[14px] sm:text-[15px] text-ink font-sans font-medium bg-brass/[0.06]">
                      {row.b}
                    </td>
                    <td className="px-4 sm:px-6 py-4 text-center text-[14px] sm:text-[15px] text-ink/70 font-sans">
                      {row.c}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Decision helpers */}
          <div className="mt-12 grid md:grid-cols-3 gap-px bg-ink/10 border border-ink/10">
            <div className="bg-parchment p-7">
              <p className="text-[11px] tracking-[0.22em] uppercase text-umber/70 mb-3">
                Choose painting
              </p>
              <p className="text-[15px] text-ink/80 leading-[1.7] font-sans">
                Your door style still works for you, you want the lowest cost option, and you
                accept the finish will need redoing in 5–10 years.
              </p>
            </div>
            <div className="bg-parchment p-7 relative">
              <span className="absolute top-0 left-0 right-0 h-[3px] bg-brass" />
              <p className="text-[11px] tracking-[0.22em] uppercase text-brass mb-3 font-medium">
                Choose refacing
              </p>
              <p className="text-[15px] text-ink/85 leading-[1.7] font-sans">
                Your cabinet boxes are sound, your layout works, and you want a transformed
                kitchen with new doors, hardware, and finishes — without remodel-level cost or
                disruption.
              </p>
            </div>
            <div className="bg-parchment p-7">
              <p className="text-[11px] tracking-[0.22em] uppercase text-umber/70 mb-3">
                Choose replacement
              </p>
              <p className="text-[15px] text-ink/80 leading-[1.7] font-sans">
                You want to change the layout, the existing boxes are damaged or low-quality, or
                you&apos;re combining the kitchen with adjacent rooms.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ============================================================
          COST VARIABLES
          ============================================================ */}
      <Section className="py-16 sm:py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <Heading as="h2" eyebrow="What Moves the Price">
              The Variables in a Refacing Estimate
            </Heading>
            <p className="mt-5 max-w-2xl mx-auto text-base text-ink/75 font-sans leading-relaxed">
              A real number requires seeing the cabinets in person, but here&apos;s what shifts
              the bid in either direction.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-8">
            {priceVariables.map((item) => (
              <div key={item.title} className="border-l-2 border-brass/40 pl-5 py-1">
                <h3 className="font-display text-lg text-ink mb-2">{item.title}</h3>
                <p className="text-[15px] text-ink/75 font-sans leading-[1.7]">{item.detail}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <p className="font-elegant italic text-xl sm:text-[22px] text-ink/85 leading-relaxed max-w-2xl mx-auto mb-8">
              We provide a fixed written quote after the in-home consultation. No surprise add-ons.
              What you approve is what you pay.
            </p>
            <ButtonLink href="/cabinet-refacing-cost" variant="outline">
              Read the Full St. Louis Refacing Cost Guide
            </ButtonLink>
          </div>
        </div>
      </Section>

      {/* ============================================================
          PROCESS — Editorial timeline
          ============================================================ */}
      <Section tone="parchment" className="py-16 sm:py-20 border-t border-ink/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <Heading as="h2" eyebrow="How It Works">
              From First Call to Finished Kitchen
            </Heading>
            <p className="mt-5 max-w-2xl mx-auto text-base text-ink/75 font-sans leading-relaxed">
              Four steps, same crew throughout. No hand-offs to subcontractors.
            </p>
          </div>

          <ol className="relative space-y-12 sm:space-y-14">
            {/* Vertical line on desktop */}
            <div
              aria-hidden="true"
              className="hidden md:block absolute left-[4.25rem] top-3 bottom-3 w-px bg-gradient-to-b from-brass/40 via-umber/15 to-transparent"
            />

            {processSteps.map((step) => (
              <li
                key={step.number}
                className="relative grid md:grid-cols-[8rem_1fr] gap-4 md:gap-10 items-start"
              >
                <div className="relative z-10 flex items-baseline gap-3 md:block">
                  <span className="font-display italic text-6xl sm:text-7xl text-brass leading-none">
                    {step.number}
                  </span>
                </div>
                <div className="md:pt-4">
                  <h3 className="font-display text-2xl sm:text-[28px] text-ink mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[15px] sm:text-base text-ink/80 leading-[1.75] font-sans max-w-2xl">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* ============================================================
          DOOR STYLES — Image-led
          ============================================================ */}
      <Section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Heading as="h2" eyebrow="Door Styles">
              Built in Our Shop, Designed for Your Kitchen
            </Heading>
            <p className="mt-5 max-w-2xl mx-auto text-base text-ink/75 font-sans leading-relaxed">
              Every door is built by hand. We bring physical samples to your consultation so you
              can see grain, color, and finish in your kitchen lighting.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {doorStyles.map((style, idx) => (
              <article key={style.title} className="group">
                <div className="relative aspect-[3/4] overflow-hidden mb-5 bg-ink/5">
                  <Image
                    src={style.image.src}
                    alt={`Example of ${style.title} cabinet door refacing in a St. Louis kitchen`}
                    fill
                    className="object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-ink/10 pointer-events-none" />
                  <span className="absolute top-3 left-3 font-display italic text-xs tracking-wider text-parchment bg-walnut/85 backdrop-blur-sm px-2.5 py-1">
                    №&nbsp;{String(idx + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="font-display text-xl text-ink mb-2">{style.title}</h3>
                <p className="text-sm text-ink/75 font-sans leading-relaxed">
                  {style.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      {/* ============================================================
          WOOD SPECIES — Color/grain swatches
          ============================================================ */}
      <Section tone="parchment" className="py-16 sm:py-20 border-t border-ink/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <Heading as="h2" eyebrow="The Materials">
              Wood Species We Build With
            </Heading>
            <p className="mt-5 max-w-2xl mx-auto text-base text-ink/75 font-sans leading-relaxed">
              Approximations below — actual color and grain vary by board and finish. Physical
              samples come to your in-home consultation.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 sm:gap-6">
            {woodSpecies.map((species) => (
              <article key={species.name}>
                <div
                  className="relative aspect-[3/2] mb-4 overflow-hidden"
                  style={{ background: species.gradient }}
                >
                  {/* Grain texture overlay */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 opacity-50 mix-blend-multiply"
                    style={{
                      backgroundImage:
                        'repeating-linear-gradient(91deg, transparent 0px, transparent 2px, rgba(0,0,0,0.07) 2px, rgba(0,0,0,0.07) 3px), repeating-linear-gradient(89deg, transparent 0px, transparent 9px, rgba(255,255,255,0.05) 9px, rgba(255,255,255,0.05) 10px)',
                    }}
                  />
                  {/* Soft top-light */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0"
                    style={{
                      background:
                        'linear-gradient(180deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0) 50%, rgba(0,0,0,0.10) 100%)',
                    }}
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-ink/15 pointer-events-none" />
                </div>
                <h3 className="font-display text-lg text-ink">{species.name}</h3>
                <p className="text-sm text-ink/70 font-sans mt-1 leading-relaxed">
                  {species.detail}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      {/* ============================================================
          GALLERY — Editorial staggered
          ============================================================ */}
      <Section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Heading as="h2" eyebrow="Recent Work">
              Cabinet Refacing in St. Louis Kitchens
            </Heading>
            <p className="mt-5 max-w-xl mx-auto text-base text-ink/75 font-sans">
              A small selection of recent refacing projects.
            </p>
          </div>

          {/* Featured image */}
          <Link
            href="/showroom/kitchens"
            className="group block relative aspect-[21/10] sm:aspect-[16/7] overflow-hidden bg-ink/5 mb-3 sm:mb-4"
          >
            <Image
              src={showcaseImages[0].src}
              alt={showcaseImages[0].alt}
              fill
              className="object-cover transition-transform duration-[1200ms] group-hover:scale-[1.03]"
              sizes="(max-width: 1024px) 100vw, 1100px"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-ink/10 pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-ink/65 via-ink/15 to-transparent">
              <span className="font-elegant italic text-parchment text-lg sm:text-xl">
                Recent kitchen refacing, St. Louis
              </span>
            </div>
          </Link>

          {/* Row of 3 medium */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-3 sm:mb-4">
            {showcaseImages.slice(1, 4).map((image) => (
              <Link
                key={image.src}
                href="/showroom/kitchens"
                className="group relative aspect-square overflow-hidden bg-ink/5"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-[1200ms] group-hover:scale-[1.05]"
                  sizes="(max-width: 768px) 33vw, 360px"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-ink/10 pointer-events-none" />
              </Link>
            ))}
          </div>

          {/* Row of 4 small */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {showcaseImages.slice(4, 8).map((image) => (
              <Link
                key={image.src}
                href="/showroom/kitchens"
                className="group relative aspect-[4/5] overflow-hidden bg-ink/5"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-[1200ms] group-hover:scale-[1.05]"
                  sizes="(max-width: 768px) 50vw, 260px"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-ink/10 pointer-events-none" />
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <ButtonLink href="/showroom/kitchens" variant="outline" className="group">
              View All Kitchen Projects
              <svg
                className="w-5 h-5 ml-1 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </ButtonLink>
          </div>
        </div>
      </Section>

      {/* ============================================================
          SERVICE AREA CITIES
          ============================================================ */}
      <Section tone="parchment" className="py-16 sm:py-20 border-t border-ink/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <Heading as="h2" eyebrow="Service Area">
              Refacing Across the St. Louis Metro
            </Heading>
            <p className="mt-5 max-w-2xl mx-auto text-base text-ink/75 font-sans leading-relaxed">
              We work with homeowners throughout St. Louis County and St. Charles County, with a
              particular concentration in these communities.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-px bg-ink/10 border border-ink/10">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/locations/${city.slug}/cabinet-refacing`}
                className="group bg-parchment p-10 hover:bg-walnut transition-colors duration-500 text-center"
              >
                <span className="text-[11px] tracking-[0.22em] uppercase text-umber/70 group-hover:text-brass transition-colors">
                  Cabinet Refacing in
                </span>
                <h3 className="mt-3 font-display text-3xl text-ink group-hover:text-parchment transition-colors">
                  {city.name}
                </h3>
                <p className="mt-4 text-sm text-ink/60 font-sans group-hover:text-parchment/70 transition-colors">
                  {city.name}, Missouri&nbsp;&rarr;
                </p>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      <ServiceAreaLinks serviceLocationSlug="cabinet-refacing" />

      <LocationFAQs faqs={cabinetRefacingFAQs} />

      {/* ============================================================
          FINAL CTA — Walnut with editorial frame
          ============================================================ */}
      <section className="relative isolate overflow-hidden bg-walnut text-parchment py-20 sm:py-24">
        {/* Editorial frame border */}
        <div className="absolute inset-5 sm:inset-8 lg:inset-12 border border-brass/15 pointer-events-none" />
        <div className="absolute inset-6 sm:inset-9 lg:inset-[3.25rem] border border-parchment/8 pointer-events-none" />

        <Container>
          <div className="max-w-3xl mx-auto text-center relative">
            <p className="text-[11px] tracking-[0.24em] uppercase text-brass mb-6 font-medium">
              Free, no-pressure
            </p>
            <Heading tone="dark" showDivider={false} className="mb-6">
              Ready to See What Refacing Could Do?
            </Heading>
            <p className="font-elegant italic text-lg sm:text-xl text-parchment/85 leading-relaxed mb-10 max-w-2xl mx-auto">
              We&apos;ll come measure, assess your cabinet boxes, show you door samples and
              finishes, and give you a real quote — not a ballpark. No follow-up calls until you
              reach out.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:3144379988"
                className="inline-flex items-center gap-3 px-8 py-4 text-base font-semibold tracking-wide text-walnut bg-brass hover:bg-brass/90 rounded-sm shadow-[0_14px_28px_rgba(0,0,0,0.35)] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2 focus-visible:ring-offset-walnut"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                (314) 437-9988
              </a>
              <ButtonLink
                href="/contact-us"
                variant="outline"
                className="border-2 border-parchment/40 text-parchment hover:bg-parchment/10"
              >
                Get a Free Estimate
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
