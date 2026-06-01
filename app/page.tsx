import { HomeHero } from "@/components/homepage/HomeHero";
import { HeroLeadForm } from "@/components/homepage/HeroLeadForm";
import { ServiceAreaSection } from "@/components/homepage/ServiceAreaSection";
import { CraftJourney } from "@/components/homepage/CraftJourney";
import { IdealClientSection } from "@/components/homepage/IdealClientSection";
import { ServiceShowcase } from "@/components/homepage/ServiceShowcase";
import { ValueProposition } from "@/components/homepage/ValueProposition";
import { PortfolioPreview } from "@/components/homepage/PortfolioPreview";
import { SoftCTA } from "@/components/homepage/SoftCTA";
import { FinalCTA } from "@/components/homepage/FinalCTA";
import { generateLocalBusinessSchema } from "@/lib/structured-data";
import type { Metadata } from "next";

// Title/description inherit the root layout defaults; this only declares the
// self-referencing canonical so the non-www copy folds into the www host.
export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  const businessSchema = generateLocalBusinessSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      <HomeHero />
      <ServiceShowcase />
      <HeroLeadForm />
      <PortfolioPreview />
      <ServiceAreaSection />
      <CraftJourney />
      <IdealClientSection />
      <ValueProposition />
      <SoftCTA />
      <FinalCTA />
    </>
  );
}
