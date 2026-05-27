import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";

type City = { name: string; slug: string };

type ServiceCityGridProps = {
  /** Heading eyebrow. */
  eyebrow?: string;
  title: string;
  subtitle?: string;
  cities: City[];
  /** Small label above each city name, e.g. "Cabinet Refacing in". */
  cardEyebrow: string;
  /** Builds each card's destination. Refacing/kitchen point at per-city service
   *  pages; other services point at the generic city page. */
  hrefFor: (city: City) => string;
};

/**
 * Paneled grid of service-area city cards that invert to walnut on hover.
 */
export function ServiceCityGrid({
  eyebrow = "Service Area",
  title,
  subtitle,
  cities,
  cardEyebrow,
  hrefFor,
}: ServiceCityGridProps) {
  return (
    <Section tone="cream" className="py-16 sm:py-20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <Heading as="h2" eyebrow={eyebrow}>
            {title}
          </Heading>
          {subtitle ? (
            <p className="mt-5 max-w-2xl mx-auto text-base text-ink/75 font-sans leading-relaxed">{subtitle}</p>
          ) : null}
        </div>

        <div className="grid sm:grid-cols-3 gap-px bg-ink/10 border border-ink/10">
          {cities.map((city) => (
            <Link
              key={city.slug}
              href={hrefFor(city)}
              className="group bg-parchment p-10 hover:bg-walnut transition-colors duration-500 text-center"
            >
              <span className="text-[11px] tracking-[0.22em] uppercase text-umber/70 group-hover:text-brass transition-colors">
                {cardEyebrow}
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
  );
}
