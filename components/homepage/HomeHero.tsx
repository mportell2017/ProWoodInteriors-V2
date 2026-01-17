import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";

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

        <div className="relative h-full z-20 p-8 sm:p-12 lg:p-16 flex flex-col justify-end">
          {/* Top left accent - aligned with content below */}
          <div className="flex items-center gap-4 mb-6 sm:mb-8">
            <div className="h-px w-12 bg-gradient-to-r from-brass to-transparent" />
            <span className="text-white text-sm tracking-[0.25em] uppercase font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              St. Louis Custom Woodwork
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-brass to-transparent" />
          </div>

          {/* Main content */}
          <div className="max-w-[780px]">
              <h1 className="font-elegant text-4xl sm:text-5xl lg:text-6xl leading-[1.12] text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
                Thoughtfully Designed.<br />
                Carefully Built.<br />
                <span className="italic font-light">Professionally Installed.</span>
              </h1>

              <div className="mt-8 sm:mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <ButtonLink
                  href="/showroom"
                  size="md"
                  className="bg-oxblood hover:bg-oxblood/90 text-white font-semibold shadow-lg shadow-oxblood/30 border border-oxblood/50 hover:shadow-xl hover:shadow-oxblood/40 transition-all duration-300"
                >
                  Our Showroom
                </ButtonLink>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center px-6 py-3 text-white font-elegant text-lg border-2 border-white/30 hover:border-white/50 hover:bg-white/10 transition-all duration-300 rounded-sm"
                >
                  Our Services
                </a>
              </div>

              {/* Bottom decorative element */}
              <div className="mt-6 sm:mt-8 flex items-center gap-4">
                <div className="h-px w-16 bg-gradient-to-r from-brass/50 to-transparent" />
                <span className="text-white/60 text-xs tracking-[0.2em] uppercase">
                  Since 1985
                </span>
              </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}

