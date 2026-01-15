import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";

const greatFitItems = [
  "Custom cabinetry built specifically for your home",
  "Thoughtful design help — not just installation",
  "Quality craftsmanship that holds up over time",
  "Direct communication with the person designing and building your project",
];

const bestSuitedItems = [
  "Value custom-built solutions over off-the-shelf cabinets",
  "Are comfortable with a thoughtful design and build timeline",
  "Prefer working with a small, hands-on shop rather than a large franchise",
];

export function IdealClientSection() {
  return (
    <Section tone="walnut">
      <div className="text-center mb-12">
        <Heading eyebrow="Working Together" accent="italic" tone="dark" className="mx-auto max-w-3xl">
          How We Work Best With Homeowners
        </Heading>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Great Fit Section */}
        <div className="bg-parchment/10 backdrop-blur-sm border border-parchment/20 rounded-lg p-8">
          <h3 className="font-elegant text-2xl text-parchment mb-6">
            We're a Great Fit If You're Looking For:
          </h3>
          <ul className="space-y-4">
            {greatFitItems.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <svg className="w-5 h-5 text-brass flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-parchment/90 font-sans text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Best Suited Section */}
        <div className="bg-parchment/10 backdrop-blur-sm border border-parchment/20 rounded-lg p-8">
          <h3 className="font-elegant text-2xl text-parchment mb-6">
            Our Work Is Best Suited For Homeowners Who:
          </h3>
          <ul className="space-y-4">
            {bestSuitedItems.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <svg className="w-5 h-5 text-brass flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-parchment/90 font-sans text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
