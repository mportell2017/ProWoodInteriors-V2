import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";

type Benefit = { title: string; description: string };

type NumberedBenefitsProps = {
  eyebrow: string;
  title: string;
  benefits: Benefit[];
  tone?: "parchment" | "cream";
};

/**
 * Two-column list of benefits, each led by an oversized italic index number
 * and closed with a fading rule.
 */
export function NumberedBenefits({ eyebrow, title, benefits, tone = "parchment" }: NumberedBenefitsProps) {
  return (
    <Section tone={tone} className="py-16 sm:py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <Heading as="h2" eyebrow={eyebrow}>
            {title}
          </Heading>
        </div>

        <div className="grid md:grid-cols-2 gap-x-14 gap-y-12">
          {benefits.map((benefit, idx) => (
            <article key={benefit.title}>
              <div className="flex items-baseline gap-5 sm:gap-6">
                <span className="font-display italic text-5xl sm:text-6xl text-brass/70 font-light leading-none flex-shrink-0">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <div className="flex-1">
                  <h3 className="font-display text-xl sm:text-2xl text-ink mb-3">{benefit.title}</h3>
                  <p className="text-[15px] sm:text-base text-ink/80 leading-[1.7] font-sans">{benefit.description}</p>
                </div>
              </div>
              <div className="mt-7 ml-[4.25rem] sm:ml-[5rem] h-px bg-gradient-to-r from-umber/20 to-transparent" />
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
