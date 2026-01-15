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
    description: 'For nearly four decades, Professional Wood Interiors has partnered with Wildwood homeowners to transform kitchens, living rooms, and home offices with custom cabinetry that reflects both craftsmanship and character. Whether you&apos;re reimagining your kitchen with new cabinets or adding built-in storage that complements your home&apos;s architecture, we build everything by hand in our local shop—designed specifically for your space.',
    serviceArea: ['Ellisville', 'Ballwin', 'Chesterfield', 'Eureka', 'Pacific'],
    localExpertise: {
      heading: 'Serving Homeowners Throughout Wildwood',
      content: [
        'Wildwood is known for its spacious homes, wooded lots, and families who value quality craftsmanship. We&apos;ve worked in neighborhoods across the area—from established communities near Babler State Park to newer developments along Highway 100—and understand what Wildwood homeowners expect: attention to detail, reliable communication, and cabinetry that lasts.',
        'Our team has spent years getting to know the unique character of homes in this community. We&apos;ve designed custom kitchen cabinets for split-level layouts, built floor-to-ceiling bookcases for two-story great rooms, and crafted entertainment centers that integrate seamlessly with stone fireplaces. Every project begins with a conversation about how you live in your home—and how we can make it work even better.',
        'Because we&apos;re a local shop, you&apos;ll work directly with the people building your cabinets. No subcontractors, no middlemen—just experienced craftsmen who take pride in every dovetail joint and finish detail. We&apos;re here before, during, and after installation to make sure everything exceeds your expectations.'
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
          description: 'We build everything ourselves in our St. Louis area workshop. You can visit, see our process, and know exactly who&apos;s crafting your cabinetry. Quality control is in our hands from start to finish.'
        },
        {
          title: 'Experienced Craftsmen',
          description: 'With over 35 years in business, we&apos;ve refined our techniques and earned the trust of hundreds of homeowners. Our team brings both skill and problem-solving experience to every project.'
        },
        {
          title: 'Direct Communication',
          description: 'You&apos;ll work with the same team from consultation through installation. Questions get answered quickly, changes are handled smoothly, and you&apos;re always informed about progress.'
        },
        {
          title: 'Long-Term Value',
          description: 'Custom cabinetry is an investment in your home. We use solid wood construction, premium hardware, and durable finishes that look beautiful for decades—not just years.'
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
          description: 'Our team creates detailed plans tailored to your space and preferences. We&apos;ll walk you through the design, make adjustments as needed, and ensure every detail aligns with your goals before we begin building.'
        },
        {
          title: 'Expert Craftsmanship',
          description: 'Your cabinets are built by hand in our local workshop using solid wood and time-tested joinery techniques. We keep you updated throughout the build and welcome you to visit and see the work in progress.'
        },
        {
          title: 'Professional Installation',
          description: 'Our installation team handles every detail with care, ensuring perfect fit and finish. We respect your home, work efficiently, and don&apos;t consider the job done until you&apos;re completely satisfied.'
        }
      ]
    },
    faqs: [
      {
        question: 'Do you work directly in Wildwood, or do you subcontract?',
        answer: 'We work directly with homeowners throughout Wildwood and handle every aspect of your project ourselves—from design and construction to installation. There are no subcontractors involved. You&apos;ll work with our team from the first consultation to the final walkthrough.'
      },
      {
        question: 'How long does a custom cabinetry project typically take?',
        answer: 'Timeline varies based on project scope, but most kitchen cabinet projects take 8–12 weeks from initial consultation to installation. Smaller projects like built-in bookcases or entertainment centers may be completed in 4–6 weeks. We&apos;ll provide a clear timeline during your consultation and keep you informed throughout the process.'
      },
      {
        question: 'Is cabinet refacing a good option for my Wildwood home?',
        answer: 'Cabinet refacing is an excellent choice if your existing cabinet boxes are structurally sound but your doors, drawer fronts, and finish are outdated. It costs 40–50% less than full replacement, involves minimal disruption, and can completely transform your kitchen&apos;s appearance. During our consultation, we&apos;ll assess your cabinets and recommend whether refacing or new construction makes the most sense for your situation.'
      },
      {
        question: 'Do you build everything locally, or order from a manufacturer?',
        answer: 'We build everything ourselves in our local workshop near St. Louis. This means true custom sizing, personalized design details, and quality control at every step. You&apos;re welcome to visit our shop and see where your cabinets will be crafted.'
      },
      {
        question: 'What types of wood and finishes do you offer?',
        answer: 'We work with a variety of hardwoods including oak, maple, cherry, walnut, and hickory. For finishes, we offer stains, paints, and natural finishes—all applied by hand for a superior result. During your consultation, we&apos;ll show samples and discuss which options best complement your home&apos;s style.'
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
    description: 'Since 1985, Professional Wood Interiors has earned the trust of Chesterfield families who appreciate fine craftsmanship and personalized service. We design and build custom cabinetry that enhances your home&apos;s value and complements your lifestyle—from sophisticated kitchen renovations to stunning built-in libraries. Every piece is handcrafted in our workshop with meticulous attention to detail and built to last generations.',
    serviceArea: ['Town and Country', 'Ballwin', 'Wildwood', 'Clayton', 'Creve Coeur'],
    localExpertise: {
      heading: 'Trusted by Chesterfield Homeowners',
      content: [
        'Chesterfield represents a blend of established elegance and modern sophistication, with homes that range from classic estates to contemporary designs. Over the years, we&apos;ve had the privilege of working throughout the community—in neighborhoods near Chesterfield Mall, historic estates along the Monarch levee, and newer developments in the valley—creating custom cabinetry that respects each home&apos;s unique architectural character.',
        'We understand that Chesterfield homeowners value both aesthetics and functionality. Our portfolio includes everything from gourmet kitchen remodels with custom pantry systems to home offices with floor-to-ceiling built-ins, media rooms with hidden storage, and mudrooms designed for active families. Each project starts with careful listening: understanding not just what you need, but how your family actually uses the space.',
        'As a local, family-owned business, we&apos;re committed to transparent communication and exceptional results. You&apos;ll work with experienced craftsmen who stand behind their work—no sales pressure, no surprises, just honest expertise and quality you can see and feel. We&apos;re proud to be part of the Chesterfield community and treat every home as if it were our own.'
      ]
    },
    whyChooseUs: {
      heading: 'What Sets Us Apart in Chesterfield',
      reasons: [
        {
          title: 'Personalized Design Process',
          description: 'We don&apos;t work from stock plans or limited options. Our design process is collaborative and tailored entirely to your vision, space, and budget. Whether you prefer traditional styling or contemporary minimalism, we craft cabinetry that reflects your personal taste.'
        },
        {
          title: 'Crafted Locally with Pride',
          description: 'Every cabinet, drawer, and shelf is built right here in our St. Louis area facility by skilled craftsmen who take ownership of their work. You&apos;re welcome to visit our shop, meet the team, and watch your project take shape.'
        },
        {
          title: 'Decades of Proven Excellence',
          description: 'Since 1985, we&apos;ve honed our craft and built lasting relationships with homeowners across St. Louis County. Our experience means we anticipate challenges, solve problems creatively, and deliver results that exceed expectations.'
        },
        {
          title: 'Transparent, Honest Communication',
          description: 'From your first consultation to final installation, you&apos;ll work with the same dedicated team. We return calls promptly, provide realistic timelines, and keep you informed every step of the way. No runarounds, no excuses.'
        },
        {
          title: 'Built to Last Generations',
          description: 'We use time-tested joinery, solid hardwoods, and commercial-grade hardware because we build cabinetry meant to be passed down—not replaced. Your investment today becomes a lasting part of your home&apos;s story.'
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
          description: 'Our team develops comprehensive plans specific to your home and needs. We present drawings, discuss material and finish options, and refine every detail together. Nothing moves forward until you&apos;re confident and excited about the design.'
        },
        {
          title: 'Handcrafted Construction',
          description: 'Your cabinetry is built entirely in our local workshop using traditional techniques and premium materials. Throughout construction, we maintain quality checks and provide progress updates. We welcome shop visits if you&apos;d like to see the craftsmanship in person.'
        },
        {
          title: 'Expert Installation & Finishing',
          description: 'Our professional installers treat your home with respect and care, ensuring precise fit and flawless finish. We handle every detail—from protecting your floors to cleaning up completely. The project isn&apos;t finished until you&apos;re absolutely delighted.'
        }
      ]
    },
    faqs: [
      {
        question: 'Do you serve the entire Chesterfield area?',
        answer: 'Yes, we work throughout Chesterfield and surrounding communities including Town and Country, Ballwin, Wildwood, and beyond. We&apos;ve completed projects across St. Louis County and are familiar with the diverse architectural styles and home layouts throughout the area.'
      },
      {
        question: 'What&apos;s the typical timeline for a kitchen cabinet project?',
        answer: 'Most custom kitchen projects take 10–14 weeks from design approval to installation. This includes design finalization (2–3 weeks), construction (6–8 weeks), and installation (1–2 weeks). Smaller projects like bathroom vanities or built-in shelving typically complete faster. We&apos;ll provide a detailed timeline specific to your project during our consultation.'
      },
      {
        question: 'Can you match existing woodwork in my home?',
        answer: 'Absolutely. Matching existing cabinetry or architectural details is one of our specialties. We can replicate wood species, stain colors, door styles, and hardware to create seamless additions. Bring photos or samples to your consultation, and we&apos;ll show you how we approach matching projects.'
      },
      {
        question: 'Are you a local company or a national franchise?',
        answer: 'We&apos;re a locally owned and operated business based in the St. Louis area—not a franchise or national chain. We&apos;ve been serving St. Louis County homeowners since 1985. When you work with us, you&apos;re supporting local craftsmanship and getting personalized service you won&apos;t find with larger operations.'
      },
      {
        question: 'Do you offer cabinet refacing, or only new construction?',
        answer: 'We offer both custom new construction and professional cabinet refacing. Refacing can save 40–60% compared to full replacement while dramatically updating your kitchen&apos;s look. During our consultation, we&apos;ll honestly assess whether refacing or new cabinets makes more sense for your situation and budget.'
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
    heroSubtitle: 'Sophisticated cabinetry and built-ins for Clayton&apos;s distinctive homes',
    description: 'Professional Wood Interiors has been creating exceptional custom cabinetry for Clayton residents since 1985. We specialize in designs that honor the architectural heritage of Clayton&apos;s historic neighborhoods while meeting the demands of modern living. From updating classic kitchens in century-old homes to designing sleek contemporary built-ins, our craftsmanship enhances both function and beauty in every project.',
    serviceArea: ['University City', 'Richmond Heights', 'Brentwood', 'Maplewood', 'Webster Groves'],
    localExpertise: {
      heading: 'Craftsmanship for Clayton&apos;s Unique Architecture',
      content: [
        'Clayton&apos;s architectural diversity—from charming Tudor revivals and stately colonials to mid-century modern gems and contemporary luxury condos—requires a thoughtful, adaptable approach. We&apos;ve worked throughout Clayton&apos;s walkable neighborhoods, from homes near the Central Business District to tree-lined streets closer to Forest Park, and we understand how to design cabinetry that complements each home&apos;s distinct character and era.',
        'Whether you&apos;re renovating a historic kitchen that needs period-appropriate detailing, modernizing a mid-century home with clean-lined cabinetry, or maximizing storage in an urban condo, we bring both technical expertise and design sensitivity. Our work includes custom kitchen renovations that respect original architecture, sophisticated home office built-ins for professionals, and elegant entertainment centers that integrate seamlessly with your home&apos;s style.',
        'We&apos;re a local business that values long-term relationships and quality workmanship. From your first phone call through final installation, you&apos;ll receive straightforward answers, realistic expectations, and attentive service. We&apos;re here to make the process smooth and the results exceptional—because your home deserves nothing less.'
      ]
    },
    whyChooseUs: {
      heading: 'Why Clayton Residents Trust Us',
      reasons: [
        {
          title: 'Architectural Sensitivity',
          description: 'We design cabinetry that respects your home&apos;s architectural style—whether that means honoring historical details, complementing mid-century aesthetics, or embracing contemporary minimalism. Our designs enhance, never clash.'
        },
        {
          title: 'Local Craftsmanship',
          description: 'Everything we create is built in our St. Louis area workshop by experienced craftspeople who care deeply about their work. You&apos;ll never deal with imported cabinets or distant manufacturers—just skilled hands and honest expertise.'
        },
        {
          title: 'Four Decades of Excellence',
          description: 'We&apos;ve spent over 35 years perfecting our craft and serving St. Louis families. That longevity speaks to consistent quality, satisfied clients, and a reputation we protect with every project we undertake.'
        },
        {
          title: 'Straightforward Communication',
          description: 'We believe in clear, honest communication from start to finish. No high-pressure sales tactics, no confusing jargon, no surprise costs. Just transparent dialogue with people who respect your time and investment.'
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
          description: 'We develop detailed plans that address your specific goals and respect your home&apos;s architecture. You&apos;ll see drawings, review material selections, and discuss finish options until every detail feels right. We don&apos;t proceed until you&apos;re fully satisfied with the design.'
        },
        {
          title: 'Meticulous Craftsmanship',
          description: 'Your cabinetry is built entirely by hand in our local workshop using proven techniques and quality materials. We maintain strict standards throughout construction and keep you informed of progress. You&apos;re welcome to visit and see your project being built.'
        },
        {
          title: 'Professional Installation',
          description: 'Our experienced installation team works with care and precision, treating your home respectfully and ensuring every piece fits perfectly. We handle all details, clean up thoroughly, and don&apos;t consider the work complete until you&apos;re delighted with the results.'
        }
      ]
    },
    faqs: [
      {
        question: 'Can you work with the unique layouts of older Clayton homes?',
        answer: 'Absolutely. Many of Clayton&apos;s homes feature challenging layouts—uneven walls, unusual dimensions, sloped floors—that come with age and character. Custom cabinetry is ideal for these situations because we build to fit your exact space, not standard dimensions. We&apos;ll measure carefully, account for quirks, and create solutions that look like they&apos;ve always been there.'
      },
      {
        question: 'How long does a typical custom cabinet project take in Clayton?',
        answer: 'Most kitchen cabinetry projects take 10–12 weeks from initial design through installation. This includes design refinement (2–3 weeks), construction in our workshop (6–8 weeks), and professional installation (1 week). Smaller projects like bathroom vanities or built-in shelving often complete in 6–8 weeks. We&apos;ll provide a specific timeline during your consultation.'
      },
      {
        question: 'Do you specialize in any particular architectural style?',
        answer: 'We work across all styles—traditional, transitional, contemporary, and everything in between. Our strength is adapting our craftsmanship to match your home&apos;s character, whether that&apos;s a 1920s Tudor, a 1960s ranch, or a modern condo. We&apos;ll show you examples of our work in different styles during our consultation.'
      },
      {
        question: 'Are you licensed and insured to work in Clayton?',
        answer: 'Yes, we&apos;re fully licensed and insured to work throughout St. Louis County, including Clayton. We carry comprehensive liability insurance and workers&apos; compensation coverage. We&apos;re also familiar with local building requirements and will handle any necessary permits for your project.'
      },
      {
        question: 'What if I want to match existing cabinetry or woodwork?',
        answer: 'Matching existing work is one of our core skills. Whether you&apos;re adding to a kitchen, building bookcases to match existing trim, or expanding a built-in system, we can replicate wood species, stains, finishes, and construction details. Bring reference photos or samples, and we&apos;ll show you how closely we can match your existing woodwork.'
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
    description: 'For over 35 years, Professional Wood Interiors has provided St. Peters homeowners with exceptional custom cabinetry that combines practical functionality with timeless design. Whether you&apos;re upgrading your kitchen, adding storage solutions, or creating custom built-ins for your growing family, we build everything by hand in our local workshop—crafted to fit your home perfectly and built to last for decades.',
    serviceArea: ['O\'Fallon', 'St. Charles', 'Wentzville', 'Cottleville', 'Lake St. Louis'],
    localExpertise: {
      heading: 'Serving St. Peters Families Since 1985',
      content: [
        'St. Peters is a thriving community of families who value both quality and value in their homes. From established neighborhoods near Mid Rivers Mall to newer developments throughout the city, we&apos;ve helped hundreds of St. Peters homeowners create more functional, beautiful spaces with custom cabinetry designed specifically for how they live.',
        'We understand that St. Peters families need practical solutions that also look great. Our projects range from complete kitchen transformations with smart storage solutions to mudrooms that handle busy family life, home offices for remote workers, and entertainment centers built around your lifestyle. Every design starts by listening to your needs and working within your budget to create maximum value.',
        'As a local, family-run business, we treat every project with care and respect. You won&apos;t find pushy salespeople or cookie-cutter solutions here—just experienced craftsmen who take pride in delivering honest work, fair pricing, and cabinetry that your family will enjoy for years to come. We&apos;re part of the St. Charles County community and committed to earning your trust.'
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
          description: 'We&apos;ve been serving St. Charles County families since 1985. That longevity comes from doing what we say we&apos;ll do, treating people fairly, and standing behind our work. We&apos;ve built our reputation one satisfied customer at a time.'
        },
        {
          title: 'Clear, Honest Pricing',
          description: 'We provide detailed, transparent quotes with no hidden fees or surprise costs. You&apos;ll know exactly what you&apos;re getting and what it costs before we start. We believe in fair pricing and honest communication throughout your project.'
        },
        {
          title: 'Durable, Lasting Quality',
          description: 'We don&apos;t cut corners. Solid wood construction, quality hardware, hand-applied finishes, and proven joinery techniques mean your cabinetry withstands daily family use and looks great for decades—not just until the warranty expires.'
        }
      ]
    },
    process: {
      heading: 'Our Process for St. Peters Projects',
      steps: [
        {
          title: 'Free In-Home Consultation',
          description: 'We visit your St. Peters home to understand your vision, assess the space, and take accurate measurements. This conversation helps us understand your needs, preferences, and budget so we can design the right solution for your family.'
        },
        {
          title: 'Custom Design & Quote',
          description: 'We create detailed plans tailored to your space and lifestyle, then provide a clear, itemized quote with no hidden costs. You&apos;ll see exactly what we&apos;re proposing and what it costs. We refine the design together until it&apos;s exactly right.'
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
        answer: 'Yes, we regularly work throughout St. Peters, O&apos;Fallon, St. Charles, Wentzville, and surrounding St. Charles County communities. We&apos;re familiar with the area and happy to serve homeowners across the region. Distance is not an issue—we treat every project with the same care regardless of location.'
      },
      {
        question: 'How much does custom cabinetry cost compared to stock cabinets?',
        answer: 'Custom cabinetry typically costs 20–40% more than quality stock cabinets, but you get significantly more value: perfect fit for your exact space, personalized design, superior construction, and cabinetry built to last decades. We work with various budgets and will be upfront about costs. Many families find the investment worthwhile for the quality and functionality they receive.'
      },
      {
        question: 'Can you work within my budget?',
        answer: 'Absolutely. We work with families across different budget ranges and will be honest about what&apos;s achievable. We can suggest cost-effective materials, phased approaches, or design modifications to maximize value without sacrificing quality. Our goal is to create the best possible solution within your budget—not upsell you beyond it.'
      },
      {
        question: 'How long will my cabinets last?',
        answer: 'With proper care, our cabinetry easily lasts 30+ years and often much longer. We use solid wood construction, quality hardware, durable finishes, and proven joinery methods specifically because we build for longevity. Many of our clients from the 1980s and 1990s still have their original cabinets looking great today.'
      },
      {
        question: 'What&apos;s included in your quote?',
        answer: 'Our quotes include everything: design, materials, construction, hardware, finishing, delivery, and professional installation. We break down costs clearly so you know exactly what you&apos;re paying for. The only potential extras would be structural repairs we discover during installation (which we discuss with you first) or design changes you request after approval.'
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
    description: 'Professional Wood Interiors has proudly served St. Charles homeowners for over three decades, creating custom cabinetry that honors the city&apos;s rich history while meeting modern needs. From historic homes on Main Street to contemporary residences throughout the city, we bring thoughtful design and expert craftsmanship to every project—building cabinetry that complements your home&apos;s character and enhances your daily life.',
    serviceArea: ['St. Peters', 'O\'Fallon', 'Cottleville', 'Wentzville', 'New Town'],
    localExpertise: {
      heading: 'Custom Cabinetry for St. Charles Homes',
      content: [
        'St. Charles holds a special place in Missouri history, and that heritage is reflected in the diverse architecture throughout the city. Whether you own one of the charming historic homes near the riverfront, a classic mid-century house in established neighborhoods, or a modern home in newer developments, we approach each project with respect for your home&apos;s individual character and your family&apos;s specific needs.',
        'Our experience in St. Charles includes everything from careful kitchen renovations that preserve period details in older homes to contemporary built-ins for modern spaces, wine storage for collectors, mudrooms for active families, and custom home offices. We&apos;ve learned that St. Charles homeowners appreciate quality work done right—no shortcuts, no substitutes, just honest craftsmanship and materials built to endure.',
        'Working with us means working with people who care about their community and their reputation. We&apos;re accessible, straightforward, and committed to your satisfaction. From the initial consultation through installation and beyond, you&apos;ll receive personal attention from experienced craftsmen who take responsibility for every detail. That&apos;s how we&apos;ve built lasting relationships throughout St. Charles County since 1985.'
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
          description: 'We&apos;re not a national chain or franchise—we&apos;re a local business building everything in our own workshop. That means personal accountability, better quality control, and direct access to the people actually crafting your cabinetry. You know exactly where your cabinets come from and who made them.'
        },
        {
          title: 'Proven Track Record',
          description: 'Over 35 years serving St. Charles County speaks to consistency, reliability, and quality that homeowners trust. We&apos;ve earned our reputation project by project, and we protect it by doing right by every client.'
        },
        {
          title: 'No-Pressure Approach',
          description: 'We don&apos;t employ high-pressure sales tactics or pushy follow-ups. We provide honest assessments, clear pricing, and respectful guidance. You decide if and when you&apos;re ready to move forward—no games, no gimmicks.'
        },
        {
          title: 'Built to Be Inherited',
          description: 'We use traditional construction methods, premium materials, and hardware designed for generations of use. This is cabinetry you&apos;ll pass down to your children, not replace in ten years.'
        }
      ]
    },
    process: {
      heading: 'Working Together in St. Charles',
      steps: [
        {
          title: 'Complimentary Consultation',
          description: 'We begin by visiting your St. Charles home to see the space, understand your goals, and discuss your vision. This meeting helps us understand both the practical needs and aesthetic direction. There&apos;s no cost and no obligation—just conversation and assessment.'
        },
        {
          title: 'Design & Proposal',
          description: 'We develop a detailed design tailored to your space and present a comprehensive proposal with clear pricing. You&apos;ll see drawings, discuss materials and finishes, and have time to review everything carefully. We refine the plan together until it&apos;s exactly what you want.'
        },
        {
          title: 'Expert Construction',
          description: 'Your cabinetry is built in our local workshop using solid wood, quality hardware, and time-proven joinery. We maintain high standards throughout and provide updates on progress. You&apos;re always welcome to visit the shop and see your project being crafted.'
        },
        {
          title: 'Careful Installation',
          description: 'Our installation team handles every aspect with attention and care. We protect your home, ensure precise fit, and complete every detail. When we&apos;re finished, we clean up thoroughly and walk you through everything. We don&apos;t leave until you&apos;re completely satisfied.'
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
        answer: 'We recommend contacting us 3–4 months before you&apos;d like installation to complete. This allows time for consultation, design development, construction, and installation scheduling. However, we&apos;ll work with your timeline as best we can. Some smaller projects can be completed faster, while complex kitchen renovations may take longer.'
      },
      {
        question: 'Can you help with design ideas, or do I need to know exactly what I want?',
        answer: 'We help with design at every level. If you have a clear vision, we bring it to life. If you&apos;re unsure or need guidance, we offer suggestions based on your space, lifestyle, and preferences. Many clients start with general ideas and work with us to develop the details. That&apos;s part of our service—collaborative design that results in cabinetry perfectly suited to you.'
      },
      {
        question: 'Do you handle permits and inspections?',
        answer: 'Yes, we handle all necessary permits and coordinate any required inspections. We&apos;re familiar with St. Charles County building requirements and will ensure everything meets local codes and regulations. This is included as part of our comprehensive service.'
      },
      {
        question: 'What warranty do you offer?',
        answer: 'We stand behind our work with a comprehensive warranty covering materials and workmanship. The specifics depend on the project scope, but we take responsibility for any defects in our work. Beyond the formal warranty, we&apos;re a local business you can reach if you ever have concerns. We want you to be happy with your cabinetry for decades, and we&apos;ll make things right if issues arise.'
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
    heroSubtitle: 'Custom cabinets built for Wentzville&apos;s growing community',
    description: 'As Wentzville continues to grow, Professional Wood Interiors has been here providing homeowners with quality custom cabinetry since 1985. We understand that Wentzville families want practical, well-built solutions that fit their budget and lifestyle. From new construction kitchens to garage organization systems, mudroom storage to home office built-ins, we create cabinetry designed around how you live—built locally, priced fairly, and crafted to last.',
    serviceArea: ['O\'Fallon', 'Lake St. Louis', 'Dardenne Prairie', 'St. Peters', 'St. Charles'],
    localExpertise: {
      heading: 'Serving Wentzville&apos;s Growing Families',
      content: [
        'Wentzville is one of the fastest-growing communities in Missouri, with new neighborhoods and families moving in every year. We&apos;ve worked throughout the city—from newer developments near Wentzville Parkway to established neighborhoods closer to downtown—helping homeowners create functional, beautiful spaces with custom cabinetry that works for real family life.',
        'We understand what Wentzville families need: practical storage solutions, durable materials that handle kids and pets, smart organization systems, and designs that maximize space and value. Whether it&apos;s a growing family that needs more kitchen storage, a home office for remote work, or built-in solutions for an active household, we listen carefully and design accordingly.',
        'As a locally owned business, we take pride in straightforward service and honest pricing. No bait-and-switch, no pressure tactics, no inflated quotes. Just experienced craftsmen who build quality cabinetry, treat people fairly, and stand behind their work. We&apos;re part of this community, and we earn your trust one project at a time.'
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
          description: 'We&apos;ve been serving St. Charles County since 1985. Three decades in business doesn&apos;t happen by accident—it comes from doing quality work, treating customers fairly, and building relationships that last. We protect our reputation with every project.'
        },
        {
          title: 'Fair, Transparent Pricing',
          description: 'We provide clear quotes with honest pricing and no hidden costs. You&apos;ll know exactly what you&apos;re getting and what it costs before any work begins. We respect your budget and work to maximize value without compromising quality.'
        },
        {
          title: 'Built for the Long Term',
          description: 'We don&apos;t build disposable cabinetry. Solid construction, quality materials, and proven techniques mean your investment serves your family for decades. This is workmanship you can count on, built to withstand daily use and still look great years from now.'
        }
      ]
    },
    process: {
      heading: 'Our Simple Process for Wentzville Homes',
      steps: [
        {
          title: 'Free Home Visit',
          description: 'We come to your Wentzville home to see the space, understand what you need, and take measurements. This conversation helps us design solutions tailored to your family&apos;s lifestyle and budget. No charge, no pressure—just good conversation and expert assessment.'
        },
        {
          title: 'Design & Clear Quote',
          description: 'We develop a design specific to your needs and provide a detailed, itemized quote. You&apos;ll see exactly what we&apos;re proposing, what materials we&apos;ll use, and what everything costs. We work together to refine the design until it&apos;s exactly right for you.'
        },
        {
          title: 'Quality Construction',
          description: 'Your cabinetry is built by hand in our workshop using solid materials and time-tested methods. We keep you informed throughout the process and maintain high standards at every step. Quality isn&apos;t negotiable—it&apos;s how we&apos;ve stayed in business for decades.'
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
        answer: 'Absolutely. We work throughout Wentzville, including all the newer developments. We&apos;re familiar with the area and happy to serve homeowners wherever they are. Many of our clients are in newer homes who want to add custom touches, upgrade builder-grade cabinets, or add storage solutions the builder didn&apos;t include.'
      },
      {
        question: 'Can you beat big-box store prices?',
        answer: 'We typically can&apos;t match the lowest big-box prices because we build custom, not mass-produced. However, we offer significantly better value: cabinetry built to fit your exact space, personalized design, superior construction, and quality that lasts 30+ years instead of 10. Most families find our pricing competitive when they compare quality, service, and longevity.'
      },
      {
        question: 'Do you work with new construction?',
        answer: 'Yes, we frequently work with homeowners building new homes in Wentzville. We can coordinate with builders, work within construction schedules, and ensure your cabinetry is installed correctly and on time. If you&apos;re building, contact us early in the process so we can plan properly and provide input on cabinet layout.'
      },
      {
        question: 'How do you handle changes or issues during installation?',
        answer: 'We believe in straightforward communication. If we discover something unexpected during installation—structural issues, measurement challenges, etc.—we stop, discuss options with you, and agree on solutions before proceeding. We don&apos;t make assumptions or surprise you with changes. Any adjustments to scope or cost are discussed and approved first.'
      },
      {
        question: 'Can I see examples of your work before committing?',
        answer: 'Absolutely. During your consultation, we&apos;ll show you photos of completed projects, discuss similar work we&apos;ve done, and answer questions about our process and materials. We can also provide references from other Wentzville homeowners if you&apos;d like to hear directly from past clients. We want you to feel confident before moving forward.'
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
    heroSubtitle: 'Exceptional custom cabinets for St. Louis&apos; diverse neighborhoods',
    description: 'For over three decades, Professional Wood Interiors has been St. Louis&apos; trusted source for custom cabinetry that combines traditional craftsmanship with contemporary design. From historic Central West End brownstones to modern lofts downtown, from family homes in South City to updated bungalows in Tower Grove—we create cabinetry that respects your neighborhood&apos;s character while perfectly serving your needs.',
    serviceArea: ['Clayton', 'University City', 'Webster Groves', 'Kirkwood', 'Maplewood', 'Richmond Heights'],
    localExpertise: {
      heading: 'Craftsmanship Rooted in St. Louis',
      content: [
        'St. Louis neighborhoods each have their own distinct character and architectural heritage. We&apos;ve worked throughout the city—from Soulard&apos;s brick townhomes to Lafayette Square&apos;s Victorian mansions, from The Hill&apos;s cozy bungalows to the sleek condos of downtown—and we know how to design cabinetry that honors each area&apos;s unique style while adding modern functionality.',
        'Our work spans every type of project: restoring historic kitchens with period-appropriate details, creating contemporary built-ins for urban lofts, designing wine storage for collectors, maximizing space in smaller city homes, and crafting statement pieces for grand renovations. What ties everything together is our commitment to understanding your vision, respecting your home&apos;s architecture, and delivering workmanship that stands the test of time.',
        'We&apos;re a St. Louis business through and through—locally owned, locally operated, deeply connected to this community. When you work with us, you get straightforward answers, fair pricing, and the confidence that comes from working with people who&apos;ve built their reputation here, one project at a time, for over 35 years.'
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
          description: 'We&apos;re not a franchise, chain, or distant manufacturer. We&apos;re a St. Louis company building everything in our own workshop with our own hands. Supporting us means supporting local craftsmanship, local jobs, and local accountability.'
        },
        {
          title: 'Four Decades of Excellence',
          description: 'Since 1985, we&apos;ve built relationships and reputations across St. Louis by delivering consistently excellent work. Our longevity speaks to quality craftsmanship, satisfied clients, and integrity that homeowners trust.'
        },
        {
          title: 'Honest, Direct Communication',
          description: 'We believe in transparency and respect. Clear proposals, realistic timelines, straightforward pricing, and accessible team members. We&apos;ll tell you what&apos;s possible, what makes sense, and what it costs—without sales pressure or hidden agendas.'
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
          description: 'We meet you at your St. Louis home to see the space, understand your needs, and discuss possibilities. This in-person meeting is essential—it helps us appreciate your home&apos;s character, assess opportunities and challenges, and begin developing ideas tailored specifically to you.'
        },
        {
          title: 'Collaborative Design',
          description: 'We develop detailed plans that reflect your vision and work within your parameters. You&apos;ll see drawings, review materials and finishes, and have time to ask questions. We refine the design together through collaboration—this is your cabinetry, and it needs to be right.'
        },
        {
          title: 'Master Craftsmanship',
          description: 'Your project is built entirely in our local workshop by experienced craftspeople using quality materials and time-honored techniques. We maintain high standards at every stage and keep you informed of progress. You&apos;re welcome to visit and see the work firsthand.'
        },
        {
          title: 'Precise Installation',
          description: 'Our installation team handles every detail with care, ensuring perfect fit and finish while treating your home with respect. We manage all logistics, work efficiently, clean thoroughly, and don&apos;t consider the job complete until you&apos;re thoroughly satisfied.'
        }
      ]
    },
    faqs: [
      {
        question: 'Do you work in all St. Louis neighborhoods?',
        answer: 'Yes, we serve homeowners throughout St. Louis City and County, from downtown lofts to suburban homes and everything in between. We&apos;re familiar with the architectural diversity across the region and adapt our approach to each neighborhood&apos;s unique character.'
      },
      {
        question: 'Can you help with historic home projects and preservation requirements?',
        answer: 'Absolutely. We have extensive experience working on historic homes throughout St. Louis, including properties in local landmark districts and on the National Register. We understand preservation guidelines, can replicate historical details, and know how to blend modern functionality with period-appropriate aesthetics.'
      },
      {
        question: 'Do you handle small projects, or only full kitchen renovations?',
        answer: 'We handle projects of all sizes. Whether it&apos;s a single bathroom vanity, a built-in bookcase, or a complete whole-house cabinetry package, we approach every project with the same care and quality standards. Small projects are welcome and receive the same attention as larger ones.'
      },
      {
        question: 'How does pricing work for custom cabinetry?',
        answer: 'Pricing depends on the scope, materials, complexity, and finishes you choose. During our consultation, we&apos;ll discuss your budget and work to design solutions that maximize value. We provide detailed, itemized quotes so you understand exactly what you&apos;re getting. Custom work typically costs more than stock cabinets, but the difference in quality, fit, and longevity makes it a worthwhile investment for most homeowners.'
      },
      {
        question: 'What areas of St. Louis do you serve most often?',
        answer: 'We work throughout the entire St. Louis metro area, including both the city and county. Some areas where we&apos;ve completed many projects include Central West End, Clayton, University City, Webster Groves, Kirkwood, Tower Grove, Soulard, Lafayette Square, The Hill, and Maplewood—but we serve all neighborhoods and surrounding communities.'
      }
    ]
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
