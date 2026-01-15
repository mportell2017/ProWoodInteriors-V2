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

export function ProcessSection({ heading, steps, city }: ProcessSectionProps) {
  return (
    <Section tone="clear" className="py-16">
      <Container>
        <Heading as="h2" showDivider={true} className="text-center mb-12">
          {heading}
        </Heading>

        <div className="max-w-4xl mx-auto space-y-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex gap-6 items-start"
            >
              {/* Step Number */}
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brass/20 flex items-center justify-center">
                <span className="text-xl font-display font-bold text-brass">
                  {index + 1}
                </span>
              </div>

              {/* Step Content */}
              <div className="flex-1 pt-1">
                <h3 className="text-xl font-display font-semibold text-ink mb-2">
                  {step.title}
                </h3>
                <p className="text-base text-ink/70 font-elegant leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <ContactButton variant="secondary" />
        </div>
      </Container>
    </Section>
  );
}
