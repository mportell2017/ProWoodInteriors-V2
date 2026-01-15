import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { ButtonLink } from "@/components/ui/Button";

const communities = [
  "St. Louis",
  "Chesterfield",
  "Clayton",
  "Wildwood",
  "St. Peters",
  "St. Charles",
  "Wentzville",
];

export function ServiceAreaSection() {
  return (
    <Section>
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <Heading eyebrow="Service Area" accent="italic">
            Serving Homeowners Across St. Louis & Missouri
          </Heading>
          <p className="mt-6 text-ink/80 leading-relaxed">
            We proudly work with homeowners throughout the greater St. Louis area. 
            If you're nearby and looking for custom cabinetry or built-ins, we'd be 
            happy to talk through your project.
          </p>
          <div className="mt-8">
            <ButtonLink href="/contact-us" variant="outline">
              Not sure if we serve your area? Let's chat →
            </ButtonLink>
          </div>
        </div>
        
        <div className="bg-parchment border border-umber/15 rounded-lg p-8">
          <h3 className="font-elegant text-xl text-ink mb-6">
            Communities We Serve:
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {communities.map((community) => (
              <div 
                key={community}
                className="flex items-center gap-2 text-ink/80"
              >
                <svg className="w-4 h-4 text-oxblood flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="font-sans text-sm">{community}</span>
              </div>
            ))}
            <div className="flex items-center gap-2 text-ink/80 col-span-2 mt-2">
              <svg className="w-4 h-4 text-brass flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
              </svg>
              <span className="font-sans text-sm italic">& Surrounding Areas</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
