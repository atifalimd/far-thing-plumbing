export default function ShowroomFinanceBanner() {
  return (
    <section id="showroom" className="py-16 bg-[#004B9B] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/10 border border-white/20 rounded-3xl p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 backdrop-blur-sm">
          <div className="space-y-4 max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Visit Our Leicester Showroom or Spread the Cost
            </h2>
            <p className="text-blue-100 text-lg leading-relaxed">
              Explore live heating displays at our Glenfield showroom or ask
              about our flexible payment plans designed to spread the cost
              comfortably.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
            <a
              href="tel:01162321031"
              className="bg-[#E51F20] hover:bg-red-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-colors text-center"
            >
              Plan Your Visit
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
