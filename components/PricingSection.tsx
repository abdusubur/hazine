"use client";

import { useState } from "react";

export default function PricingSection() {
  const [isQuarterly, setIsQuarterly] = useState(false);

  return (
    <section className="bg-[#020004] text-white py-24 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <div className="text-xs font-mono text-slate-500 mb-2 uppercase tracking-widest">
              07 — Investment
            </div>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight">
              Transparent Protocols
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <span className={`text-sm ${!isQuarterly ? 'text-white' : 'text-slate-500'}`}>Monthly</span>
            <button 
              onClick={() => setIsQuarterly(!isQuarterly)}
              className="relative w-12 h-6 rounded-full bg-[#111] border border-white/10 transition-colors focus:outline-none"
            >
              <div className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-emerald-500 transition-transform ${isQuarterly ? 'translate-x-6' : 'translate-x-0'}`}></div>
            </button>
            <div className="flex items-center gap-2">
                <span className={`text-sm ${isQuarterly ? 'text-white' : 'text-slate-500'}`}>Quarterly</span>
                <span className="text-xs text-emerald-500 font-mono">-20%</span>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
          
          {/* Card 1: Audit */}
          <div className="border border-white/10 rounded-2xl p-8 flex flex-col justify-between hover:border-white/20 transition-colors bg-[#050505] min-h-[500px]">
            <div>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-xl font-medium mb-1">Audit</h3>
                  <p className="text-xs text-slate-500 uppercase tracking-wide">Single Sprint</p>
                </div>
                <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              </div>

              <div className="mb-8">
                <span className="text-4xl font-semibold">$4,500</span>
                <span className="text-sm text-slate-500 ml-2">/one-off</span>
              </div>

              <ul className="space-y-4 mb-8">
                {["UX/UI Heuristic Analysis", "Performance Report", "Conversion Strategy", "Figma Delivery"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-slate-300">
                    <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <button className="w-full py-3 border border-white/10 rounded text-xs font-medium tracking-widest uppercase hover:bg-white/5 transition-colors">
              Start Audit
            </button>
          </div>

          {/* Card 2: Product Partner (Recommended) */}
          <div className="relative border border-emerald-900/30 rounded-2xl p-8 flex flex-col justify-between bg-gradient-to-b from-[#0a1510] to-[#050505] min-h-[500px]">
            {/* Recommended Badge */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#064e3b] text-[#34d399] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest border border-emerald-800">
              Recommended
            </div>

            <div>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-xl font-medium mb-1">Product Partner</h3>
                  <p className="text-xs text-slate-500 uppercase tracking-wide">Recurring Ops</p>
                </div>
                <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z"/></svg>
              </div>

              <div className="mb-8">
                <span className="text-4xl font-semibold">${isQuarterly ? '6,800' : '8,500'}</span>
                <span className="text-sm text-slate-500 ml-2">/mo</span>
              </div>

              <ul className="space-y-4 mb-8">
                {["Unlimited Design Requests", "Frontend Dev (React/Webflow)", "Slack Connect Channel", "48h Turnaround Time", "Pause Anytime"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-white">
                    <div className="w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center text-black">
                      <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <button className="w-full py-3 bg-white text-black rounded text-xs font-bold tracking-widest uppercase hover:bg-slate-200 transition-colors">
              Subscribe Now
            </button>
          </div>

          {/* Card 3: Scale */}
          <div className="border border-white/10 rounded-2xl p-8 flex flex-col justify-between hover:border-white/20 transition-colors bg-[#050505] min-h-[500px]">
            <div>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-xl font-medium mb-1">Scale</h3>
                  <p className="text-xs text-slate-500 uppercase tracking-wide">Enterprise</p>
                </div>
                <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
              </div>

              <div className="mb-8">
                <span className="text-4xl font-semibold">Custom</span>
                <span className="text-sm text-slate-500 ml-2">/quote</span>
              </div>

              <ul className="space-y-4 mb-8">
                {["Full Design System", "Dedicated Squad (3+)", "Priority Support", "Legal & SLA Contracts"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-slate-300">
                    <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <button className="w-full py-3 border border-white/10 rounded text-xs font-medium tracking-widest uppercase hover:bg-white/5 transition-colors">
              Contact Sales
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
