import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "outline" | "ghost";
type ButtonSize = "sm" | "md";

const base =
  "inline-flex items-center justify-center gap-2 rounded-sm px-5 py-3 text-sm font-medium tracking-[0.12em] uppercase transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2 focus-visible:ring-offset-parchment";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-oxblood text-parchment hover:bg-oxblood/95 shadow-[0_10px_22px_rgba(50,24,16,0.18)]",
  outline:
    "border border-umber/35 text-ink hover:bg-umber/5",
  ghost:
    "text-ink hover:bg-umber/5",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-[12px]",
  md: "px-6 py-3",
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
}) {
  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    />
  );
}

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
}: {
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} className={cn(base, variants[variant], sizes[size], className)}>
      {children}
    </Link>
  );
}

