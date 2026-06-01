"use client";

import { useState } from 'react';
import { GalleryImage } from '@/lib/gallery-manifest';
import { GalleryGrid } from './GalleryGrid';

interface CategoryPageViewProps {
  images: GalleryImage[];
  categoryName: string;
}

export function CategoryPageView({ images, categoryName }: CategoryPageViewProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <GalleryGrid
      images={images}
      lightboxIndex={lightboxIndex}
      onLightboxChange={setLightboxIndex}
      activeCategory={categoryName}
    />
  );
}
