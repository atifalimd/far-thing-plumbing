export default function Footer() {
  return (
    <footer className="bg-[#111827] text-white pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Brand & Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img
                src="/logo.png"
                alt="Farthings Plumbing & Heating Logo"
                className="h-10 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Trust us to handle your plumbing needs with expertise and care,
              keeping you with peace of mind and no-leak running system.
            </p>
            <div className="space-y-1 pt-1">
              <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider">
                Connect We Social Media:
              </p>
              <div className="flex items-center gap-3 pt-2">
                <a
                  href="#facebook"
                  className="w-8 h-8 rounded bg-[#004B9B] flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                >
                  <span className="text-xs font-bold">f</span>
                </a>
                <a
                  href="#twitter"
                  className="w-8 h-8 rounded bg-[#004B9B] flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                >
                  <span className="text-xs font-bold">t</span>
                </a>
                <a
                  href="#linkedin"
                  className="w-8 h-8 rounded bg-[#004B9B] flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                >
                  <span className="text-xs font-bold">in</span>
                </a>
                <a
                  href="#instagram"
                  className="w-8 h-8 rounded bg-[#E51F20] flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                >
                  <span className="text-xs font-bold">ig</span>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Menu */}
          <div>
            <h3 className="text-white font-bold text-base mb-4 tracking-wide">
              Menu
            </h3>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#boilers"
                  className="hover:text-white transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-white transition-colors"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#blogs" className="hover:text-white transition-colors">
                  Blogs
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-white font-bold text-base mb-4 tracking-wide">
              Services
            </h3>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>
                <a
                  href="#boilers"
                  className="hover:text-white transition-colors"
                >
                  Plumbing
                </a>
              </li>
              <li>
                <a
                  href="#boilers"
                  className="hover:text-white transition-colors"
                >
                  Carpentry
                </a>
              </li>
              <li>
                <a
                  href="#heating"
                  className="hover:text-white transition-colors"
                >
                  Heating
                </a>
              </li>
              <li>
                <a
                  href="#showroom"
                  className="hover:text-white transition-colors"
                >
                  More
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter & About Us Links */}
          <div className="space-y-6">
            <div>
              <h3 className="text-white font-bold text-base mb-4 tracking-wide">
                About Us
              </h3>
              <ul className="space-y-2.5 text-sm text-gray-400">
                <li>
                  <a
                    href="#about"
                    className="hover:text-white transition-colors"
                  >
                    Who We Are
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="hover:text-white transition-colors"
                  >
                    What Our Mission
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="hover:text-white transition-colors"
                  >
                    Team Members
                  </a>
                </li>
                <li>
                  <a
                    href="#showroom"
                    className="hover:text-white transition-colors"
                  >
                    Testimonial
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold text-base mb-3 tracking-wide">
                Newsletter
              </h3>
              <p className="text-xs text-gray-400 mb-3">
                Subscribe our blog for getting latest updates of our activities.
              </p>
              <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-white text-[#111827] px-3 py-2 rounded text-xs focus:outline-none"
                />
                <button
                  type="submit"
                  className="w-full bg-[#E51F20] hover:bg-red-700 text-white font-bold py-2 rounded text-xs transition-colors shadow"
                >
                  Subscribe Now
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 border-t border-gray-800 text-center text-xs text-gray-500">
          <p>
            Copyright © {new Date().getFullYear()} Farthings All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
