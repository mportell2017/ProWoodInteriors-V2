/**
 * Location Data Configuration
 * Single source of truth for all city location landing pages
 */

export interface LocationData {
  city: string;          // "Wildwood"
  slug: string;          // "wildwood" (URL-friendly)
  state: string;         // "Missouri"
  stateAbbr: string;     // "MO"
  county: string;        // "St. Louis County"
  zipCodes: string[];    // Service area zip codes
  coordinates: {         // For local SEO schema
    latitude: string;
    longitude: string;
  };
  heroTitle: string;     // H1 heading
  heroSubtitle: string;  // Subheading
  description: string;   // Page intro text
  serviceArea: string[]; // Nearby cities
  localExpertise?: {     // Optional: Local expertise section
    heading: string;
    content: string[];
  };
  whyChooseUs?: {        // Optional: Why choose us section
    heading: string;
    reasons: Array<{
      title: string;
      description: string;
    }>;
  };
  process?: {            // Optional: Our process section
    heading: string;
    steps: Array<{
      title: string;
      description: string;
    }>;
  };
  faqs?: Array<{         // Optional: FAQs
    question: string;
    answer: string;
  }>;
}

export const locations: LocationData[] = [
  {
    city: 'Wildwood',
    slug: 'wildwood',
    state: 'Missouri',
    stateAbbr: 'MO',
    county: 'St. Louis County',
    zipCodes: ['63005', '63011', '63021', '63025', '63038', '63040'],
    coordinates: {
      latitude: '38.5806',
      longitude: '-90.6630'
    },
    heroTitle: 'Custom Cabinetry in Wildwood, Missouri',
    heroSubtitle: 'Handcrafted built-ins and custom cabinets for Wildwood homes since 1985',
    description: 'For nearly four decades, Professional Wood Interiors has partnered with Wildwood homeowners to transform kitchens, living rooms, and home offices with custom cabinetry that reflects both craftsmanship and character. Whether you\'re reimagining your kitchen with new cabinets or adding built-in storage that complements your home\'s architecture, we build everything by hand in our local shop—designed specifically for your space.',
    serviceArea: ['Ellisville', 'Ballwin', 'Chesterfield', 'Eureka', 'Pacific'],
    localExpertise: {
      heading: 'Serving Homeowners Throughout Wildwood',
      content: [
        'Wildwood is known for its spacious homes, wooded lots, and families who value quality craftsmanship. We\'ve worked in neighborhoods across the area—from established communities near Babler State Park to newer developments along Highway 100—and understand what Wildwood homeowners expect: attention to detail, reliable communication, and cabinetry that lasts.',
        'Our team has spent years getting to know the unique character of homes in this community. We\'ve designed custom kitchen cabinets for split-level layouts, built floor-to-ceiling bookcases for two-story great rooms, and crafted entertainment centers that integrate seamlessly with stone fireplaces. Every project begins with a conversation about how you live in your home—and how we can make it work even better.',
        'Because we\'re a local shop, you\'ll work directly with the people building your cabinets. No subcontractors, no middlemen—just experienced craftsmen who take pride in every dovetail joint and finish detail. We\'re here before, during, and after installation to make sure everything exceeds your expectations.'
      ]
    },
    whyChooseUs: {
      heading: 'Why Wildwood Homeowners Choose Us',
      reasons: [
        {
          title: 'True Custom Design',
          description: 'Every piece we build is designed around your specific needs—not adapted from a catalog. We measure your space, discuss your style, and create cabinets that fit perfectly and function beautifully.'
        },
        {
          title: 'Built in Our Local Shop',
          description: 'We build everything ourselves in our St. Louis area workshop. You can visit, see our process, and know exactly who\'s crafting your cabinetry. Quality control is in our hands from start to finish.'
        },
        {
          title: 'Experienced Craftsmen',
          description: 'With over 35 years in business, we\'ve refined our techniques and earned the trust of hundreds of homeowners. Our team brings both skill and problem-solving experience to every project.'
        },
        {
          title: 'Direct Communication',
          description: 'You\'ll work with the same team from consultation through installation. Questions get answered quickly, changes are handled smoothly, and you\'re always informed about progress.'
        },
        {
          title: 'Built to Endure',
          description: 'Custom cabinetry becomes a lasting part of your home. We use solid wood construction, premium hardware, and durable finishes that look beautiful for decades—not just years.'
        }
      ]
    },
    process: {
      heading: 'How We Work with Wildwood Homeowners',
      steps: [
        {
          title: 'Consultation & Measurement',
          description: 'We start with a visit to your home to understand your vision, take precise measurements, and discuss materials, finishes, and functionality. This conversation helps us design cabinetry that truly fits your lifestyle.'
        },
        {
          title: 'Custom Design',
          description: 'Our team creates detailed plans tailored to your space and preferences. We\'ll walk you through the design, make adjustments as needed, and ensure every detail aligns with your goals before we begin building.'
        },
        {
          title: 'Expert Craftsmanship',
          description: 'Your cabinets are built by hand in our local workshop using solid wood and time-tested joinery techniques. We keep you updated throughout the build and welcome you to visit and see the work in progress.'
        },
        {
          title: 'Professional Installation',
          description: 'Our installation team handles every detail with care, ensuring perfect fit and finish. We respect your home, work efficiently, and don\'t consider the job done until you\'re completely satisfied.'
        }
      ]
    },
    faqs: [
      {
        question: 'Do you work directly in Wildwood, or do you subcontract?',
        answer: 'We work directly with homeowners throughout Wildwood and handle every aspect of your project ourselves—from design and construction to installation. There are no subcontractors involved. You\'ll work with our team from the first consultation to the final walkthrough.'
      },
      {
        question: 'How long does a custom cabinetry project typically take?',
        answer: 'Timeline varies based on project scope, but most kitchen cabinet projects take 8–12 weeks from initial consultation to installation. Smaller projects like built-in bookcases or entertainment centers may be completed in 4–6 weeks. We\'ll provide a clear timeline during your consultation and keep you informed throughout the process.'
      },
      {
        question: 'Is cabinet refacing a good option for my Wildwood home?',
        answer: 'Cabinet refacing is an excellent choice if your existing cabinet boxes are structurally sound but your doors, drawer fronts, and finish are outdated. It involves minimal disruption and can completely transform your kitchen\'s appearance. During our consultation, we\'ll assess your cabinets and recommend whether refacing or new construction makes the most sense for your situation.'
      },
      {
        question: 'Do you build everything locally, or order from a manufacturer?',
        answer: 'We build everything ourselves in our local workshop near St. Louis. This means true custom sizing, personalized design details, and quality control at every step. You\'re welcome to visit our shop and see where your cabinets will be crafted.'
      },
      {
        question: 'What types of wood and finishes do you offer?',
        answer: 'We work with a variety of hardwoods including oak, maple, cherry, walnut, and hickory. For finishes, we offer stains, paints, and natural finishes—all applied by hand for a superior result. During your consultation, we\'ll show samples and discuss which options best complement your home\'s style.'
      }
    ]
  },
  {
    city: 'Chesterfield',
    slug: 'chesterfield',
    state: 'Missouri',
    stateAbbr: 'MO',
    county: 'St. Louis County',
    zipCodes: ['63005', '63006', '63017', '63141', '63143'],
    coordinates: {
      latitude: '38.6631',
      longitude: '-90.5771'
    },
    heroTitle: 'Custom Cabinetry in Chesterfield, Missouri',
    heroSubtitle: 'Elegant custom cabinets and built-in solutions for discerning Chesterfield homeowners',
    description: 'Since 1985, Professional Wood Interiors has earned the trust of Chesterfield families who appreciate fine craftsmanship and personalized service. We design and build custom cabinetry that complements your home and your lifestyle—from sophisticated kitchen renovations to stunning built-in libraries. Every piece is handcrafted in our workshop with meticulous attention to detail and built to last generations.',
    serviceArea: ['Town and Country', 'Ballwin', 'Wildwood', 'Clayton', 'Creve Coeur'],
    localExpertise: {
      heading: 'Trusted by Chesterfield Homeowners',
      content: [
        'Chesterfield represents a blend of established elegance and modern sophistication, with homes that range from classic estates to contemporary designs. Over the years, we\'ve had the privilege of working throughout the community—in neighborhoods near Chesterfield Mall, historic estates along the Monarch levee, and newer developments in the valley—creating custom cabinetry that respects each home\'s unique architectural character.',
        'We understand that Chesterfield homeowners value both aesthetics and functionality. Our portfolio includes everything from gourmet kitchen remodels with custom pantry systems to home offices with floor-to-ceiling built-ins, media rooms with hidden storage, and mudrooms designed for active families. Each project starts with careful listening: understanding not just what you need, but how your family actually uses the space.',
        'As a local, family-owned business, we\'re committed to clear communication and exceptional results. You\'ll work with experienced craftsmen who stand behind their work—no sales pressure, no runaround, just honest expertise and quality you can see and feel. We\'re proud to be part of the Chesterfield community and treat every home as if it were our own.'
      ]
    },
    whyChooseUs: {
      heading: 'What Sets Us Apart in Chesterfield',
      reasons: [
        {
          title: 'Personalized Design Process',
          description: 'We don\'t work from stock plans or limited options. Our design process is collaborative and tailored entirely to your vision, your space, and the way you live. Whether you prefer traditional styling or contemporary minimalism, we craft cabinetry that reflects your personal taste.'
        },
        {
          title: 'Crafted Locally with Pride',
          description: 'Every cabinet, drawer, and shelf is built right here in our St. Louis area facility by skilled craftsmen who take ownership of their work. You\'re welcome to visit our shop, meet the team, and watch your project take shape.'
        },
        {
          title: 'Decades of Proven Excellence',
          description: 'Since 1985, we\'ve honed our craft and built lasting relationships with homeowners across St. Louis County. Our experience means we anticipate challenges, solve problems creatively, and deliver results that exceed expectations.'
        },
        {
          title: 'Transparent, Honest Communication',
          description: 'From your first consultation to final installation, you\'ll work with the same dedicated team. We return calls promptly, provide realistic timelines, and keep you informed every step of the way. No runarounds, no excuses.'
        },
        {
          title: 'Built to Last Generations',
          description: 'We use time-tested joinery, solid hardwoods, and commercial-grade hardware because we build cabinetry meant to be passed down—not replaced. What we craft today becomes a lasting part of your home\'s story.'
        }
      ]
    },
    process: {
      heading: 'Our Approach to Your Chesterfield Project',
      steps: [
        {
          title: 'In-Home Consultation',
          description: 'We meet you at your home to see the space firsthand, discuss your goals and style preferences, and take detailed measurements. This initial conversation helps us understand your vision and identify opportunities you might not have considered.'
        },
        {
          title: 'Detailed Design & Planning',
          description: 'Our team develops comprehensive plans specific to your home and needs. We present drawings, discuss material and finish options, and refine every detail together. Nothing moves forward until you\'re confident and excited about the design.'
        },
        {
          title: 'Handcrafted Construction',
          description: 'Your cabinetry is built entirely in our local workshop using traditional techniques and premium materials. Throughout construction, we maintain quality checks and provide progress updates. We welcome shop visits if you\'d like to see the craftsmanship in person.'
        },
        {
          title: 'Expert Installation & Finishing',
          description: 'Our professional installers treat your home with respect and care, ensuring precise fit and flawless finish. We handle every detail—from protecting your floors to cleaning up completely. The project isn\'t finished until you\'re absolutely delighted.'
        }
      ]
    },
    faqs: [
      {
        question: 'Do you serve the entire Chesterfield area?',
        answer: 'Yes, we work throughout Chesterfield and surrounding communities including Town and Country, Ballwin, Wildwood, and beyond. We\'ve completed projects across St. Louis County and are familiar with the diverse architectural styles and home layouts throughout the area.'
      },
      {
        question: 'What\'s the typical timeline for a kitchen cabinet project?',
        answer: 'Most custom kitchen projects take 10–14 weeks from design approval to installation. This includes design finalization (2–3 weeks), construction (6–8 weeks), and installation (1–2 weeks). Smaller projects like bathroom vanities or built-in shelving typically complete faster. We\'ll provide a detailed timeline specific to your project during our consultation.'
      },
      {
        question: 'Can you match existing woodwork in my home?',
        answer: 'Absolutely. Matching existing cabinetry or architectural details is one of our specialties. We can replicate wood species, stain colors, door styles, and hardware to create seamless additions. Bring photos or samples to your consultation, and we\'ll show you how we approach matching projects.'
      },
      {
        question: 'Are you a local company or a national franchise?',
        answer: 'We\'re a locally owned and operated business based in the St. Louis area—not a franchise or national chain. We\'ve been serving St. Louis County homeowners since 1985. When you work with us, you\'re supporting local craftsmanship and getting personalized service you won\'t find with larger operations.'
      },
      {
        question: 'Do you offer cabinet refacing, or only new construction?',
        answer: 'We offer both custom new construction and professional cabinet refacing. Refacing dramatically updates your kitchen\'s look while reusing your existing cabinet boxes. During our consultation, we\'ll honestly assess whether refacing or new cabinets makes more sense for your situation.'
      }
    ]
  },
  {
    city: 'Clayton',
    slug: 'clayton',
    state: 'Missouri',
    stateAbbr: 'MO',
    county: 'St. Louis County',
    zipCodes: ['63105', '63124', '63130'],
    coordinates: {
      latitude: '38.6425',
      longitude: '-90.3235'
    },
    heroTitle: 'Custom Cabinetry in Clayton, Missouri',
    heroSubtitle: 'Sophisticated cabinetry and built-ins for Clayton\'s distinctive homes',
    description: 'Professional Wood Interiors has been creating exceptional custom cabinetry for Clayton residents since 1985. We specialize in designs that honor the architectural heritage of Clayton\'s historic neighborhoods while meeting the demands of modern living. From updating classic kitchens in century-old homes to designing sleek contemporary built-ins, our craftsmanship enhances both function and beauty in every project.',
    serviceArea: ['University City', 'Richmond Heights', 'Brentwood', 'Maplewood', 'Webster Groves'],
    localExpertise: {
      heading: 'Craftsmanship for Clayton\'s Unique Architecture',
      content: [
        'Clayton\'s architectural diversity—from charming Tudor revivals and stately colonials to mid-century modern gems and contemporary luxury condos—requires a thoughtful, adaptable approach. We\'ve worked throughout Clayton\'s walkable neighborhoods, from homes near the Central Business District to tree-lined streets closer to Forest Park, and we understand how to design cabinetry that complements each home\'s distinct character and era.',
        'Whether you\'re renovating a historic kitchen that needs period-appropriate detailing, modernizing a mid-century home with clean-lined cabinetry, or maximizing storage in an urban condo, we bring both technical expertise and design sensitivity. Our work includes custom kitchen renovations that respect original architecture, sophisticated home office built-ins for professionals, and elegant entertainment centers that integrate seamlessly with your home\'s style.',
        'We\'re a local business that values long-term relationships and quality workmanship. From your first phone call through final installation, you\'ll receive straightforward answers, realistic expectations, and attentive service. We\'re here to make the process smooth and the results exceptional—because your home deserves nothing less.'
      ]
    },
    whyChooseUs: {
      heading: 'Why Clayton Residents Trust Us',
      reasons: [
        {
          title: 'Architectural Sensitivity',
          description: 'We design cabinetry that respects your home\'s architectural style—whether that means honoring historical details, complementing mid-century aesthetics, or embracing contemporary minimalism. Our designs enhance, never clash.'
        },
        {
          title: 'Local Craftsmanship',
          description: 'Everything we create is built in our St. Louis area workshop by experienced craftspeople who care deeply about their work. You\'ll never deal with imported cabinets or distant manufacturers—just skilled hands and honest expertise.'
        },
        {
          title: 'Four Decades of Excellence',
          description: 'We\'ve spent over 35 years perfecting our craft and serving St. Louis families. That longevity speaks to consistent quality, satisfied clients, and a reputation we protect with every project we undertake.'
        },
        {
          title: 'Straightforward Communication',
          description: 'We believe in clear, honest communication from start to finish. No high-pressure sales tactics, no confusing jargon, no runaround. Just direct dialogue with people who respect your time and listen to what you actually want.'
        },
        {
          title: 'Heirloom-Quality Construction',
          description: 'We build cabinetry using traditional joinery methods, premium hardwoods, and hardware designed for decades of daily use. This is furniture-grade work meant to serve your family for generations, not just years.'
        }
      ]
    },
    process: {
      heading: 'How We Serve Clayton Homeowners',
      steps: [
        {
          title: 'Initial Consultation',
          description: 'We begin with a visit to your Clayton home to see the space, understand your needs, and discuss your aesthetic preferences. This meeting helps us grasp both the practical requirements and the design direction that will serve you best.'
        },
        {
          title: 'Thoughtful Design Development',
          description: 'We develop detailed plans that address your specific goals and respect your home\'s architecture. You\'ll see drawings, review material selections, and discuss finish options until every detail feels right. We don\'t proceed until you\'re fully satisfied with the design.'
        },
        {
          title: 'Meticulous Craftsmanship',
          description: 'Your cabinetry is built entirely by hand in our local workshop using proven techniques and quality materials. We maintain strict standards throughout construction and keep you informed of progress. You\'re welcome to visit and see your project being built.'
        },
        {
          title: 'Professional Installation',
          description: 'Our experienced installation team works with care and precision, treating your home respectfully and ensuring every piece fits perfectly. We handle all details, clean up thoroughly, and don\'t consider the work complete until you\'re delighted with the results.'
        }
      ]
    },
    faqs: [
      {
        question: 'Can you work with the unique layouts of older Clayton homes?',
        answer: 'Absolutely. Many of Clayton\'s homes feature challenging layouts—uneven walls, unusual dimensions, sloped floors—that come with age and character. Custom cabinetry is ideal for these situations because we build to fit your exact space, not standard dimensions. We\'ll measure carefully, account for quirks, and create solutions that look like they\'ve always been there.'
      },
      {
        question: 'How long does a typical custom cabinet project take in Clayton?',
        answer: 'Most kitchen cabinetry projects take 10–12 weeks from initial design through installation. This includes design refinement (2–3 weeks), construction in our workshop (6–8 weeks), and professional installation (1 week). Smaller projects like bathroom vanities or built-in shelving often complete in 6–8 weeks. We\'ll provide a specific timeline during your consultation.'
      },
      {
        question: 'Do you specialize in any particular architectural style?',
        answer: 'We work across all styles—traditional, transitional, contemporary, and everything in between. Our strength is adapting our craftsmanship to match your home\'s character, whether that\'s a 1920s Tudor, a 1960s ranch, or a modern condo. We\'ll show you examples of our work in different styles during our consultation.'
      },
      {
        question: 'Are you licensed and insured to work in Clayton?',
        answer: 'Yes, we\'re fully licensed and insured to work throughout St. Louis County, including Clayton. We carry comprehensive liability insurance and workers\' compensation coverage. We\'re also familiar with local building requirements and will handle any necessary permits for your project.'
      },
      {
        question: 'What if I want to match existing cabinetry or woodwork?',
        answer: 'Matching existing work is one of our core skills. Whether you\'re adding to a kitchen, building bookcases to match existing trim, or expanding a built-in system, we can replicate wood species, stains, finishes, and construction details. Bring reference photos or samples, and we\'ll show you how closely we can match your existing woodwork.'
      }
    ]
  },
  {
    city: 'St. Peters',
    slug: 'st-peters',
    state: 'Missouri',
    stateAbbr: 'MO',
    county: 'St. Charles County',
    zipCodes: ['63303', '63304', '63376'],
    coordinates: {
      latitude: '38.7874',
      longitude: '-90.6298'
    },
    heroTitle: 'Custom Cabinetry in St. Peters, Missouri',
    heroSubtitle: 'Quality custom cabinets and built-ins for St. Peters families',
    description: 'For over 35 years, Professional Wood Interiors has provided St. Peters homeowners with exceptional custom cabinetry that combines practical functionality with timeless design. Whether you\'re upgrading your kitchen, adding storage solutions, or creating custom built-ins for your growing family, we build everything by hand in our local workshop—crafted to fit your home perfectly and built to last for decades.',
    serviceArea: ['O\'Fallon', 'St. Charles', 'Wentzville', 'Cottleville', 'Lake St. Louis'],
    localExpertise: {
      heading: 'Serving St. Peters Families Since 1985',
      content: [
        'St. Peters is a thriving community of families who value both quality and value in their homes. From established neighborhoods near Mid Rivers Mall to newer developments throughout the city, we\'ve helped hundreds of St. Peters homeowners create more functional, beautiful spaces with custom cabinetry designed specifically for how they live.',
        'We understand that St. Peters families need practical solutions that also look great. Our projects range from complete kitchen transformations with smart storage solutions to mudrooms that handle busy family life, home offices for remote workers, and entertainment centers built around your lifestyle. Every design starts by listening closely to your needs and the way your household actually functions day to day.',
        'As a local, family-run business, we treat every project with care and respect. You won\'t find pushy salespeople or cookie-cutter solutions here—just experienced craftsmen who take pride in delivering honest work and cabinetry that your family will enjoy for years to come. We\'re part of the St. Charles County community and committed to earning your trust.'
      ]
    },
    whyChooseUs: {
      heading: 'Why St. Peters Families Choose Us',
      reasons: [
        {
          title: 'Practical, Functional Design',
          description: 'We design cabinetry around how you actually live. Need kid-friendly storage? Deep drawers for pots and pans? A homework station? We listen to your daily routines and create solutions that make your life easier while looking beautiful.'
        },
        {
          title: 'Built Locally, Not Imported',
          description: 'Your cabinets are crafted right here in our St. Louis area workshop—not shipped from overseas. Supporting local means better quality control, faster turnaround, personalized service, and the confidence of knowing exactly who built your cabinetry.'
        },
        {
          title: 'Three Decades of Trust',
          description: 'We\'ve been serving St. Charles County families since 1985. That longevity comes from doing what we say we\'ll do, treating people fairly, and standing behind our work. We\'ve built our reputation one satisfied customer at a time.'
        },
        {
          title: 'We Stand Behind Our Work',
          description: 'When we finish a project, we don\'t disappear. As a local shop, we\'re easy to reach if you ever have a question or concern down the road. We take responsibility for everything we build and make things right—that\'s how we\'ve kept families coming back for decades.'
        },
        {
          title: 'Durable, Lasting Quality',
          description: 'We don\'t cut corners. Solid wood construction, quality hardware, hand-applied finishes, and proven joinery techniques mean your cabinetry withstands daily family use and looks great for decades—not just until the warranty expires.'
        }
      ]
    },
    process: {
      heading: 'Our Process for St. Peters Projects',
      steps: [
        {
          title: 'Free In-Home Consultation',
          description: 'We visit your St. Peters home to understand your vision, assess the space, and take accurate measurements. This conversation helps us understand your needs and preferences so we can design the right solution for your family.'
        },
        {
          title: 'Custom Design & Proposal',
          description: 'We create detailed plans tailored to your space and lifestyle, then walk you through a clear proposal so you can see exactly what we\'re recommending. We refine the design together until it\'s exactly right.'
        },
        {
          title: 'Quality Construction',
          description: 'Your cabinetry is built entirely in our workshop using solid wood and time-tested construction methods. We keep you updated on progress and maintain strict quality standards. Every piece is built to last and crafted with pride.'
        },
        {
          title: 'Professional Installation',
          description: 'Our installation team arrives on time, works efficiently, and treats your home with respect. We ensure perfect fit and finish, handle all details carefully, and clean up completely when finished. Your satisfaction is our measure of success.'
        }
      ]
    },
    faqs: [
      {
        question: 'Do you serve all of St. Peters and St. Charles County?',
        answer: 'Yes, we regularly work throughout St. Peters, O\'Fallon, St. Charles, Wentzville, and surrounding St. Charles County communities. We\'re familiar with the area and happy to serve homeowners across the region. Distance is not an issue—we treat every project with the same care regardless of location.'
      },
      {
        question: 'How long will my cabinets last?',
        answer: 'With proper care, our cabinetry easily lasts 30+ years and often much longer. We use solid wood construction, quality hardware, durable finishes, and proven joinery methods specifically because we build for longevity. Many of our clients from the 1980s and 1990s still have their original cabinets looking great today.'
      }
    ]
  },
  {
    city: 'St. Charles',
    slug: 'st-charles',
    state: 'Missouri',
    stateAbbr: 'MO',
    county: 'St. Charles County',
    zipCodes: ['63301', '63302', '63303'],
    coordinates: {
      latitude: '38.7881',
      longitude: '-90.4974'
    },
    heroTitle: 'Custom Cabinetry in St. Charles, Missouri',
    heroSubtitle: 'Historic charm meets modern craftsmanship in St. Charles',
    description: 'Professional Wood Interiors has proudly served St. Charles homeowners for over three decades, creating custom cabinetry that honors the city\'s rich history while meeting modern needs. From historic homes on Main Street to contemporary residences throughout the city, we bring thoughtful design and expert craftsmanship to every project—building cabinetry that complements your home\'s character and enhances your daily life.',
    serviceArea: ['St. Peters', 'O\'Fallon', 'Cottleville', 'Wentzville', 'New Town'],
    localExpertise: {
      heading: 'Custom Cabinetry for St. Charles Homes',
      content: [
        'St. Charles holds a special place in Missouri history, and that heritage is reflected in the diverse architecture throughout the city. Whether you own one of the charming historic homes near the riverfront, a classic mid-century house in established neighborhoods, or a modern home in newer developments, we approach each project with respect for your home\'s individual character and your family\'s specific needs.',
        'Our experience in St. Charles includes everything from careful kitchen renovations that preserve period details in older homes to contemporary built-ins for modern spaces, wine storage for collectors, mudrooms for active families, and custom home offices. We\'ve learned that St. Charles homeowners appreciate quality work done right—no shortcuts, no substitutes, just honest craftsmanship and materials built to endure.',
        'Working with us means working with people who care about their community and their reputation. We\'re accessible, straightforward, and committed to your satisfaction. From the initial consultation through installation and beyond, you\'ll receive personal attention from experienced craftsmen who take responsibility for every detail. That\'s how we\'ve built lasting relationships throughout St. Charles County since 1985.'
      ]
    },
    whyChooseUs: {
      heading: 'What Makes Us Different in St. Charles',
      reasons: [
        {
          title: 'Respect for Your Home',
          description: 'Whether your home is 150 years old or brand new, we design and build cabinetry that complements its character. We understand historical details, modern aesthetics, and everything in between—creating work that feels like it belongs in your space.'
        },
        {
          title: 'True Local Craftsmanship',
          description: 'We\'re not a national chain or franchise—we\'re a local business building everything in our own workshop. That means personal accountability, better quality control, and direct access to the people actually crafting your cabinetry. You know exactly where your cabinets come from and who made them.'
        },
        {
          title: 'Proven Track Record',
          description: 'Over 35 years serving St. Charles County speaks to consistency, reliability, and quality that homeowners trust. We\'ve earned our reputation project by project, and we protect it by doing right by every client.'
        },
        {
          title: 'No-Pressure Approach',
          description: 'We don\'t employ high-pressure sales tactics or pushy follow-ups. We provide honest assessments and respectful guidance, then give you room to think it over. You decide if and when you\'re ready to move forward—no games, no gimmicks.'
        },
        {
          title: 'Built to Be Inherited',
          description: 'We use traditional construction methods, premium materials, and hardware designed for generations of use. This is cabinetry you\'ll pass down to your children, not replace in ten years.'
        }
      ]
    },
    process: {
      heading: 'Working Together in St. Charles',
      steps: [
        {
          title: 'Complimentary Consultation',
          description: 'We begin by visiting your St. Charles home to see the space, understand your goals, and discuss your vision. This meeting helps us understand both the practical needs and aesthetic direction. There\'s no cost and no obligation—just conversation and assessment.'
        },
        {
          title: 'Design & Proposal',
          description: 'We develop a detailed design tailored to your space and present a comprehensive proposal that lays out the full plan. You\'ll see drawings, discuss materials and finishes, and have time to review everything carefully. We refine the plan together until it\'s exactly what you want.'
        },
        {
          title: 'Expert Construction',
          description: 'Your cabinetry is built in our local workshop using solid wood, quality hardware, and time-proven joinery. We maintain high standards throughout and provide updates on progress. You\'re always welcome to visit the shop and see your project being crafted.'
        },
        {
          title: 'Careful Installation',
          description: 'Our installation team handles every aspect with attention and care. We protect your home, ensure precise fit, and complete every detail. When we\'re finished, we clean up thoroughly and walk you through everything. We don\'t leave until you\'re completely satisfied.'
        }
      ]
    },
    faqs: [
      {
        question: 'Do you work on historic homes in St. Charles?',
        answer: 'Yes, we have extensive experience with historic homes throughout St. Charles, including properties in the historic district. We understand the importance of respecting original architecture while adding modern functionality. We can match historical details, work with period-appropriate materials, and navigate any special requirements that come with older homes.'
      },
      {
        question: 'How far in advance should I schedule a project?',
        answer: 'We recommend contacting us 3–4 months before you\'d like installation to complete. This allows time for consultation, design development, construction, and installation scheduling. However, we\'ll work with your timeline as best we can. Some smaller projects can be completed faster, while complex kitchen renovations may take longer.'
      },
      {
        question: 'Can you help with design ideas, or do I need to know exactly what I want?',
        answer: 'We help with design at every level. If you have a clear vision, we bring it to life. If you\'re unsure or need guidance, we offer suggestions based on your space, lifestyle, and preferences. Many clients start with general ideas and work with us to develop the details. That\'s part of our service—collaborative design that results in cabinetry perfectly suited to you.'
      },
      {
        question: 'Do you handle permits and inspections?',
        answer: 'Yes, we handle all necessary permits and coordinate any required inspections. We\'re familiar with St. Charles County building requirements and will ensure everything meets local codes and regulations. This is included as part of our comprehensive service.'
      },
      {
        question: 'What warranty do you offer?',
        answer: 'We stand behind our work with a comprehensive warranty covering materials and workmanship. The specifics depend on the project scope, but we take responsibility for any defects in our work. Beyond the formal warranty, we\'re a local business you can reach if you ever have concerns. We want you to be happy with your cabinetry for decades, and we\'ll make things right if issues arise.'
      }
    ]
  },
  {
    city: 'Wentzville',
    slug: 'wentzville',
    state: 'Missouri',
    stateAbbr: 'MO',
    county: 'St. Charles County',
    zipCodes: ['63348', '63385'],
    coordinates: {
      latitude: '38.8114',
      longitude: '-90.8529'
    },
    heroTitle: 'Custom Cabinetry in Wentzville, Missouri',
    heroSubtitle: 'Custom cabinets built for Wentzville\'s growing community',
    description: 'As Wentzville continues to grow, Professional Wood Interiors has been here providing homeowners with quality custom cabinetry since 1985. We understand that Wentzville families want practical, well-built solutions that fit their lifestyle. From new construction kitchens to garage organization systems, mudroom storage to home office built-ins, we create cabinetry designed around how you live—built locally and crafted to last.',
    serviceArea: ['O\'Fallon', 'Lake St. Louis', 'Dardenne Prairie', 'St. Peters', 'St. Charles'],
    localExpertise: {
      heading: 'Serving Wentzville\'s Growing Families',
      content: [
        'Wentzville is one of the fastest-growing communities in Missouri, with new neighborhoods and families moving in every year. We\'ve worked throughout the city—from newer developments near Wentzville Parkway to established neighborhoods closer to downtown—helping homeowners create functional, beautiful spaces with custom cabinetry that works for real family life.',
        'We understand what Wentzville families need: practical storage solutions, durable materials that handle kids and pets, smart organization systems, and designs that make the most of every square foot. Whether it\'s a growing family that needs more kitchen storage, a home office for remote work, or built-in solutions for an active household, we listen carefully and design accordingly.',
        'As a locally owned business, we take pride in straightforward service from the first conversation onward. No bait-and-switch, no pressure tactics, no runaround. Just experienced craftsmen who build quality cabinetry, treat people fairly, and stand behind their work. We\'re part of this community, and we earn your trust one project at a time.'
      ]
    },
    whyChooseUs: {
      heading: 'Why Wentzville Homeowners Work With Us',
      reasons: [
        {
          title: 'Practical, Family-Friendly Design',
          description: 'We design with real life in mind. Durable finishes for busy kitchens. Smart storage for growing families. Homework stations. Garage organization. Whatever your family needs, we create solutions that actually work for how you live.'
        },
        {
          title: 'Locally Built, Not Mass-Produced',
          description: 'Your cabinetry is built in our St. Louis area workshop—not ordered from a catalog or shipped from overseas. Local craftsmanship means better quality, personalized service, and the ability to make adjustments as needed. You know who built your cabinets and where to find us if you need anything.'
        },
        {
          title: 'Established Reputation',
          description: 'We\'ve been serving St. Charles County since 1985. Three decades in business doesn\'t happen by accident—it comes from doing quality work, treating customers fairly, and building relationships that last. We protect our reputation with every project.'
        },
        {
          title: 'We Show Up When We Say',
          description: 'When we commit to a date, we keep it. We arrive on schedule, communicate clearly if anything shifts, and keep your project moving. For busy Wentzville families juggling work and kids, a contractor who respects your time makes all the difference.'
        },
        {
          title: 'Built for the Long Term',
          description: 'We don\'t build disposable cabinetry. Solid construction, quality materials, and proven techniques mean your cabinetry serves your family for decades. This is workmanship you can count on, built to withstand daily use and still look great years from now.'
        }
      ]
    },
    process: {
      heading: 'Our Simple Process for Wentzville Homes',
      steps: [
        {
          title: 'Free Home Visit',
          description: 'We come to your Wentzville home to see the space, understand what you need, and take measurements. This conversation helps us design solutions tailored to your family\'s lifestyle. No charge, no pressure—just good conversation and expert assessment.'
        },
        {
          title: 'Design & Detailed Plan',
          description: 'We develop a design specific to your needs and present a detailed plan. You\'ll see exactly what we\'re proposing and what materials we\'ll use. We work together to refine the design until it\'s exactly right for you.'
        },
        {
          title: 'Quality Construction',
          description: 'Your cabinetry is built by hand in our workshop using solid materials and time-tested methods. We keep you informed throughout the process and maintain high standards at every step. Quality isn\'t negotiable—it\'s how we\'ve stayed in business for decades.'
        },
        {
          title: 'Professional Installation',
          description: 'Our team installs everything with care and precision. We show up on time, work efficiently, respect your home, and ensure perfect fit and finish. We clean up completely when done and walk you through everything. Your satisfaction is how we measure success.'
        }
      ]
    },
    faqs: [
      {
        question: 'Do you work in newer Wentzville subdivisions?',
        answer: 'Absolutely. We work throughout Wentzville, including all the newer developments. We\'re familiar with the area and happy to serve homeowners wherever they are. Many of our clients are in newer homes who want to add custom touches, upgrade builder-grade cabinets, or add storage solutions the builder didn\'t include.'
      },
      {
        question: 'Do you work with new construction?',
        answer: 'Yes, we frequently work with homeowners building new homes in Wentzville. We can coordinate with builders, work within construction schedules, and ensure your cabinetry is installed correctly and on time. If you\'re building, contact us early in the process so we can plan properly and provide input on cabinet layout.'
      },
      {
        question: 'How do you handle changes or issues during installation?',
        answer: 'We believe in straightforward communication. If we discover something unexpected during installation—structural issues, measurement challenges, etc.—we stop, discuss options with you, and agree on solutions before proceeding. We don\'t make assumptions or surprise you with changes. Any adjustments to the scope or schedule are discussed and approved first.'
      },
      {
        question: 'Can I see examples of your work before committing?',
        answer: 'Absolutely. During your consultation, we\'ll show you photos of completed projects, discuss similar work we\'ve done, and answer questions about our process and materials. We can also provide references from other Wentzville homeowners if you\'d like to hear directly from past clients. We want you to feel confident before moving forward.'
      }
    ]
  },
  {
    city: 'St. Louis',
    slug: 'st-louis',
    state: 'Missouri',
    stateAbbr: 'MO',
    county: 'St. Louis City and County',
    zipCodes: ['63101', '63102', '63103', '63104', '63108', '63109', '63110', '63111', '63112', '63113', '63115', '63116', '63118', '63120', '63139'],
    coordinates: {
      latitude: '38.6270',
      longitude: '-90.1994'
    },
    heroTitle: 'Custom Cabinetry in St. Louis, Missouri',
    heroSubtitle: 'Exceptional custom cabinets for St. Louis\' diverse neighborhoods',
    description: 'For over three decades, Professional Wood Interiors has been St. Louis\' trusted source for custom cabinetry that combines traditional craftsmanship with contemporary design. From historic Central West End brownstones to modern lofts downtown, from family homes in South City to updated bungalows in Tower Grove—we create cabinetry that respects your neighborhood\'s character while perfectly serving your needs.',
    serviceArea: ['Clayton', 'University City', 'Webster Groves', 'Kirkwood', 'Maplewood', 'Richmond Heights'],
    localExpertise: {
      heading: 'Craftsmanship Rooted in St. Louis',
      content: [
        'St. Louis neighborhoods each have their own distinct character and architectural heritage. We\'ve worked throughout the city—from Soulard\'s brick townhomes to Lafayette Square\'s Victorian mansions, from The Hill\'s cozy bungalows to the sleek condos of downtown—and we know how to design cabinetry that honors each area\'s unique style while adding modern functionality.',
        'Our work spans every type of project: restoring historic kitchens with period-appropriate details, creating contemporary built-ins for urban lofts, designing wine storage for collectors, maximizing space in smaller city homes, and crafting statement pieces for grand renovations. What ties everything together is our commitment to understanding your vision, respecting your home\'s architecture, and delivering workmanship that stands the test of time.',
        'We\'re a St. Louis business through and through—locally owned, locally operated, deeply connected to this community. When you work with us, you get straightforward answers, dependable craftsmanship, and the confidence that comes from working with people who\'ve built their reputation here, one project at a time, for over 35 years.'
      ]
    },
    whyChooseUs: {
      heading: 'Why St. Louis Chooses Professional Wood Interiors',
      reasons: [
        {
          title: 'Deep Architectural Knowledge',
          description: 'We understand St. Louis architecture—from the ornate details of Victorian homes to the clean lines of mid-century modern, from historic preservation requirements to contemporary design principles. We adapt our craft to complement any style or era.'
        },
        {
          title: 'Genuine Local Business',
          description: 'We\'re not a franchise, chain, or distant manufacturer. We\'re a St. Louis company building everything in our own workshop with our own hands. Supporting us means supporting local craftsmanship, local jobs, and local accountability.'
        },
        {
          title: 'Four Decades of Excellence',
          description: 'Since 1985, we\'ve built relationships and reputations across St. Louis by delivering consistently excellent work. Our longevity speaks to quality craftsmanship, satisfied clients, and integrity that homeowners trust.'
        },
        {
          title: 'Honest, Direct Communication',
          description: 'We believe in transparency and respect. Clear proposals, realistic timelines, and accessible team members. We\'ll tell you what\'s possible and what makes sense for your home—without sales pressure or hidden agendas.'
        },
        {
          title: 'Heirloom Craftsmanship',
          description: 'We build cabinetry the way it used to be built—with traditional joinery, solid hardwoods, and attention to detail. This is furniture-quality work designed to serve families for generations, not appliances meant to be replaced in a decade.'
        }
      ]
    },
    process: {
      heading: 'Our Collaborative Process',
      steps: [
        {
          title: 'Consultation in Your Home',
          description: 'We meet you at your St. Louis home to see the space, understand your needs, and discuss possibilities. This in-person meeting is essential—it helps us appreciate your home\'s character, assess opportunities and challenges, and begin developing ideas tailored specifically to you.'
        },
        {
          title: 'Collaborative Design',
          description: 'We develop detailed plans that reflect your vision and the way you use your space. You\'ll see drawings, review materials and finishes, and have time to ask questions. We refine the design together through collaboration—this is your cabinetry, and it needs to be right.'
        },
        {
          title: 'Master Craftsmanship',
          description: 'Your project is built entirely in our local workshop by experienced craftspeople using quality materials and time-honored techniques. We maintain high standards at every stage and keep you informed of progress. You\'re welcome to visit and see the work firsthand.'
        },
        {
          title: 'Precise Installation',
          description: 'Our installation team handles every detail with care, ensuring perfect fit and finish while treating your home with respect. We manage all logistics, work efficiently, clean thoroughly, and don\'t consider the job complete until you\'re thoroughly satisfied.'
        }
      ]
    },
    faqs: [
      {
        question: 'Do you work in all St. Louis neighborhoods?',
        answer: 'Yes, we serve homeowners throughout St. Louis City and County, from downtown lofts to suburban homes and everything in between. We\'re familiar with the architectural diversity across the region and adapt our approach to each neighborhood\'s unique character.'
      },
      {
        question: 'Can you help with historic home projects and preservation requirements?',
        answer: 'Absolutely. We have extensive experience working on historic homes throughout St. Louis, including properties in local landmark districts and on the National Register. We understand preservation guidelines, can replicate historical details, and know how to blend modern functionality with period-appropriate aesthetics.'
      },
      {
        question: 'Do you handle small projects, or only full kitchen renovations?',
        answer: 'We handle projects of all sizes. Whether it\'s a single bathroom vanity, a built-in bookcase, or a complete whole-house cabinetry package, we approach every project with the same care and quality standards. Small projects are welcome and receive the same attention as larger ones.'
      },
      {
        question: 'What areas of St. Louis do you serve most often?',
        answer: 'We work throughout the entire St. Louis metro area, including both the city and county. Some areas where we\'ve completed many projects include Central West End, Clayton, University City, Webster Groves, Kirkwood, Tower Grove, Soulard, Lafayette Square, The Hill, and Maplewood—but we serve all neighborhoods and surrounding communities.'
      }
    ]
  },
  {
    city: "Kirkwood",
    slug: "kirkwood",
    state: "Missouri",
    stateAbbr: "MO",
    county: "St. Louis County",
    zipCodes: ["63122"],
    coordinates: {
      latitude: "38.5834",
      longitude: "-90.4068",
    },
    heroTitle: "Custom Cabinetry in Kirkwood, Missouri",
    heroSubtitle:
      "Handcrafted cabinets and built-ins that fit Kirkwood's historic homes — designed and built locally since 1985",
    description:
      "Kirkwood's older homes have a character you can't fake — Craftsman bungalows, brick four-squares, and mid-century houses on tree-lined streets near a walkable historic downtown. Professional Wood Interiors has been building and renewing cabinetry for homes like these since 1985. Whether your kitchen needs an update that honors the home's era or you want built-ins that look original to the house, we design and craft everything by hand to fit your space and its history.",
    serviceArea: ["Webster Groves", "Glendale", "Des Peres", "Oakland", "Sunset Hills"],
    localExpertise: {
      heading: "Cabinetry That Respects Kirkwood's Character",
      content: [
        "Few St. Louis communities have the architectural personality Kirkwood does. From the early-1900s homes near the historic train depot and the Kirkwood Farmers Market to the established neighborhoods around Kirkwood Park, these are houses with original millwork, plaster walls, and layouts that were built for a different era of cooking and living. We've spent years working in homes exactly like these, and we understand how to update a kitchen without erasing what makes the house special.",
        "That experience shows up in the details. We match original trim profiles and stain colors so new cabinetry reads as part of the home rather than a renovation that fought it. We work around the quirks that come with older houses — out-of-square walls, settled floors, unusual ceiling heights — because we build to fit your actual space, not to standard dimensions. For many Kirkwood kitchens with sound older cabinet boxes, refacing is the smart move; for others, a full custom build is the right call. We'll tell you honestly which fits your home.",
        "We're a local, family-owned shop, so you work directly with the people building your cabinetry — no subcontractors, no national-chain runaround. From the first conversation through final installation, the same team is accountable for the work. That's how we've earned the trust of homeowners across Kirkwood and the surrounding communities for nearly four decades.",
      ],
    },
    whyChooseUs: {
      heading: "Why Kirkwood Homeowners Choose Us",
      reasons: [
        {
          title: "At Home in Older Houses",
          description:
            "Kirkwood's housing stock spans a century of styles. We know how these homes are built, where they hide their quirks, and how to make new cabinetry feel like it has always belonged.",
        },
        {
          title: "We Match What's Already There",
          description:
            "Matching original trim, casing, and stain colors is one of our specialties — essential in homes where the kitchen needs to tie into existing woodwork rather than stand apart from it.",
        },
        {
          title: "Built in Our Local Shop",
          description:
            "Every door, drawer, and built-in is crafted by hand in our St. Louis-area workshop. You can visit, meet the team, and see exactly who's building your cabinetry.",
        },
        {
          title: "Honest Guidance, Refacing or New",
          description:
            "Many Kirkwood kitchens are ideal candidates for refacing; others need a full rebuild. We assess your actual cabinets and recommend the approach that truly fits — not the bigger invoice.",
        },
        {
          title: "Nearly Four Decades Local",
          description:
            "We've been serving St. Louis County homeowners since 1985. That longevity comes from quality work, fair dealing, and a reputation we protect on every project.",
        },
      ],
    },
    process: {
      heading: "How We Work with Kirkwood Homeowners",
      steps: [
        {
          title: "In-Home Consultation",
          description:
            "We visit your Kirkwood home to see the space, take precise measurements, and understand both how you live and how the house is built. For older homes, this is where we identify the details worth preserving and the opportunities worth pursuing.",
        },
        {
          title: "Custom Design",
          description:
            "We develop detailed plans tailored to your space, your style, and your home's era. You'll review drawings, materials, finishes, and hardware — and we refine everything together until it feels exactly right.",
        },
        {
          title: "Handcrafted Construction",
          description:
            "Your cabinetry is built by hand in our local workshop using solid wood and time-tested joinery. We keep you updated throughout and welcome shop visits to see the work in progress.",
        },
        {
          title: "Careful Installation",
          description:
            "Our installers treat your home with respect, work cleanly, and handle the realities of older houses with care. We're not finished until the fit is perfect and you're completely satisfied.",
        },
      ],
    },
    faqs: [
      {
        question: "Can you update my kitchen without ruining the character of my older Kirkwood home?",
        answer:
          "That's exactly what we do best. We match original trim profiles, stain colors, and architectural details so new cabinetry feels original to the house. Whether we're refacing existing cabinets or building new, the goal is always a kitchen that respects the home's era while working beautifully for modern life.",
      },
      {
        question: "Is cabinet refacing a good fit for a historic Kirkwood home?",
        answer:
          "Often, yes. Many older Kirkwood homes have solid, well-built cabinet boxes that are worth keeping — what's dated is the doors, fronts, and finish. Refacing replaces everything you see while preserving the sound structure and original layout. We'll assess your cabinets during the consultation and tell you honestly whether refacing or new construction makes more sense.",
      },
      {
        question: "Do you work around the quirks of older homes, like out-of-square walls?",
        answer:
          "Yes. Custom cabinetry is ideal for older homes precisely because we build to fit your actual space — uneven walls, settled floors, unusual dimensions and all. We measure carefully, scribe to fit, and create cabinetry that looks intentional rather than forced.",
      },
      {
        question: "How long does a custom cabinetry project take in Kirkwood?",
        answer:
          "Most kitchen projects run 8–12 weeks from consultation to installation. Refacing projects are faster, often completed in a few weeks with only about a week of on-site work. Smaller built-ins can finish in 4–6 weeks. We'll give you a clear timeline during your consultation.",
      },
      {
        question: "Are you a local company or a national franchise?",
        answer:
          "We're a locally owned, family-run business that's served St. Louis County since 1985 — not a franchise or chain. When you work with us, you're supporting local craftsmanship and getting personal service from the same team start to finish.",
      },
    ],
  },
  {
    city: "Ballwin",
    slug: "ballwin",
    state: "Missouri",
    stateAbbr: "MO",
    county: "St. Louis County",
    zipCodes: ["63011", "63021", "63022"],
    coordinates: {
      latitude: "38.5950",
      longitude: "-90.5462",
    },
    heroTitle: "Custom Cabinetry in Ballwin, Missouri",
    heroSubtitle:
      "Practical, beautifully built custom cabinets for Ballwin families — handcrafted locally since 1985",
    description:
      "Ballwin is a community of family homes — the kind of subdivisions built from the 1970s through the 1990s along Manchester and Clayton Roads, where the bones are solid but the original builder-grade cabinets have run their course. Professional Wood Interiors helps Ballwin homeowners get more function and beauty from these spaces with custom cabinetry designed around real family life. Everything we build is crafted by hand in our local shop, sized to your home, and made to hold up to years of daily use.",
    serviceArea: ["Ellisville", "Manchester", "Winchester", "Wildwood", "Chesterfield"],
    localExpertise: {
      heading: "Serving Ballwin Families Since 1985",
      content: [
        "Ballwin grew up as a family suburb, and most of its neighborhoods reflect that — practical two-stories and ranches on comfortable lots, served by the Rockwood and Parkway school districts, close to Vlasis Park, Ferris Park, and the Manchester Road corridor. We've worked in homes throughout the area, and we understand what Ballwin families actually need: storage that keeps up with busy households, finishes that survive kids and pets, and layouts that make weeknight dinners and weekend gatherings easier.",
        "A lot of Ballwin homes were built with cabinet boxes that are still perfectly sound but topped with dated oak doors, worn finishes, and hardware from a different decade. That makes many of these kitchens great candidates for refacing — a real transformation without a full tear-out. For families who want to change the layout, open up the kitchen, or replace failing cabinets entirely, a full custom remodel is the better path. We'll look at your actual kitchen and recommend the approach that fits your home and your goals.",
        "As a local, family-owned shop, we treat your project the way we'd want ours handled — straightforward answers, realistic timelines, and a team that shows up when it says it will. You won't deal with pushy salespeople or cookie-cutter packages, just experienced craftsmen who build quality cabinetry and stand behind it.",
      ],
    },
    whyChooseUs: {
      heading: "Why Ballwin Families Work With Us",
      reasons: [
        {
          title: "Designed for Real Family Life",
          description:
            "Deep drawers for pots and pans, durable finishes for busy kitchens, smart storage for growing households, mudroom and pantry solutions that handle the chaos. We design around how your family actually lives.",
        },
        {
          title: "Refacing or Full Remodel",
          description:
            "Many Ballwin kitchens have sound cabinet boxes ideal for refacing; others call for a full custom build. We assess yours honestly and recommend the option that fits your home and your goals.",
        },
        {
          title: "Built Locally, Not Imported",
          description:
            "Your cabinetry is crafted in our St. Louis-area shop — not shipped from overseas. That means better quality control, faster turnaround, and a team you can actually reach.",
        },
        {
          title: "We Show Up When We Say",
          description:
            "For busy Ballwin families juggling work, school, and activities, a contractor who keeps to the schedule and communicates clearly makes all the difference. That's how we work.",
        },
        {
          title: "Built to Last",
          description:
            "Solid wood construction, quality hardware, and hand-applied finishes mean your cabinetry withstands daily family use and still looks great decades from now — not just until the warranty runs out.",
        },
      ],
    },
    process: {
      heading: "Our Process for Ballwin Projects",
      steps: [
        {
          title: "Free In-Home Consultation",
          description:
            "We come to your Ballwin home to understand your needs, assess the space, and take accurate measurements. This conversation helps us design the right solution for your family — no charge, no pressure.",
        },
        {
          title: "Custom Design & Clear Proposal",
          description:
            "We create detailed plans tailored to your space and lifestyle, then walk you through a clear proposal so you know exactly what we're recommending and why. We refine the design together until it's right.",
        },
        {
          title: "Quality Construction",
          description:
            "Your cabinetry is built by hand in our workshop using solid materials and proven methods. We keep you informed on progress and hold to high standards at every step.",
        },
        {
          title: "Professional Installation",
          description:
            "Our team arrives on time, works efficiently, respects your home, and ensures perfect fit and finish. We clean up completely and aren't done until you're satisfied.",
        },
      ],
    },
    faqs: [
      {
        question: "My Ballwin home has the original builder-grade cabinets — should I reface or replace?",
        answer:
          "It depends on the condition of the boxes and whether the layout still works for you. Many Ballwin homes from the 1970s–90s have structurally sound cabinet boxes, which makes refacing — new doors, fronts, veneer, and hardware — a great-value transformation. If the boxes are failing or you want to change the layout, a full custom remodel makes more sense. We'll assess yours and give you an honest recommendation.",
      },
      {
        question: "Can you design storage that works for a busy family?",
        answer:
          "Absolutely — it's most of what we do in Ballwin. Deep pot-and-pan drawers, pull-out shelves, pantry organization, homework and drop-zone stations, mudroom cabinetry, and durable finishes that handle daily wear. We design around your family's actual routines, not a generic catalog layout.",
      },
      {
        question: "Do you work throughout Ballwin and the surrounding area?",
        answer:
          "Yes. We serve homeowners across Ballwin, Ellisville, Manchester, Winchester, Wildwood, and the surrounding St. Louis County communities. We're familiar with the area's homes and happy to work wherever you are.",
      },
      {
        question: "How long will my project take?",
        answer:
          "Most kitchen cabinet projects take 8–12 weeks from consultation to installation. Refacing is faster — often a few weeks total with about a week of on-site work. Built-ins and smaller projects can finish in 4–6 weeks. We'll provide a specific timeline during your consultation.",
      },
      {
        question: "How long will the cabinets last?",
        answer:
          "With normal care, our cabinetry easily lasts 30 years or more. We use solid wood construction, quality hardware, and durable hand-applied finishes specifically because we build for longevity. Many clients from the 1980s and 90s still have their original cabinets looking great.",
      },
    ],
  },
  {
    city: "Creve Coeur",
    slug: "creve-coeur",
    state: "Missouri",
    stateAbbr: "MO",
    county: "St. Louis County",
    zipCodes: ["63141", "63146"],
    coordinates: {
      latitude: "38.6608",
      longitude: "-90.4426",
    },
    heroTitle: "Custom Cabinetry in Creve Coeur, Missouri",
    heroSubtitle:
      "Custom cabinets and built-ins for Creve Coeur's established homes — handcrafted nearby since 1985",
    description:
      "Creve Coeur is a community of established homes — mid-century ranches, mature two-stories, and well-kept properties near Creve Coeur Lake Memorial Park and the Olive Boulevard corridor. Professional Wood Interiors is based just up the road in Maryland Heights, so Creve Coeur is essentially our backyard. For nearly four decades we've designed and built custom cabinetry for homes like these — updating dated kitchens, adding built-in storage, and crafting pieces that bring solid older homes thoroughly up to date.",
    serviceArea: ["Maryland Heights", "Olivette", "Town and Country", "Frontenac", "Chesterfield"],
    localExpertise: {
      heading: "Your Neighbors in Custom Cabinetry",
      content: [
        "Our shop sits in Maryland Heights, just minutes from Creve Coeur, which means we know these neighborhoods well — the established streets near Creve Coeur Lake, the homes off Ladue and Olive, the mature subdivisions that have anchored this community for decades. Many of these houses were built with quality and good bones, but their kitchens were designed for a different era. That's where we come in: bringing thoughtful, handcrafted cabinetry to homes that deserve it.",
        "Creve Coeur's established housing stock is exactly the kind that benefits from a careful eye. Some kitchens have sound cabinet boxes that make refacing the smart, efficient choice — a full visual transformation without a major tear-out. Others are ready for a complete custom remodel, with new layouts that finally open the kitchen to the rest of the home. We assess each project on its own terms and recommend what genuinely fits, never what simply costs more.",
        "Because we're local and family-owned, you deal directly with the people designing and building your cabinetry. Being close by also means we're easy to reach — before, during, and long after installation. That accessibility, combined with nearly forty years of craftsmanship, is why Creve Coeur homeowners keep calling us back.",
      ],
    },
    whyChooseUs: {
      heading: "Why Creve Coeur Homeowners Choose Us",
      reasons: [
        {
          title: "Right Down the Road",
          description:
            "Our Maryland Heights shop is minutes from Creve Coeur. We know the neighborhoods, we're easy to reach, and being local means real accountability before, during, and after your project.",
        },
        {
          title: "Experienced with Established Homes",
          description:
            "Creve Coeur's mid-century and mature homes have quality bones and dated kitchens — a combination we've updated countless times, with respect for what's worth keeping.",
        },
        {
          title: "Refacing or Full Custom",
          description:
            "Some kitchens are perfect for refacing; others deserve a full custom remodel. We recommend the approach that fits the home and your goals, not the larger project.",
        },
        {
          title: "Handcrafted in Our Shop",
          description:
            "Every cabinet, door, and built-in is made by hand in our local workshop. No catalog ordering, no imported components — just craftsmanship you can come see in person.",
        },
        {
          title: "Nearly Four Decades of Trust",
          description:
            "We've served St. Louis County homeowners since 1985. Our reputation is built one satisfied neighbor at a time, and we protect it on every job.",
        },
      ],
    },
    process: {
      heading: "How We Work with Creve Coeur Homeowners",
      steps: [
        {
          title: "In-Home Consultation",
          description:
            "We visit your Creve Coeur home — a short trip from our shop — to see the space, take measurements, and understand your goals. We'll talk through what's working, what isn't, and what's possible.",
        },
        {
          title: "Custom Design",
          description:
            "We develop detailed plans tailored to your home and the way you live, then review drawings, materials, finishes, and hardware with you. Nothing moves forward until the design is exactly what you want.",
        },
        {
          title: "Expert Craftsmanship",
          description:
            "Your cabinetry is built by hand in our nearby workshop using solid wood and proven joinery. We keep you updated and welcome shop visits — it's an easy drive.",
        },
        {
          title: "Professional Installation",
          description:
            "Our installers handle every detail with care, ensure precise fit and finish, and treat your home with respect. We clean up completely and aren't finished until you're delighted.",
        },
      ],
    },
    faqs: [
      {
        question: "Are you actually local to Creve Coeur?",
        answer:
          "Yes — our shop is in Maryland Heights, just minutes from Creve Coeur. Being this close means we know the area's homes well, we're easy to reach, and we can be responsive before, during, and after your project. Creve Coeur is effectively our backyard.",
      },
      {
        question: "My Creve Coeur home is from the 1960s — can you modernize the kitchen without a total gut?",
        answer:
          "Often, yes. Many established Creve Coeur homes have solid cabinet boxes worth keeping. Refacing replaces the doors, drawer fronts, visible surfaces, and hardware for a complete new look without a full tear-out. If you want to change the layout or the boxes are failing, a full custom remodel is the better route. We'll assess your kitchen and recommend honestly.",
      },
      {
        question: "Do you build everything yourselves or order from a manufacturer?",
        answer:
          "We build everything by hand in our local workshop. That means true custom sizing, personalized details, and quality control at every step — and since we're nearby, you're welcome to visit and see your cabinetry being crafted.",
      },
      {
        question: "What kinds of projects do you handle in Creve Coeur?",
        answer:
          "Everything from full kitchen remodels and cabinet refacing to home-office built-ins, entertainment centers, bookcases, and custom storage. Whether it's a complete kitchen or a single built-in, we approach every project with the same care.",
      },
      {
        question: "How soon can you start?",
        answer:
          "It depends on our current schedule and your project's scope, but being local lets us be responsive. Reach out for a consultation and we'll give you a realistic timeline. Most kitchen projects run 8–12 weeks from consultation to installation; refacing is faster.",
      },
    ],
  },
  {
    city: "Glendale",
    slug: "glendale",
    state: "Missouri",
    stateAbbr: "MO",
    county: "St. Louis County",
    zipCodes: ["63122"],
    coordinates: {
      latitude: "38.5959",
      longitude: "-90.3779",
    },
    heroTitle: "Custom Cabinetry in Glendale, Missouri",
    heroSubtitle:
      "Handcrafted cabinets and built-ins for Glendale's classic homes — built locally since 1985",
    description:
      "Glendale is a small, established community of classic homes on quiet, tree-lined streets between Kirkwood and Webster Groves. The houses here — many dating to the early and mid-20th century — have charm and solid construction, but their kitchens often reflect the era they were built in. Professional Wood Interiors helps Glendale homeowners bring these spaces up to date with custom cabinetry that honors the home's character. Everything is handcrafted in our local shop and built to fit your home precisely.",
    serviceArea: ["Kirkwood", "Webster Groves", "Rock Hill", "Oakland", "Warson Woods"],
    localExpertise: {
      heading: "Custom Cabinetry for Glendale's Classic Homes",
      content: [
        "Glendale is one of those small St. Louis communities where the homes have real character — older houses with original woodwork, established trees, and a settled, neighborly feel. Served by the well-regarded Kirkwood School District and tucked between Kirkwood and Webster Groves, it's a place where homeowners tend to invest in their houses for the long term. We've worked in homes like these throughout the area, and we know how to update a kitchen or add built-ins without losing what makes an older Glendale home special.",
        "These classic homes reward a careful approach. Many have sound cabinet boxes and good architectural detailing — original casing, trim, and millwork worth preserving. For kitchens where the structure is solid but the look is dated, refacing offers a genuine transformation while keeping the existing layout intact. For homes that need a reconfigured kitchen or replacement of failing cabinetry, we build full custom remodels designed to match the home's era. Either way, matching existing trim and finishes is central to how we work in Glendale.",
        "We're a local, family-owned shop, which means you work with the same craftsmen from first measurement to final installation. There's no national-chain layer between you and the people building your cabinets — just direct communication, honest guidance, and workmanship we stand behind. That's how we've earned the trust of homeowners across Glendale and the neighboring communities since 1985.",
      ],
    },
    whyChooseUs: {
      heading: "Why Glendale Homeowners Choose Us",
      reasons: [
        {
          title: "Experienced with Classic Homes",
          description:
            "Glendale's older houses have character worth protecting. We update kitchens and add built-ins in ways that honor original woodwork and architectural detail rather than erasing it.",
        },
        {
          title: "We Match the Details",
          description:
            "Matching existing trim profiles, casing, and stain colors is one of our strengths — essential in classic homes where new cabinetry needs to feel original.",
        },
        {
          title: "Refacing or Full Custom",
          description:
            "Many Glendale kitchens have sound boxes ideal for refacing; others need a full rebuild. We assess yours and recommend the approach that genuinely fits.",
        },
        {
          title: "Built by Hand, Locally",
          description:
            "Every piece is crafted in our St. Louis-area shop. You work directly with the people building your cabinetry — no subcontractors, no chain-store distance.",
        },
        {
          title: "Local Since 1985",
          description:
            "Nearly four decades serving St. Louis County means a reputation we protect on every project, and the experience to know what holds up over time.",
        },
      ],
    },
    process: {
      heading: "How We Work with Glendale Homeowners",
      steps: [
        {
          title: "In-Home Consultation",
          description:
            "We visit your Glendale home to see the space, take precise measurements, and understand your goals. For classic homes, this is where we identify the details worth preserving.",
        },
        {
          title: "Custom Design",
          description:
            "We develop detailed plans tailored to your home and its era, then review drawings, materials, finishes, and hardware with you — refining until everything feels right.",
        },
        {
          title: "Handcrafted Construction",
          description:
            "Your cabinetry is built by hand in our local workshop using solid wood and time-tested joinery. We keep you updated and welcome shop visits along the way.",
        },
        {
          title: "Careful Installation",
          description:
            "Our installers respect your home, work cleanly, and handle the realities of older houses with care. We're not finished until the fit is perfect and you're delighted.",
        },
      ],
    },
    faqs: [
      {
        question: "Can you update my Glendale kitchen without losing the home's classic character?",
        answer:
          "That's our specialty. We match original trim, casing, and stain colors so new cabinetry feels like it has always belonged. Whether we reface existing cabinets or build new, the goal is a kitchen that respects your home's era while working beautifully today.",
      },
      {
        question: "Is refacing a good option for an older Glendale home?",
        answer:
          "Frequently, yes. Many classic Glendale homes have well-built cabinet boxes that are worth keeping — what's dated is the doors, fronts, and finish. Refacing renews everything visible while preserving the sound structure and the existing layout. We'll assess your cabinets and recommend honestly between refacing and new construction.",
      },
      {
        question: "Do you work with the layouts and quirks of older homes?",
        answer:
          "Yes. Custom cabinetry is ideal for older homes because we build to fit your actual space — out-of-square walls, settled floors, unusual dimensions and all. We measure carefully and scribe to fit so the result looks intentional, never forced.",
      },
      {
        question: "Do you serve Glendale and the nearby communities?",
        answer:
          "We do — Glendale, Kirkwood, Webster Groves, Rock Hill, Oakland, Warson Woods, and the surrounding St. Louis County area. We're familiar with the homes throughout these neighborhoods and happy to work wherever you are.",
      },
      {
        question: "Are you local, or a national chain?",
        answer:
          "We're a locally owned, family-run business serving St. Louis County since 1985 — not a franchise. You'll work with the same team from first consultation to final walkthrough, supporting local craftsmanship in the process.",
      },
    ],
  },
  // Add more cities here - each new city automatically gets a landing page
];

/**
 * Get location data by slug
 * @param slug - URL-friendly city identifier (e.g., "wildwood")
 * @returns LocationData object or null if not found
 */
export function getLocationBySlug(slug: string): LocationData | null {
  const location = locations.find(loc => loc.slug === slug.toLowerCase());
  return location || null;
}

/**
 * Get all city slugs for static page generation
 * @returns Array of city slugs
 */
export function getAllLocationSlugs(): string[] {
  return locations.map(loc => loc.slug);
}

/**
 * Get all locations
 * @returns Array of all LocationData objects
 */
export function getAllLocations(): LocationData[] {
  return locations;
}
