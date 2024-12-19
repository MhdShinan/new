import React from 'react';
import '../../styles/pages/Services.css';
import SatisfiedClients from '../SatisfiedClients'
import Footer from '../Footer'
import Team from '../Team'
import Contact from '../ContactUs'
import FAQ from '../FAQ';
import AppHero from '../AppHero';
import Appcontent from '../Appcontent';
import AppFaq from '../AppFaq';
function AppDevelopment() {
  return (
    <div className="service-page">
     <AppHero/>
     <Appcontent/>
     <AppFaq/>
      <SatisfiedClients/>
      <FAQ/>
      <Contact/>
      <Team/>
      <Footer/>
    </div>
  );
}

export default AppDevelopment;