import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { cn } from "@/lib/cn";

type GalleryImage = { src: string; alt: string };

type SimpleGalleryProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  images: GalleryImage[];
  columns?: 2 | 3 | 4;
  galleryHref: string;
  ctaLabel: string;
  tone?: "parchment" | "cream";
};

const gridCols: Record<number, string> = {
  2: "grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-3",
  4: "grid-cols-2 sm:grid-cols-4",
};

/**
 * Even portrait-image grid for a small portfolio (fewer images than the
 * staggered <EditorialGallery>). Each tile links to the showroom.
 */
export function SimpleGallery({
  eyebrow,
  title,
  subtitle,
  images,
  columns = 3,
  galleryHref,
  ctaLabel,
  tone = "parchment",
}: SimpleGalleryProps) {
  return (
    <Section tone={tone} className="py-16 sm:py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Heading as="h2" eyebrow={eyebrow}>
            {title}
          </Heading>
          {subtitle ? <p className="mt-5 max-w-xl mx-auto text-base text-ink/75 font-sans">{subtitle}</p> : null}
        </div>

        <div className={cn("grid gap-3 sm:gap-4", gridCols[columns])}>
          {images.map((image) => (
            <Link key={image.src} href={galleryHref} className="group relative aspect-[3/4] overflow-hidden bg-ink/5">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]"
                sizes="(max-width: 768px) 100vw, 33vw"
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
