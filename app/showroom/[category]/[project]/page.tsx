import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
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
  getProjectsByCategory,
} from '@/lib/gallery-utils';
import { generateImageGallerySchema } from '@/lib/structured-data';

// Maps a gallery category to its corresponding service hub page, so each
// project page links out to the service it demonstrates (internal linking + SEO).
const CATEGORY_SERVICE: Record<string, { href: string; label: string }> = {
  Kitchens: { href: '/services/kitchen-remodeling', label: 'Kitchen Remodeling' },
  'Entertainment Centers': {
    href: '/services/entertainment-centers',
    label: 'Entertainment Centers',
  },
  Bookcases: { href: '/services/custom-bookcases', label: 'Custom Bookcases' },
};

type Props = {
  params: Promise<{ category: string; project: string }>;
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

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const categoryName = getCategoryFromSlug(params.category);
  const projectName = getProjectFromSlug(params.project);

  if (!categoryName || !projectName) {
    return { title: 'Project Not Found' };
  }

  const images = getImagesByProject(categoryName, projectName);
  const heroImage = images[0];

  // Page <title> omits the brand — the root layout template appends
  // "| Professional Wood Interiors". Social cards use the explicit brand title.
  const pageTitle = `${projectName} | ${categoryName}`;
  const socialTitle = `${projectName} | ${categoryName} | Professional Wood Interiors`;
  const description = `Explore our ${projectName} project featuring custom ${categoryName.toLowerCase()} craftsmanship. ${images.length} high-quality images showcasing expert woodworking from our St. Louis shop.`;

  return {
    title: pageTitle,
    description,
    openGraph: {
      title: socialTitle,
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
      title: socialTitle,
      description,
      images: [heroImage?.src],
    },
    alternates: {
      canonical: `/showroom/${params.category}/${params.project}`,
    },
  };
}

export default async function ProjectPage(props: Props) {
  const params = await props.params;
  const categoryName = getCategoryFromSlug(params.category);
  const projectName = getProjectFromSlug(params.project);

  if (!categoryName || !projectName) {
    notFound();
  }

  const images = getImagesByProject(categoryName, projectName);

  if (images.length === 0) {
    notFound();
  }

  // Sibling projects in the same category — each links here and back, so every
  // project page earns multiple internal links instead of a single one.
  const relatedProjects = getProjectsByCategory(categoryName)
    .filter((name) => name !== projectName)
    .map((name) => {
      const projectImages = getImagesByProject(categoryName, name);
      return {
        name,
        slug: generateSlug(name),
        cover: projectImages[0],
        imageCount: projectImages.length,
      };
    })
    .filter((p) => p.cover);

  const service = CATEGORY_SERVICE[categoryName];

  // Structured data: these are completed custom-build portfolio pieces, not
  // purchasable products, so we describe them as an ImageGallery (honest, and
  // avoids the invalid Product/Offer-without-price markup that Product implies).
  const gallerySchema = generateImageGallerySchema(
    images,
    projectName,
    `Custom ${categoryName.toLowerCase()} project by Professional Wood Interiors`
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gallerySchema) }}
      />      {/* Hero Section — compact masthead so the project images clear the fold */}
      <Section className="pt-8 pb-5 sm:pt-10 sm:pb-6">
        <Container>
          <BreadcrumbNav
            items={[
              { name: 'Home', url: '/' },
              { name: 'Showroom', url: '/showroom' },
              { name: categoryName, url: `/showroom/${params.category}` },
              { name: projectName, url: `/showroom/${params.category}/${params.project}` },
            ]}
          />

          <div className="max-w-4xl mx-auto mt-4 sm:mt-5">
            <Link
              href={`/showroom/${params.category}`}
              className="inline-flex items-center gap-1 text-sm text-ink/60 mb-2 hover:text-oxblood transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2 rounded-sm"
            >
              ← Back to {categoryName}
            </Link>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-elegant font-semibold text-ink">
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

      {/* Related projects — internal cross-links so each project page is
          reachable from more than one place, and visitors keep browsing. */}
      {relatedProjects.length > 0 && (
        <Section tone="cream" className="py-14 border-t border-ink/10">
          <Container>
            <div className="max-w-3xl mx-auto text-center mb-10">
              <h2 className="text-3xl font-elegant font-semibold text-ink mb-3">
                More {categoryName} We&apos;ve Built
              </h2>
              <p className="text-ink/70 leading-relaxed">
                Every {categoryName.toLowerCase().replace(/s$/, '')} we build is
                designed and finished by hand in our Maryland Heights shop. Browse
                a few more {categoryName.toLowerCase()} projects below
                {service ? (
                  <>
                    , or read more about our{' '}
                    <Link
                      href={service.href}
                      className="text-oxblood underline underline-offset-2 hover:text-brass transition-colors"
                    >
                      {service.label.toLowerCase()}
                    </Link>{' '}
                    service
                  </>
                ) : null}
                .
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProjects.map((project) => (
                <Link
                  key={project.slug}
                  href={`/showroom/${params.category}/${project.slug}`}
                  className="group block overflow-hidden rounded-lg bg-parchment shadow-sm ring-1 ring-ink/10 transition-shadow hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={project.cover!.src}
                      alt={project.cover!.alt || project.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-elegant text-lg font-semibold text-ink group-hover:text-oxblood transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-sm text-ink/60 mt-1">
                      {project.imageCount}{' '}
                      {project.imageCount === 1 ? 'photo' : 'photos'}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </Section>
      )}

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
