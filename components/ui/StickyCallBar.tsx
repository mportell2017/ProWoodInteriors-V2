import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/business";

/**
 * Mobile-only fixed tap-to-call bar for conversion-critical landing pages.
 * High-intent paid/organic mobile traffic converts on a phone tap, so the
 * number stays one thumb-reach away no matter how far they've scrolled.
 * Hidden on sm+ (desktop has the hero + form-band CTAs).
 */
export function StickyCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 sm:hidden">
      <a
        href={`tel:${PHONE_TEL}`}
        className="flex items-center justify-center gap-2.5 bg-oxblood py-3.5 text-[15px] font-semibold text-parchment shadow-[0_-6px_20px_rgba(0,0,0,0.22)]"
      >
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
        Call {PHONE_DISPLAY}
      </a>
    </div>
  );
}
