import { Metadata } from 'next';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Container } from '@/components/ui/Container';
import { ButtonLink } from '@/components/ui/Button';
import Link from 'next/link';
import { generateFAQSchema, generateBreadcrumbSchema } from '@/lib/structured-data';
import { LocationFAQs } from '@/components/locations/LocationFAQs';
import type { FAQ } from '@/lib/service-faqs';

export const metadata: Metadata = {
  title: 'Cabinet Refacing Cost in St. Louis (2026 Guide)',
  description:
    'How much does cabinet refacing cost in St. Louis? Honest 2026 pricing guide covering kitchen size, materials, door styles, and what moves the price. From a family-owned shop building in St. Louis since 1985.',
  alternates: { canonical: '/cabinet-refacing-cost' },
  openGraph: {
    title: 'Cabinet Refacing Cost in St. Louis (2026 Guide) | Professional Wood Interiors',
    description:
      'How much does cabinet refacing cost in St. Louis? Honest 2026 pricing guide covering kitchen size, materials, door styles, and what moves the price.',
    type: 'article',
    siteName: 'Professional Wood Interiors',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cabinet Refacing Cost in St. Louis (2026 Guide)',
    description:
      'How much does cabinet refacing cost in St. Louis? Honest 2026 pricing guide covering kitchen size, materials, door styles, and what moves the price.',
  },
};

const costGuideFAQs: FAQ[] = [
  {
    question: 'How much does cabinet refacing cost on average?',
    answer:
      'Custom cabinet refacing in the St. Louis area typically falls between roughly $9,000 and $25,000 for an average-size kitchen (20–30 cabinets), depending on door style, wood species, hardware, and any add-ons. Higher-end projects with walnut doors, full drawer-box replacements, and extensive accessories can push higher; smaller kitchens or simpler scopes can come in lower. As a rule of thumb, refacing runs 40–50% less than fully replacing the same cabinets with comparable custom work.',
  },
  {
    question: 'Is cabinet refacing cheaper than painting?',
    answer:
      "Cabinet painting is the lowest-cost update — usually a few thousand dollars for a typical kitchen. Refacing costs more because it includes new solid-wood doors, drawer fronts, veneers, and hardware rather than just a new finish. The reason most homeowners choose refacing over painting is durability: a painted finish typically needs redoing every 5–10 years, while solid-wood refacing lasts 20+ years and lets you change the door style entirely.",
  },
  {
    question: 'Is cabinet refacing cheaper than replacement?',
    answer:
      'Yes — significantly. Refacing typically costs 40–50% less than fully replacing the same cabinets with comparable custom work. The savings come from keeping the cabinet boxes (which are often the most expensive part of new cabinetry) and from much shorter on-site labor time. Refacing also avoids the demolition cost, disposal cost, and the typical 2–3 weeks of full kitchen disruption that replacement requires.',
  },
  {
    question: 'What is the most expensive part of a refacing project?',
    answer:
      'The doors and drawer fronts together usually account for 50–60% of the project cost. Wood species (walnut and cherry are more expensive than maple), door style (raised panel construction is more labor-intensive than slab), and finish complexity (multi-step painted finishes cost more than single stains) are the largest variables. Hardware, veneers, and labor make up most of the remaining cost.',
  },
  {
    question: 'Does cabinet refacing cost more in Clayton, Chesterfield, or Wildwood?',
    answer:
      "Our pricing doesn't change by city — a project in Clayton costs the same as the equivalent project in Wildwood. What can vary slightly is project scope. Clayton and parts of Chesterfield include many older homes with more complex existing trim or millwork to match, which can add labor. Wildwood and newer Chesterfield builds tend to have more straightforward refacing scopes. We give a fixed quote per kitchen, not per ZIP code.",
  },
  {
    question: 'Are there hidden costs in cabinet refacing?',
    answer:
      "Not with us. The written quote you approve after the in-home consultation is the price you pay. The only exception would be if we discover structural damage to a cabinet box during installation that wasn't visible at the assessment — and even then, we stop, walk you through it, and agree on the approach before any extra work happens. No bait-and-switch upgrades, no surprise add-ons at the final invoice.",
  },
  {
    question: 'Does refacing add value to a home?',
    answer:
      "Kitchens are consistently one of the highest-ROI rooms to update before selling. Industry data generally shows midrange kitchen updates recouping 60–80% of their cost at resale, with even higher returns in strong markets like Clayton and Chesterfield. Beyond raw ROI, an updated kitchen also dramatically improves how a home photographs and shows — which often matters more than the recouped dollars when listing.",
  },
  {
    question: 'Can I finance cabinet refacing?',
    answer:
      "Many homeowners use home equity lines of credit, home improvement loans, or major credit cards for kitchen projects. We don't currently offer in-house financing, but we're happy to provide the itemized quote and timeline you'll need to apply elsewhere. Some clients also break larger projects into phases to spread the investment.",
  },
  {
    question: 'How accurate are online cabinet refacing cost calculators?',
    answer:
      "Online calculators are good for ballpark ranges but rarely match real project quotes within 20–30%. They can't account for the specifics of your cabinets, the wood species you'd actually choose, your hardware selection, or the condition of your existing boxes. For a number you can plan around, get an in-home consultation — they're free, take about an hour, and produce a fixed written quote.",
  },
];

