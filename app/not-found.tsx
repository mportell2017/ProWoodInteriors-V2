import type { Metadata } from 'next';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { ButtonLink } from '@/components/ui/Button';
import { PHONE_DISPLAY, PHONE_TEL } from '@/lib/business';

export const metadata: Metadata = {
  title: 'Page Not Found',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <Section className="py-24">
      <div className="max-w-2xl mx-auto text-center">
        <Heading eyebrow="404" accent="italic">
          We couldn&apos;t find that page
        </Heading>
        <p className="mt-8 text-ink/70 text-lg leading-relaxed">
          The page you were looking for may have moved or no longer exists. Take a
          look at our work or get in touch — we&apos;d love to hear about your project.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <ButtonLink href="/showroom">View Our Showroom</ButtonLink>
          <ButtonLink href="/contact-us" variant="outline">
            Contact Us
          </ButtonLink>
        </div>
        <p className="mt-8 text-ink/60 text-sm">
          Or call us directly:{' '}
          <a
            href={`tel:${PHONE_TEL}`}
            className="text-brass hover:text-brass/80 font-semibold"
          >
            {PHONE_DISPLAY}
          </a>
        </p>
      </div>
    </Section>
  );
}
