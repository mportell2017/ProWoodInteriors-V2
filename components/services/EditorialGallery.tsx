import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { ArrowLink } from "@/components/ui/ArrowLink";

type GalleryImage = { src: string; alt: string };

type EditorialGalleryProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  /** Caption overlaid on the featured image. */
  featuredCaption: string;
  /** At least 8 images: [0] featured, [1–3] mid row, [4–7] bottom row. */
  images: GalleryImage[];
  galleryHref: string;
  ctaLabel: string;
};

/**
 * Staggered editorial gallery: one wide featured image, a row of three, and a
 * row of four — each linking to the relevant showroom category.
 */
export function EditorialGallery({
  eyebrow,
  title,
  subtitle,
  featuredCaption,
  images,
  galleryHref,
  ctaLabel,
}: EditorialGalleryProps) {
  const featured = images[0];
  const midRow = images.slice(1, 4);
  const bottomRow = images.slice(4, 8);

  return (
    <Section className="py-16 sm:py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Heading as="h2" eyebrow={eyebrow}>
            {title}
          </Heading>
          {subtitle ? <p className="mt-5 max-w-xl mx-auto text-base text-ink/75 font-sans">{subtitle}</p> : null}
        </div>

        {/* Featured image */}
        <Link
          href={galleryHref}
          className="group block relative aspect-[21/10] sm:aspect-[16/7] overflow-hidden bg-ink/5 mb-3 sm:mb-4"
        >
          <Image
            src={featured.src}
            alt={featured.alt}
            fill
            className="object-cover transition-transform duration-[1200ms] group-hover:scale-[1.03]"
            sizes="(max-width: 1024px) 100vw, 1100px"
          />
          <div className="absolute inset-0 ring-1 ring-inset ring-ink/10 pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-ink/65 via-ink/15 to-transparent">
            <span className="font-elegant italic text-parchment text-lg sm:text-xl">{featuredCaption}</span>
          </div>
        </Link>

        {/* Row of 3 medium */}
        <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-3 sm:mb-4">
          {midRow.map((image) => (
            <Link key={image.src} href={galleryHref} className="group relative aspect-square overflow-hidden bg-ink/5">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-[1200ms] group-hover:scale-[1.05]"
                sizes="(max-width: 768px) 33vw, 360px"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-ink/10 pointer-events-none" />
            </Link>
          ))}
        </div>

        {/* Row of 4 small */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {bottomRow.map((image) => (
            <Link
              key={image.src}
              href={galleryHref}
              className="group relative aspect-[4/5] overflow-hidden bg-ink/5"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-[1200ms] group-hover:scale-[1.05]"
                sizes="(max-width: 768px) 50vw, 260px"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-ink/10 pointer-events-none" />
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <ArrowLink href={galleryHref}>{ctaLabel}</ArrowLink>
        </div>
      </div>
    </Section>
  );
}
