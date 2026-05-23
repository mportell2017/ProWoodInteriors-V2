import { HomeHero } from "@/components/homepage/HomeHero";
import { ServiceAreaSection } from "@/components/homepage/ServiceAreaSection";
import { CraftJourney } from "@/components/homepage/CraftJourney";
import { IdealClientSection } from "@/components/homepage/IdealClientSection";
import { ServiceShowcase } from "@/components/homepage/ServiceShowcase";
import { ValueProposition } from "@/components/homepage/ValueProposition";
import { PortfolioPreview } from "@/components/homepage/PortfolioPreview";
import { SoftCTA } from "@/components/homepage/SoftCTA";
import { FinalCTA } from "@/components/homepage/FinalCTA";
import { generateLocalBusinessSchema } from "@/lib/structured-data";

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
