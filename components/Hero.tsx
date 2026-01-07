"use client";

import { useEffect, useRef } from "react";
import DashboardMockup from "./DashboardMockup";
import Link from "next/link";

export default function Hero() {
    const mockupRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (mockupRef.current) {
                const scrollY = window.scrollY;
                // Calculate rotation: start at 12, end at 0 after 400px scroll
                const rotation = Math.max(0, 12 - (scrollY / 400) * 12);
                mockupRef.current.style.transform = `rotateX(${rotation}deg)`;
            }
        };

        window.addEventListener("scroll", handleScroll);
        // Initial call
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 w-full overflow-x-hidden">


            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">

                {/* Badge */}
                <a href="#" className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-800 bg-slate-900/50 hover:bg-slate-800/50 hover:border-slate-700 transition-all group mb-8 animate-fade-in-up animate-on-scroll">
                    <span className="bg-indigo-500/20 text-indigo-300 text-xs font-medium px-2 py-0.5 rounded uppercase tracking-wide">New</span>
                    <span className="text-sm text-slate-300">Hazine 4.0 is available</span>
                    <svg className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </a>
                {/* Hero Text */}
                <h1 className="text-5xl sm:text-7xl font-medium text-white tracking-tight leading-[1.1] mb-6 animate-fade-in-up animate-on-scroll delay-200">
                    Master Your Inventory. <br className="hidden sm:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400 glow-text">Unify Your Sales.</span>
                </h1>

                <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10 font-normal animate-fade-in-up animate-on-scroll delay-400">
                    The all-in-one platform for markets and warehouses to track products, optimize stock, and manage sales across physical stores and digital channels.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-4 mb-20 animate-fade-in-up animate-on-scroll delay-500">
                    {/* Animated Shiny Button 1 */}
                    <button className="shiny-cta flex flex-row gap-2 focus:outline-none group" style={{ "--gradient-shine": "#60a5fa", "--gradient-percent": "10%" } as React.CSSProperties}>
                        <svg className="w-5 h-5 text-blue-400 group-hover:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <span className="items-center">
                            View Features
                        </span>
                    </button>


                    {/* Animated Shiny Button 2 */}
                    <button className="shiny-cta  focus:outline-none group">
                        <Link
                            href="/book-demo"
                            className="flex gap-2 flex-row"
                        >
                            <span className="items-center">
                                Request Demo
                            </span>
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                        </Link>
                    </button>

                </div>

                {/* Dashboard Mockup Section */}
                <div className="relative w-full max-w-5xl mx-auto mt-4 animate-fade-in-up animate-on-scroll delay-700 perspective-[2000px]">

                    {/* Glow Behind */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[80%] bg-indigo-600/20 blur-[100px] rounded-full z-[-1]"></div>

                    <div
                        ref={mockupRef}
                        className="transform will-change-transform"
                        style={{ transform: "rotateX(12deg)" }}
                    >
                        <DashboardMockup />
                    </div>
                </div>

                {/* Footer watermark */}

            </div>
        </section>
    );
}