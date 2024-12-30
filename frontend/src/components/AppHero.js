import React from 'react';
import { motion } from 'framer-motion';
import { FaMobileAlt, FaCode, FaRocket } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './ServiceHero.css';

const floatingAnimation = {
  initial: { y: 0 },
  animate: {
    y: [-20, 0, -20],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

const ServiceHero = () => {
  const navigate = useNavigate(); // Declare navigate for routing

  const handleButtonClick = () => {
    // Scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scrolling animation
    });
    // Navigate to the "/Getstarted" page
    navigate('/Getstarted');
  };

  return (
    <div className="hero-container">
      <div className="hero-content">
        {/* Text Section */}
        <div className="hero-text">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Transform Your Ideas Into
            <span className="gradient-text"> Digital Reality</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We craft exceptional mobile experiences through innovative app
            development, bringing your vision to life with cutting-edge
            technology.
          </motion.p>

          <motion.button
            className="cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            onClick={handleButtonClick}
          >
            Start Your Project
          </motion.button>
        </div>

        {/* Floating Elements */}
        <div className="floating-elements">
          <motion.div
            className="app-showcase"
            variants={floatingAnimation}
            initial="initial"
            animate="animate"
          >
            <div className="phone-frame">
              <div className="phone-screen">
                <motion.div className="floating-icon icon1">
                  <FaMobileAlt />
                </motion.div>
                <motion.div className="floating-icon icon2">
                  <FaCode />
                </motion.div>
                <motion.div className="floating-icon icon3">
                  <FaRocket />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Section */}
      <div className="hero-background">
        <div className="gradient-blob"></div>
        <div className="gradient-blob-2"></div>
      </div>
    </div>
  );
};

export default ServiceHero;
