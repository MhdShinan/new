import React, { useState } from "react";
import Single from '../assets/images/single.jpg';
import Ecom from '../assets/images/ecom.png';
import Mobile from '../assets/images/mobile.jpg';
import Pos from '../assets/images/pos.jpg';
import Netgear from '../assets/images/Netgear.jpg';
import Camera1 from '../assets/images/camera1.jpg';
import Camera2 from '../assets/images/wizminds.png';


const ServiceBarWithDetailedCards = () => {
  const [activeTab, setActiveTab] = useState("Web Development");

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
          image: Single ,
        },
        {
          title: "Ecommerce Starter",
          advantages: [
            "1 Year Free Hosting",
            "Admin Panel Dashboard",
            "Secure Payment Integration",
          ],
          price: "Starting from Rs 100,000",
          image: Ecom,
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
          image: Mobile,
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
          image: Pos,
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
          image: Netgear,
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
          image: Camera1,
        },
        {
          title: "2MP 4 IP Cameras Set",
          advantages: ["High-Resolution Quality", "Remote Monitoring", "Advanced Setup"],
          price: "Starting from Rs 150,000 with installation",
          image: Camera2,
        },
      ],
    },
  ];

  return (
    <div className="bg-primary py-8">
      <div className="container mx-auto px-6">
        {/* Status Bar */}
        <div className="grid grid-cols-2 gap-4 sm:flex sm:justify-center sm:space-x-8 mb-10">
          {services.map((service, index) => (
            <div
              key={index}
              className={`cursor-pointer text-lg font-medium rounded-full py-2 px-4 transition-all duration-300 ${
                activeTab === service.name
                  ? "bg-gradient-to-r from-blue-500 to-lightblue-600 text-white shadow-lg"
                  : "text-white hover:bg-gray-700"
              }`}
              onClick={() => handleTabClick(service.name)}
            >
              {service.name}
            </div>
          ))}
        </div>

        {/* Content Display for Active Tab using Flexbox */}
        <div className="mt-8 flex flex-col items-center">
          {activeTab &&
            services
              .filter((service) => service.name === activeTab)
              .map((service) => (
                <div key={service.name} className="w-full">
                  <div className="flex flex-wrap justify-center gap-6">
                    {service.dropdown.map((item, idx) => (
                      <div
                        key={idx}
                        className="bg-white p-6 rounded-lg shadow-xl transition-all duration-300 transform hover:scale-105 w-full sm:w-72 md:w-80 flex-shrink-0"
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
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceBarWithDetailedCards;
