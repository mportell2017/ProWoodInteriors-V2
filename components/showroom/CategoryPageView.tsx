"use client";

import { useState, useCallback } from 'react';
import { GalleryImage } from '@/lib/gallery-manifest';
import { GalleryGrid } from './GalleryGrid';

interface CategoryPageViewProps {
  images: GalleryImage[];
  categoryName: string;
}

export function CategoryPageView({ images, categoryName }: CategoryPageViewProps) {
  const [displayCount, setDisplayCount] = useState(18);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const displayedImages = images.slice(0, displayCount);
  const hasMore = displayCount < images.length;

  // Stable callback handlers
  const handleLoadMore = useCallback(() => {
    setDisplayCount(prev => prev + 12);
  }, []);

  const handleLightboxChange = useCallback((index: number | null | ((prev: number | null) => number | null)) => {
    if (typeof index === 'function') {
      setLightboxIndex(index);
    } else {
      setLightboxIndex(index);
    }
  }, []);

  return (
    <GalleryGrid
      images={displayedImages}
      allImages={images}
      hasMore={hasMore}
      onLoadMore={handleLoadMore}
      lightboxIndex={lightboxIndex}
      onLightboxChange={handleLightboxChange}
      activeCategory={categoryName}
    />
  );
}
