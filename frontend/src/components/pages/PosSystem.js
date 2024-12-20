import React from 'react';
import '../../styles/pages/Services.css';
import SatisfiedClients from '../SatisfiedClients'
import Footer from '../Footer'
import Team from '../Team'
import Contact from '../ContactUs'
import '../../styles/pages/Services.css';
import Poshero from '../Pos/Poshero';
import Poscontent from '../Pos/Poscontent';
import Header from '../Header';

function PosSystem() {
  return (
    <div className="service-page">
      <Header/>
      <Poshero/>
      <Poscontent/>
      <SatisfiedClients/>
      <Contact/>
      <Team/>
      <Footer/>
    </div>
  );
}

export default PosSystem;