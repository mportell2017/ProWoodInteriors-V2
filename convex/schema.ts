import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  siteSettings: defineTable({
    name: v.string(),
    address: v.string(),
    phone: v.string(),
    hours: v.optional(v.string()),
  }),

  servicePages: defineTable({
    title: v.string(),
    slug: v.string(),
    parentSlug: v.optional(v.string()),
    hero: v.object({
      title: v.string(),
      image: v.string(),
      alt: v.string(),
    }),
    body: v.string(),
    metaTitle: v.optional(v.string()),
    metaDescription: v.optional(v.string()),
    canonicalUrl: v.optional(v.string()),
  }),

  galleryImages: defineTable({
    src: v.string(),
    alt: v.string(),
    category: v.string(),
    sortOrder: v.number(),
  }).index("by_category", ["category"])
    .index("by_sortOrder", ["sortOrder"]),

  locations: defineTable({
    cityName: v.string(),
    slug: v.string(),
    intro: v.string(),
    uniqueBullets: v.array(v.string()),
    faqs: v.array(v.object({
      question: v.string(),
      answer: v.string(),
    })),
    metaTitle: v.optional(v.string()),
    metaDescription: v.optional(v.string()),
  }).index("by_slug", ["slug"]),

  contactSubmissions: defineTable({
    name: v.string(),
    phone: v.string(),
    email: v.string(),
    city: v.optional(v.string()),
    zip: v.optional(v.string()),
    projectTypes: v.array(v.string()),
    message: v.optional(v.string()),
    createdAt: v.number(),
    emailSent: v.boolean(),
  }).index("by_createdAt", ["createdAt"]),

  reviews: defineTable({
    name: v.string(),
    rating: v.number(),
    quote: v.string(),
    createdAt: v.number(),
    featured: v.boolean(),
    sortOrder: v.number(),
  }).index("by_featured", ["featured", "sortOrder"]),
});
