/**
 * Service + Location Landing Page Data
 *
 * Content for per-service, per-city SEO landing pages at
 * /locations/[city]/[service]. Each entry is intentionally unique to
 * avoid duplicate-content signals — Google penalizes templated spins.
 *
 * To add a new combo: append an entry below, then ensure the parent
 * city exists in `lib/location-data.ts` and the route is valid.
 */

export type ServiceSlug = "cabinet-refacing" | "kitchen-remodeling";
export type CitySlug = "chesterfield" | "wildwood";

export interface ServiceLocationData {
  // Identity
  city: string;
  citySlug: CitySlug;
  service: string;
  serviceSlug: ServiceSlug;
  state: string;
  stateAbbr: string;
  county: string;
  coordinates: { latitude: string; longitude: string };

  // SEO
  metaTitle: string;
  metaDescription: string;

  // Hero
  heroEyebrow: string;
  heroTitle: string;
  heroSubtitle: string;

  // Intro paragraphs (appear below hero)
  intro: string[];

  // Service-specific "What's Included" or key points
  included: {
    heading: string;
    items: Array<{ title: string; description: string }>;
  };

  // Why homeowners choose us for this specific service in this city
  whyChooseUs: {
    heading: string;
    reasons: Array<{ title: string; description: string }>;
  };

  // Process (different steps for refacing vs full remodel)
  process: {
    heading: string;
    steps: Array<{ title: string; description: string }>;
  };

  // Local considerations for this service in this city
  considerations: {
    heading: string;
    content: string[];
  };

  // FAQs — must be service + city specific
  faqs: Array<{ question: string; answer: string }>;

  // Editorial client testimonial — drawn from real Google reviews so each
  // page gets a unique quote for SEO and trust.
  testimonial: {
    quote: string;
    author: string;
    location?: string;
  };

  // Gallery: which project(s) to pull images from
  galleryProjects: string[];
  galleryImageRange?: { start: number; count: number };
}

