import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { ContactButton } from "@/components/locations/ContactButton";

interface ProcessStep {
  title: string;
  description: string;
}

interface ProcessSectionProps {
  heading: string;
  steps: ProcessStep[];
  city: string;
}

export function ProcessSection({ heading, steps }: ProcessSectionProps) {
  return (
    <Section tone="clear" className="py-16">
      <Container>
        <Heading as="h2" showDivider={true} className="text-center mb-14">
          {heading}
        </Heading>

        <div className="max-w-3xl mx-auto">
          <ol className="relative">
            {/* Vertical brass connector line */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute left-[19px] top-4 bottom-4 w-px bg-gradient-to-b from-brass/0 via-brass/40 to-brass/0"
            />

            {steps.map((step, index) => (
              <li
                key={index}
                className="relative pl-16 pb-10 last:pb-0"
              >
                {/* Numbered marker */}
                <div className="absolute left-0 top-0 flex items-center justify-center w-10 h-10 rounded-full bg-parchment border border-brass/50 shadow-[0_4px_10px_-2px_rgba(181,139,75,0.25)]">
                  <span className="font-display italic text-brass text-base leading-none">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Connector tick */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute left-10 top-[19px] h-px w-5 bg-brass/35"
                />

                <div className="pt-0.5">
                  <h3 className="font-display text-xl sm:text-2xl text-ink leading-tight">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-ink/75 text-base sm:text-[17px] font-elegant leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="flex justify-center mt-14">
          <ContactButton variant="secondary" />
        </div>
      </Container>
    </Section>
  );
}
