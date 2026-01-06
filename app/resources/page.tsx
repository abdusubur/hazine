import Header from "@/components/Header";
import FooterCTA from "@/components/FooterCTA";

export default function ResourcesPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#020004]">
      <Header />
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-6xl font-medium text-white mb-6 tracking-tight">
          Resources & <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Documentation</span>
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Learn how to get the most out of Nexus with our guides, API docs, and community.
        </p>
      </div>

      <section className="py-12 px-4 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        
        {/* Resource Card 1 */}
        <a href="#" className="group bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-colors">
            <div className="text-orange-400 mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-orange-300 transition-colors">Documentation</h3>
            <p className="text-slate-400 text-sm">Detailed guides on setting up your inventory, connecting POS hardware, and managing staff.</p>
        </a>

        {/* Resource Card 2 */}
        <a href="#" className="group bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-colors">
            <div className="text-blue-400 mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">API Reference</h3>
            <p className="text-slate-400 text-sm">Build custom integrations with our REST API. Perfect for enterprise ERP connections.</p>
        </a>

        {/* Resource Card 3 */}
        <a href="#" className="group bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-colors">
            <div className="text-purple-400 mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">Community</h3>
            <p className="text-slate-400 text-sm">Join our Discord server to connect with other store owners and get tips on growth.</p>
        </a>

      </section>
      <FooterCTA />
    </main>
  );
}