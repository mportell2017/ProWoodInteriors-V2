import { Section } from "@/components/ui/Section";

type ServiceIntroProps = {
  /** Lead paragraph; rendered large with a brass drop-cap. */
  lead: string;
  /** Two balanced columns of supporting paragraphs. */
  left: string[];
  right: string[];
};

/**
 * Two-column editorial intro: an oversized drop-cap lead paragraph spanning
 * full width, followed by two columns of body copy.
 */
export function ServiceIntro({ lead, left, right }: ServiceIntroProps) {
  return (
    <Section className="py-16 sm:py-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-x-12 gap-y-8">
          <div className="lg:col-span-12">
            <p className="font-display text-2xl sm:text-[28px] leading-[1.35] text-ink first-letter:font-display first-letter:text-[5.5rem] first-letter:font-medium first-letter:text-brass first-letter:float-left first-letter:leading-[0.85] first-letter:mr-3 first-letter:mt-1">
              {lead}
            </p>
          </div>

          <div className="lg:col-span-6 space-y-5">
            {left.map((para, i) => (
              <p key={i} className="text-[15px] sm:text-base text-ink/80 leading-[1.7] font-sans">
                {para}
              </p>
            ))}
          </div>
          <div className="lg:col-span-6 space-y-5">
            {right.map((para, i) => (
              <p key={i} className="text-[15px] sm:text-base text-ink/80 leading-[1.7] font-sans">
                {para}
              </p>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
