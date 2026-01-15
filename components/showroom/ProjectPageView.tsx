"use client";

import { useState, useCallback } from 'react';
import { GalleryImage } from '@/lib/gallery-manifest';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { GalleryImageCard } from './GalleryImageCard';
import { ShowroomLightbox } from './ShowroomLightbox';

interface ProjectPageViewProps {
  images: GalleryImage[];
  projectName: string;
  categoryName: string;
}

export function ProjectPageView({ images, projectName, categoryName }: ProjectPageViewProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Stable navigation handlers using setter function pattern
  // This prevents the callbacks from changing when lightboxIndex changes
  const handleNext = useCallback(() => {
    setLightboxIndex((current) => {
      if (current === null) return null;
      return (current + 1) % images.length;
    });
  }, [images.length]);

  const handlePrev = useCallback(() => {
    setLightboxIndex((current) => {
      if (current === null) return null;
      return (current - 1 + images.length) % images.length;
    });
  }, [images.length]);

  const handleClose = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  return (
    <>
      <Section className="py-8">
        <Container>
          {/* Project description */}
          <div className="mb-8 text-center max-w-3xl mx-auto">
            <p className="text-lg text-ink/70 leading-relaxed font-elegant">
              A custom {categoryName.toLowerCase()} project featuring {images.length}{' '}
              {images.length === 1 ? 'image' : 'images'} showcasing our craftsmanship and attention to detail.
            </p>
          </div>

          {/* Grid layout - always uses full column count */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {images.map((image, idx) => (
              <GalleryImageCard
                key={image.src}
                image={image}
                onClick={() => setLightboxIndex(idx)}
                index={idx}
              />
            ))}
          </div>
        </Container>
      </Section>

      {/* Lightbox */}
      <ShowroomLightbox
        images={images}
        currentIndex={lightboxIndex}
        isOpen={lightboxIndex !== null}
        onClose={handleClose}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </>
  );
}
