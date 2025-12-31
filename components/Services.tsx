const services = [
  {
    title: "Web Design & Development",
    description: "Stunning, responsive websites tailored to your brand, built with modern technologies for optimal performance.",
  },
  {
    title: "UI/UX Design",
    description: "Intuitive and engaging user interfaces that provide seamless experiences and drive user satisfaction.",
  },
  {
    title: "Brand Identity",
    description: "Crafting unique and memorable brand identities that resonate with your target audience and stand out.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-serif font-bold text-white text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-800 p-8 rounded-lg shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border border-gray-700 hover:border-aura-blue/30 group"
            >
              <h3 className="text-2xl font-serif font-bold text-white mb-4 group-hover:text-aura-blue transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
