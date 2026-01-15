import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { LocationContactForm } from "@/components/locations/LocationContactForm";

interface LocationCTAProps {
  city: string;
  phoneNumber: string;
}

export function LocationCTA({ city, phoneNumber }: LocationCTAProps) {
  return (
    <Section tone="walnut" className="py-16" id="contact">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Phone CTA */}
        <div className="space-y-6">
          <Heading as="h2" tone="dark" showDivider={false}>
            Ready to Transform Your {city} Home?
          </Heading>

          <p className="text-parchment/80 text-lg font-elegant leading-relaxed">
            Get a free consultation and discover how custom cabinetry can enhance your space.
            Call us today or fill out the form to get started.
          </p>

          <div className="space-y-4">
            <a
              href={`tel:${phoneNumber.replace(/\D/g, '')}`}
              className="inline-flex items-center gap-3 text-3xl sm:text-4xl font-display font-semibold text-brass hover:text-brass/90 transition-colors"
            >
              <svg className="w-8 h-8 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {phoneNumber}
            </a>

            <div className="text-parchment/60 text-sm space-y-1">
              <p className="font-medium">Business Hours:</p>
              <p>Monday – Friday: 8:00 AM – 5:00 PM</p>
              <p>Saturday – Sunday: Closed</p>
            </div>
          </div>

          <div className="pt-6 border-t border-parchment/20">
            <p className="text-parchment/80 font-medium mb-3">Serving {city} and surrounding areas:</p>
            <p className="text-parchment/60 text-sm">
              We proudly serve homeowners throughout St. Louis County with over 35 years of
              custom cabinetry expertise.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-parchment rounded-lg p-8 shadow-xl">
          <LocationContactForm />
        </div>
      </div>
    </Section>
  );
}
