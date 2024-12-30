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
  padding: 3rem;

  @media (max-width: 1024px) {
    padding: 2rem;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const GlassMorphism = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2rem;
  max-width: 1500px;
  width: 90%;
  z-index: 10;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);

  @media (max-width: 768px) {
    padding: 1.5rem;
    width: 95%;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const Title = styled(motion.h1)`
  font-size: 3.5rem;
  color: white;
  margin-bottom: 1rem;
  text-align: center; /* Centered title */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: 1024px) {
    font-size: 3rem;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const Description = styled(motion.p)`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 2rem;
  text-align: center; /* Centered description */

  @media (max-width: 1024px) {
    font-size: 1.1rem;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
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

  @media (max-width: 480px) {
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
  }
`;

const FloatingIcon = styled(motion.div)`
  position: absolute;
  font-size: 3rem;
  color: rgba(255, 255, 255, 0.2);
  z-index: 1;

  @media (max-width: 1024px) {
    font-size: 2.5rem;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
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
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); /* Responsive grid layout */
  gap: 1rem;
  margin-top: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr); /* Two items per row on tablets */
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr); /* Two items per row on mobile */
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr; /* One item per row on small screens */
  }
`;

const FeatureItem = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  border-radius: 10px;
  text-align: center;
  transition: all 0.3s ease;
  width: 100%; /* Ensuring full width on mobile devices */

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
    { icon: FaSatelliteDish, title: "Remote Access", description: "Secure remote access solutions for your team" },
  ];

  const floatingIcons = [FaNetworkWired, FaWifi, FaServer, FaLock, FaCloudUploadAlt, FaSatelliteDish];

  return (
    <HeroSection>
      <NetworkLines initial={{ opacity: 0 }} animate={{ opacity: 0.1 }} transition={{ duration: 2 }}>
        <line x1="0" y1="0" x2="100%" y2="100%" stroke="white" strokeWidth="0.5" />
        <line x1="100%" y1="0" x2="0" y2="100%" stroke="white" strokeWidth="0.5" />
        <line x1="50%" y1="0" x2="50%" y2="100%" stroke="white" strokeWidth="0.5" />
        <line x1="0" y1="50%" x2="100%" y2="50%" stroke="white" strokeWidth="0.5" />
      </NetworkLines>

      {floatingIcons.map((Icon, index) => (
        <FloatingIcon key={index} custom={index} variants={iconVariants} animate="animate" style={{ top: `${(index / floatingIcons.length) * 80 + 10}%`, left: `${((index + 0.5) / floatingIcons.length) * 80 + 10}%` }}>
          <Icon />
        </FloatingIcon>
      ))}

      <GlassMorphism initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <Title initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }}>
          Future Of Networking Solutions
        </Title>
        <Description initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8 }}>
          Empower your business with cutting-edge networking solutions. We design, implement, and maintain robust network infrastructures that drive efficiency and growth.
        </Description>
        {/* <Button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onHoverStart={() => setIsHovered(true)} onHoverEnd={() => setIsHovered(false)}>
          Explore Our Services
          <AnimatePresence>
            {isHovered && (
              <motion.span initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 10 }} transition={{ duration: 0.2 }}>
                <FaArrowRight />
              </motion.span>
            )}
          </AnimatePresence>
        </Button> */}
        <FeatureGrid initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          {features.map((feature, index) => (
            <FeatureItem key={index}>
              <FeatureIcon>
                <feature.icon />
              </FeatureIcon>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
            </FeatureItem>
          ))}
        </FeatureGrid>
      </GlassMorphism>
      <ParticleContainer ref={particleContainerRef}></ParticleContainer>
    </HeroSection>
  );
};

export default AdvancedNetworkingHero;
