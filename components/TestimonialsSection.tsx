"use client";

const testimonials = {
  col1: [
    {
      type: "review",
      stars: 5,
      text: "\"This platform completely changed how we approach design systems. The speed and consistency we've achieved is mind-blowing. It's the standard we've been looking for.\"",
      name: "Sarah Jenkins",
      role: "Product Designer at Stripe",
      avatar: "https://i.pravatar.cc/150?u=sarah",
      border: "dotted",
    },
    {
      type: "twitter",
      handle: "@jamesbuilds",
      text: "Just shipped my portfolio using the new components. The attention to detail is insane. 🚀",
      name: "James Doe",
      avatar: "JD",
      border: "solid",
    },
  ],
  col2: [
    {
      type: "quote",
      text: "\"I've used every UI kit out there. Nothing comes close to the polish and flexibility of this one. It's not just a library, it's a design education.\"",
      name: "Michael Chen",
      role: "CTO at Vercel",
      avatar: "https://i.pravatar.cc/150?u=michael",
      border: "dotted",
    },
    {
      type: "plain",
      text: "\"Finally, a tool that bridges the gap between design and code perfectly. Our developer handoff time has been cut in half.\"",
      border: "solid", // In the image this looks like a bottom card in the middle column
    },
  ],
  col3: [
    {
      type: "review",
      stars: 5,
      text: "\"We redesigned our entire SaaS dashboard in a weekend. The components are not just beautiful, they're robust and accessible.\"",
      name: "David Kim",
      role: "Founder at Stack",
      avatar: "https://i.pravatar.cc/150?u=david",
      border: "solid",
    },
    {
      type: "review_text_only",
      text: "\"Best investment we made for our design team this year. The ROI was immediate and the support is fantastic.\"",
      name: "Anna K.",
      role: "Director of Product",
      avatar: "AK", // Initials
      border: "solid",
    },
  ],
};

export default function TestimonialsSection() {
  return (
    <section className="bg-black text-white py-24 border-t border-white/5 relative overflow-hidden">
      {/* Background Gradient/Glow (Subtle) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-white/5 blur-[120px] rounded-full pointer-events-none z-0 opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-medium tracking-tight mb-6">
            Loved by <span className="text-slate-500">passionate builders</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Join thousands of developers and designers who rely on our tools to ship better products, faster.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Column 1 */}
          <div className="space-y-6">
            {testimonials.col1.map((card, i) => (
              <TestimonialCard key={i} data={card} />
            ))}
          </div>

          {/* Column 2 */}
          <div className="space-y-6">
            {testimonials.col2.map((card, i) => (
              <TestimonialCard key={i} data={card} />
            ))}
          </div>

          {/* Column 3 */}
          <div className="space-y-6">
            {testimonials.col3.map((card, i) => (
              <TestimonialCard key={i} data={card} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ data }: { data: any }) {
  const isDotted = data.border === "dotted";
  const borderClass = isDotted ? "border-dashed border-white/20" : "border-solid border-white/10";

  return (
    <div className={`bg-[#050505] rounded-xl p-8 border ${borderClass} hover:border-white/20 transition-colors h-fit`}>
      
      {/* Stars */}
      {data.stars && (
        <div className="flex gap-1 mb-6 text-white text-xs">
          {[...Array(data.stars)].map((_, i) => (
            <svg key={i} className="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
          ))}
        </div>
      )}

      {/* Quote Icon */}
      {data.type === "quote" && (
        <div className="mb-6 text-slate-500">
          <svg className="w-10 h-10 fill-current opacity-50" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z"/></svg>
        </div>
      )}

      {/* Content */}
      <p className={`text-slate-300 leading-relaxed mb-8 ${data.type === 'quote' ? 'text-lg font-medium text-white' : 'text-sm'}`}>
        {data.text}
      </p>

      {/* Footer / User Info */}
      {(data.name || data.handle) && (
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Avatar */}
            {data.avatar?.startsWith("http") ? (
              <img src={data.avatar} alt={data.name} className="w-10 h-10 rounded-full bg-slate-800 object-cover" />
            ) : (
              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-white border border-white/10 ${data.avatar === 'AK' ? 'bg-[#064e3b] text-[#34d399]' : 'bg-[#0f172a] text-blue-400'}`}>
                {data.avatar}
              </div>
            )}
            
            <div>
              <div className="text-sm font-medium text-white">{data.name}</div>
              {data.role && <div className="text-xs text-slate-500">{data.role}</div>}
              {data.handle && <div className="text-xs text-slate-500">{data.handle}</div>}
            </div>
          </div>

          {/* Twitter Icon for that specific card */}
          {data.type === "twitter" && (
            <svg className="w-5 h-5 text-slate-600" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
          )}
        </div>
      )}
    </div>
  );
}
