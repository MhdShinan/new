import React from "react";
import Marquee from "react-fast-marquee";
import "../styles/SatisfiedClients.css";
import St1 from "../assets/images/St1.jpeg";
import St10 from "../assets/images/St10-1.png";
import St2 from "../assets/images/St2.jpeg";
import St3 from "../assets/images/St3.png";
import St4 from "../assets/images/St4.jpg";
import St6 from "../assets/images/St6.jpg";
import St9 from "../assets/images/St9.png";
import ClientX from "../assets/images/St5.png";
import ClientY from "../assets/images/St7.png";
import ClientZ from "../assets/images/St8.png";

function SatisfiedClients() {
  const sectionOneClients = [
    { name: "EcoLankan Tours", image: St1 },
    { name: "Adspire DIGITAL", image: St10 },
    { name: "SoapstoRis", image: St2 },
    { name: "ELINE Technologies", image: St3 },
    { name: "Heartland Trading", image: St4 },
    { name: "Ride With Me", image: St6 },
    { name: "Pasyale Wedamedura", image: St9 },
    { name: "SoapstoRis", image: St2 },
  ];

  const sectionTwoClients = [
    { name: "Champika Export", image: ClientX },
    { name: "Twilight Blue Security Systems", image: ClientY },
    { name: "X-guard", image: ClientZ },
  ];

  const renderClients = (clients) =>
    clients.map((client, index) => (
      <div key={index} className="client-item">
        <img
          src={client.image}
          alt={client.name}
          className="client-image"
        />
        <div className="overlay">
          <span className="company-name">{client.name}</span>
        </div>
      </div>
    ));

  return (
    <section className="bg-primary py-16 px-8 lg:px-24">
      <h2 className="text-center text-2xl font-bold text-white mb-12">
        Our Satisfied Clients
      </h2>
      <Marquee gradient={false} speed={20} direction="right" className="mb-8">
        {renderClients(sectionOneClients)}
      </Marquee>
      <Marquee gradient={false} speed={20} direction="left">
        {renderClients(sectionTwoClients)}
      </Marquee>
    </section>
  );
}

export default SatisfiedClients;
