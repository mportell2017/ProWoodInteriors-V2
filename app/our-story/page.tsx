import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import Navigation from "@/components/Navigation";

export default function OurStoryPage() {
  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <Section className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <Heading eyebrow="Our Story" accent="italic">
            About Professional Wood Interiors
          </Heading>
          <p className="mt-8 text-xl text-ink/70 leading-relaxed font-elegant">
            Building trust through craftsmanship since 1980
          </p>
        </div>
      </Section>

      {/* Main Content */}
      <Section className="py-0">
        <div className="max-w-3xl mx-auto">
          {/* Opening Paragraph */}
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-ink/80 leading-relaxed mb-8">
              Professional Wood Interiors has been a trusted name in St. Louis custom cabinetry since 1980.
              For more than four decades, we've been designing and building handcrafted cabinetry and interior
              woodwork for homeowners throughout the greater St. Louis area.
            </p>

            <p className="text-lg text-ink/80 leading-relaxed mb-8">
              What sets us apart is a deep commitment to true craftsmanship. Every cabinet and built-in we
              create is built by hand in our local shop, allowing us to maintain complete control over quality,
              materials, and details. Nothing is rushed. Nothing is mass-produced. Each project receives the
              attention it deserves.
            </p>

            <p className="text-lg text-ink/80 leading-relaxed mb-8">
              We are not a big-box retailer, and we don't resell prefabricated cabinets. We are craftsmen.
              When you work with Professional Wood Interiors, you work directly with the people who design,
              build, and install your cabinetry—ensuring clear communication, consistency, and accountability
              from start to finish.
            </p>

            <p className="text-lg text-ink/80 leading-relaxed mb-12">
              Our approach is straightforward and proven: we listen carefully, design around your space and
              how you live, build with quality materials and expert craftsmanship, and install everything
              with care and precision. The result is cabinetry that fits your home perfectly and feels like
              it truly belongs there.
            </p>
          </div>

          {/* Divider */}
          <div className="my-16 flex items-center justify-center">
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-umber/30 to-transparent" />
          </div>
        </div>
      </Section>

      {/* Why Choose Us Section */}
      <Section>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-elegant font-semibold text-ink mb-4">
              Why Choose Professional Wood Interiors?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-parchment/40 border border-umber/15 p-8 shadow-sm">
              <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-full bg-oxblood/10">
                <svg className="w-6 h-6 text-oxblood" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-elegant font-semibold text-ink mb-3">
                Local Craftsmanship
              </h3>
              <p className="text-ink/70 leading-relaxed">
                All of our work is built in our St. Louis shop by skilled craftsmen who take pride in their work.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-parchment/40 border border-umber/15 p-8 shadow-sm">
              <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-full bg-oxblood/10">
                <svg className="w-6 h-6 text-oxblood" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-elegant font-semibold text-ink mb-3">
                Truly Custom Fit
              </h3>
              <p className="text-ink/70 leading-relaxed">
                No fillers. No shortcuts. Every cabinet is designed and built to your exact specifications.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-parchment/40 border border-umber/15 p-8 shadow-sm">
              <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-full bg-oxblood/10">
                <svg className="w-6 h-6 text-oxblood" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-elegant font-semibold text-ink mb-3">
                Fair, Honest Pricing
              </h3>
              <p className="text-ink/70 leading-relaxed">
                Without sales teams or heavy advertising overhead, we focus on delivering quality work at competitive, transparent prices.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Image Gallery Section */}
      <Section>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative aspect-[4/3] overflow-hidden shadow-lg">
              <Image
                src="/images/gallery/kitchen remodel/Darkwood/kitchen-darkwood-remodel-01.jpg"
                alt="Custom darkwood kitchen cabinetry"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden shadow-lg">
              <Image
                src="/images/gallery/Bookcases/white  bookcase remodel-02.jpg"
                alt="Custom built-in bookcase"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section tone="walnut">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-elegant font-semibold text-parchment mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-parchment/80 text-lg mb-8 leading-relaxed">
            Let's discuss how we can bring your vision to life with custom cabinetry built to last.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <ButtonLink
              href="/contact-us"
              className="bg-brass hover:bg-brass/90 text-walnut font-semibold shadow-xl hover:shadow-2xl"
            >
              Get in Touch
            </ButtonLink>
            <ButtonLink
              href="/showroom"
              variant="outline"
              className="border-2 border-parchment/40 text-parchment hover:bg-parchment/10"
            >
              View Our Work
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
