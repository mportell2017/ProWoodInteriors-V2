import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Container } from '@/components/ui/Container';

export const metadata: Metadata = {
  title: 'Privacy Policy | Professional Wood Interiors',
  description: 'Privacy Policy for Professional Wood Interiors. Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navigation />

      <Section className="pt-24 pb-16">
        <Container>
          <div className="max-w-3xl mx-auto">
            <Heading as="h1" accent="italic">
              Privacy Policy
            </Heading>
            <p className="mt-4 text-ink/60 text-sm">
              Last updated: January 2025
            </p>

            <div className="mt-12 prose prose-lg max-w-none">
              <h2 className="font-elegant text-2xl text-ink mt-8 mb-4">Information We Collect</h2>
              <p className="text-ink/80 leading-relaxed mb-4">
                When you contact us through our website, we collect the information you provide, including your name, email address, phone number, address, and project details. This information is used solely to respond to your inquiry and provide our custom cabinetry services.
              </p>

              <h2 className="font-elegant text-2xl text-ink mt-8 mb-4">How We Use Your Information</h2>
              <p className="text-ink/80 leading-relaxed mb-4">
                We use the information you provide to:
              </p>
              <ul className="list-disc pl-6 text-ink/80 space-y-2 mb-4">
                <li>Respond to your inquiries and provide quotes</li>
                <li>Schedule consultations and project meetings</li>
                <li>Communicate about your project status</li>
                <li>Send follow-up communications related to our services</li>
              </ul>

              <h2 className="font-elegant text-2xl text-ink mt-8 mb-4">Information Sharing</h2>
              <p className="text-ink/80 leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information to third parties. Your information may be shared only with service providers who assist us in operating our website and conducting our business, and only to the extent necessary to provide those services.
              </p>

              <h2 className="font-elegant text-2xl text-ink mt-8 mb-4">Data Security</h2>
              <p className="text-ink/80 leading-relaxed mb-4">
                We implement reasonable security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
              </p>

              <h2 className="font-elegant text-2xl text-ink mt-8 mb-4">Cookies</h2>
              <p className="text-ink/80 leading-relaxed mb-4">
                Our website may use cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings, though this may affect some website functionality.
              </p>

              <h2 className="font-elegant text-2xl text-ink mt-8 mb-4">Contact Us</h2>
              <p className="text-ink/80 leading-relaxed mb-4">
                If you have questions about this Privacy Policy, please contact us at:
              </p>
              <p className="text-ink/80 leading-relaxed">
                Professional Wood Interiors<br />
                St. Louis, Missouri<br />
                Phone: <a href="tel:3144379988" className="text-brass hover:text-brass/80">(314) 437-9988</a>
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
