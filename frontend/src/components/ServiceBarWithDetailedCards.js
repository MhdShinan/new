import React, { useState } from "react";
const ServiceBarWithDetailedCards = () => {
  const [activeTab, setActiveTab] = useState(null);

  const handleTabClick = (tab) => {
    setActiveTab(activeTab === tab ? null : tab); // Toggle active tab
  };

  const services = [
    {
      name: "Web Development",
      dropdown: [
        {
          title: "Single Page Website",
          advantages: ["1 Year Free Hosting", "Quick Setup", "Responsive Design"],
          price: "Starting from Rs 25,000",
          image: "https://via.placeholder.com/150?text=Web+Dev+1",
        },
        {
          title: "Ecommerce Starter",
          advantages: [
            "1 Year Free Hosting",
            "Admin Panel Dashboard",
            "Secure Payment Integration",
          ],
          price: "Starting from Rs 100,000",
          image: "https://via.placeholder.com/150?text=Ecommerce+Starter",
        },
      ],
    },
    {
      name: "App Development",
      dropdown: [
        {
          title: "Custom Mobile Apps",
          advantages: ["Cross-Platform Support", "User-Friendly Interface", "Secure Backend"],
          price: "Contact us for pricing",
          image: "https://via.placeholder.com/150?text=App+Dev",
        },
      ],
    },
    {
      name: "POS Solution",
      dropdown: [
        {
          title: "POS System",
          advantages: ["Inventory Management", "Sales Tracking", "Custom Reports"],
          price: "Starting from Rs 120,000",
          image: "https://via.placeholder.com/150?text=POS+Solution",
        },
      ],
    },
    {
      name: "Network",
      dropdown: [
        {
          title: "Network Setup",
          advantages: ["Enterprise Solutions", "Secure Networking", "Custom Configurations"],
          price: "Contact us for pricing",
          image: "https://via.placeholder.com/150?text=Network",
        },
      ],
    },
    {
      name: "CCTV",
      dropdown: [
        {
          title: "2MP 4 Cameras Set",
          advantages: ["Basic Installation", "Clear Video Quality", "Affordable Pricing"],
          price: "Rs 65,000 with installation",
          image: "https://via.placeholder.com/150?text=CCTV+Basic",
        },
        {
          title: "2MP 4 IP Cameras Set",
          advantages: ["High-Resolution Quality", "Remote Monitoring", "Advanced Setup"],
          price: "Starting from Rs 150,000 with installation",
          image: "https://via.placeholder.com/150?text=CCTV+IP",
        },
      ],
    },
  ];

  return (
    <div className="bg-primary py-8">
      <div className="container mx-auto px-6">
        {/* Status Bar */}
        <div className="flex justify-center space-x-8 mb-10">
          {services.map((service, index) => (
            <div
              key={index}
              className={`cursor-pointer text-lg font-medium rounded-full py-2 px-4 transition-all duration-300 ${
                activeTab === service.name
                  ? "bg-gradient-to-r from-yellow-500 to-orange-600 text-black shadow-lg"
                  : "text-white hover:bg-gray-700"
              }`}
              onClick={() => handleTabClick(service.name)}
            >
              {service.name}
            </div>
          ))}
        </div>

        {/* Content Display for Active Tab using Flexbox */}
        <div className="mt-8 flex flex-col items-center gap-8">
          {activeTab &&
            services
              .filter((service) => service.name === activeTab)
              .map((service) => (
                <div key={service.name}>
                  {service.dropdown.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-white p-6 rounded-lg shadow-xl transition-all duration-300 transform hover:scale-105 w-full sm:w-72 md:w-80"
                    >
                      <div className="flex flex-col items-center">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-24 h-24 object-cover rounded-full mb-4"
                        />
                        <h3 className="text-xl font-semibold text-center text-gray-800">
                          {item.title}
                        </h3>
                        <ul className="text-sm text-gray-600 list-disc list-inside mb-3">
                          {item.advantages.map((adv, i) => (
                            <li key={i}>{adv}</li>
                          ))}
                        </ul>
                        <p className="text-lg font-bold text-center text-gray-800">{item.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceBarWithDetailedCards;