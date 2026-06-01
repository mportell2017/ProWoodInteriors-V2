import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Container } from '@/components/ui/Container';
import { getLocationBySlug, getAllLocationSlugs } from '@/lib/location-data';
import { getImagesByCategory } from '@/lib/gallery-utils';
import { LocationHero } from '@/components/locations/LocationHero';
import { FloatingGallery } from '@/components/locations/FloatingGallery';
import { ServiceGrid } from '@/components/locations/ServiceGrid';
import { LocationGallery } from '@/components/locations/LocationGallery';
import { LocationExpertise } from '@/components/locations/LocationExpertise';
import { WhyChooseUs } from '@/components/locations/WhyChooseUs';
import { ProcessSection } from '@/components/locations/ProcessSection';
import { LocationFAQs } from '@/components/locations/LocationFAQs';
import { LocationCTA } from '@/components/locations/LocationCTA';
import { LeadCaptureBand } from '@/components/forms/LeadCaptureBand';
import { CityServiceLinks } from '@/components/locations/CityServiceLinks';
import { StickyCallBar } from '@/components/ui/StickyCallBar';
import { generateLocalServiceSchema } from '@/lib/structured-data';

// Enable static generation for all cities
export async function generateStaticParams() {
  return getAllLocationSlugs().map(slug => ({ city: slug }));
}

// Dynamic metadata for SEO
export async function generateMetadata(props: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const params = await props.params;
  const location = getLocationBySlug(params.city);

  if (!location) {
    return {
      title: 'Location Not Found',
    };
  }

  // Keep the <title> short: the root layout appends " | Professional Wood
  // Interiors" automatically, so we must NOT repeat the brand here (doing so
  // both doubled the brand and pushed titles past ~70 chars). Social cards get
  // the branded form via ogTitle.
  const title = `Custom Cabinetry in ${location.city}, ${location.stateAbbr}`;
  const ogTitle = `${title} | Professional Wood Interiors`;
  const description = `Custom kitchen cabinets, built-ins & cabinetry in ${location.city}, ${location.state}. Handcrafted wood interiors serving ${location.county}. Free consultation: (314) 437-9988`;

  return {
    title,
    description,
    openGraph: {
      title: ogTitle,
      description,
      type: 'website',
      siteName: 'Professional Wood Interiors',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle,
      description,
    },
    alternates: {
      canonical: `/locations/${location.slug}`
    }
  };
}

export default async function LocationPage(props: { params: Promise<{ city: string }> }) {
  const params = await props.params;
  const location = getLocationBySlug(params.city);

  if (!location) {
    notFound();
  }

  // Select gallery images - mix of categories
  const kitchenImages = getImagesByCategory('Kitchens');
  const entertainmentImages = getImagesByCategory('Entertainment Centers');
  const bookcaseImages = getImagesByCategory('Bookcases');
  const bedroomImages = getImagesByCategory('Bedrooms');

  // Floating gallery images (4 images for hero section)
  const floatingGalleryImages = [
    ...kitchenImages.slice(0, 2),
    ...entertainmentImages.slice(0, 1),
    ...bookcaseImages.slice(0, 1)
  ].slice(0, 4);

  // Bottom gallery images (8 different images)
  const bottomGalleryImages = [
    ...kitchenImages.slice(2, 5),
    ...entertainmentImages.slice(1, 3),
    ...bookcaseImages.slice(1, 3),
    ...bedroomImages.slice(1, 2)
  ].slice(0, 8);

  // Generate structured data for local SEO
  const structuredData = generateLocalServiceSchema(location);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />      {/* Hero Section */}
      <LocationHero
        city={location.city}
        state={location.state}
        subtitle={location.heroSubtitle}
      />

      {/* Floating Gallery Section */}
      <Section tone="clear" className="py-0">
        <FloatingGallery images={floatingGalleryImages} city={location.city} />
      </Section>

      {/* What We Do Section */}
      <Section tone="clear" className="pt-6 pb-16">
        <Container>
          <div className="text-center mb-8">
            <Heading as="h2" eyebrow="What We Do" showDivider={true}>
              Our Services in {location.city}
            </Heading>
            <p className="mt-4 text-lg text-ink/70 font-elegant max-w-2xl mx-auto leading-relaxed">
              {location.description}
            </p>
          </div>
          <ServiceGrid city={location.city} citySlug={location.slug} />
        </Container>
      </Section>

      {/* Dedicated per-service city pages (local-SEO internal links) */}
      <CityServiceLinks city={location.city} citySlug={location.slug} />

      {/* Lead capture — positioned just above the portfolio per design preference */}
      <LeadCaptureBand
        id="book"
        heading={`Get Your Free Cabinetry Consultation in ${location.city}`}
        subtitle={`Tell us about your project in ${location.city} — we'll be in touch within 1–2 business days.`}
      />

      {/* Gallery Section */}
      <Section tone="parchment" className="py-16">
        <Container>
          <div className="text-center mb-12">
            <Heading as="h2" eyebrow="Our Portfolio" showDivider={true}>
              Our Work in {location.county}
            </Heading>
            <p className="mt-6 text-lg text-ink/70 font-elegant max-w-2xl mx-auto">
              View recent custom cabinetry projects from the St. Louis area
            </p>
          </div>
          <LocationGallery images={bottomGalleryImages} city={location.city} />
        </Container>
      </Section>

      {/* Local Expertise Section */}
      {location.localExpertise && (
        <LocationExpertise
          heading={location.localExpertise.heading}
          content={location.localExpertise.content}
          city={location.city}
        />
      )}

      {/* Why Choose Us Section */}
      {location.whyChooseUs && (
        <WhyChooseUs
          heading={location.whyChooseUs.heading}
          reasons={location.whyChooseUs.reasons}
          city={location.city}
        />
      )}

      {/* Process Section */}
      {location.process && (
        <ProcessSection
          heading={location.process.heading}
          steps={location.process.steps}
          city={location.city}
        />
      )}

      {/* FAQs Section */}
      {location.faqs && location.faqs.length > 0 && (
        <LocationFAQs
          faqs={location.faqs}
          city={location.city}
        />
      )}

      {/* Call to Action Section */}
      <LocationCTA city={location.city} phoneNumber="(314) 437-9988" />

      <StickyCallBar />
    </>
  );
}
