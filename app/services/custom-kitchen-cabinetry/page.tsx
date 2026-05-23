import { Metadata } from 'next';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Container } from '@/components/ui/Container';
import { ButtonLink } from '@/components/ui/Button';
import Image from 'next/image';
import Link from 'next/link';
import { getImagesByCategory } from '@/lib/gallery-utils';
import { generateServiceSchema, generateFAQSchema } from '@/lib/structured-data';
import { kitchenCabinetryFAQs } from '@/lib/service-faqs';
import { LocationFAQs } from '@/components/locations/LocationFAQs';
import { ServiceAreaLinks } from '@/components/services/ServiceAreaLinks';

export const metadata: Metadata = {
  title: 'Kitchen Remodeling & Custom Cabinets in St. Louis',
  description:
    'Kitchen remodeling and custom cabinetry in St. Louis, Clayton, Chesterfield, and Wildwood. Full-scope kitchen design and handcrafted solid-wood cabinets built in our local shop since 1985. Free in-home consultation.',
  alternates: { canonical: '/services/custom-kitchen-cabinetry' },
  openGraph: {
    title: 'Kitchen Remodeling & Custom Cabinets in St. Louis | Professional Wood Interiors',
    description:
      'Kitchen remodeling and custom cabinetry in St. Louis. Full-scope kitchen design and handcrafted solid-wood cabinets built in our local shop since 1985.',
    type: 'website',
    siteName: 'Professional Wood Interiors',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kitchen Remodeling & Custom Cabinets in St. Louis',
    description:
      'Kitchen remodeling and custom cabinetry in St. Louis. Full-scope kitchen design and handcrafted solid-wood cabinets built in our local shop since 1985.',
  },
};

const serviceSchema = generateServiceSchema({
  name: 'Kitchen Remodeling and Custom Cabinetry',
  slug: 'custom-kitchen-cabinetry',
  description:
    'Full-scope kitchen remodeling and handcrafted custom cabinets for St. Louis area homes. Solid-wood construction, dovetail drawers, soft-close hardware, custom design, and coordinated trade management. Serving Clayton, Chesterfield, Wildwood, and the surrounding metro since 1985.',
});

const faqSchema = generateFAQSchema(kitchenCabinetryFAQs);

