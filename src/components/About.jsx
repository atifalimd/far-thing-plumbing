export default function AboutSection() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: Image with Diagonal Shape/Pattern Background */}
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80"
                alt="Plumbing engineer"
                className="w-full h-[400px] object-cover"
              />
            </div>
            {/* Custom Diagonal / Angular Shape Container matching your design screenshot */}
            <div className="absolute -bottom-6 -left-6 w-72 h-72 bg-[#004B9B] clip-diagonal rounded-bl-2xl -z-0 opacity-90 hidden sm:block"></div>
            <div className="absolute -top-6 -right-6 w-48 h-48 bg-[#E51F20] clip-diagonal rounded-tr-2xl -z-0 opacity-80 hidden sm:block"></div>
          </div>

          {/* Right Side: Content & Bullet points */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A1A1A] tracking-tight">
              We Work Perfectly Within{" "}
              <span className="text-[#E51F20]">On Time</span>
            </h2>

            <p className="text-gray-600 leading-relaxed">
              We are committed to delivering exceptional plumbing services with
              a focus on reliability, efficiency, and customer satisfaction.
              Never when you spart!
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 font-semibold text-[#1A1A1A]">
                <span className="w-2.5 h-2.5 bg-[#E51F20] rounded-full"></span>
                Experienced Team.
              </div>
              <div className="flex items-center gap-3 font-semibold text-[#1A1A1A]">
                <span className="w-2.5 h-2.5 bg-[#004B9B] rounded-full"></span>
                Comprehensive Services.
              </div>
              <div className="flex items-center gap-3 font-semibold text-[#1A1A1A]">
                <span className="w-2.5 h-2.5 bg-[#E51F20] rounded-full"></span>
                Affordable & Transparent Pricing.
              </div>
            </div>

            <div className="pt-4">
              <a
                href="tel:01162321031"
                className="inline-block bg-[#E51F20] hover:bg-red-700 text-white font-bold px-8 py-3.5 rounded-xl shadow transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
