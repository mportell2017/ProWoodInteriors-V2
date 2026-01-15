import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";

interface LocationHeroProps {
  city: string;
  state: string;
  subtitle: string;
}

export function LocationHero({ city, state, subtitle }: LocationHeroProps) {
  return (
    <Section tone="clear" className="pt-24 pb-2 sm:pt-28 sm:pb-3">
      <div className="text-center max-w-4xl mx-auto">
        <Heading as="h1" eyebrow="Professional Wood Interiors" showDivider={true}>
          Custom Cabinetry in {city}, {state}
        </Heading>
        <p className="mt-3 text-lg sm:text-xl text-ink/70 font-elegant leading-relaxed">
          {subtitle}
        </p>
      </div>
    </Section>
  );
}
