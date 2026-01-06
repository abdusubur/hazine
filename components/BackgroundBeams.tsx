"use client";

import { useEffect } from "react";

export default function BackgroundBeams() {
  useEffect(() => {
    const loadUnicornScript = () => {
      // Logic adapted from the provided snippet
      if (!(window as any).UnicornStudio) {
        (window as any).UnicornStudio = { isInitialized: false };
        const script = document.createElement("script");
        // Fixed URL spacing from snippet
        script.src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.0.0/dist/unicornStudio.umd.js";
        script.onload = function () {
          if (!(window as any).UnicornStudio.isInitialized) {
            (window as any).UnicornStudio.init();
            (window as any).UnicornStudio.isInitialized = true;
          }
        };
        (document.head || document.body).appendChild(script);
      } else {
        // If already loaded (e.g. client-side nav), ensure init
        if (!(window as any).UnicornStudio.isInitialized) {
             (window as any).UnicornStudio.init();
             (window as any).UnicornStudio.isInitialized = true;
        }
      }
    };

    loadUnicornScript();
  }, []);

  return (
    <div className="fixed inset-0 z-0 w-full h-full bg-[#020004]">
      {/* 
        Using width: 100% and height: 100% instead of fixed 1440px/900px 
        to ensure it covers the viewport as a proper background.
      */}
      <div 
        data-us-project="hSq548hqKa7TvN5bVL0X" 
        style={{ width: '100%', height: '100%' }}
      ></div>
    </div>
  );
}