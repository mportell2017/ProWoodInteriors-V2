"use client";

import Image from 'next/image';
import { cn } from '@/lib/cn';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { GalleryCategory } from '@/lib/gallery-manifest';

interface CategoryBrowseProps {
  categories: GalleryCategory[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  totalImages: number;
}

export function CategoryBrowse({
  categories,
  activeCategory,
  onCategoryChange,
  totalImages
}: CategoryBrowseProps) {
  return (
    <Section className="py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* "All" category card */}
          <button
            onClick={() => onCategoryChange('All')}
            className={cn(
              "relative aspect-[3/4] overflow-hidden group cursor-pointer rounded-sm",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2",
              "transition-all duration-300",
              activeCategory === 'All'
                ? "ring-2 ring-brass shadow-2xl"
                : "shadow-lg hover:shadow-2xl"
            )}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-walnut to-umber" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-parchment">
              <h3 className="text-3xl font-elegant font-semibold mb-2">All Work</h3>
              <p className="text-brass text-sm uppercase tracking-widest">
                {totalImages} Images
              </p>
            </div>
            {activeCategory === 'All' && (
              <div className="absolute top-4 right-4 w-3 h-3 bg-brass rounded-full shadow-lg" />
            )}
          </button>

          {/* Category cards */}
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => onCategoryChange(category.name)}
              className={cn(
                "relative aspect-[3/4] overflow-hidden group cursor-pointer rounded-sm",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2",
                "transition-all duration-300",
                activeCategory === category.name
                  ? "ring-2 ring-brass shadow-2xl"
                  : "shadow-lg hover:shadow-2xl"
              )}
            >
              {/* Image */}
              <Image
                src={category.heroImage}
                alt={`Browse ${category.name}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />

              {/* Overlay */}
              <div className={cn(
                "absolute inset-0 transition-opacity duration-300",
                "bg-gradient-to-t from-walnut/90 via-walnut/40 to-transparent",
                activeCategory === category.name
                  ? "opacity-90"
                  : "opacity-70 group-hover:opacity-90"
              )}>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-elegant font-semibold text-parchment mb-2">
                    {category.name}
                  </h3>
                  <p className="text-brass text-xs uppercase tracking-widest">
                    {category.count} {category.count === 1 ? 'Image' : 'Images'}
                  </p>
                </div>
              </div>

              {/* Active indicator */}
              {activeCategory === category.name && (
                <div className="absolute top-4 right-4 w-3 h-3 bg-brass rounded-full shadow-lg" />
              )}
            </button>
          ))}
        </div>
      </Container>
    </Section>
  );
}
