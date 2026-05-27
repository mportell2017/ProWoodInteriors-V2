/**
 * Navigation data — slim source for the header menus.
 *
 * Kept deliberately separate from `lib/location-data.ts` (which is large and
 * server-only) so the client-side <Navigation> bundle stays light. When you
 * add a city to `location-data.ts`, mirror it here so the "Service Areas"
 * menu and the /locations index stay in sync.
 */

export type ServiceIcon = "kitchen" | "refacing" | "bookcase" | "entertainment";

export type NavService = {
  name: string;
  href: string;
  blurb: string;
  icon: ServiceIcon;
};

export const navServices: NavService[] = [
  {
    name: "Custom Kitchen Cabinetry",
    href: "/services/custom-kitchen-cabinetry",
    blurb: "Solid-wood cabinets handcrafted to fit your exact space.",
    icon: "kitchen",
  },
  {
    name: "Cabinet Refacing",
    href: "/services/cabinet-refacing",
    blurb: "A brand-new look for sound cabinets — without a full tear-out.",
    icon: "refacing",
  },
  {
    name: "Custom Bookcases & Built-Ins",
    href: "/services/custom-bookcases",
    blurb: "Floor-to-ceiling storage and display, made to measure.",
    icon: "bookcase",
  },
  {
    name: "Entertainment Centers",
    href: "/services/entertainment-centers",
    blurb: "Media walls and fireplace surrounds that anchor the room.",
    icon: "entertainment",
  },
];

export type NavCity = {
  city: string;
  slug: string;
  region: string;
};

/** Grouped in render by `region`; order here controls display order. */
export const navCities: NavCity[] = [
  { city: "Chesterfield", slug: "chesterfield", region: "St. Louis County" },
  { city: "Wildwood", slug: "wildwood", region: "St. Louis County" },
  { city: "Clayton", slug: "clayton", region: "St. Louis County" },
  { city: "St. Louis", slug: "st-louis", region: "St. Louis City & County" },
  { city: "St. Charles", slug: "st-charles", region: "St. Charles County" },
  { city: "St. Peters", slug: "st-peters", region: "St. Charles County" },
  { city: "Wentzville", slug: "wentzville", region: "St. Charles County" },
];
