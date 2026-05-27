/**
 * Structured Data (JSON-LD) Generators for SEO
 * Generates schema.org markup for enhanced search engine visibility.
 *
 * All NAP fields come from `lib/business.ts` — never hardcode address/phone here.
 */

import {
  ADDRESS,
  BUSINESS_HOURS,
  BUSINESS_NAME,
  COORDINATES,
  FOUNDED_YEAR,
  PHONE_DISPLAY,
  PRICE_RANGE,
  PRIMARY_SERVICE_AREA,
  RATING,
} from './business';

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://www.prowoodinteriors.com';

const LOGO_URL = `${SITE_URL}/images/pro-wood-interiors-logo.webp`;

type BreadcrumbItem = {
  name: string;
  url: string;
};

const postalAddress = {
  '@type': 'PostalAddress' as const,
  streetAddress: ADDRESS.streetAddress,
  addressLocality: ADDRESS.addressLocality,
  addressRegion: ADDRESS.addressRegion,
  postalCode: ADDRESS.postalCode,
  addressCountry: ADDRESS.addressCountry,
};

const geoCoordinates = {
  '@type': 'GeoCoordinates' as const,
  latitude: COORDINATES.latitude,
  longitude: COORDINATES.longitude,
};

const openingHours = {
  '@type': 'OpeningHoursSpecification' as const,
  dayOfWeek: BUSINESS_HOURS.dayOfWeek,
  opens: BUSINESS_HOURS.opens,
  closes: BUSINESS_HOURS.closes,
};

const aggregateRating = {
  '@type': 'AggregateRating' as const,
  ratingValue: RATING.ratingValue,
  reviewCount: RATING.reviewCount,
};

/** Cities advertised as primary service area in LocalBusiness `areaServed`. */
const primaryAreaServed = PRIMARY_SERVICE_AREA.map((city) => ({
  '@type': 'City' as const,
  name: city,
  address: {
    '@type': 'PostalAddress' as const,
    addressLocality: city,
    addressRegion: ADDRESS.addressRegion,
    addressCountry: ADDRESS.addressCountry,
  },
}));

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
      item: `${SITE_URL}${item.url}`,
    })),
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
    image: images.map((img) => ({
      '@type': 'ImageObject',
      contentUrl: `${SITE_URL}${img.src}`,
      description: img.alt,
    })),
  };
}

/**
 * Generate LocalBusiness schema for the site root / homepage / contact page.
 * Uses the actual physical address from business.ts (Maryland Heights) and
 * lists the primary target cities as `areaServed`.
 */
export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}#business`,
    name: BUSINESS_NAME,
    url: SITE_URL,
    image: LOGO_URL,
    logo: LOGO_URL,
    telephone: PHONE_DISPLAY,
    foundingDate: String(FOUNDED_YEAR),
    address: postalAddress,
    geo: geoCoordinates,
    openingHoursSpecification: openingHours,
    priceRange: PRICE_RANGE,
    areaServed: primaryAreaServed,
    aggregateRating,
  };
}

/**
 * Generate a Service entity for a single service offering (kitchen cabinetry,
 * cabinet refacing, bookcases, entertainment centers). Used on service pages.
 */
export function generateServiceSchema(service: {
  name: string;
  slug: string;
  description: string;
}) {
  const url = `${SITE_URL}/services/${service.slug}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': url,
    name: service.name,
    serviceType: service.name,
    description: service.description,
    url,
    provider: {
      '@type': 'LocalBusiness',
      '@id': `${SITE_URL}#business`,
      name: BUSINESS_NAME,
      telephone: PHONE_DISPLAY,
      image: LOGO_URL,
      priceRange: PRICE_RANGE,
      address: postalAddress,
      aggregateRating,
    },
    areaServed: primaryAreaServed,
  };
}

/**
 * Generate Review schema for a list of testimonials. Eligible for
 * rich-result star treatment when paired with a parent entity.
 */
