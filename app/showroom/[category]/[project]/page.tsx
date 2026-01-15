import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { ButtonLink } from '@/components/ui/Button';
import { BreadcrumbNav } from '@/components/showroom/BreadcrumbNav';
import { ProjectPageView } from '@/components/showroom/ProjectPageView';
import { galleryManifest } from '@/lib/gallery-manifest';
import {
  generateSlug,
  getCategoryFromSlug,
  getProjectFromSlug,
  getImagesByProject,
} from '@/lib/gallery-utils';
import {
  generateImageGallerySchema,
  generateProductSchema,
} from '@/lib/structured-data';

type Props = {
  params: { category: string; project: string };
};

export async function generateStaticParams() {
  const params: { category: string; project: string }[] = [];

  galleryManifest.categories.forEach((category) => {
    const projects = [
      ...new Set(
        galleryManifest.images
          .filter((img) => img.category === category.name && img.project)
          .map((img) => img.project!)
      ),
    ];

    projects.forEach((project) => {
      params.push({
        category: generateSlug(category.name),
        project: generateSlug(project),
      });
    });
  });

  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const categoryName = getCategoryFromSlug(params.category);
  const projectName = getProjectFromSlug(params.project);

  if (!categoryName || !projectName) {
    return { title: 'Project Not Found' };
  }

  const images = getImagesByProject(categoryName, projectName);
  const heroImage = images[0];

  const title = `${projectName} | ${categoryName} | Professional Wood Interiors`;
  const description = `Explore our ${projectName} project featuring custom ${categoryName.toLowerCase()} craftsmanship. ${images.length} high-quality images showcasing expert woodworking from our St. Louis shop.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: heroImage?.src,
          width: 1200,
          height: 630,
          alt: heroImage?.alt || `${projectName} preview`,
        },
      ],
      type: 'website',
      siteName: 'Professional Wood Interiors',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [heroImage?.src],
    },
    alternates: {
      canonical: `/showroom/${params.category}/${params.project}`,
    },
  };
}

export default function ProjectPage({ params }: Props) {
  const categoryName = getCategoryFromSlug(params.category);
  const projectName = getProjectFromSlug(params.project);

  if (!categoryName || !projectName) {
    notFound();
  }

  const images = getImagesByProject(categoryName, projectName);

  if (images.length === 0) {
    notFound();
  }

  // Generate structured data
  const gallerySchema = generateImageGallerySchema(
    images,
    projectName,
    `Custom ${categoryName.toLowerCase()} project by Professional Wood Interiors`
  );

  const productSchema = generateProductSchema(
    projectName,
    images.map((img) => img.src),
    categoryName
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gallerySchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
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
              { name: projectName, url: `/showroom/${params.category}/${params.project}` },
            ]}
          />

          <div className="max-w-4xl mx-auto mt-8">
            <div className="flex items-center gap-3 text-sm text-ink/60 mb-4">
              <Link
                href={`/showroom/${params.category}`}
                className="hover:text-oxblood transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2 rounded-sm"
              >
                ← Back to {categoryName}
              </Link>
            </div>

            <h1 className="text-4xl md:text-5xl font-elegant font-semibold text-ink mb-4">
              {projectName}
            </h1>
          </div>
        </Container>
      </Section>

      {/* Gallery */}
      <ProjectPageView
        images={images}
        projectName={projectName}
        categoryName={categoryName}
      />

      {/* CTA Section */}
      <Section tone="walnut" className="mt-16">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-elegant font-semibold text-parchment mb-4">
              Love What You See?
            </h2>
            <p className="text-parchment/80 text-lg mb-8 leading-relaxed">
              Let&apos;s create something beautiful for your home too.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <ButtonLink
                href="/contact-us"
                className="bg-brass hover:bg-brass/90 text-walnut font-semibold shadow-xl"
              >
                Start Your Project
              </ButtonLink>
              <ButtonLink
                href={`/showroom/${params.category}`}
                variant="outline"
                className="border-2 border-parchment/40 text-parchment hover:bg-parchment/10"
              >
                View More {categoryName}
              </ButtonLink>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
