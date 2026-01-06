"use client";

export default function InfrastructureSection() {
    const col1 = [
        { name: "Shopify", category: "E-commerce", icon: <svg className="w-8 h-8 text-[#96bf48]" viewBox="0 0 24 24" fill="currentColor"><path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg> },
        { name: "WooCommerce", category: "Integration", icon: <div className="text-purple-500 font-bold text-xl tracking-tighter">Woo</div> },
        { name: "Amazon", category: "Marketplace", icon: <div className="text-white font-bold text-xl tracking-tighter">amazon</div> },
        { name: "Stripe", category: "Payments", icon: <div className="text-indigo-400 font-bold text-2xl tracking-tighter">S</div> },
        { name: "Square", category: "POS", icon: <div className="w-8 h-8 border-2 border-white rounded flex items-center justify-center font-bold text-white">SQ</div> },
      ];
    
      const col2 = [
        { name: "Next.js", category: "Frontend", icon: <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2-1-2-1-2 1 2 1zm0-3l-2 1 2 1 2-1-2-1zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg> },
        { name: "PostgreSQL", category: "Database", icon: <svg className="w-8 h-8 text-blue-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg> },
        { name: "Redis", category: "Caching", icon: <svg className="w-8 h-8 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="M22 6l-10 7L2 6"/></svg> },
        { name: "Node.js", category: "Backend", icon: <div className="text-green-500 font-bold text-xl tracking-tighter">Node</div> },
        { name: "GraphQL", category: "API", icon: <div className="text-pink-500 font-bold text-xl tracking-tighter">QL</div> },
      ];
    
      const col3 = [
        { name: "AWS", category: "Cloud", icon: <span className="text-orange-400 font-bold text-xl">AWS</span> },
        { name: "Vercel", category: "Edge", icon: <svg className="w-8 h-8 text-white fill-white" viewBox="0 0 24 24"><path d="M12 1L24 22H0L12 1Z"/></svg> },
        { name: "Cloudflare", category: "CDN", icon: <div className="text-orange-300 font-bold text-xl tracking-tighter">CF</div> },
        { name: "Docker", category: "Container", icon: <div className="text-blue-400 font-bold text-xl tracking-tighter">DK</div> },
        { name: "Kubernetes", category: "Orchestration", icon: <div className="text-blue-600 font-bold text-xl tracking-tighter">K8s</div> },
      ];
    

  return (
    <section className="relative w-full py-24 bg-[#020004] text-white overflow-hidden">
        {/* Background Glows */}
        <div className="absolute top-[-20%] left-[10%] w-[800px] h-[800px] bg-indigo-900/10 blur-[150px] rounded-full pointer-events-none z-0"></div>
        <div className="absolute bottom-[-20%] right-[0%] w-[600px] h-[600px] bg-purple-900/10 blur-[120px] rounded-full pointer-events-none z-0"></div>

        <div className="max-w-7xl mx-auto px-8 relative z-10 flex flex-col lg:flex-row gap-10 items-center lg:items-start h-[800px]">
            
            {/* Left Column: Content */}
            <div className="w-full lg:w-4/12 space-y-10 pt-10 sticky top-24 self-start animate-fade-in-up animate-on-scroll z-20 backdrop-blur-md bg-[#020004]/70 p-8 rounded-2xl border border-white/5 shadow-2xl gradient-border-mask">
                <div className="space-y-6">
                    <div className="text-xs font-mono text-slate-500 mb-2 uppercase tracking-widest">
                        Architecture
                    </div>
                    
                    <h2 className="text-4xl md:text-5xl font-medium text-white mb-6 leading-tight tracking-tight">
                        Built for <br/>
                        <span className="text-slate-500">Reliability.</span>
                    </h2>
                    
                    <p className="text-lg text-slate-400 leading-relaxed font-light">
                        Your business runs 24/7. So does Nexus. Engineered on a fault-tolerant, high-performance stack to ensure your sales never stop and your data is always safe.
                    </p>
                </div>

                {/* Feature List */}
                <div className="space-y-6 pt-4">
                    {[
                        { title: "Lightning Fast Interface", desc: "React / Next.js / Astro", icon: <svg className="w-5 h-5 text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg> },
                        { title: "Real-Time Synchronization", desc: "Supabase / Postgres / Redis", icon: <svg className="w-5 h-5 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg> },
                        { title: "99.99% Uptime Guarantee", desc: "Vercel / Cloudflare", icon: <svg className="w-5 h-5 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg> }
                    ].map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-4 group">
                            <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-white/10 transition-colors">
                                {feature.icon}
                            </div>
                            <div>
                                <h3 className="text-white font-medium mb-1">{feature.title}</h3>
                                <p className="text-xs text-slate-500 font-mono tracking-wide uppercase">{feature.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="pt-4">
                    <button className="group relative px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 transition-all border border-white/10 hover:border-white/20 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity blur-md"></div>
                        <span className="relative flex items-center gap-2 text-sm font-semibold text-white tracking-widest uppercase">
                            View Security Specs
                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                        </span>
                    </button>
                </div>
            </div>

            {/* Right Column: Animated Cards */}
            <div className="w-full lg:w-8/12 h-[120%] -mt-20 relative gradient-border-mask overflow-visible animate-fade-in-up animate-on-scroll delay-200 perspective-[1000px] z-10" style={{ perspective: '1000px' }}>
                <div className="grid grid-cols-3 gap-5 h-full transform-style-3d rotate-y-[-12deg] rotate-x-[5deg] scale-110 -translate-x-10">
                    
                    {/* Column 1 (Scrolling Up) */}
                    <div className="space-y-5 animate-scroll-up w-full opacity-60 hover:opacity-100 transition-opacity duration-500" style={{ willChange: 'transform' }}>
                        {[...col1, ...col1].map((item, idx) => (
                            <div key={`col1-${idx}`} className="glass-panel-solid p-5 rounded-xl border border-white/10 relative group hover:border-indigo-500/30 transition-colors aspect-[4/3] flex flex-col justify-between">
                                <div className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
                                {item.icon}
                                <div>
                                    <h4 className="text-white font-medium tracking-tight">{item.name}</h4>
                                    <p className="text-xs text-slate-500">{item.category}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Column 2 (Scrolling Down) */}
                    <div className="space-y-5 animate-scroll-down w-full" style={{ willChange: 'transform' }}>
                        {[...col2, ...col2].map((item, idx) => (
                            <div key={`col2-${idx}`} className="glass-panel-solid p-5 rounded-xl border border-white/10 relative group hover:border-pink-500/30 transition-colors aspect-[4/3] flex flex-col justify-between">
                                <div className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
                                {item.icon}
                                <div>
                                    <h4 className="text-white font-medium tracking-tight">{item.name}</h4>
                                    <p className="text-xs text-slate-500">{item.category}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                     {/* Column 3 (Scrolling Up) */}
                     <div className="space-y-5 animate-scroll-up w-full" style={{ willChange: 'transform', animationDelay: '-10s' }}>
                        {[...col3, ...col3].map((item, idx) => (
                            <div key={`col3-${idx}`} className="glass-panel-solid p-5 rounded-xl border border-white/10 relative group hover:border-blue-500/30 transition-colors aspect-[4/3] flex flex-col justify-between">
                                <div className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
                                {item.icon}
                                <div>
                                    <h4 className="text-white font-medium tracking-tight">{item.name}</h4>
                                    <p className="text-xs text-slate-500">{item.category}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>

        </div>
    </section>
  );
}
