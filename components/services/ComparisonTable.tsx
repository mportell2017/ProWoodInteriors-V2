import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { cn } from "@/lib/cn";

type ComparisonRow = {
  label: string;
  /** One cell per column, in the same order as `columns`. */
  cells: string[];
};

type DecisionCard = {
  eyebrow: string;
  body: string;
};

type ComparisonTableProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  /** Column headers, e.g. ["Painting", "Refacing", "Replacement"]. */
  columns: string[];
  /** Index of the column to highlight (brass bar + tinted cells). */
  highlightColumnIndex: number;
  rows: ComparisonRow[];
  /** Optional "how to choose" cards below the table — one per column. */
  decisions?: DecisionCard[];
};

const decisionCols: Record<number, string> = {
  2: "md:grid-cols-2",
  3: "md:grid-cols-3",
  4: "md:grid-cols-4",
};

/**
 * Refined comparison table with one highlighted column, plus optional decision
 * helper cards. Generalized from the refacing painting/refacing/replacement view.
 */
export function ComparisonTable({
  eyebrow,
  title,
  subtitle,
  columns,
  highlightColumnIndex,
  rows,
  decisions,
}: ComparisonTableProps) {
  return (
    <Section tone="cream" className="py-16 sm:py-20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <Heading as="h2" eyebrow={eyebrow}>
            {title}
          </Heading>
          {subtitle ? (
            <p className="mt-5 text-base text-ink/75 max-w-2xl mx-auto font-sans leading-relaxed">{subtitle}</p>
          ) : null}
        </div>

        <div className="overflow-x-auto -mx-4 sm:mx-0">
          <table className="w-full text-left min-w-[640px] sm:min-w-0">
            <thead>
              <tr className="border-y border-ink/15">
                <th className="px-4 sm:px-6 py-5 font-display text-sm tracking-wide uppercase text-umber/70">&nbsp;</th>
                {columns.map((col, i) => {
                  const highlighted = i === highlightColumnIndex;
                  return (
                    <th
                      key={col}
                      className={cn(
                        "px-4 sm:px-6 py-5 font-display text-base sm:text-lg text-center",
                        highlighted ? "relative text-ink" : "text-ink/80"
                      )}
                    >
                      {highlighted ? <span className="absolute top-0 left-1 right-1 h-[3px] bg-brass" /> : null}
                      {col}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody className="divide-y divide-ink/8">
              {rows.map((row, idx) => (
                <tr key={row.label} className={idx % 2 === 1 ? "bg-ink/[0.015]" : ""}>
                  <td className="px-4 sm:px-6 py-4 font-display text-[15px] sm:text-base text-ink">{row.label}</td>
                  {row.cells.map((cell, i) => {
                    const highlighted = i === highlightColumnIndex;
                    return (
                      <td
                        key={i}
                        className={cn(
                          "px-4 sm:px-6 py-4 text-center text-[14px] sm:text-[15px] font-sans",
                          highlighted ? "relative text-ink font-medium bg-brass/[0.06]" : "text-ink/70"
                        )}
                      >
                        {cell}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {decisions && decisions.length > 0 ? (
          <div className={cn("mt-12 grid gap-px bg-ink/10 border border-ink/10", decisionCols[decisions.length] ?? "md:grid-cols-3")}>
            {decisions.map((card, i) => {
              const highlighted = i === highlightColumnIndex;
              return (
                <div key={card.eyebrow} className={cn("bg-parchment p-7", highlighted && "relative")}>
                  {highlighted ? <span className="absolute top-0 left-0 right-0 h-[3px] bg-brass" /> : null}
                  <p
                    className={cn(
                      "text-[11px] tracking-[0.22em] uppercase mb-3",
                      highlighted ? "text-brass font-medium" : "text-umber/70"
                    )}
                  >
                    {card.eyebrow}
                  </p>
                  <p className={cn("text-[15px] leading-[1.7] font-sans", highlighted ? "text-ink/85" : "text-ink/80")}>
                    {card.body}
                  </p>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
    </Section>
  );
}
