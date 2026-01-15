import Link from "next/link";
import Image from "next/image";
import { GalleryImage } from "@/lib/gallery-manifest";
import { ButtonLink } from "@/components/ui/Button";

interface LocationGalleryProps {
  images: GalleryImage[];
  city: string;
}

export function LocationGallery({ images, city }: LocationGalleryProps) {
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <Link
            key={index}
            href={`/showroom/${image.category.toLowerCase().replace(/\s+/g, '-')}`}
            className="group relative aspect-[3/4] overflow-hidden rounded-lg bg-umber/10"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-walnut/80 via-walnut/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-parchment text-sm font-medium">
                  View {image.category}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-12 text-center">
        <ButtonLink href="/showroom" variant="outline" size="md">
          View Full Showroom
        </ButtonLink>
      </div>
    </div>
  );
}
