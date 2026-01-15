import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { ContactButton } from "@/components/locations/ContactButton";

interface LocationExpertiseProps {
  heading: string;
  content: string[];
  city: string;
}

export function LocationExpertise({ heading, content, city }: LocationExpertiseProps) {
  return (
    <Section tone="clear" className="py-16">
      <Container>
        <div className="max-w-4xl mx-auto">
          <Heading as="h2" showDivider={true} className="text-center mb-12">
            {heading}
          </Heading>

          <div className="space-y-6">
            {content.map((paragraph, index) => (
              <p
                key={index}
                className="text-lg text-ink/80 font-elegant leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="flex justify-center mt-10">
            <ContactButton variant="primary" />
          </div>
        </div>
      </Container>
    </Section>
  );
}
