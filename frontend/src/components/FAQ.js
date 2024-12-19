import React, { useState } from "react";

const AdvancedFAQ = () => {
  const [activeCategory, setActiveCategory] = useState("app");
  const [activeFAQ, setActiveFAQ] = useState(null);

  const categories = [
    { id: "app", name: "App Development" },
    { id: "web", name: "Web Development" },
    { id: "pos", name: "POS Systems" },
    { id: "cctv", name: "CCTV Installation" },
    { id: "network", name: "Networking" },
  ];

  const faqData = {
    app: [
      {
        question: "What platforms do you support for app development?",
        answer:
          "We develop apps for iOS, Android, and cross-platform solutions using Flutter and React Native.",
      },
      {
        question: "Can you integrate payment gateways into apps?",
        answer:
          "Yes, we integrate payment gateways like Stripe, PayPal, and others based on client needs.",
      },
    ],
    web: [
      {
        question: "What technologies do you use for web development?",
        answer:
          "We use modern technologies like React, Angular, Node.js, and Laravel to build scalable web applications.",
      },
      {
        question: "How do you ensure website performance and SEO?",
        answer:
          "We optimize websites with clean code, caching strategies, and SEO best practices.",
      },
    ],
    pos: [
      {
        question: "What features are included in your POS systems?",
        answer:
          "Our POS systems include inventory management, billing, sales reports, and integration with printers and scanners.",
      },
    ],
    cctv: [
      {
        question: "What types of CCTV cameras do you provide?",
        answer:
          "We provide IP cameras, analog cameras, PTZ cameras, and night vision cameras tailored to your security needs.",
      },
    ],
    network: [
      {
        question: "What types of network solutions do you offer?",
        answer:
          "We offer LAN, WAN, VPN setup, and network security solutions tailored to your requirements.",
      },
    ],
  };

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Padding & White Space Above Categories */}
      <div className="pt-12 pb-6 bg-gray-50">
        {/* Flex Navigation Bar */}
        <div className="flex justify-center">
          <div className="grid grid-cols-3 gap-4 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 bg-white rounded-lg shadow-md p-2">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`text-base sm:text-lg md:text-xl px-6 py-3 font-medium rounded-lg transition duration-300 ${
                  activeCategory === category.id
                    ? "text-blue-600 bg-blue-100"
                    : "text-gray-700 hover:text-blue-500"
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto p-4 sm:p-6 lg:p-12 max-w-screen-lg">
        <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-center mb-8 text-gray-800">
          {categories.find((cat) => cat.id === activeCategory)?.name} FAQs
        </h2>
        <div className="space-y-6">
          {faqData[activeCategory]?.map((faq, index) => (
            <div
              key={index}
              className={`rounded-lg border ${
                activeFAQ === index
                  ? "border-blue-500 bg-white shadow-lg"
                  : "border-gray-300 bg-gray-50"
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full px-6 py-4 text-base sm:text-lg font-medium text-left text-gray-800 focus:outline-none"
              >
                <span>{faq.question}</span>
                <span>{activeFAQ === index ? "▲" : "▼"}</span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeFAQ === index ? "max-h-screen py-4 px-6" : "max-h-0"
                }`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdvancedFAQ;