export default function CustomKitchenCabinetryPage() {
  const kitchenImages = getImagesByCategory('Kitchens');
  const showcaseImages = kitchenImages.slice(0, 8);

  const features = [
    { title: 'Solid wood construction' },
    { title: 'Dovetail drawer boxes' },
    { title: 'Soft-close hinges and slides' },
    { title: 'Full extension drawers' },
    { title: 'Custom storage solutions' },
    { title: 'Wide variety of door styles' },
    { title: 'Professional installation' },
    { title: 'Coordinated trade management' },
  ];

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
        'We&apos;re on-site until the last piece of crown molding is set, the punch list is closed, and you&apos;ve signed off on every detail.',
    },
  ];

  const processSteps = [
    {
      number: '01',
      title: 'In-Home Consultation',
      description:
        'We visit your home, measure the existing kitchen, and spend time understanding how you cook, entertain, and use the space. We talk through what&apos;s working, what isn&apos;t, and what you&apos;d like the space to become.',
    },
    {
      number: '02',
      title: 'Design and Detailed Plans',
      description:
        'We develop layout plans (often with structural changes), specify every door style, wood species, finish, hardware choice, and cabinet configuration. We walk you through it all before any build begins.',
    },
    {
      number: '03',
      title: 'Shop Build (6–8 Weeks)',
      description:
        'Your cabinetry is built by hand in our St. Louis shop. You&apos;re welcome to visit and see the work in progress — for most clients, that&apos;s a highlight of the project.',
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <Section className="pt-24 pb-16">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-brass uppercase tracking-widest text-sm font-sans mb-4">
              Serving the St. Louis Metro Since 1985
            </p>
            <Heading accent="italic" as="h1">
              Kitchen Remodeling & Custom Cabinetry in St. Louis
            </Heading>
            <p className="mt-6 text-xl text-ink/70 leading-relaxed font-elegant">
              Full-scope custom kitchens designed around how your family actually cooks, gathers,
              and entertains — built by hand in our local shop, coordinated by a single team.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:3144379988"
                className="inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold text-parchment bg-oxblood hover:bg-oxblood/90 rounded-sm shadow-md transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-oxblood focus-visible:ring-offset-2"
              >
                Call (314) 437-9988
              </a>
              <ButtonLink href="/contact-us" variant="outline">
                Get a Free Estimate
              </ButtonLink>
            </div>
          </div>
        </Container>
      </Section>

      {/* Intro */}
      <Section className="py-12">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-ink/80 leading-relaxed font-sans mb-6">
                A full kitchen remodel is a bigger commitment than refacing — and the right call
                when your existing layout fights you, the cabinets themselves are failing, or you
                want to open the kitchen into the adjacent family room. We design full-scope
                kitchens where the room becomes the heart of the house: an island that hosts
                morning coffee and weekend gatherings, a pantry built around how you actually
                shop, layouts that finally work with the way you live.
              </p>
              <p className="text-lg text-ink/80 leading-relaxed font-sans mb-6">
                Unlike mass-produced cabinets that come in standard sizes, every cabinet we build
                is sized to your exact space. No fillers, no compromises. Each piece is designed
                specifically for your kitchen, ensuring a perfect fit and the most efficient use
                of every inch.
              </p>
              <p className="text-lg text-ink/80 leading-relaxed font-sans">
                We handle the cabinetry, islands, pantries, built-ins, and finish carpentry
                in-house. For plumbing, electrical, flooring, and countertops, we coordinate with
                trade partners we&apos;ve worked with for years — so the project stays on
                schedule and the quality stays consistent.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Remodel vs Refacing Decision */}
      <Section tone="parchment" className="py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <Heading as="h2" eyebrow="Choosing Your Scope">
                Full Remodel or Cabinet Refacing?
              </Heading>
              <p className="mt-4 text-lg text-ink/70 font-elegant max-w-2xl mx-auto">
                Not every kitchen needs a full remodel. Here&apos;s how to think about which scope
                fits your situation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-sm shadow-sm border-2 border-brass">
                <h3 className="font-elegant text-2xl text-ink mb-4">
                  Full Kitchen Remodel Is Right When
                </h3>
                <ul className="space-y-3 text-ink/70 leading-relaxed text-lg">
                  <li>• You want to change the layout, move walls, or resize the island</li>
                  <li>• The cabinet boxes are damaged or failing</li>
                  <li>• You&apos;re combining the kitchen with adjacent rooms</li>
                  <li>• You want a different cabinet configuration entirely</li>
                  <li>• You&apos;re adding new appliance types or panel-ready integration</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-sm shadow-sm">
                <h3 className="font-elegant text-2xl text-ink mb-4">
                  Cabinet Refacing Is Better When
                </h3>
                <ul className="space-y-3 text-ink/70 leading-relaxed text-lg">
                  <li>• Your existing cabinet boxes are structurally sound</li>
                  <li>• The layout still works for how you cook</li>
                  <li>• You mainly want new doors, finishes, and hardware</li>
                  <li>• You want to save 40–50% vs. full replacement</li>
                  <li>• You need a faster on-site timeline (about a week vs. 2–3 weeks)</li>
                </ul>
                <div className="mt-6">
                  <Link
                    href="/services/cabinet-refacing"
                    className="text-brass font-sans font-semibold hover:underline"
                  >
                    Learn about Cabinet Refacing →
                  </Link>
                </div>
              </div>
            </div>

            <p className="mt-8 text-base text-ink/60 italic text-center max-w-2xl mx-auto">
              We&apos;ll walk through both options honestly during your consultation. If refacing
              is the better fit, we&apos;ll tell you — we&apos;d rather match the right scope to
              the kitchen than sell you something bigger than you need.
            </p>
          </div>
        </Container>
      </Section>

      {/* Gallery Showcase */}
      <Section className="py-16">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Heading as="h2" eyebrow="Recent Work">
                Our Kitchen Portfolio
              </Heading>
              <p className="mt-4 text-lg text-ink/70 font-elegant">
                Custom kitchens we&apos;ve designed and built for St. Louis-area homes
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
              {showcaseImages.map((image) => (
                <Link
                  key={image.src}
                  href="/showroom/kitchens"
                  className="group relative aspect-[3/4] overflow-hidden rounded-sm shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              ))}
            </div>

            <div className="text-center">
              <ButtonLink href="/showroom/kitchens" variant="outline" className="group">
                View All Kitchen Projects
                <svg
                  className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1"
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
        </Container>
      </Section>

      {/* What's Included in a Remodel */}
      <Section tone="parchment" className="py-16">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Heading as="h2" eyebrow="Scope">
                What a Full Kitchen Remodel Includes
              </Heading>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {remodelIncludes.map((item) => (
                <div
                  key={item.title}
                  className="p-6 bg-white rounded-sm shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="text-xl font-elegant font-semibold text-ink mb-3">
                    {item.title}
                  </h3>
                  <p className="text-ink/70 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Features */}
      <Section className="py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Heading as="h2" eyebrow="Build Standard">
                Every Kitchen We Build Includes
              </Heading>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 bg-parchment rounded-sm shadow-sm hover:shadow-md transition-shadow"
                >
                  <svg
                    className="w-6 h-6 flex-shrink-0 text-brass mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <p className="text-lg text-ink font-sans leading-relaxed">{feature.title}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Process */}
      <Section tone="parchment" className="py-16">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Heading as="h2" eyebrow="How It Works">
                Our Kitchen Remodel Process
              </Heading>
              <p className="mt-4 text-lg text-ink/70 font-elegant max-w-2xl mx-auto">
                Most projects run 10–14 weeks from design approval to final walkthrough.
              </p>
            </div>

            <div className="space-y-6">
              {processSteps.map((step) => (
                <div
                  key={step.number}
                  className="flex flex-col md:flex-row gap-6 p-8 bg-white rounded-sm shadow-sm"
                >
                  <div className="flex-shrink-0">
                    <div className="font-elegant text-5xl text-brass font-light">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-elegant font-semibold text-ink mb-3">
                      {step.title}
                    </h3>
                    <p className="text-lg text-ink/70 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Service Area */}
      <Section className="py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <Heading as="h2" eyebrow="Service Area">
                Kitchen Remodeling Across the St. Louis Metro
              </Heading>
              <p className="mt-4 text-lg text-ink/70 font-elegant max-w-2xl mx-auto">
                We design and build kitchens for homeowners throughout St. Louis County and St.
                Charles County, with a concentration in these communities.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {cities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/locations/${city.slug}/kitchen-remodeling`}
                  className="group p-8 bg-parchment border border-ink/10 rounded-sm hover:border-brass hover:shadow-md transition-all text-center"
                >
                  <h3 className="font-elegant text-2xl text-ink group-hover:text-brass transition-colors mb-2">
                    {city.name}
                  </h3>
                  <p className="text-ink/60 font-sans">
                    Kitchen Remodeling in {city.name}, MO →
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <ServiceAreaLinks serviceLocationSlug="kitchen-remodeling" />

      <LocationFAQs faqs={kitchenCabinetryFAQs} />

      {/* CTA Section */}
      <Section tone="walnut" className="py-16">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <Heading tone="dark" showDivider={false} className="mb-6">
              Ready to Start Designing Your Kitchen?
            </Heading>
            <p className="text-parchment/80 text-lg mb-8 leading-relaxed">
              The in-home consultation is free and takes about an hour. We&apos;ll measure the
              kitchen, talk through what you want changed, walk you through both full-remodel and
              refacing scopes, and come back with a detailed written quote.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:3144379988"
                className="inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold text-walnut bg-brass hover:bg-brass/90 rounded-sm shadow-xl transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2 focus-visible:ring-offset-walnut"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                Schedule a Consultation
              </ButtonLink>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
