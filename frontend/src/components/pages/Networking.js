import React from 'react';
import NetHero from '../NetHero';
import SatisfiedClients from '../SatisfiedClients';
import FAQ from '../FAQ';
import ContactUs from '../ContactUs';
import Team from '../Team';
import Cisco from '../../assets/images/cisco1.jpg';
import Ruijie from '../../assets/images/Ruijie1.jpg';
import Netgear from '../../assets/images/Netgear.jpg';


function Networking() {
  const data = [
    {
      brand: "Cisco",
      imageUrl: Cisco, 
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
      imageUrl: Ruijie, // Replace with actual Ruijie image URL
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
      imageUrl:Netgear, // Replace with actual Netgear image URL
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
    <div className="service-page bg-gray-50 ">
      <NetHero />
      <section className="my-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={item.imageUrl}
                alt={`${item.brand} logo`}
                className="rounded-t-lg object-cover h-40 w-full"
              />
              <h3 className="text-xl font-semibold mt-4">{item.brand}</h3>
              <ul className="mt-2">
                {item.features.map((feature, idx) => (
                  <li key={idx} className="mt-2">
                    <h4 className="text-lg font-medium text-gray-700">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <SatisfiedClients />
      <FAQ />
      <Team />
      <ContactUs />
    </div>
  );
}

export default Networking;
