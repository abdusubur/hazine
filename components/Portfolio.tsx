const projects = [
  {
    title: "Creative Agency Website",
    category: "Web Design, UI/UX",
    color: "bg-blue-900", // Placeholder color since we don't have the images
  },
  {
    title: "E-commerce Platform",
    category: "Web Development, UI/UX",
    color: "bg-indigo-900",
  },
  {
    title: "Mobile App Redesign",
    category: "UI/UX Design, Brand Identity",
    color: "bg-purple-900",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-gray-800 border-t border-gray-700">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-serif font-bold text-white text-center mb-12">Our Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-900 rounded-lg shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300">
              {/* Placeholder Image Area */}
              <div className={`w-full h-48 ${project.color} flex items-center justify-center group-hover:opacity-90 transition-opacity`}>
                <span className="text-white/20 text-4xl font-serif">{index + 1}</span>
              </div>
              
              <div className="p-6 border-t border-gray-800">
                <h3 className="text-xl font-serif font-bold text-white mb-2 group-hover:text-aura-blue transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm font-medium tracking-wide">
                  {project.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
