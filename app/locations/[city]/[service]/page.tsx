import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Container } from "@/components/ui/Container";
import { WhyChooseUs } from "@/components/locations/WhyChooseUs";
import { ProcessSection } from "@/components/locations/ProcessSection";
import { LocationFAQs } from "@/components/locations/LocationFAQs";
import { LocationCTA } from "@/components/locations/LocationCTA";
import { LocationGallery } from "@/components/locations/LocationGallery";
import {
  getServiceLocation,
  getAllServiceLocationParams,
  type ServiceLocationData,
} from "@/lib/service-location-data";
import { galleryManifest, type GalleryImage } from "@/lib/gallery-manifest";
import {
  generateServiceLocationSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
} from "@/lib/structured-data";

export async function generateStaticParams() {
  return getAllServiceLocationParams();
}

export async function generateMetadata(
  props: {
    params: Promise<{ city: string; service: string }>;
  }
): Promise<Metadata> {
  const params = await props.params;
  const entry = getServiceLocation(params.city, params.service);
  if (!entry) return { title: "Page Not Found" };

  return {
    title: entry.metaTitle,
    description: entry.metaDescription,
    openGraph: {
      title: entry.metaTitle,
      description: entry.metaDescription,
      type: "website",
      siteName: "Professional Wood Interiors",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: entry.metaTitle,
      description: entry.metaDescription,
    },
    alternates: {
      canonical: `/locations/${entry.citySlug}/${entry.serviceSlug}`,
    },
  };
}

function selectGalleryImages(entry: ServiceLocationData): GalleryImage[] {
  const pool = galleryManifest.images.filter(
    (img) => img.project && entry.galleryProjects.includes(img.project)
  );
  const { start = 0, count = 8 } = entry.galleryImageRange ?? {};
  return pool.slice(start, start + count);
}

export default async function ServiceLocationPage(
  props: {
    params: Promise<{ city: string; service: string }>;
  }
) {
  const params = await props.params;
  const entry = getServiceLocation(params.city, params.service);
  if (!entry) notFound();

  const galleryImages = selectGalleryImages(entry);

  const serviceSchema = generateServiceLocationSchema({
    city: entry.city,
    stateAbbr: entry.stateAbbr,
    service: entry.service,
    citySlug: entry.citySlug,
    serviceSlug: entry.serviceSlug,
    metaDescription: entry.metaDescription,
    coordinates: entry.coordinates,
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Locations", url: "/locations" },
    { name: entry.city, url: `/locations/${entry.citySlug}` },
    {
      name: entry.service,
      url: `/locations/${entry.citySlug}/${entry.serviceSlug}`,
    },
  ]);

  const faqSchema = generateFAQSchema(entry.faqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Navigation />

      {/* Breadcrumbs */}
      <Section tone="clear" className="pt-24 pb-2 sm:pt-28 sm:pb-2">
        <Container>
          <nav
            aria-label="Breadcrumb"
            className="text-[12px] tracking-[0.18em] uppercase text-ink/55"
          >
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <li>
                <Link href="/" className="hover:text-oxblood transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true" className="text-umber/40">
                /
              </li>
              <li>
                <Link
                  href={`/locations/${entry.citySlug}`}
                  className="hover:text-oxblood transition-colors"
                >
                  {entry.city}
                </Link>
              </li>
              <li aria-hidden="true" className="text-umber/40">
                /
              </li>
              <li className="text-ink/80" aria-current="page">
                {entry.service}
              </li>
            </ol>
          </nav>
        </Container>
      </Section>

      {/* Hero */}
      <Section tone="clear" className="pt-6 pb-8">
        <div className="text-center max-w-4xl mx-auto">
          <Heading as="h1" eyebrow={entry.heroEyebrow} showDivider>
            {entry.heroTitle}
          </Heading>
          <p className="mt-5 text-lg sm:text-xl text-ink/75 font-elegant leading-relaxed">
            {entry.heroSubtitle}
          </p>
        </div>
      </Section>

      {/* Intro */}
      <Section tone="clear" className="pt-0 pb-12">
        <Container>
          <div className="max-w-3xl mx-auto space-y-5">
            {entry.intro.map((paragraph, idx) => (
              <p
                key={idx}
                className="text-ink/80 text-lg font-elegant leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </Container>
      </Section>

      {/* Gallery */}
      {galleryImages.length > 0 && (
        <Section tone="parchment" className="py-16">
          <Container>
            <div className="text-center mb-12">
              <Heading as="h2" eyebrow="Recent Projects" showDivider>
                {entry.service} Work in the St. Louis Area
              </Heading>
              <p className="mt-5 text-lg text-ink/70 font-elegant max-w-2xl mx-auto">
                A selection of {entry.service.toLowerCase()} projects we&apos;ve
                completed for homeowners in {entry.city} and the surrounding
                communities.
              </p>
            </div>
            <LocationGallery images={galleryImages} city={entry.city} />
          </Container>
        </Section>
      )}

      {/* What's Included */}
      <Section tone="clear" className="py-16">
        <Container>
          <Heading as="h2" showDivider className="text-center mb-12">
            {entry.included.heading}
          </Heading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {entry.included.items.map((item, idx) => (
              <div
                key={idx}
                className="relative bg-parchment/60 border border-umber/15 p-6 pl-8"
              >
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-6 bottom-6 w-[3px] bg-brass/70"
                />
                <h3 className="font-display text-lg text-ink mb-2">
                  {item.title}
                </h3>
                <p className="text-ink/75 text-base font-elegant leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Why Choose Us */}
      <WhyChooseUs
        heading={entry.whyChooseUs.heading}
        reasons={entry.whyChooseUs.reasons}
        city={entry.city}
      />

      {/* Process */}
      <ProcessSection
        heading={entry.process.heading}
        steps={entry.process.steps}
        city={entry.city}
      />

      {/* Local Considerations */}
      <Section tone="parchment" className="py-16">
        <Container>
          <div className="max-w-3xl mx-auto">
            <Heading as="h2" showDivider className="text-center mb-10">
              {entry.considerations.heading}
            </Heading>
            <div className="space-y-5">
              {entry.considerations.content.map((paragraph, idx) => (
                <p
                  key={idx}
                  className="text-ink/80 text-lg font-elegant leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Cross-link to the other service for the same city */}
            <div className="mt-10 pt-8 border-t border-umber/20 text-center">
              <p className="text-sm tracking-[0.18em] uppercase text-umber/70 mb-3">
                Not sure which is right for you?
              </p>
              <Link
                href={`/locations/${entry.citySlug}/${
                  entry.serviceSlug === "cabinet-refacing"
                    ? "kitchen-remodeling"
                    : "cabinet-refacing"
                }`}
                className="inline-flex items-center gap-2 text-oxblood hover:text-oxblood/80 font-medium underline decoration-oxblood/30 hover:decoration-oxblood underline-offset-4 transition-colors"
              >
                {entry.serviceSlug === "cabinet-refacing"
                  ? `See our ${entry.city} Kitchen Remodeling page`
                  : `See our ${entry.city} Cabinet Refacing page`}
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQs */}
      <LocationFAQs faqs={entry.faqs} city={entry.city} />

      {/* CTA */}
      <LocationCTA city={entry.city} phoneNumber="(314) 437-9988" />
    </>
  );
}
