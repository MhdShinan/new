import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import {
  FaVideo,
  FaShieldAlt,
  FaMobileAlt,
  FaEye,
  FaCog,
  FaArrowRight,
  FaLock,
} from "react-icons/fa";
import { RiAlarmWarningFill } from "react-icons/ri";
import { GiCctvCamera } from "react-icons/gi";
import { useNavigate } from "react-router-dom"; // Import the navigation hook

// Styled components for the hero section
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
  font-size: 3.5rem;
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

const FloatingIcon = styled(motion.div)`
  position: absolute;
  font-size: 3rem;
  color: rgba(255, 255, 255, 0.2);
  z-index: 1;
`;

const BrandBadge = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  margin: 0.5rem;
  display: inline-block;
`;

// Main Hero Component
const CCTVInstallationHero = () => {
  const navigate = useNavigate(); // Navigation hook
  const [isHovered, setIsHovered] = useState(false);

  const features = [
    {
      icon: GiCctvCamera,
      title: "Expert Installation",
      description: "Professional setup of high-quality CCTV systems",
    },
    {
      icon: FaShieldAlt,
      title: "24/7 Surveillance",
      description: "Round-the-clock monitoring for your peace of mind",
    },
    {
      icon: FaMobileAlt,
      title: "Remote Access",
      description: "View your cameras from anywhere, anytime",
    },
    {
      icon: FaEye,
      title: "HD Quality",
      description: "Crystal clear footage with our advanced cameras",
    },
  ];

  const floatingIcons = [
    { Icon: FaVideo, top: "10%", left: "10%" },
    { Icon: RiAlarmWarningFill, top: "20%", right: "10%" },
    { Icon: FaCog, bottom: "20%", left: "15%" },
    { Icon: FaLock, top: "15%", right: "20%" },
  ];

  const brands = ["Dahua", "Hikvision", "Uniview"];

  return (
    <HeroSection>
      {floatingIcons.map(({ Icon, top, left, right }, index) => (
        <FloatingIcon
          key={`icon-${index}`}
          style={{ top, left, right }}
          animate={{
            y: [0, -20, 0],
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
          Advanced CCTV Installation Services
        </Title>
        <Subtitle
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Secure your premises with state-of-the-art surveillance systems. We
          specialize in professional CCTV installations using top-tier
          equipment.
        </Subtitle>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {brands.map((brand, index) => (
            <BrandBadge
              key={`brand-${index}`}
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(255, 255, 255, 0.2)",
              }}
            >
              {brand}
            </BrandBadge>
          ))}
        </motion.div>
        <Button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={() => navigate("/ContactWithus")}
    >
      Get a Free Quote
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

export default CCTVInstallationHero;
