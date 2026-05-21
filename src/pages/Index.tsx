import HeroSection from "@/components/landing/HeroSection";
import RadarShowcaseSection from "@/components/landing/RadarShowcaseSection";
import ProblemSection from "@/components/landing/ProblemSection";
import InsightSection from "@/components/landing/InsightSection";
import SolutionSection from "@/components/landing/SolutionSection";
import DifferentialsSection from "@/components/landing/DifferentialsSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import PricingSection from "@/components/landing/PricingSection";
import SocialProofSection from "@/components/landing/SocialProofSection";
import FAQSection from "@/components/landing/FAQSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="bg-radar-dark min-h-screen">
      <HeroSection />
      <RadarShowcaseSection />
      <ProblemSection />
      <InsightSection />
      <SolutionSection />
      <DifferentialsSection />
      <HowItWorksSection />
      <BenefitsSection />
      <PricingSection />
      <SocialProofSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
