import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { galleryManifest } from '@/lib/gallery-manifest';
import { generateSlug } from '@/lib/gallery-utils';
import Navigation from '@/components/Navigation';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Container } from '@/components/ui/Container';
import { ButtonLink } from '@/components/ui/Button';
import { cn } from '@/lib/cn';

export const metadata: Metadata = {
  title: 'Our Showroom & Gallery | Professional Wood Interiors',
  description: 'Explore our collection of custom cabinetry across 4 categories: Kitchens, Bedrooms, Entertainment Centers, and Bookcases. 86+ projects from Professional Wood Interiors serving St. Louis, Missouri.',
  openGraph: {
    title: 'Our Showroom & Gallery | Professional Wood Interiors',
    description: 'Browse our portfolio of custom woodworking projects',
    images: ['/images/gallery/kitchen remodel/Blue Island/kitchen-remodel-blue-island-01.jpg'],
  },
};

export default function ShowroomPage() {
  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <Section className="pt-24 pb-12">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <Heading eyebrow="Our Work" accent="italic" as="h1">
              Our Showroom & Gallery
            </Heading>
            <p className="mt-6 text-xl text-ink/70 leading-relaxed font-elegant">
              Explore our collection of custom kitchens, cabinetry, and built-ins
              crafted for homeowners throughout St. Louis. Browse by category to see
              our finished projects.
            </p>
          </div>
        </Container>
      </Section>

      {/* Category Cards as Navigation Links */}
      <Section className="py-12">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryManifest.categories.map((category) => (
              <Link
                key={category.name}
                href={`/showroom/${generateSlug(category.name)}`}
                className={cn(
                  "relative aspect-[3/4] overflow-hidden group cursor-pointer rounded-sm",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2",
                  "shadow-lg hover:shadow-2xl transition-all duration-300"
                )}
              >
                {/* Image */}
                <Image
                  src={category.heroImage}
                  alt={`Browse ${category.name}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />

                {/* Overlay */}
                <div
                  className={cn(
                    "absolute inset-0 transition-opacity duration-300",
                    "bg-gradient-to-t from-walnut/90 via-walnut/40 to-transparent",
                    "opacity-70 group-hover:opacity-90"
                  )}
                >
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-elegant font-semibold text-parchment mb-2">
                      {category.name}
                    </h3>
                    <p className="text-brass text-xs uppercase tracking-widest">
                      {category.count} {category.count === 1 ? 'Image' : 'Images'}
                    </p>
                  </div>
                </div>

                {/* Hover arrow indicator */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg
                    className="w-6 h-6 text-brass"
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
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section tone="walnut" className="mt-16">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <Heading tone="dark" showDivider={false} className="mb-6">
              Schedule a Showroom Visit
            </Heading>
            <p className="text-parchment/80 text-lg mb-8 leading-relaxed">
              See examples of our craftsmanship in person and discuss your project with our
              team.
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
                Get in Touch
              </ButtonLink>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
