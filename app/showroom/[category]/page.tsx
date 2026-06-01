import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Container } from '@/components/ui/Container';
import { ButtonLink } from '@/components/ui/Button';
import { CallButton } from '@/components/ui/CallButton';
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
  params: Promise<{ category: string }>;
};

export async function generateStaticParams() {
  return galleryManifest.categories.map((cat) => ({
    category: generateSlug(cat.name),
  }));
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const categoryName = getCategoryFromSlug(params.category);
  if (!categoryName) return { title: 'Category Not Found' };

  const categoryData = getCategoryData(categoryName);
  const images = getImagesByCategory(categoryName);

  // Page <title> omits the brand — the root layout template appends
  // "| Professional Wood Interiors". Social cards use the explicit brand title.
  const pageTitle = `${categoryName} Gallery`;
  const socialTitle = `${categoryName} Gallery | Professional Wood Interiors`;
  const description = `Browse ${categoryData?.count || images.length} custom ${categoryName.toLowerCase()} projects from Professional Wood Interiors. Expert craftsmanship serving St. Louis, Missouri since 1985.`;

  return {
    title: pageTitle,
    description,
    openGraph: {
      title: socialTitle,
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
      title: socialTitle,
      description,
      images: [categoryData?.heroImage || images[0]?.src],
    },
    alternates: {
      canonical: `/showroom/${params.category}`,
    },
  };
}

export default async function CategoryPage(props: Props) {
  const params = await props.params;
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
      />      {/* Hero Section — compact masthead so the gallery clears the fold */}
      <Section className="pt-8 pb-5 sm:pt-10 sm:pb-7">
        <Container>
          <BreadcrumbNav
            items={[
              { name: 'Home', url: '/' },
              { name: 'Showroom', url: '/showroom' },
              { name: categoryName, url: `/showroom/${params.category}` },
            ]}
          />

          <div className="max-w-3xl mx-auto text-center mt-4 sm:mt-5">
            <Heading
              eyebrow={categoryName}
              accent="italic"
              as="h1"
              showDivider={false}
              className="[&_h1]:text-3xl [&_h1]:sm:text-4xl [&_h1]:lg:text-5xl"
            >
              {categoryName} Gallery
            </Heading>
            <p className="mt-3 text-base sm:text-lg text-ink/70 leading-relaxed font-elegant">
              Explore {categoryData?.count || images.length} custom{' '}
              {categoryName.toLowerCase()} projects, handcrafted in our St. Louis–area
              shop since 1985. Every piece is built by hand from solid wood and designed
              for the home it lives in — for homeowners across Chesterfield, Wildwood,
              Clayton, Kirkwood, and the greater St. Louis area. Click any project to
              see the craftsmanship up close.
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
              <CallButton tone="dark" showIcon />
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
