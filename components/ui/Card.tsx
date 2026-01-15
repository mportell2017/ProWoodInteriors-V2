import { cn } from "@/lib/cn";

export function Card({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "bg-parchment/70 backdrop-blur-[1px] border border-umber/15 shadow-[0_20px_50px_rgba(44,24,16,0.10)]",
        className
      )}
    >
      {children}
    </div>
  );
}

