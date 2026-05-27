import Image from "next/image";
import { Sparkle } from "@/components/ui/Ornament";

/**
 * Full-bleed image band used as a palette cleanser between sections: a
 * darkened photo with a centered brass ornament. Purely decorative.
 */
export function ImageStrip({ src }: { src: string }) {
  return (
    <section aria-hidden="true" className="relative isolate overflow-hidden h-32 sm:h-40 lg:h-48 bg-walnut">
      <Image src={src} alt="" fill className="object-cover object-center" sizes="100vw" />
      {/* Vignette */}
      <div className="absolute inset-0 pointer-events-none wood-strip-vignette" />
      {/* Centered ornament */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex items-center gap-5">
          <div className="h-px w-20 sm:w-32 bg-gradient-to-r from-transparent to-brass/70" />
          <Sparkle className="w-4 h-4 text-brass drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]" />
          <div className="h-px w-20 sm:w-32 bg-gradient-to-l from-transparent to-brass/70" />
        </div>
      </div>
    </section>
  );
}
