import { Navbar } from "../../layouts/Navbar";
import { Footer } from "../../layouts/Footer";
import { HeroSection } from "./HeroSection";
import { SecondaryHeroSection } from "./SecondaryHeroSection";
import { CustomerJourneySection } from "./CustomerJourneySection";
import { BrandStorySection } from "./BrandStorySection";
import { BackofficeSection } from "./BackofficeSection";
import { KeyMetricsSection } from "./KeyMetricsSection";
import { PricingStatsSection } from "./PricingStatsSection";
import { PricingSection } from "./PricingSection";
import { GameCatalogSection } from "./GameCatalogSection";
import { CTASection } from "./CTASection";

export const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <SecondaryHeroSection />
        <CustomerJourneySection />
        <BrandStorySection />
        <BackofficeSection />
        <KeyMetricsSection />
        <PricingSection />
        <GameCatalogSection />
        <PricingStatsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};
