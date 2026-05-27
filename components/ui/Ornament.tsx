import { cn } from "@/lib/cn";

type OrnamentTone = "light" | "dark";

/**
 * The four-point sparkle mark used throughout the editorial layout.
 * Shared atom so the SVG path lives in exactly one place.
 */
export function Sparkle({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2L13.09 5.26L16 6L13.09 6.74L12 10L10.91 6.74L8 6L10.91 5.26L12 2Z" />
    </svg>
  );
}

type OrnamentProps = {
  tone?: OrnamentTone;
  className?: string;
};

/**
 * Centered sparkle flanked by fading rules — the standalone section divider
 * (hero closer, between editorial blocks). For the eyebrow/heading divider,
 * see <Heading showDivider />.
 */
export function Ornament({ tone = "light", className }: OrnamentProps) {
  const rule = tone === "dark" ? "via-brass/50" : "via-umber/25";
  const star = tone === "dark" ? "text-brass/60" : "text-umber/40";

  return (
    <div className={cn("flex items-center justify-center gap-3", className)}>
      <div className={cn("h-px w-16 bg-gradient-to-r from-transparent to-transparent", rule)} />
      <Sparkle className={cn("w-3 h-3", star)} />
      <div className={cn("h-px w-16 bg-gradient-to-l from-transparent to-transparent", rule)} />
    </div>
  );
}
