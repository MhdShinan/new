import React, { useState } from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

// Import images
import App from "../assets/images/app-dev.png";
import Web from "../assets/images/web-dev.png";
import Pos from "../assets/images/pos.png";
import Background1 from "../assets/images/B1.png";
import Background2 from "../assets/images/B2.png";

const Hero = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    { title: "Mobile Development", image: App },
    { title: "Web Development", image: Web },
    { title: "POS Solutions", image: Pos },
  ];

  const handleServiceClick = (index) => {
    setSelectedService(selectedService === index ? null : index);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-r from-blue-50 to-blue-100">
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
      >
        <img
          src={Background1}
          className="absolute w-full h-full object-cover"
          alt=""
        />
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
      <div className="relative z-10 container mx-auto px-4 sm:px-4 md:px-8 lg:px-16 h-screen flex flex-col justify-center items-center lg:grid lg:grid-cols-2 lg:gap-12">
        {/* Left Side */}
        <div className="text-gray-800 space-y-6 text-center lg:text-left sm:mt-0 mt-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#005880]">
            Cutting-Edge Solutions
          </h1>
          <div
            className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#005880]"
            style={{ fontFamily: "sans-serif" }}
          >
            <Typewriter
              options={{
                strings: ["Mobile Development", "Web Development", "POS Solutions"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2 text-lg sm:text-xl md:text-2xl text-[#005880]">
            <span>in</span>
            <div className="relative">
              <span className="font-bold">Sri Lanka</span>
            </div>
          </div>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-xl mx-auto lg:mx-0">
            Enhance your online presence with our professional services, offering
            budget-friendly custom-made apps, responsive web designs, and POS
            systems designed to meet your business requirements.
          </p>
        </div>



        {/* Desktop View - Floating Images */}
        <div className="relative hidden lg:block h-[500px]">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`absolute w-48 sm:w-56 h-48 sm:h-56 rounded-2xl overflow-hidden cursor-pointer`}
              style={{
                top: `${index * 150}px`,
                right: index === 2 ? "50px" : `${50 + index * 150}px`,
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

        {/* Mobile View - Simplified Images */}
        <div className="relative flex flex-wrap justify-center gap-4 lg:hidden">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="w-32 sm:w-40 h-32 sm:h-40 rounded-2xl overflow-hidden cursor-pointer"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                y: {
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.3,
                },
              }}
            >
              <div className="relative w-full h-full group m-6">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover rounded-md transition-all duration-300 group-hover:blur-none blur-sm"

                />
                <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-0 transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
