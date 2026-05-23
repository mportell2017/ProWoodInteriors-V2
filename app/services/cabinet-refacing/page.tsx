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
  const showcaseImages = refacingImages.slice(0, 8);

  const benefits = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: 'Cost Effective',
      description:
        'Save 40–50% compared to full cabinet replacement while still getting a dramatic transformation. The cabinet boxes you already own stay; everything visible gets rebuilt.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: 'About a Week On-Site',
      description:
        'Most refacing projects install in 5–7 business days. The build happens off-site in our shop, so your daily routine barely changes.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: 'Less Waste',
      description:
        'Functional cabinet boxes stay out of the landfill. The new doors and drawer fronts are solid hardwood — built to last as long as the originals.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
          />
        </svg>
      ),
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
    },
    {
      title: 'Raised Panel',
      description:
        'Classic traditional profile with a contoured center panel. The right choice for formal kitchens and homes with substantial architectural detailing.',
    },
    {
      title: 'Slab',
      description:
        'Flat-front contemporary door with no profile. Often paired with horizontal grain orientation for a modern European look.',
    },
    {
      title: 'Beadboard',
      description:
        'Vertical groove pattern — a great fit for farmhouse, cottage, and traditional kitchen styles.',
    },
  ];

  const woodSpecies = [
    { name: 'Maple', detail: 'Smooth grain, takes paint beautifully' },
    { name: 'Oak', detail: 'Pronounced grain, classic stained look' },
    { name: 'Cherry', detail: 'Warm tones that deepen with age' },
    { name: 'Walnut', detail: 'Rich, dark, contemporary' },
    { name: 'Hickory', detail: 'Strong character and color variation' },
    { name: 'Painted-grade Maple', detail: 'Tight grain for the cleanest painted finish' },
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
              Cabinet Refacing in St. Louis, Missouri
            </Heading>
            <p className="mt-6 text-xl text-ink/70 leading-relaxed font-elegant">
              Handcrafted new doors, drawer fronts, and custom finishes — installed in about a
              week, at 40–50% less than full cabinet replacement.
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

      {/* Intro Section */}
      <Section className="py-12">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-ink/80 leading-relaxed font-sans mb-6">
                Many St. Louis homes — particularly in established neighborhoods around Clayton,
                Chesterfield, and Wildwood — were built with cabinet boxes that are still
                structurally sound. Solid plywood or hardwood frames, properly mounted, with layouts
                that still work for the room. What&apos;s usually dated is the face: tired oak
                doors, chipped paint, brass hardware from a different era, or a finish that
                hasn&apos;t aged gracefully. That&apos;s exactly what cabinet refacing solves.
              </p>
              <p className="text-lg text-ink/80 leading-relaxed font-sans mb-6">
                Cabinet refacing replaces everything visible while keeping the structural boxes
                you already own. New solid-wood doors. Matching drawer fronts. Veneer over the
                exposed cabinet exteriors. Soft-close hinges. Hardware in the finish you choose.
                The result is a kitchen that looks brand-new — typically for 40–50% less than a
                full custom-cabinet replacement, in about a quarter of the time on-site.
              </p>
              <p className="text-lg text-ink/80 leading-relaxed font-sans">
                We&apos;ve been refacing kitchens for St. Louis families since 1985. Everything is
                built by hand in our local shop, installed by the same people who built it, and
                backed by a written warranty. No catalog ordering, no offshore manufacturing, no
                handing the install off to subcontractors. One team, start to finish.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* What Is Cabinet Refacing Section */}
      <Section tone="parchment" className="py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <Heading as="h2" eyebrow="The Basics" className="text-center">
              What Is Cabinet Refacing?
            </Heading>
            <div className="prose prose-lg max-w-none mt-10">
              <p className="text-lg text-ink/80 leading-relaxed font-sans mb-6">
                Cabinet refacing is a kitchen update that keeps your existing cabinet boxes in
                place and replaces the surfaces you see — the doors, drawer fronts, and visible
                exterior panels. It&apos;s sometimes called cabinet resurfacing or cabinet
                redooring; the work is the same.
              </p>
              <p className="text-lg text-ink/80 leading-relaxed font-sans mb-6">
                In a typical refacing project, every cabinet door and drawer front is custom-built
                in our shop to fit your existing openings. The visible end panels, face frames, and
                filler strips are covered with a matching wood veneer. All hinges and hardware are
                replaced. Optionally, we can also rebuild drawer boxes, add pull-out shelves,
                install under-cabinet lighting, or change crown molding profiles during the same
                visit.
              </p>
              <p className="text-lg text-ink/80 leading-relaxed font-sans">
                Unless someone opens a cabinet and inspects the interior, a refaced kitchen is
                visually indistinguishable from a brand-new one. The cabinet boxes — the part you
                can&apos;t see — stay. Everything else is new.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Benefits Section */}
      <Section className="py-16">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Heading as="h2" eyebrow="Why Refacing">
                Why St. Louis Homeowners Choose Refacing
              </Heading>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-8 bg-white rounded-sm shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex-shrink-0 w-16 h-16 mb-6 text-brass flex items-center justify-center">
                    {benefit.icon}
                  </div>
                  <h3 className="text-2xl font-elegant font-semibold text-ink mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-lg text-ink/70 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Refacing vs Painting vs Replacing Comparison */}
      <Section tone="parchment" className="py-16">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Heading as="h2" eyebrow="The Comparison">
                Refacing vs. Painting vs. Replacing
              </Heading>
              <p className="mt-4 text-lg text-ink/70 font-elegant max-w-2xl mx-auto">
                The three most common ways to update kitchen cabinets — and how to decide which one
                fits your situation.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left bg-white shadow-sm rounded-sm">
                <thead>
                  <tr className="bg-walnut text-parchment">
                    <th className="px-6 py-4 font-elegant text-lg">&nbsp;</th>
                    <th className="px-6 py-4 font-elegant text-lg text-center">Cabinet Painting</th>
                    <th className="px-6 py-4 font-elegant text-lg text-center bg-brass/30">
                      Cabinet Refacing
                    </th>
                    <th className="px-6 py-4 font-elegant text-lg text-center">
                      Full Replacement
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-ink/10">
                  <tr>
                    <td className="px-6 py-4 font-sans font-semibold text-ink">Visual Change</td>
                    <td className="px-6 py-4 text-center text-ink/70">New color only</td>
                    <td className="px-6 py-4 text-center text-ink/70 bg-brass/5">
                      New doors, fronts, finish, hardware
                    </td>
                    <td className="px-6 py-4 text-center text-ink/70">
                      Complete new cabinetry
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-sans font-semibold text-ink">Door Style</td>
                    <td className="px-6 py-4 text-center text-ink/70">Stays the same</td>
                    <td className="px-6 py-4 text-center text-ink/70 bg-brass/5">
                      Any style you want
                    </td>
                    <td className="px-6 py-4 text-center text-ink/70">Any style you want</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-sans font-semibold text-ink">Layout Changes</td>
                    <td className="px-6 py-4 text-center text-ink/70">No</td>
                    <td className="px-6 py-4 text-center text-ink/70 bg-brass/5">Minor only</td>
                    <td className="px-6 py-4 text-center text-ink/70">Yes</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-sans font-semibold text-ink">Durability</td>
                    <td className="px-6 py-4 text-center text-ink/70">5–10 years typical</td>
                    <td className="px-6 py-4 text-center text-ink/70 bg-brass/5">
                      20+ years (solid wood)
                    </td>
                    <td className="px-6 py-4 text-center text-ink/70">
                      20+ years (solid wood)
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-sans font-semibold text-ink">On-Site Time</td>
                    <td className="px-6 py-4 text-center text-ink/70">3–5 days</td>
                    <td className="px-6 py-4 text-center text-ink/70 bg-brass/5">
                      5–7 business days
                    </td>
                    <td className="px-6 py-4 text-center text-ink/70">2–3 weeks</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-sans font-semibold text-ink">Relative Cost</td>
                    <td className="px-6 py-4 text-center text-ink/70">$</td>
                    <td className="px-6 py-4 text-center text-ink/70 bg-brass/5">$$</td>
                    <td className="px-6 py-4 text-center text-ink/70">$$$$</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-white rounded-sm shadow-sm">
                <h3 className="font-elegant text-xl text-ink mb-2">Choose Painting When</h3>
                <p className="text-ink/70 leading-relaxed">
                  Your door style still works for you, you want the lowest cost option, and you
                  accept the finish will need redoing in 5–10 years.
                </p>
              </div>
              <div className="p-6 bg-white rounded-sm shadow-sm border-2 border-brass">
                <h3 className="font-elegant text-xl text-ink mb-2">Choose Refacing When</h3>
                <p className="text-ink/70 leading-relaxed">
                  Your cabinet boxes are sound, your layout works, and you want a transformed
                  kitchen with new doors, hardware, and finishes — without remodel-level cost or
                  disruption.
                </p>
              </div>
              <div className="p-6 bg-white rounded-sm shadow-sm">
                <h3 className="font-elegant text-xl text-ink mb-2">Choose Replacement When</h3>
                <p className="text-ink/70 leading-relaxed">
                  You want to change the layout, the existing boxes are damaged or low-quality, or
                  you&apos;re combining the kitchen with adjacent rooms.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Cost Overview */}
      <Section className="py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <Heading as="h2" eyebrow="Investment">
                What Cabinet Refacing Costs
              </Heading>
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-ink/80 leading-relaxed font-sans mb-6">
                Every refacing project is priced specifically to the kitchen, so a real number
                requires seeing the cabinets in person. As a general framework, custom cabinet
                refacing typically runs <strong>40–50% less than fully replacing your cabinets
                with comparable custom work</strong> — sometimes more when the existing boxes are
                in particularly good shape.
              </p>
              <p className="text-lg text-ink/80 leading-relaxed font-sans mb-6">
                The major variables that move the price: cabinet count, door style and wood species
                (painted maple is typically less than walnut), hardware selection, whether drawer
                boxes are replaced, and any added features like pull-out shelves, crown molding, or
                under-cabinet lighting.
              </p>
              <p className="text-lg text-ink/80 leading-relaxed font-sans mb-8">
                We provide a fixed written quote after the in-home consultation. There are no
                surprise add-ons on the final invoice, and we don&apos;t do bait-and-switch upgrades
                during installation. What you approve is what you pay.
              </p>
              <div className="not-prose text-center">
                <ButtonLink href="/cabinet-refacing-cost" variant="outline">
                  Read the Full St. Louis Cabinet Refacing Cost Guide
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Process Section */}
      <Section tone="parchment" className="py-16">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Heading as="h2" eyebrow="How It Works">
                Our Cabinet Refacing Process
              </Heading>
              <p className="mt-4 text-lg text-ink/70 font-elegant max-w-2xl mx-auto">
                Four steps from first phone call to finished kitchen. Same crew throughout.
              </p>
            </div>

            <div className="space-y-6">
              {processSteps.map((step) => (
                <div
                  key={step.number}
                  className="flex flex-col md:flex-row gap-6 p-8 bg-white rounded-sm shadow-sm"
                >
                  <div className="flex-shrink-0">
                    <div className="font-elegant text-5xl text-brass font-light">{step.number}</div>
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

      {/* Materials & Door Styles */}
      <Section className="py-16">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Heading as="h2" eyebrow="Materials">
                Door Styles and Wood Species
              </Heading>
              <p className="mt-4 text-lg text-ink/70 font-elegant max-w-2xl mx-auto">
                Every door is built in our shop. We bring physical samples to your consultation
                so you can see grain, color, and finish in your kitchen lighting.
              </p>
            </div>

            <div className="mb-12">
              <h3 className="font-elegant text-2xl text-ink mb-6 text-center">
                Door Styles We Build
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {doorStyles.map((style) => (
                  <div
                    key={style.title}
                    className="p-6 bg-parchment rounded-sm border border-ink/10"
                  >
                    <h4 className="font-elegant text-xl text-ink mb-2">{style.title}</h4>
                    <p className="text-ink/70 leading-relaxed text-base">{style.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-elegant text-2xl text-ink mb-6 text-center">Wood Species</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {woodSpecies.map((species) => (
                  <div
                    key={species.name}
                    className="p-5 bg-parchment rounded-sm border border-ink/10"
                  >
                    <p className="font-elegant text-lg text-ink font-semibold">{species.name}</p>
                    <p className="text-ink/60 text-sm mt-1">{species.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Gallery Showcase Section */}
      <Section tone="parchment" className="py-16">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Heading as="h2" eyebrow="Recent Work">
                Cabinet Refacing Gallery
              </Heading>
              <p className="mt-4 text-lg text-ink/70 font-elegant">
                Real refacing projects from St. Louis area kitchens
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

      {/* Service Area Cities */}
      <Section className="py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Heading as="h2" eyebrow="Service Area">
                Cabinet Refacing Across the St. Louis Metro
              </Heading>
              <p className="mt-4 text-lg text-ink/70 font-elegant max-w-2xl mx-auto">
                We work with homeowners throughout St. Louis County and St. Charles County, with a
                particular concentration in these communities.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {cities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/locations/${city.slug}/cabinet-refacing`}
                  className="group p-8 bg-parchment border border-ink/10 rounded-sm hover:border-brass hover:shadow-md transition-all text-center"
                >
                  <h3 className="font-elegant text-2xl text-ink group-hover:text-brass transition-colors mb-2">
                    {city.name}
                  </h3>
                  <p className="text-ink/60 font-sans">Cabinet Refacing in {city.name}, MO →</p>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <ServiceAreaLinks serviceLocationSlug="cabinet-refacing" />

      <LocationFAQs faqs={cabinetRefacingFAQs} />

      {/* CTA Section */}
      <Section tone="walnut" className="py-16">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <Heading tone="dark" showDivider={false} className="mb-6">
              Ready to See What Refacing Could Do?
            </Heading>
            <p className="text-parchment/80 text-lg mb-8 leading-relaxed">
              We&apos;ll come measure, assess your cabinet boxes, show you door samples and
              finishes, and give you a real quote — not a ballpark. No pressure, no follow-up
              calls until you reach out.
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
                Get a Free Estimate
              </ButtonLink>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
