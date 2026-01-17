import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Container } from '@/components/ui/Container';

export const metadata: Metadata = {
  title: 'Terms of Service | Professional Wood Interiors',
  description: 'Terms of Service for Professional Wood Interiors. Read our terms and conditions for using our website and services.',
};

export default function TermsOfServicePage() {
  return (
    <>
      <Navigation />

      <Section className="pt-24 pb-16">
        <Container>
          <div className="max-w-3xl mx-auto">
            <Heading as="h1" accent="italic">
              Terms of Service
            </Heading>
            <p className="mt-4 text-ink/60 text-sm">
              Last updated: January 2025
            </p>

            <div className="mt-12 prose prose-lg max-w-none">
              <h2 className="font-elegant text-2xl text-ink mt-8 mb-4">Agreement to Terms</h2>
              <p className="text-ink/80 leading-relaxed mb-4">
                By accessing and using the Professional Wood Interiors website, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our website.
              </p>

              <h2 className="font-elegant text-2xl text-ink mt-8 mb-4">Use of Website</h2>
              <p className="text-ink/80 leading-relaxed mb-4">
                This website is provided for informational purposes about our custom cabinetry and woodworking services. You may browse our portfolio, read about our services, and contact us for inquiries. You agree to use this website only for lawful purposes.
              </p>

              <h2 className="font-elegant text-2xl text-ink mt-8 mb-4">Intellectual Property</h2>
              <p className="text-ink/80 leading-relaxed mb-4">
                All content on this website, including text, images, logos, and designs, is the property of Professional Wood Interiors and is protected by copyright laws. You may not reproduce, distribute, or use any content without our written permission.
              </p>

              <h2 className="font-elegant text-2xl text-ink mt-8 mb-4">Project Estimates and Quotes</h2>
              <p className="text-ink/80 leading-relaxed mb-4">
                Any estimates or quotes provided through this website or during consultations are preliminary and subject to change based on final project specifications, materials selected, and site conditions. Final pricing will be provided in a written contract before work begins.
              </p>

              <h2 className="font-elegant text-2xl text-ink mt-8 mb-4">Limitation of Liability</h2>
              <p className="text-ink/80 leading-relaxed mb-4">
                Professional Wood Interiors provides this website on an &quot;as is&quot; basis. We make no warranties regarding the accuracy or completeness of the content. We are not liable for any damages arising from your use of this website.
              </p>

              <h2 className="font-elegant text-2xl text-ink mt-8 mb-4">Changes to Terms</h2>
              <p className="text-ink/80 leading-relaxed mb-4">
                We reserve the right to update these Terms of Service at any time. Changes will be posted on this page with an updated revision date. Continued use of the website after changes constitutes acceptance of the new terms.
              </p>

              <h2 className="font-elegant text-2xl text-ink mt-8 mb-4">Contact Us</h2>
              <p className="text-ink/80 leading-relaxed mb-4">
                If you have questions about these Terms of Service, please contact us at:
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
