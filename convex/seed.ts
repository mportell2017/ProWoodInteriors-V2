import { mutation } from "./_generated/server";

export const seedData = mutation({
  handler: async (ctx) => {
    // Check if data already exists
    const existingSettings = await ctx.db.query("siteSettings").first();
    if (existingSettings) {
      return { success: true, message: "Data already seeded" };
    }

    // Seed site settings
    await ctx.db.insert("siteSettings", {
      name: "Professional Wood Interiors",
      address: "12031 Wesford Dr, Maryland Heights, MO 63043",
      phone: "(314) 437-9988",
      hours: "Monday-Friday: 8am-5pm",
    });

    // Seed service pages
    const services = [
      {
        title: "Custom Cabinetry",
        slug: "custom-cabinetry",
        hero: {
          title: "Custom Cabinetry",
          image: "/images/services/custom-cabinetry-hero.jpg",
          alt: "Custom kitchen cabinetry",
        },
        body: "Our custom cabinetry is built specifically for your home...",
      },
      {
        title: "Cabinet Refacing",
        slug: "cabinet-refacing",
        hero: {
          title: "Cabinet Refacing",
          image: "/images/services/cabinet-refacing-hero.jpg",
          alt: "Refaced kitchen cabinets",
        },
        body: "Give your existing cabinets a fresh, updated look...",
      },
      {
        title: "Bookcases",
        slug: "bookcases",
        hero: {
          title: "Bookcases & Built-Ins",
          image: "/images/services/bookcases-hero.jpg",
          alt: "Custom built-in bookcases",
        },
        body: "Custom built-in bookcases and storage solutions...",
      },
      {
        title: "Entertainment Centers",
        slug: "entertainment-centers",
        hero: {
          title: "Entertainment Centers",
          image: "/images/services/entertainment-centers-hero.jpg",
          alt: "Custom entertainment center",
        },
        body: "Entertainment centers and bespoke surrounds...",
      },
    ];

    for (const service of services) {
      await ctx.db.insert("servicePages", {
        ...service,
        parentSlug: "services",
        body: service.body + " [Full content to be added]",
      });
    }

    // Seed locations
    const cities = [
      {
        cityName: "St. Louis",
        slug: "st-louis",
        intro: "Professional Wood Interiors has been serving St. Louis homeowners since 1985. We understand the unique architectural styles and design preferences of St. Louis homes, from historic properties to modern builds.",
        uniqueBullets: [
          "Serving St. Louis families for over 35 years",
          "Expert knowledge of St. Louis home styles",
          "Quick response times throughout the metro area",
        ],
        faqs: [
          { question: "Do you serve all of St. Louis?", answer: "Yes, we serve all areas of St. Louis and the surrounding metro area." },
          { question: "How long does a typical project take?", answer: "Most projects take 6-10 weeks from design to installation." },
        ],
      },
      {
        cityName: "Chesterfield",
        slug: "chesterfield",
        intro: "Chesterfield homeowners trust Professional Wood Interiors for their custom cabinetry needs. We bring premium craftsmanship and personalized service to every project.",
        uniqueBullets: [
          "Premium craftsmanship for Chesterfield homes",
          "Understanding of local architectural styles",
          "Proven track record in the Chesterfield area",
        ],
        faqs: [
          { question: "Do you work in Chesterfield?", answer: "Yes, we regularly serve Chesterfield and surrounding areas." },
        ],
      },
      {
        cityName: "Clayton",
        slug: "clayton",
        intro: "Clayton residents choose Professional Wood Interiors for superior craftsmanship and attention to detail. We specialize in luxury custom solutions.",
        uniqueBullets: [
          "Luxury custom solutions for Clayton homes",
          "Attention to detail and quality materials",
        ],
        faqs: [
          { question: "What types of projects do you do in Clayton?", answer: "We handle all types of custom cabinetry and built-ins in Clayton." },
        ],
      },
      {
        cityName: "Wildwood",
        slug: "wildwood",
        intro: "Serving Wildwood with custom woodworking solutions that enhance your home's beauty and functionality.",
        uniqueBullets: [
          "Custom solutions for Wildwood homes",
        ],
        faqs: [
          { question: "Do you serve Wildwood?", answer: "Yes, we work with homeowners throughout Wildwood and the surrounding area." },
        ],
      },
      {
        cityName: "St. Peters",
        slug: "st-peters",
        intro: "Professional Wood Interiors brings expert craftsmanship to St. Peters. We're committed to creating beautiful, functional spaces for your home.",
        uniqueBullets: [
          "Trusted by St. Peters homeowners",
        ],
        faqs: [
          { question: "Do you serve St. Peters?", answer: "Yes, we regularly work in St. Peters and surrounding communities." },
        ],
      },
      {
        cityName: "St. Charles",
        slug: "st-charles",
        intro: "Serving St. Charles with quality custom cabinetry that combines traditional craftsmanship with modern design.",
        uniqueBullets: [
          "Quality craftsmanship in St. Charles",
        ],
        faqs: [
          { question: "Do you work in St. Charles?", answer: "Yes, we serve St. Charles and the surrounding area." },
        ],
      },
      {
        cityName: "Wentzville",
        slug: "wentzville",
        intro: "Professional Wood Interiors serves Wentzville and surrounding areas, bringing custom cabinetry solutions to growing communities.",
        uniqueBullets: [
          "Reliable service in Wentzville",
        ],
        faqs: [
          { question: "Do you serve Wentzville?", answer: "Yes, we work with homeowners in Wentzville and surrounding areas." },
        ],
      },
    ];

    for (const city of cities) {
      const existingCity = await ctx.db
        .query("locations")
        .withIndex("by_slug", (q) => q.eq("slug", city.slug))
        .first();
      
      if (!existingCity) {
        await ctx.db.insert("locations", {
          ...city,
          faqs: city.faqs.length > 0 ? city.faqs : [
            { question: `Do you serve ${city.cityName}?`, answer: `Yes, we regularly work with homeowners in ${city.cityName}.` },
            { question: "How do I get started?", answer: "Contact us for a free consultation to discuss your project." },
          ],
        });
      }
    }

    // Seed starter gallery images
    const galleryImages = [
      { src: "/images/gallery/kitchen-1.jpg", alt: "Custom kitchen cabinetry", category: "kitchen", sortOrder: 1 },
      { src: "/images/gallery/built-ins-1.jpg", alt: "Custom built-in bookcases", category: "built-ins", sortOrder: 2 },
      { src: "/images/gallery/entertainment-1.jpg", alt: "Entertainment center", category: "entertainment", sortOrder: 3 },
      { src: "/images/gallery/kitchen-2.jpg", alt: "Kitchen island", category: "kitchen", sortOrder: 4 },
      { src: "/images/gallery/built-ins-2.jpg", alt: "Built-in storage", category: "built-ins", sortOrder: 5 },
      { src: "/images/gallery/refacing-1.jpg", alt: "Refaced cabinets", category: "refacing", sortOrder: 6 },
    ];

    for (const img of galleryImages) {
      await ctx.db.insert("galleryImages", img);
    }

    // Seed reviews
    const reviews = [
      {
        name: "Bob & Emily Burke",
        rating: 5,
        quote: "The custom cabinetry in our kitchen exceeded our expectations. The craftsmanship is outstanding and the design help made all the difference.",
        featured: true,
        sortOrder: 1,
        createdAt: Date.now() - 86400000 * 30, // 30 days ago
      },
      {
        name: "David Rogerson",
        rating: 5,
        quote: "Professional Wood Interiors transformed our living room with beautiful built-ins. Great communication throughout the entire process.",
        featured: true,
        sortOrder: 2,
        createdAt: Date.now() - 86400000 * 45, // 45 days ago
      },
      {
        name: "Kelly Davis",
        rating: 5,
        quote: "We couldn't be happier with our new entertainment center. The attention to detail and quality materials are evident in every piece.",
        featured: true,
        sortOrder: 3,
        createdAt: Date.now() - 86400000 * 60, // 60 days ago
      },
    ];

    for (const review of reviews) {
      await ctx.db.insert("reviews", review);
    }

    return { success: true, message: "Data seeded successfully" };
  },
});
