"use client";

import Image from "next/image";
import { useState, useCallback, useEffect } from "react";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { ButtonLink } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

const galleryImages = [
  {
    src: "/images/gallery/kitchen remodel/Blue Island/kitchen-remodel-blue-island-01.jpg",
    alt: "Custom kitchen with blue island cabinetry",
    category: "Kitchen",
  },
  {
    src: "/images/gallery/Entertainment Centers/entertainment-fireplace-remodel-01.jpg",
    alt: "Custom entertainment center with fireplace surround",
    category: "Entertainment Center",
  },
  {
    src: "/images/gallery/kitchen remodel/Quartzite Remodel/white-luxury-kitchen-remodel-01.jpg",
    alt: "Luxury white kitchen remodel with quartzite countertops",
    category: "Kitchen",
  },
  {
    src: "/images/gallery/Bookcases/white  bookcase remodel-02.jpg",
    alt: "Custom white built-in bookcase",
    category: "Built-Ins",
  },
  {
    src: "/images/gallery/kitchen remodel/Vintage Kitchen/vintage-kitchen-remodel-white-01.jpg",
    alt: "Vintage style white kitchen remodel",
    category: "Kitchen",
  },
  {
    src: "/images/gallery/Entertainment Centers/full fireplace entertainment center remodel-01.jpg",
    alt: "Full fireplace entertainment center custom build",
    category: "Entertainment Center",
  },
  {
    src: "/images/gallery/kitchen remodel/White Cabinets/white-cabinet-kitchen-remodel-01.jpg",
    alt: "Elegant white cabinet kitchen remodel",
    category: "Kitchen",
  },
  {
    src: "/images/gallery/kitchen remodel/Darkwood/kitchen-darkwood-remodel-01.jpg",
    alt: "Rich darkwood custom kitchen cabinetry",
    category: "Kitchen",
  },
  {
    src: "/images/gallery/Bookcases/white  bookcase remodel-03.jpg",
    alt: "Custom built-in bookcase with display shelving",
    category: "Built-Ins",
  },
  {
    src: "/images/gallery/kitchen remodel/White Cabinets/kitchen-remodel-laurien-02.jpg",
    alt: "Modern white kitchen with custom island",
    category: "Kitchen",
  },
  {
    src: "/images/gallery/kitchen remodel/Darkwood/kitchen-darkwood-remodel-02.jpg",
    alt: "Traditional darkwood kitchen cabinets",
    category: "Kitchen",
  },
  {
    src: "/images/gallery/Bookcases/white  bookcase remodel-04.jpg",
    alt: "Floor-to-ceiling custom bookcase installation",
    category: "Built-Ins",
  },
];

// Lightbox Component
function Lightbox({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrev,
}: {
  images: typeof galleryImages;
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}) {
  // Handle keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen) return null;

  const currentImage = images[currentIndex];

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-3 text-white/80 hover:text-white transition-colors rounded-full hover:bg-white/10"
        aria-label="Close lightbox"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Previous button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-2 sm:left-4 z-10 p-3 text-white/80 hover:text-white transition-colors rounded-full hover:bg-white/10"
        aria-label="Previous image"
      >
        <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Next button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-2 sm:right-4 z-10 p-3 text-white/80 hover:text-white transition-colors rounded-full hover:bg-white/10"
        aria-label="Next image"
      >
        <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Image container */}
      <div
        className="relative w-full h-full max-w-6xl max-h-[85vh] mx-4 sm:mx-8 flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-full">
          <Image
            src={currentImage.src}
            alt={currentImage.alt}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
            priority
          />
        </div>
      </div>

      {/* Caption and counter */}
      <div className="absolute bottom-4 left-0 right-0 text-center">
        <p className="text-white/90 font-sans text-sm mb-2">{currentImage.alt}</p>
        <div className="flex items-center justify-center gap-2">
          <span className="text-brass text-xs uppercase tracking-wider">{currentImage.category}</span>
          <span className="text-white/40">•</span>
          <span className="text-white/60 text-sm">
            {currentIndex + 1} / {images.length}
          </span>
        </div>
      </div>
    </div>
  );
}

export function PortfolioPreview() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = useCallback((index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
  }, []);

  const nextImage = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  }, []);

  const prevImage = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  }, []);

  return (
    <section className="relative py-12 sm:py-16 overflow-hidden bg-gradient-to-b from-parchment via-parchment to-parchment/95">

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Heading eyebrow="Our Work" accent="italic" className="mx-auto max-w-3xl">
            Get Inspired by Our Recent Work
          </Heading>
          <p className="mx-auto mt-5 max-w-3xl text-ink/70">
            Take a look at some of the custom kitchens, cabinetry, and built-ins
            we've completed for homeowners throughout Missouri.
          </p>
        </div>

      {/* Masonry Gallery Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
        {galleryImages.map((img, idx) => (
          <button
            key={img.src}
            onClick={() => openLightbox(idx)}
            className={cn(
              "relative w-full overflow-hidden bg-white group cursor-pointer block break-inside-avoid",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2 focus-visible:ring-offset-parchment",
              "shadow-md hover:shadow-2xl transition-all duration-300"
            )}
          >
            {/* Varying heights for masonry effect */}
            <div className={cn(
              "relative w-full",
              idx % 12 === 0 ? "aspect-[4/5]" : "",
              idx % 12 === 1 ? "aspect-[3/4]" : "",
              idx % 12 === 2 ? "aspect-[4/3]" : "",
              idx % 12 === 3 ? "aspect-[3/4]" : "",
              idx % 12 === 4 ? "aspect-[4/5]" : "",
              idx % 12 === 5 ? "aspect-[4/3]" : "",
              idx % 12 === 6 ? "aspect-[3/4]" : "",
              idx % 12 === 7 ? "aspect-[4/5]" : "",
              idx % 12 === 8 ? "aspect-[4/3]" : "",
              idx % 12 === 9 ? "aspect-[3/4]" : "",
              idx % 12 === 10 ? "aspect-[4/5]" : "",
              idx % 12 === 11 ? "aspect-[4/3]" : ""
            )}>
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <span className="text-brass text-xs uppercase tracking-wider mb-1">{img.category}</span>
              <span className="text-parchment text-sm font-sans line-clamp-2">{img.alt}</span>

              {/* Expand icon */}
              <div className="absolute top-4 right-4 p-2 bg-parchment/20 rounded-full backdrop-blur-sm">
                <svg className="w-5 h-5 text-parchment" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </div>
          </button>
        ))}
      </div>

        <div className="mt-12 text-center">
          <ButtonLink
            href="/showroom"
            className="bg-walnut text-parchment hover:bg-walnut/90 shadow-xl hover:shadow-2xl"
          >
            View Full Gallery
          </ButtonLink>
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox
        images={galleryImages}
        currentIndex={currentIndex}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </section>
  );
}
