import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { getServiceLocationsByCity } from "@/lib/service-location-data";

type CityServiceLinksProps = {
  city: string;
  citySlug: string;
};

/**
 * Dedicated internal-linking block on a city page → its per-service landing
 * pages (e.g. /locations/wildwood/cabinet-refacing). Renders only when the
 * city has service-location combos. The city↔service-city link density is a
 * topical-relevance signal for local SEO, and the explicit cards make the
 * dedicated pages obvious to visitors.
 */
export function CityServiceLinks({ city, citySlug }: CityServiceLinksProps) {
  const combos = getServiceLocationsByCity(citySlug);
  if (combos.length === 0) return null;

  return (
    <Section tone="parchment" className="py-16">
      <Container>
        <div className="mb-10 text-center">
          <Heading as="h2" eyebrow={`${city} Specialties`} showDivider>
            Our {city} Services in Detail
          </Heading>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-ink/70 font-elegant">
            Planning a specific project in {city}? These pages cover our
            most-requested services in depth — what&apos;s included, our
            process, and recent local work.
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
          {combos.map((combo) => (
            <Link
              key={combo.serviceSlug}
              href={`/locations/${combo.citySlug}/${combo.serviceSlug}`}
              className="group relative rounded-sm border border-brass/25 bg-white p-7 shadow-sm transition-colors duration-300 hover:border-brass/60 hover:shadow-md"
            >
              <span
                aria-hidden="true"
                className="absolute left-0 top-0 h-px w-0 bg-brass transition-all duration-500 ease-out group-hover:w-full"
              />
              <h3 className="font-display text-xl leading-tight text-ink">
                {combo.service} in {city}
              </h3>
              <p className="mt-3 leading-relaxed text-ink/70 font-elegant">
                {combo.heroSubtitle}
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.18em] text-oxblood transition-all group-hover:gap-2.5">
                Learn More
                <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
