import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { ContactForm } from "@/components/forms/ContactForm";

export function SoftCTA() {
  return (
    <Section>
      <div className="mx-auto max-w-3xl">
        <div className="mb-8 text-center">
          <Heading eyebrow="Get Started" accent="italic">
            Have a Project in Mind?
          </Heading>
          <p className="mx-auto mt-5 max-w-2xl text-ink/70 leading-relaxed">
            Whether you&apos;re ready to move forward or just exploring ideas, we&apos;re happy to answer questions and offer guidance.
          </p>
        </div>

        <div className="mx-auto max-w-2xl rounded-sm border border-umber/20 bg-parchment/40 p-6 shadow-lg backdrop-blur-sm md:p-8">
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}
