import { HomeHero } from "@/components/homepage/HomeHero";
import Navigation from "@/components/Navigation";
import { ServiceAreaSection } from "@/components/homepage/ServiceAreaSection";
import { CraftJourney } from "@/components/homepage/CraftJourney";
import { IdealClientSection } from "@/components/homepage/IdealClientSection";
import { ServiceShowcase } from "@/components/homepage/ServiceShowcase";
import { ValueProposition } from "@/components/homepage/ValueProposition";
import { PortfolioPreview } from "@/components/homepage/PortfolioPreview";
import { SoftCTA } from "@/components/homepage/SoftCTA";
import { FinalCTA } from "@/components/homepage/FinalCTA";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <Navigation />
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
