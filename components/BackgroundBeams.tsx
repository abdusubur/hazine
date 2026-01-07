"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function BackgroundBeams() {
  const pathname = usePathname();

  useEffect(() => {
    const run = () => {
      if ((window as any).UnicornStudio) {
        (window as any).UnicornStudio.init();
      }
    };

    // script varsa direkt init
    if ((window as any).UnicornStudio) {
      run();
      return;
    }

    // script yoksa yükle
    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.0.0/dist/unicornStudio.umd.js";
    script.onload = run;
    document.body.appendChild(script);
  }, [pathname]); // 🔥 kritik

  return (
    <div className="fixed inset-0 z-0 w-full h-full bg-[#020004]">
      <div
        data-us-project="hSq548hqKa7TvN5bVL0X"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}
