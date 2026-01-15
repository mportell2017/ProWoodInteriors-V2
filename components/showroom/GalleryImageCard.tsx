"use client";

import Image from 'next/image';
import { cn } from '@/lib/cn';
import { GalleryImage } from '@/lib/gallery-manifest';

interface GalleryImageCardProps {
  image: GalleryImage;
  onClick: () => void;
  index: number;
}

export function GalleryImageCard({ image, onClick, index }: GalleryImageCardProps) {
  // Use more consistent aspect ratios for better grid layout
  const aspectRatioClass = [
    "aspect-[3/4]",   // Portrait
    "aspect-[4/5]",   // Portrait
    "aspect-[3/4]",   // Portrait
    "aspect-[4/5]",   // Portrait
  ][index % 4];

  return (
    <button
      onClick={onClick}
      className={cn(
        "relative w-full overflow-hidden bg-white group cursor-pointer block rounded-sm",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2 focus-visible:ring-offset-parchment",
        "shadow-md hover:shadow-2xl transition-all duration-300"
      )}
    >
      <div className={cn("relative w-full min-h-[250px]", aspectRatioClass)}>
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
          loading="lazy"
        />
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
        <span className="text-brass text-xs uppercase tracking-wider mb-1">
          {image.category}
          {image.project && <span className="text-parchment/60"> • {image.project}</span>}
        </span>
        <span className="text-parchment text-sm font-sans line-clamp-2">
          {image.alt}
        </span>

        {/* Expand icon */}
        <div className="absolute top-4 right-4 p-2 bg-parchment/20 rounded-full backdrop-blur-sm">
          <svg className="w-5 h-5 text-parchment" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
          </svg>
        </div>
      </div>
    </button>
  );
}
