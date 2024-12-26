import React, { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';
import '../styles/SatisfiedClients.css';
import { backEndURL } from "../Backendurl";
import { imageURL } from "../Backendurl";

function SatisfiedClients() {
  const [sectionOneClients, setSectionOneClients] = useState([]);
  // const [sectionTwoClients, setSectionTwoClients] = useState([]);

  useEffect(() => {
    fetch(`${backEndURL}/api/satisfiedclients/1`)
      .then((response) => response.json())
      .then((data) => setSectionOneClients(data))
      .catch((error) => console.error('Error fetching Section 1 clients:', error));
  }, []);
  
  // useEffect(() => {
  //   fetch(`${backEndURL}/api/satisfiedclients/2`)
  //     .then((response) => response.json())
  //     .then((data) => setSectionTwoClients(data))
  //     .catch((error) => console.error('Error fetching Section 2 clients:', error));
  // }, []);

  return (
    <section className="bg-primary py-16 px-8 lg:px-24">
      <h2 className="text-center text-2xl font-bold text-white mb-12">
        Our Satisfied Clients
      </h2>
      <Marquee gradient={false} speed={20} direction="right" className="mb-8">
  {sectionOneClients.map((client, index) => (
    <img
      key={index}
      src={`${imageURL}${client.image}`}  // Using the env variable for the URL
      alt={client.name}
      className="logo-image mx-4"
      style={{ width: '100px', height: '100px' }}
    />
  ))}
</Marquee>

      {/* <Marquee gradient={false} speed={20} direction="left">
        {sectionTwoClients.map((client, index) => (
          <img
            key={index}
            src={`${imageURL}${client.image}`} 
            alt={client.name}
            className="logo-image mx-4"
            style={{ width: '100px', height: '100px' }}
          />
        ))}
      </Marquee> */}
    </section>
  );
}

export default SatisfiedClients;
