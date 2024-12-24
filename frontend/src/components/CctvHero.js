import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

// Import images
import App from '../assets/images/app-dev.png';
import Web from '../assets/images/web-dev.png';
import Pos from '../assets/images/pos.png';
import Background1 from '../assets/images/B1.png';
import Background2 from '../assets/images/B2.png';

const AppHero = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    { title: 'Mobile Development', image: App },
    { title: 'Web Development', image: Web },
    { title: 'POS Solutions', image: Pos },
  ];

  const handleServiceClick = (index) => {
    setSelectedService(selectedService === index ? null : index);
  };
  return (
    <div className="relative min-h-screen overflow-hidden">
    {/* Animated Background */}
    <motion.div
      className="absolute inset-0 z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1, 0] }}
      transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
    >
      <img src={Background1} className="absolute w-full h-full object-cover" alt="" />
    </motion.div>
    <motion.div
      className="absolute inset-0 z-0"
      initial={{ opacity: 1 }}
      animate={{ opacity: [1, 0, 1] }}
      transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
    >
      <img src={Background2} className="w-full h-full object-cover" alt="" />
    </motion.div>

    {/* Content Container */}
    <div className="relative z-10 container mx-auto px-4 h-screen flex items-center">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Left Side */}
        <div className="text-white space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-[#005880] flex items-center">
            <FontAwesomeIcon icon={faRocket} className="mr-3" /> Future of
          </h1>
          <div
            className="text-3xl md:text-4xl font-semibold text-[#005880]"
            style={{ fontFamily: 'sans-serif' }}
          >
            <Typewriter
              options={{
                strings: ['CCtv Installation'],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <div className="flex items-center gap-2 text-2xl md:text-3xl text-[#005880]">
            <span>in</span>
            <div className="relative">
              <span className="font-bold">Sri Lanka</span>
            </div>
          </div>
          <p className="text-lg md:text-xl text-gray-600 max-w-xl">
            Enhance your online presence with our professional services, offering
            budget-friendly custom-made apps, responsive web designs, and POS
            systems designed to meet your business requirements.
          </p>

          <motion.button
  className="bg-[#005880] text-white px-8 py-3 rounded-full font-semibold 
             transition-all duration-300 transform hover:scale-105 relative 
             overflow-hidden group"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 1.95 }}
>
  <Link to="/getstarted" className="relative z-10">
    Get Started
  </Link>
  <motion.div
    className="absolute inset-0 bg-[#004060]"
    initial={{ x: "-100%" }}
    whileHover={{ x: 0 }}
    transition={{ duration: 0.3 }}
  />
</motion.button>;

        </div>

        {/* Right Side - Floating Images */}
        <div className="relative h-[500px] hidden md:block">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`absolute w-64 h-64 rounded-2xl overflow-hidden cursor-pointer`}
              style={{
                top: `${index * 150}px`,
                right: index === 2 ? '50px' : `${50 + index * 150}px`,
                zIndex: selectedService === index ? 10 : 1,
              }}
              animate={{
                y: [0, -20, 0],
                scale: selectedService === index ? 1.1 : 1,
              }}
              transition={{
                y: {
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.3,
                },
                scale: {
                  duration: 0.3,
                },
              }}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              onClick={() => handleServiceClick(index)}
            >
              <div className="relative w-full h-full group">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover rounded-2xl transition-all duration-300 group-hover:blur-none blur-sm"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-0 transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </div>
  )
}

export default AppHero
