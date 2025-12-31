export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-center border-t border-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-serif font-bold text-white mb-12">Get in Touch</h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Ready to start your next project? Let's create something amazing together.
        </p>
        <a
          href="mailto:info@aurabuild.com"
          className="inline-block bg-aura-blue hover:bg-aura-blue-dark text-white font-bold py-4 px-10 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-aura-blue/40"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
}
