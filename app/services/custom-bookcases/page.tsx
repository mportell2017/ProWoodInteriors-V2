import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Container } from '@/components/ui/Container';
import { ButtonLink } from '@/components/ui/Button';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Custom Bookcases | Professional Wood Interiors',
  description:
    'Custom built-in bookcases in St. Louis. Solid wood construction, architectural design, seamless integration. Floor-to-ceiling, with cabinets, window seats. Since 1980.',
  openGraph: {
    title: 'Custom Bookcases | Professional Wood Interiors',
    description:
      'Custom built-in bookcases in St. Louis. Solid wood construction, architectural design, seamless integration.',
    type: 'website',
    siteName: 'Professional Wood Interiors',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Bookcases | Professional Wood Interiors',
    description:
      'Custom built-in bookcases in St. Louis. Solid wood construction, architectural design, seamless integration.',
  },
};

export default function CustomBookcasesPage() {
  // Use specific bookcase images
  const bookcaseImages = [
    {
      src: '/images/gallery/Bookcases/white  bookcase remodel-02.jpg',
      alt: 'Custom white bookcase with built-in shelving by Professional Wood Interiors - St. Louis, MO',
      category: 'Bookcases',
      project: 'White Bookcase Remodel',
    },
    {
      src: '/images/gallery/Bookcases/white  bookcase remodel-03.jpg',
      alt: 'Floor-to-ceiling custom bookcase with solid wood construction - Professional Wood Interiors - St. Louis, MO',
      category: 'Bookcases',
      project: 'White Bookcase Remodel',
    },
    {
      src: '/images/gallery/Bookcases/white  bookcase remodel-04.jpg',
      alt: 'Built-in bookcase with architectural detail by Professional Wood Interiors - St. Louis, MO',
      category: 'Bookcases',
      project: 'White Bookcase Remodel',
    },
  ];

  const options = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
          />
        </svg>
      ),
      title: 'Floor to Ceiling',
      description:
        'Maximize vertical space with full-height built-ins that make a dramatic statement.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
          />
        </svg>
      ),
      title: 'With Cabinets',
      description:
        'Combine open shelving with closed storage for a practical, organized look.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      ),
      title: 'Window Seats',
      description:
        'Integrate bookcases around windows with cozy reading nooks.',
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
              Custom Bookcases
            </Heading>
            <p className="mt-6 text-xl text-ink/60 font-sans leading-relaxed">
              Custom built-in bookcases designed to fit your space and enhance your home.
            </p>
            <p className="mt-8 text-xl text-ink/70 leading-relaxed font-elegant">
              A custom built-in bookcase adds both beauty and functionality to your home. Unlike
              freestanding furniture, built-ins are designed specifically for your space,
              maximizing storage while creating a seamless, architectural look.
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
                Our bookcases are built like fine furniture, with solid wood construction,
                adjustable shelves, and meticulous attention to detail. Whether you want a simple
                set of shelves or an elaborate library wall with cabinets and display lighting, we
                can bring your vision to life.
              </p>
              <p className="text-lg text-ink/80 leading-relaxed font-sans">
                We build bookcases for living rooms, home offices, bedrooms, and anywhere you need
                attractive storage. Each piece is designed to complement your home&apos;s existing
                architecture and finished to match your décor.
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
                Bookcase Gallery
              </Heading>
              <p className="mt-4 text-lg text-ink/70 font-elegant">
                Explore our custom bookcase projects
              </p>
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {bookcaseImages.map((image, idx) => (
                <Link
                  key={image.src}
                  href="/showroom/bookcases"
                  className="group relative aspect-[3/4] overflow-hidden rounded-sm shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              ))}
            </div>

            {/* CTA to Full Gallery */}
            <div className="text-center">
              <ButtonLink href="/showroom/bookcases" variant="outline" className="group">
                View All Bookcase Projects
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

      {/* Options Section */}
      <Section tone="parchment" className="py-16">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Heading as="h2" showDivider={false}>
                Bookcase Options
              </Heading>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {options.map((option, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-8 bg-white rounded-sm shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex-shrink-0 w-16 h-16 mb-6 text-brass flex items-center justify-center">
                    {option.icon}
                  </div>
                  <h3 className="text-2xl font-elegant font-semibold text-ink mb-3">
                    {option.title}
                  </h3>
                  <p className="text-lg text-ink/70 leading-relaxed">{option.description}</p>
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
              Ready to Add Custom Bookcases?
            </Heading>
            <p className="text-parchment/80 text-lg mb-8 leading-relaxed">
              Let&apos;s discuss how custom built-ins can transform your space.
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