export function generateReviewListSchema(
  reviews: Array<{ author: string; quote: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}#business`,
    name: BUSINESS_NAME,
    image: LOGO_URL,
    telephone: PHONE_DISPLAY,
    address: postalAddress,
    aggregateRating,
    review: reviews.map((r) => ({
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5',
      },
      author: {
        '@type': 'Person',
        name: r.author,
      },
      reviewBody: r.quote,
    })),
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
    description: `Custom ${category.toLowerCase()} project by ${BUSINESS_NAME}`,
    image: images.map((src) => `${SITE_URL}${src}`),
    brand: {
      '@type': 'Brand',
      name: BUSINESS_NAME,
    },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'USD',
    },
  };
}

/**
 * Generate FAQPage schema from a list of Q&A pairs.
 * Helps eligible FAQs surface as rich results on search.
 */
export function generateFAQSchema(
  faqs: Array<{ question: string; answer: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generate Service schema for per-service, per-city landing pages.
 * This is the key schema for local service-intent queries like
 * "cabinet refacing chesterfield mo".
 */
export function generateServiceLocationSchema(entry: {
  city: string;
  stateAbbr: string;
  service: string;
  citySlug: string;
  serviceSlug: string;
  metaDescription: string;
  coordinates: { latitude: string; longitude: string };
}) {
  const url = `${SITE_URL}/locations/${entry.citySlug}/${entry.serviceSlug}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': url,
    serviceType: entry.service,
    name: `${entry.service} in ${entry.city}, ${entry.stateAbbr}`,
    description: entry.metaDescription,
    url,
    provider: {
      '@type': 'LocalBusiness',
      '@id': `${SITE_URL}#business`,
      name: BUSINESS_NAME,
      telephone: PHONE_DISPLAY,
      image: LOGO_URL,
      priceRange: PRICE_RANGE,
      address: postalAddress,
      aggregateRating,
    },
    areaServed: {
      '@type': 'City',
      name: entry.city,
      address: {
        '@type': 'PostalAddress',
        addressLocality: entry.city,
        addressRegion: entry.stateAbbr,
        addressCountry: ADDRESS.addressCountry,
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: entry.coordinates.latitude,
        longitude: entry.coordinates.longitude,
      },
    },
  };
}

/**
 * Generate ProfessionalService schema for city location pages.
 * Used for local SEO and rich snippets in search results.
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
    name: `${BUSINESS_NAME} - ${location.city}`,
    image: LOGO_URL,
    description: location.description,
    telephone: PHONE_DISPLAY,
    priceRange: PRICE_RANGE,
    address: postalAddress,
    geo: location.coordinates
      ? {
          '@type': 'GeoCoordinates',
          latitude: location.coordinates.latitude,
          longitude: location.coordinates.longitude,
        }
      : undefined,
    areaServed: [
      {
        '@type': 'City',
        name: location.city,
        address: {
          '@type': 'PostalAddress',
          addressLocality: location.city,
          addressRegion: location.stateAbbr,
          addressCountry: ADDRESS.addressCountry,
        },
      },
      ...location.serviceArea.map((area) => ({
        '@type': 'City',
        name: area,
      })),
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
            description:
              'Handcrafted custom kitchen cabinets built to your exact specifications',
            provider: {
              '@type': 'LocalBusiness',
              '@id': `${SITE_URL}#business`,
              name: BUSINESS_NAME,
              telephone: PHONE_DISPLAY,
              address: postalAddress,
            },
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Cabinet Refacing',
            description:
              'Custom solid-wood cabinet door and drawer replacement with new finishes',
            provider: {
              '@type': 'LocalBusiness',
              '@id': `${SITE_URL}#business`,
              name: BUSINESS_NAME,
              telephone: PHONE_DISPLAY,
              address: postalAddress,
            },
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Custom Built-In Bookcases',
            description:
              'Floor-to-ceiling custom bookcases and built-in shelving',
            provider: {
              '@type': 'LocalBusiness',
              '@id': `${SITE_URL}#business`,
              name: BUSINESS_NAME,
              telephone: PHONE_DISPLAY,
              address: postalAddress,
            },
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Entertainment Centers',
            description:
              'Custom media centers and entertainment built-ins with cable management',
            provider: {
              '@type': 'LocalBusiness',
              '@id': `${SITE_URL}#business`,
              name: BUSINESS_NAME,
              telephone: PHONE_DISPLAY,
              address: postalAddress,
            },
          },
        },
      ],
    },
    aggregateRating,
    openingHoursSpecification: openingHours,
  };
}