const faqSchema = generateFAQSchema(costGuideFAQs);

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Cabinet Refacing Cost Guide', url: '/cabinet-refacing-cost' },
]);

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Cabinet Refacing Cost in St. Louis: 2026 Guide',
  description:
    'A practical pricing guide for cabinet refacing in the St. Louis metro — covering kitchen size, materials, door styles, hardware, and what actually moves the price.',
  author: {
    '@type': 'Organization',
    name: 'Professional Wood Interiors',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Professional Wood Interiors',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.professionalwoodinteriors.com/images/pro-wood-interiors-logo.webp',
    },
  },
  datePublished: '2026-05-23',
  dateModified: '2026-05-23',
};

export default function CabinetRefacingCostPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <Section className="pt-24 pb-12">
        <Container>
          <div className="max-w-3xl mx-auto">
            <nav className="text-sm font-sans text-ink/60 mb-6" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-brass">
                Home
              </Link>{' '}
              / <span className="text-ink/80">Cabinet Refacing Cost Guide</span>
            </nav>
            <p className="text-brass uppercase tracking-widest text-sm font-sans mb-4">
              2026 Pricing Guide · St. Louis Metro
            </p>
            <Heading accent="italic" as="h1">
              How Much Does Cabinet Refacing Cost in St. Louis?
            </Heading>
            <p className="mt-6 text-xl text-ink/70 leading-relaxed font-elegant">
              An honest pricing guide from a family-owned St. Louis shop that&apos;s been refacing
              kitchens since 1985 — covering what affects the price, what doesn&apos;t, and how to
              get a real number for your kitchen.
            </p>
          </div>
        </Container>
      </Section>

      {/* Quick Answer Box */}
      <Section className="pb-12">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="bg-parchment border-l-4 border-brass p-8 rounded-sm">
              <p className="text-brass uppercase tracking-widest text-xs font-sans mb-3">
                Quick Answer
              </p>
              <p className="text-lg text-ink leading-relaxed font-sans">
                Custom cabinet refacing in the St. Louis area typically falls between{' '}
                <strong>roughly $9,000 and $25,000</strong> for an average-size kitchen, depending
                on door style, wood species, hardware, and add-ons.{' '}
                <strong>Refacing usually runs 40–50% less</strong> than fully replacing the same
                cabinets with comparable custom work, and finishes in about a quarter of the
                on-site time.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Intro */}
      <Section className="py-12">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-ink/80 leading-relaxed font-sans mb-6">
                Cabinet refacing is one of the highest-ROI updates you can make to a kitchen — it
                delivers most of the visual transformation of a full remodel at a fraction of the
                cost. But &quot;a fraction of the cost&quot; covers a wide range, and the
                difference between a $9,000 reface and a $25,000 reface comes down to specifics
                most online calculators don&apos;t capture.
              </p>
              <p className="text-lg text-ink/80 leading-relaxed font-sans mb-6">
                This guide walks through how cabinet refacing actually gets priced — what moves
                the number up or down, what the typical St. Louis-area ranges look like, and
                where you can save without sacrificing quality. The numbers below are honest
                industry ranges based on what we and our peers in the region actually charge for
                custom solid-wood refacing. They aren&apos;t marketing fluff and they aren&apos;t
                lowball teasers.
              </p>
              <p className="text-lg text-ink/80 leading-relaxed font-sans">
                For a real number for your kitchen, the only way is an in-home consultation —
                they&apos;re free, take about an hour, and produce a fixed written quote. But
                first, the framework.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Cost by Kitchen Size */}
      <Section tone="parchment" className="py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <Heading as="h2" eyebrow="Pricing by Size">
              Cabinet Refacing Cost by Kitchen Size
            </Heading>
            <p className="mt-6 text-lg text-ink/70 leading-relaxed font-elegant">
              Cabinet count is the biggest single driver of price. Most St. Louis kitchens fall
              into one of these three ranges.
            </p>

            <div className="mt-10 space-y-6">
              <div className="bg-white p-8 rounded-sm shadow-sm">
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-4">
                  <h3 className="font-elegant text-2xl text-ink">Small Kitchen</h3>
                  <p className="font-sans text-ink/60">10–18 cabinets · $5,500 – $12,000</p>
                </div>
                <p className="text-lg text-ink/70 leading-relaxed">
                  Galley kitchens, smaller condo or bungalow kitchens, and tight U-shaped layouts.
                  At this scale, simpler door styles and standard hardware keep costs in the lower
                  range. Walnut, multi-step painted finishes, or extensive add-ons push toward the
                  upper end.
                </p>
              </div>

              <div className="bg-white p-8 rounded-sm shadow-sm border-2 border-brass">
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-4">
                  <h3 className="font-elegant text-2xl text-ink">Average Kitchen</h3>
                  <p className="font-sans text-ink/60">20–30 cabinets · $9,000 – $25,000</p>
                </div>
                <p className="text-lg text-ink/70 leading-relaxed">
                  The most common size in St. Louis suburban homes — including most kitchens in
                  Clayton, Chesterfield, and Wildwood. This range spans shaker maple at the low
                  end through walnut or cherry with drawer-box replacements and pull-out shelves
                  at the high end. The majority of our refacing projects land in this band.
                </p>
              </div>

              <div className="bg-white p-8 rounded-sm shadow-sm">
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-4">
                  <h3 className="font-elegant text-2xl text-ink">Large Kitchen</h3>
                  <p className="font-sans text-ink/60">30+ cabinets + island · $20,000 – $40,000+</p>
                </div>
                <p className="text-lg text-ink/70 leading-relaxed">
                  Open-plan kitchens with substantial islands, walk-in pantries with cabinetry,
                  and larger homes typical of newer Chesterfield and Wildwood builds. Cabinet
                  count alone moves the number; premium door styles, walnut, glass-front
                  cabinets, and full accessory packages push toward $40,000+.
                </p>
              </div>
            </div>

            <p className="mt-8 text-base text-ink/60 italic">
              All ranges assume a typical refacing scope: new solid-wood doors and drawer fronts,
              veneered visible exteriors, soft-close hinges, and your choice of hardware. Major
              add-ons like crown molding, lighting, and pull-out shelves are priced on top.
            </p>
          </div>
        </Container>
      </Section>

      {/* What Moves the Price */}
      <Section className="py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <Heading as="h2" eyebrow="Cost Factors">
              What Actually Moves the Price
            </Heading>

            <div className="mt-10 space-y-10">
              <div>
                <h3 className="font-elegant text-2xl text-ink mb-3">
                  1. Wood Species (10–25% price swing)
                </h3>
                <p className="text-lg text-ink/70 leading-relaxed mb-3">
                  Maple is the most cost-effective hardwood and the easiest to paint cleanly. Oak
                  has more dramatic grain and similar pricing. Cherry costs slightly more and
                  develops a warm patina over years. Walnut is the most expensive of the common
                  species — typically 20–25% more than maple — but it&apos;s the headline material
                  for contemporary kitchens.
                </p>
                <p className="text-lg text-ink/70 leading-relaxed">
                  If budget is a concern, painted-grade maple delivers a clean modern look at the
                  lowest material cost. If budget isn&apos;t the driver, walnut and cherry hold
                  their value best.
                </p>
              </div>

              <div>
                <h3 className="font-elegant text-2xl text-ink mb-3">
                  2. Door Style (5–15% price swing)
                </h3>
                <p className="text-lg text-ink/70 leading-relaxed">
                  Slab doors are the simplest construction — flat front, no profile. Shaker is
                  next, with a recessed panel inside a clean frame. Raised panel doors require
                  more shop labor (the center panel is contoured, the frame profiled) and sit
                  near the top of the standard range. Custom inlays, glass panels, or unique
                  routed profiles push higher.
                </p>
              </div>

              <div>
                <h3 className="font-elegant text-2xl text-ink mb-3">
                  3. Finish Complexity (5–15% price swing)
                </h3>
                <p className="text-lg text-ink/70 leading-relaxed">
                  A single stain coat with topcoat is the standard. Multi-step painted finishes
                  with a wash, a base coat, and a glaze cost more in labor. Distressed or
                  hand-rubbed finishes cost the most. All finishes are applied in our climate-
                  controlled shop — never on-site — so the variable is just labor hours, not
                  materials.
                </p>
              </div>

              <div>
                <h3 className="font-elegant text-2xl text-ink mb-3">
                  4. Hardware Selection (often $400–$2,000 added)
                </h3>
                <p className="text-lg text-ink/70 leading-relaxed">
                  Soft-close concealed hinges come standard. Pulls and knobs are your choice and
                  vary widely — a basic brushed nickel pull might be a few dollars, a designer
                  brass pull can be $30+ each. For a 25-cabinet kitchen, hardware alone can shift
                  the total by $1,500 between the lowest and highest selections.
                </p>
              </div>

              <div>
                <h3 className="font-elegant text-2xl text-ink mb-3">
                  5. Drawer Box Replacement (typically $1,000–$3,500 added)
                </h3>
                <p className="text-lg text-ink/70 leading-relaxed">
                  Replacing tired existing drawer boxes with dovetailed hardwood boxes and
                  soft-close glides is one of the upgrades that delivers the most daily-use
                  improvement. We recommend it when the existing drawers feel sticky, sag, or
                  don&apos;t close cleanly. On a 6–8 drawer kitchen this is usually $1,000–$2,500;
                  on a heavily drawer-fronted kitchen it can be more.
                </p>
              </div>

              <div>
                <h3 className="font-elegant text-2xl text-ink mb-3">
                  6. Pull-Outs, Lazy Susans, and Accessories ($150–$400 each)
                </h3>
                <p className="text-lg text-ink/70 leading-relaxed">
                  Pull-out shelves, trash pull-outs, lazy Susan rebuilds, spice racks, and pantry
                  organizers each run a few hundred dollars installed. Most clients add 2–6 of
                  these during a refacing project — together they typically add $800–$2,000.
                </p>
              </div>

              <div>
                <h3 className="font-elegant text-2xl text-ink mb-3">
                  7. Crown Molding and Light Valance ($500–$1,800 added)
                </h3>
                <p className="text-lg text-ink/70 leading-relaxed">
                  Adding crown molding above wall cabinets makes a refaced kitchen look more
                  substantial. A light valance with under-cabinet LED strip lighting is a
                  similar-priced add-on. Both are best done during the refacing project — you
                  save scaffolding cost vs. a separate visit later.
                </p>
              </div>

              <div>
                <h3 className="font-elegant text-2xl text-ink mb-3">
                  8. Glass Inserts and Specialty Cabinets ($100–$400 each)
                </h3>
                <p className="text-lg text-ink/70 leading-relaxed">
                  Glass-front upper cabinets, leaded glass inserts, and specialty cabinets (corner
                  units, appliance garages, hidden trash) cost more per cabinet than standard
                  refacing. If you have 2–3 of these, the impact is small; if you want a wall of
                  glass-fronts, plan for it.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Refacing vs Replacement Cost */}
      <Section tone="parchment" className="py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <Heading as="h2" eyebrow="The Comparison">
              Refacing vs. Replacement Cost
            </Heading>
            <div className="prose prose-lg max-w-none mt-8">
              <p className="text-lg text-ink/80 leading-relaxed font-sans mb-6">
                For the same kitchen, full custom-cabinet replacement typically costs 40–50% more
                than refacing. The math works like this: a full replacement still includes new
                doors, drawer fronts, and finishes (the same components as refacing) but
                <em> also</em> requires building entirely new cabinet boxes, demolishing and
                disposing of the existing ones, and significantly more on-site labor for
                installation.
              </p>
              <p className="text-lg text-ink/80 leading-relaxed font-sans mb-6">
                Here&apos;s a rough comparison for an average-size St. Louis kitchen
                (20–30 cabinets, mid-range materials):
              </p>
            </div>

            <div className="mt-8 overflow-x-auto">
              <table className="w-full text-left bg-white shadow-sm rounded-sm">
                <thead>
                  <tr className="bg-walnut text-parchment">
                    <th className="px-6 py-4 font-elegant text-lg">Component</th>
                    <th className="px-6 py-4 font-elegant text-lg text-center">Refacing</th>
                    <th className="px-6 py-4 font-elegant text-lg text-center">
                      Full Replacement
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-ink/10">
                  <tr>
                    <td className="px-6 py-4 font-sans text-ink">New doors and drawer fronts</td>
                    <td className="px-6 py-4 text-center text-ink/70">Included</td>
                    <td className="px-6 py-4 text-center text-ink/70">Included</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-sans text-ink">New cabinet boxes</td>
                    <td className="px-6 py-4 text-center text-ink/70">—</td>
                    <td className="px-6 py-4 text-center text-ink/70">Included</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-sans text-ink">Demolition & disposal</td>
                    <td className="px-6 py-4 text-center text-ink/70">—</td>
                    <td className="px-6 py-4 text-center text-ink/70">Included</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-sans text-ink">On-site time</td>
                    <td className="px-6 py-4 text-center text-ink/70">5–7 business days</td>
                    <td className="px-6 py-4 text-center text-ink/70">2–3 weeks</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-sans text-ink">Typical St. Louis range</td>
                    <td className="px-6 py-4 text-center font-semibold text-ink">
                      $9,000 – $25,000
                    </td>
                    <td className="px-6 py-4 text-center font-semibold text-ink">
                      $18,000 – $45,000
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="prose prose-lg max-w-none mt-8">
              <p className="text-lg text-ink/80 leading-relaxed font-sans">
                The visual result is nearly identical. Unless someone opens a cabinet and inspects
                the interior box, a refaced kitchen looks the same as a brand-new one. The cost
                difference is essentially what you pay to replace cabinet boxes you didn&apos;t
                need to replace.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* When Refacing Isn't Cheaper */}
      <Section className="py-16">
        <Container>
          <div className="max-w-3xl mx-auto">
            <Heading as="h2" eyebrow="Honest Caveat">
              When Refacing Isn&apos;t the Cheaper Option
            </Heading>
            <div className="prose prose-lg max-w-none mt-8">
              <p className="text-lg text-ink/80 leading-relaxed font-sans mb-6">
                Refacing isn&apos;t always the right financial call. Here are the situations where
                we tell people to consider other options:
              </p>
              <ul className="text-lg text-ink/80 leading-relaxed font-sans space-y-3">
                <li>
                  <strong>Boxes are structurally compromised.</strong> If the existing cabinets
                  are water-damaged, warped, or made from low-quality particleboard that&apos;s
                  failing, we&apos;d be putting new doors on a foundation that won&apos;t hold up.
                  Full replacement makes more sense.
                </li>
                <li>
                  <strong>You want to change the layout.</strong> Moving cabinet runs, resizing
                  the island, or removing soffits crosses into remodel territory. The cabinetry
                  labor savings from refacing disappear when you&apos;re still doing significant
                  carpentry.
                </li>
                <li>
                  <strong>You&apos;re combining the kitchen with adjacent rooms.</strong> Opening
                  a wall to combine the kitchen with the family room or great room generally
                  means redesigning the cabinetry layout — and at that point you&apos;re ahead
                  to plan the whole kitchen fresh.
                </li>
                <li>
                  <strong>You only need a quick freshen-up for resale.</strong> If you&apos;re
                  listing in 60 days and the cabinets are functional but tired, cabinet painting
                  can deliver enough visual improvement at much lower cost. Refacing is the
                  better investment if you&apos;re staying.
                </li>
              </ul>
              <p className="text-lg text-ink/80 leading-relaxed font-sans mt-6">
                We&apos;ll tell you all of this during the consultation. We&apos;d rather lose a
                refacing project than install $15,000 of work on cabinets that don&apos;t deserve
                it.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* ROI Section */}
      <Section tone="parchment" className="py-16">
        <Container>
          <div className="max-w-3xl mx-auto">
            <Heading as="h2" eyebrow="Return on Investment">
              Does Cabinet Refacing Add Resale Value?
            </Heading>
            <div className="prose prose-lg max-w-none mt-8">
              <p className="text-lg text-ink/80 leading-relaxed font-sans mb-6">
                Yes — the kitchen is consistently one of the most important rooms in real estate
                photos, showings, and inspections. Industry data on midrange kitchen updates
                shows recouping 60–80% of cost at resale on average, with stronger returns in
                higher-end markets. Clayton, Chesterfield, and Wildwood all qualify.
              </p>
              <p className="text-lg text-ink/80 leading-relaxed font-sans mb-6">
                Beyond the direct ROI, there&apos;s a less-quantified benefit: an updated kitchen
                helps the home <em>show</em> dramatically better. Photos come out brighter and
                cleaner. Buyers walking through don&apos;t mentally subtract &quot;needs new
                kitchen&quot; from their offer. Time on market is usually shorter. These factors
                often matter more than the precise recouped dollar figure.
              </p>
              <p className="text-lg text-ink/80 leading-relaxed font-sans">
                For homeowners planning to stay 5+ years, the calculus is different but still
                positive: you get a decade or more of using a kitchen you actually enjoy, and
                still capture most of the value when you eventually sell.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* What's Included / Not Included */}
      <Section className="py-16">
        <Container>
          <div className="max-w-5xl mx-auto">
            <Heading as="h2" eyebrow="Scope" className="text-center">
              What&apos;s Included in a Refacing Quote
            </Heading>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 bg-parchment rounded-sm border border-brass/30">
                <h3 className="font-elegant text-2xl text-ink mb-4 flex items-center gap-2">
                  <span className="text-brass">✓</span> Included
                </h3>
                <ul className="space-y-3 text-ink/80 leading-relaxed">
                  <li>• New solid-wood doors built in our shop</li>
                  <li>• Matching drawer fronts</li>
                  <li>• Wood veneer over visible cabinet exteriors</li>
                  <li>• Soft-close concealed hinges</li>
                  <li>• Your selected pulls and knobs</li>
                  <li>• Shop-applied stain or paint finish</li>
                  <li>• Removal of old doors and hardware</li>
                  <li>• Installation by our own crew</li>
                  <li>• Daily cleanup and final detail work</li>
                  <li>• Written warranty</li>
                </ul>
              </div>

              <div className="p-8 bg-parchment rounded-sm border border-ink/10">
                <h3 className="font-elegant text-2xl text-ink mb-4 flex items-center gap-2">
                  <span className="text-umber">+</span> Often Added (Priced Separately)
                </h3>
                <ul className="space-y-3 text-ink/80 leading-relaxed">
                  <li>• Drawer box replacement (dovetailed hardwood)</li>
                  <li>• Pull-out shelves and lazy Susans</li>
                  <li>• Crown molding above wall cabinets</li>
                  <li>• Under-cabinet LED lighting</li>
                  <li>• Trash pull-out cabinets</li>
                  <li>• Glass inserts for upper cabinets</li>
                  <li>• Cabinet additions (e.g., new pantry cabinet)</li>
                  <li>• Countertop replacement (separate trade)</li>
                  <li>• Backsplash work (separate trade)</li>
                </ul>
              </div>
            </div>

            <p className="text-base text-ink/60 italic mt-8 text-center max-w-2xl mx-auto">
              Your written quote itemizes every add-on so you know what each one costs and can
              decide whether to include it.
            </p>
          </div>
        </Container>
      </Section>

      {/* How to Get a Real Quote */}
      <Section tone="parchment" className="py-16">
        <Container>
          <div className="max-w-3xl mx-auto">
            <Heading as="h2" eyebrow="The Path to a Real Number">
              How to Get an Accurate Quote for Your Kitchen
            </Heading>
            <div className="prose prose-lg max-w-none mt-8">
              <p className="text-lg text-ink/80 leading-relaxed font-sans mb-6">
                Online cost calculators are useful for ballpark ranges but rarely match real
                project quotes within 20–30%. They don&apos;t know your cabinet count, can&apos;t
                inspect your boxes, don&apos;t account for the wood species and hardware
                you&apos;d actually choose, and miss the local labor reality.
              </p>
              <p className="text-lg text-ink/80 leading-relaxed font-sans mb-6">
                Here&apos;s how the in-home consultation works with us:
              </p>
              <ol className="text-lg text-ink/80 leading-relaxed font-sans space-y-3 list-decimal pl-6">
                <li>
                  <strong>Schedule the visit.</strong> Call (314) 437-9988 or request through the
                  contact form. Most homes are visited within a week.
                </li>
                <li>
                  <strong>One-hour consultation.</strong> We measure every cabinet, check box
                  condition, talk through what you want changed, and show you door samples, wood
                  species, and finish options on the spot.
                </li>
                <li>
                  <strong>Written quote within a few days.</strong> Itemized by door style,
                  hardware, and add-ons. The total is a fixed number — not a ballpark that grows
                  later.
                </li>
                <li>
                  <strong>No pressure to move forward.</strong> We don&apos;t do follow-up sales
                  calls. If the timing or budget isn&apos;t right, the quote stays valid for 30
                  days and you can come back when ready.
                </li>
              </ol>
            </div>
          </div>
        </Container>
      </Section>

      {/* Service Area Cross-Links */}
      <Section className="py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <Heading as="h2" eyebrow="Service Area">
                Cabinet Refacing Pricing by City
              </Heading>
              <p className="mt-4 text-lg text-ink/70 font-elegant">
                Our pricing is consistent across our service area — see city-specific information
                here:
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link
                href="/locations/clayton/cabinet-refacing"
                className="group p-6 bg-parchment border border-ink/10 rounded-sm hover:border-brass hover:shadow-md transition-all text-center"
              >
                <h3 className="font-elegant text-xl text-ink group-hover:text-brass transition-colors mb-2">
                  Clayton
                </h3>
                <p className="text-ink/60 text-sm">Cabinet Refacing in Clayton →</p>
              </Link>
              <Link
                href="/locations/chesterfield/cabinet-refacing"
                className="group p-6 bg-parchment border border-ink/10 rounded-sm hover:border-brass hover:shadow-md transition-all text-center"
              >
                <h3 className="font-elegant text-xl text-ink group-hover:text-brass transition-colors mb-2">
                  Chesterfield
                </h3>
                <p className="text-ink/60 text-sm">Cabinet Refacing in Chesterfield →</p>
              </Link>
              <Link
                href="/locations/wildwood/cabinet-refacing"
                className="group p-6 bg-parchment border border-ink/10 rounded-sm hover:border-brass hover:shadow-md transition-all text-center"
              >
                <h3 className="font-elegant text-xl text-ink group-hover:text-brass transition-colors mb-2">
                  Wildwood
                </h3>
                <p className="text-ink/60 text-sm">Cabinet Refacing in Wildwood →</p>
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      <LocationFAQs faqs={costGuideFAQs} />

      {/* Final CTA */}
      <Section tone="walnut" className="py-16">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <Heading tone="dark" showDivider={false} className="mb-6">
              Get a Real Number for Your Kitchen
            </Heading>
            <p className="text-parchment/80 text-lg mb-8 leading-relaxed">
              The in-home consultation takes about an hour. You&apos;ll come away with a fixed
              written quote — not a ballpark — and a clear picture of what refacing would look
              like for your kitchen specifically.
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
                Request a Free Consultation
              </ButtonLink>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
