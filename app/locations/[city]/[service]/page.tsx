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
      <Section tone="clear" className="pt-6 pb-6">
        <div className="text-center max-w-4xl mx-auto">
          <Heading as="h1" eyebrow={entry.heroEyebrow} showDivider>
            {entry.heroTitle}
          </Heading>
          <p className="mt-5 text-lg sm:text-xl text-ink/75 font-elegant leading-relaxed">
            {entry.heroSubtitle}
          </p>
        </div>
      </Section>

      {/* Credibility stat bar */}
      <Section tone="clear" className="pt-2 pb-10">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="grid grid-cols-1 sm:grid-cols-3 border-y border-brass/30">
              {[
                { eyebrow: "Built by Hand", value: "Handcrafted in Our St. Louis Shop" },
                { eyebrow: "Designed for You", value: "Tailored to Your Home" },
                { eyebrow: "Family-Owned", value: "Serving St. Louis Since 1985" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className={`relative py-5 px-4 text-center ${
                    i > 0 ? "sm:border-l border-brass/25" : ""
                  }`}
                >
                  <p className="text-[10px] tracking-[0.26em] uppercase text-brass mb-1">
                    {stat.eyebrow}
                  </p>
                  <p className="font-display text-[15px] sm:text-base text-ink leading-snug">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Intro */}
      <Section tone="clear" className="pt-0 pb-14">
        <Container>
          <div className="max-w-3xl mx-auto space-y-5">
            {entry.intro.map((paragraph, idx) => (
              <p
                key={idx}
                className={
                  idx === 0
                    ? "text-ink/85 text-lg font-elegant leading-relaxed first-letter:float-left first-letter:font-display first-letter:italic first-letter:text-brass first-letter:text-6xl sm:first-letter:text-7xl first-letter:leading-[0.85] first-letter:mr-3 first-letter:mt-1"
                    : "text-ink/80 text-lg font-elegant leading-relaxed"
                }
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

      {/* What's Included — numbered editorial grid */}
      <Section tone="clear" className="py-16">
        <Container>
          <Heading as="h2" showDivider className="text-center mb-14">
            {entry.included.heading}
          </Heading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 max-w-5xl mx-auto">
            {entry.included.items.map((item, idx) => (
              <div
                key={idx}
                className="group flex gap-5"
              >
                <div className="flex-shrink-0 pt-1">
                  <span className="font-display italic text-brass/80 text-3xl leading-none block">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span
                    aria-hidden="true"
                    className="mt-3 block w-6 h-px bg-brass/40"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-xl text-ink leading-tight mb-2">
                    {item.title}
                  </h3>
                  <p className="text-ink/75 text-[17px] font-elegant leading-[1.6]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Materials & Finishes — editorial three-column catalog */}
      <Section tone="parchment" className="py-16">
        <Container>
          <div className="text-center mb-12">
            <Heading as="h2" eyebrow="Materials & Finishes" showDivider>
              Made with Intention, Not a Catalog
            </Heading>
            <p className="mt-5 text-lg text-ink/70 font-elegant max-w-2xl mx-auto leading-relaxed">
              Every piece of your {entry.service.toLowerCase()} is chosen together —
              wood, door profile, stain or paint, and hardware. Here&apos;s some of
              what we work with most often.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            {[
              {
                label: "Wood Species",
                items: ["Oak", "Maple", "Cherry", "Walnut", "Hickory"],
              },
              {
                label: "Door Styles",
                items: [
                  "Shaker",
                  "Raised Panel",
                  "Recessed Panel",
                  "Slab",
                  "Custom Profiles",
                ],
              },
              {
                label: "Hardware & Finish",
                items: [
                  "Hand-Applied Stains",
                  "Custom Paint Match",
                  "Brushed Nickel",
                  "Matte Black",
                  "Aged or Polished Brass",
                ],
              },
            ].map((col, idx) => (
              <div key={idx} className="text-center sm:text-left">
                <p className="text-[11px] tracking-[0.28em] uppercase text-umber/80 mb-3">
                  {col.label}
                </p>
                <span
                  aria-hidden="true"
                  className="block w-10 h-px bg-brass/50 mx-auto sm:mx-0 mb-4"
                />
                <ul className="space-y-2">
                  {col.items.map((item) => (
                    <li
                      key={item}
                      className="font-elegant text-ink/85 text-lg leading-snug"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="mt-12 text-center text-sm text-umber/70 font-elegant italic">
            Have something specific in mind? Bring a photo, a sample, or even a
            Pinterest board to your consultation — we&apos;ll work from it.
          </p>
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

      {/* Client Testimonial — editorial pull-quote */}
      <Section tone="clear" className="py-16">
        <Container>
          <figure className="relative max-w-3xl mx-auto text-center px-4">
            {/* Ghosted opening quote mark */}
            <span
              aria-hidden="true"
              className="absolute -top-8 left-1/2 -translate-x-1/2 font-display italic text-[9rem] leading-none text-brass/12 select-none pointer-events-none"
            >
              &ldquo;
            </span>

            <div className="relative">
              <p className="text-[11px] tracking-[0.32em] uppercase text-umber/70 mb-8">
                A Word from Our Clients
              </p>

              <blockquote className="font-elegant italic text-xl sm:text-2xl md:text-[1.6rem] leading-[1.5] text-ink/90 tracking-[-0.003em]">
                {entry.testimonial.quote}
              </blockquote>

              <figcaption className="mt-10 flex flex-col items-center">
                <span
                  aria-hidden="true"
                  className="block w-10 h-px bg-brass/60 mb-5"
                />
                <span className="font-display text-lg text-ink">
                  {entry.testimonial.author}
                </span>
                {entry.testimonial.location && (
                  <span className="mt-1 text-[11px] tracking-[0.22em] uppercase text-umber/70">
                    {entry.testimonial.location}
                  </span>
                )}
              </figcaption>
            </div>
          </figure>
        </Container>
      </Section>

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

      {/* Our Commitment — brass-bordered callout */}
      <Section tone="clear" className="py-14">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="relative overflow-hidden bg-gradient-to-br from-parchment to-parchment/60 border border-brass/30 shadow-[0_24px_48px_-20px_rgba(44,24,16,0.15)]">
              {/* Corner ornaments */}
              <div className="pointer-events-none absolute top-0 left-0 w-14 h-14 border-t border-l border-brass/45" />
              <div className="pointer-events-none absolute top-0 right-0 w-14 h-14 border-t border-r border-brass/45" />
              <div className="pointer-events-none absolute bottom-0 left-0 w-14 h-14 border-b border-l border-brass/45" />
              <div className="pointer-events-none absolute bottom-0 right-0 w-14 h-14 border-b border-r border-brass/45" />

              <div className="relative p-8 sm:p-12 text-center">
                <div className="flex items-center justify-center gap-3 mb-5">
                  <span className="h-px w-10 bg-brass/50" />
                  <span className="w-1.5 h-1.5 rounded-full bg-brass/70" />
                  <span className="h-px w-10 bg-brass/50" />
                </div>

                <p className="text-[11px] tracking-[0.32em] uppercase text-brass mb-3">
                  Our Commitment
                </p>
                <h2 className="font-display text-2xl sm:text-3xl text-ink leading-tight mb-5">
                  Our name is on every piece we build.
                </h2>
                <p className="max-w-2xl mx-auto text-ink/75 text-lg font-elegant leading-relaxed">
                  Every project runs through our own shop, our own finishers, and our
                  own install crew — no subcontractors, no handoffs, no catalog
                  cabinets arriving in a box. The cabinetry you approve on paper is
                  the cabinetry that arrives at your door. And we&apos;ve been easy
                  to find since 1985 — still are.
                </p>
              </div>
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