export const serviceLocations: ServiceLocationData[] = [
  // ---------------------------------------------------------------
  // CHESTERFIELD — CABINET REFACING
  // ---------------------------------------------------------------
  {
    city: "Chesterfield",
    citySlug: "chesterfield",
    service: "Cabinet Refacing",
    serviceSlug: "cabinet-refacing",
    state: "Missouri",
    stateAbbr: "MO",
    county: "St. Louis County",
    coordinates: { latitude: "38.6631", longitude: "-90.5771" },

    metaTitle:
      "Cabinet Refacing in Chesterfield, MO | Professional Wood Interiors",
    metaDescription:
      "Cabinet refacing in Chesterfield, MO by a family-owned St. Louis shop. Handcrafted solid wood doors, drawer fronts, and custom finishes — tailored to your kitchen. Free consultation: (314) 437-9988.",

    heroEyebrow: "Serving Chesterfield, MO",
    heroTitle: "Cabinet Refacing in Chesterfield, Missouri",
    heroSubtitle:
      "Keep the cabinet boxes you already have. Get handcrafted new doors, drawer fronts, and custom finishes — a complete kitchen transformation without the full-remodel disruption.",

    intro: [
      "Many Chesterfield homes were built with cabinet boxes that are still perfectly sound — solid plywood or hardwood frames, properly mounted, with layouts that work for the room. What's usually dated is the face: tired oak doors, chipped paint, worn hinges, or a finish that hasn't aged gracefully. That's exactly what cabinet refacing solves.",
      "Instead of tearing out functional cabinetry and adding weeks of disruption to your home, we replace what you actually see: new solid-wood doors, matching drawer fronts, a veneer over the visible box surfaces, and upgraded hardware. The result looks like a brand-new kitchen — without the brand-new kitchen timeline or price tag.",
      "We've refaced cabinets in homes across Chesterfield — from established neighborhoods near Chesterfield Mall to newer construction in the Valley — and the common thread is straightforward: homeowners who want a real visual transformation without the full-scope remodel.",
    ],

    included: {
      heading: "What a Refacing Project Includes",
      items: [
        {
          title: "Solid Wood Doors",
          description:
            "Every door is built in our shop from real hardwood — oak, maple, cherry, walnut, or hickory — in the profile and style you choose. These aren't thermofoil overlays; they're solid wood doors that will last decades.",
        },
        {
          title: "Matching Drawer Fronts",
          description:
            "All drawer fronts are replaced to match your new doors. Where it makes sense, we can also swap existing drawer boxes for dovetailed hardwood boxes with soft-close glides.",
        },
        {
          title: "Veneered Cabinet Surfaces",
          description:
            "The visible sides, end panels, and face frames of your existing boxes are covered in a wood veneer that matches your doors, so the finished look is seamless.",
        },
        {
          title: "New Hardware and Hinges",
          description:
            "Soft-close concealed hinges come standard. You choose the pulls and knobs — brass, brushed nickel, matte black, or whatever fits your home's style.",
        },
        {
          title: "Optional Upgrades",
          description:
            "Pull-out shelves, lazy Susans, crown molding, under-cabinet lighting, and valance details can all be added during the same project so you're not scheduling a second round.",
        },
        {
          title: "Shop-Applied Finish",
          description:
            "Every door and drawer front is finished in our climate-controlled shop before it leaves — so your home never deals with the fumes or dust of on-site refinishing.",
        },
      ],
    },

    whyChooseUs: {
      heading: "Why Chesterfield Homeowners Reface with Us",
      reasons: [
        {
          title: "Built in Our Local Shop",
          description:
            "Every door, drawer front, and veneer is crafted in our St. Louis-area workshop — not ordered from a catalog or shipped in. That's why the finish, grain, and fit match so precisely.",
        },
        {
          title: "About One Week On-Site",
          description:
            "Most Chesterfield refacing projects install in 5–7 business days. Your kitchen stays mostly usable throughout, and your daily routine barely changes.",
        },
        {
          title: "No Subcontractors on the Cabinetry",
          description:
            "The people who measure your kitchen are the same people who build your doors and install them. One crew, start to finish — nothing handed off.",
        },
        {
          title: "Honest Assessment First",
          description:
            "If your cabinet boxes aren't actually a good candidate for refacing, we'll tell you directly. We'd rather lose the project than install new doors on bad boxes.",
        },
        {
          title: "Designed to Age Well",
          description:
            "Solid wood construction, commercial-grade hardware, hand-applied finishes — the same materials we use in our new-build projects. This isn't a shortcut; it's a different approach.",
        },
      ],
    },

    process: {
      heading: "The Chesterfield Refacing Process",
      steps: [
        {
          title: "In-Home Assessment",
          description:
            "We visit your home, measure every cabinet, check the condition of the boxes, and talk through what you want to change. If refacing is the right call, we show you door samples, wood species, finishes, and hardware options on the spot.",
        },
        {
          title: "Design and Detailed Quote",
          description:
            "Within a few days you receive a written quote with every door style, dimension, finish, and hardware choice specified. No surprises — if you approve it, that's exactly what we build.",
        },
        {
          title: "Shop Build",
          description:
            "Your doors, drawer fronts, veneers, and any added pieces are built by hand in our shop. Each piece is finished in a controlled environment, then stacked and labeled by cabinet for installation day.",
        },
        {
          title: "On-Site Installation",
          description:
            "Our installers arrive with everything pre-built and finished. Old doors come off, new doors go on, boxes are veneered, hardware is installed, and the kitchen is cleaned up before we leave. Most projects take 5–7 business days on-site.",
        },
      ],
    },

    considerations: {
      heading: "When Refacing Makes Sense — and When It Doesn't",
      content: [
        "Refacing works beautifully when your cabinet boxes are structurally sound and your existing layout still works for how you cook. If you like where the sink sits, where the island lives, and how the pantry opens — and you just want the kitchen to feel new — refacing is almost always the right choice.",
        "Where refacing isn't the answer: if you want to remove or move cabinets, change the layout, reconfigure the island, or replace boxes that are warped, water-damaged, or made from low-quality materials. In those cases we recommend a full kitchen remodel instead — and if that's the better path for your Chesterfield home, we build those too.",
      ],
    },

    faqs: [
      {
        question: "How much does cabinet refacing cost in Chesterfield?",
        answer:
          "Every project is priced specifically to the kitchen, but cabinet refacing generally costs 40–60% less than replacing your cabinets with new custom ones. The exact figure depends on cabinet count, door style, wood species, and any upgrades. We provide a detailed written quote after the in-home assessment — no ballpark numbers that change later.",
      },
      {
        question: "How long does a Chesterfield refacing project take?",
        answer:
          "Most projects are completed in 3–5 weeks from assessment to installation. That breaks down to about 2–3 weeks for design finalization and shop build, then 5–7 business days on-site for installation.",
      },
      {
        question: "Can I still use my kitchen during the project?",
        answer:
          "Yes, for most of the project. The build happens in our shop, so your kitchen is only affected during the on-site installation week. Even then, we install in sections, so you typically keep access to your sink, refrigerator, and at least some storage throughout.",
      },
      {
        question: "Will a refaced kitchen look as good as a brand-new one?",
        answer:
          "The visible surfaces will be entirely new — doors, drawer fronts, end panels, face frames. Unless someone opens a cabinet and inspects the box interior, a refaced kitchen is visually indistinguishable from a new one.",
      },
      {
        question: "What if I want to add or remove a cabinet during refacing?",
        answer:
          "We handle minor modifications routinely — adding a cabinet, converting a section to drawers, installing pull-outs, or removing an outdated soffit. Larger layout changes may push the project into remodel territory, and we'll be honest with you about where that line is.",
      },
      {
        question: "Can you match stain or paint to other woodwork in my home?",
        answer:
          "Yes. We regularly match stains, paint colors, and molding profiles to tie the refaced kitchen into the rest of your home's woodwork and trim. Bring photos or samples to the consultation and we'll show you how we approach matching.",
      },
    ],

    testimonial: {
      quote:
        "Dave is a true professional. He shows up on time, makes recommendations, cleans up, and honors his bids. It is refreshing to call your contractor and they PICK UP THE PHONE! I would recommend Dave to anyone seeking custom cabinets or refacing done.",
      author: "Jerry M.",
    },

    galleryProjects: ["Kitchen Cabinet Refacing"],
    galleryImageRange: { start: 0, count: 8 },
  },

  // ---------------------------------------------------------------
  // CHESTERFIELD — KITCHEN REMODELING
  // ---------------------------------------------------------------
  {
    city: "Chesterfield",
    citySlug: "chesterfield",
    service: "Kitchen Remodeling",
    serviceSlug: "kitchen-remodeling",
    state: "Missouri",
    stateAbbr: "MO",
    county: "St. Louis County",
    coordinates: { latitude: "38.6631", longitude: "-90.5771" },

    metaTitle:
      "Kitchen Remodeling in Chesterfield, MO | Custom Design & Cabinetry",
    metaDescription:
      "Full-scope kitchen remodeling in Chesterfield, MO. Custom cabinets, islands, and layouts designed around how your family actually cooks and entertains. Family-owned since 1985. Free consultation: (314) 437-9988.",

    heroEyebrow: "Serving Chesterfield, MO",
    heroTitle: "Kitchen Remodeling in Chesterfield, Missouri",
    heroSubtitle:
      "Full-scope custom kitchens designed around how your Chesterfield family actually cooks, gathers, and entertains — built by hand in our local shop.",

    intro: [
      "Chesterfield homes — from the established streets around Chesterfield Mall to the newer builds west toward Wildwood — tend to have the space and scale for a kitchen that does more than prep meals. We design full-scope remodels where the kitchen becomes the heart of the house: an island that hosts morning coffee and Friday-night pours, a pantry built around how you actually shop, layouts that finally work with the way you live.",
      "A full kitchen remodel is a bigger commitment than refacing. It's the right call when your existing layout fights you, when the cabinets themselves are failing, or when you want to open the kitchen into the adjacent family room or great room.",
      "We handle the cabinetry, islands, pantries, built-ins, and finish carpentry in-house. For plumbing, electrical, flooring, and countertops, we coordinate with trade partners we've worked with for years — so the project stays on schedule and the quality stays consistent.",
    ],

    included: {
      heading: "What a Full Kitchen Remodel Includes",
      items: [
        {
          title: "Layout and Design",
          description:
            "We design the kitchen to fit how you actually live. That often means reshaping the island, reconfiguring the pantry, changing the appliance wall, or opening a wall into an adjacent room.",
        },
        {
          title: "Custom Cabinetry Built to Your Space",
          description:
            "Every cabinet is built to your exact dimensions in our shop — drawer configurations, interior shelving, roll-outs, appliance panels, all designed around what you actually store.",
        },
        {
          title: "Islands and Pantries",
          description:
            "These are often the signature of a Chesterfield kitchen. We design islands for seating, cooking, or storage (usually all three) and pantries shaped around how your family actually shops.",
        },
        {
          title: "Appliance Integration",
          description:
            "Panel-ready refrigerators, custom hood surrounds, built-in microwaves and ovens — everything detailed to look intentional, not bolted on after the fact.",
        },
        {
          title: "Trim, Crown, and Architectural Detailing",
          description:
            "Cabinetry blends into the rest of the home through matching trim profiles, crown molding, and finish carpentry that ties the space together.",
        },
        {
          title: "Shop Finish and Installation",
          description:
            "All cabinetry is finished in our climate-controlled shop, then delivered and installed by our own team — no handoff to a third-party finisher or installer.",
        },
      ],
    },

    whyChooseUs: {
      heading: "Why Chesterfield Families Choose Us for Kitchen Remodels",
      reasons: [
        {
          title: "Kitchens Designed for Chesterfield Homes",
          description:
            "We've worked on split-levels near the Monarch Levee, two-stories off Baxter Road, and contemporary builds in Chesterfield Valley — we understand how these houses flow and how the kitchen needs to connect.",
        },
        {
          title: "Every Piece Built by Hand",
          description:
            "No catalog cabinets, no imported components. Your kitchen is designed and built in our St. Louis workshop from first cut to final finish.",
        },
        {
          title: "A Single Point of Contact",
          description:
            "You work with the same person from the first visit through the final walkthrough. Questions get answered quickly, and nothing falls through the cracks between trades.",
        },
        {
          title: "Coordination Across Trades",
          description:
            "We manage the cabinetry scope and coordinate the electricians, plumbers, and countertop fabricators we trust — so you're not chasing five different contractors on the same project.",
        },
        {
          title: "Four Decades of Chesterfield Kitchens",
          description:
            "We've been designing kitchens for this community since 1985. Our designs hold up because we've seen what works twenty years later — and what doesn't.",
        },
      ],
    },

    process: {
      heading: "Our Kitchen Remodel Process",
      steps: [
        {
          title: "Consultation and Home Visit",
          description:
            "We visit your home, measure the existing kitchen, and spend time understanding how you cook, entertain, and use the space. We talk through what's working, what isn't, and what you'd like the space to become.",
        },
        {
          title: "Design and Layout Development",
          description:
            "We develop detailed plans — often including layout changes — and walk you through them. Door styles, wood species, finishes, hardware, and cabinet configurations are all specified before build begins. Nothing moves forward until you're confident in the plan.",
        },
        {
          title: "Cabinet Build in Our Shop",
          description:
            "Your cabinets are built by hand over 6–8 weeks. We welcome shop visits — for most clients, seeing the progress is a highlight of the project.",
        },
        {
          title: "Installation and Finish Coordination",
          description:
            "Installation typically takes 2–3 weeks and includes coordinating with your other trades — countertop template, appliance delivery, plumbing, electrical. We're on-site until the last piece of crown molding is in place and you've signed off.",
        },
      ],
    },

    considerations: {
      heading: "Designing Kitchens for Chesterfield Living",
      content: [
        "Chesterfield kitchens tend to anchor bigger gatherings — holiday dinners, weekend entertaining, kids home from college. We design with that in mind: islands sized for seating and prep, walk-in pantries for a serious grocery haul, beverage stations that keep guests out of the cooking flow, and sightlines that connect the kitchen to the family room without making it feel like one big echo chamber.",
        "We also think about resale. Chesterfield has a strong housing market, and the kitchen is usually the room that moves the needle most. The choices we recommend are the ones that stay current — neutral painted cabinets with wood islands, clean hardware lines, timeless layouts, and solid wood construction that a future home inspector will appreciate as much as you do.",
      ],
    },

    faqs: [
      {
        question: "What does a full kitchen remodel cost in Chesterfield?",
        answer:
          "Full-scope kitchen remodels for Chesterfield homes typically range from the low five figures into six figures, depending on cabinet count, door style, wood species, and the scope of any structural or layout changes. Countertops, appliances, and other trades are priced separately. We provide a detailed written quote after the in-home consultation — no ballpark figures that move on you later.",
      },
      {
        question: "How long does a Chesterfield kitchen remodel take?",
        answer:
          "From design approval to final walkthrough, most projects run 10–14 weeks: roughly 2–3 weeks for design finalization, 6–8 weeks for cabinet build in our shop, and 2–3 weeks for on-site installation and trade coordination.",
      },
      {
        question: "Do you handle demolition and other trades?",
        answer:
          "We manage the cabinetry build and installation. For demo, plumbing, electrical, flooring, and countertops, we coordinate with trade partners we've worked with for years. You get one point of contact for the cabinetry and a coordinated handoff between trades.",
      },
      {
        question: "Can I stay in my home during a full kitchen remodel?",
        answer:
          "Yes — most clients do. We set up a temporary kitchen workspace (often in a dining room or basement), and the on-site work is concentrated into a 2–3 week window. Expect to use grills, microwaves, and restaurants more than usual during that stretch, but the home stays livable throughout.",
      },
      {
        question: "Do I need a permit for a kitchen remodel in Chesterfield?",
        answer:
          "It depends on scope. Like-for-like cabinet replacement usually doesn't require a permit. Moving walls, plumbing, electrical, or structural elements does. We identify permit requirements during design and either pull them ourselves or coordinate with the trades that will.",
      },
      {
        question: "Can you match the style of the rest of my home?",
        answer:
          "Yes — matching existing millwork, trim profiles, stains, and architectural details is a core part of what we do. Bring photos or samples of the trim or cabinetry in adjacent rooms, and we'll design the kitchen to feel like it belongs.",
      },
    ],

    testimonial: {
      quote:
        "The transformation of the cabinets was night and day, and Dave was very patient with all of our decisions. He made a dull kitchen into our dream kitchen. His team is a fantastic group of guys who worked hard, always took care with their craft, and cleaned up behind themselves every time. This is craftsmanship at its best.",
      author: "Kelly Cook",
    },

    galleryProjects: [
      "Quartzite Luxury Kitchen",
      "Blue Island",
      "White Cabinet Kitchen",
    ],
    galleryImageRange: { start: 0, count: 8 },
  },

  // ---------------------------------------------------------------
  // WILDWOOD — CABINET REFACING
  // ---------------------------------------------------------------
  {
    city: "Wildwood",
    citySlug: "wildwood",
    service: "Cabinet Refacing",
    serviceSlug: "cabinet-refacing",
    state: "Missouri",
    stateAbbr: "MO",
    county: "St. Louis County",
    coordinates: { latitude: "38.5806", longitude: "-90.6630" },

    metaTitle:
      "Cabinet Refacing in Wildwood, MO | Professional Wood Interiors",
    metaDescription:
      "Cabinet refacing for Wildwood, MO homes. Keep your quality cabinet boxes; get handcrafted new doors, drawer fronts, and custom finishes from a family-owned St. Louis shop. Call (314) 437-9988.",

    heroEyebrow: "Serving Wildwood, MO",
    heroTitle: "Cabinet Refacing in Wildwood, Missouri",
    heroSubtitle:
      "A full kitchen update without the full-remodel disruption. Handcrafted new doors, drawer fronts, and custom finishes — built in our St. Louis shop, tailored to your home.",

    intro: [
      "Wildwood homes — especially those built in the late 1990s and early 2000s along Highway 100 and the wooded lots near Babler State Park — were often built with surprisingly good cabinet boxes. What's usually dated is what you actually see: oak doors that haven't aged well, brass hardware from a different era, or a finish that's been through two kids and a dog.",
      "Cabinet refacing replaces everything visible — doors, drawer fronts, end panels, hardware — while keeping the structural boxes that still work. For most Wildwood kitchens, that's the smart call: a transformed look without the cost, waste, or disruption of a full tear-out.",
      "We've been refacing kitchens for Wildwood families for years. The shop build happens off-site, the on-site install typically wraps in about a week, and the finished kitchen looks like a new one — often with better materials than the originals.",
    ],

    included: {
      heading: "What's Included in a Wildwood Refacing Project",
      items: [
        {
          title: "Handcrafted Solid Wood Doors",
          description:
            "Built in our shop from hardwood you choose — oak, maple, cherry, walnut, or hickory. Not overlays or laminates; real wood doors with finish applied by hand.",
        },
        {
          title: "Matching Drawer Fronts (and Optional New Boxes)",
          description:
            "Drawer fronts match your new doors. If the existing drawer boxes are beat up or don't close well, we can replace them with dovetailed hardwood boxes and soft-close glides during the same visit.",
        },
        {
          title: "Veneered Visible Surfaces",
          description:
            "Every exposed surface — cabinet ends, face frames, filler panels — receives a matching wood veneer so the kitchen reads as fully new.",
        },
        {
          title: "Soft-Close Hinges and Your Hardware Choice",
          description:
            "Concealed soft-close hinges come standard. Pulls and knobs are your pick, in whatever finish ties the kitchen together.",
        },
        {
          title: "Practical Add-Ons",
          description:
            "Pull-out shelves, lazy Susans, under-cabinet lighting, crown molding, trash pull-outs — anything that makes the kitchen work better while we're already on-site.",
        },
      ],
    },

    whyChooseUs: {
      heading: "Why Wildwood Homeowners Choose Us for Refacing",
      reasons: [
        {
          title: "Built Locally, Not Ordered In",
          description:
            "Every door, veneer, and drawer front is built in our St. Louis workshop. Delivery delays, finish mismatches, and manufacturer defects — we avoid those by controlling the whole process ourselves.",
        },
        {
          title: "One Week On-Site, Not One Month",
          description:
            "Most Wildwood refacing projects install in 5–7 business days. If you're balancing school pickups, work-from-home meetings, and a busy household, that timeline matters.",
        },
        {
          title: "Experienced with Wildwood Construction",
          description:
            "We've refaced cabinets in plenty of Wildwood homes — we know the box styles, face-frame standards, and common quirks of builds from the 80s through the early 2000s.",
        },
        {
          title: "An Honest Assessment First",
          description:
            "If your boxes aren't a good fit for refacing — water damage, warped frames, low-quality original construction — we'll say so and recommend a different path. Installing new doors on bad boxes isn't a favor to anyone.",
        },
        {
          title: "The Same Materials We Use in Custom Builds",
          description:
            "Our refacing work uses the same hardwoods, hardware, and finishes as our new-build kitchens. Same quality; different scope.",
        },
      ],
    },

    process: {
      heading: "Our Wildwood Refacing Process",
      steps: [
        {
          title: "On-Site Measure and Assessment",
          description:
            "We come to your home, measure every cabinet, and check the condition of the boxes. If refacing is the right call, we walk you through door styles, wood species, finishes, and hardware options right there on the countertop.",
        },
        {
          title: "Design and Selections",
          description:
            "You receive a written quote with every door style, wood, finish, and hardware choice specified. No loose ends — what you approve is exactly what we build.",
        },
        {
          title: "Shop Build and Finishing",
          description:
            "Your doors, drawer fronts, veneers, and any added pieces are built and finished by hand in our shop. Everything is labeled by cabinet and staged for installation day.",
        },
        {
          title: "Installation — About a Week",
          description:
            "Installers arrive with everything pre-built. Old doors off, new doors on, boxes veneered, hardware installed, cleanup handled before we leave. Most on-site work wraps in 5–7 business days.",
        },
      ],
    },

    considerations: {
      heading: "Is Refacing the Right Choice for Your Wildwood Home?",
      content: [
        "Refacing is almost always the right call when your cabinet boxes are structurally solid, you like your kitchen layout, and you want the kitchen to feel new without the full-remodel disruption. For the many Wildwood homes built 15–30 years ago with decent cabinet construction, that's a common fit.",
        "Refacing isn't the right answer if you want to change the layout, move the island, or replace boxes that are damaged or poorly built. For those projects, a full kitchen remodel makes more sense — and we build those too. If we visit your home and refacing isn't what you need, we'll tell you directly rather than sell you on it.",
      ],
    },

    faqs: [
      {
        question: "How much does cabinet refacing cost in Wildwood?",
        answer:
          "Refacing generally costs 40–50% less than replacing your cabinets with new custom ones. Exact pricing depends on cabinet count, door style, wood species, hardware, and any add-ons. You'll receive a detailed written quote after the in-home assessment — not a moving target.",
      },
      {
        question: "How long will my kitchen be out of commission?",
        answer:
          "The shop build happens off-site, so the only disruption is during the on-site installation week — typically 5–7 business days. We install in sections, so you generally keep access to your sink and at least some storage throughout.",
      },
      {
        question: "Can I change the wood species or color completely?",
        answer:
          "Absolutely — and most clients do. You can go from oak to painted white, from brass hardware to matte black, from traditional raised-panel to modern slab. Refacing is about reimagining the look, not preserving it.",
      },
      {
        question: "What happens if you find damage we didn't know about?",
        answer:
          "We check box condition during the initial assessment, so major issues are identified before we start. If we find unexpected damage during installation, we pause, walk you through it, and agree on an approach before moving forward. No surprise charges tacked onto a final invoice.",
      },
      {
        question: "Can I add features during the refacing project?",
        answer:
          "Yes. Pull-out shelves, soft-close drawer upgrades, crown molding, under-cabinet lighting, trash pull-outs, and lazy Susans are all commonly added while we're already on-site. It's the most efficient time to make those upgrades.",
      },
      {
        question: "Do you offer a warranty on your refacing work?",
        answer:
          "Yes. Our refacing work comes with a written warranty on the doors, finishes, and hardware. We've been a local business since 1985, so if you ever need us back, we're not hard to find.",
      },
    ],

    testimonial: {
      quote:
        "Very happy I found this company. They went above and beyond. They gave good advice and got the job done. I am a very satisfied customer — I wish I had found this company years ago.",
      author: "Beth C.",
    },

    galleryProjects: ["Kitchen Cabinet Refacing"],
    galleryImageRange: { start: 9, count: 9 },
  },

  // ---------------------------------------------------------------
  // WILDWOOD — KITCHEN REMODELING
  // ---------------------------------------------------------------
  {
    city: "Wildwood",
    citySlug: "wildwood",
    service: "Kitchen Remodeling",
    serviceSlug: "kitchen-remodeling",
    state: "Missouri",
    stateAbbr: "MO",
    county: "St. Louis County",
    coordinates: { latitude: "38.5806", longitude: "-90.6630" },

    metaTitle:
      "Kitchen Remodeling in Wildwood, MO | Custom Cabinets & Design",
    metaDescription:
      "Full-scope kitchen remodeling in Wildwood, MO. Custom cabinets, islands, and pantries built by hand in our local shop. Designed for Wildwood homes and lifestyle. Free consultation: (314) 437-9988.",

    heroEyebrow: "Serving Wildwood, MO",
    heroTitle: "Kitchen Remodeling in Wildwood, Missouri",
    heroSubtitle:
      "Custom kitchens designed for Wildwood's homes, lots, and lifestyle — handcrafted by a local shop that's been building them since 1985.",

    intro: [
      "Wildwood homes sit on bigger lots, in wooded settings, with kitchens that often look out over trees. The remodels we design for Wildwood tend to reflect that: warm wood tones, substantial islands, pantries that handle a real grocery run, and layouts that work whether you're feeding your family on a Tuesday or hosting twenty for a birthday.",
      "A full kitchen remodel opens up what's possible. Moving a wall, resizing the island, building a walk-in pantry, adding a prep sink — these are the kinds of changes that require replacing the cabinetry rather than refacing it. We design and build all of it in-house.",
      "If you're early in the process and not yet sure whether refacing or a full remodel is the right path, we can walk through both during a consultation and give you an honest recommendation based on what we actually see in your home.",
    ],

    included: {
      heading: "What's Included in a Full Wildwood Kitchen Remodel",
      items: [
        {
          title: "Full Design and Layout",
          description:
            "We design the kitchen to fit how you actually cook, gather, and entertain. Wildwood homes often accommodate bigger moves — relocating pantries, repositioning islands, opening walls into great rooms or family rooms.",
        },
        {
          title: "Custom Cabinets Built by Hand",
          description:
            "Every cabinet is built in our shop from the wood species and style you choose. Drawer interiors, roll-outs, spice pull-outs, and appliance panels are all designed around your specific kitchen.",
        },
        {
          title: "Islands, Pantries, and Beverage Stations",
          description:
            "These are signature elements in most Wildwood remodels. We size them for seating, storage, or both — and detail them so they feel like intentional features, not add-ons.",
        },
        {
          title: "Appliance Integration",
          description:
            "Panel-ready refrigerators, built-in ovens, custom hood surrounds, designer ranges — everything detailed to look like part of the cabinetry rather than bolted in afterward.",
        },
        {
          title: "Millwork and Trim Matching",
          description:
            "Wildwood homes often have existing woodwork worth honoring. We match stains, trim profiles, and architectural details so the new kitchen feels like it was always meant to be there.",
        },
        {
          title: "Shop Finish, On-Site Install",
          description:
            "All cabinetry is finished in our shop and installed by our own crew — no outside finisher, no separate installation company.",
        },
      ],
    },

    whyChooseUs: {
      heading: "Why Wildwood Families Choose Us for Kitchen Remodels",
      reasons: [
        {
          title: "Designed Around How You Actually Cook",
          description:
            "Your remodel reflects your habits — not a catalog layout. If you cook for one most nights and host twelve on holidays, the kitchen gets designed for both realities.",
        },
        {
          title: "Built in Our Local Shop",
          description:
            "Every cabinet, island, and built-in is made in our St. Louis workshop. No catalog ordering, no imported components, no manufacturer quality surprises showing up in your driveway.",
        },
        {
          title: "Comfortable with Wildwood Architecture",
          description:
            "From traditional two-stories off Manchester Road to newer transitional builds along Highway 100 to craftsman-inspired homes on wooded lots, we design kitchens that respect the character of Wildwood houses rather than fighting them.",
        },
        {
          title: "Coordinated Trades",
          description:
            "We manage the cabinetry and coordinate the electricians, plumbers, and countertop fabricators we've worked with for years. You don't chase five vendors.",
        },
        {
          title: "Still Here in Twenty Years",
          description:
            "We've been building kitchens since 1985. Our work holds up because we've watched how three decades of kitchens have aged — and we build with that perspective in mind.",
        },
      ],
    },

    process: {
      heading: "Our Kitchen Remodel Process",
      steps: [
        {
          title: "Home Visit and Listening Session",
          description:
            "We come out, measure the existing kitchen, and spend time understanding how your family uses the space. What's working, what isn't, and what the kitchen should become — that's the conversation we start with.",
        },
        {
          title: "Design, Selections, and Detailed Plans",
          description:
            "We develop layout plans (often with structural changes), specify every door style, wood species, finish, hardware choice, and cabinet configuration, and walk through it all with you. Build doesn't start until you're confident.",
        },
        {
          title: "Shop Build (6–8 Weeks)",
          description:
            "Your cabinetry is built by hand in our shop. You're welcome to visit and see the work in progress — for most clients that's one of the most satisfying parts of the whole project.",
        },
        {
          title: "On-Site Installation and Finish (2–3 Weeks)",
          description:
            "Installation takes 2–3 weeks on-site. We coordinate the countertop template, appliance delivery, plumbing, electrical, and any other trades — so the kitchen comes together as a single finished room rather than a sequence of contractor visits.",
        },
      ],
    },

    considerations: {
      heading: "What Makes a Wildwood Kitchen Different",
      content: [
        "Wildwood kitchens tend to lean warmer than Chesterfield's. Wood tones, stained islands, and painted perimeters are common combinations; clean-line contemporary is less typical here. The bigger lots often allow for bigger kitchens, which means careful negotiation between storage, seating, and workflow — something we work out deliberately during design.",
        "We also think about how the kitchen connects to the rest of the home. Mudrooms, butler's pantries, and family rooms all tend to tie directly into the kitchen in Wildwood homes, and we design those transitions on purpose. The cabinetry tells a continuous story rather than stopping abruptly at the kitchen doorway.",
      ],
    },

    faqs: [
      {
        question: "What does a full kitchen remodel cost in Wildwood?",
        answer:
          "Full-scope Wildwood remodels vary widely based on cabinet count, wood species, door style, and the scope of layout or structural changes. Countertops and other trades are priced separately. We provide a detailed written quote after the in-home consultation — a real number, not a moving estimate.",
      },
      {
        question: "How long does a Wildwood kitchen remodel take?",
        answer:
          "Expect 10–14 weeks from design approval to final walkthrough: roughly 2–3 weeks for design finalization, 6–8 weeks for the shop build, and 2–3 weeks for installation and trade coordination on-site.",
      },
      {
        question: "Can you work with my existing contractor, plumber, or electrician?",
        answer:
          "Yes. We regularly coordinate with trades the homeowner is already working with. We also have trusted trade partners we can bring in if you'd prefer a fully coordinated turnkey approach.",
      },
      {
        question: "What if our home has existing custom woodwork we want to match?",
        answer:
          "Matching existing millwork is one of our strengths. We can match stains, trim profiles, and door styles so the new kitchen looks like it was original to the house. Bring photos or physical samples to the consultation.",
      },
      {
        question: "Do you handle demolition?",
        answer:
          "We coordinate demolition with trade partners and schedule it to lead directly into cabinet installation. Full demo is usually 2–3 days before cabinets arrive on-site — timed so you don't live with an empty kitchen any longer than necessary.",
      },
      {
        question: "Will you be our single point of contact?",
        answer:
          "Yes. You work with the same person from the first consultation through the final walkthrough. Every question, change, and update flows through one relationship — not a rotating cast of project managers.",
      },
    ],

    testimonial: {
      quote:
        "Outstanding customer service and craftsmanship. Dave and team provided excellent communications and superb craftsmanship. Absolutely the best team we have worked with for home renovations in three states over the past 20 years.",
      author: "David Ferguson",
      location: "Wildwood, MO",
    },

    galleryProjects: [
      "Vintage Kitchen",
      "Dual-Color Kitchen",
      "White Cabinet Kitchen",
    ],
    galleryImageRange: { start: 0, count: 8 },
  },
];

/**
 * Look up a service-location entry by city + service slug.
 */
export function getServiceLocation(
  citySlug: string,
  serviceSlug: string
): ServiceLocationData | undefined {
  return serviceLocations.find(
    (entry) => entry.citySlug === citySlug && entry.serviceSlug === serviceSlug
  );
}

/**
 * Return all valid [city, service] combinations for static generation.
 * Only emits entries that exist in `serviceLocations` — not a cross-product.
 */
export function getAllServiceLocationParams() {
  return serviceLocations.map((entry) => ({
    city: entry.citySlug,
    service: entry.serviceSlug,
  }));
}

/**
 * Return all service-location entries for a given city (used to link
 * service pages from the parent city page).
 */
export function getServiceLocationsByCity(
  citySlug: string
): ServiceLocationData[] {
  return serviceLocations.filter((entry) => entry.citySlug === citySlug);
}
