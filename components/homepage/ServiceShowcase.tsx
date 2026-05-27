import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { ButtonLink } from "@/components/ui/Button";

// The two priority services lead the section as large, image-led cards.
const featured = [
  {
    title: "Kitchens",
    description:
      "Custom kitchen cabinetry designed around how you cook, entertain, and live — built by hand in our shop and installed by the people who made it.",
    href: "/services/custom-kitchen-cabinetry",
    image:
      "/images/gallery/kitchen remodel/Quartzite Remodel/white-luxury-kitchen-remodel-07.jpg",
  },
  {
    title: "Cabinet Refacing",
    description:
      "Give your existing cabinets a fresh, updated look without a full replacement — far less disruption, with a wide selection of styles.",
    href: "/services/cabinet-refacing",
    image:
      "/images/gallery/kitchen remodel/Kitchen Cabinet Refacing/kitchen-cabinet-remodel-refacing-01.jpg",
  },
];

// Supporting services in a compact secondary row.
const secondary = [
  {
    title: "Entertainment Centers",
    description:
      "Fireplace surrounds and media walls that anchor your living space.",
    href: "/services/entertainment-centers",
    image:
      "/images/gallery/Entertainment Centers/entertainment-fireplace-remodel-01.jpg",
  },
  {
    title: "Bookcases & Built-Ins",
    description:
      "Functional built-ins that add character and storage to any room.",
    href: "/services/custom-bookcases",
    image: "/images/gallery/Bookcases/white  bookcase remodel-02.jpg",
  },
];

export function ServiceShowcase() {
  return (
    <Section id="services">
      <div className="text-center">
        <Heading eyebrow="Our Services" accent="italic" className="mx-auto max-w-3xl">
          Custom Interior Woodworking for Every Part of Your Home
        </Heading>
      </div>

      {/* Featured pair — Kitchens + Cabinet Refacing */}
      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {featured.map((s) => (
          <article
            key={s.title}
            className="group flex flex-col overflow-hidden rounded-sm border border-umber/15 bg-parchment shadow-[0_20px_50px_rgba(44,24,16,0.10)] transition-all duration-300 hover:-translate-y-1 hover:border-umber/25 hover:shadow-[0_28px_60px_rgba(44,24,16,0.16)]"
          >
            <div className="relative h-72 overflow-hidden sm:h-80">
              <Image
                src={s.image}
                alt={s.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-walnut/85 via-walnut/25 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="font-elegant text-3xl leading-tight tracking-tight text-parchment sm:text-4xl">
                  {s.title}
                </h3>
              </div>
            </div>
            <div className="flex flex-1 flex-col p-6 sm:p-7">
              <p className="text-ink/75 leading-relaxed">{s.description}</p>
              <div className="mt-5">
                <ButtonLink
                  href={s.href}
                  variant="ghost"
                  size="sm"
                  className="px-0 text-oxblood hover:text-oxblood/80"
                >
                  Explore {s.title} →
                </ButtonLink>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Secondary pair — Entertainment Centers + Bookcases */}
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {secondary.map((s) => (
          <article
            key={s.title}
            className="group flex min-h-[7.5rem] items-stretch overflow-hidden rounded-sm border border-umber/15 bg-parchment shadow-[0_12px_30px_rgba(44,24,16,0.07)] transition-all duration-300 hover:-translate-y-0.5 hover:border-umber/30 hover:shadow-[0_18px_40px_rgba(44,24,16,0.12)]"
          >
            <div className="relative w-32 flex-shrink-0 overflow-hidden sm:w-40">
              <Image
                src={s.image}
                alt={s.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 128px, 160px"
              />
            </div>
            <div className="flex flex-1 flex-col justify-center p-4 sm:p-5">
              <h3 className="font-elegant text-xl tracking-tight text-ink">
                {s.title}
              </h3>
              <p className="mt-1 text-sm leading-snug text-ink/70">
                {s.description}
              </p>
              <ButtonLink
                href={s.href}
                variant="ghost"
                size="sm"
                className="mt-2 px-0 text-oxblood hover:text-oxblood/80"
              >
                Learn more →
              </ButtonLink>
            </div>
          </article>
        ))}
      </div>

      {/* Supporting copy + catch-all CTA, beneath the imagery */}
      <div className="mt-14 text-center">
        <p className="mx-auto max-w-2xl text-ink/80">
          At Professional Wood Interiors, we specialize in custom cabinetry and built-ins
          that are designed around your space — not pulled from a catalog.
        </p>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          Every project starts with a conversation. We listen to how you use your home,
          help guide design decisions, and then build everything in our shop before
          carefully installing it ourselves. No hand-offs. No sales teams. Just quality
          work done the right way.
        </p>
        <div className="mt-8">
          <ButtonLink href="/services" variant="outline">
            View all services
          </ButtonLink>
        </div>
      </div>
    </Section>
  );
}
