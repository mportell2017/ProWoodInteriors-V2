import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { ButtonLink } from "@/components/ui/Button";

export function FinalCTA() {
  return (
    <Section tone="walnut">
      <div className="mx-auto max-w-4xl text-center">
        <Heading eyebrow="Let's Connect" accent="italic" tone="dark">
          Ready to Transform Your Space?
        </Heading>
        <p className="mt-6 text-parchment/80 text-lg max-w-2xl mx-auto leading-relaxed">
          Our team is ready to bring your vision to life with expertly crafted custom cabinetry.
          Get in touch today to schedule a consultation.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5">
          <ButtonLink
            href="tel:3144379988"
            className="bg-brass hover:bg-brass/90 text-white font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            size="lg"
          >
            <span className="flex items-center gap-4">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="font-elegant text-lg tracking-wide">Call (314) 437-9988</span>
            </span>
          </ButtonLink>
          <ButtonLink
            href="/showroom"
            variant="outline"
            className="border-2 border-parchment/40 text-parchment hover:bg-parchment/10 hover:border-parchment/60"
            size="lg"
          >
            <span className="flex items-center gap-2">
              View Our Portfolio
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </ButtonLink>
        </div>
        <p className="mt-8 text-parchment/60 text-sm">
          Serving St. Louis and surrounding areas since 1985
        </p>
      </div>
    </Section>
  );
}
