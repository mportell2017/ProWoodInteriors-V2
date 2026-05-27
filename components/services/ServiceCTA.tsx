import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";
import { CallButton } from "@/components/ui/CallButton";
import { PHONE_DISPLAY } from "@/lib/business";

type ServiceCTAProps = {
  eyebrow?: string;
  title: string;
  body: string;
  estimateHref?: string;
  estimateLabel?: string;
};

/**
 * Closing walnut CTA inside a double-border editorial frame: phone CTA plus a
 * secondary outline estimate link.
 */
export function ServiceCTA({
  eyebrow = "Free, no-pressure",
  title,
  body,
  estimateHref = "/contact-us",
  estimateLabel = "Get a Free Estimate",
}: ServiceCTAProps) {
  return (
    <section className="relative isolate overflow-hidden bg-walnut text-parchment py-20 sm:py-24">
      {/* Editorial frame border */}
      <div className="absolute inset-5 sm:inset-8 lg:inset-12 border border-brass/15 pointer-events-none" />
      <div className="absolute inset-6 sm:inset-9 lg:inset-[3.25rem] border border-parchment/8 pointer-events-none" />

      <Container>
        <div className="max-w-3xl mx-auto text-center relative">
          <p className="text-[11px] tracking-[0.24em] uppercase text-brass mb-6 font-medium">{eyebrow}</p>
          <Heading tone="dark" showDivider={false} className="mb-6">
            {title}
          </Heading>
          <p className="font-elegant italic text-lg sm:text-xl text-parchment/85 leading-relaxed mb-10 max-w-2xl mx-auto">
            {body}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CallButton tone="dark" showIcon>
              {PHONE_DISPLAY}
            </CallButton>
            <ButtonLink
              href={estimateHref}
              variant="outline"
              className="border-2 border-parchment/40 text-parchment hover:bg-parchment/10"
            >
              {estimateLabel}
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
