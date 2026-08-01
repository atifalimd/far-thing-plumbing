export default function Hero() {
  return (
    <section
      id="home"
      className="relative bg-gray-50 py-12 lg:py-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: Content */}
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1A1A1A] tracking-tight leading-tight">
              Reliable Plumbing & Heating Experts in{" "}
              <span className="text-[#E51F20]">Leicester</span>
            </h1>

            <p className="text-lg text-gray-700 leading-relaxed">
              From new boiler installations to heating repairs, get trusted
              local service backed by expert care across Leicestershire.
            </p>

            {/* Split CTA & Star Ratings Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {/* Left Half: Primary Call Button */}
              <div>
                <a
                  href="tel:01162321031"
                  className="w-full bg-[#E51F20] hover:bg-red-700 text-white font-bold py-4 px-6 rounded-xl shadow-md transition-colors flex items-center justify-center gap-3 text-center"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span>Call 0116 232 1031</span>
                </a>
              </div>

              {/* Right Half: Star Ratings */}
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-center">
                <div className="text-amber-500 flex gap-1 mb-1 text-lg">
                  ★★★★★
                </div>
                <p className="text-xs font-medium text-gray-600">
                  4.6/5 rating from Which? Trusted Traders
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Stock Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=800&q=80"
                alt="Professional heating engineer working in a Leicester home"
                className="w-full h-[400px] sm:h-[480px] object-cover"
              />
            </div>
            {/* Decorative accent element behind image */}
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-[#004B9B] rounded-2xl -z-10 opacity-10"></div>
          </div>
        </div>

        {/* Bottom Full-Width USP Row */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
            <div className="bg-red-50 p-3 rounded-lg text-[#E51F20]">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-[#1A1A1A]">
                Official Boiler Experts
              </h3>
              <p className="text-xs text-gray-500">
                Certified local specialists
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
            <div className="bg-blue-50 p-3 rounded-lg text-[#004B9B]">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-[#1A1A1A]">
                Easy Monthly Payments
              </h3>
              <p className="text-xs text-gray-500">Flexible finance options</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
            <div className="bg-red-50 p-3 rounded-lg text-[#E51F20]">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 10h47V3a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-[#1A1A1A]">Proven Local Trust</h3>
              <p className="text-xs text-gray-500">
                Top-rated Leicester engineers
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
            <div className="bg-blue-50 p-3 rounded-lg text-[#004B9B]">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-[#1A1A1A]">
                Real Showroom to Visit
              </h3>
              <p className="text-xs text-gray-500">Glenfield based displays</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
