import { Metadata } from 'next';
import Link from 'next/link';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Container } from '@/components/ui/Container';
import { ButtonLink } from '@/components/ui/Button';
import { locations } from '@/lib/location-data';
import {
  generateLocalBusinessSchema,
  generateBreadcrumbSchema,
} from '@/lib/structured-data';
import {
  BUSINESS_NAME,
  FOUNDED_YEAR,
  MARKETING_REGION,
  PHONE_DISPLAY,
  PHONE_TEL,
} from '@/lib/business';

export const metadata: Metadata = {
  title: 'Service Areas | Custom Cabinetry Across Greater St. Louis',
  description: `${BUSINESS_NAME} designs and builds custom cabinetry, built-ins, and cabinet refacing for homeowners across the greater St. Louis area — including Chesterfield, Wildwood, Clayton, St. Charles, and more.`,
  alternates: { canonical: '/locations' },
  openGraph: {
    title: `Service Areas | ${BUSINESS_NAME}`,
    description: `Custom cabinetry and built-ins for homeowners across the greater St. Louis area. Family-owned since ${FOUNDED_YEAR}.`,
    type: 'website',
    siteName: BUSINESS_NAME,
  },
};

const businessSchema = generateLocalBusinessSchema();
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Service Areas', url: '/locations' },
]);

// Group the cities by county for a scannable, regional layout.
const regionOrder = [
  'St. Louis County',
  'St. Louis City and County',
  'St. Charles County',
];

const groupedLocations = [...locations].sort((a, b) => {
  const ra = regionOrder.indexOf(a.county);
  const rb = regionOrder.indexOf(b.county);
  if (ra !== rb) return ra - rb;
  return a.city.localeCompare(b.city);
});

export default function ServiceAreasPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <Section className="pt-24 pb-12">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <Heading accent="italic" as="h1" eyebrow="Where We Work">
              Serving the Greater {MARKETING_REGION} Area
            </Heading>
            <p className="mt-8 text-xl text-ink/70 leading-relaxed font-elegant">
              From our shop in Maryland Heights, we&apos;ve been crafting custom
              cabinetry and built-ins for homeowners across {MARKETING_REGION}{' '}
              and St. Charles counties since {FOUNDED_YEAR}. Choose your city to
              see local projects and the way we work in your community.
            </p>
          </div>
        </Container>
      </Section>

      {/* City grid */}
      <Section className="py-10">
        <Container>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {groupedLocations.map((location) => (
              <Link
                key={location.slug}
                href={`/locations/${location.slug}`}
                className="group relative flex flex-col rounded-sm border border-umber/15 bg-parchment/70 p-6 shadow-[0_10px_30px_rgba(44,24,16,0.06)] transition-all duration-300 hover:-translate-y-0.5 hover:border-brass/40 hover:shadow-[0_18px_44px_rgba(44,24,16,0.12)] focus:outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2 focus-visible:ring-offset-parchment"
              >
                {/* Brass top hairline that grows on hover */}
                <span className="absolute left-6 right-6 top-0 h-px bg-brass/0 transition-colors duration-300 group-hover:bg-brass/50" />

                <div className="flex items-start gap-3">
                  <svg
                    className="mt-1 h-5 w-5 flex-shrink-0 text-brass"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <h2 className="font-elegant text-2xl text-ink leading-tight transition-colors group-hover:text-oxblood">
                      {location.city}
                    </h2>
                    <p className="mt-0.5 text-[11px] uppercase tracking-[0.16em] text-umber/70">
                      {location.county}
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-ink/70">
                  {location.heroSubtitle}
                </p>

                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-oxblood">
                  Explore {location.city}
                  <svg
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>

          <p className="mt-10 text-center text-base text-ink/60 font-elegant italic">
            Don&apos;t see your town? We work throughout the greater{' '}
            {MARKETING_REGION} metro — give us a call and we&apos;ll let you know.
          </p>
        </Container>
      </Section>

      {/* CTA */}
      <Section tone="walnut" className="py-16">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <Heading tone="dark" showDivider={false} className="mb-6">
              Let&apos;s Talk About Your Home
            </Heading>
            <p className="text-parchment/80 text-lg mb-8 leading-relaxed">
              Wherever you are in the {MARKETING_REGION} area, the first
              conversation is always free.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`tel:${PHONE_TEL}`}
                className="inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold text-walnut bg-brass hover:bg-brass/90 rounded-sm shadow-xl transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2 focus-visible:ring-offset-walnut"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {PHONE_DISPLAY}
              </a>
              <ButtonLink
                href="/contact-us"
                variant="outline"
                className="border-2 border-parchment/40 text-parchment hover:bg-parchment/10"
              >
                Free Consultation
              </ButtonLink>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
