import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { FaCashRegister, FaChartLine, FaQrcode, FaCreditCard, FaMobileAlt, FaArrowRight, FaReceipt, FaBoxes, FaUsers, FaCog } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';  // Use useNavigate from react-router-dom v6

const HeroSection = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #005880, #003850);
  overflow: hidden;
  padding: 2rem;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 10;
  text-align: center;
  color: white;
  max-width: 800px;
`;

const Title = styled(motion.h1)`
  font-size: 4rem;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #ffffff, #91d5ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.2rem;
  margin: 0 auto 2rem;
  opacity: 0.9;
  max-width: 600px;

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
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
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

const FeatureIcon = styled(motion.div)`
  font-size: 2.5rem;
  color: #91d5ff;
  margin-bottom: 1rem;
`;

const FeatureTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const FeatureDescription = styled.p`
  font-size: 0.9rem;
  opacity: 0.8;
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const Feature = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  padding: 1.5rem;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

const FloatingParticle = styled(motion.div)`
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
`;

const FloatingIcon = styled(motion.div)`
  position: absolute;
  font-size: 2rem;
  color: rgba(255, 255, 255, 0.3);
  z-index: 1;
`;

const AttractiveHeroPOS = () => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();  // Use useNavigate for navigation in React Router v6

  const features = [
    { icon: FaCashRegister, title: "Easy Transactions", description: "Streamline your sales process with our intuitive interface" },
    { icon: FaChartLine, title: "Real-time Analytics", description: "Get instant insights into your business performance" },
    { icon: FaQrcode, title: "QR Code Payments", description: "Accept contactless payments quickly and securely" },
    { icon: FaCreditCard, title: "Multi-payment Options", description: "Support various payment methods for customer convenience" },
    { icon: FaMobileAlt, title: "Mobile POS", description: "Take your business anywhere with our mobile solution" },
  ];

  const particles = Array.from({ length: 20 }, (_, i) => ({
    x: Math.random() * 100 + "%",
    y: Math.random() * 100 + "%",
    scale: Math.random() * 0.5 + 0.5,
  }));

  const floatingIcons = [
    { Icon: FaReceipt, top: '10%', left: '10%' },
    { Icon: FaBoxes, top: '20%', right: '10%' },
    { Icon: FaUsers, bottom: '20%', left: '15%' },
    { Icon: FaCog, top: '15%', right: '20%' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate('/Getstarted'); // Navigate to /Getstarted using useNavigate
  };

  return (
    <HeroSection>
      {particles.map((particle, index) => (
        <FloatingParticle
          key={`particle-${index}`}
          style={{ left: particle.x, top: particle.y }}
          animate={{
            y: ["0%", "100%"],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {floatingIcons.map(({ Icon, top, left, right }, index) => (
        <FloatingIcon
          key={`icon-${index}`}
          style={{ top, left, right }}
          animate={{
            y: [0, -10, 0],
            rotate: [-5, 5, -5],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 5 + index,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Icon />
        </FloatingIcon>
      ))}

      <ContentWrapper>
        <Title
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Revolutionary POS Solution
        </Title>
        <Subtitle
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Transform your business with our cutting-edge Point of Sale system. Boost efficiency, track sales, and grow your revenue with ease.
        </Subtitle>
        <Button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          onClick={scrollToTop} // Scroll to top and navigate when clicked
        >
          Get Started
          <AnimatePresence>
            {isHovered && (
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.2 }}
              >
                <FaArrowRight />
              </motion.span>
            )}
          </AnimatePresence>
        </Button>

        <FeatureGrid>
          {features.map((feature, index) => (
            <Feature
              key={`feature-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
            >
              <FeatureIcon whileHover={{ scale: 1.1, rotate: 5 }}>
                <feature.icon />
              </FeatureIcon>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
            </Feature>
          ))}
        </FeatureGrid>
      </ContentWrapper>
    </HeroSection>
  );
};

export default AttractiveHeroPOS;
