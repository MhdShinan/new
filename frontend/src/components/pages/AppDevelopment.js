import React from 'react';
import '../../styles/pages/Services.css';
import SatisfiedClients from '../SatisfiedClients'
import Team from '../Team'
import Contact from '../ContactUs'
import FAQ from '../FAQ';
import AppHero from '../AppHero';
import AppFaq from '../AppFaq';


function AppDevelopment() {
  return (
    <div className="service-page">
     <AppHero/>
     <AppFaq/>
      <SatisfiedClients/>
      <FAQ/>
      <Contact/>
      <Team/>
    </div>
  );
}

export default AppDevelopment;