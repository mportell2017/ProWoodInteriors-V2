import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function HomeHero() {
  return (
    <section className="relative isolate overflow-hidden bg-walnut p-3 sm:p-4 lg:p-5">
      {/* Framed container with margin */}
      <div className="relative overflow-hidden rounded-sm">
        {/* Subtle picture frame border effect */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          {/* Outer frame line */}
          <div className="absolute inset-3 sm:inset-4 lg:inset-5 border border-brass/30" />
          {/* Inner frame line */}
          <div className="absolute inset-4 sm:inset-5 lg:inset-6 border border-parchment/15" />
          {/* Corner accents */}
          <div className="absolute top-3 left-3 sm:top-4 sm:left-4 lg:top-5 lg:left-5 w-8 h-8 border-t-2 border-l-2 border-brass/50" />
          <div className="absolute top-3 right-3 sm:top-4 sm:right-4 lg:top-5 lg:right-5 w-8 h-8 border-t-2 border-r-2 border-brass/50" />
          <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 lg:bottom-5 lg:left-5 w-8 h-8 border-b-2 border-l-2 border-brass/50" />
          <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 lg:bottom-5 lg:right-5 w-8 h-8 border-b-2 border-r-2 border-brass/50" />
        </div>

        <div className="relative h-[80vh] min-h-[650px] max-h-[950px]">
          <Image
            src="/images/hero/pro-wood-interiors-kitchen.jpg"
            alt="Custom kitchen cabinetry by Professional Wood Interiors."
            fill
            priority
            className="object-cover hero-animate"
          />

          {/* Improved gradient overlay for better readability */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-walnut/90 via-walnut/30 to-walnut/10" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-walnut/70 via-walnut/20 to-transparent" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-walnut/20 to-transparent" />

        <Container className="relative h-full z-20 px-8 sm:px-10 lg:px-12">
          <div className="flex h-full items-end pb-20 sm:pb-24 lg:pb-28">
            <div className="max-w-[780px]">
              {/* Decorative top accent */}
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-12 bg-gradient-to-r from-brass to-transparent" />
                <span className="text-brass/90 text-sm tracking-[0.25em] uppercase font-medium">
                  St. Louis Custom Woodwork
                </span>
                <div className="h-px w-12 bg-gradient-to-l from-brass to-transparent" />
              </div>

              <h1 className="font-elegant text-4xl sm:text-5xl lg:text-6xl leading-[1.12] text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
                Thoughtfully Designed.<br />
                Carefully Built.<br />
                <span className="italic font-light">Professionally Installed.</span>
              </h1>

              {/* Elegant divider */}
              <div className="flex items-center gap-3 mt-8 mb-6">
                <div className="h-px flex-1 max-w-[80px] bg-gradient-to-r from-transparent via-brass/60 to-transparent" />
                <svg className="w-4 h-4 text-brass/70" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
                <div className="h-px flex-1 max-w-[80px] bg-gradient-to-r from-transparent via-brass/60 to-transparent" />
              </div>

              <p className="max-w-[560px] text-base sm:text-lg text-white/95 leading-relaxed font-sans font-medium">
                At Professional Wood Interiors, we specialize in custom cabinetry and built-ins that are designed around your space — not pulled from a catalog.
              </p>

              <p className="mt-4 max-w-[560px] text-sm sm:text-base text-white/85 leading-relaxed font-sans">
                Every project starts with a conversation. We listen to how you use your home, help guide design decisions, and then build everything in our shop before carefully installing it ourselves. No hand-offs. No sales teams. Just quality work done the right way.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <ButtonLink
                  href="/our-story"
                  size="md"
                  className="bg-oxblood hover:bg-oxblood/90 text-white font-semibold shadow-lg shadow-oxblood/30 border border-oxblood/50 hover:shadow-xl hover:shadow-oxblood/40 transition-all duration-300"
                >
                  Learn more about our approach →
                </ButtonLink>
              </div>

              {/* Bottom decorative element */}
              <div className="mt-10 flex items-center gap-4">
                <div className="h-px w-16 bg-gradient-to-r from-brass/50 to-transparent" />
                <span className="text-white/60 text-xs tracking-[0.2em] uppercase">
                  Since 1985
                </span>
              </div>
            </div>
          </div>
        </Container>
        </div>
      </div>
    </section>
  );
}

