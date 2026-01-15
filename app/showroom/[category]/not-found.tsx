import Link from 'next/link';
import Navigation from '@/components/Navigation';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { ButtonLink } from '@/components/ui/Button';

export default function CategoryNotFound() {
  return (
    <>
      <Navigation />
      <Section className="pt-24 pb-12 min-h-[60vh] flex items-center">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <Heading eyebrow="404" as="h1">
              Category Not Found
            </Heading>
            <p className="mt-6 text-lg text-ink/70 leading-relaxed">
              The gallery category you&apos;re looking for doesn&apos;t exist.
            </p>
            <div className="mt-8 flex gap-4 justify-center">
              <ButtonLink href="/showroom" variant="primary">
                Back to Gallery
              </ButtonLink>
              <ButtonLink href="/" variant="outline">
                Go Home
              </ButtonLink>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
