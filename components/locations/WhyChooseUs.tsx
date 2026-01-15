import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { ContactButton } from "@/components/locations/ContactButton";

interface Reason {
  title: string;
  description: string;
}

interface WhyChooseUsProps {
  heading: string;
  reasons: Reason[];
  city: string;
}

export function WhyChooseUs({ heading, reasons, city }: WhyChooseUsProps) {
  return (
    <Section tone="parchment" className="py-16">
      <Container>
        <Heading as="h2" showDivider={true} className="text-center mb-12">
          {heading}
        </Heading>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md border border-umber/10 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-display font-semibold text-ink mb-3">
                {reason.title}
              </h3>
              <p className="text-base text-ink/70 font-elegant leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <ContactButton variant="primary" />
        </div>
      </Container>
    </Section>
  );
}
