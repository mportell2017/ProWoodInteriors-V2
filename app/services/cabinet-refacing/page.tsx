import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Container } from '@/components/ui/Container';
import { ButtonLink } from '@/components/ui/Button';
import Image from 'next/image';
import Link from 'next/link';
import { getImagesByCategory } from '@/lib/gallery-utils';

export const metadata: Metadata = {
  title: 'Cabinet Refacing | Professional Wood Interiors',
  description:
    'Cost-effective cabinet refacing in St. Louis. Save 40-50% vs. replacement. Custom doors, minimal disruption, eco-friendly. Transform your kitchen in days. Since 1980.',
  openGraph: {
    title: 'Cabinet Refacing | Professional Wood Interiors',
    description:
      'Cost-effective cabinet refacing in St. Louis. Save 40-50% vs. replacement. Custom doors, minimal disruption, eco-friendly.',
    type: 'website',
    siteName: 'Professional Wood Interiors',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cabinet Refacing | Professional Wood Interiors',
    description:
      'Cost-effective cabinet refacing in St. Louis. Save 40-50% vs. replacement. Custom doors, minimal disruption, eco-friendly.',
  },
};

export default function CabinetRefacingPage() {
  // Use specific cabinet refacing images
  const refacingImages = Array.from({ length: 18 }, (_, i) => ({
    src: `/images/gallery/kitchen remodel/Kitchen Cabinet Refacing/kitchen-cabinet-remodel-refacing-${String(i + 1).padStart(2, '0')}.jpg`,
    alt: `Cabinet refacing project ${i + 1} - Custom kitchen cabinet doors and finishes by Professional Wood Interiors - St. Louis, MO`,
    category: 'Kitchens',
    project: 'Kitchen Cabinet Refacing',
  }));
  // Show first 8 images in masonry layout
  const showcaseImages = refacingImages.slice(0, 8);

  const benefits = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: 'Cost Effective',
      description:
        'Save 40–50% compared to full cabinet replacement while still getting a dramatic transformation.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: 'Less Disruption',
      description:
        'Most refacing projects are completed in just a few days, with minimal impact on your daily routine.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: 'Eco-Friendly',
      description:
        'Keep your existing cabinet boxes out of the landfill while giving them new life.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
          />
        </svg>
      ),
      title: 'Custom Results',
      description:
        'New doors are custom made to fit your existing cabinets perfectly.',
    },
  ];

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <Section className="pt-24 pb-16">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <Heading accent="italic" as="h1">
              Cabinet Refacing
            </Heading>
            <p className="mt-6 text-xl text-ink/60 font-sans leading-relaxed">
              A cost-effective way to renovate your kitchen when cabinet boxes are still in good
              condition.
            </p>
            <p className="mt-8 text-xl text-ink/70 leading-relaxed font-elegant">
              Cabinet refacing is an excellent option when your cabinet boxes are still in good
              condition but the doors, drawer fronts, and finish need updating. It&apos;s a
              cost-effective way to give your kitchen a completely new look without the expense and
              disruption of a full cabinet replacement.
            </p>
          </div>
        </Container>
      </Section>

      {/* Main Content */}
      <Section className="py-12">
        <Container>
          <div className="max-w-4xl mx-auto">
            {/* Body Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-ink/80 leading-relaxed font-sans mb-6">
                Our refacing process involves replacing your existing doors and drawer fronts with
                new custom-made pieces, and applying new veneer or laminate to the visible cabinet
                frames. The result is a kitchen that looks brand new at a fraction of the cost.
              </p>
              <p className="text-lg text-ink/80 leading-relaxed font-sans">
                We can match virtually any door style, from traditional raised panel to modern
                shaker designs. Choose from a wide selection of wood species, stains, and paint
                colors to achieve exactly the look you want.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Benefits Section */}
      <Section tone="parchment" className="py-16">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Heading as="h2" showDivider={false}>
                Why Choose Refacing?
              </Heading>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-8 bg-white rounded-sm shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex-shrink-0 w-16 h-16 mb-6 text-brass flex items-center justify-center">
                    {benefit.icon}
                  </div>
                  <h3 className="text-2xl font-elegant font-semibold text-ink mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-lg text-ink/70 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Gallery Showcase Section */}
      <Section className="py-16">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Heading as="h2" showDivider={false}>
                Cabinet Refacing Gallery
              </Heading>
              <p className="mt-4 text-lg text-ink/70 font-elegant">
                See the dramatic transformations we&apos;ve achieved through cabinet refacing
              </p>
            </div>

            {/* Masonry Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
              {showcaseImages.map((image, idx) => (
                <Link
                  key={image.src}
                  href="/showroom/kitchens"
                  className="group relative aspect-[3/4] overflow-hidden rounded-sm shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              ))}
            </div>

            {/* CTA to Full Gallery */}
            <div className="text-center">
              <ButtonLink href="/showroom/kitchens" variant="outline" className="group">
                View All Kitchen Projects
                <svg
                  className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </ButtonLink>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section tone="walnut" className="py-16">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <Heading tone="dark" showDivider={false} className="mb-6">
              Ready to Transform Your Kitchen?
            </Heading>
            <p className="text-parchment/80 text-lg mb-8 leading-relaxed">
              Let&apos;s discuss how cabinet refacing can give your kitchen a fresh new look.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:3144379988"
                className="inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold text-walnut bg-brass hover:bg-brass/90 rounded-sm shadow-xl transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2 focus-visible:ring-offset-walnut"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                (314) 437-9988
              </a>
              <ButtonLink
                href="/contact-us"
                variant="outline"
                className="border-2 border-parchment/40 text-parchment hover:bg-parchment/10"
              >
                Get a Free Estimate
              </ButtonLink>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
