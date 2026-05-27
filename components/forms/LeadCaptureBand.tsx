import { Section } from "@/components/ui/Section";
import { QuickContactBar } from "@/components/forms/QuickContactBar";
import { TrustBar } from "@/components/ui/TrustBar";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/business";

type LeadCaptureBandProps = {
  eyebrow?: string;
  heading?: string;
  subtitle?: string;
  /** Anchor id so hero CTAs can scroll to this band. */
  id?: string;
};

/**
 * Dark "drop your info" lead-capture band: heading + trust line + the compact
 * QuickContactBar. Used on the homepage and — with city/service-specific copy —
 * near the top of the conversion-critical location landing pages.
 */
export function LeadCaptureBand({
  eyebrow = "Free Consultation",
  heading = "Start With a Free Consultation",
  subtitle = "Tell us a little about your project — we'll be in touch within 1–2 business days. No pressure, just honest guidance from the people who will build it.",
  id,
}: LeadCaptureBandProps) {
  return (
    <Section tone="walnut" id={id} className="border-t border-brass/25 py-12 sm:py-14">
      <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-brass/60" />
            <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-brass">
              {eyebrow}
            </span>
          </div>
          <h2 className="mt-3 font-display text-3xl leading-tight tracking-tight text-parchment sm:text-4xl">
            {heading}
          </h2>
          <p className="mt-2 max-w-xl leading-relaxed text-parchment/70">{subtitle}</p>
          <TrustBar tone="dark" className="mt-4" />
        </div>
        <p className="text-sm text-parchment/70 sm:text-right">
          Prefer to talk?{" "}
          <a href={`tel:${PHONE_TEL}`} className="font-semibold text-brass hover:text-brass/80">
            {PHONE_DISPLAY}
          </a>
        </p>
      </div>
      <QuickContactBar />
    </Section>
  );
}
