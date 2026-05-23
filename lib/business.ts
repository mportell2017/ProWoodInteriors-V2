/**
 * Business constants — single source of truth.
 *
 * NAP (Name, Address, Phone) must match the Google Business Profile exactly.
 * Any drift between this file, the GBP listing, and the site is a local-SEO
 * risk: Google cross-references these and suppresses listings on mismatch.
 */

export const BUSINESS_NAME = 'Professional Wood Interiors';
export const FOUNDED_YEAR = 1985;

export const PHONE_DISPLAY = '(314) 437-9988';
export const PHONE_TEL = '3144379988';

export const EMAIL_PRIMARY = 'dave@prowoodinteriors.com';

export const ADDRESS = {
  streetAddress: '12031 Wesford Dr',
  addressLocality: 'Maryland Heights',
  addressRegion: 'MO',
  postalCode: '63043',
  addressCountry: 'US',
} as const;

/**
 * Approximate centroid of Maryland Heights. Google geocodes the address
 * directly — this is informational only.
 */
export const COORDINATES = {
  latitude: '38.7128',
  longitude: '-90.4329',
} as const;

/**
 * Marketing copy can talk about "St. Louis area" because the broader
 * metro is the audience. The actual business is in Maryland Heights.
 */
export const MARKETING_REGION = 'St. Louis';

/**
 * Primary target cities for paid + organic local SEO. These appear in
 * the LocalBusiness `areaServed` schema and should be the focus of
 * landing pages, ad geo-targeting, and copy emphasis.
 */
export const PRIMARY_SERVICE_AREA = [
  'Chesterfield',
  'Wildwood',
  'Clayton',
] as const;

export const BUSINESS_HOURS = {
  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  opens: '08:00',
  closes: '17:00',
} as const;

export const RATING = {
  ratingValue: '5',
  reviewCount: '7',
} as const;

export const PRICE_RANGE = '$$$$';

export const GOOGLE_REVIEW_URL = 'https://g.page/r/CRk_Kg6UJCBGEAI/review';
