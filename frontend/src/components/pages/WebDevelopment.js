import React from 'react';
import '../../styles/pages/Services.css';
import Webhero from '../Webhero';
import SatisfiedClients from '../SatisfiedClients'
import Footer from '../Footer'
import Team from '../Team'
import Contact from '../ContactUs'
import FAQ from '../FAQ';
import WebFAQ from '../WebFAQ';
import Webcontent from '../Webcontent';


function WebDevelopment() {
  return (
    <div className="service-page">
      <Webhero/>
      <Webcontent/>
      <WebFAQ/>
      <SatisfiedClients/>
      <FAQ/>
      <Contact/>
      <Team/>
      <Footer/>
    </div>
  );
}

export default WebDevelopment;