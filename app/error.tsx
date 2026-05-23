'use client';

import { useEffect } from 'react';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { ButtonLink, Button } from '@/components/ui/Button';
import { PHONE_DISPLAY, PHONE_TEL } from '@/lib/business';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Section className="py-24">
      <div className="max-w-2xl mx-auto text-center">
        <Heading eyebrow="Something went wrong" accent="italic">
          We hit a snag
        </Heading>
        <p className="mt-8 text-ink/70 text-lg leading-relaxed">
          Sorry about that. Try refreshing the page, or reach out and we&apos;ll
          help you directly.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button onClick={() => reset()}>Try Again</Button>
          <ButtonLink href="/contact-us" variant="outline">
            Contact Us
          </ButtonLink>
        </div>
        <p className="mt-8 text-ink/60 text-sm">
          Or call:{' '}
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
