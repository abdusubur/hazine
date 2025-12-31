import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LogoTicker from "@/components/LogoTicker";
import FeatureSection from "@/components/FeatureSection";
import InfrastructureSection from "@/components/InfrastructureSection";
import FAQSection from "@/components/FAQSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FooterCTA from "@/components/FooterCTA";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#020004]">
      <Header />
      <Hero />
      <LogoTicker />
      <FeatureSection />
      <InfrastructureSection />
      <FAQSection />
      <PricingSection />
      <TestimonialsSection />
      <FooterCTA />
      {/* 
        The following sections from the previous design are temporarily disabled 
        to match the new "Finance/Nexus" theme and structure.
      */}
      {/* <About /> */}
      {/* <Services /> */}
      {/* <Portfolio /> */}
      {/* <Contact /> */}
      {/* <Footer /> */}
    </main>
  );
}