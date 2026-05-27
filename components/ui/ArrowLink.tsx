import { cn } from "@/lib/cn";
import { ButtonLink } from "@/components/ui/Button";

type ArrowLinkProps = {
  href: string;
  variant?: "primary" | "outline" | "ghost";
  className?: string;
  children: React.ReactNode;
};

/**
 * Outline button with a trailing arrow that nudges right on hover.
 * The recurring "View all … →" call-to-action across service & showroom pages.
 */
export function ArrowLink({ href, variant = "outline", className, children }: ArrowLinkProps) {
  return (
    <ButtonLink href={href} variant={variant} className={cn("group", className)}>
      {children}
      <svg
        className="w-5 h-5 ml-1 transition-transform group-hover:translate-x-1"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </ButtonLink>
  );
}
