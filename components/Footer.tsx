export default function Footer() {
  return (
    <footer className="bg-gray-950 py-10 text-center text-gray-400 border-t border-gray-900">
      <div className="container mx-auto px-6">
        <p className="mb-4">&copy; 2023 AuraBuild. All rights reserved.</p>
        <div className="flex justify-center space-x-6 text-sm">
          <a href="#" className="hover:text-aura-blue transition duration-300">Privacy Policy</a>
          <a href="#" className="hover:text-aura-blue transition duration-300">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
