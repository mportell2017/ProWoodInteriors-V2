import { MetadataRoute } from 'next';
import { galleryManifest } from '@/lib/gallery-manifest';
import { generateSlug } from '@/lib/gallery-utils';
import { locations } from '@/lib/location-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://professionalwoodinteriors.com';
  const lastModified = new Date();

  // Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/our-story`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/reviews`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/showroom`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact-us`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/custom-kitchen-cabinetry`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/services/cabinet-refacing`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/services/custom-bookcases`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/services/entertainment-centers`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  // Location routes
  const locationRoutes: MetadataRoute.Sitemap = locations.map((location) => ({
    url: `${baseUrl}/locations/${location.slug}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  // Category routes
  const categoryRoutes: MetadataRoute.Sitemap = galleryManifest.categories.map(
    (category) => ({
      url: `${baseUrl}/showroom/${generateSlug(category.name)}`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.85,
    })
  );

  // Project routes (only for projects with project names)
  const projectRoutes: MetadataRoute.Sitemap = [];

  galleryManifest.categories.forEach((category) => {
    const projects = [
      ...new Set(
        galleryManifest.images
          .filter((img) => img.category === category.name && img.project)
          .map((img) => img.project!)
      ),
    ];

    projects.forEach((project) => {
      projectRoutes.push({
        url: `${baseUrl}/showroom/${generateSlug(category.name)}/${generateSlug(project)}`,
        lastModified,
        changeFrequency: 'monthly',
        priority: 0.75,
      });
    });
  });

  return [...staticRoutes, ...locationRoutes, ...categoryRoutes, ...projectRoutes];
}
