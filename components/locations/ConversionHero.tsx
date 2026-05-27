import Image from "next/image";
import { QuickContactBar } from "@/components/forms/QuickContactBar";
import { TrustBar } from "@/components/ui/TrustBar";
import { CallButton } from "@/components/ui/CallButton";

type ConversionHeroProps = {
  eyebrow: string;
  /** Plain string so it stays a real, keyword-bearing <h1> for SEO. */
  title: string;
  subtitle: string;
  image: { src: string; alt: string };
  formEyebrow?: string;
  formHeading: string;
  /** Anchor id for the form card (lets other CTAs scroll to it). */
  formId?: string;
};

/**
 * Image-led "split" hero for conversion-critical landing pages: a framed
 * photograph (the homepage hero treatment — walnut bleed, brass double-border,
 * corner accents, gradient depth) with the headline + trust + call CTA on the
 * left and the lead form on the right, both in the first screen.
 */
export function ConversionHero({
  eyebrow,
  title,
  subtitle,
  image,
  formEyebrow = "Free Consultation",
  formHeading,
  formId = "book",
}: ConversionHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-walnut p-3 sm:p-4 lg:p-5">
      <div className="relative overflow-hidden rounded-sm">
        {/* Picture-frame border + corner accents (matches the homepage hero) */}
        <div className="pointer-events-none absolute inset-0 z-10">
          <div className="absolute inset-3 sm:inset-4 lg:inset-5 border border-brass/30" />
          <div className="absolute inset-4 sm:inset-5 lg:inset-6 border border-parchment/15" />
          <div className="absolute top-3 left-3 sm:top-4 sm:left-4 lg:top-5 lg:left-5 h-8 w-8 border-t-2 border-l-2 border-brass/50" />
          <div className="absolute top-3 right-3 sm:top-4 sm:right-4 lg:top-5 lg:right-5 h-8 w-8 border-t-2 border-r-2 border-brass/50" />
          <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 lg:bottom-5 lg:left-5 h-8 w-8 border-b-2 border-l-2 border-brass/50" />
          <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 lg:bottom-5 lg:right-5 h-8 w-8 border-b-2 border-r-2 border-brass/50" />
        </div>

        {/* Background image + readability gradients */}
        <Image src={image.src} alt={image.alt} fill priority className="object-cover" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-walnut/90 via-walnut/45 to-walnut/30" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-walnut/85 via-walnut/30 to-transparent" />

        {/* Content */}
        <div className="relative z-20 grid items-center gap-8 p-6 sm:p-10 lg:grid-cols-2 lg:gap-12 lg:p-14 min-h-[34rem]">
          {/* Left — headline, trust, call */}
          <div className="max-w-xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-12 bg-gradient-to-r from-brass to-transparent" />
              <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-parchment drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]">
                {eyebrow}
              </span>
            </div>
            <h1 className="font-display text-4xl leading-[1.08] tracking-tight text-parchment drop-shadow-[0_2px_8px_rgba(0,0,0,0.55)] sm:text-5xl">
              {title}
            </h1>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-parchment/85 font-elegant drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]">
              {subtitle}
            </p>
            <TrustBar tone="dark" className="mt-6" />
            <div className="mt-7">
              <CallButton tone="dark" showIcon />
            </div>
          </div>

          {/* Right — lead form on a dark glass card */}
          <div
            id={formId}
            className="rounded-sm border border-brass/40 bg-walnut/80 p-5 shadow-2xl backdrop-blur-md sm:p-6"
          >
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-brass">
              {formEyebrow}
            </p>
            <h2 className="mt-2 mb-5 font-display text-2xl leading-tight text-parchment sm:text-[1.7rem]">
              {formHeading}
            </h2>
            <QuickContactBar projectGridClassName="grid grid-cols-4 gap-2" />
          </div>
        </div>
      </div>
    </section>
  );
}
