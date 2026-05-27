import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";

type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

type ServiceProcessTimelineProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  steps: ProcessStep[];
};

/**
 * Walnut-anchored editorial process timeline: oversized italic step numbers
 * down a fading vertical rule. Same crew, no hand-offs framing.
 */
export function ServiceProcessTimeline({ eyebrow, title, subtitle, steps }: ServiceProcessTimelineProps) {
  return (
    <Section tone="walnut" className="py-20 sm:py-24 relative isolate overflow-hidden">
      {/* Soft atmospheric glow */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none opacity-60 atmos-glow-top" />

      <div className="max-w-5xl mx-auto relative">
        <div className="text-center mb-14">
          <Heading as="h2" eyebrow={eyebrow} tone="dark">
            {title}
          </Heading>
          {subtitle ? (
            <p className="mt-5 max-w-2xl mx-auto text-base text-parchment/75 font-sans leading-relaxed">
              {subtitle}
            </p>
          ) : null}
        </div>

        <ol className="relative space-y-12 sm:space-y-14">
          {/* Vertical line on desktop */}
          <div
            aria-hidden="true"
            className="hidden md:block absolute left-[4.25rem] top-3 bottom-3 w-px bg-gradient-to-b from-brass/70 via-brass/20 to-transparent"
          />

          {steps.map((step) => (
            <li key={step.number} className="relative grid md:grid-cols-[8rem_1fr] gap-4 md:gap-10 items-start">
              <div className="relative z-10 flex items-baseline gap-3 md:block">
                <span className="font-display italic text-6xl sm:text-7xl text-brass leading-none drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
                  {step.number}
                </span>
              </div>
              <div className="md:pt-4">
                <h3 className="font-display text-2xl sm:text-[28px] text-parchment mb-3">{step.title}</h3>
                <p className="text-[15px] sm:text-base text-parchment/80 leading-[1.75] font-sans max-w-2xl">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
