"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Does Nexus work offline?",
    answer: "Yes, Nexus has a robust offline mode. You can continue scanning products and processing sales even if your internet goes down. Data syncs automatically once you're back online.",
  },
  {
    question: "Can I integrate with my existing POS hardware?",
    answer: "Most likely. Nexus supports a wide range of barcode scanners, receipt printers, and cash drawers. Contact our sales team for a specific compatibility check.",
  },
  {
    question: "Is training included for my staff?",
    answer: "Yes, all plans come with access to our video training library. Growth and Enterprise plans include dedicated onboarding sessions for your warehouse managers and store staff.",
  },
  {
    question: "How secure is my sales data?",
    answer: "Your data is encrypted at rest and in transit using enterprise-grade security standards. We perform daily backups and comply with GDPR and CCPA regulations.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#020004] text-white py-24 border-t border-white/5 relative z-10 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Column: Header */}
          <div className="w-full lg:w-1/3 animate-fade-in-up animate-on-scroll">
            <div className="text-xs font-mono text-slate-500 mb-2 uppercase tracking-widest">
              Support
            </div>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">
              Common <br /> Questions
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed">
              Everything you need to know about setting up your inventory system.
            </p>
          </div>

          {/* Right Column: Accordion */}
          <div className="w-full lg:w-2/3 animate-fade-in-up animate-on-scroll delay-200">
            <div className="border-t border-white/10">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-white/10">
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full py-6 flex items-center justify-between group text-left focus:outline-none"
                  >
                    <span className="text-lg md:text-xl font-light text-slate-200 group-hover:text-white transition-colors">
                      {faq.question}
                    </span>
                    <span className="ml-6 flex-shrink-0 text-slate-500 group-hover:text-white transition-colors">
                      {openIndex === index ? (
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 12H4" />
                        </svg>
                      ) : (
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
                        </svg>
                      )}
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openIndex === index ? "max-h-40 opacity-100 mb-6" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-slate-400 leading-relaxed pr-12">
                      {faq.answer}
                    </p>
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