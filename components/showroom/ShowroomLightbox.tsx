"use client";

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { GalleryImage } from '@/lib/gallery-manifest';

interface ShowroomLightboxProps {
  images: GalleryImage[];
  currentIndex: number | null;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export function ShowroomLightbox({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrev,
}: ShowroomLightboxProps) {
  // Throttle navigation to prevent rapid clicks causing issues
  const navigationInProgress = useRef(false);

  const throttledNext = () => {
    if (navigationInProgress.current) return;
    navigationInProgress.current = true;
    onNext();
    setTimeout(() => {
      navigationInProgress.current = false;
    }, 150); // 150ms throttle
  };

  const throttledPrev = () => {
    if (navigationInProgress.current) return;
    navigationInProgress.current = true;
    onPrev();
    setTimeout(() => {
      navigationInProgress.current = false;
    }, 150); // 150ms throttle
  };

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") throttledNext();
      if (e.key === "ArrowLeft") throttledPrev();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]); // Only re-run when lightbox opens/closes, not on every index change

  if (!isOpen || currentIndex === null) return null;

  // Safety check: ensure currentIndex is valid
  if (currentIndex < 0 || currentIndex >= images.length) {
    console.error('Invalid lightbox index:', currentIndex, 'Images length:', images.length);
    return null;
  }

  const currentImage = images[currentIndex];

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-3 text-white/80 hover:text-white transition-colors rounded-full hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-brass"
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
          throttledPrev();
        }}
        className="absolute left-2 sm:left-4 z-10 p-3 text-white/80 hover:text-white transition-colors rounded-full hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-brass"
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
          throttledNext();
        }}
        className="absolute right-2 sm:right-4 z-10 p-3 text-white/80 hover:text-white transition-colors rounded-full hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-brass"
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

      {/* Caption and metadata */}
      <div className="absolute bottom-4 left-0 right-0 text-center px-4">
        <p className="text-white/90 font-sans text-sm mb-2 max-w-2xl mx-auto">
          {currentImage.alt}
        </p>
        <div className="flex items-center justify-center gap-2 flex-wrap">
          <span className="text-brass text-xs uppercase tracking-wider">
            {currentImage.category}
          </span>
          {currentImage.project && (
            <>
              <span className="text-white/40">•</span>
              <span className="text-white/70 text-xs">
                {currentImage.project}
              </span>
            </>
          )}
          <span className="text-white/40">•</span>
          <span className="text-white/60 text-sm">
            {currentIndex + 1} / {images.length}
          </span>
        </div>
      </div>
    </div>
  );
}
