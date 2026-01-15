/**
 * Structured Data (JSON-LD) Generators for SEO
 * Generates schema.org markup for enhanced search engine visibility
 */

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://professionalwoodinteriors.com';

interface BreadcrumbItem {
  name: string;
  url: string;
}

/**
 * Generate breadcrumb navigation schema
 * Used on category and project pages
 */
export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`
    }))
  };
}

/**
 * Generate image gallery schema
 * Used on category and project pages with multiple images
 */
export function generateImageGallerySchema(
  images: { src: string; alt: string }[],
  name: string,
  description: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    name,
    description,
    image: images.map(img => ({
      '@type': 'ImageObject',
      contentUrl: `${SITE_URL}${img.src}`,
      description: img.alt
    }))
  };
}

/**
 * Generate local business schema
 * Used on the main showroom hub page
 */
export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': SITE_URL,
    name: 'Professional Wood Interiors',
    image: `${SITE_URL}/images/pro-wood-interiors-logo.webp`,
    telephone: '(314) 437-9988',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'St. Louis',
      addressRegion: 'MO',
      addressCountry: 'US'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '38.6270',
      longitude: '-90.1994'
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:00'
    },
    priceRange: '$$$$',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '7'
    }
  };
}

/**
 * Generate product schema for project pages
 * Helps with rich snippets in search results
 */
export function generateProductSchema(
  projectName: string,
  images: string[],
  category: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: projectName,
    description: `Custom ${category.toLowerCase()} project by Professional Wood Interiors`,
    image: images.map(src => `${SITE_URL}${src}`),
    brand: {
      '@type': 'Brand',
      name: 'Professional Wood Interiors'
    },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'USD'
    }
  };
}

/**
 * Generate local service schema for city location pages
 * Used for local SEO and rich snippets in search results
 */
export function generateLocalServiceSchema(location: {
  city: string;
  state: string;
  stateAbbr: string;
  county: string;
  slug: string;
  coordinates?: {
    latitude: string;
    longitude: string;
  };
  serviceArea: string[];
  description: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${SITE_URL}/locations/${location.slug}`,
    name: `Professional Wood Interiors - ${location.city}`,
    image: `${SITE_URL}/images/pro-wood-interiors-logo.webp`,
    description: location.description,
    telephone: '(314) 437-9988',
    priceRange: '$$$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: location.city,
      addressRegion: location.stateAbbr,
      addressCountry: 'US'
    },
    geo: location.coordinates ? {
      '@type': 'GeoCoordinates',
      latitude: location.coordinates.latitude,
      longitude: location.coordinates.longitude
    } : undefined,
    areaServed: [
      {
        '@type': 'City',
        name: location.city,
        '@id': `https://en.wikipedia.org/wiki/${location.city},_${location.state.replace(' ', '_')}`
      },
      ...location.serviceArea.map(area => ({
        '@type': 'City',
        name: area
      }))
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Cabinetry Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Custom Kitchen Cabinetry',
            description: 'Handcrafted custom kitchen cabinets built to your exact specifications',
            provider: {
              '@type': 'LocalBusiness',
              name: 'Professional Wood Interiors'
            }
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Cabinet Refacing',
            description: 'Cost-effective cabinet door and drawer replacement with new finishes',
            provider: {
              '@type': 'LocalBusiness',
              name: 'Professional Wood Interiors'
            }
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Custom Built-In Bookcases',
            description: 'Floor-to-ceiling custom bookcases and built-in shelving',
            provider: {
              '@type': 'LocalBusiness',
              name: 'Professional Wood Interiors'
            }
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Entertainment Centers',
            description: 'Custom media centers and entertainment built-ins with cable management',
            provider: {
              '@type': 'LocalBusiness',
              name: 'Professional Wood Interiors'
            }
          }
        }
      ]
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '7'
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:00'
    }
  };
}
