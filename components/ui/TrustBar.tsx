import { cn } from "@/lib/cn";
import { RATING, FOUNDED_YEAR, GOOGLE_REVIEW_URL } from "@/lib/business";

type TrustBarProps = {
  /** `light` for parchment backgrounds, `dark` for walnut. */
  tone?: "light" | "dark";
  className?: string;
};

function Stars() {
  return (
    <span className="inline-flex text-brass" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.79L10 14.77l-5.2 2.73.99-5.79L1.58 7.62l5.82-.85L10 1.5z" />
        </svg>
      ))}
    </span>
  );
}

/**
 * Real social-proof line — rating + review count come from lib/business.ts
 * (the single source of truth, kept in sync with the Google Business Profile).
 * Never hardcode a count here; update RATING in business.ts as reviews grow.
 */
export function TrustBar({ tone = "light", className }: TrustBarProps) {
  const dark = tone === "dark";
  const muted = dark ? "text-parchment/30" : "text-ink/25";
  return (
    <div
      className={cn(
        "flex flex-wrap items-center gap-x-3 gap-y-1 text-sm",
        dark ? "text-parchment/80" : "text-ink/70",
        className
      )}
    >
      <span className="inline-flex items-center gap-1.5">
        <Stars />
        <span className="font-semibold">{RATING.ratingValue}.0</span>
      </span>
      <span aria-hidden="true" className={muted}>
        ·
      </span>
      <a
        href={GOOGLE_REVIEW_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={cn("underline-offset-4 hover:underline", dark ? "hover:text-parchment" : "hover:text-ink")}
      >
        {RATING.reviewCount} Google reviews
      </a>
      <span aria-hidden="true" className={muted}>
        ·
      </span>
      <span>Family-owned since {FOUNDED_YEAR}</span>
    </div>
  );
}
