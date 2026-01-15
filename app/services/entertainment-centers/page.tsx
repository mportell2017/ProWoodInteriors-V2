import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Container } from '@/components/ui/Container';
import { ButtonLink } from '@/components/ui/Button';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Entertainment Centers | Professional Wood Interiors',
  description:
    'Custom entertainment centers in St. Louis. Built-in media centers with wire management, ventilation, adjustable shelving. Solid wood construction. Since 1980.',
  openGraph: {
    title: 'Entertainment Centers | Professional Wood Interiors',
    description:
      'Custom entertainment centers in St. Louis. Built-in media centers with wire management, ventilation, adjustable shelving.',
    type: 'website',
    siteName: 'Professional Wood Interiors',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Entertainment Centers | Professional Wood Interiors',
    description:
      'Custom entertainment centers in St. Louis. Built-in media centers with wire management, ventilation, adjustable shelving.',
  },
};

export default function EntertainmentCentersPage() {
  // Use specific entertainment center images
  const entertainmentImages = [
    {
      src: '/images/gallery/Entertainment Centers/entertainment-center-01.jpg',
      alt: 'Custom entertainment center with integrated storage by Professional Wood Interiors - St. Louis, MO',
      category: 'Entertainment Centers',
    },
    {
      src: '/images/gallery/Entertainment Centers/entertainment-fireplace-remodel-01.jpg',
      alt: 'Entertainment center with fireplace built-in by Professional Wood Interiors - St. Louis, MO',
      category: 'Entertainment Centers',
    },
    {
      src: '/images/gallery/Entertainment Centers/entertainment-fireplace-remodel-02.jpg',
      alt: 'Custom media center with fireplace integration - Professional Wood Interiors - St. Louis, MO',
      category: 'Entertainment Centers',
    },
    {
      src: '/images/gallery/Entertainment Centers/full fireplace entertainment center remodel-01.jpg',
      alt: 'Full wall entertainment center with fireplace by Professional Wood Interiors - St. Louis, MO',
      category: 'Entertainment Centers',
    },
    {
      src: '/images/gallery/Entertainment Centers/full fireplace entertainment center remodel-02.jpg',
      alt: 'Floor-to-ceiling entertainment center with custom woodwork - Professional Wood Interiors - St. Louis, MO',
      category: 'Entertainment Centers',
    },
    {
      src: '/images/gallery/Entertainment Centers/full fireplace entertainment center remodel-03.jpg',
      alt: 'Built-in media center with solid wood construction by Professional Wood Interiors - St. Louis, MO',
      category: 'Entertainment Centers',
    },
    {
      src: '/images/gallery/Entertainment Centers/full fireplace entertainment center remodel-04.jpg',
      alt: 'Custom entertainment center with adjustable shelving - Professional Wood Interiors - St. Louis, MO',
      category: 'Entertainment Centers',
    },
    {
      src: '/images/gallery/Entertainment Centers/full fireplace entertainment center remodel-05.jpg',
      alt: 'Architectural entertainment center with wire management by Professional Wood Interiors - St. Louis, MO',
      category: 'Entertainment Centers',
    },
  ];

  const showcaseImages = entertainmentImages.slice(0, 8);

  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ),
      title: 'Custom sizing for your TV and equipment',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ),
      title: 'Integrated wire management',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ),
      title: 'Ventilation for electronics',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ),
      title: 'Adjustable shelving',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ),
      title: 'Hidden storage options',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ),
      title: 'Matches your existing décor',
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
              Entertainment Centers
            </Heading>
            <p className="mt-6 text-xl text-ink/60 font-sans leading-relaxed">
              Custom-built media centers designed around your space, equipment, and lifestyle.
            </p>
            <p className="mt-8 text-xl text-ink/70 leading-relaxed font-elegant">
              A custom entertainment center provides the perfect solution for organizing your media
              equipment while creating a beautiful focal point for your living room. Unlike
              store-bought units, our custom designs are built to fit your space exactly and
              accommodate your specific equipment.
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
                We design entertainment centers with practical features like wire management,
                ventilation for electronics, adjustable shelving, and hidden storage. Whether you
                want to showcase your TV or hide it behind custom doors, we can create a solution
                that works for your lifestyle.
              </p>
              <p className="text-lg text-ink/80 leading-relaxed font-sans">
                Our entertainment centers are built with the same quality construction as our
                cabinetry, using solid wood and expert joinery techniques. The result is a piece of
                furniture that will last for generations.
              </p>
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
                Entertainment Center Gallery
              </Heading>
              <p className="mt-4 text-lg text-ink/70 font-elegant">
                Explore our custom entertainment center projects
              </p>
            </div>

            {/* Masonry Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
              {showcaseImages.map((image, idx) => (
                <Link
                  key={image.src}
                  href="/showroom/entertainment-centers"
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
              <ButtonLink href="/showroom/entertainment-centers" variant="outline" className="group">
                View All Entertainment Center Projects
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

      {/* Features Section */}
      <Section tone="parchment" className="py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Heading as="h2" showDivider={false}>
                Design Features
              </Heading>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 bg-white rounded-sm shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex-shrink-0 w-6 h-6 text-brass">{feature.icon}</div>
                  <p className="text-lg text-ink font-sans leading-relaxed">{feature.title}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section tone="walnut" className="py-16">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <Heading tone="dark" showDivider={false} className="mb-6">
              Ready to Create Your Entertainment Center?
            </Heading>
            <p className="text-parchment/80 text-lg mb-8 leading-relaxed">
              Let&apos;s discuss how a custom entertainment center can enhance your living space.
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
                Schedule a Consultation
              </ButtonLink>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
