export default function TrustStrip() {
  return (
    <section className="bg-white py-10 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
            Certified & Approved Local Specialists
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center justify-center">
          {/* Badge 1: Gas Safe */}
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 text-center flex flex-col items-center justify-center shadow-sm hover:shadow transition-shadow">
            <span className="text-[#004B9B] font-bold text-lg mb-1">
              Gas Safe Registered
            </span>
            <p className="text-xs text-gray-500">
              Fully qualified and legally certified engineers
            </p>
          </div>

          {/* Badge 2: Worcester Bosch */}
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 text-center flex flex-col items-center justify-center shadow-sm hover:shadow transition-shadow">
            <span className="text-[#E51F20] font-bold text-lg mb-1">
              Worcester Bosch Accredited
            </span>
            <p className="text-xs text-gray-500">
              Offering exclusive extended guarantees up to 12 years
            </p>
          </div>

          {/* Badge 3: Which? Trusted Trader */}
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 text-center flex flex-col items-center justify-center shadow-sm hover:shadow transition-shadow">
            <span className="text-[#004B9B] font-bold text-lg mb-1">
              Which? Trusted Trader
            </span>
            <p className="text-xs text-gray-500">
              Independently endorsed for exceptional customer service
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
