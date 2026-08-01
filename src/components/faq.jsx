import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What areas do you cover across Leicester?",
      answer:
        "We cover all of Leicester and the surrounding Leicestershire areas, including Glenfield, Oadby, Wigston, Birstall, and Thurmaston.",
    },
    {
      question: "How long is the warranty on new boiler installations?",
      answer:
        "As Worcester Bosch Accredited Installers, we can offer exclusive extended guarantees of up to 12 years on selected new boiler installations.",
    },
    {
      question: "Do I need an appointment to visit your Glenfield showroom?",
      answer:
        "No appointment is strictly necessary, but feel free to call us ahead of time if you would like to speak directly with a heating specialist about specific boiler or bathroom displays.",
    },
    {
      question: "Do you offer emergency plumbing and heating repairs?",
      answer:
        "Yes, our local team is on hand to handle urgent boiler breakdowns and plumbing repairs. Give us a call immediately for our current availability.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A1A1A] tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Got questions about our services, boilers, or showroom? Find
            straightforward answers below.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-200 rounded-xl overflow-hidden transition-colors"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left font-bold text-[#1A1A1A] flex items-center justify-between focus:outline-none"
              >
                <span>{faq.question}</span>
                <span className="text-[#E51F20] font-bold text-xl ml-4">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-3">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
