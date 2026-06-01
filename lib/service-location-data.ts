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
export type CitySlug =
  | "chesterfield"
  | "wildwood"
  | "clayton"
  | "kirkwood"
  | "ballwin"
  | "creve-coeur"
  | "glendale";

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
      "Cabinet Refacing in Chesterfield, MO",
    metaDescription:
      "Cabinet refacing in Chesterfield, MO by a family-owned St. Louis shop. Handcrafted solid wood doors, drawer fronts, and custom finishes — tailored to your kitchen. Free consultation: (314) 437-9988.",

    heroEyebrow: "Serving Chesterfield, MO",
    heroTitle: "Cabinet Refacing in Chesterfield, Missouri",
    heroSubtitle:
      "Keep the cabinet boxes you already have. Get handcrafted new doors, drawer fronts, and custom finishes — a complete kitchen transformation without the full-remodel disruption.",

    intro: [
      "Many Chesterfield homes were built with cabinet boxes that are still perfectly sound — solid plywood or hardwood frames, properly mounted, with layouts that work for the room. What's usually dated is the face: tired oak doors, chipped paint, worn hinges, or a finish that hasn't aged gracefully. That's exactly what cabinet refacing solves.",
      "Instead of tearing out functional cabinetry and adding weeks of disruption to your home, we replace what you actually see: new solid-wood doors, matching drawer fronts, a veneer over the visible box surfaces, and upgraded hardware. The result looks like a brand-new kitchen — without the brand-new kitchen timeline.",
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
          title: "Design and Detailed Proposal",
          description:
            "Within a few days you receive a written proposal with every door style, dimension, finish, and hardware choice specified. Once you approve the plan, that's exactly what we build.",
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
        "We also think about longevity. The choices we recommend are the ones that stay current — neutral painted cabinets with wood islands, clean hardware lines, timeless layouts, and solid wood construction that a future home inspector will appreciate as much as you do.",
      ],
    },

    faqs: [
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
      "Cabinet Refacing in Wildwood, MO",
    metaDescription:
      "Cabinet refacing for Wildwood, MO homes. Keep your quality cabinet boxes; get handcrafted new doors, drawer fronts, and custom finishes from a family-owned St. Louis shop. Call (314) 437-9988.",

    heroEyebrow: "Serving Wildwood, MO",
    heroTitle: "Cabinet Refacing in Wildwood, Missouri",
    heroSubtitle:
      "A full kitchen update without the full-remodel disruption. Handcrafted new doors, drawer fronts, and custom finishes — built in our St. Louis shop, tailored to your home.",

    intro: [
      "Wildwood homes — especially those built in the late 1990s and early 2000s along Highway 100 and the wooded lots near Babler State Park — were often built with surprisingly good cabinet boxes. What's usually dated is what you actually see: oak doors that haven't aged well, brass hardware from a different era, or a finish that's been through two kids and a dog.",
      "Cabinet refacing replaces everything visible — doors, drawer fronts, end panels, hardware — while keeping the structural boxes that still work. For most Wildwood kitchens, that's the smart call: a transformed look without the waste or disruption of a full tear-out.",
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
            "You receive a written design plan with every door style, wood, finish, and hardware choice specified. No loose ends — what you approve is exactly what we build.",
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
          "We check box condition during the initial assessment, so major issues are identified before we start. If we find unexpected damage during installation, we pause, walk you through it, and agree on an approach before moving forward.",
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

  // ---------------------------------------------------------------
  // CLAYTON — CABINET REFACING
  // ---------------------------------------------------------------
  {
    city: "Clayton",
    citySlug: "clayton",
    service: "Cabinet Refacing",
    serviceSlug: "cabinet-refacing",
    state: "Missouri",
    stateAbbr: "MO",
    county: "St. Louis County",
    coordinates: { latitude: "38.6425", longitude: "-90.3235" },

    metaTitle:
      "Cabinet Refacing in Clayton, MO",
    metaDescription:
      "Cabinet refacing for Clayton, MO homes. Handcrafted solid-wood doors, drawer fronts, and finishes — designed to match the character of Clayton's Tudor, Colonial, and mid-century homes. Family-owned since 1985. Free consultation: (314) 437-9988.",

    heroEyebrow: "Serving Clayton, MO",
    heroTitle: "Cabinet Refacing in Clayton, Missouri",
    heroSubtitle:
      "A kitchen update that respects your home's architecture — handcrafted new doors, drawer fronts, and custom finishes, installed in about a week.",

    intro: [
      "Clayton homes have character. Whether you live in a 1920s Tudor near Wydown, a Colonial off Forsyth, a mid-century ranch closer to Brentwood, or a more recent build in University Heights, the architecture matters — and the kitchen needs to belong to the rest of the house. Refacing is often the best way to update an older Clayton kitchen because it preserves the existing layout (which is usually intentional in these homes) while giving you a chance to choose door styles and finishes that genuinely fit your home's era.",
      "We've refaced kitchens in Clayton homes spanning nearly a century of architectural styles. The common thread is matching what's already there — replicating trim profiles, stain colors, and door details so the refaced kitchen reads as original rather than retrofit. For Clayton's older homes especially, that detail work is what separates a refacing project that looks great from one that looks generic.",
      "Cabinet boxes in established Clayton homes tend to be well-built — solid plywood or hardwood frames designed to last. What's usually dated is the visible surface: oak doors from a 1980s update, painted cabinetry that's chipping, or brass hardware from an era that's cycled out. Refacing replaces all of that while keeping the structural work you already have.",
    ],

    included: {
      heading: "What a Clayton Refacing Project Includes",
      items: [
        {
          title: "Solid Wood Doors in Your Style",
          description:
            "Every door is built in our shop from real hardwood — maple, oak, cherry, walnut, hickory, or painted-grade maple — in the profile that fits your home's era. Raised panel for Tudor and Colonial; shaker for transitional; slab for mid-century or contemporary.",
        },
        {
          title: "Matching Drawer Fronts and Optional Boxes",
          description:
            "Drawer fronts match the new doors. If the original drawer boxes are tired, we can replace them with dovetailed hardwood boxes and soft-close glides during the same visit — a common upgrade in older Clayton kitchens where the original drawers have seen a few decades of use.",
        },
        {
          title: "Veneered Cabinet Surfaces",
          description:
            "End panels, face frames, and exposed cabinet sides are covered in a wood veneer matched to your new doors. The finished kitchen reads as fully new on every visible surface.",
        },
        {
          title: "Period-Appropriate Hardware Options",
          description:
            "Soft-close concealed hinges come standard. For visible hardware — pulls and knobs — we help you select finishes and styles that complement your home's era: unlacquered brass for traditional homes, brushed nickel for transitional, matte black for contemporary.",
        },
        {
          title: "Trim and Profile Matching",
          description:
            "Where your existing crown molding, base trim, or other millwork matters, we match it. This is especially important in older Clayton homes where the cabinetry needs to read as part of the architectural fabric, not separate from it.",
        },
        {
          title: "Shop-Applied Finish",
          description:
            "All staining and painting happens in our climate-controlled shop, not in your home. Clayton homes — especially condos and historic properties with shared walls or HOA considerations — don't deal with on-site fumes, dust, or finishing-day disruption.",
        },
      ],
    },

    whyChooseUs: {
      heading: "Why Clayton Homeowners Reface with Us",
      reasons: [
        {
          title: "Comfortable with Older Home Construction",
          description:
            "We've worked on Clayton kitchens in homes from the 1920s through current builds. We know how older cabinet boxes are built, where they tend to have quirks, and how to match the architectural detailing that makes Clayton homes feel like Clayton homes.",
        },
        {
          title: "About One Week On-Site",
          description:
            "Most Clayton refacing projects install in 5–7 business days. For homeowners juggling commutes downtown, kids in Clayton schools, or remote work, that short timeline matters.",
        },
        {
          title: "Local Shop, Hand-Built",
          description:
            "Every door, veneer, and drawer front is built in our St. Louis-area workshop. No catalog ordering, no offshore manufacturing — which means we can match the specific stain, profile, or hardware your home actually needs rather than the closest stock option.",
        },
        {
          title: "Honest About Scope",
          description:
            "If your cabinet boxes aren't a good candidate for refacing — water damage, structural issues, poor original construction — we'll tell you and recommend a full remodel instead. We'd rather lose the project than do work that doesn't deserve the boxes underneath.",
        },
        {
          title: "Family-Owned Since 1985",
          description:
            "Four decades in St. Louis means we've watched Clayton kitchens age — what holds up, what doesn't, what looks dated in ten years vs. what stays current. That perspective shapes the recommendations we make.",
        },
      ],
    },

    process: {
      heading: "The Clayton Refacing Process",
      steps: [
        {
          title: "In-Home Assessment",
          description:
            "We come to your Clayton home, measure every cabinet, evaluate the structural condition of the boxes, and talk through what you want changed. We bring physical samples — door styles, wood species, stain and paint chips, hardware — so you can see them in your kitchen lighting before committing.",
        },
        {
          title: "Design and Detailed Plan",
          description:
            "Within a few days you receive a written plan with every door style, dimension, finish, hardware choice, and add-on specified down to the detail. Once you sign off, that documented scope is exactly what we build.",
        },
        {
          title: "Shop Build",
          description:
            "Your doors, drawer fronts, veneers, and any added pieces are built and finished in our climate-controlled shop. Each piece is labeled by cabinet and staged for installation day. Build typically runs 2–4 weeks depending on scope.",
        },
        {
          title: "Installation in Clayton",
          description:
            "Our installers arrive with everything pre-built. Old doors come off, veneers go onto box exteriors, new doors and drawer fronts mount, hardware installs. We work cleanly — important in Clayton's older homes and condos — and the kitchen is wrapped in 5–7 business days.",
        },
      ],
    },

    considerations: {
      heading: "Refacing for Clayton's Architectural Mix",
      content: [
        "Clayton's housing stock spans roughly a century of architectural styles, and the refacing approach changes depending on the home. For Tudor and Colonial homes (often near Wydown, Hi-Pointe, and DeMun), we typically recommend traditional raised-panel doors in stained hardwood with brass or unlacquered hardware — the look that ties back to the home's era. For mid-century ranches and contemporary builds, slab or shaker doors in painted finishes or walnut work better. For Clayton's many transitional builds and condos, shaker in painted maple is the most common choice.",
        "The other consideration in Clayton is that many homes have substantial existing millwork — wide casing, picture rails, period trim. The refaced kitchen should feel like part of that detailing, not a contrasting island. We pay particular attention to trim matching, crown molding, and stain colors in Clayton projects, because the homes themselves demand that level of integration.",
      ],
    },

    faqs: [
      {
        question: "Can refacing work in a Clayton home built in the 1920s or earlier?",
        answer:
          "In most cases, yes. Older Clayton homes tend to have well-built cabinet boxes — solid hardwood frames designed to last. We check each box during the assessment; if the structural integrity is intact (which is usually the case in homes from this era), refacing is often the ideal update. The challenge in older homes is usually matching the surrounding architectural details, which is something we specifically pay attention to in Clayton projects.",
      },
      {
        question: "Can you match the existing trim and millwork in my Clayton home?",
        answer:
          "Yes — this is one of the things we focus on most in Clayton specifically. We match crown molding profiles, casing details, stain colors, and door styling so the refaced kitchen reads as part of the home rather than a retrofit. Bring photos or physical samples of trim in adjacent rooms to the consultation and we'll show you how we approach matching.",
      },
      {
        question: "I live in a Clayton condo — does refacing still make sense?",
        answer:
          "Often yes. Condo kitchens typically have smaller cabinet counts, and the constrained on-site timeline of refacing — 5–7 business days vs. 2–3 weeks for full replacement — works well in condos with HOA considerations, shared elevators, and neighbor proximity. We've done refacing projects in several Clayton condos and understand the building-management coordination they require.",
      },
      {
        question: "How long does the entire process take from first call to finished kitchen?",
        answer:
          "Most Clayton refacing projects run 4–6 weeks total: 1–2 weeks from initial consultation to approved design, 2–4 weeks for shop build, and 5–7 business days on-site for installation. Your kitchen is fully usable for most of that time — only the on-site installation week affects daily routine, and even then we install in sections so you typically keep access to your sink and at least some storage.",
      },
    ],

    testimonial: {
      quote:
        "Pro Wood Interiors are fantastic to work with. The level of expertise and professionalism is second to none. I would highly recommend David and his staff to anyone looking to do renovations to their home. Looking forward to working with David on our next project.",
      author: "Doug Uthoff",
    },

    galleryProjects: ["Kitchen Cabinet Refacing"],
    galleryImageRange: { start: 4, count: 8 },
  },

  // ---------------------------------------------------------------
  // CLAYTON — KITCHEN REMODELING
  // ---------------------------------------------------------------
  {
    city: "Clayton",
    citySlug: "clayton",
    service: "Kitchen Remodeling",
    serviceSlug: "kitchen-remodeling",
    state: "Missouri",
    stateAbbr: "MO",
    county: "St. Louis County",
    coordinates: { latitude: "38.6425", longitude: "-90.3235" },

    metaTitle:
      "Kitchen Remodeling in Clayton, MO | Custom Design & Cabinetry",
    metaDescription:
      "Full-scope kitchen remodeling in Clayton, MO. Custom cabinets and design that honor the character of Clayton's Tudor, Colonial, and mid-century homes. Family-owned since 1985. Free consultation: (314) 437-9988.",

    heroEyebrow: "Serving Clayton, MO",
    heroTitle: "Kitchen Remodeling in Clayton, Missouri",
    heroSubtitle:
      "Custom kitchens designed for Clayton's homes — from 1920s Tudors and Colonials to mid-century ranches and contemporary builds. Handcrafted by a local shop that's been here since 1985.",

    intro: [
      "Clayton kitchens come with constraints — and opportunities — that other parts of the St. Louis metro don't share. Many of these homes were built before the open-concept era; kitchens are often smaller, more enclosed, and connected to the rest of the home through formal architectural transitions. A successful Clayton kitchen remodel honors that character rather than fighting it, while solving the storage, workflow, and entertaining problems modern families actually have.",
      "We design full-scope kitchens for Clayton homes spanning every era. For Tudor and Colonial homes, we lean into traditional detailing — raised panel cabinets, period-appropriate hardware, generous trim work. For mid-century ranches, we work with the home's existing horizontal lines and lean into walnut, cherry, or painted slab styles. For more recent transitional builds and condos, we design clean shaker kitchens that work for both daily life and entertaining.",
      "A full remodel is the right call when your existing layout fights you, when the cabinet boxes themselves are failing, or when you want to open the kitchen into adjacent rooms — something that's especially common in Clayton's older homes where the original kitchen was sized for a different era of cooking and entertaining. If you're not sure whether your kitchen needs a full remodel or whether refacing would do, we'll walk through both options during the consultation and give you an honest read.",
    ],

    included: {
      heading: "What a Full Clayton Kitchen Remodel Includes",
      items: [
        {
          title: "Layout and Design",
          description:
            "We design the kitchen for how you actually use it — which often means reconfiguring the layout, removing a wall to connect to an adjacent room, repositioning the island, or rebuilding the pantry. In older Clayton homes, this is frequently the most impactful part of the project.",
        },
        {
          title: "Custom Cabinetry, Built to Match Your Home",
          description:
            "Every cabinet is built to your exact dimensions in our shop, in a door style and wood species that fits your home's character. Drawer interiors, roll-outs, appliance panels, and storage configurations are all designed around what you actually need.",
        },
        {
          title: "Islands, Pantries, and Workflow Design",
          description:
            "Even when Clayton kitchens are smaller, the elements still matter — a thoughtfully sized island for seating and prep, a pantry that handles a serious grocery run, a coffee or beverage station that keeps guests out of the cooking flow.",
        },
        {
          title: "Architectural Integration",
          description:
            "Clayton homes typically have substantial existing millwork — wide casing, picture rails, period trim. The kitchen's cabinetry needs to belong to that detailing, not contrast with it. We match crown profiles, base trim, and stain colors so the new kitchen reads as part of the home.",
        },
        {
          title: "Appliance Integration",
          description:
            "Panel-ready refrigerators, custom hood surrounds, built-in microwaves and ovens — all detailed to look intentional rather than bolted on after the fact. For period-appropriate kitchens, we work hard to make modern appliances feel quiet within traditional cabinetry.",
        },
        {
          title: "Trade Coordination",
          description:
            "We manage the cabinetry scope and coordinate the electricians, plumbers, countertop fabricators, and any structural trades. In Clayton's tighter urban footprint — especially condos — that coordination is critical to keeping the project on schedule.",
        },
      ],
    },

    whyChooseUs: {
      heading: "Why Clayton Families Choose Us for Kitchen Remodels",
      reasons: [
        {
          title: "Designed for Clayton Architecture",
          description:
            "We don't import generic kitchen designs into Clayton homes. The kitchens we build for Clayton homeowners honor the era and architecture of each house — Tudor, Colonial, mid-century, contemporary — rather than imposing a single template.",
        },
        {
          title: "Built by Hand, Locally",
          description:
            "Every cabinet, island, pantry, and built-in is designed and built in our St. Louis workshop. No catalog cabinets, no imported components. The fit, finish, and detailing match the level of work Clayton homes deserve.",
        },
        {
          title: "One Point of Contact",
          description:
            "You work with the same person from the first consultation through the final walkthrough. Every question, change, and update flows through one relationship — not a rotating cast of project managers.",
        },
        {
          title: "Trade Coordination in Tight Spaces",
          description:
            "Clayton homes — especially condos and older houses on smaller lots — often present logistical challenges around demo, deliveries, and trade staging. We've handled enough Clayton projects to know how to manage the building, the trades, and the neighbors.",
        },
        {
          title: "Designs That Hold Up",
          description:
            "We've built kitchens since 1985 and watched how four decades of designs have aged. Our recommendations favor choices that stay current: neutral painted cabinetry with wood accents, clean hardware lines, period-appropriate detailing in older homes, and solid wood construction throughout.",
        },
      ],
    },

    process: {
      heading: "Our Kitchen Remodel Process in Clayton",
      steps: [
        {
          title: "Consultation and Home Visit",
          description:
            "We visit your Clayton home, measure the existing kitchen, and spend time understanding how your family uses the space. For older homes especially, this includes assessing structural realities — load-bearing walls, plumbing routes, electrical capacity — that will shape what the remodel can and can't change.",
        },
        {
          title: "Design and Selections",
          description:
            "We develop detailed layout plans (often including structural changes), specify every door style, wood species, finish, hardware choice, and cabinet configuration. We walk through it all with you, and nothing moves forward until you're confident in the plan.",
        },
        {
          title: "Shop Build (6–8 Weeks)",
          description:
            "Your cabinetry is built by hand in our St. Louis shop. You're welcome to visit and watch the work in progress — for many Clayton clients, that's one of the most satisfying parts of the project.",
        },
        {
          title: "Installation and Trade Coordination (2–3 Weeks)",
          description:
            "Installation typically runs 2–3 weeks on-site and includes coordinating with countertop fabricators, appliance delivery, plumbing, electrical, and any structural trades. In Clayton condos and tight urban lots, we manage the building-side logistics — elevator scheduling, debris hauling, neighbor courtesy — that those projects require.",
        },
      ],
    },

    considerations: {
      heading: "What Makes a Clayton Kitchen Remodel Different",
      content: [
        "Clayton homes ask a lot of their kitchens, so we design for the long view: timeless choices that will look current in fifteen years, materials that hold up to daily use, and finish work that an inspector or buyer's agent will notice on a walkthrough.",
        "The other reality of Clayton remodels is that the homes themselves often dictate the design vocabulary. A 1925 Tudor in Wydown demands different cabinetry than a 1960s ranch off Topton Way, which is different again from a contemporary condo near downtown Clayton. We don't push a house style toward our preferences — we design the kitchen the house wants, then make it work brilliantly for how your family lives.",
      ],
    },

    faqs: [
      {
        question: "How long does a Clayton kitchen remodel take?",
        answer:
          "Most projects run 10–14 weeks from design approval to final walkthrough: 2–3 weeks for design finalization, 6–8 weeks for cabinet build in our shop, and 2–3 weeks for on-site installation and trade coordination. Older Clayton homes occasionally take slightly longer when unexpected structural or mechanical issues surface during demo.",
      },
      {
        question: "Can you work in Clayton homes with historic preservation considerations?",
        answer:
          "Yes — we have experience working in older Clayton homes where preserving architectural character is part of the brief. We can replicate period detailing, match existing millwork, and design kitchens that respect the home's era while incorporating modern functionality. If your home is in a designated historic district, we'll coordinate any required reviews during the design phase.",
      },
      {
        question: "Do you handle Clayton condo kitchen remodels?",
        answer:
          "We do. Condo remodels in Clayton come with their own coordination requirements — HOA approvals, elevator scheduling, debris management, neighbor courtesy — and we've handled enough of them to know what each building expects. Bring your HOA's remodel guidelines to the consultation and we'll walk through what they'll require from the project.",
      },
      {
        question: "Will I need permits for a Clayton kitchen remodel?",
        answer:
          "It depends on scope. Like-for-like cabinet replacement usually doesn't require a permit. Moving walls, changing plumbing routes, altering electrical loads, or making structural changes does. Clayton's permitting process is straightforward; we identify the requirements during design and either pull permits ourselves or coordinate with the trades responsible.",
      },
      {
        question: "Can I stay in my Clayton home during the remodel?",
        answer:
          "Most clients do. We set up a temporary kitchen workspace (often in a dining room, basement, or finished room), and the on-site work is concentrated into a 2–3 week window. Expect to use grills, microwaves, and restaurants more than usual during that stretch — Clayton makes that easy — but the home stays livable throughout.",
      },
    ],

    testimonial: {
      quote:
        "Led by Dave Portell, ProWood Interiors is absolutely the best, most professional, and expert group of wood craftspersons around. Our experience with them was outstanding, from start to finish. Dave and his group are wood artists, and they were exacting in their manufacture and installation.",
      author: "Rich & Kathy Bucholz",
    },

    galleryProjects: [
      "Quartzite Luxury Kitchen",
      "White Cabinet Kitchen",
      "Blue Island",
    ],
    galleryImageRange: { start: 0, count: 8 },
  },

  // ---------------------------------------------------------------
  // KIRKWOOD — CABINET REFACING
  // ---------------------------------------------------------------
  {
    city: "Kirkwood",
    citySlug: "kirkwood",
    service: "Cabinet Refacing",
    serviceSlug: "cabinet-refacing",
    state: "Missouri",
    stateAbbr: "MO",
    county: "St. Louis County",
    coordinates: { latitude: "38.5834", longitude: "-90.4068" },

    metaTitle: "Cabinet Refacing in Kirkwood, MO",
    metaDescription:
      "Cabinet refacing for Kirkwood, MO homes. Handcrafted solid-wood doors, drawer fronts, and finishes designed to fit Kirkwood's older, characterful homes. Family-owned since 1985. Free consultation: (314) 437-9988.",

    heroEyebrow: "Serving Kirkwood, MO",
    heroTitle: "Cabinet Refacing in Kirkwood, Missouri",
    heroSubtitle:
      "Renew an older kitchen without losing the home's character — handcrafted new doors, drawer fronts, and custom finishes, installed in about a week.",

    intro: [
      "Kirkwood's older homes were often built with cabinetry that's still structurally sound — solid frames, properly mounted, with layouts that suited the era. What's usually dated is the face: worn oak doors, a finish that's seen decades of use, hardware from a different generation. For a Craftsman bungalow near the train depot or a mid-century home off Geyer Road, cabinet refacing is frequently the smartest update — it renews everything you see while keeping the sound structure and the original footprint.",
      "Instead of tearing out functional cabinetry, we replace the visible parts: new solid-wood doors, matching drawer fronts, a veneer over the exposed box surfaces, and upgraded hardware. In an older Kirkwood home, that approach has a real advantage — it preserves the kitchen's relationship to the rest of the house while bringing the look thoroughly up to date.",
      "We've refaced cabinets in homes across Kirkwood, and the detail that matters most here is matching: replicating trim profiles, stain colors, and door styles so the refaced kitchen reads as original to the home rather than retrofitted. That's the difference between a refacing project that looks great in a historic home and one that looks generic.",
    ],

    included: {
      heading: "What a Kirkwood Refacing Project Includes",
      items: [
        {
          title: "Solid Wood Doors in Your Home's Style",
          description:
            "Every door is built in our shop from real hardwood — oak, maple, cherry, walnut, or hickory — in a profile that suits your home's era. Raised panel for traditional and Craftsman homes; shaker or slab for mid-century and transitional.",
        },
        {
          title: "Matching Drawer Fronts and Optional Boxes",
          description:
            "Drawer fronts match the new doors. Where the original drawer boxes have worn out — common in older Kirkwood kitchens — we can replace them with dovetailed hardwood boxes and soft-close glides during the same visit.",
        },
        {
          title: "Veneered Cabinet Surfaces",
          description:
            "Exposed cabinet sides, end panels, and face frames are covered in a wood veneer matched to your new doors, so every visible surface reads as fully new.",
        },
        {
          title: "Trim and Millwork Matching",
          description:
            "Where your home has original crown molding, casing, or other millwork, we match it — essential in Kirkwood homes where the kitchen needs to belong to the home's architectural fabric.",
        },
        {
          title: "New Hardware and Soft-Close Hinges",
          description:
            "Concealed soft-close hinges come standard. You choose the pulls and knobs, and we'll help select finishes that suit your home's period — from traditional brass to clean modern lines.",
        },
        {
          title: "Shop-Applied Finish",
          description:
            "Every door and front is finished in our climate-controlled shop before it arrives, so your home never deals with the fumes or dust of on-site refinishing.",
        },
      ],
    },

    whyChooseUs: {
      heading: "Why Kirkwood Homeowners Reface with Us",
      reasons: [
        {
          title: "Comfortable in Older Homes",
          description:
            "We've worked in Kirkwood homes spanning a century of styles. We know how older cabinet boxes are built, where they hide their quirks, and how to match the detailing that makes these homes feel like Kirkwood homes.",
        },
        {
          title: "We Match What's Already There",
          description:
            "Replicating trim profiles, stain colors, and door styles is central to how we reface older kitchens — so the result looks original, not retrofitted.",
        },
        {
          title: "About One Week On-Site",
          description:
            "Most Kirkwood refacing projects install in 5–7 business days. The kitchen stays mostly usable throughout, and your routine barely changes.",
        },
        {
          title: "Built in Our Local Shop",
          description:
            "Every door, veneer, and drawer front is crafted in our St. Louis-area workshop — which is why we can match a specific stain or profile rather than settle for the closest stock option.",
        },
        {
          title: "Honest Assessment First",
          description:
            "If your boxes aren't a good candidate for refacing — water damage, structural issues — we'll tell you directly and recommend a full remodel instead. We'd rather lose the project than install new doors on bad boxes.",
        },
      ],
    },

    process: {
      heading: "The Kirkwood Refacing Process",
      steps: [
        {
          title: "In-Home Assessment",
          description:
            "We visit your Kirkwood home, measure every cabinet, check the condition of the boxes, and talk through what you want to change. We bring door samples, wood species, finishes, and hardware so you can see them in your own kitchen lighting.",
        },
        {
          title: "Design and Detailed Proposal",
          description:
            "Within a few days you receive a written plan with every door style, dimension, finish, and hardware choice specified — including any trim matching. Once you approve it, that's exactly what we build.",
        },
        {
          title: "Shop Build",
          description:
            "Your doors, drawer fronts, veneers, and any added pieces are built and finished by hand in our shop, then labeled by cabinet and staged for installation day.",
        },
        {
          title: "On-Site Installation",
          description:
            "Our installers arrive with everything pre-built. Old doors come off, boxes are veneered, new doors and hardware go on, and we clean up before leaving. Most on-site work wraps in 5–7 business days.",
        },
      ],
    },

    considerations: {
      heading: "Refacing for Kirkwood's Older Homes",
      content: [
        "Refacing is almost always the right call when your cabinet boxes are structurally sound and you like the existing layout — which, in older Kirkwood homes, is frequently the case. These homes were often built with quality boxes and a thoughtful kitchen footprint; what they need is a fresh face and modern hardware, not a tear-out.",
        "Where refacing isn't the answer: if you want to change the layout, open the kitchen to an adjacent room, or replace boxes that are water-damaged or poorly built. For those projects, a full kitchen remodel makes more sense, and we build those too. If we visit and refacing isn't what your home needs, we'll say so rather than sell you on it.",
      ],
    },

    faqs: [
      {
        question: "Can refacing work in an older Kirkwood home?",
        answer:
          "In most cases, yes. Older Kirkwood homes tend to have well-built cabinet boxes worth keeping. We check each box during the assessment; if the structure is intact, refacing is often the ideal update. The real craft in these homes is matching the surrounding architectural details — something we pay particular attention to in Kirkwood projects.",
      },
      {
        question: "Can you match the original trim and woodwork in my home?",
        answer:
          "Yes — this is one of the things we focus on most in Kirkwood. We match crown profiles, casing, stain colors, and door styling so the refaced kitchen reads as part of the home rather than a renovation. Bring photos or samples of trim in adjacent rooms to the consultation.",
      },
      {
        question: "How long will the project take from first call to finished kitchen?",
        answer:
          "Most Kirkwood refacing projects run about 4–6 weeks total: a week or two from consultation to approved design, a couple of weeks for the shop build, and 5–7 business days on-site for installation. The kitchen stays usable for most of that time.",
      },
      {
        question: "Can I change the wood or color entirely?",
        answer:
          "Absolutely, and most clients do. You can go from oak to painted, from brass hardware to matte black, from raised-panel to shaker. Refacing is about reimagining the look — within whatever style suits your home's character.",
      },
    ],

    testimonial: {
      quote:
        "Dave is a true professional. He shows up on time, makes recommendations, cleans up, and honors his bids. It is refreshing to call your contractor and they PICK UP THE PHONE! I would recommend Dave to anyone seeking custom cabinets or refacing done.",
      author: "Jerry M.",
    },

    galleryProjects: ["Kitchen Cabinet Refacing"],
    galleryImageRange: { start: 2, count: 8 },
  },

  // ---------------------------------------------------------------
  // KIRKWOOD — KITCHEN REMODELING
  // ---------------------------------------------------------------
  {
    city: "Kirkwood",
    citySlug: "kirkwood",
    service: "Kitchen Remodeling",
    serviceSlug: "kitchen-remodeling",
    state: "Missouri",
    stateAbbr: "MO",
    county: "St. Louis County",
    coordinates: { latitude: "38.5834", longitude: "-90.4068" },

    metaTitle: "Kitchen Remodeling in Kirkwood, MO | Custom Design & Cabinetry",
    metaDescription:
      "Full-scope kitchen remodeling in Kirkwood, MO. Custom cabinets and design that honor the character of Kirkwood's historic and mid-century homes. Family-owned since 1985. Free consultation: (314) 437-9988.",

    heroEyebrow: "Serving Kirkwood, MO",
    heroTitle: "Kitchen Remodeling in Kirkwood, Missouri",
    heroSubtitle:
      "Full-scope custom kitchens designed for Kirkwood's older homes — opening them up for modern life while honoring the character that drew you to the house.",

    intro: [
      "Many of Kirkwood's homes were built before the open-concept era, with kitchens that were tucked away, walled off, and sized for a different way of cooking and entertaining. A successful Kirkwood kitchen remodel solves that — opening the space up, reworking the flow, adding the storage and seating modern families need — while respecting the home's architecture rather than fighting it.",
      "A full remodel is the right call when the existing layout works against you, when the cabinets themselves are failing, or when you want to connect the kitchen to an adjacent dining or family room. In older Kirkwood homes, that often means thoughtful structural work, careful trim matching, and cabinetry detailed to suit the home's era — Craftsman, traditional, or mid-century.",
      "We design and build the cabinetry, islands, pantries, and finish carpentry in our own shop. For plumbing, electrical, flooring, and countertops, we coordinate with trade partners we've worked with for years, so the project stays on schedule and the quality stays consistent throughout.",
    ],

    included: {
      heading: "What a Full Kitchen Remodel Includes",
      items: [
        {
          title: "Layout and Design",
          description:
            "We design the kitchen around how you actually live — which in older Kirkwood homes often means removing a wall, reworking the flow, or repositioning the island to connect the kitchen to the rest of the home.",
        },
        {
          title: "Custom Cabinetry Built to Match Your Home",
          description:
            "Every cabinet is built to your exact dimensions in our shop, in a door style and wood species suited to your home's era. Drawer interiors, roll-outs, and appliance panels are all designed around what you actually store.",
        },
        {
          title: "Islands, Pantries, and Workflow",
          description:
            "A thoughtfully sized island for prep and seating, a pantry that handles a real grocery run, a beverage or coffee station that keeps guests clear of the cooking zone — all designed for the way your household uses the kitchen.",
        },
        {
          title: "Architectural Integration",
          description:
            "Kirkwood homes often have substantial original millwork. We match crown profiles, casing, and stain colors so the new kitchen belongs to the home's detailing rather than contrasting with it.",
        },
        {
          title: "Appliance Integration",
          description:
            "Panel-ready refrigerators, custom hood surrounds, built-in ovens and microwaves — detailed to look intentional, with modern appliances kept quiet inside period-appropriate cabinetry.",
        },
        {
          title: "Shop Finish and Trade Coordination",
          description:
            "All cabinetry is finished in our shop and installed by our own crew. We coordinate the electricians, plumbers, and countertop fabricators so you're not chasing separate contractors.",
        },
      ],
    },

    whyChooseUs: {
      heading: "Why Kirkwood Families Choose Us for Kitchen Remodels",
      reasons: [
        {
          title: "Designed for Kirkwood Architecture",
          description:
            "We don't import a generic design into a historic home. The kitchens we build for Kirkwood honor the era of each house — Craftsman, traditional, mid-century — rather than imposing one template.",
        },
        {
          title: "Comfortable Opening Up Older Homes",
          description:
            "Connecting a closed-off older kitchen to the rest of the house takes care with structure and detailing. We've done it many times in homes like Kirkwood's, and we plan the structural realities up front.",
        },
        {
          title: "Built by Hand, Locally",
          description:
            "Every cabinet, island, and built-in is designed and built in our St. Louis shop. No catalog cabinets, no imported components — fit and finish that older homes deserve.",
        },
        {
          title: "One Point of Contact",
          description:
            "You work with the same person from first visit to final walkthrough. Questions get answered quickly and nothing falls through the cracks between trades.",
        },
        {
          title: "Designs That Hold Up",
          description:
            "We've built kitchens since 1985 and watched how four decades of designs have aged. We favor choices that stay current and construction that lasts.",
        },
      ],
    },

    process: {
      heading: "Our Kitchen Remodel Process in Kirkwood",
      steps: [
        {
          title: "Consultation and Home Visit",
          description:
            "We visit your Kirkwood home, measure the existing kitchen, and spend time understanding how you cook and entertain. In older homes, this includes assessing structural realities — load-bearing walls, plumbing routes, electrical capacity — that shape what the remodel can change.",
        },
        {
          title: "Design and Selections",
          description:
            "We develop detailed layout plans (often including structural changes), specify every door style, wood species, finish, hardware choice, and cabinet configuration, and walk through it all with you. Nothing moves forward until you're confident.",
        },
        {
          title: "Cabinet Build in Our Shop (6–8 Weeks)",
          description:
            "Your cabinetry is built by hand in our St. Louis shop. You're welcome to visit and watch the work in progress — for many clients, that's a highlight of the project.",
        },
        {
          title: "Installation and Finish (2–3 Weeks)",
          description:
            "Installation typically takes 2–3 weeks on-site and includes coordinating the countertop template, appliance delivery, plumbing, and electrical. We're there until the last piece of crown molding is in and you've signed off.",
        },
      ],
    },

    considerations: {
      heading: "What Makes a Kirkwood Kitchen Remodel Different",
      content: [
        "Kirkwood homes ask their kitchens to do something tricky: feel modern and open while still belonging to a house built decades ago. We design for that balance — opening sightlines and improving flow without stripping away the trim, proportions, and detailing that give these homes their character. The cabinetry vocabulary follows the house, whether that's a Craftsman bungalow or a 1960s ranch.",
        "We also design for the long view. Kirkwood is a community where people stay in their homes, so our recommendations favor timeless choices — neutral painted cabinetry with wood accents, clean hardware, period-appropriate detailing, and solid wood construction — that will look current in fifteen years and hold up to daily use the whole time.",
      ],
    },

    faqs: [
      {
        question: "Can you open up a closed-off kitchen in an older Kirkwood home?",
        answer:
          "Yes — it's one of the most common requests we get in Kirkwood. Connecting an older, walled-off kitchen to an adjacent dining or family room takes care with load-bearing walls, plumbing, and electrical, all of which we assess during design. We then design cabinetry and trim so the opened-up space still feels like part of the original home.",
      },
      {
        question: "How long does a Kirkwood kitchen remodel take?",
        answer:
          "Most projects run 10–14 weeks from design approval to final walkthrough: 2–3 weeks for design finalization, 6–8 weeks for the cabinet build, and 2–3 weeks for installation and trade coordination. Older homes occasionally take a little longer if unexpected structural or mechanical issues surface during demo.",
      },
      {
        question: "Will you match the existing millwork in my home?",
        answer:
          "Yes — matching crown profiles, casing, trim, and stains is a core part of how we work in Kirkwood. Bring photos or samples of the woodwork in adjacent rooms and we'll design the kitchen to feel original to the house.",
      },
      {
        question: "Do you handle demolition and the other trades?",
        answer:
          "We manage the cabinetry build and installation, and coordinate trade partners for demo, plumbing, electrical, flooring, and countertops. You get one point of contact for the cabinetry and a coordinated handoff between trades.",
      },
      {
        question: "Can I stay in my home during the remodel?",
        answer:
          "Most clients do. We set up a temporary kitchen workspace, and the on-site work is concentrated into a 2–3 week window. Expect more grilling and takeout than usual during that stretch, but the home stays livable throughout.",
      },
    ],

    testimonial: {
      quote:
        "Dave was very courteous and did an amazing job on my kitchen. The transformation of the cabinets was night and day, and he was very patient with all of our decisions. He made a dull kitchen into our dream kitchen. His team worked hard, took care with their craft, and cleaned up every time. This is craftsmanship at its best.",
      author: "Kelly Cook",
    },

    galleryProjects: ["Vintage Kitchen", "Darkwood Kitchen"],
    galleryImageRange: { start: 0, count: 8 },
  },

  // ---------------------------------------------------------------
  // BALLWIN — CABINET REFACING
  // ---------------------------------------------------------------
  {
    city: "Ballwin",
    citySlug: "ballwin",
    service: "Cabinet Refacing",
    serviceSlug: "cabinet-refacing",
    state: "Missouri",
    stateAbbr: "MO",
    county: "St. Louis County",
    coordinates: { latitude: "38.5950", longitude: "-90.5462" },

    metaTitle: "Cabinet Refacing in Ballwin, MO",
    metaDescription:
      "Cabinet refacing for Ballwin, MO homes. Keep your sound cabinet boxes; get handcrafted new doors, drawer fronts, and finishes from a family-owned St. Louis shop. Free consultation: (314) 437-9988.",

    heroEyebrow: "Serving Ballwin, MO",
    heroTitle: "Cabinet Refacing in Ballwin, Missouri",
    heroSubtitle:
      "A full kitchen update without the full-remodel disruption — handcrafted new doors, drawer fronts, and finishes, built in our local shop and installed in about a week.",

    intro: [
      "A huge share of Ballwin's homes were built from the 1970s through the 1990s — the subdivisions along Manchester Road, Clayton Road, and Kehrs Mill Road — and many of them share the same story: solid cabinet boxes topped with dated oak doors, worn finishes, and hardware from the decade they were built. That combination makes Ballwin one of the best places we work for cabinet refacing.",
      "Refacing replaces everything you see — doors, drawer fronts, exposed cabinet surfaces, and hardware — while keeping the structural boxes that still do their job. For the typical Ballwin kitchen with sound builder-grade boxes, it's the smart call: a complete visual transformation without the waste, cost, and disruption of a full tear-out.",
      "The shop build happens off-site, so the only real disruption is the on-site installation week. Most Ballwin refacing projects wrap in 5–7 business days on-site, and the finished kitchen looks brand new — often with better materials than the builder originally installed.",
    ],

    included: {
      heading: "What's Included in a Ballwin Refacing Project",
      items: [
        {
          title: "Handcrafted Solid Wood Doors",
          description:
            "Built in our shop from the hardwood you choose — oak, maple, cherry, walnut, or hickory. Real wood doors with hand-applied finish, not thermofoil overlays or laminates.",
        },
        {
          title: "Matching Drawer Fronts and Optional Boxes",
          description:
            "Drawer fronts match your new doors. If the original builder-grade drawer boxes are worn or don't close well — common in Ballwin homes — we can replace them with dovetailed hardwood boxes and soft-close glides during the same visit.",
        },
        {
          title: "Veneered Visible Surfaces",
          description:
            "Every exposed surface — cabinet ends, face frames, filler panels — gets a matching wood veneer so the kitchen reads as fully new.",
        },
        {
          title: "Soft-Close Hinges and Your Hardware",
          description:
            "Concealed soft-close hinges come standard. You pick the pulls and knobs in whatever finish ties the kitchen together.",
        },
        {
          title: "Family-Friendly Add-Ons",
          description:
            "Pull-out shelves, lazy Susans, trash pull-outs, under-cabinet lighting, and crown molding — practical upgrades that make a busy family kitchen work better while we're already on-site.",
        },
        {
          title: "Shop-Applied Finish",
          description:
            "Every door and front is finished in our climate-controlled shop, so your home avoids the fumes and dust of on-site refinishing.",
        },
      ],
    },

    whyChooseUs: {
      heading: "Why Ballwin Homeowners Choose Us for Refacing",
      reasons: [
        {
          title: "Experienced with Ballwin Construction",
          description:
            "We've refaced plenty of Ballwin kitchens. We know the box styles and face-frame standards of builds from the 70s through the 90s, and how to make builder-grade boxes look custom.",
        },
        {
          title: "One Week On-Site, Not One Month",
          description:
            "Most Ballwin refacing projects install in 5–7 business days. For families balancing school runs, work, and activities, that short timeline matters.",
        },
        {
          title: "Built Locally, Not Ordered In",
          description:
            "Every door, veneer, and drawer front is built in our St. Louis workshop — so we avoid the delivery delays, finish mismatches, and manufacturer defects that come with catalog orders.",
        },
        {
          title: "Honest Assessment First",
          description:
            "If your boxes aren't a good fit for refacing — water damage, warped frames, low-quality original construction — we'll say so and recommend a different path. New doors on bad boxes help no one.",
        },
        {
          title: "The Same Materials We Use in Custom Builds",
          description:
            "Our refacing work uses the same hardwoods, hardware, and finishes as our new-build kitchens. Same quality; different scope.",
        },
      ],
    },

    process: {
      heading: "Our Ballwin Refacing Process",
      steps: [
        {
          title: "On-Site Measure and Assessment",
          description:
            "We come to your Ballwin home, measure every cabinet, and check the condition of the boxes. If refacing is the right call, we walk you through door styles, wood species, finishes, and hardware right there at your counter.",
        },
        {
          title: "Design and Selections",
          description:
            "You receive a written design plan with every door style, wood, finish, and hardware choice specified. What you approve is exactly what we build.",
        },
        {
          title: "Shop Build and Finishing",
          description:
            "Your doors, drawer fronts, veneers, and any added pieces are built and finished by hand in our shop, then labeled by cabinet and staged for installation day.",
        },
        {
          title: "Installation — About a Week",
          description:
            "Installers arrive with everything pre-built. Old doors off, new doors on, boxes veneered, hardware installed, cleanup handled before we leave. Most on-site work wraps in 5–7 business days.",
        },
      ],
    },

    considerations: {
      heading: "Is Refacing the Right Choice for Your Ballwin Home?",
      content: [
        "Refacing is almost always the right call when your cabinet boxes are structurally solid, you like your kitchen layout, and you want the kitchen to feel new without the full-remodel disruption. For the many Ballwin homes built 25–50 years ago with decent box construction, that's a very common fit.",
        "Refacing isn't the right answer if you want to change the layout, move the island, or replace boxes that are damaged or poorly built. For those projects, a full kitchen remodel makes more sense — and we build those too. If we visit your home and refacing isn't what you need, we'll tell you directly rather than sell you on it.",
      ],
    },

    faqs: [
      {
        question: "Will refacing work on my builder-grade Ballwin cabinets?",
        answer:
          "Usually, yes — provided the boxes are structurally sound, which they often are in Ballwin homes from the 70s through the 90s. Refacing keeps the boxes and replaces everything you see: doors, fronts, veneer, and hardware. The result looks custom, even when the original cabinets were builder-grade. We confirm box condition during the assessment.",
      },
      {
        question: "How long will my kitchen be out of commission?",
        answer:
          "The shop build happens off-site, so the only disruption is the on-site installation week — typically 5–7 business days. We install in sections, so you generally keep access to your sink and at least some storage throughout.",
      },
      {
        question: "Can I change the color and add features while we're at it?",
        answer:
          "Absolutely — and most clients do. You can go from oak to painted white, swap brass for matte black, and add pull-out shelves, soft-close upgrades, crown molding, and under-cabinet lighting. It's the most efficient time to make those upgrades, since we're already on-site.",
      },
      {
        question: "Do you offer a warranty on refacing work?",
        answer:
          "Yes. Our refacing work comes with a written warranty on the doors, finishes, and hardware. We've been a local business since 1985, so if you ever need us back, we're easy to find.",
      },
    ],

    testimonial: {
      quote:
        "Very happy I found this company. They went above and beyond. They gave good advice and got the job done. I am a very satisfied customer — I wish I had found this company years ago.",
      author: "Beth C.",
    },

    galleryProjects: ["Kitchen Cabinet Refacing"],
    galleryImageRange: { start: 6, count: 8 },
  },

  // ---------------------------------------------------------------
  // BALLWIN — KITCHEN REMODELING
  // ---------------------------------------------------------------
  {
    city: "Ballwin",
    citySlug: "ballwin",
    service: "Kitchen Remodeling",
    serviceSlug: "kitchen-remodeling",
    state: "Missouri",
    stateAbbr: "MO",
    county: "St. Louis County",
    coordinates: { latitude: "38.5950", longitude: "-90.5462" },

    metaTitle: "Kitchen Remodeling in Ballwin, MO | Custom Cabinets & Design",
    metaDescription:
      "Full-scope kitchen remodeling in Ballwin, MO. Custom cabinets, islands, and layouts designed around busy family life. Built by hand in our local shop. Family-owned since 1985. Free consultation: (314) 437-9988.",

    heroEyebrow: "Serving Ballwin, MO",
    heroTitle: "Kitchen Remodeling in Ballwin, Missouri",
    heroSubtitle:
      "Full-scope custom kitchens designed around real family life — handcrafted by a local shop that's been building them since 1985.",

    intro: [
      "Ballwin's family homes — the two-stories and ranches built across the subdivisions off Manchester and Clayton Roads — were laid out for a different era of cooking and family life. A full kitchen remodel is the chance to fix the things that no longer work: the cramped layout, the closed-off floor plan, the cabinets that have run their course, the island that's too small for the way your family actually gathers.",
      "A full remodel is the right call when the existing layout fights you, when the cabinets themselves are failing, or when you want to open the kitchen into the family room. We design these kitchens around how busy households really use them — durable surfaces, smart storage, generous islands, and pantries that keep up with a full grocery run.",
      "We handle the cabinetry, islands, pantries, and finish carpentry in-house. For plumbing, electrical, flooring, and countertops, we coordinate with trade partners we've worked with for years — so the project stays on schedule and you're not managing five contractors at once.",
    ],

    included: {
      heading: "What a Full Kitchen Remodel Includes",
      items: [
        {
          title: "Layout and Design",
          description:
            "We design the kitchen to fit how your family actually lives — which often means reworking the layout, opening a wall to the family room, repositioning the island, or rebuilding the pantry.",
        },
        {
          title: "Custom Cabinetry Built to Your Space",
          description:
            "Every cabinet is built to your exact dimensions in our shop. Deep pot-and-pan drawers, roll-outs, appliance panels, and interior organization are all designed around what your family actually stores.",
        },
        {
          title: "Islands and Pantries",
          description:
            "An island sized for homework, prep, and weekend gatherings; a pantry built for a real family grocery run. These are usually the heart of a Ballwin kitchen remodel.",
        },
        {
          title: "Durable, Family-Friendly Finishes",
          description:
            "Finishes and surfaces chosen to handle kids, pets, and daily use — beautiful, but built for the realities of a busy household.",
        },
        {
          title: "Appliance Integration",
          description:
            "Panel-ready refrigerators, custom hood surrounds, built-in ovens and microwaves — detailed to look intentional rather than bolted on after the fact.",
        },
        {
          title: "Shop Finish and Trade Coordination",
          description:
            "All cabinetry is finished in our shop and installed by our own crew. We coordinate the electricians, plumbers, and countertop fabricators so the project moves as one.",
        },
      ],
    },

    whyChooseUs: {
      heading: "Why Ballwin Families Choose Us for Kitchen Remodels",
      reasons: [
        {
          title: "Designed for Busy Households",
          description:
            "Your remodel reflects how your family actually lives — durable materials, smart storage, kid-friendly layouts, and an island that handles homework, prep, and gatherings all at once.",
        },
        {
          title: "Every Piece Built by Hand",
          description:
            "No catalog cabinets, no imported components. Your kitchen is designed and built in our St. Louis workshop from first cut to final finish.",
        },
        {
          title: "We Keep the Schedule",
          description:
            "For families juggling work, school, and activities, a contractor who shows up on time and communicates clearly is everything. That's how we run every project.",
        },
        {
          title: "Coordination Across Trades",
          description:
            "We manage the cabinetry and coordinate the electricians, plumbers, and countertop fabricators we trust — so you're not chasing five different contractors.",
        },
        {
          title: "Designs That Hold Up",
          description:
            "We've built kitchens since 1985 and watched how four decades of designs have aged. We favor timeless choices and solid construction that survives daily family life.",
        },
      ],
    },

    process: {
      heading: "Our Kitchen Remodel Process",
      steps: [
        {
          title: "Consultation and Home Visit",
          description:
            "We visit your Ballwin home, measure the existing kitchen, and spend time understanding how your family cooks, gathers, and moves through the space. We talk through what's working, what isn't, and what you want it to become.",
        },
        {
          title: "Design and Layout Development",
          description:
            "We develop detailed plans — often with layout changes — and walk you through them. Door styles, wood species, finishes, hardware, and cabinet configurations are all specified before build begins. Nothing moves forward until you're confident.",
        },
        {
          title: "Cabinet Build in Our Shop (6–8 Weeks)",
          description:
            "Your cabinets are built by hand in our shop. You're welcome to visit and see the progress — for most clients, that's a highlight of the project.",
        },
        {
          title: "Installation and Finish (2–3 Weeks)",
          description:
            "Installation typically takes 2–3 weeks on-site, including coordinating the countertop template, appliance delivery, plumbing, and electrical. We're there until the last detail is finished and you've signed off.",
        },
      ],
    },

    considerations: {
      heading: "Designing Kitchens for Ballwin Family Life",
      content: [
        "Ballwin kitchens work hard. They're where homework happens, where weeknight dinners come together, where the family gathers and where guests inevitably end up. We design with that reality in mind: durable surfaces that shrug off daily use, an island sized for both prep and seating, storage that keeps the chaos organized, and a layout that lets more than one person work without colliding.",
        "We also think about longevity and resale. The choices we recommend are the ones that stay current — neutral painted cabinets with wood accents, clean hardware, timeless layouts, and solid wood construction that a future home inspector will appreciate as much as you do.",
      ],
    },

    faqs: [
      {
        question: "How long does a Ballwin kitchen remodel take?",
        answer:
          "From design approval to final walkthrough, most projects run 10–14 weeks: roughly 2–3 weeks for design finalization, 6–8 weeks for the cabinet build in our shop, and 2–3 weeks for on-site installation and trade coordination.",
      },
      {
        question: "Can you open up my kitchen to the family room?",
        answer:
          "Often, yes — it's a frequent request in Ballwin's family homes. Removing or opening a wall involves checking whether it's load-bearing and rerouting any plumbing or electrical in it, all of which we assess during design. We then design cabinetry and flow so the opened-up space works as one room.",
      },
      {
        question: "Do you handle demolition and the other trades?",
        answer:
          "We manage the cabinetry build and installation, and coordinate trade partners for demo, plumbing, electrical, flooring, and countertops. You get one point of contact for the cabinetry and a coordinated handoff between trades.",
      },
      {
        question: "Can we stay in our home during the remodel?",
        answer:
          "Yes — most families do. We set up a temporary kitchen workspace, and the on-site work is concentrated into a 2–3 week window. Plan on more grilling, microwaving, and takeout than usual during that stretch, but the home stays livable throughout.",
      },
      {
        question: "Do I need a permit for a kitchen remodel in Ballwin?",
        answer:
          "It depends on scope. Like-for-like cabinet replacement usually doesn't require a permit; moving walls, plumbing, electrical, or structural elements does. We identify permit requirements during design and either pull them ourselves or coordinate with the trades that will.",
      },
    ],

    testimonial: {
      quote:
        "ProWood Interiors is absolutely the best, most professional, and expert group of wood craftspersons around. Our experience with them was outstanding, from start to finish. Dave and his group are wood artists, and they were exacting in their manufacture and installation.",
      author: "Rich & Kathy Bucholz",
    },

    galleryProjects: ["White Cabinet Kitchen", "Dual-Color Kitchen"],
    galleryImageRange: { start: 0, count: 8 },
  },

  // ---------------------------------------------------------------
  // CREVE COEUR — CABINET REFACING
  // ---------------------------------------------------------------
  {
    city: "Creve Coeur",
    citySlug: "creve-coeur",
    service: "Cabinet Refacing",
    serviceSlug: "cabinet-refacing",
    state: "Missouri",
    stateAbbr: "MO",
    county: "St. Louis County",
    coordinates: { latitude: "38.6608", longitude: "-90.4426" },

    metaTitle: "Cabinet Refacing in Creve Coeur, MO",
    metaDescription:
      "Cabinet refacing for Creve Coeur, MO homes, by a family-owned shop based right next door in Maryland Heights. Handcrafted solid-wood doors, fronts, and finishes. Free consultation: (314) 437-9988.",

    heroEyebrow: "Serving Creve Coeur, MO",
    heroTitle: "Cabinet Refacing in Creve Coeur, Missouri",
    heroSubtitle:
      "A full kitchen update without the full-remodel disruption — handcrafted new doors, drawer fronts, and finishes, built just up the road in Maryland Heights.",

    intro: [
      "Creve Coeur's established homes — the mid-century ranches and mature two-stories near Creve Coeur Lake and along the Olive Boulevard corridor — were frequently built with quality cabinet boxes that have held up well. What hasn't aged as gracefully is the face: dated doors, worn finishes, and hardware from an earlier decade. That's exactly what cabinet refacing solves.",
      "Refacing replaces everything visible — doors, drawer fronts, exposed surfaces, and hardware — while keeping the sound boxes and the existing layout. For a well-built Creve Coeur home, it's often the smartest update: a complete visual transformation without a major tear-out.",
      "Our shop is in Maryland Heights, minutes away, so Creve Coeur is essentially our backyard. The build happens at our shop, the on-site installation typically wraps in about a week, and the finished kitchen looks brand new — frequently with better materials than the originals.",
    ],

    included: {
      heading: "What a Creve Coeur Refacing Project Includes",
      items: [
        {
          title: "Solid Wood Doors",
          description:
            "Every door is built in our nearby shop from real hardwood — oak, maple, cherry, walnut, or hickory — in the profile and style you choose. Solid wood, not overlays.",
        },
        {
          title: "Matching Drawer Fronts and Optional Boxes",
          description:
            "Drawer fronts match the new doors. If the original boxes are tired, we can swap them for dovetailed hardwood boxes with soft-close glides during the same visit.",
        },
        {
          title: "Veneered Cabinet Surfaces",
          description:
            "Exposed cabinet sides, end panels, and face frames are covered in a wood veneer matched to your new doors, so every visible surface reads as new.",
        },
        {
          title: "New Hardware and Soft-Close Hinges",
          description:
            "Concealed soft-close hinges come standard. You choose the pulls and knobs in whatever finish suits your home.",
        },
        {
          title: "Optional Upgrades",
          description:
            "Pull-out shelves, lazy Susans, crown molding, under-cabinet lighting, and trash pull-outs can all be added during the same project.",
        },
        {
          title: "Shop-Applied Finish",
          description:
            "Every door and front is finished in our climate-controlled shop, so your home avoids on-site fumes and dust.",
        },
      ],
    },

    whyChooseUs: {
      heading: "Why Creve Coeur Homeowners Reface with Us",
      reasons: [
        {
          title: "Right Down the Road",
          description:
            "Our Maryland Heights shop is minutes from Creve Coeur. Being this close means real responsiveness and accountability — before, during, and after your project.",
        },
        {
          title: "Experienced with Established Homes",
          description:
            "Creve Coeur's mid-century and mature homes often have quality boxes worth keeping. We know how they're built and how to make a refaced kitchen look fully custom.",
        },
        {
          title: "About One Week On-Site",
          description:
            "Most Creve Coeur refacing projects install in 5–7 business days. Your kitchen stays mostly usable, and your routine barely changes.",
        },
        {
          title: "Built in Our Local Shop",
          description:
            "Every door, veneer, and drawer front is crafted nearby — so we can match a specific stain or profile instead of settling for the closest stock option.",
        },
        {
          title: "Honest Assessment First",
          description:
            "If your boxes aren't a good candidate for refacing, we'll tell you directly and recommend a full remodel instead. We'd rather lose the project than do work the boxes don't deserve.",
        },
      ],
    },

    process: {
      heading: "The Creve Coeur Refacing Process",
      steps: [
        {
          title: "In-Home Assessment",
          description:
            "We make the short trip to your Creve Coeur home, measure every cabinet, check the condition of the boxes, and talk through what you want to change. We bring door, wood, finish, and hardware samples to view in your own kitchen.",
        },
        {
          title: "Design and Detailed Proposal",
          description:
            "Within a few days you receive a written proposal with every door style, dimension, finish, and hardware choice specified. Once you approve it, that's exactly what we build.",
        },
        {
          title: "Shop Build",
          description:
            "Your doors, drawer fronts, veneers, and any added pieces are built and finished by hand in our nearby shop, then labeled by cabinet and staged for installation.",
        },
        {
          title: "On-Site Installation",
          description:
            "Our installers arrive with everything pre-built. Old doors off, boxes veneered, new doors and hardware on, cleanup handled before we leave. Most on-site work wraps in 5–7 business days.",
        },
      ],
    },

    considerations: {
      heading: "When Refacing Makes Sense in Creve Coeur",
      content: [
        "Refacing is almost always the right call when your cabinet boxes are structurally sound and your existing layout still works — a common situation in Creve Coeur's well-built established homes. If you like where the sink and island sit and just want the kitchen to feel new, refacing is usually the right choice.",
        "Where refacing isn't the answer: if you want to change the layout, move cabinets, or replace boxes that are warped, water-damaged, or poorly built. In those cases we recommend a full kitchen remodel instead — and we build those too. Being local, we're glad to take a look and give you an honest recommendation either way.",
      ],
    },

    faqs: [
      {
        question: "Are you really local to Creve Coeur?",
        answer:
          "Yes — our shop is in Maryland Heights, just minutes away. Being this close means we know Creve Coeur's homes, we're quick to respond, and we're easy to reach before, during, and after the project.",
      },
      {
        question: "My Creve Coeur kitchen is from the 1960s — is refacing a good fit?",
        answer:
          "Often, yes. Many of Creve Coeur's mid-century homes were built with solid cabinet boxes that are worth keeping. Refacing renews the doors, fronts, surfaces, and hardware while preserving that sound structure and the existing layout. We confirm box condition during the assessment and recommend honestly.",
      },
      {
        question: "Can I still use my kitchen during the project?",
        answer:
          "For most of it, yes. The build happens at our shop, so your kitchen is only affected during the on-site installation week. Even then, we install in sections, so you typically keep access to your sink and at least some storage.",
      },
      {
        question: "Can you match stain or paint to other woodwork in my home?",
        answer:
          "Yes. We regularly match stains, paint colors, and molding profiles to tie the refaced kitchen into the rest of your home's woodwork. Bring photos or samples to the consultation and we'll show you how we approach matching.",
      },
    ],

    testimonial: {
      quote:
        "Pro Wood Interiors are fantastic to work with. The level of expertise and professionalism is second to none. I would highly recommend David and his staff to anyone looking to do renovations to their home. Looking forward to working with David on our next project.",
      author: "Doug Uthoff",
    },

    galleryProjects: ["Kitchen Cabinet Refacing"],
    galleryImageRange: { start: 8, count: 8 },
  },

  // ---------------------------------------------------------------
  // CREVE COEUR — KITCHEN REMODELING
  // ---------------------------------------------------------------
  {
    city: "Creve Coeur",
    citySlug: "creve-coeur",
    service: "Kitchen Remodeling",
    serviceSlug: "kitchen-remodeling",
    state: "Missouri",
    stateAbbr: "MO",
    county: "St. Louis County",
    coordinates: { latitude: "38.6608", longitude: "-90.4426" },

    metaTitle:
      "Kitchen Remodeling in Creve Coeur, MO | Custom Design & Cabinetry",
    metaDescription:
      "Full-scope kitchen remodeling in Creve Coeur, MO, by a family-owned shop based next door in Maryland Heights. Custom cabinets, islands, and layouts. Free consultation: (314) 437-9988.",

    heroEyebrow: "Serving Creve Coeur, MO",
    heroTitle: "Kitchen Remodeling in Creve Coeur, Missouri",
    heroSubtitle:
      "Full-scope custom kitchens designed for Creve Coeur's established homes — handcrafted just up the road in Maryland Heights since 1985.",

    intro: [
      "Many of Creve Coeur's homes are established mid-century houses with good bones and kitchens built for a different era. A full kitchen remodel is the chance to bring one of these homes fully up to date — reworking the layout, opening the kitchen to the rest of the home, and adding the storage, islands, and workflow that modern living calls for.",
      "A full remodel is the right call when the existing layout works against you, when the cabinets themselves are failing, or when you want to connect the kitchen to an adjacent dining or family room — something especially common in Creve Coeur's older ranches and two-stories. We design and build the cabinetry to suit each home rather than imposing a single template.",
      "Our shop is in nearby Maryland Heights, so we're close throughout the project. We handle the cabinetry, islands, pantries, and finish carpentry in-house, and coordinate trusted trade partners for plumbing, electrical, flooring, and countertops — keeping the project on schedule and the quality consistent.",
    ],

    included: {
      heading: "What a Full Kitchen Remodel Includes",
      items: [
        {
          title: "Layout and Design",
          description:
            "We design the kitchen around how you actually live — which in Creve Coeur's older homes often means reworking the layout, opening a wall to the family room, or repositioning the island.",
        },
        {
          title: "Custom Cabinetry Built to Your Space",
          description:
            "Every cabinet is built to your exact dimensions in our nearby shop. Drawer configurations, roll-outs, appliance panels, and interior organization are all designed around what you actually store.",
        },
        {
          title: "Islands, Pantries, and Workflow",
          description:
            "A thoughtfully sized island for prep and seating, a pantry that handles a serious grocery run, and a layout that lets the kitchen breathe — all tailored to how your household uses the space.",
        },
        {
          title: "Appliance Integration",
          description:
            "Panel-ready refrigerators, custom hood surrounds, built-in ovens and microwaves — detailed to look intentional rather than added on afterward.",
        },
        {
          title: "Trim and Architectural Detailing",
          description:
            "Cabinetry blends into the rest of the home through matching trim profiles, crown molding, and finish carpentry that ties the space together.",
        },
        {
          title: "Shop Finish and Trade Coordination",
          description:
            "All cabinetry is finished in our shop and installed by our own crew. We coordinate the electricians, plumbers, and countertop fabricators so the project moves as one.",
        },
      ],
    },

    whyChooseUs: {
      heading: "Why Creve Coeur Families Choose Us for Kitchen Remodels",
      reasons: [
        {
          title: "Local and Responsive",
          description:
            "Our Maryland Heights shop is minutes from Creve Coeur, so we're close and accessible throughout a project — which matters most during the busy installation weeks.",
        },
        {
          title: "Experienced with Established Homes",
          description:
            "We've remodeled plenty of mid-century and mature homes like Creve Coeur's. We know how to open them up and modernize the kitchen while respecting the home's bones.",
        },
        {
          title: "Built by Hand, Locally",
          description:
            "Every cabinet, island, and built-in is designed and built in our shop. No catalog cabinets, no imported components — just craftsmanship you can come see.",
        },
        {
          title: "One Point of Contact",
          description:
            "You work with the same person from first visit to final walkthrough. Questions get answered quickly, and nothing falls through the cracks between trades.",
        },
        {
          title: "Designs That Hold Up",
          description:
            "We've built kitchens since 1985 and watched how four decades of designs have aged. We favor timeless choices and solid construction throughout.",
        },
      ],
    },

    process: {
      heading: "Our Kitchen Remodel Process in Creve Coeur",
      steps: [
        {
          title: "Consultation and Home Visit",
          description:
            "We make the short trip to your Creve Coeur home, measure the existing kitchen, and spend time understanding how you cook and entertain. For older homes, this includes assessing structural realities that shape what the remodel can change.",
        },
        {
          title: "Design and Selections",
          description:
            "We develop detailed layout plans (often including structural changes), specify every door style, wood species, finish, hardware choice, and cabinet configuration, and walk through it all with you. Nothing moves forward until you're confident.",
        },
        {
          title: "Cabinet Build in Our Shop (6–8 Weeks)",
          description:
            "Your cabinetry is built by hand in our nearby shop. You're welcome to visit and watch the work in progress — it's an easy drive.",
        },
        {
          title: "Installation and Finish (2–3 Weeks)",
          description:
            "Installation typically takes 2–3 weeks on-site and includes coordinating the countertop template, appliance delivery, plumbing, and electrical. We're there until the last detail is finished and you've signed off.",
        },
      ],
    },

    considerations: {
      heading: "What Makes a Creve Coeur Kitchen Remodel Different",
      content: [
        "Creve Coeur's established homes often have a closed-off kitchen that the rest of the house has outgrown. The most impactful part of these remodels is frequently the layout itself — opening the kitchen to adjacent rooms, improving the flow, and finally giving the space the proportions modern living calls for. We design those structural moves deliberately, then detail the cabinetry to match the home.",
        "We also design for the long view. Many Creve Coeur homeowners stay in their homes for the long haul, so our recommendations favor timeless choices — neutral painted cabinetry with wood accents, clean hardware, and solid wood construction — that will look current in fifteen years and hold up to daily use the whole time.",
      ],
    },

    faqs: [
      {
        question: "How long does a Creve Coeur kitchen remodel take?",
        answer:
          "From design approval to final walkthrough, most projects run 10–14 weeks: roughly 2–3 weeks for design finalization, 6–8 weeks for the cabinet build, and 2–3 weeks for installation and trade coordination. Older homes occasionally take a little longer if unexpected structural or mechanical issues surface during demo.",
      },
      {
        question: "Can you open up the closed-off kitchen in my older Creve Coeur home?",
        answer:
          "Yes — it's one of the most common requests we get here. Opening an older kitchen to an adjacent room involves checking for load-bearing walls and rerouting any plumbing or electrical, which we assess during design. We then design the cabinetry and flow so the opened-up space works as one cohesive room.",
      },
      {
        question: "Do you handle demolition and the other trades?",
        answer:
          "We manage the cabinetry build and installation, and coordinate trade partners for demo, plumbing, electrical, flooring, and countertops. You get one point of contact for the cabinetry and a coordinated handoff between trades.",
      },
      {
        question: "Being nearby, can you start sooner?",
        answer:
          "Being local helps us stay responsive, though start dates depend on our current schedule and your project's scope. Reach out for a consultation and we'll give you a realistic timeline. Once underway, our proximity means we're easy to reach throughout the project.",
      },
    ],

    testimonial: {
      quote:
        "Outstanding customer service and craftsmanship. Dave and team provided excellent communications and superb craftsmanship. Absolutely the best team we have worked with for home renovations in three states over the past 20 years.",
      author: "David Ferguson",
    },

    galleryProjects: ["Blue Island Kitchen", "Quartzite Luxury Kitchen"],
    galleryImageRange: { start: 0, count: 8 },
  },

  // ---------------------------------------------------------------
  // GLENDALE — CABINET REFACING
  // ---------------------------------------------------------------
  {
    city: "Glendale",
    citySlug: "glendale",
    service: "Cabinet Refacing",
    serviceSlug: "cabinet-refacing",
    state: "Missouri",
    stateAbbr: "MO",
    county: "St. Louis County",
    coordinates: { latitude: "38.5959", longitude: "-90.3779" },

    metaTitle: "Cabinet Refacing in Glendale, MO",
    metaDescription:
      "Cabinet refacing for Glendale, MO homes. Handcrafted solid-wood doors, fronts, and finishes designed to fit Glendale's classic older homes. Family-owned since 1985. Free consultation: (314) 437-9988.",

    heroEyebrow: "Serving Glendale, MO",
    heroTitle: "Cabinet Refacing in Glendale, Missouri",
    heroSubtitle:
      "Make the most of a modest older kitchen — handcrafted new doors, fronts, smarter storage, and finishes, installed in about a week with almost no disruption to a quiet street.",

    intro: [
      "Glendale is one of the smallest cities in St. Louis County — barely a square mile of tree-lined streets tucked between Kirkwood and Webster Groves, almost entirely residential and tightly knit. Its homes tend to be modest, well-kept houses from the early-to-mid 20th century, and their kitchens are usually on the compact side. The good news is that the original cabinet boxes in these homes are often solid; it's the dated doors, tired finishes, and dwindling storage that make the kitchen feel its age.",
      "That combination makes refacing a particularly good fit in Glendale. We keep the sound boxes and the footprint, replace every visible surface, and — just as importantly in a smaller kitchen — use the project as a chance to add the pull-outs and organizers that make a compact space work far harder than it did before.",
      "Because Glendale streets are quiet and close together, we work to keep the disruption minimal: the build happens entirely at our shop, and the on-site installation usually wraps in 5–7 business days. A lot of our Glendale work comes from neighbors referring neighbors, so we treat every job like the next one depends on it — because in a community this size, it does.",
    ],

    included: {
      heading: "What's Included in a Glendale Refacing Project",
      items: [
        {
          title: "Doors Built for Your Kitchen",
          description:
            "We craft each door in our shop from solid hardwood — oak, maple, cherry, walnut, or hickory — in a style that fits the scale and age of your home, whether that's a simple shaker or a traditional raised panel.",
        },
        {
          title: "Drawer Fronts, Plus Smarter Drawers",
          description:
            "New fronts match your doors. In Glendale's older kitchens, the original drawers are often the weak point, so we frequently swap in dovetailed hardwood boxes on soft-close glides that hold more and run smoother.",
        },
        {
          title: "Storage That Earns Its Space",
          description:
            "Compact kitchens reward every inch. Pull-out shelves, lazy Susans, tray dividers, and trash pull-outs turn awkward lower cabinets into usable storage — the upgrades that matter most when the floor plan is tight.",
        },
        {
          title: "Seamless Veneered Surfaces",
          description:
            "Cabinet ends, face frames, and exposed sides get a wood veneer matched to your new doors, so a small kitchen reads as one cohesive, fully renewed space.",
        },
        {
          title: "Hardware and Soft-Close Hinges",
          description:
            "Concealed soft-close hinges are standard, and you pick the pulls and knobs. We'll steer you toward finishes that suit a modest home without overpowering a small room.",
        },
        {
          title: "Finished at Our Shop",
          description:
            "Staining and painting happen in our climate-controlled shop, never in your home — which keeps fumes, dust, and mess out of a house where the kitchen sits close to everything else.",
        },
      ],
    },

    whyChooseUs: {
      heading: "Why Glendale Homeowners Reface with Us",
      reasons: [
        {
          title: "Referred by the Neighbors",
          description:
            "Glendale is small enough that reputation travels fast. Much of our work here comes from one homeowner recommending us to the next — which is exactly the accountability you want in a tight community.",
        },
        {
          title: "We Make Small Kitchens Work Harder",
          description:
            "A refacing project in a compact Glendale kitchen is also a storage project. We build in the pull-outs and organizers that get real capacity out of a modest footprint.",
        },
        {
          title: "Minimal Disruption on a Quiet Street",
          description:
            "The build happens at our shop and the on-site work usually takes 5–7 business days. In a close-together neighborhood, we keep the dust, noise, and driveway traffic to a minimum.",
        },
        {
          title: "Hand-Built in Our Shop",
          description:
            "Every door, veneer, and drawer front is made in our St. Louis-area workshop, so we can match a specific stain or door profile instead of settling for a stock option.",
        },
        {
          title: "A Straight Answer on Your Cabinets",
          description:
            "If your boxes aren't worth refacing, we'll tell you and point you toward a full remodel instead. We'd rather give honest advice than win a job that won't hold up.",
        },
      ],
    },

    process: {
      heading: "How a Glendale Refacing Project Works",
      steps: [
        {
          title: "We Come Take a Look",
          description:
            "We visit your Glendale home, measure each cabinet, and check whether the boxes are sound. We bring door, wood, finish, and hardware samples so you can see the options in your own kitchen — and we'll flag the storage upgrades worth adding while we're at it.",
        },
        {
          title: "You Get a Written Plan",
          description:
            "A few days later you receive a detailed proposal spelling out every door style, dimension, finish, hardware choice, and add-on. Nothing is left vague, and what you approve is what we build.",
        },
        {
          title: "We Build It at the Shop",
          description:
            "Your doors, fronts, veneers, and any organizers are crafted and finished by hand at our shop, then labeled by cabinet and staged for install day.",
        },
        {
          title: "We Install and Clean Up",
          description:
            "Our crew arrives with everything pre-built: old doors off, boxes veneered, new doors and hardware on, and a clean kitchen before we go. On-site work typically takes 5–7 business days.",
        },
      ],
    },

    considerations: {
      heading: "Getting the Most From a Compact Glendale Kitchen",
      content: [
        "The kitchens in Glendale's older homes weren't built for the way we cook and store food today, so the win in most refacing projects here is twofold: a fresh, modern look and meaningfully better use of the space you already have. Before we finalize a plan, we look hard at where capacity is being wasted — a dead corner, a too-shallow drawer bank, a cabinet you have to crawl into — and design the upgrades that fix it.",
        "Refacing assumes your layout stays put, which is usually the right move in these homes. But if you're dreaming of borrowing space from an adjacent room or reworking the whole footprint, that's a full remodel, not a reface. We'll be candid about which one your goals actually call for, and we build both.",
      ],
    },

    faqs: [
      {
        question: "My Glendale kitchen is small — can refacing make it feel bigger?",
        answer:
          "Refacing won't move walls, but it can make a compact kitchen feel noticeably more open and work much better. Lighter door colors and clean hardware visually open the room, while pull-outs, drawer organizers, and corner solutions free up space you're currently wasting. For most small Glendale kitchens, that combination is transformative.",
      },
      {
        question: "Will the work be disruptive in a close-together neighborhood?",
        answer:
          "We keep it minimal. Because the doors and fronts are built at our shop, there's no on-site sawing or finishing, and the install is usually just 5–7 business days. We're mindful of parking, noise, and cleanup on Glendale's tight streets — a lot of our reputation here rides on being good neighbors during a job.",
      },
      {
        question: "Are my older cabinet boxes worth keeping?",
        answer:
          "Often, yes. Many of Glendale's mid-century homes were built with solid cabinet boxes that have plenty of life left; the doors and finish are simply what's dated. We check the condition of every box during our visit and tell you honestly whether refacing makes sense or a full rebuild is the better call.",
      },
      {
        question: "Can I update the look completely, not just freshen it up?",
        answer:
          "Definitely. Most clients change things significantly — oak to painted, dated hardware to clean modern pulls, fussy raised panels to simple shaker. Refacing is a chance to reset the kitchen's whole style, scaled to suit a modest home.",
      },
    ],

    testimonial: {
      quote:
        "Dave is a true professional. He shows up on time, makes recommendations, cleans up, and honors his bids. It is refreshing to call your contractor and they PICK UP THE PHONE! I would recommend Dave to anyone seeking custom cabinets or refacing done.",
      author: "Jerry M.",
    },

    galleryProjects: ["Kitchen Cabinet Refacing"],
    galleryImageRange: { start: 4, count: 8 },
  },

  // ---------------------------------------------------------------
  // GLENDALE — KITCHEN REMODELING
  // ---------------------------------------------------------------
  {
    city: "Glendale",
    citySlug: "glendale",
    service: "Kitchen Remodeling",
    serviceSlug: "kitchen-remodeling",
    state: "Missouri",
    stateAbbr: "MO",
    county: "St. Louis County",
    coordinates: { latitude: "38.5959", longitude: "-90.3779" },

    metaTitle: "Kitchen Remodeling in Glendale, MO | Custom Design & Cabinetry",
    metaDescription:
      "Full-scope kitchen remodeling in Glendale, MO. Custom cabinets and design that honor the character of Glendale's classic older homes. Family-owned since 1985. Free consultation: (314) 437-9988.",

    heroEyebrow: "Serving Glendale, MO",
    heroTitle: "Kitchen Remodeling in Glendale, Missouri",
    heroSubtitle:
      "Custom kitchens that get every square foot working — thoughtful, full-scope remodels for the modest older homes that fill Glendale's quiet streets.",

    intro: [
      "In a city as small and residential as Glendale, the kitchen is rarely the biggest room in the house — but it's almost always the busiest. The early-to-mid-century homes here came with kitchens sized for a different era: enough room to cook, but short on the storage, counter space, and flow a household actually wants today. A full remodel is the chance to fix all of that within the home's real footprint.",
      "We don't approach a Glendale kitchen by assuming bigger is better. The goal is smarter: a layout that lets two people work without bumping elbows, storage that finally has a place for everything, and — where the home allows — borrowing a bit of space from an adjacent room or chimney chase to relieve a pinch point. A full remodel makes sense when the layout truly fights you or the cabinets are past saving; when it doesn't, we'll say so.",
      "Everything — the cabinetry, any built-ins, the finish carpentry — is designed and built by hand in our own shop, and we coordinate trusted trades for plumbing, electrical, flooring, and countertops. In a close-knit community where word gets around, we run a clean, considerate job site from first day to last.",
    ],

    included: {
      heading: "What's Included in a Glendale Kitchen Remodel",
      items: [
        {
          title: "A Layout That Fits the Footprint",
          description:
            "We design around the space you have, not the space you wish you had — reworking the work triangle, reclaiming dead corners, and, where it's possible, opening a wall or pinch point to make a modest kitchen feel and function bigger.",
        },
        {
          title: "Cabinetry Built to the Inch",
          description:
            "In a smaller kitchen, stock sizes waste space. Every cabinet is built to your exact dimensions in our shop, with interior fittings, roll-outs, and dividers tailored to what you actually keep.",
        },
        {
          title: "Storage That Punches Above Its Size",
          description:
            "Tall pantry pull-outs, toe-kick drawers, corner solutions, and full-extension hardware are how a compact Glendale kitchen ends up holding more than the larger one down the street.",
        },
        {
          title: "Right-Sized Islands and Seating",
          description:
            "Not every Glendale kitchen has room for a full island — sometimes a peninsula or a slim prep counter is the smarter move. We design seating and prep space that fits without choking the walkways.",
        },
        {
          title: "Appliances That Fit the Scale",
          description:
            "We help you choose and integrate appliances sized for the room — counter-depth and panel-ready options, custom hood surrounds, and built-ins detailed so they don't overwhelm a smaller space.",
        },
        {
          title: "Built, Finished, and Coordinated by Us",
          description:
            "All cabinetry is finished in our shop and installed by our own crew, and we coordinate the electrician, plumber, and countertop fabricator so you have one team accountable for the whole project.",
        },
      ],
    },

    whyChooseUs: {
      heading: "Why Glendale Families Choose Us for Kitchen Remodels",
      reasons: [
        {
          title: "Specialists in Making Space Count",
          description:
            "A great big kitchen is easy. Getting a modest Glendale kitchen to feel generous takes design discipline — and that's exactly the problem we most enjoy solving.",
        },
        {
          title: "A Good Name in a Small Town",
          description:
            "Glendale is tight-knit, and our work here spreads by word of mouth. That keeps us honest, tidy, and easy to deal with — your neighbors are watching, and so are we.",
        },
        {
          title: "Hand-Built in Our Shop",
          description:
            "Every cabinet and built-in is made to measure in our St. Louis workshop. No catalog boxes forcing compromises in a room that can't afford wasted inches.",
        },
        {
          title: "One Team, Start to Finish",
          description:
            "You deal with the same person from first visit through final walkthrough, and we coordinate the trades — so a remodel in a small home doesn't turn into a parade of strangers.",
        },
        {
          title: "Considerate on a Tight Lot",
          description:
            "Glendale's homes sit close together. We plan deliveries, debris, and daily cleanup with the neighbors in mind, and keep the on-site phase as short as the project allows.",
        },
      ],
    },

    process: {
      heading: "How a Glendale Kitchen Remodel Works",
      steps: [
        {
          title: "We Visit and Listen",
          description:
            "We come to your Glendale home, measure carefully, and talk through how you really use the kitchen and what frustrates you about it. In an older, compact home, this is also where we scout the structural and mechanical realities that decide what's possible.",
        },
        {
          title: "We Design Around the Space",
          description:
            "We develop a layout that wrings the most out of the footprint, then specify every door style, wood, finish, hardware choice, and storage fitting. You see it all and weigh in before anything is built.",
        },
        {
          title: "We Build It (6–8 Weeks)",
          description:
            "Your cabinetry is built by hand at our shop while your kitchen stays intact. You're welcome to stop by and watch it take shape — it's a short drive and a satisfying one.",
        },
        {
          title: "We Install and Coordinate (2–3 Weeks)",
          description:
            "On-site work runs about 2–3 weeks, with the countertop template, appliances, plumbing, and electrical all coordinated. We stay until every detail is finished and you've signed off.",
        },
      ],
    },

    considerations: {
      heading: "Designing a Bigger-Feeling Kitchen in a Small Home",
      content: [
        "The defining challenge of a Glendale kitchen remodel is rarely budget for square footage — it's ingenuity within square footage. We spend real design time on the moves that make a modest kitchen feel open: trimming a bulkhead, taking cabinetry to the ceiling, choosing light and reflective finishes, and pulling every bit of dead space into service. Done well, a remodeled Glendale kitchen feels far larger than its dimensions suggest.",
        "We also weigh whether a small structural change is worth it. Sometimes relocating a doorway, removing a non-bearing wall to a dining room, or capturing an unused closet completely changes how the kitchen lives. We'll lay out those options honestly — including when the simpler, layout-only remodel is the smarter spend — so the plan fits both your home and how long you intend to stay in it.",
      ],
    },

    faqs: [
      {
        question: "Can you make my small Glendale kitchen feel bigger without an addition?",
        answer:
          "Usually, yes — and it's our specialty here. Taking cabinetry to the ceiling, removing a bulkhead, choosing lighter finishes, and reclaiming dead corners can make a compact kitchen feel dramatically more open. Where the home allows, removing a non-bearing wall or relocating a doorway opens it up further. We'll show you which moves give the most impact for your specific home.",
      },
      {
        question: "Is a full remodel overkill for a modest home — should I just reface?",
        answer:
          "It depends on your goals. If you're happy with the layout and the boxes are sound, refacing is the smarter, less disruptive choice. A full remodel earns its keep when the layout genuinely fights you, the cabinets are failing, or you want to change the footprint. We'll give you an honest read at the consultation rather than push the larger project.",
      },
      {
        question: "How long does a Glendale kitchen remodel take?",
        answer:
          "Most run 10–14 weeks from design approval to final walkthrough: 2–3 weeks to finalize design, 6–8 weeks for the cabinet build, and 2–3 weeks on-site. The shorter on-site window matters in a close-together neighborhood, and we work to keep it tight.",
      },
      {
        question: "Will the project be disruptive to my street?",
        answer:
          "We keep it contained. Cabinets are built off-site, so the noisy, dusty work is minimal, and we plan deliveries, dumpsters, and parking with your neighbors in mind. In a community Glendale's size, being a good guest on the street is part of the job.",
      },
      {
        question: "Do you handle the other trades?",
        answer:
          "Yes. We manage the cabinetry build and installation and coordinate trusted partners for demo, plumbing, electrical, flooring, and countertops — so you have a single point of contact rather than a stack of separate contractors to juggle.",
      },
    ],

    testimonial: {
      quote:
        "Dave was very courteous and did an amazing job on my kitchen. The transformation of the cabinets was night and day, and he was very patient with all of our decisions. He made a dull kitchen into our dream kitchen. His team worked hard, took care with their craft, and cleaned up every time. This is craftsmanship at its best.",
      author: "Kelly Cook",
    },

    galleryProjects: ["Vintage Kitchen", "White Cabinet Kitchen"],
    galleryImageRange: { start: 4, count: 8 },
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
