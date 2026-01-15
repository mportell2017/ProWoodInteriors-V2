import { query } from "./_generated/server";
import { v } from "convex/values";

export const getSiteSettings = query({
  handler: async (ctx) => {
    return await ctx.db.query("siteSettings").first();
  },
});

export const getServiceBySlug = query({
  args: { slug: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("servicePages")
      .filter((q) => q.eq(q.field("slug"), args.slug))
      .first();
  },
});

export const getAllServices = query({
  handler: async (ctx) => {
    return await ctx.db.query("servicePages").collect();
  },
});

export const getHomepageServices = query({
  handler: async (ctx) => {
    const services = await ctx.db.query("servicePages").collect();
    // Filter to the 4 core services for homepage tiles
    const homepageSlugs = ["custom-cabinetry", "entertainment-centers", "bookcases", "cabinet-refacing"];
    return services.filter(s => homepageSlugs.includes(s.slug));
  },
});

export const getGalleryImages = query({
  args: { category: v.optional(v.string()), limit: v.optional(v.number()) },
  handler: async (ctx, args) => {
    let images;
    
    if (args.category) {
      const category = args.category as string;
      images = await ctx.db
        .query("galleryImages")
        .withIndex("by_category", (q) => q.eq("category", category))
        .collect();
    } else {
      images = await ctx.db
        .query("galleryImages")
        .withIndex("by_sortOrder")
        .collect();
    }
    
    images.sort((a, b) => a.sortOrder - b.sortOrder);
    
    if (args.limit) {
      images = images.slice(0, args.limit);
    }
    
    return images;
  },
});

export const getLocationBySlug = query({
  args: { slug: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("locations")
      .withIndex("by_slug", (q) => q.eq("slug", args.slug))
      .first();
  },
});

export const getAllLocations = query({
  handler: async (ctx) => {
    return await ctx.db.query("locations").collect();
  },
});

export const getFeaturedReviews = query({
  handler: async (ctx) => {
    const reviews = await ctx.db
      .query("reviews")
      .withIndex("by_featured", (q) => q.eq("featured", true))
      .collect();
    return reviews.sort((a, b) => a.sortOrder - b.sortOrder);
  },
});

export const getAllReviews = query({
  handler: async (ctx) => {
    const reviews = await ctx.db
      .query("reviews")
      .collect();
    return reviews.sort((a, b) => b.createdAt - a.createdAt);
  },
});
