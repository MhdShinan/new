import React, { useState } from "react";
import Swal from "sweetalert2";
import '../styles/Getstarted.css';
import { backEndURL } from "../Backendurl";

const Getstarted = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [selectedPlatform, setSelectedPlatform] = useState(null);
  const [selectedQuantity, setSelectedQuantity] = useState(null);
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') setName(value);
    if (name === 'contact') setContact(value);
    if (name === 'email') setEmail(value);
    if (name === 'message') setMessage(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    Swal.fire({
      title: 'Submitting...',
      text: 'Please wait while we process your request.',
      allowOutsideClick: false,
      showConfirmButton: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    const formData = {
      service: selectedService || "Not selected",
      platform: selectedPlatform || "Not selected",
      quantity: selectedQuantity || "Not selected",
      name,
      contact,
      email,
      message,
    };

    try {
      const response = await fetch(`${backEndURL}/api/getstarted`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        Swal.fire({
          title: 'Success!',
          text: 'Your message has been sent successfully.',
          icon: 'success',
          confirmButtonText: 'OK',
        });

        // Optionally reset the form here
        setName('');
        setContact('');
        setEmail('');
        setMessage('');
        setSelectedService(null);
        setSelectedPlatform(null);
        setSelectedQuantity(null);
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: 'There was an issue submitting your form. Please try again.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
    }
  };

  return (
    <div className="service-page bg-[#005880] font-[Inter]">
      <main className="main-container">
        <div className="bg-white rounded-[30px] p-8 shadow-lg">
          <h1 className="welcome-text" id="welcomeText">Welcome to R-tech Solution</h1>
          
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
              <form className="space-y-6 mt-8" onSubmit={handleSubmit}>
                {selectedService === 'cctv' && (
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
                )}
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleInputChange}
                    placeholder="Name"
                    className="form-input"
                    required
                  />
                  <input
                    type="tel"
                    name="contact"
                    value={contact}
                    onChange={handleInputChange}
                    placeholder="Contact No"
                    className="form-input"
                    required
                  />
                </div>

                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleInputChange}
                  placeholder="E-mail"
                  className="form-input"
                  required
                />
                <textarea
                  name="message"
                  value={message}
                  onChange={handleInputChange}
                  placeholder="Message"
                  className="form-textarea"
                  required
                ></textarea>

                <div className="flex justify-end space-x-4 mt-6">
                  <button type="button" className="clear-button" onClick={() => {
                    setName('');
                    setContact('');
                    setEmail('');
                    setMessage('');
                    setSelectedService(null);
                    setSelectedPlatform(null);
                    setSelectedQuantity(null);
                  }}>Clear</button>
                  <button type="submit" className="submit-button">Send Message</button>
                </div>
              </form>
            </div>
          )}
        </div>
      </main>

    </div>
  );
};

export default Getstarted;
