"use client";

const logos = [
  {
    name: "Lucidchart",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 md:w-10 md:h-10">
        <path d="M4 4h16v16H4V4zm2 2v12h12V6H6z" /> 
      </svg>
    ),
    text: "Lucidchart"
  },
  {
    name: "Wrike",
    svg: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 md:w-8 md:h-8">
            <path d="M12 2L2 7l10 5 10-5-10-5-10-5-10-5-10-5-10-5-10-5-10-5-10-5-10-5-10-5zm0 9l2-1-2-1-2 1 2 1zm0-3l-2 1 2 1 2-1-2-1zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
    ),
    text: "wrike"
  },
  {
    name: "jQuery",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 md:w-8 md:h-8">
         <path d="M21.9 19.3v-9.5c0-.8-.5-1.5-1.2-1.8l-8.2-4.2c-.8-.4-1.7-.4-2.5 0l-8.2 4.2c-.7.3-1.2 1-1.2 1.8v9.5c0 .8.5 1.5 1.2 1.8l8.2 4.2c.8.4 1.7.4 2.5 0l8.2-4.2c.7-.3 1.2-1 1.2-1.8zM12 4.8l7.2 3.7-7.2 3.7-7.2-3.7L12 4.8z"/>
      </svg>
    ),
    text: "jQuery"
  },
  {
    name: "OpenStack",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 md:w-8 md:h-8">
        <path d="M4 4h7v7H4V4zm0 9h7v7H4v-7zm9-9h7v7h-7V4zm0 9h7v7h-7v-7z"/>
      </svg>
    ),
    text: "openstack"
  },
  {
    name: "ServiceNow",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 md:w-8 md:h-8">
        <circle cx="12" cy="12" r="10" />
      </svg>
    ),
    text: "servicenow"
  },
  {
    name: "Paysafe",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 md:w-8 md:h-8">
         <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41C17.92 5.77 20 8.65 20 12c0 2.08-.81 3.98-2.11 5.39z"/>
      </svg>
    ),
    text: "paysafe:"
  },
  {
    name: "Git",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 md:w-8 md:h-8">
         <path d="M12 2L2 12l10 10 10-10L12 2zm0 4l3 3-3 3-3-3 3-3z"/>
      </svg>
    ),
    text: "git"
  },
  {
    name: "SquareLogo",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 md:w-8 md:h-8">
         <rect x="2" y="2" width="20" height="20" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
         <path d="M7 22V7h10v15" stroke="currentColor" strokeWidth="2" fill="none"/>
      </svg>
    ),
    text: ""
  },
];

export default function LogoTicker() {
  return (
    <section className="bg-black py-12 w-full overflow-hidden border-t border-white/5">
      <div className="relative flex items-center">
        
        {/* Gradient Masks for edge fading */}
        <div className="absolute left-0 top-0 bottom-0 w-32 md:w-64 z-10 bg-gradient-to-r from-black via-black/80 to-transparent pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 md:w-64 z-10 bg-gradient-to-l from-black via-black/80 to-transparent pointer-events-none"></div>

        <div className="flex w-max animate-ticker whitespace-nowrap">
          {/* Logo set 1 */}
          <div className="flex items-center gap-16 md:gap-32 px-12 md:px-24">
            {logos.map((logo, index) => (
              <div key={index} className="flex items-center gap-4 group cursor-pointer opacity-30 hover:opacity-100 transition-opacity duration-500">
                <div className="text-gray-400 group-hover:text-white transition-colors">
                  {logo.svg}
                </div>
                {logo.text && (
                    <span className="text-xl md:text-2xl font-medium tracking-tight text-gray-400 group-hover:text-white transition-colors">
                        {logo.text}
                    </span>
                )}
              </div>
            ))}
          </div>

          {/* Duplicated logo set 1 for seamless loop */}
          <div className="flex items-center gap-16 md:gap-32 px-12 md:px-24">
            {logos.map((logo, index) => (
              <div key={`dup-${index}`} className="flex items-center gap-4 group cursor-pointer opacity-30 hover:opacity-100 transition-opacity duration-500">
                <div className="text-gray-400 group-hover:text-white transition-colors">
                  {logo.svg}
                </div>
                {logo.text && (
                    <span className="text-xl md:text-2xl font-medium tracking-tight text-gray-400 group-hover:text-white transition-colors">
                        {logo.text}
                    </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}