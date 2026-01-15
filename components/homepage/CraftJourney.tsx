import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Card } from "@/components/ui/Card";

const steps = [
  {
    name: "Consultation",
    body: "We meet with you, listen to your ideas, and talk through goals, budget, and timeline.",
  },
  {
    name: "Design & Planning",
    body: "We design your cabinetry and built-ins around your space, style, and needs.",
  },
  {
    name: "Craftsmanship",
    body: "Your project is built in our shop with close attention to detail and quality.",
  },
  {
    name: "Installation",
    body: "We personally install everything in your home, ensuring a clean and professional finish.",
  },
];

export function CraftJourney() {
  return (
    <Section>
      <div className="text-center">
        <Heading eyebrow="Our Process" accent="italic" className="mx-auto max-w-3xl">
          Our Design-to-Installation Process
        </Heading>
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-4">
        {steps.map((s, idx) => (
          <Card key={s.name} className="p-7">
            <div className="flex items-baseline gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-oxblood/10 text-oxblood font-elegant text-lg font-semibold">
                {idx + 1}
              </div>
            </div>
            <div className="mt-4 font-elegant text-xl tracking-tight text-ink">
              {s.name}
            </div>
            <p className="mt-2 text-sm text-ink/75 leading-relaxed">{s.body}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
