// components/GoogleReviews.jsx
import React, { useState } from "react";

export default function GoogleReviews() {
  const reviews = [
    {
      name: "Jonatha Smith",
      role: "Product Manager",
      rating: 5,
      text: "We had a plumbing emergency late at night, and Repairy came to the rescue! Their team arrived quickly, assessed the problem, and fixed everything in no time. They were professional, courteous, and their pricing was transparent with no hidden fees. It's hard to find service providers you can trust, but Repairy exceeded all our expectations.",
    },
    {
      name: "Marvin McKinney",
      role: "Project Manager",
      rating: 5,
      text: "Outstanding service from start to finish. Replaced our old boiler swiftly and cleanly. Highly recommend their local team!",
    },
    {
      name: "Eleanor Pena",
      role: "Marketing Director",
      rating: 5,
      text: "Very reliable and polite engineers. Came out to fix a leaking pipe on short notice and left everything spotless.",
    },
    {
      name: "Brooklyn Simon",
      role: "Interior",
      rating: 5,
      text: "Fantastic showroom advice and amazing installation quality. Couldn't be happier with our new bathroom.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const avatarIds = [
    "photo-1534528741775-53994a69daeb",
    "photo-1507003211169-0a1dd7228f2d",
    "photo-1500648767791-00dcc994a43e",
    "photo-1494790108377-be9c29b29330",
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="flex items-center justify-center gap-2 mb-2">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A1A1A] tracking-tight">
              What Our <span className="text-[#E51F20]">Customer Says</span>{" "}
              About Us
            </h2>
          </div>
          <p className="text-gray-600 text-sm sm:text-base">
            Many of our customers highlight how we go above and beyond to solve
            their plumbing issues, whether it's a small repair or a major
            installation. Their trust and positive feedback are a gift for us.
          </p>
        </div>

        {/* "More Reviews" top-right button styling matching screenshot */}
        <div className="flex justify-end max-w-4xl mx-auto mb-4">
          <a
            href="#contact"
            className="bg-[#E51F20] hover:bg-red-700 text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors shadow-sm"
          >
            More Reviews
          </a>
        </div>

        {/* 4 Reviewer Cards Grid (Matching the exact screenshot layout) */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {reviews.map((rev, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                activeIndex === index
                  ? "bg-white border-[#E51F20] shadow-md ring-2 ring-[#E51F20]/20"
                  : "bg-white border-gray-200 hover:border-gray-300"
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden flex-shrink-0">
                  <img
                    src={`https://images.unsplash.com/${avatarIds[index]}?auto=format&fit=crop&w=150&q=80`}
                    alt={rev.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-xs text-[#1A1A1A] line-clamp-1">
                    {rev.name}
                  </h4>
                  <p className="text-[10px] text-gray-500 line-clamp-1">
                    {rev.role}
                  </p>
                </div>
              </div>
              <div className="text-amber-500 flex gap-0.5 text-xs">
                {"★".repeat(rev.rating)}
              </div>
            </button>
          ))}
        </div>

        {/* Active Testimonial Expanded Display Box with Diagonal Pattern Bottom Right */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl border border-gray-100 p-8 sm:p-10 relative overflow-hidden">
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-8 relative z-10">
            "{reviews[activeIndex].text}"
          </p>

          <div className="flex items-center gap-4 relative z-10">
            <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-gray-200">
              <img
                src={`https://images.unsplash.com/${avatarIds[activeIndex]}?auto=format&fit=crop&w=150&q=80`}
                alt={reviews[activeIndex].name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h4 className="font-bold text-[#1A1A1A] text-base">
                {reviews[activeIndex].name}
              </h4>
              <p className="text-xs text-gray-500">
                {reviews[activeIndex].role}
              </p>
              <div className="text-amber-500 flex gap-0.5 text-xs mt-1">
                {"★".repeat(reviews[activeIndex].rating)}
              </div>
            </div>
          </div>

          {/* Bottom Right Diagonal Colored Stripes matching your design */}
          <div className="absolute bottom-0 right-0 flex items-end">
            <div className="w-32 h-6 bg-[#E51F20] transform skew-x-[-30deg] origin-bottom-right translate-x-4"></div>
            <div className="w-48 h-6 bg-[#004B9B] transform skew-x-[-30deg] origin-bottom-right translate-x-8"></div>
          </div>
        </div>

        {/* Carousel Dots indicator */}
        <div className="flex justify-center items-center gap-2 mt-6">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                activeIndex === index ? "bg-[#E51F20] w-6" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
