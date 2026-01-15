"use client";

import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { ButtonLink } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

const services = [
  {
    title: "Kitchens",
    description:
      "Custom kitchen cabinetry designed around how you cook, entertain, and live.",
    href: "/services/custom-cabinetry",
    image: "/images/gallery/kitchen remodel/Quartzite Remodel/white-luxury-kitchen-remodel-07.jpg",
  },
  {
    title: "Entertainment Centers",
    description:
      "Custom entertainment centers and fireplace surrounds that become the focal point of your living space.",
    href: "/services/entertainment-centers",
    image: "/images/gallery/Entertainment Centers/entertainment-fireplace-remodel-01.jpg",
  },
  {
    title: "Bookcases & Built-Ins",
    description:
      "Functional built-ins that add character and storage to any room.",
    href: "/services/bookcases",
    image: "/images/gallery/Bookcases/white  bookcase remodel-02.jpg",
  },
  {
    title: "Cabinet Refacing",
    description:
      "Give your existing cabinets a fresh, updated look without a full replacement.",
    href: "/services/cabinet-refacing",
    image: "/images/gallery/kitchen remodel/Kitchen Cabinet Refacing/kitchen-cabinet-remodel-refacing-01.jpg",
  },
];

export function ServiceShowcase() {
  return (
    <Section>
      <div className="text-center">
        <Heading
          eyebrow="Our Services"
          accent="italic"
          className="mx-auto max-w-3xl"
        >
          Custom Interior Woodworking for Every Part of Your Home
        </Heading>
        <p className="mx-auto mt-5 max-w-3xl text-ink/80">
          From kitchens to built-ins and everything in between, our work is always 
          custom, always intentional, and always built to last.
        </p>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s) => (
          <article
            key={s.title}
            className="group overflow-hidden border border-umber/15 bg-parchment hover:border-umber/25 transition-all duration-300"
          >
            <div className="relative h-48 overflow-hidden">
              <Image
                src={s.image}
                alt={s.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105 border"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-walnut/60 to-transparent" />
            </div>
            <div className="p-6">
              <h3 className="font-elegant text-xl tracking-tight text-ink">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-ink/75 leading-relaxed">{s.description}</p>
              <div className="mt-4">
                <ButtonLink
                  href={s.href}
                  variant="ghost"
                  size="sm"
                  className="text-oxblood hover:text-oxblood/80 px-0"
                >
                  Learn more →
                </ButtonLink>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 text-center">
        <ButtonLink href="/services" variant="outline">
          View all services
        </ButtonLink>
      </div>
    </Section>
  );
}
