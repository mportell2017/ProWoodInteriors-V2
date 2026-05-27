import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { CallButton } from "@/components/ui/CallButton";

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
          Custom Cabinetry &amp; Woodworking in {city}, {state}
        </Heading>
        <p className="mt-3 text-lg sm:text-xl text-ink/70 font-elegant leading-relaxed">
          {subtitle}
        </p>
        <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#book"
            className="inline-flex items-center justify-center gap-2 rounded-sm bg-oxblood px-7 py-4 text-base font-semibold tracking-wide text-parchment shadow-[0_10px_24px_rgba(122,29,29,0.22)] transition-all hover:bg-oxblood/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-oxblood focus-visible:ring-offset-2"
          >
            Get a Free Consultation
          </a>
          <CallButton tone="outline" showIcon />
        </div>
      </div>
    </Section>
  );
}
