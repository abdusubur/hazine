"use client";

import BackgroundBeams from "./BackgroundBeams";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 w-full overflow-x-hidden">
      
      {/* Background with Beams & Glow */}
      <BackgroundBeams />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
            
            {/* Badge */}
            <a href="#" className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-800 bg-slate-900/50 hover:bg-slate-800/50 hover:border-slate-700 transition-all group mb-8 animate-fade-in-up">
                <span className="bg-indigo-500/20 text-indigo-300 text-xs font-medium px-2 py-0.5 rounded uppercase tracking-wide">New</span>
                <span className="text-sm text-slate-300">Nexus 4.0 is available</span>
                <svg className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </a>
    
            {/* Hero Text */}
            <h1 className="text-5xl sm:text-7xl font-medium text-white tracking-tight leading-[1.1] mb-6 animate-fade-in-up delay-200">
                Control Wealth. <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400 glow-text">Effortlessly.</span>
            </h1>
    
            <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10 font-normal animate-fade-in-up delay-400">
                Your centralized ecosystem for tracking assets, optimizing cash flow, and mastering your financial destiny with AI-driven insights.
            </p>
    
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-20 animate-fade-in-up delay-500">
                {/* Animated Shiny Button 1 */}
                <button className="shiny-cta focus:outline-none group">
                    <span className="flex items-center gap-2">
                        Start Free
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                    </span>
                </button>
    
                {/* Animated Shiny Button 2 */}
                <button className="shiny-cta focus:outline-none group" style={{ "--gradient-shine": "#60a5fa", "--gradient-percent": "10%" } as React.CSSProperties}>
                    <span className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-blue-400 group-hover:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        Watch Demo
                    </span>
                </button>
            </div>
    
            {/* Phone & UI Mockup Section */}
            <div className="relative w-full max-w-[340px] sm:max-w-md mx-auto mt-4 animate-fade-in-up delay-700">
                
                {/* Phone Glow Behind */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-indigo-600/30 blur-[80px] rounded-full z-[-1]"></div>
    
                {/* Floating Elements (Left) - Incoming */}
                <div className="absolute top-20 -left-20 sm:-left-32 md:-left-48 lg:-left-56 z-20 hidden sm:block animate-bounce" style={{ animationDuration: '4s' }}>
                    <div className="glass-panel px-4 py-3 rounded-xl flex items-center gap-3 shadow-2xl transform rotate-[-2deg] hover:scale-105 transition-transform duration-300">
                        <div className="bg-emerald-500/20 p-2 rounded-lg text-emerald-400 border border-emerald-500/20">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </div>
                        <div className="text-left">
                            <div className="text-xs text-slate-400 font-medium">01 Incoming</div>
                            <div className="text-sm font-medium text-white">+ $9,250.00</div>
                        </div>
                    </div>
                </div>
    
                {/* Floating Elements (Left) - Expense */}
                <div className="absolute bottom-32 -left-12 sm:-left-24 md:-left-36 lg:-left-44 z-20 hidden sm:block animate-bounce" style={{ animationDuration: '5s', animationDelay: '500ms' }}>
                    <div className="glass-panel px-4 py-3 rounded-xl flex items-center gap-3 shadow-2xl transform rotate-[2deg] hover:scale-105 transition-transform duration-300">
                        <div className="bg-rose-500/20 p-2 rounded-lg text-rose-400 border border-rose-500/20">
                           <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
                        </div>
                        <div className="text-left">
                            <div className="text-xs text-slate-400 font-medium">02 Expense</div>
                            <div className="text-sm font-medium text-white">- $1,420.00</div>
                        </div>
                    </div>
                </div>
    
                {/* Floating Elements (Right) - Daily */}
                <div className="absolute top-32 -right-20 sm:-right-32 md:-right-48 lg:-right-56 z-20 hidden sm:block animate-bounce" style={{ animationDuration: '4.5s', animationDelay: '200ms' }}>
                    <div className="glass-panel px-4 py-3 rounded-xl flex items-center gap-3 shadow-2xl transform rotate-[3deg] hover:scale-105 transition-transform duration-300">
                        <div className="bg-orange-500/20 p-2 rounded-lg text-orange-400 border border-orange-500/20">
                             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 10a2 2 0 012 2v2a2 2 0 01-2 2h-1m-4-6V8a2 2 0 00-2-2H9a2 2 0 00-2 2v2m6 0a2 2 0 00-2 2v2a2 2 0 00-2 2m6-4v6m6 0H4"></path></svg>
                        </div>
                        <div className="text-left">
                            <div className="text-xs text-slate-400 font-medium">03 Daily</div>
                            <div className="text-sm font-medium text-white">- $6.50</div>
                        </div>
                    </div>
                </div>
    
                {/* Floating Elements (Right) - Yield */}
                <div className="absolute bottom-20 -right-12 sm:-right-24 md:-right-36 lg:-right-44 z-20 hidden sm:block animate-bounce" style={{ animationDuration: '5.5s', animationDelay: '700ms' }}>
                    <div className="glass-panel px-4 py-3 rounded-xl flex items-center gap-3 shadow-2xl transform rotate-[-1deg] hover:scale-105 transition-transform duration-300">
                        <div className="bg-violet-500/20 p-2 rounded-lg text-violet-400 border border-violet-500/20">
                           <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                        </div>
                        <div className="text-left">
                            <div className="text-xs text-slate-400 font-medium">Yield</div>
                            <div className="text-sm font-medium text-white">+ $450.25</div>
                        </div>
                    </div>
                </div>
    
                {/* Phone Bezel */}
                <div className="relative bg-black border-[6px] border-[#1a1a1a] rounded-[3rem] shadow-2xl overflow-hidden aspect-[9/19]">
                    {/* Inner Bezel/Screen */}
                    <div className="absolute inset-0 bg-[#0a0a0a] rounded-[2.5rem] flex flex-col overflow-hidden">
                        
                        {/* Status Bar */}
                        <div className="flex justify-between items-center px-6 pt-4 pb-2 text-white">
                            <span className="text-xs font-semibold tracking-wide">9:41</span>
                            <div className="flex gap-1.5 items-center">
                                {/* Signal Icon */}
                                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M2 22h20V2z"/></svg>
                                {/* Wifi Icon */}
                                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3c-4.97 0-9 2.03-9 5s4.03 5 9 5 9-2.03 9-5-4.03-5-9-5zm0 8.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"/></svg>
                                {/* Battery Icon */}
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H7c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-10 2h10v8H7V8zM5 9H3v6h2V9zm18 0h-2v6h2V9z"/></svg>
                            </div>
                        </div>
    
                        {/* App Header */}
                        <div className="px-6 py-4 flex justify-between items-center">
                            <span className="text-xl font-medium text-white tracking-tight">Overview</span>
                            <div className="flex gap-3">
                                <button className="p-2 rounded-full bg-slate-900 text-slate-400 hover:text-white transition-colors">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
                                </button>
                                <button className="p-2 rounded-full bg-slate-800 text-white hover:bg-slate-700 transition-colors">
                                     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                                </button>
                            </div>
                        </div>
    
                        {/* Main App Content */}
                        <div className="flex-1 px-6 overflow-hidden">
                            
                            {/* Main Card */}
                            <div className="bg-[#151517] rounded-3xl p-6 border border-white/5 relative overflow-hidden group">
                                {/* Glow inside card */}
                                <div className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-500/20 blur-3xl rounded-full"></div>
    
                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <h3 className="text-slate-400 text-sm font-medium mb-1">Total Balance</h3>
                                        <div className="text-3xl font-medium text-white tracking-tight">$42,593.00</div>
                                    </div>
                                    <div className="flex items-center gap-1 text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-lg text-xs font-medium">
                                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                                        +12.5%
                                    </div>
                                </div>
    
                                {/* Bar Chart Visual */}
                                <div className="flex items-end justify-between h-32 gap-2 mt-4">
                                    {/* Bar 1 */}
                                    <div className="w-full bg-slate-800/50 rounded-t-md relative group-hover:bg-slate-800 transition-colors h-full flex items-end overflow-hidden">
                                        <div className="w-full bar-gradient-3 h-[40%] rounded-t-md"></div>
                                    </div>
                                    {/* Bar 2 */}
                                    <div className="w-full bg-slate-800/50 rounded-t-md relative group-hover:bg-slate-800 transition-colors h-full flex items-end overflow-hidden">
                                        <div className="w-full bar-gradient-3 h-[65%] rounded-t-md"></div>
                                    </div>
                                    {/* Bar 3 (Active) */}
                                    <div className="w-full bg-slate-800/50 rounded-t-md relative group-hover:bg-slate-800 transition-colors h-full flex items-end overflow-hidden">
                                        {/* Tooltip */}
                                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] px-2 py-1 rounded border border-slate-700 opacity-100">
                                            $8.2k
                                        </div>
                                        <div className="w-full bar-gradient-1 h-[85%] rounded-t-md shadow-[0_0_15px_rgba(99,102,241,0.4)]"></div>
                                    </div>
                                    {/* Bar 4 */}
                                    <div className="w-full bg-slate-800/50 rounded-t-md relative group-hover:bg-slate-800 transition-colors h-full flex items-end overflow-hidden">
                                        <div className="w-full bar-gradient-2 h-[55%] rounded-t-md"></div>
                                    </div>
                                    {/* Bar 5 */}
                                    <div className="w-full bg-slate-800/50 rounded-t-md relative group-hover:bg-slate-800 transition-colors h-full flex items-end overflow-hidden">
                                        <div className="w-full bar-gradient-2 h-[70%] rounded-t-md"></div>
                                    </div>
                                </div>
                                
                                {/* X Axis */}
                                <div className="flex justify-between mt-3 text-[10px] text-slate-500 font-medium px-1">
                                    <span>Mon</span>
                                    <span>Tue</span>
                                    <span className="text-white">Wed</span>
                                    <span>Thu</span>
                                    <span>Fri</span>
                                </div>
                            </div>
    
                            {/* Recent Transactions Preview */}
                            <div className="mt-6">
                                <h4 className="text-sm font-medium text-slate-300 mb-4">Recent</h4>
                                <div className="space-y-3">
                                    {/* Item 1 */}
                                    <div className="flex items-center justify-between p-3 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors cursor-pointer">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                                            </div>
                                            <div>
                                                <div className="text-sm text-white font-medium">Alex Sterling</div>
                                                <div className="text-xs text-slate-500">Transfer</div>
                                            </div>
                                        </div>
                                        <div className="text-sm font-medium text-white">+$1,250</div>
                                    </div>
                                    {/* Item 2 */}
                                    <div className="flex items-center justify-between p-3 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors cursor-pointer">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path></svg>
                                            </div>
                                            <div>
                                                <div className="text-sm text-white font-medium">Server Costs</div>
                                                <div className="text-xs text-slate-500">Subscription</div>
                                            </div>
                                        </div>
                                        <div className="text-sm font-medium text-white">-$49.00</div>
                                    </div>
                                </div>
                            </div>
    
                        </div>
                        
                        {/* Bottom Nav */}
                        <div className="bg-[#151517] h-16 flex items-center justify-around px-2 border-t border-white/5">
                            <button className="flex flex-col items-center gap-1 text-indigo-400">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                            </button>
                            <button className="flex flex-col items-center gap-1 text-slate-600 hover:text-slate-400">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path></svg>
                            </button>
                            <button className="flex flex-col items-center gap-1 text-slate-600 hover:text-slate-400">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg>
                            </button>
                            <button className="flex flex-col items-center gap-1 text-slate-600 hover:text-slate-400">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                            </button>
                        </div>
    
                        {/* Home Indicator */}
                        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/20 rounded-full"></div>
    
                    </div>
                </div>
    
                {/* Decorative Floor Glow */}
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[80%] h-12 bg-indigo-500/20 blur-[40px] rounded-[100%]"></div>
            </div>
            
             {/* Footer watermark */}
            <div className="fixed bottom-6 right-6 z-50">
                <div className="glass-panel px-3 py-1.5 rounded-lg flex items-center gap-2 text-xs font-medium text-slate-500">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                    <span>Made in Aura</span>
                </div>
            </div>

      </div>
    </section>
  );
}