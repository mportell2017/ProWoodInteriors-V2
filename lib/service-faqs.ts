/**
 * FAQs surfaced on the four service pages. Each set is service-specific
 * (no generic "what hours are you open?" filler) so FAQPage rich results
 * are eligible. Keep answers grounded — never invent specifics.
 */

export type FAQ = { question: string; answer: string };

export const kitchenCabinetryFAQs: FAQ[] = [
  {
    question:
      'How long does a custom kitchen cabinetry project take from design to installation?',
    answer:
      'Most full custom kitchens run 6–10 weeks from design approval to install, depending on size, finishes, and current shop schedule. The design conversation itself is typically 2–4 weeks. We can usually give you a firmer timeline after the in-home consultation.',
  },
  {
    question: 'What wood species and finishes do you offer?',
    answer:
      "We work in a wide range of hardwoods — including maple, oak, cherry, walnut, and painted-grade maple — and can match nearly any stain or paint color. Door styles range from traditional raised panel to clean shaker and slab. We'll bring samples to your home so you can see them in your light.",
  },
  {
    question: 'Do you handle removal of the existing kitchen?',
    answer:
      'Yes. We manage demolition and disposal of the old cabinets, then install the new cabinetry. We coordinate carefully with countertop fabricators and any other trades on site so the project stays on schedule.',
  },
  {
    question: 'How does the design process work?',
    answer:
      "We start with an in-home consultation to look at your space, talk through how you cook and entertain, and review samples. From there we develop a layout and elevation drawings for your approval. Nothing is built until you sign off on the final design — and we don't push add-ons you don't need.",
  },
  {
    question: 'What warranty comes with your custom cabinetry?',
    answer:
      'Because we build everything in our own shop, we stand behind both the construction and the finish. If anything fails due to materials or workmanship we make it right. Most clients find the cabinets outlast the kitchen around them.',
  },
];

export const cabinetRefacingFAQs: FAQ[] = [
  {
    question: 'How is cabinet refacing different from replacing cabinets?',
    answer:
      'Refacing keeps your existing cabinet boxes in place and replaces the doors, drawer fronts, and visible exterior surfaces with new custom-built wood. Replacement tears out the boxes entirely. If your boxes are structurally sound, refacing gives you a brand-new kitchen look for 40–50% less than full replacement, with far less disruption.',
  },
  {
    question: 'How long does a typical refacing project take?',
    answer:
      'Most kitchens are completed in 3–5 days on-site, after the new doors and drawer fronts are built in our shop. You can usually keep using your kitchen between the consultation and the install date — the part where contents come out of cabinets is short.',
  },
  {
    question: 'What if some of my existing cabinet boxes are damaged?',
    answer:
      "We check each box during the consultation. Minor wear is fine — we resurface visible exterior panels. If a box is structurally compromised we'll tell you up front; in most cases we can replace just the affected box rather than the whole run.",
  },
  {
    question: 'Can you change the layout during refacing?',
    answer:
      "Refacing works best when the existing layout stays the same. If you want to add an island, change cabinet heights, or move runs of cabinetry, that's a custom build, not a reface — and we're happy to do either. We'll be honest about which approach fits your goals.",
  },
  {
    question: 'How does refacing pricing compare to new cabinets?',
    answer:
      'Cabinet refacing typically runs 40–50% less than fully replacing the cabinets with comparable custom work — sometimes more when the existing boxes are in good shape. We give a fixed quote after the in-home consultation, with no surprise add-ons.',
  },
];

export const customBookcasesFAQs: FAQ[] = [
  {
    question: 'Can you match existing trim and woodwork in my home?',
    answer:
      "Yes — matching existing architectural details is one of the things custom built-ins do better than anything off-the-shelf. We'll match crown molding, baseboards, casing profiles, and stain so the bookcase reads as original to the house.",
  },
  {
    question: 'Do you build floor-to-ceiling bookcases?',
    answer:
      'Floor-to-ceiling is one of our most popular configurations. They make a room feel taller, maximize storage, and add the most architectural impact. We can build single walls, two-sided room dividers, or wrap multiple walls of a library or family room.',
  },
  {
    question: 'Can a bookcase include cabinets, drawers, or a window seat?',
    answer:
      'All of those. Most of our built-ins combine open shelves with closed lower cabinets (for less-pretty storage), drawers, or integrated window seats. We design around how you actually want to use the wall, not a stock template.',
  },
  {
    question: 'How long does a custom bookcase project take?',
    answer:
      'Most projects are 4–7 weeks from design approval to install, depending on size and finish. The build happens in our shop; on-site time is usually 2–4 days for installation, touch-up, and trim work.',
  },
  {
    question: 'What finishes can you offer?',
    answer:
      'Painted finishes (any color), stained hardwoods, or a combination. Open shelves can have integrated lighting, glass shelves, adjustable wood shelves, or a mix. We bring samples so you can see them against your existing trim and wall colors.',
  },
];

export const entertainmentCentersFAQs: FAQ[] = [
  {
    question: 'Can you build an entertainment center around an existing fireplace?',
    answer:
      'Yes — fireplace surrounds with flanking cabinets are one of our most-requested entertainment configurations. We design around your existing mantel and firebox, or replace the mantel entirely as part of the build.',
  },
  {
    question: 'How do you handle cable management and equipment ventilation?',
    answer:
      'Both are built into the design from day one. We rough in wire chases between components, provide ventilation cutouts for amps and AV gear, and locate outlets and HDMI feeds before construction so nothing is visible after install.',
  },
  {
    question: 'Can you accommodate a specific TV size or media setup?',
    answer:
      "Always. We size openings to your specific TV and the equipment you're using — current and planned. If you want to upgrade later we build in flexibility so a larger TV or different gear can drop in without modification.",
  },
  {
    question: 'Can you add integrated lighting?',
    answer:
      'Yes — we install low-voltage puck lights, LED strips above shelves, or display lighting for collectibles. Lighting is wired to its own switch (or a smart-home system) and dimmable.',
  },
  {
    question: 'How long does an entertainment center project take?',
    answer:
      'Most projects are 4–6 weeks from design approval to install. On-site time is typically 2–3 days. If we are coordinating with a TV-mounting or AV installer, we schedule them right after our finish work.',
  },
];
