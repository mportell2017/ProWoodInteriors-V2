import Link from 'next/link';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { PRIMARY_SERVICE_AREA } from '@/lib/business';
import { serviceLocations } from '@/lib/service-location-data';

type ServiceAreaLinksProps = {
  /** Service slug to match against `serviceLocations` (e.g. "cabinet-refacing"). */
  serviceLocationSlug?: 'cabinet-refacing' | 'kitchen-remodeling';
  /** Heading text override. */
  heading?: string;
};

/**
 * Internal-linking block for service pages. Links to:
 *   - The primary city landing pages (Chesterfield, Wildwood, Clayton)
 *   - Any matching service-location combos (e.g. /locations/chesterfield/cabinet-refacing)
 *
 * Internal-linking density between service pages and city/service-city pages
 * is a topical-authority signal Google uses for local relevance.
 */
export function ServiceAreaLinks({
  serviceLocationSlug,
  heading = 'Service Areas',
}: ServiceAreaLinksProps) {
  const matchingCombos = serviceLocationSlug
    ? serviceLocations.filter((s) => s.serviceSlug === serviceLocationSlug)
    : [];

  return (
    <Section tone="parchment" className="py-16">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <Heading as="h2" showDivider={false}>
            {heading}
          </Heading>
          <p className="mt-6 text-lg text-ink/70 leading-relaxed font-elegant">
            Built in our Maryland Heights shop, installed in homes across the
            St. Louis area — with a special focus on Chesterfield, Wildwood, and Clayton.
          </p>

          {matchingCombos.length > 0 && (
            <div className="mt-10">
              <p className="text-sm tracking-[0.22em] uppercase text-umber/70 mb-4">
                Dedicated pages for this service
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                {matchingCombos.map((combo) => (
                  <Link
                    key={`${combo.citySlug}-${combo.serviceSlug}`}
                    href={`/locations/${combo.citySlug}/${combo.serviceSlug}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-brass/30 text-ink hover:border-brass hover:bg-brass/5 transition-colors rounded-sm text-sm font-semibold"
                  >
                    {combo.service} in {combo.city}
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="mt-10">
            <p className="text-sm tracking-[0.22em] uppercase text-umber/70 mb-4">
              Browse by city
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-base">
              {PRIMARY_SERVICE_AREA.map((city) => (
                <Link
                  key={city}
                  href={`/locations/${city.toLowerCase()}`}
                  className="text-ink/80 hover:text-oxblood transition-colors underline decoration-umber/30 hover:decoration-oxblood underline-offset-4"
                >
                  {city}
                </Link>
              ))}
              <Link
                href="/locations/st-louis"
                className="text-ink/80 hover:text-oxblood transition-colors underline decoration-umber/30 hover:decoration-oxblood underline-offset-4"
              >
                St. Louis
              </Link>
              <Link
                href="/locations/st-charles"
                className="text-ink/80 hover:text-oxblood transition-colors underline decoration-umber/30 hover:decoration-oxblood underline-offset-4"
              >
                St. Charles
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
