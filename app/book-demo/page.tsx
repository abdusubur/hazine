"use client";

import Header from "@/components/Header";
import FooterCTA from "@/components/FooterCTA";
import { useState } from "react";

export default function BookDemoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch('/api/book-demo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      setSuccess(true);
      setFormData({ name: "", email: "", phone: "", company: "" });
    } catch (err: any) {
      console.error("Error submitting form:", err);
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex flex-col bg-[#020004] text-white">
      <Header />
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 flex-grow flex items-center justify-center">
        <div className="w-full max-w-md bg-[#0a0a0a] border border-white/10 p-8 rounded-2xl shadow-2xl relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-indigo-900/20 via-transparent to-transparent pointer-events-none"></div>
            
            <div className="relative z-10">
                <div className="mb-8 text-center">
                    <h1 className="text-3xl font-semibold text-white mb-2">Book a Demo</h1>
                    <p className="text-slate-400 text-sm">See how Hazine can transform your business.</p>
                </div>

                {success ? (
                    <div className="text-center py-10">
                        <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        </div>
                        <h3 className="text-xl font-medium text-white mb-2">Request Received!</h3>
                        <p className="text-slate-400 text-sm">We'll be in touch shortly to schedule your demo.</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label className="block text-xs font-medium text-slate-300 uppercase tracking-wide mb-1.5">Full Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all placeholder:text-slate-600"
                                placeholder="John Doe"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-medium text-slate-300 uppercase tracking-wide mb-1.5">Work Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all placeholder:text-slate-600"
                                placeholder="john@company.com"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-medium text-slate-300 uppercase tracking-wide mb-1.5">Phone Number</label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all placeholder:text-slate-600"
                                placeholder="+1 (555) 000-0000"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-medium text-slate-300 uppercase tracking-wide mb-1.5">Company Name</label>
                            <input
                                type="text"
                                name="company"
                                value={formData.company}
                                onChange={handleChange}
                                required
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all placeholder:text-slate-600"
                                placeholder="Acme Inc."
                            />
                        </div>

                        {error && <p className="text-red-400 text-xs text-center">{error}</p>}

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-3 rounded-lg transition-all shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_25px_rgba(79,70,229,0.5)] disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? "Submitting..." : "Schedule Demo"}
                        </button>
                    </form>
                )}
            </div>
        </div>
      </div>
      <FooterCTA />
    </main>
  );
}