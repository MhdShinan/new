import React from 'react';
import NetHero from '../NetHero';
import SatisfiedClients from '../SatisfiedClients';
import FAQ from '../FAQ';
import ContactUs from '../ContactUs';
import Team from '../Team';
import NetworkingSolutions from '../NetworkingSolutions'; // Import the NetworkingSolutions component
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

    <NetworkingSolutions /> 
    <SatisfiedClients/>
    <FAQ/>
    <Team/>
    <ContactUs/>
    </div>
    </div>
  );
}

export default Networking;
