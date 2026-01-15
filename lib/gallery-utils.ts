import { galleryManifest, GalleryImage } from './gallery-manifest';

/**
 * Convert text to URL-safe slug
 * "Blue Island Kitchen" → "blue-island-kitchen"
 */
export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')           // spaces to hyphens
    .replace(/[^\w\-]/g, '')        // remove special chars
    .replace(/\-\-+/g, '-')         // collapse multiple hyphens
    .replace(/^-+/, '')             // trim leading hyphens
    .replace(/-+$/, '');            // trim trailing hyphens
}

/**
 * Get category name from URL slug
 * "kitchens" → "Kitchens"
 */
export function getCategoryFromSlug(slug: string): string | null {
  const categories = galleryManifest.categories.map(c => c.name);
  return categories.find(cat => generateSlug(cat) === slug) || null;
}

/**
 * Get project name from URL slug
 * "blue-island-kitchen" → "Blue Island Kitchen"
 */
export function getProjectFromSlug(slug: string): string | null {
  const projects = getUniqueProjects();
  return projects.find(project => generateSlug(project) === slug) || null;
}

/**
 * Get all unique projects across all categories
 */
export function getUniqueProjects(): string[] {
  return [...new Set(
    galleryManifest.images
      .filter(img => img.project)
      .map(img => img.project!)
  )].sort();
}

/**
 * Get all projects for a specific category
 */
export function getProjectsByCategory(category: string): string[] {
  return [...new Set(
    galleryManifest.images
      .filter(img => img.category === category && img.project)
      .map(img => img.project!)
  )].sort();
}

/**
 * Get all images for a specific category
 */
export function getImagesByCategory(category: string): GalleryImage[] {
  return galleryManifest.images.filter(img => img.category === category);
}

/**
 * Get all images for a specific project within a category
 */
export function getImagesByProject(category: string, project: string): GalleryImage[] {
  return galleryManifest.images.filter(
    img => img.category === category && img.project === project
  );
}

/**
 * Get category data from the manifest
 */
export function getCategoryData(categoryName: string) {
  return galleryManifest.categories.find(c => c.name === categoryName);
}
