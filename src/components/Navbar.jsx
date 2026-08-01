import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Farthings Plumbing & Heating Logo"
            className="h-12 w-auto object-contain"
          />
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#home"
            className="text-[#1A1A1A] hover:text-[#E51F20] font-medium transition-colors"
          >
            Home
          </a>
          <a
            href="#boilers"
            className="text-[#1A1A1A] hover:text-[#E51F20] font-medium transition-colors"
          >
            New Boilers
          </a>
          <a
            href="#heating"
            className="text-[#1A1A1A] hover:text-[#E51F20] font-medium transition-colors"
          >
            Heating Services
          </a>
          <a
            href="#plumbing"
            className="text-[#1A1A1A] hover:text-[#E51F20] font-medium transition-colors"
          >
            Plumbing & Bathrooms
          </a>
          <a
            href="#showroom"
            className="text-[#1A1A1A] hover:text-[#E51F20] font-medium transition-colors"
          >
            Showroom
          </a>
          <a
            href="#contact"
            className="text-[#1A1A1A] hover:text-[#E51F20] font-medium transition-colors"
          >
            Contact Us
          </a>
        </nav>

        {/* Right Side: Phone CTA & Mobile Hamburger Button */}
        <div className="flex items-center gap-4">
          <a
            href="tel:01162321031"
            className="bg-[#E51F20] hover:bg-red-700 text-white font-bold px-4 py-2.5 sm:px-5 rounded-lg shadow transition-colors flex items-center gap-2 text-sm sm:text-base"
          >
            <span>Call 0116 232 1031</span>
          </a>

          {/* Mobile Menu Button (Hamburger / Close X) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#1A1A1A] focus:outline-none p-2"
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? (
              // X Close Icon
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Hamburger Icon
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pt-4 pb-6 space-y-3 shadow-lg">
          <a
            href="#home"
            onClick={() => setIsOpen(false)}
            className="block text-[#1A1A1A] hover:text-[#E51F20] font-medium py-2 border-b border-gray-50"
          >
            Home
          </a>
          <a
            href="#boilers"
            onClick={() => setIsOpen(false)}
            className="block text-[#1A1A1A] hover:text-[#E51F20] font-medium py-2 border-b border-gray-50"
          >
            New Boilers
          </a>
          <a
            href="#heating"
            onClick={() => setIsOpen(false)}
            className="block text-[#1A1A1A] hover:text-[#E51F20] font-medium py-2 border-b border-gray-50"
          >
            Heating Services
          </a>
          <a
            href="#plumbing"
            onClick={() => setIsOpen(false)}
            className="block text-[#1A1A1A] hover:text-[#E51F20] font-medium py-2 border-b border-gray-50"
          >
            Plumbing & Bathrooms
          </a>
          <a
            href="#showroom"
            onClick={() => setIsOpen(false)}
            className="block text-[#1A1A1A] hover:text-[#E51F20] font-medium py-2 border-b border-gray-50"
          >
            Showroom
          </a>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block text-[#1A1A1A] hover:text-[#E51F20] font-medium py-2"
          >
            Contact Us
          </a>
        </div>
      )}
    </header>
  );
}
