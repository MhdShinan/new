import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Stats from './components/Stats';
import AppDevelopment from './components/pages/AppDevelopment';
import WebDevelopment from './components/pages/WebDevelopment';
import PosSystem from './components/pages/PosSystem';
import CctvInstallation from './components/pages/CctvInstallation';
import Networking from './components/pages/Networking';
import './styles/App.css';
import Testimonials from './components/Testimonials';
import SatisfiedClients from './components/SatisfiedClients'
import FAQ from './components/FAQ';
import ContactUs from './components/ContactUs';
import Team from './components/Team';
import Footer from './components/Footer';
import Getstarted from './components/Getstarted';
import OurProcess from './components/OurProcess';
import TechnologyWeUse from './components/TechnologyWeUse';
import ServiceBarWithDetailedCards from './components/ServiceBarWithDetailedCards';
import Pricing from './components/Pricing';
import Portfolio from './components/Portfolio';


function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Services />
              <Stats/>
              <OurProcess />
              <Testimonials />
              <TechnologyWeUse />
              <SatisfiedClients/>
              <FAQ/>
              <ContactUs/>
              <Team/>
              <Footer/>  
              <ServiceBarWithDetailedCards />            
            </>
          } />
          
          <Route path="/services/app-development" element={<AppDevelopment />} />
          <Route path="/services/web-development" element={<WebDevelopment />} />
          <Route path="/services/pos-system" element={<PosSystem />} />
          <Route path="/services/cctv-installation" element={<CctvInstallation />} />
          <Route path="/services/networking" element={<Networking />} />
          <Route path="/services/getstarted" element={<Getstarted/>}/>
          <Route path="/pricing" element={<Pricing/>}/>
          <Route path="/Portfolio" element={<Portfolio/>}/>
          <Route path='/ServiceBarWithDetailedCards' element={<ServiceBarWithDetailedCards/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;