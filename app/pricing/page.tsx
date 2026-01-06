import Header from "@/components/Header";
import FooterCTA from "@/components/FooterCTA";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";

export default function PricingPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#020004]">
      <Header />
      <div className="pt-32 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-6xl font-medium text-white mb-6 tracking-tight">
          Transparent <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Pricing</span>
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Choose the plan that fits your business stage. No hidden fees.
        </p>
      </div>
      <PricingSection />
      <FAQSection />
      <FooterCTA />
    </main>
  );
}