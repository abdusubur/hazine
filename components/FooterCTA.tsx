"use client";

export default function FooterCTA() {
  return (
    <section className="bg-[#020004] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto relative overflow-hidden rounded-[3rem] bg-[#0a0a0a] border border-white/5">
        
        {/* Aurora Background Effect */}
        <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-[-50%] left-[-20%] w-[80%] h-[150%] bg-indigo-600/20 blur-[120px] rounded-full mix-blend-screen transform rotate-12"></div>
            <div className="absolute bottom-[-50%] right-[-20%] w-[80%] h-[150%] bg-purple-600/20 blur-[120px] rounded-full mix-blend-screen transform -rotate-12"></div>
            <div className="absolute top-[20%] left-[30%] w-[40%] h-[40%] bg-blue-500/10 blur-[80px] rounded-full mix-blend-screen"></div>
        </div>

        <div className="relative z-10 px-8 py-20 md:px-20 md:py-24 flex flex-col items-center text-center">
          
          {/* Newsletter Content */}
          <h2 className="text-4xl md:text-5xl font-medium text-white mb-6 tracking-tight">
            Join our newsletter
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mb-10 leading-relaxed">
            Join our newsletter for exclusive insights, announcements, and special offers delivered directly to your inbox.
          </p>

          <form className="flex flex-col sm:flex-row w-full max-w-md gap-3 mb-20">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 bg-[#111] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 transition-all"
            />
            <button 
              type="submit" 
              className="bg-white text-black hover:bg-slate-200 font-medium px-6 py-3 rounded-lg transition-colors"
            >
              Subscribe
            </button>
          </form>

          {/* Footer Links Area (Inside Card) */}
          <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-white/10 pt-16 text-left">
            
            {/* Brand Column */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-white font-semibold text-xl">
                <svg className="w-6 h-6 text-indigo-500" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2-1-2-1-2 1 2 1zm0-3l-2 1 2 1 2-1-2-1zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                Nexus
              </div>
              <div className="flex gap-4">
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.069-4.85.069-3.204 0-3.584-.012-4.849-.069-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
              </div>
            </div>

            {/* Links Columns */}
            <div>
              <h4 className="text-white font-medium mb-4">Product</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Product</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Integrations</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Pricing</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-medium mb-4">Developers</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Docs</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Discord server</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Changelog</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-medium mb-4">Company</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li><a href="#" className="hover:text-indigo-400 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Articles</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Contact</a></li>
              </ul>
            </div>

          </div>

          <div className="w-full mt-12 text-left text-xs text-slate-600">
            &copy; 2025 Nexus Inc. All rights reserved.
          </div>

        </div>
      </div>
    </section>
  );
}