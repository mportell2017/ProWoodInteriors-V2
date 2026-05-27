import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { cn } from "@/lib/cn";

type DiptychColumn = {
  /** Roman/ordinal marker, e.g. "i." / "ii.". */
  numeral: string;
  heading: string;
  /** Tints the numeral + item dashes. */
  accent?: "umber" | "brass";
  items: string[];
  link?: { label: string; href: string };
};

type DiptychListProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  columns: [DiptychColumn, DiptychColumn];
  /** Italic note centered below the diptych. */
  footnote?: string;
  tone?: "parchment" | "cream";
};

const accents = {
  umber: { numeral: "text-umber/60", dash: "bg-umber/40" },
  brass: { numeral: "text-brass", dash: "bg-brass" },
} as const;

/**
 * Two-panel comparison list (e.g. "What stays / What changes", or
 * "Remodel / Refacing") with ordinal markers and dashed item rules.
 */
export function DiptychList({ eyebrow, title, subtitle, columns, footnote, tone = "cream" }: DiptychListProps) {
  return (
    <Section tone={tone} className="py-16 sm:py-20">
      <div className="max-w-5xl mx-auto">
        <Heading as="h2" eyebrow={eyebrow} className="text-center">
          {title}
        </Heading>

        {subtitle ? (
          <p className="mt-8 text-base text-ink/80 leading-[1.7] font-sans max-w-2xl mx-auto text-center">{subtitle}</p>
        ) : null}

        <div className="mt-14 grid md:grid-cols-2 gap-px bg-ink/10 border border-ink/10">
          {columns.map((col) => {
            const accent = accents[col.accent ?? "umber"];
            return (
              <div key={col.heading} className="bg-parchment p-8 sm:p-10">
                <div className="flex items-baseline gap-3 mb-7">
                  <span className={cn("font-display italic text-3xl leading-none", accent.numeral)}>{col.numeral}</span>
                  <h3 className="font-display text-2xl text-ink">{col.heading}</h3>
                </div>
                <ul className="space-y-4">
                  {col.items.map((item) => (
                    <li key={item} className="flex items-start gap-4 text-[15px] text-ink/80 font-sans leading-relaxed">
                      <span className={cn("mt-[0.6rem] inline-block h-px w-4 flex-shrink-0", accent.dash)} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                {col.link ? (
                  <div className="mt-6">
                    <Link href={col.link.href} className="text-brass font-sans font-semibold hover:underline">
                      {col.link.label} &rarr;
                    </Link>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>

        {footnote ? (
          <p className="mt-8 text-base text-ink/60 italic text-center max-w-2xl mx-auto">{footnote}</p>
        ) : null}
      </div>
    </Section>
  );
}
