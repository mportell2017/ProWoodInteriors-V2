import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/Container";

export function Section({
  id,
  tone = "parchment",
  className,
  children,
  containerClassName,
}: {
  id?: string;
  tone?: "parchment" | "walnut" | "clear";
  className?: string;
  containerClassName?: string;
  children: React.ReactNode;
}) {
  const toneClass =
    tone === "walnut"
      ? "bg-walnut text-parchment"
      : tone === "clear"
        ? ""
        : "bg-parchment text-ink";

  return (
    <section id={id} className={cn("py-8 sm:py-12", toneClass, className)}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}

