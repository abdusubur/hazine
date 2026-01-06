"use client";

import { useEffect, useState } from "react";

export default function FeatureSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative w-full py-24 bg-[#020004] overflow-hidden text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-20 gap-8 relative animate-fade-in-up animate-on-scroll">
            <div className="relative z-10">
                {/* Large Background Number */}
                <span className="absolute -left-6 -top-16 text-[140px] font-bold text-white/5 select-none -z-10 leading-none font-sans">01.</span>
                
                <h2 className="text-4xl md:text-5xl font-medium text-white mb-6 leading-tight tracking-tight">
                    Scale your reach <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">instantly</span>
                </h2>
                <p className="text-lg text-slate-400 max-w-2xl leading-relaxed font-light">
                    Nexus analyzes millions of data points to predict trends, automate engagement, and schedule content when your audience is most active.
                </p>
            </div>
            
            <button className="bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-3 px-8 rounded-full transition-all shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(79,70,229,0.5)] whitespace-nowrap z-10">
                Start Growing Now
            </button>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-24 animate-fade-in-up animate-on-scroll delay-200">
            
            {/* Left Card: Dashboard Interface */}
            <div className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between min-h-[450px]">
                {/* Subtle Gradient Glow */}
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-indigo-900/10 via-transparent to-transparent pointer-events-none"></div>

                {/* Top Actions Row */}
                <div className="grid grid-cols-3 gap-4 mb-10 text-center">
                    {[
                        { icon: "M13 10V3L4 14h7v7l9-11h-7z", label: "Generate Content" },
                        { icon: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z", label: "Auto-Engage" },
                        { icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6", label: "Predict Trends" }
                    ].map((item, idx) => (
                        <div key={idx} className="flex flex-col items-center gap-3 group cursor-pointer">
                            <div className="w-14 h-14 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-slate-400 group-hover:text-indigo-400 group-hover:border-indigo-500/50 group-hover:bg-indigo-500/10 transition-all duration-300">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={item.icon}></path></svg>
                            </div>
                            <span className="text-xs text-slate-500 font-medium group-hover:text-slate-300 transition-colors">{item.label}</span>
                        </div>
                    ))}
                </div>

                {/* Data Table */}
                <div className="space-y-4 mb-8">
                    <div className="flex justify-between text-xs font-semibold text-slate-500 uppercase tracking-wider px-2 border-b border-white/5 pb-2">
                        <span>Trending Topic</span>
                        <div className="flex gap-8 w-1/3 justify-end">
                            <span className="w-16 text-right">Reach</span>
                            <span className="w-16 text-right">Velocity</span>
                        </div>
                    </div>
                    
                    {/* Row 1 */}
                    <div className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors group">
                        <div className="flex items-center gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-slate-400 transition-colors"></span>
                            <span className="text-sm text-slate-300 group-hover:text-white transition-colors">#GenerativeAI</span>
                        </div>
                        <div className="flex gap-8 w-1/3 justify-end text-sm">
                            <span className="text-slate-400 w-16 text-right font-mono">842k</span>
                            <span className="text-slate-500 w-16 text-right">Medium</span>
                        </div>
                    </div>

                    {/* Row 2 (Active/Viral) */}
                    <div className="flex items-center justify-between p-3 rounded-lg bg-indigo-500/10 border border-indigo-500/20 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-transparent pointer-events-none"></div>
                        <div className="flex items-center gap-3 relative z-10">
                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse shadow-[0_0_8px_rgba(129,140,248,0.8)]"></span>
                            <span className="text-sm text-white font-medium">#FutureTech</span>
                        </div>
                        <div className="flex gap-8 w-1/3 justify-end text-sm relative z-10">
                            <span className="text-white w-16 text-right font-mono font-medium">2.1M</span>
                            <span className="text-indigo-400 w-16 text-right font-medium drop-shadow-[0_0_8px_rgba(129,140,248,0.5)]">Viral</span>
                        </div>
                    </div>
                </div>

                {/* Integration Bar */}
                <div className="bg-[#111] border border-white/10 rounded-xl p-4 flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-[#1877F2] flex items-center justify-center text-white shadow-lg">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                        </div>
                        <span className="text-sm text-slate-300 font-medium">Connect Facebook Ads</span>
                    </div>
                    <button className="text-xs font-medium bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-colors border border-white/5">
                        Connect
                    </button>
                </div>
            </div>

            {/* Right Card: Orbit Visualization */}
            <div className="bg-[#0a0a0a] border border-white/10 rounded-3xl relative overflow-hidden flex items-center justify-center min-h-[450px]">
                {/* Background Grid */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-900/10 via-[#0a0a0a] to-[#0a0a0a] z-0"></div>
                
                {/* Central Node */}
                <div className="relative z-20 w-24 h-24 rounded-full bg-[#0a0a0a] border border-indigo-500/30 flex items-center justify-center shadow-[0_0_60px_rgba(79,70,229,0.3)]">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-600 to-purple-700 flex items-center justify-center shadow-inner">
                        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 6v12m-6-6h12"></path></svg>
                    </div>
                </div>

                {/* Orbit Rings */}
                <div className="absolute z-10 w-48 h-48 border border-dashed border-white/10 rounded-full opacity-60"></div>
                <div className="absolute z-10 w-72 h-72 border border-dashed border-white/10 rounded-full opacity-40"></div>
                <div className="absolute z-10 w-[450px] h-[450px] border border-dashed border-white/5 rounded-full opacity-20"></div>

                {/* Orbiting Icons */}
                {/* Top Right - YouTube */}
                <div className="absolute top-[20%] right-[30%] w-12 h-12 bg-[#0a0a0a] border border-white/10 rounded-xl flex items-center justify-center z-20 shadow-xl animate-bounce" style={{ animationDuration: '4s' }}>
                    <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </div>
                
                {/* Left - TikTok */}
                <div className="absolute top-[40%] left-[20%] w-12 h-12 bg-[#0a0a0a] border border-white/10 rounded-xl flex items-center justify-center z-20 shadow-xl animate-bounce" style={{ animationDuration: '3s', animationDelay: '1s' }}>
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.65-1.62-1.12-1.09.96-1.04 2.84-1.19 4.51-.47 4.91-4.27 7.94-8.99 6.91-4.71-1.03-6.57-7.37-2.79-10.7 2.47-2.17 6.43-1.4 8.26 1.57.17.27.3.56.45.85V6.04c-.77-.18-1.56-.3-2.35-.38-2.7-.27-5.33.66-7.17 2.54-2.71 2.77-2.34 7.71 1.04 9.77 3.38 2.06 7.98.7 9.5-2.98.67-1.63.74-3.4.67-5.17V.02h-1.51z"/></svg>
                </div>

                {/* Bottom Right - Twitter/X */}
                <div className="absolute bottom-[25%] right-[25%] w-12 h-12 bg-[#0a0a0a] border border-white/10 rounded-xl flex items-center justify-center z-20 shadow-xl animate-bounce" style={{ animationDuration: '5s', animationDelay: '0.5s' }}>
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </div>

                {/* Top Left - LinkedIn */}
                <div className="absolute top-[30%] left-[60%] w-10 h-10 bg-[#0a0a0a] border border-white/10 rounded-lg flex items-center justify-center z-10 opacity-60">
                    <svg className="w-4 h-4 text-[#0077b5]" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </div>

                {/* Bottom Left - Instagram */}
                <div className="absolute bottom-[30%] left-[25%] w-10 h-10 bg-[#0a0a0a] border border-white/10 rounded-lg flex items-center justify-center z-10 opacity-60">
                    <svg className="w-4 h-4 text-pink-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.069-4.85.069-3.204 0-3.584-.012-4.849-.069-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </div>
            </div>
        </div>

        {/* Bottom Features Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/5 pt-16 animate-fade-in-up animate-on-scroll delay-400">
            
            {/* Column 1 */}
            <div className="group">
                <div className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-slate-400 mb-6 group-hover:bg-indigo-500/10 group-hover:border-indigo-500/30 group-hover:text-indigo-400 transition-all duration-300">
                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <h3 className="text-xl font-medium text-white mb-3 group-hover:text-indigo-200 transition-colors">Precision Targeting</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                    Identify and engage your ideal audience segments with AI-driven behavioral analysis and lookalike modeling.
                </p>
            </div>

            {/* Column 2 */}
            <div className="group">
                <div className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-slate-400 mb-6 group-hover:bg-indigo-500/10 group-hover:border-indigo-500/30 group-hover:text-indigo-400 transition-all duration-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
                </div>
                <h3 className="text-xl font-medium text-white mb-3 group-hover:text-indigo-200 transition-colors">Automated Workflows</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                    Set up complex engagement triggers and response sequences that run on autopilot while you sleep.
                </p>
            </div>

            {/* Column 3 */}
            <div className="group">
                <div className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-slate-400 mb-6 group-hover:bg-indigo-500/10 group-hover:border-indigo-500/30 group-hover:text-indigo-400 transition-all duration-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                </div>
                <h3 className="text-xl font-medium text-white mb-3 group-hover:text-indigo-200 transition-colors">Brand Safety</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                    Advanced sentiment analysis ensures your automated interactions always align with your brand voice and values.
                </p>
            </div>

        </div>
      </div>
    </section>
  );
}