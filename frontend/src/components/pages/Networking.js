import React from 'react';
import NetHero from '../NetHero';
import SatisfiedClients from '../SatisfiedClients';
import FAQ from '../FAQ';
import ContactUs from '../ContactUs';
import Team from '../Team';

function Networking() {
  const data = [
    {
      brand: "Cisco",
      imageUrl: "https://via.placeholder.com/300x200?text=Cisco", // Replace with actual Cisco image URL
      features: [
        {
          title: "Switches",
          description:
            "Cisco switches are designed for performance and reliability, supporting scalable networks for enterprises and SMBs.",
        },
        {
          title: "Manageable Switches",
          description:
            "Cisco manageable switches enable superior control over network traffic with advanced configurations.",
        },
        {
          title: "Cat 6 Wiring",
          description:
            "Cisco Cat 6 wiring ensures high-speed data transmission with minimal crosstalk and interference.",
        },
        {
          title: "Load Balancers",
          description:
            "Cisco load balancers provide efficient traffic distribution across servers, enhancing application availability.",
        },
      ],
    },
    {
      brand: "Ruijie",
      imageUrl: "https://via.placeholder.com/300x200?text=Ruijie", // Replace with actual Ruijie image URL
      features: [
        {
          title: "Switches",
          description:
            "Ruijie switches deliver cost-effective network solutions with reliable performance for SMBs.",
        },
        {
          title: "Manageable Switches",
          description:
            "Ruijie manageable switches provide businesses with essential management capabilities for network customization.",
        },
        {
          title: "Cat 6 Wiring",
          description:
            "Ruijie Cat 6 cables support high-speed and stable network connections, minimizing signal loss and interference.",
        },
        {
          title: "Load Balancers",
          description:
            "Ruijie load balancers efficiently manage traffic for enhanced network performance.",
        },
      ],
    },
    {
      brand: "Netgear",
      imageUrl: "https://via.placeholder.com/300x200?text=Netgear", // Replace with actual Netgear image URL
      features: [
        {
          title: "Switches",
          description:
            "Netgear switches are known for their reliability and plug-and-play simplicity.",
        },
        {
          title: "Manageable Switches",
          description:
            "Netgear manageable switches offer advanced features like remote management and VLAN configuration.",
        },
        {
          title: "Cat 6 Wiring",
          description:
            "Netgear Cat 6 cables deliver high-quality network performance with excellent shielding against interference.",
        },
        {
          title: "Load Balancers",
          description:
            "Netgear load balancers provide effective traffic distribution for enhanced application performance.",
        },
      ],
    },
  ];

  return (
    <div className="service-page bg-gray-50 p-8">
          <div className="service-page">
      <NetHero /> 
      <h1 className="text-center text-4xl font-bold text-primary mb-10">
        Networking Solutions
      </h1>
      {data.map((brand, index) => (
        <div key={index} className="brand-section mb-16">
          <h2 className="text-3xl font-semibold text-primary text-center mb-6">{brand.brand}</h2>
          <div className="brand-image mb-6 text-center">
            <img
              src={brand.imageUrl}
              alt={brand.brand}
              className="inline-block w-full max-w-[300px] h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="features grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {brand.features.map((feature, idx) => (
              <div
                key={idx}
                className="feature-card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold text-primary mb-4 text-center">{feature.title}</h3>
                <p className="text-gray-700 text-center">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
    <SatisfiedClients/>
    <FAQ/>
    <Team/>
    <ContactUs/>
    </div>
  );
}

export default Networking;
