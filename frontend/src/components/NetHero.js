import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { FaNetworkWired, FaWifi, FaServer, FaLock, FaCloudUploadAlt, FaSatelliteDish, FaArrowRight } from 'react-icons/fa';

const HeroSection = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: linear-gradient(135deg, #005880, #003850);
  padding: 2rem;
`;

const GlassMorphism = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2rem;
  max-width: 800px;
  width: 90%;
  z-index: 10;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
`;

const Title = styled(motion.h1)`
  font-size: 3.5rem;
  color: white;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Description = styled(motion.p)`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Button = styled(motion.button)`
  background-color: #ff6b6b;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 50px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #ff8787;
    transform: translateY(-2px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  }

  svg {
    margin-left: 8px;
  }
`;

const FloatingIcon = styled(motion.div)`
  position: absolute;
  font-size: 3rem;
  color: rgba(255, 255, 255, 0.2);
  z-index: 1;
`;

const ParticleContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

const Particle = styled(motion.div)`
  position: absolute;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
`;

const FeatureGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
`;

const FeatureItem = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  border-radius: 10px;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-5px);
  }
`;

const FeatureIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 0.5rem;
  color: #ff6b6b;
`;

const FeatureTitle = styled.h3`
  font-size: 1rem;
  color: white;
  margin-bottom: 0.5rem;
`;

const FeatureDescription = styled.p`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
`;

const NetworkLines = styled(motion.svg)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
`;

const AdvancedNetworkingHero = () => {
  const particleContainerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const createParticle = () => {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      
      const size = Math.random() * 5 + 1;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      
      particle.style.animationDuration = `${Math.random() * 2 + 1}s`;
      
      particleContainerRef.current.appendChild(particle);
      
      setTimeout(() => {
        particle.remove();
      }, 3000);
    };

    const intervalId = setInterval(createParticle, 200);

    return () => clearInterval(intervalId);
  }, []);

  const iconVariants = {
    animate: (i) => ({
      y: [0, -20, 0],
      rotate: [-5, 5, -5],
      transition: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 5 + i,
      },
    }),
  };

  const features = [
    { icon: FaNetworkWired, title: "Network Infrastructure", description: "Design and implement robust network architectures" },
    { icon: FaWifi, title: "Wireless Solutions", description: "High-performance Wi-Fi for seamless connectivity" },
    { icon: FaServer, title: "Server Management", description: "Efficient server setup and maintenance" },
    { icon: FaLock, title: "Network Security", description: "Advanced security measures to protect your data" },
    { icon: FaCloudUploadAlt, title: "Cloud Integration", description: "Seamless integration with cloud services" },
    { icon: FaSatelliteDish, title: "Remote Access", description: "Secure remote access solutions for your team" },
  ];

  const floatingIcons = [FaNetworkWired, FaWifi, FaServer, FaLock, FaCloudUploadAlt, FaSatelliteDish];

  return React.createElement(
    HeroSection,
    null,
    React.createElement(
      NetworkLines,
      {
        initial: { opacity: 0 },
        animate: { opacity: 0.1 },
        transition: { duration: 2 },
      },
      React.createElement('line', { x1: "0", y1: "0", x2: "100%", y2: "100%", stroke: "white", strokeWidth: "0.5" }),
      React.createElement('line', { x1: "100%", y1: "0", x2: "0", y2: "100%", stroke: "white", strokeWidth: "0.5" }),
      React.createElement('line', { x1: "50%", y1: "0", x2: "50%", y2: "100%", stroke: "white", strokeWidth: "0.5" }),
      React.createElement('line', { x1: "0", y1: "50%", x2: "100%", y2: "50%", stroke: "white", strokeWidth: "0.5" })
    ),
    floatingIcons.map((Icon, index) =>
      React.createElement(
        FloatingIcon,
        {
          key: index,
          custom: index,
          variants: iconVariants,
          animate: "animate",
          style: {
            top: `${(index / floatingIcons.length) * 80 + 10}%`,
            left: `${((index + 0.5) / floatingIcons.length) * 80 + 10}%`,
          },
        },
        React.createElement(Icon)
      )
    ),
    React.createElement(
      GlassMorphism,
      {
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8 },
      },
      React.createElement(
        Title,
        {
          initial: { opacity: 0, y: -20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.2, duration: 0.8 },
        },
        "Future Of Networking Solutions"
      ),
      React.createElement(
        Description,
        {
          initial: { opacity: 0, y: -20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.4, duration: 0.8 },
        },
        "Empower your business with cutting-edge networking solutions. We design, implement, and maintain robust network infrastructures that drive efficiency and growth."
      ),
      React.createElement(
        Button,
        {
          whileHover: { scale: 1.05 },
          whileTap: { scale: 0.95 },
          onHoverStart: () => setIsHovered(true),
          onHoverEnd: () => setIsHovered(false),
        },
        "Explore Our Services",
        React.createElement(
          AnimatePresence,
          null,
          isHovered && React.createElement(
            motion.span,
            {
              initial: { opacity: 0, x: -10 },
              animate: { opacity: 1, x: 0 },
              exit: { opacity: 0, x: 10 },
              transition: { duration: 0.2 },
            },
            React.createElement(FaArrowRight)
          )
        )
      ),
      React.createElement(
        FeatureGrid,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.6, duration: 0.8 },
        },
        features.map((feature, index) =>
          React.createElement(
            FeatureItem,
            {
              key: index,
              whileHover: { scale: 1.05 },
              whileTap: { scale: 0.95 },
            },
            React.createElement(
              FeatureIcon,
              null,
              React.createElement(feature.icon)
            ),
            React.createElement(FeatureTitle, null, feature.title),
            React.createElement(FeatureDescription, null, feature.description)
          )
        )
      )
    ),
    React.createElement(ParticleContainer, { ref: particleContainerRef })
  );
};

export default AdvancedNetworkingHero;

