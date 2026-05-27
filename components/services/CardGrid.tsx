import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { cn } from "@/lib/cn";

type CardItem = {
  title: string;
  /** Required for the "detail" variant; ignored by "checklist". */
  description?: string;
};

type CardGridProps = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  items: CardItem[];
  /** "detail" = brass left-rule cards with copy; "checklist" = brass-check spec list. */
  variant?: "detail" | "checklist";
  columns?: 2 | 3;
  tone?: "parchment" | "cream";
  /** Optional centered block below the grid (note + secondary CTA). */
  footer?: React.ReactNode;
};

const gridCols: Record<number, string> = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
};

function Check() {
  return (
    <svg className="w-5 h-5 flex-shrink-0 text-brass mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}

/**
 * Editorial card grid for scope/feature lists. `detail` renders a brass
 * left-rule with title + copy; `checklist` renders a brass check + label.
 */
export function CardGrid({
  eyebrow,
  title,
  subtitle,
  items,
  variant = "detail",
  columns = 2,
  tone = "parchment",
  footer,
}: CardGridProps) {
  return (
    <Section tone={tone} className="py-16 sm:py-20">
      <div className="max-w-5xl mx-auto">
        {title ? (
          <div className="text-center mb-12">
            <Heading as="h2" eyebrow={eyebrow}>
              {title}
            </Heading>
            {subtitle ? (
              <p className="mt-5 max-w-2xl mx-auto text-base text-ink/75 font-sans leading-relaxed">{subtitle}</p>
            ) : null}
          </div>
        ) : null}

        {variant === "checklist" ? (
          <div className={cn("grid gap-x-10 gap-y-4", gridCols[columns])}>
            {items.map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <Check />
                <p className="text-[15px] sm:text-base text-ink/85 font-sans leading-relaxed">{item.title}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className={cn("grid gap-x-12 gap-y-8", gridCols[columns])}>
            {items.map((item) => (
              <div key={item.title} className="border-l-2 border-brass/40 pl-5 py-1">
                <h3 className="font-display text-lg text-ink mb-2">{item.title}</h3>
                {item.description ? (
                  <p className="text-[15px] text-ink/75 font-sans leading-[1.7]">{item.description}</p>
                ) : null}
              </div>
            ))}
          </div>
        )}

        {footer ? <div className="mt-14 text-center">{footer}</div> : null}
      </div>
    </Section>
  );
}
