"use client";

import { useCallback, useEffect, useMemo, useRef, useState, type Dispatch, type SetStateAction } from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { GalleryImageCard } from './GalleryImageCard';
import { ShowroomLightbox } from './ShowroomLightbox';
import { GalleryImage } from '@/lib/gallery-manifest';
import { cn } from '@/lib/cn';
import Link from 'next/link';

interface GalleryGridProps {
  images: GalleryImage[];
  lightboxIndex: number | null;
  onLightboxChange: Dispatch<SetStateAction<number | null>>;
  activeCategory: string;
}

// URL-safe slug — mirrors lib/gallery-utils generateSlug so the project links
// below resolve to the same paths the [project] route generates.
function slugify(name: string): string {
  return name
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// Stable anchor id for a project section.
function sectionId(name: string): string {
  return 'project-' + slugify(name);
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

/**
 * Sticky, additive jump-nav for the Kitchens gallery. Each chip is an anchor
 * link to a project section — the sections are always in the DOM (no
 * filtering/unmounting), so every image stays server-rendered and crawlable.
 */
function ProjectJumpNav({
  projects,
}: {
  projects: { name: string; id: string; count: number }[];
}) {
  const [activeId, setActiveId] = useState(projects[0]?.id ?? '');

  useEffect(() => {
    const sections = projects
      .map(p => document.getElementById(p.id))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      entries => {
        // The section nearest the top of the viewport wins.
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      // Trigger band sits just below the sticky header + this nav (~150px).
      { rootMargin: '-150px 0px -65% 0px', threshold: 0 }
    );

    sections.forEach(s => observer.observe(s));
    return () => observer.disconnect();
  }, [projects]);

  return (
    <div className="sticky top-[71px] z-40 -mx-4 mb-7 border-y border-umber/15 bg-parchment/85 backdrop-blur-md sm:mx-0 sm:rounded-sm sm:border-x">
      <div className="flex items-center gap-2 overflow-x-auto px-4 py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <span className="mr-1 hidden shrink-0 font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-umber/70 sm:inline">
          Jump to
        </span>
        {projects.map(p => {
          const isActive = p.id === activeId;
          return (
            <a
              key={p.id}
              href={`#${p.id}`}
              aria-current={isActive ? 'true' : undefined}
              className={cn(
                'shrink-0 rounded-full border px-4 py-1.5 font-sans text-sm transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2 focus-visible:ring-offset-parchment',
                isActive
                  ? 'border-oxblood bg-oxblood text-parchment shadow-sm'
                  : 'border-umber/25 bg-white/60 text-ink/75 hover:border-brass/50 hover:text-ink'
              )}
            >
              {p.name}
              <span className={cn('ml-1.5 text-xs', isActive ? 'text-parchment/70' : 'text-ink/40')}>
                {p.count}
              </span>
            </a>
          );
        })}
      </div>
    </div>
  );
}

export function GalleryGrid({
  images,
  lightboxIndex,
  onLightboxChange,
  activeCategory,
}: GalleryGridProps) {
  // Group kitchen images by project if Kitchens category is active
  const isKitchenView = activeCategory === 'Kitchens';
  const groupedImages = useMemo(
    () => (isKitchenView ? groupByProject(images) : { All: images }),
    [isKitchenView, images]
  );

  // O(1) lookup of an image's index within the full list (lightbox navigation).
  const indexBySrc = useMemo(() => {
    const map = new Map<string, number>();
    images.forEach((img, i) => map.set(img.src, i));
    return map;
  }, [images]);

  const projects = useMemo(
    () =>
      isKitchenView
        ? Object.entries(groupedImages).map(([name, imgs]) => ({
            name,
            id: sectionId(name),
            count: imgs.length,
          }))
        : [],
    [isKitchenView, groupedImages]
  );

  // Stable navigation handlers using setter function pattern
  // This prevents the callbacks from changing when lightboxIndex changes
  const handleNext = useCallback(() => {
    onLightboxChange((current) => {
      if (current === null) return null;
      return (current + 1) % images.length;
    });
  }, [images.length, onLightboxChange]);

  const handlePrev = useCallback(() => {
    onLightboxChange((current) => {
      if (current === null) return null;
      return (current - 1 + images.length) % images.length;
    });
  }, [images.length, onLightboxChange]);

  const handleClose = useCallback(() => {
    onLightboxChange(null);
  }, [onLightboxChange]);

  return (
    <>
      <Section className="pt-3 pb-12">
        <Container>
          {isKitchenView && projects.length > 1 && <ProjectJumpNav projects={projects} />}

          {/* Render grouped (Kitchens) or flat grid */}
          {Object.entries(groupedImages).map(([projectName, projectImages]) => (
            <section
              key={projectName}
              id={isKitchenView ? sectionId(projectName) : undefined}
              className="mb-16 scroll-mt-[150px] last:mb-0"
            >
              {isKitchenView && (
                <div className="mb-6">
                  <h2 className="text-xl sm:text-2xl font-elegant font-semibold text-ink text-center mb-2">
                    {projectName}
                  </h2>
                  <div className="flex items-center justify-center gap-2">
                    <div className="h-px w-10 bg-gradient-to-r from-transparent via-umber/30 to-transparent" />
                    <svg
                      className="w-2.5 h-2.5 text-umber/40"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2L13.09 5.26L16 6L13.09 6.74L12 10L10.91 6.74L8 6L10.91 5.26L12 2Z" />
                    </svg>
                    <div className="h-px w-10 bg-gradient-to-l from-transparent via-umber/30 to-transparent" />
                  </div>
                  {projectName !== 'Other Kitchen Projects' && (
                    <div className="mt-3 text-center">
                      <Link
                        href={`/showroom/${slugify(activeCategory)}/${slugify(projectName)}`}
                        className="inline-flex items-center gap-1.5 font-sans text-sm font-medium text-oxblood underline-offset-4 transition-colors hover:text-brass hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2 focus-visible:ring-offset-parchment"
                      >
                        View this project
                        <span aria-hidden="true">→</span>
                      </Link>
                    </div>
                  )}
                </div>
              )}

              {/* Grid layout - always uses full column count */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {projectImages.map((image, idx) => {
                  const globalIndex = indexBySrc.get(image.src) ?? -1;
                  if (globalIndex === -1) return null;

                  return (
                    <GalleryImageCard
                      key={image.src}
                      image={image}
                      onClick={() => onLightboxChange(globalIndex)}
                      index={idx}
                      priority={globalIndex === 0}
                    />
                  );
                })}
              </div>
            </section>
          ))}
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
