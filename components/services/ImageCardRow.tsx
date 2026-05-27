import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { cn } from "@/lib/cn";

type ImageCard = {
  title: string;
  description: string;
  image: { src: string; alt: string };
};

type ImageCardRowProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  cards: ImageCard[];
  columns?: 3 | 4;
  tone?: "parchment" | "cream";
  /** Optional centered block below the row (e.g. a "view all" link). */
  footer?: React.ReactNode;
};

const gridCols: Record<number, string> = {
  3: "grid-cols-1 sm:grid-cols-3",
  4: "grid-cols-2 lg:grid-cols-4",
};

/**
 * Image-led card row with numbered editorial badges (door styles, build types,
 * configurations). Tall portrait images over a title + short description.
 */
export function ImageCardRow({
  eyebrow,
  title,
  subtitle,
  cards,
  columns = 4,
  tone = "parchment",
  footer,
}: ImageCardRowProps) {
  return (
    <Section tone={tone} className="py-16 sm:py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Heading as="h2" eyebrow={eyebrow}>
            {title}
          </Heading>
          {subtitle ? (
            <p className="mt-5 max-w-2xl mx-auto text-base text-ink/75 font-sans leading-relaxed">{subtitle}</p>
          ) : null}
        </div>

        <div className={cn("grid gap-6 sm:gap-8", gridCols[columns])}>
          {cards.map((card, idx) => (
            <article key={card.title} className="group">
              <div className="relative aspect-[3/4] overflow-hidden mb-5 bg-ink/5">
                <Image
                  src={card.image.src}
                  alt={card.image.alt}
                  fill
                  className="object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-ink/10 pointer-events-none" />
                <span className="absolute top-3 left-3 font-display italic text-xs tracking-wider text-parchment bg-walnut/85 backdrop-blur-sm px-2.5 py-1">
                  №&nbsp;{String(idx + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="font-display text-xl text-ink mb-2">{card.title}</h3>
              <p className="text-sm text-ink/75 font-sans leading-relaxed">{card.description}</p>
            </article>
          ))}
        </div>

        {footer ? <div className="mt-12 text-center">{footer}</div> : null}
      </div>
    </Section>
  );
}
