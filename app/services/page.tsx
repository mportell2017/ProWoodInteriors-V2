import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Container } from '@/components/ui/Container';
import { ButtonLink } from '@/components/ui/Button';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Our Services | Professional Wood Interiors',
  description: 'Custom cabinetry services including kitchen cabinets, entertainment centers, bookcases, built-ins, and cabinet refacing. Handcrafted in St. Louis since 1985.',
  openGraph: {
    title: 'Our Services | Professional Wood Interiors',
    description: 'Custom cabinetry services including kitchen cabinets, entertainment centers, bookcases, built-ins, and cabinet refacing. Handcrafted in St. Louis since 1985.',
    type: 'website',
    siteName: 'Professional Wood Interiors',
  },
};

const services = [
  {
    title: 'Custom Kitchen Cabinetry',
    description: 'Handcrafted kitchen cabinets built to fit your exact space. Solid wood construction, dovetail drawers, soft-close hinges, and a perfect fit for your kitchen.',
    href: '/services/custom-kitchen-cabinetry',
    image: '/images/gallery/kitchen remodel/Quartzite Remodel/white-luxury-kitchen-remodel-07.jpg',
    features: ['Solid wood construction', 'Dovetail drawer boxes', 'Soft-close hardware', 'Custom storage solutions'],
  },
  {
    title: 'Entertainment Centers',
    description: 'Custom entertainment centers and fireplace surrounds that become the focal point of your living space. Built to accommodate your specific equipment and style.',
    href: '/services/entertainment-centers',
    image: '/images/gallery/Entertainment Centers/entertainment-fireplace-remodel-01.jpg',
    features: ['Custom sizing', 'Cable management', 'Integrated lighting', 'Fireplace surrounds'],
  },
  {
    title: 'Custom Bookcases & Built-Ins',
    description: 'Transform empty walls into stunning storage and display areas. Our custom bookcases and built-ins add character, function, and value to any room.',
    href: '/services/custom-bookcases',
    image: '/images/gallery/Bookcases/white  bookcase remodel-02.jpg',
    features: ['Floor-to-ceiling options', 'Adjustable shelving', 'Integrated lighting', 'Window seat storage'],
  },
  {
    title: 'Cabinet Refacing',
    description: 'Give your existing cabinets a completely new look without the cost and disruption of a full replacement. New doors, drawer fronts, and veneers over your existing cabinet boxes.',
    href: '/services/cabinet-refacing',
    image: '/images/gallery/kitchen remodel/Kitchen Cabinet Refacing/kitchen-cabinet-remodel-refacing-01.jpg',
    features: ['Fraction of replacement cost', 'Less disruption', 'Wide style selection', 'Quick turnaround'],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <Section className="pt-24 pb-16">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <Heading accent="italic" as="h1">
              Our Services
            </Heading>
            <p className="mt-8 text-xl text-ink/70 leading-relaxed font-elegant">
              From kitchens to built-ins and everything in between, every piece we create is
              custom-designed, handcrafted in our St. Louis shop, and built to last generations.
            </p>
          </div>
        </Container>
      </Section>

      {/* Services Grid */}
      <Section className="py-12">
        <Container>
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`grid md:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  index % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''
                }`}
              >
                {/* Image */}
                <Link
                  href={service.href}
                  className="group relative aspect-[4/3] overflow-hidden rounded-sm shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>

                {/* Content */}
                <div>
                  <h2 className="font-elegant text-3xl lg:text-4xl text-ink tracking-tight">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-lg text-ink/70 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="mt-6 grid grid-cols-2 gap-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-ink/80">
                        <svg className="w-4 h-4 text-oxblood flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <ButtonLink href={service.href} variant="outline">
                      Learn More
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </ButtonLink>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section tone="walnut" className="py-16">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <Heading tone="dark" showDivider={false} className="mb-6">
              Ready to Start Your Project?
            </Heading>
            <p className="text-parchment/80 text-lg mb-8 leading-relaxed">
              Let&apos;s discuss how our custom woodworking can transform your home.
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
