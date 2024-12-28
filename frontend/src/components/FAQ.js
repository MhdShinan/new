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
      {
        question: "How long does it take to develop an app?",
        answer:
          "The time to develop an app depends on the complexity of the project, but it generally takes between 2-6 months.",
      },
      {
        question: "Do you provide post-launch support for apps?",
        answer:
          "Yes, we offer post-launch support for bug fixes, updates, and any additional features you may require.",
      },
      {
        question: "Can you help me publish my app on the App Store or Google Play?",
        answer:
          "Yes, we assist with publishing your app on the App Store and Google Play, including account setup and submission.",
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
      {
        question: "Can you help with responsive web design?",
        answer:
          "Yes, we ensure that websites are responsive and work seamlessly on devices of all sizes, from mobile to desktop.",
      },
      {
        question: "Do you offer e-commerce website development?",
        answer:
          "Yes, we provide e-commerce solutions including shopping cart integration, payment gateways, and product management.",
      },
      {
        question: "What is your process for website maintenance?",
        answer:
          "We offer website maintenance packages that include regular updates, backups, security patches, and performance optimization.",
      },
    ],
    pos: [
      {
        question: "What features are included in your POS systems?",
        answer:
          "Our POS systems include inventory management, billing, sales reports, and integration with printers and scanners.",
      },
      {
        question: "Can I access my POS system remotely?",
        answer:
          "Yes, we offer cloud-based POS systems that can be accessed remotely from any device with an internet connection.",
      },
      {
        question: "Do you provide POS system training?",
        answer:
          "Yes, we offer training for your team to ensure smooth adoption and usage of the POS system.",
      },
      {
        question: "Can your POS systems integrate with accounting software?",
        answer:
          "Yes, our POS systems can integrate with popular accounting software like QuickBooks and Xero.",
      },
      {
        question: "What hardware do I need for your POS system?",
        answer:
          "Our POS system is compatible with a variety of hardware, including tablets, barcode scanners, receipt printers, and cash drawers.",
      },
    ],
    cctv: [
      {
        question: "What types of CCTV cameras do you provide?",
        answer:
          "We provide IP cameras, analog cameras, PTZ cameras, and night vision cameras tailored to your security needs.",
      },
      {
        question: "Can I access the CCTV footage remotely?",
        answer:
          "Yes, our CCTV systems allow remote access via mobile apps or web portals, so you can monitor live footage anytime, anywhere.",
      },
      {
        question: "Do you offer cloud storage for CCTV footage?",
        answer:
          "Yes, we offer cloud storage options for CCTV footage, ensuring secure and easy access to recordings.",
      },
      {
        question: "Can I integrate your CCTV system with my alarm system?",
        answer:
          "Yes, we offer integrations with alarm systems for more comprehensive security solutions.",
      },
      {
        question: "What is the warranty for your CCTV cameras?",
        answer:
          "Our CCTV cameras come with a 2-year warranty, which covers both parts and labor.",
      },
    ],
    network: [
      {
        question: "What types of network solutions do you offer?",
        answer:
          "We offer LAN, WAN, VPN setup, and network security solutions tailored to your requirements.",
      },
      {
        question: "Can you help with network troubleshooting?",
        answer:
          "Yes, we provide network troubleshooting services to diagnose and resolve any issues with your network infrastructure.",
      },
      {
        question: "Do you offer network monitoring services?",
        answer:
          "Yes, we provide round-the-clock network monitoring to ensure optimal performance and security.",
      },
      {
        question: "What are the security measures you provide for networks?",
        answer:
          "We offer firewall setup, intrusion detection systems, VPNs, and other security solutions to protect your network.",
      },
      {
        question: "Can you help with setting up a secure Wi-Fi network?",
        answer:
          "Yes, we specialize in setting up secure Wi-Fi networks for businesses, including WPA2 encryption and guest network options.",
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
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 bg-white rounded-lg shadow-md p-2">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`text-base sm:text-lg md:text-xl lg:text-2xl px-4 py-2 font-medium rounded-lg transition duration-300 ${
                  activeCategory === category.id
                    ? "text-blue-600 bg-blue-100"
                    : "text-gray-700 hover:text-blue-500 hover:bg-blue-50"
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
                className="flex justify-between items-center w-full px-6 py-4 text-base sm:text-lg md:text-xl font-medium text-left text-gray-800 focus:outline-none"
              >
                <span className="text-sm sm:text-base md:text-lg">{faq.question}</span>
                <span>{activeFAQ === index ? "▲" : "▼"}</span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeFAQ === index ? "max-h-screen py-4 px-6" : "max-h-0"
                }`}
              >
                <p className="text-gray-600 text-sm sm:text-base md:text-lg">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdvancedFAQ;
