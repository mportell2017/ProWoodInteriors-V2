import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { ContactForm } from "@/components/forms/ContactForm";

export function SoftCTA() {
  return (
    <Section>
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <Heading eyebrow="Get Started" accent="italic">
            Have a Project in Mind?
          </Heading>
          <p className="mt-6 text-ink/70 text-lg max-w-2xl mx-auto leading-relaxed">
            Whether you&apos;re ready to move forward or just exploring ideas, we&apos;re happy to answer questions and offer guidance.
          </p>
        </div>

        <div className="bg-parchment/40 backdrop-blur-sm rounded-2xl border-2 border-umber/20 p-8 md:p-12 shadow-xl">
          <ContactForm variant="spacious" />
        </div>
      </div>
    </Section>
  );
}
