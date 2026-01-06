import Header from "@/components/Header";
import FooterCTA from "@/components/FooterCTA";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function UseCasesPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#020004]">
      <Header />
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-6xl font-medium text-white mb-6 tracking-tight">
          Built for <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">Every Business Model</span>
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
          From single retail stores to multi-warehouse logistics, Nexus scales with you.
        </p>
      </div>
      
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Use Case 1 */}
            <div className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-colors">
                <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center mb-6">
                    <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">Retail & POS</h3>
                <p className="text-slate-400 leading-relaxed mb-6">
                    Manage your physical store with our integrated POS system. Accept payments, track daily sales, and sync inventory with your warehouse in real-time.
                </p>
                <ul className="space-y-2 text-sm text-slate-300">
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>Barcode Scanning</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>Staff Management</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>Receipt Printing</li>
                </ul>
            </div>

            {/* Use Case 2 */}
            <div className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-colors">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center mb-6">
                    <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">Warehousing & Logistics</h3>
                <p className="text-slate-400 leading-relaxed mb-6">
                    Optimize your storage space with bin location tracking, pick path optimization, and automated low-stock alerts.
                </p>
                <ul className="space-y-2 text-sm text-slate-300">
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>Bin Location Management</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>Purchase Order Workflows</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>Supplier Management</li>
                </ul>
            </div>
        </div>
      </section>

      <TestimonialsSection />
      <FooterCTA />
    </main>
  );
}