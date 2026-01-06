"use client";

export default function InfrastructureSection() {
  const col1 = [
    { name: "React", category: "Library", icon: <svg className="w-8 h-8 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/></svg> },
    { name: "Tailwind", category: "Styling", icon: <svg className="w-8 h-8 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.89 1.45l8 4A2 2 0 0 1 22 7.24v9.53a2 2 0 0 1-1.11 1.79l-8 4a2 2 0 0 1-1.79 0l-8-4a2 2 0 0 1-1.1-1.8V7.24a2 2 0 0 1 1.11-1.79l8-4a2 2 0 0 1 1.78 0z"/><polyline points="2.32 6.16 12 11 21.68 6.16"/><line x1="12" y1="22.76" x2="12" y2="11"/></svg> },
    { name: "OpenAI", category: "Intelligence", icon: <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2-1-2-1-2 1 2 1zm0-3l-2 1 2 1 2-1-2-1zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg> },
    { name: "Vercel", category: "Deployment", icon: <svg className="w-8 h-8 text-white fill-white" viewBox="0 0 24 24"><path d="M12 1L24 22H0L12 1Z"/></svg> },
    { name: "GitHub", category: "VCS", icon: <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg> },
  ];

  const col2 = [
    { name: "Figma", category: "Design", icon: <svg className="w-8 h-8 text-pink-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"/><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"/><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"/><path d="M5 19.5A3.5 3.5 0 0 1 8.5 23H12v-3.5a3.5 3.5 0 1 1-7 0z"/><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"/></svg> },
    { name: "Stripe", category: "Payments", icon: <div className="text-violet-400 font-bold text-2xl tracking-tighter">S</div> },
    { name: "Notion", category: "Wiki", icon: <div className="w-8 h-8 border-2 border-slate-300 rounded flex items-center justify-center font-serif text-slate-300 font-bold">N</div> },
    { name: "Supabase", category: "Database", icon: <svg className="w-8 h-8 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg> },
    { name: "Linear", category: "Planning", icon: <div className="w-6 h-6 rounded-full border border-purple-400"></div> },
  ];

  const col3 = [
    { name: "Three.js", category: "3D", icon: <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2-1-2-1-2 1 2 1zm0-3l-2 1 2 1 2-1-2-1zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg> },
    { name: "TypeScript", category: "Language", icon: <span className="text-blue-500 font-bold text-xl">TS</span> },
    { name: "PostgreSQL", category: "Database", icon: <svg className="w-8 h-8 text-blue-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg> },
    { name: "Redis", category: "Cache", icon: <svg className="w-8 h-8 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="M22 6l-10 7L2 6"/></svg> },
    { name: "AWS", category: "Cloud", icon: <span className="text-orange-400 font-bold text-xl">AWS</span> },
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
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 w-fit">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                        <span className="text-[10px] font-semibold text-indigo-200 tracking-wider uppercase">Infrastructure</span>
                    </div>
                    
                    <h1 className="text-6xl md:text-7xl font-semibold text-white tracking-tighter leading-[0.9]">
                        The<br/>
                        <span className="text-slate-500">Substrate.</span>
                    </h1>
                    
                    <p className="text-lg text-slate-400 leading-relaxed max-w-md font-light">
                        We don't just build websites; we engineer high-velocity digital ecosystems. A curated stack of best-in-class technologies ensures scalability from day one.
                    </p>
                </div>

                {/* Feature List */}
                <div className="space-y-6 pt-4">
                    {[
                        { title: "Modular Architecture", desc: "React / Next.js / Astro", icon: <svg className="w-5 h-5 text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg> },
                        { title: "Data Liquidity", desc: "Supabase / Postgres / Redis", icon: <svg className="w-5 h-5 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg> },
                        { title: "Global Edge", desc: "Vercel / Cloudflare", icon: <svg className="w-5 h-5 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg> }
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
                            Explore Full Stack
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
