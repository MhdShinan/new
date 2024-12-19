import React, { useState } from "react";
import '../styles/Getstarted.css';
import Footer from "./Footer";
import Team from "./Team";

const Getstarted = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [selectedPlatform, setSelectedPlatform] = useState(null);
  const [selectedQuantity, setSelectedQuantity] = useState(null);

  const services = [
      { id: 'app', label: 'App develop' },
      { id: 'web', label: 'Web develop' },
      { id: 'pos', label: 'POS Solution' },
      { id: 'cctv', label: 'Cctv installation' },
      { id: 'network', label: 'Network' }
  ];

  const platformOptions = {
      'app': ['IOS', 'ANDROID', 'BOTH/CROSS'],
      'web': ['PORTFOLIO', 'E-COMMERCE', 'OFFICE'],
      'pos': ['GROCERY', 'SUPERMARKET', 'RESTAURANT'],
      'cctv': ['INDOOR', 'OUTDOOR'],
      'network': ['INDOOR', 'OUTDOOR']
  };

  const handleServiceClick = (serviceId) => {
      setSelectedService(serviceId);
      setSelectedPlatform(null);
      setSelectedQuantity(null);
  };

  const handlePlatformClick = (platform) => {
      setSelectedPlatform(platform);
  };

  const handleQuantityChange = (e) => {
      setSelectedQuantity(e.target.value);
  };


  return (
    <div className="service-page bg-[#005880] font-[Inter]" >
            <main className="main-container">
                <div className="bg-white rounded-[30px] p-8 shadow-lg">
                    <h1 className="welcome-text" id="welcomeText" >Welcome to R-tech Solution</h1>
                    
                    <div className="text-xl font-medium text-[#005880] mb-6">
                        My requirement is:-
                    </div>

                    <div className="flex flex-wrap gap-4 mb-8">
                        {services.map((service) => (
                            <button
                                key={service.id}
                                className={`service-button ${selectedService === service.id ? "active" : ""}`}
                                onClick={() => handleServiceClick(service.id)}
                            >
                                {service.label}
                            </button>
                        ))}
                    </div>

                    {selectedService && (
                        <div id="platformSection" className="animate-fade-in">
                            <div className="text-xl font-medium text-[#005880] mb-4">Platform</div>
                            <div className="flex flex-wrap gap-4 mb-6">
                                {platformOptions[selectedService].map((platform) => (
                                    <button
                                        key={platform}
                                        className={`platform-button ${selectedPlatform === platform ? "active" : ""}`}
                                        onClick={() => handlePlatformClick(platform)}
                                    >
                                        {platform}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {(selectedService && selectedPlatform) && (
                        <div id="contactForm" className="animate-slide-up">
                            <form className="space-y-6 mt-8">
                                <div id="quantitySelect" className="mb-6">
                                    <label className="block text-lg font-medium text-[#005880] mb-4">
                                        How Many
                                    </label>
                                    <select
                                        className="form-select"
                                        onChange={handleQuantityChange}
                                        value={selectedQuantity}
                                    >
                                        <option value="">Select quantity range</option>
                                        <option value="1-4">1-4</option>
                                        <option value="5-8">5-8</option>
                                        <option value="9-16">9-16</option>
                                        <option value="16-24">16-24</option>
                                        <option value="24-32">24-32</option>
                                        <option value="32-64">32-64</option>
                                        <option value="64-128">64-128</option>
                                    </select>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <input type="text" placeholder="Name" className="form-input" required />
                                    <input type="tel" placeholder="Contact No" className="form-input" required />
                                </div>

                                <input type="email" placeholder="E-mail" className="form-input" required />
                                <textarea placeholder="Message" className="form-textarea" required></textarea>

                                <div className="flex justify-end space-x-4 mt-6">
                                    <button type="button" className="clear-button">Clear</button>
                                    <button type="submit" className="submit-button">Send Message</button>
                                </div>
                            </form>
                        </div>
                    )}
                </div>
            </main>
            <Team/>
<Footer/>
    </div>
  )
}

export default Getstarted
