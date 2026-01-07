import Header from "@/components/Header";
import FooterCTA from "@/components/FooterCTA";
import FeatureSection from "@/components/FeatureSection";

export default function FeaturesPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#020004]">
      <Header />
      <div className="pt-32 z-1 pb-20 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-6xl font-medium text-white mb-6 tracking-tight">
          Powerful Features for <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Modern Commerce</span>
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Everything you need to run your retail or wholesale business, all in one place.
        </p>
      </div>
      <FeatureSection />
      <FooterCTA />
    </main>
  );
}