"use client";

import { useState, useMemo } from 'react';
import { GalleryImage, GalleryCategory } from '@/lib/gallery-manifest';
import { CategoryBrowse } from './CategoryBrowse';
import { GalleryGrid } from './GalleryGrid';

interface ShowroomClientProps {
  images: GalleryImage[];
  categories: GalleryCategory[];
}

export function ShowroomClient({ images, categories }: ShowroomClientProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [displayCount, setDisplayCount] = useState(18); // Initial load
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Filter images by active category
  const filteredImages = useMemo(() => {
    if (activeCategory === 'All') return images;
    return images.filter(img => img.category === activeCategory);
  }, [images, activeCategory]);

  // Paginated images to display
  const displayedImages = filteredImages.slice(0, displayCount);
  const hasMore = displayCount < filteredImages.length;

  const handleLoadMore = () => {
    setDisplayCount(prev => prev + 12); // Load 12 more
  };

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setDisplayCount(18); // Reset pagination on filter change
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <CategoryBrowse
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
        totalImages={images.length}
      />

      <GalleryGrid
        images={displayedImages}
        allImages={filteredImages} // For lightbox navigation
        hasMore={hasMore}
        onLoadMore={handleLoadMore}
        lightboxIndex={lightboxIndex}
        onLightboxChange={setLightboxIndex}
        activeCategory={activeCategory}
      />
    </>
  );
}
