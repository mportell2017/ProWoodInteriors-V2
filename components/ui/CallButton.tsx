import { cn } from "@/lib/cn";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/business";

type CallButtonTone = "light" | "dark" | "outline";

const base =
  "inline-flex items-center justify-center gap-3 px-7 py-4 text-base font-semibold tracking-wide rounded-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

const tones: Record<CallButtonTone, string> = {
  // On parchment/cream backgrounds
  light:
    "text-parchment bg-oxblood hover:bg-oxblood/90 shadow-[0_10px_24px_rgba(122,29,29,0.22)] focus-visible:ring-oxblood",
  // On walnut/dark backgrounds
  dark: "text-walnut bg-brass hover:bg-brass/90 shadow-[0_14px_28px_rgba(0,0,0,0.35)] focus-visible:ring-brass focus-visible:ring-offset-walnut",
  // Secondary outline on parchment — pairs with a solid primary CTA
  outline:
    "text-oxblood bg-transparent ring-1 ring-inset ring-oxblood/40 hover:bg-oxblood/5 focus-visible:ring-oxblood",
};

function PhoneGlyph() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    </svg>
  );
}

type CallButtonProps = {
  tone?: CallButtonTone;
  /** Render the phone glyph before the label. */
  showIcon?: boolean;
  /** Override the label. Defaults to `Call {PHONE_DISPLAY}`. */
  children?: React.ReactNode;
  className?: string;
};

/**
 * Single source for the phone CTA. Pulls the number from lib/business.ts —
 * never hardcode it. `tone="light"` for parchment sections, `tone="dark"`
 * for walnut sections.
 */
export function CallButton({ tone = "light", showIcon = false, children, className }: CallButtonProps) {
  return (
    <a href={`tel:${PHONE_TEL}`} className={cn(base, tones[tone], className)}>
      {showIcon && <PhoneGlyph />}
      {children ?? `Call ${PHONE_DISPLAY}`}
    </a>
  );
}
