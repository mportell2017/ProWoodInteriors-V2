import { Container } from "@/components/ui/Container";

type StatMomentProps = {
  eyebrow: string;
  /** The headline figure, e.g. "10–14". */
  value: string;
  /** Italic caption flanked by rules, e.g. "weeks, design to walkthrough". */
  caption: string;
  body: string;
};

/**
 * Full-bleed walnut "stat moment": one oversized italic figure with a flanked
 * caption and a supporting paragraph. A deliberate pause between sections.
 */
export function StatMoment({ eyebrow, value, caption, body }: StatMomentProps) {
  return (
    <section className="relative isolate overflow-hidden bg-walnut text-parchment py-20 sm:py-24 lg:py-28">
      {/* Subtle radial atmosphere */}
      <div className="absolute inset-0 opacity-50 pointer-events-none atmos-glow" />
      <Container>
        <div className="max-w-4xl mx-auto text-center relative">
          <p className="text-[11px] tracking-[0.24em] uppercase text-brass mb-8 font-medium">{eyebrow}</p>

          <p className="font-display leading-[0.95] text-parchment">
            <span className="block text-[88px] sm:text-[140px] lg:text-[180px] italic font-light tracking-tight">
              {value}
            </span>
          </p>

          <div className="mt-6 flex items-center justify-center gap-4">
            <div className="h-px w-12 sm:w-20 bg-gradient-to-r from-transparent to-brass/60" />
            <span className="font-elegant italic text-lg sm:text-2xl text-brass">{caption}</span>
            <div className="h-px w-12 sm:w-20 bg-gradient-to-l from-transparent to-brass/60" />
          </div>

          <p className="mt-10 max-w-2xl mx-auto text-base sm:text-[17px] text-parchment/75 leading-[1.7] font-sans">
            {body}
          </p>
        </div>
      </Container>
    </section>
  );
}
