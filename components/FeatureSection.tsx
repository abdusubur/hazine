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
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6 animate-fade-in-up animate-on-scroll">
            <div className="max-w-3xl">
                <div className="text-xs font-mono text-slate-500 mb-2 uppercase tracking-widest">
                  Features
                </div>
                <h2 className="text-4xl md:text-5xl font-medium text-white mb-6 leading-tight tracking-tight">
                    Streamline operations <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">seamlessly</span>
                </h2>
                <p className="text-lg text-slate-400 leading-relaxed font-light">
                    Hazine unifies your physical and digital sales channels into one powerful dashboard, giving you total control over inventory, orders, and fulfillment.
                </p>
            </div>
            
            <button className="bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-3 px-8 rounded-full transition-all shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(79,70,229,0.5)] whitespace-nowrap z-10 shrink-0">
                Start Managing Now
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
                        { icon: "M12 4v16m8-8H4", label: "Add Product" },
                        { icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15", label: "Sync Stock" },
                        { icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z", label: "Sales Report" }
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
                        <span>Product Name</span>
                        <div className="flex gap-8 w-1/3 justify-end">
                            <span className="w-16 text-right">Stock</span>
                            <span className="w-16 text-right">Status</span>
                        </div>
                    </div>
                    
                    {/* Row 1 */}
                    <div className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors group">
                        <div className="flex items-center gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-slate-400 transition-colors"></span>
                            <span className="text-sm text-slate-300 group-hover:text-white transition-colors">Wireless Headphones</span>
                        </div>
                        <div className="flex gap-8 w-1/3 justify-end text-sm">
                            <span className="text-slate-400 w-16 text-right font-mono">142</span>
                            <span className="text-slate-500 w-16 text-right">In Stock</span>
                        </div>
                    </div>

                    {/* Row 2 (Active/Viral) */}
                    <div className="flex items-center justify-between p-3 rounded-lg bg-indigo-500/10 border border-indigo-500/20 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-transparent pointer-events-none"></div>
                        <div className="flex items-center gap-3 relative z-10">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse shadow-[0_0_8px_rgba(248,113,113,0.8)]"></span>
                            <span className="text-sm text-white font-medium">Smart Watch Series 5</span>
                        </div>
                        <div className="flex gap-8 w-1/3 justify-end text-sm relative z-10">
                            <span className="text-white w-16 text-right font-mono font-medium">4</span>
                            <span className="text-indigo-400 w-16 text-right font-medium drop-shadow-[0_0_8px_rgba(129,140,248,0.5)]">Low Stock</span>
                        </div>
                    </div>
                </div>

                {/* Integration Bar */}
                <div className="bg-[#111] border border-white/10 rounded-xl p-4 flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-[#96bf48] flex items-center justify-center text-white shadow-lg">
                           <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>
                        </div>
                        <span className="text-sm text-slate-300 font-medium">Sync with Shopify</span>
                    </div>
                    <button className="text-xs font-medium bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-colors border border-white/5">
                        Connected
                    </button>
                </div>
            </div>

            {/* Right Card: Orbit Visualization */}
            <div className="bg-[#0a0a0a] border border-white/10 rounded-3xl relative overflow-hidden flex items-center justify-center min-h-[450px]">
                {/* Background Grid */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-900/10 via-[#0a0a0a] to-[#0a0a0a] z-0"></div>
                
                {/* Central Node */}
                <div className="relative z-20 w-24 h-24 rounded-full bg-[#0a0a0a] border border-indigo-500/30 flex items-center justify-center shadow-[0_0_60px_rgba(79,70,229,0.3)]">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-600 to-purple-700 flex items-center justify-center shadow-inner flex-col">
                        <svg className="w-6 h-6 text-white mb-1" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
                        <span className="text-[8px] font-bold text-white tracking-widest uppercase">Nexus</span>
                    </div>
                </div>

                {/* Orbit Rings */}
                <div className="absolute z-10 w-48 h-48 border border-dashed border-white/10 rounded-full opacity-60"></div>
                <div className="absolute z-10 w-72 h-72 border border-dashed border-white/10 rounded-full opacity-40"></div>
                <div className="absolute z-10 w-[450px] h-[450px] border border-dashed border-white/5 rounded-full opacity-20"></div>

                {/* Orbiting Icons */}
                {/* Top Right - Warehouse */}
                <div className="absolute top-[20%] right-[30%] w-12 h-12 bg-[#0a0a0a] border border-white/10 rounded-xl flex items-center justify-center z-20 shadow-xl animate-bounce" style={{ animationDuration: '4s' }}>
                   <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                </div>
                
                {/* Left - Physical Store */}
                <div className="absolute top-[40%] left-[20%] w-12 h-12 bg-[#0a0a0a] border border-white/10 rounded-xl flex items-center justify-center z-20 shadow-xl animate-bounce" style={{ animationDuration: '3s', animationDelay: '1s' }}>
                    <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                </div>

                {/* Bottom Right - E-commerce */}
                <div className="absolute bottom-[25%] right-[25%] w-12 h-12 bg-[#0a0a0a] border border-white/10 rounded-xl flex items-center justify-center z-20 shadow-xl animate-bounce" style={{ animationDuration: '5s', animationDelay: '0.5s' }}>
                    <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                </div>

                {/* Top Left - Mobile App */}
                <div className="absolute top-[30%] left-[60%] w-10 h-10 bg-[#0a0a0a] border border-white/10 rounded-lg flex items-center justify-center z-10 opacity-60">
                    <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
                </div>

                {/* Bottom Left - API */}
                <div className="absolute bottom-[30%] left-[25%] w-10 h-10 bg-[#0a0a0a] border border-white/10 rounded-lg flex items-center justify-center z-10 opacity-60">
                    <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
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
                <h3 className="text-xl font-medium text-white mb-3 group-hover:text-indigo-200 transition-colors">Real-Time Accuracy</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                    Eliminate overselling and stock discrepancies with instant inventory updates across all your locations and online stores.
                </p>
            </div>

            {/* Column 2 */}
            <div className="group">
                <div className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-slate-400 mb-6 group-hover:bg-indigo-500/10 group-hover:border-indigo-500/30 group-hover:text-indigo-400 transition-all duration-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
                </div>
                <h3 className="text-xl font-medium text-white mb-3 group-hover:text-indigo-200 transition-colors">Smart Restocking</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                    Get automated alerts for low stock levels and intelligent forecasting to order exactly what you need, when you need it.
                </p>
            </div>

            {/* Column 3 */}
            <div className="group">
                <div className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-slate-400 mb-6 group-hover:bg-indigo-500/10 group-hover:border-indigo-500/30 group-hover:text-indigo-400 transition-all duration-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                </div>
                <h3 className="text-xl font-medium text-white mb-3 group-hover:text-indigo-200 transition-colors">Warehouse Management</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                    Organize your warehouse with bin locations, barcode scanning, and optimized pick paths for faster fulfillment.
                </p>
            </div>

        </div>
      </div>
    </section>
  );
}