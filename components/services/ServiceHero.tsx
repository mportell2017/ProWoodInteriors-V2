import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { CallButton } from "@/components/ui/CallButton";
import { EditorialFrame } from "@/components/ui/EditorialFrame";
import { Ornament } from "@/components/ui/Ornament";

type ServiceHeroProps = {
  eyebrow: string;
  /** Styled multi-line heading content, rendered inside the page <h1>. */
  title: React.ReactNode;
  intro: string;
  image: { src: string; alt: string };
  /** Optional desktop-only stat badge (e.g. "40" / "Years of Local Craft"). */
  stat?: { value: string; label: React.ReactNode };
  estimateHref?: string;
  estimateLabel?: string;
};

/**
 * Split editorial hero: copy + CTA on the left, framed image on the right,
 * closed by a centered ornament rule. Shared across all service pages.
 */
export function ServiceHero({
  eyebrow,
  title,
  intro,
  image,
  stat,
  estimateHref = "/contact-us",
  estimateLabel = "Get a Free Estimate",
}: ServiceHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-parchment">
      <Container className="pt-12 pb-12 sm:pt-16 sm:pb-16 lg:pt-20 lg:pb-20">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left: copy */}
          <div className="lg:col-span-6 xl:col-span-5">
            <div className="flex items-center gap-3 mb-7">
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-brass/70 to-brass" />
              <span className="text-[11px] tracking-[0.22em] uppercase font-medium text-umber">
                {eyebrow}
              </span>
            </div>

            <h1 className="font-display tracking-tight text-ink text-[44px] sm:text-6xl lg:text-[68px] leading-[1.02]">
              {title}
            </h1>

            <p className="mt-8 text-base sm:text-lg leading-relaxed text-ink/80 font-sans max-w-md">
              {intro}
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <CallButton tone="light" />
              <ButtonLink href={estimateHref} variant="outline">
                {estimateLabel}
              </ButtonLink>
            </div>

            {stat ? (
              <div className="mt-12 hidden lg:flex items-center gap-5">
                <span className="font-display italic text-5xl text-brass/60 font-light leading-none">
                  {stat.value}
                </span>
                <div className="text-[11px] tracking-[0.22em] uppercase text-umber/70 font-medium leading-relaxed">
                  {stat.label}
                </div>
              </div>
            ) : null}
          </div>

          {/* Right: framed image */}
          <div className="lg:col-span-6 xl:col-span-7">
            <div className="relative aspect-[5/6] sm:aspect-[4/5] lg:aspect-[4/5] overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              <EditorialFrame />
              {/* Subtle warmth */}
              <div className="absolute inset-0 bg-gradient-to-tr from-ink/10 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </Container>

      {/* Closing rule */}
      <Ornament className="gap-3 pb-2" />
    </section>
  );
}
