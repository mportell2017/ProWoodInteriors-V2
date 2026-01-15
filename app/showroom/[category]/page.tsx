import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Container } from '@/components/ui/Container';
import { ButtonLink } from '@/components/ui/Button';
import { BreadcrumbNav } from '@/components/showroom/BreadcrumbNav';
import { CategoryPageView } from '@/components/showroom/CategoryPageView';
import { galleryManifest } from '@/lib/gallery-manifest';
import {
  generateSlug,
  getCategoryFromSlug,
  getImagesByCategory,
  getCategoryData,
} from '@/lib/gallery-utils';
import { generateImageGallerySchema } from '@/lib/structured-data';

type Props = {
  params: { category: string };
};

export async function generateStaticParams() {
  return galleryManifest.categories.map((cat) => ({
    category: generateSlug(cat.name),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const categoryName = getCategoryFromSlug(params.category);
  if (!categoryName) return { title: 'Category Not Found' };

  const categoryData = getCategoryData(categoryName);
  const images = getImagesByCategory(categoryName);

  const title = `${categoryName} Gallery | Professional Wood Interiors`;
  const description = `Browse ${categoryData?.count || images.length} custom ${categoryName.toLowerCase()} projects from Professional Wood Interiors. Expert craftsmanship serving St. Louis, Missouri since 1985.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: categoryData?.heroImage || images[0]?.src,
          width: 1200,
          height: 630,
          alt: `${categoryName} gallery preview`,
        },
      ],
      type: 'website',
      siteName: 'Professional Wood Interiors',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [categoryData?.heroImage || images[0]?.src],
    },
    alternates: {
      canonical: `/showroom/${params.category}`,
    },
  };
}

export default function CategoryPage({ params }: Props) {
  const categoryName = getCategoryFromSlug(params.category);

  if (!categoryName) {
    notFound();
  }

  const images = getImagesByCategory(categoryName);
  const categoryData = getCategoryData(categoryName);

  // Generate structured data
  const gallerySchema = generateImageGallerySchema(
    images,
    `${categoryName} Gallery`,
    `Custom ${categoryName.toLowerCase()} projects by Professional Wood Interiors`
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gallerySchema) }}
      />

      <Navigation />

      {/* Hero Section */}
      <Section className="pt-24 pb-12">
        <Container>
          <BreadcrumbNav
            items={[
              { name: 'Home', url: '/' },
              { name: 'Showroom', url: '/showroom' },
              { name: categoryName, url: `/showroom/${params.category}` },
            ]}
          />

          <div className="max-w-4xl mx-auto text-center mt-8">
            <Heading eyebrow={categoryName} accent="italic" as="h1">
              {categoryName} Gallery
            </Heading>
            <p className="mt-6 text-xl text-ink/70 leading-relaxed font-elegant">
              Explore {categoryData?.count || images.length} custom{' '}
              {categoryName.toLowerCase()} projects from our St. Louis showroom.
            </p>
          </div>
        </Container>
      </Section>

      {/* Gallery */}
      <CategoryPageView images={images} categoryName={categoryName} />

      {/* CTA Section */}
      <Section tone="walnut" className="mt-16">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <Heading tone="dark" showDivider={false} className="mb-6">
              Ready to Start Your Project?
            </Heading>
            <p className="text-parchment/80 text-lg mb-8 leading-relaxed">
              Let&apos;s discuss how we can create custom {categoryName.toLowerCase()} for
              your home.
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
