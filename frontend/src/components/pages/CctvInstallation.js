import React from 'react';
import '../../styles/pages/Services.css';
import CctvHero from '../CctvHero';
import SatisfiedClients from '../SatisfiedClients'
import CCTV from '../CCTV';
import Contact from '../ContactUs'
import FAQ from '../FAQ';
import Products from '../Products';
function CctvInstallation() {
  return (

    <div className="service-page">

        <CctvHero />
        <CCTV />
        <Products />
        <SatisfiedClients />
        <FAQ />

        <Contact />
    </div>
  );
}

export default CctvInstallation;