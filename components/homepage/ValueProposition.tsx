import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { ButtonLink } from "@/components/ui/Button";

export function ValueProposition() {
  return (
    <Section>
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <Heading eyebrow="Why Custom" accent="italic">
            Why Choose Custom Cabinetry?
          </Heading>
          <p className="mt-6 text-ink/80 leading-relaxed">
            Custom cabinetry isn't just about looks — it's about how your home 
            functions day-to-day. With custom work, you get:
          </p>
          <ul className="mt-6 space-y-3">
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-oxblood flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-ink/80 font-sans text-sm leading-relaxed">
                Cabinetry designed to fit your space exactly
              </span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-oxblood flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-ink/80 font-sans text-sm leading-relaxed">
                Storage that works for how you live
              </span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-oxblood flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-ink/80 font-sans text-sm leading-relaxed">
                Higher-quality materials built to last
              </span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-oxblood flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-ink/80 font-sans text-sm leading-relaxed">
                A finished result that feels like it truly belongs in your home
              </span>
            </li>
          </ul>
          <div className="mt-8">
            <ButtonLink href="/contact-us">
              Ready to explore custom options? →
            </ButtonLink>
          </div>
        </div>
        
        <div className="relative grid grid-cols-2 gap-4">
          {/* Top Left - Larger Image */}
          <div className="col-span-2 relative aspect-[16/9] overflow-hidden shadow-lg">
            <Image
              src="/images/gallery/kitchen remodel/Blue Island/kitchen-remodel-blue-island-01.jpg"
              alt="Custom kitchen with blue island cabinetry"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Bottom Left */}
          <div className="relative aspect-square overflow-hidden shadow-md">
            <Image
              src="/images/gallery/Bookcases/white  bookcase remodel-03.jpg"
              alt="Custom built-in bookcase"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 50vw, 25vw"
            />
          </div>

          {/* Bottom Right */}
          <div className="relative aspect-square overflow-hidden shadow-md">
            <Image
              src="/images/gallery/Entertainment Centers/entertainment-fireplace-remodel-01.jpg"
              alt="Custom entertainment center"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 50vw, 25vw"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
