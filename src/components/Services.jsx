export default function Services() {
  return (
    <section id="boilers" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A1A1A] tracking-tight mb-4">
            Our Core Services
          </h2>
          <p className="text-lg text-gray-600">
            Professional heating, boiler, and plumbing solutions tailored for
            homes across Leicester and Leicestershire.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Boiler Installations */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="h-48 overflow-hidden bg-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80"
                  alt="Modern boiler installation"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">
                  Boiler Installations
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Upgrade to an energy-efficient Worcester Bosch boiler with up
                  to a 12-year guarantee installed by local experts.
                </p>
              </div>
            </div>
            <div className="p-6 pt-0">
              <a
                href="tel:01162321031"
                className="w-full block bg-gray-100 hover:bg-[#E51F20] hover:text-white text-[#1A1A1A] font-semibold py-3 rounded-xl text-center transition-colors"
              >
                Get a Quote
              </a>
            </div>
          </div>

          {/* Card 2: Boiler Repairs & Servicing */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="h-48 overflow-hidden bg-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80"
                  alt="Boiler repair and maintenance"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">
                  Boiler Repairs & Servicing
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Fast, expert diagnostics and repairs to keep your home warm,
                  safe, and running efficiently all year round.
                </p>
              </div>
            </div>
            <div className="p-6 pt-0">
              <a
                href="tel:01162321031"
                className="w-full block bg-gray-100 hover:bg-[#E51F20] hover:text-white text-[#1A1A1A] font-semibold py-3 rounded-xl text-center transition-colors"
              >
                Call Now
              </a>
            </div>
          </div>

          {/* Card 3: Plumbing & Bathrooms */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="h-48 overflow-hidden bg-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80"
                  alt="Bathroom plumbing installation"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">
                  Plumbing & Bathrooms
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Complete bathroom installations, repairs, and general
                  household plumbing handled seamlessly by experienced local
                  specialists.
                </p>
              </div>
            </div>
            <div className="p-6 pt-0">
              <a
                href="#showroom"
                className="w-full block bg-gray-100 hover:bg-[#004B9B] hover:text-white text-[#1A1A1A] font-semibold py-3 rounded-xl text-center transition-colors"
              >
                Visit Showroom
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
