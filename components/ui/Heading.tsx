import { cn } from "@/lib/cn";

type HeadingProps = {
  as?: "h1" | "h2" | "h3";
  eyebrow?: string;
  accent?: "none" | "italic";
  tone?: "light" | "dark";
  showDivider?: boolean;
  className?: string;
  children: React.ReactNode;
};

export function Heading({
  as = "h2",
  eyebrow,
  accent = "none",
  tone = "light",
  showDivider = true,
  className,
  children,
}: HeadingProps) {
  const Tag = as;
  const size =
    as === "h1"
      ? "text-4xl sm:text-5xl lg:text-6xl leading-[1.06]"
      : as === "h3"
        ? "text-xl sm:text-2xl leading-snug"
        : "text-3xl sm:text-4xl leading-tight";

  const isDark = tone === "dark";

  return (
    <div className={cn("space-y-3", className)}>
      {eyebrow ? (
        <div className="flex items-center gap-3 justify-center">
          {showDivider && (
            <div className={cn(
              "h-px w-8 hidden sm:block",
              isDark 
                ? "bg-gradient-to-r from-transparent to-brass/60" 
                : "bg-gradient-to-r from-transparent to-umber/30"
            )} />
          )}
          <span className={cn(
            "text-[11px] tracking-[0.18em] uppercase font-medium",
            isDark ? "text-brass" : "text-umber/80"
          )}>
            {eyebrow}
          </span>
          {showDivider && (
            <div className={cn(
              "h-px w-8 hidden sm:block",
              isDark 
                ? "bg-gradient-to-l from-transparent to-brass/60" 
                : "bg-gradient-to-l from-transparent to-umber/30"
            )} />
          )}
        </div>
      ) : null}
      <Tag
        className={cn(
          "font-display tracking-tight",
          size,
          accent === "italic" && "italic",
          isDark && "text-parchment"
        )}
      >
        {children}
      </Tag>
      {showDivider && (
        <div className="flex items-center justify-center gap-2 pt-1">
          <div className={cn(
            "h-px w-12",
            isDark 
              ? "bg-gradient-to-r from-transparent via-brass/50 to-transparent" 
              : "bg-gradient-to-r from-transparent via-umber/25 to-transparent"
          )} />
          <svg 
            className={cn(
              "w-3 h-3",
              isDark ? "text-brass/60" : "text-umber/40"
            )} 
            viewBox="0 0 24 24" 
            fill="currentColor"
          >
            <path d="M12 2L13.09 5.26L16 6L13.09 6.74L12 10L10.91 6.74L8 6L10.91 5.26L12 2Z" />
          </svg>
          <div className={cn(
            "h-px w-12",
            isDark 
              ? "bg-gradient-to-l from-transparent via-brass/50 to-transparent" 
              : "bg-gradient-to-l from-transparent via-umber/25 to-transparent"
          )} />
        </div>
      )}
    </div>
  );
}
