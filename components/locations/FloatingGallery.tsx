"use client";

import { useState } from "react";
import Image from "next/image";
import { GalleryImage } from "@/lib/gallery-manifest";
import { cn } from "@/lib/cn";

interface FloatingGalleryProps {
  images: GalleryImage[];
  city: string;
}

export function FloatingGallery({ images, city }: FloatingGalleryProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Take first 4 images for the floating gallery
  const galleryImages = images.slice(0, 4);

  return (
    <div className="py-4 md:py-6">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        {/* 4-Image Layout: Left, Center (2 stacked), Right */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">

          {/* Left Frame */}
          <div
            className="relative group cursor-pointer w-full md:w-64 lg:w-72"
            onMouseEnter={() => setHoveredIndex(0)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div
              className={cn(
                "relative w-full transition-all duration-500 ease-out",
                "rotate-[-2deg] hover:rotate-0",
                hoveredIndex === 0 && "scale-105 z-20"
              )}
              style={{
                filter: hoveredIndex === 0
                  ? "drop-shadow(0 20px 40px rgba(44, 24, 16, 0.35))"
                  : "drop-shadow(0 8px 20px rgba(44, 24, 16, 0.2))"
              }}
            >
              {/* Frame Container */}
              <div className="bg-gradient-to-br from-walnut via-umber to-walnut rounded-sm p-1">
                <div className="bg-gradient-to-br from-parchment/90 to-parchment rounded-sm p-1.5">
                  <div className="bg-white shadow-inner rounded-sm overflow-hidden">
                    <div className="relative aspect-[3/4]">
                      <Image
                        src={galleryImages[0].src}
                        alt={galleryImages[0].alt}
                        fill
                        className={cn(
                          "object-cover transition-all duration-700",
                          hoveredIndex === 0 ? "scale-110 brightness-105" : "scale-100"
                        )}
                        sizes="(max-width: 768px) 100vw, 300px"
                      />
                      {/* Hover Overlay */}
                      <div
                        className={cn(
                          "absolute inset-0 bg-gradient-to-t from-walnut/60 via-transparent to-transparent",
                          "transition-opacity duration-500",
                          hoveredIndex === 0 ? "opacity-100" : "opacity-0"
                        )}
                      >
                        <div className="absolute bottom-0 left-0 right-0 p-3">
                          <p className="text-parchment text-sm font-elegant italic">
                            {galleryImages[0].category}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Frame Accents */}
              <div className="absolute top-0 left-0 w-12 h-12 bg-gradient-to-br from-brass/20 to-transparent rounded-tl-sm pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-12 h-12 bg-gradient-to-tl from-walnut/40 to-transparent rounded-br-sm pointer-events-none" />
            </div>
          </div>

          {/* Center Frames (2 stacked) */}
          <div className="flex flex-col gap-6 w-full md:w-56 lg:w-64">

            {/* Center Top Frame */}
            <div
              className="relative group cursor-pointer"
              onMouseEnter={() => setHoveredIndex(1)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={cn(
                  "relative w-full transition-all duration-500 ease-out",
                  "rotate-[1deg] hover:rotate-0",
                  hoveredIndex === 1 && "scale-105 z-20"
                )}
                style={{
                  filter: hoveredIndex === 1
                    ? "drop-shadow(0 20px 40px rgba(44, 24, 16, 0.35))"
                    : "drop-shadow(0 8px 20px rgba(44, 24, 16, 0.2))"
                }}
              >
                <div className="bg-gradient-to-br from-walnut via-umber to-walnut rounded-sm p-1">
                  <div className="bg-gradient-to-br from-parchment/90 to-parchment rounded-sm p-1.5">
                    <div className="bg-white shadow-inner rounded-sm overflow-hidden">
                      <div className="relative aspect-[4/3]">
                        <Image
                          src={galleryImages[1].src}
                          alt={galleryImages[1].alt}
                          fill
                          className={cn(
                            "object-cover transition-all duration-700",
                            hoveredIndex === 1 ? "scale-110 brightness-105" : "scale-100"
                          )}
                          sizes="(max-width: 768px) 100vw, 260px"
                        />
                        <div
                          className={cn(
                            "absolute inset-0 bg-gradient-to-t from-walnut/60 via-transparent to-transparent",
                            "transition-opacity duration-500",
                            hoveredIndex === 1 ? "opacity-100" : "opacity-0"
                          )}
                        >
                          <div className="absolute bottom-0 left-0 right-0 p-3">
                            <p className="text-parchment text-sm font-elegant italic">
                              {galleryImages[1].category}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-0 left-0 w-12 h-12 bg-gradient-to-br from-brass/20 to-transparent rounded-tl-sm pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-12 h-12 bg-gradient-to-tl from-walnut/40 to-transparent rounded-br-sm pointer-events-none" />
              </div>
            </div>

            {/* Center Bottom Frame */}
            <div
              className="relative group cursor-pointer"
              onMouseEnter={() => setHoveredIndex(2)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={cn(
                  "relative w-full transition-all duration-500 ease-out",
                  "rotate-[-1deg] hover:rotate-0",
                  hoveredIndex === 2 && "scale-105 z-20"
                )}
                style={{
                  filter: hoveredIndex === 2
                    ? "drop-shadow(0 20px 40px rgba(44, 24, 16, 0.35))"
                    : "drop-shadow(0 8px 20px rgba(44, 24, 16, 0.2))"
                }}
              >
                <div className="bg-gradient-to-br from-walnut via-umber to-walnut rounded-sm p-1">
                  <div className="bg-gradient-to-br from-parchment/90 to-parchment rounded-sm p-1.5">
                    <div className="bg-white shadow-inner rounded-sm overflow-hidden">
                      <div className="relative aspect-[4/3]">
                        <Image
                          src={galleryImages[2].src}
                          alt={galleryImages[2].alt}
                          fill
                          className={cn(
                            "object-cover transition-all duration-700",
                            hoveredIndex === 2 ? "scale-110 brightness-105" : "scale-100"
                          )}
                          sizes="(max-width: 768px) 100vw, 260px"
                        />
                        <div
                          className={cn(
                            "absolute inset-0 bg-gradient-to-t from-walnut/60 via-transparent to-transparent",
                            "transition-opacity duration-500",
                            hoveredIndex === 2 ? "opacity-100" : "opacity-0"
                          )}
                        >
                          <div className="absolute bottom-0 left-0 right-0 p-3">
                            <p className="text-parchment text-sm font-elegant italic">
                              {galleryImages[2].category}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-0 left-0 w-12 h-12 bg-gradient-to-br from-brass/20 to-transparent rounded-tl-sm pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-12 h-12 bg-gradient-to-tl from-walnut/40 to-transparent rounded-br-sm pointer-events-none" />
              </div>
            </div>

          </div>

          {/* Right Frame */}
          <div
            className="relative group cursor-pointer w-full md:w-64 lg:w-72"
            onMouseEnter={() => setHoveredIndex(3)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div
              className={cn(
                "relative w-full transition-all duration-500 ease-out",
                "rotate-[2deg] hover:rotate-0",
                hoveredIndex === 3 && "scale-105 z-20"
              )}
              style={{
                filter: hoveredIndex === 3
                  ? "drop-shadow(0 20px 40px rgba(44, 24, 16, 0.35))"
                  : "drop-shadow(0 8px 20px rgba(44, 24, 16, 0.2))"
              }}
            >
              <div className="bg-gradient-to-br from-walnut via-umber to-walnut rounded-sm p-1">
                <div className="bg-gradient-to-br from-parchment/90 to-parchment rounded-sm p-1.5">
                  <div className="bg-white shadow-inner rounded-sm overflow-hidden">
                    <div className="relative aspect-[3/4]">
                      <Image
                        src={galleryImages[3].src}
                        alt={galleryImages[3].alt}
                        fill
                        className={cn(
                          "object-cover transition-all duration-700",
                          hoveredIndex === 3 ? "scale-110 brightness-105" : "scale-100"
                        )}
                        sizes="(max-width: 768px) 100vw, 300px"
                      />
                      <div
                        className={cn(
                          "absolute inset-0 bg-gradient-to-t from-walnut/60 via-transparent to-transparent",
                          "transition-opacity duration-500",
                          hoveredIndex === 3 ? "opacity-100" : "opacity-0"
                        )}
                      >
                        <div className="absolute bottom-0 left-0 right-0 p-3">
                          <p className="text-parchment text-sm font-elegant italic">
                            {galleryImages[3].category}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-0 left-0 w-12 h-12 bg-gradient-to-br from-brass/20 to-transparent rounded-tl-sm pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-12 h-12 bg-gradient-to-tl from-walnut/40 to-transparent rounded-br-sm pointer-events-none" />
            </div>
          </div>

        </div>

        {/* Decorative Element Below Gallery */}
        <div className="flex items-center justify-center gap-2 mt-4 md:mt-6">
          <div className="h-px w-12 bg-gradient-to-r from-transparent via-umber/25 to-transparent" />
          <svg
            className="w-3 h-3 text-umber/40"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2L13.09 5.26L16 6L13.09 6.74L12 10L10.91 6.74L8 6L10.91 5.26L12 2Z" />
          </svg>
          <div className="h-px w-12 bg-gradient-to-l from-transparent via-umber/25 to-transparent" />
        </div>
      </div>
    </div>
  );
}
