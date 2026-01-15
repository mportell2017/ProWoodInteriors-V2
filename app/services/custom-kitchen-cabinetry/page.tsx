import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Container } from '@/components/ui/Container';
import { ButtonLink } from '@/components/ui/Button';
import Image from 'next/image';
import Link from 'next/link';
import { galleryManifest } from '@/lib/gallery-manifest';
import { getImagesByCategory } from '@/lib/gallery-utils';

export const metadata: Metadata = {
  title: 'Custom Kitchen Cabinetry | Professional Wood Interiors',
  description: 'Handcrafted custom kitchen cabinets built in our St. Louis shop. Solid wood construction, dovetail drawers, and perfect fit for your exact space. Serving St. Louis since 1980.',
  openGraph: {
    title: 'Custom Kitchen Cabinetry | Professional Wood Interiors',
    description: 'Handcrafted custom kitchen cabinets built in our St. Louis shop. Solid wood construction, dovetail drawers, and perfect fit for your exact space.',
    type: 'website',
    siteName: 'Professional Wood Interiors',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Kitchen Cabinetry | Professional Wood Interiors',
    description: 'Handcrafted custom kitchen cabinets built in our St. Louis shop. Solid wood construction, dovetail drawers, and perfect fit for your exact space.',
  },
};

export default function CustomKitchenCabinetryPage() {
  // Get kitchen images for the gallery
  const kitchenImages = getImagesByCategory('Kitchens');
  // Show first 8 images in masonry layout
  const showcaseImages = kitchenImages.slice(0, 8);

  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ),
      title: 'Solid wood construction',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ),
      title: 'Dovetail drawer boxes',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ),
      title: 'Soft-close hinges and slides',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ),
      title: 'Full extension drawers',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ),
      title: 'Custom storage solutions',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ),
      title: 'Wide variety of door styles',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ),
      title: 'Professional installation',
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
              Custom Kitchen Cabinetry
            </Heading>
            <p className="mt-8 text-xl text-ink/70 leading-relaxed font-elegant">
              At Professional Wood Interiors, we specialize in creating custom cabinetry that
              transforms your kitchen into a beautiful, functional space. Every cabinet we build is
              handcrafted in our St. Louis shop using select hardwoods and quality materials.
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
                Unlike mass-produced cabinets that come in standard sizes, our custom cabinets are
                built to fit your exact space. No fillers, no compromises. Each piece is designed
                specifically for your kitchen, ensuring a perfect fit and maximum storage
                efficiency.
              </p>
              <p className="text-lg text-ink/80 leading-relaxed font-sans">
                We offer a wide range of styles, from traditional raised panel designs to clean,
                contemporary shaker styles. Our craftsmen can match any wood species, stain, or
                paint color to achieve the look you want.
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
                Our Kitchen Portfolio
              </Heading>
              <p className="mt-4 text-lg text-ink/70 font-elegant">
                Explore some of our recent custom kitchen projects
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

      {/* Features Section */}
      <Section tone="parchment" className="py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Heading as="h2" showDivider={false}>
                Our Cabinetry Features
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
              Ready to Transform Your Kitchen?
            </Heading>
            <p className="text-parchment/80 text-lg mb-8 leading-relaxed">
              Let&apos;s discuss how our custom cabinetry can bring your vision to life.
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
