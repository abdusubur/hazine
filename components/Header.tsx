"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center w-full px-4">
        <div className="glass-nav rounded-full px-2 py-2 flex items-center justify-between w-full max-w-5xl h-14">
          {/* Logo */}
          <Link href="/" className="flex items-center pl-4">
             {/* Framer Icon SVG */}
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                  <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z"/>
             </svg>
             <span className="ml-3 text-lg font-medium text-white tracking-tight hidden sm:block">Hazine</span>
          </Link>
          
          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            {[
              { name: "Features", href: "/features" },
              { name: "Use Cases", href: "/use-cases" },
              { name: "Pricing", href: "/pricing" },
              { name: "Resources", href: "/resources" }
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="hover:text-white transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="pr-1">
              <Link 
                href="/book-demo"
                className="bg-white text-black hover:bg-slate-200 transition-colors px-5 py-2 rounded-full text-sm font-medium inline-block"
              >
                  Book Demo
              </Link>
          </div>

          {/* Mobile Menu Button (Simple implementation) */}
          <div className="md:hidden pr-2">
              <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-white focus:outline-none"
              >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
              </button>
          </div>
        </div>
        
        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="absolute top-20 left-4 right-4 glass-nav rounded-2xl p-4 md:hidden flex flex-col gap-4 text-slate-300">
              {[
                { name: "Features", href: "/features" },
                { name: "Use Cases", href: "/use-cases" },
                { name: "Pricing", href: "/pricing" },
                { name: "Resources", href: "/resources" }
              ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </>
  );
}
