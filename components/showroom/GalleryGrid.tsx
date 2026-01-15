"use client";

import { useCallback } from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { GalleryImageCard } from './GalleryImageCard';
import { ShowroomLightbox } from './ShowroomLightbox';
import { GalleryImage } from '@/lib/gallery-manifest';

interface GalleryGridProps {
  images: GalleryImage[];
  allImages: GalleryImage[]; // Full filtered list for lightbox
  hasMore: boolean;
  onLoadMore: () => void;
  lightboxIndex: number | null;
  onLightboxChange: (index: number | null) => void;
  activeCategory: string;
}

// Helper function to group kitchen images by project
function groupByProject(images: GalleryImage[]): Record<string, GalleryImage[]> {
  const grouped: Record<string, GalleryImage[]> = {};

  images.forEach(img => {
    const project = img.project || 'Other Kitchen Projects';
    if (!grouped[project]) {
      grouped[project] = [];
    }
    grouped[project].push(img);
  });

  // Sort projects alphabetically
  const sortedGrouped: Record<string, GalleryImage[]> = {};
  Object.keys(grouped).sort().forEach(key => {
    sortedGrouped[key] = grouped[key];
  });

  return sortedGrouped;
}

export function GalleryGrid({
  images,
  allImages,
  hasMore,
  onLoadMore,
  lightboxIndex,
  onLightboxChange,
  activeCategory
}: GalleryGridProps) {
  // Group kitchen images by project if Kitchens category is active
  const isKitchenView = activeCategory === 'Kitchens';
  const groupedImages = isKitchenView ? groupByProject(images) : { 'All': images };

  // Stable navigation handlers using setter function pattern
  // This prevents the callbacks from changing when lightboxIndex changes
  const handleNext = useCallback(() => {
    onLightboxChange((current) => {
      if (current === null) return null;
      return (current + 1) % allImages.length;
    });
  }, [allImages.length, onLightboxChange]);

  const handlePrev = useCallback(() => {
    onLightboxChange((current) => {
      if (current === null) return null;
      return (current - 1 + allImages.length) % allImages.length;
    });
  }, [allImages.length, onLightboxChange]);

  const handleClose = useCallback(() => {
    onLightboxChange(null);
  }, [onLightboxChange]);

  return (
    <>
      <Section className="py-8">
        <Container>
          {/* Results count */}
          <div className="mb-8 text-center">
            <p className="text-ink/60 text-sm">
              Showing {images.length} of {allImages.length} {allImages.length === 1 ? 'image' : 'images'}
            </p>
          </div>

          {/* Render grouped or flat grid */}
          {Object.entries(groupedImages).map(([projectName, projectImages]) => (
            <div key={projectName} className="mb-12 last:mb-0">
              {isKitchenView && (
                <div className="mb-8">
                  <h3 className="text-2xl sm:text-3xl font-elegant font-semibold text-ink text-center mb-3">
                    {projectName}
                  </h3>
                  <div className="flex items-center justify-center gap-2">
                    <div className="h-px w-12 bg-gradient-to-r from-transparent via-umber/30 to-transparent" />
                    <svg
                      className="w-3 h-3 text-umber/40"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2L13.09 5.26L16 6L13.09 6.74L12 10L10.91 6.74L8 6L10.91 5.26L12 2Z" />
                    </svg>
                    <div className="h-px w-12 bg-gradient-to-l from-transparent via-umber/30 to-transparent" />
                  </div>
                </div>
              )}

              {/* Grid layout - always uses full column count */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {projectImages.map((image, idx) => {
                  // Find the global index in allImages to ensure lightbox navigates correctly
                  const globalIndex = allImages.findIndex(img => img.src === image.src);

                  // Safety check: if globalIndex is -1, something went wrong
                  if (globalIndex === -1) {
                    console.error('Could not find image in allImages:', image.src);
                    return null;
                  }

                  return (
                    <GalleryImageCard
                      key={`${image.src}-${globalIndex}`}
                      image={image}
                      onClick={() => onLightboxChange(globalIndex)}
                      index={idx}
                    />
                  );
                })}
              </div>
            </div>
          ))}

          {/* Load More Button */}
          {hasMore && (
            <div className="mt-12 text-center">
              <Button
                onClick={onLoadMore}
                variant="outline"
                className="px-8 py-4 text-base hover:bg-umber/10 border-umber/35"
              >
                Load More Images
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Button>
            </div>
          )}
        </Container>
      </Section>

      {/* Lightbox */}
      <ShowroomLightbox
        images={allImages}
        currentIndex={lightboxIndex}
        isOpen={lightboxIndex !== null}
        onClose={handleClose}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </>
  );
}
