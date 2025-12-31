"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What is the typical deployment velocity?",
    answer: "We aim for rapid iteration. Initial deployment usually happens within 2 weeks of the kickoff, with subsequent updates deployed continuously via our automated CI/CD pipelines.",
  },
  {
    question: "Do you integrate with internal engineering teams?",
    answer: "Yes, seamless integration is a core part of our protocol. We can work alongside your existing team, embedding into your Slack, Jira, and GitHub workflows to ensure transparency and collaboration.",
  },
  {
    question: "Is post-launch support included?",
    answer: "Absolutely. We provide dedicated support post-launch, including monitoring, bug fixes, and infrastructure optimization to ensure your platform scales effortlessly.",
  },
  {
    question: "What is the preferred tech stack?",
    answer: "Our substrate is built on Next.js, React, and Tailwind for the frontend, backed by Supabase or Postgres. We deploy on Vercel for the edge network speed and reliability.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#020004] text-white py-24 border-t border-white/5 relative z-10 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Column: Header */}
          <div className="w-full lg:w-1/3">
            <div className="text-xs font-mono text-slate-500 mb-2 uppercase tracking-widest">
              05 — Protocols
            </div>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">
              Operational <br /> Queries
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed">
              Standard configurations and compatibility checks for new partners.
            </p>
          </div>

          {/* Right Column: Accordion */}
          <div className="w-full lg:w-2/3">
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