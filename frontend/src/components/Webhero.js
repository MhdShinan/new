import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { FaHtml5, FaCss3Alt, FaReact, FaJsSquare, FaNodeJs, FaArrowRight, FaWordpress, FaPhp } from 'react-icons/fa';

const HeroSection = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: linear-gradient(135deg, #005880,rgb(9, 74, 241));
  padding: 2rem;
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

const TechStack = styled(motion.div)`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 2rem;
`;

const TechItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 1rem 1rem;
  color: white;
`;

const TechIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
`;

const TechName = styled.span`
  font-size: 0.9rem;
`;

const AdvancedWebDevHero = () => {
  const particleContainerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/Getstarted');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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

  const icons = [
    { id: 'html', component: <FaHtml5 size={48} color="#E34F26" /> },
    { id: 'css', component: <FaCss3Alt size={48} color="#1572B6" /> },
    { id: 'react', component: <FaReact size={48} color="#61DAFB" /> },
    { id: 'javascript', component: <FaJsSquare size={48} color="#F7DF1E" /> },
    { id: 'nodejs', component: <FaNodeJs size={48} color="#8CC84B" /> },
    { id: 'wordpress', component: <FaWordpress size={48} color="#21759B" /> },
    { id: 'php', component: <FaPhp size={48} color="#777BB4" /> },
  ];

  const features = [
    { icon: FaHtml5, title: "Responsive Design", description: "Websites that look great on all devices" },
    { icon: FaCss3Alt, title: "Modern Styling", description: "Sleek and attractive user interfaces" },
    { icon: FaReact, title: "Interactive UIs", description: "Engaging and dynamic user experiences" },
    { icon: FaWordpress, title: "CMS Integration", description: "Easy content management with WordPress" },
    { icon: FaPhp, title: "Backend Development", description: "Robust server-side functionality" },
  ];

  return (
    <HeroSection>
      <GlassMorphism
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Title
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          style={{
            fontSize: window.innerWidth <= 480 ? '1.8rem' : '2rem',
            fontWeight: 'bold',
            textAlign: 'left',
          }}
        >
          Comprehensive Web Development Solutions
        </Title>
        <Description
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Elevate your online presence with our cutting-edge web development services. From responsive designs to powerful backend solutions, we deliver tailored websites that drive results and engage your audience across all platforms.
        </Description>
        <Button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          onClick={handleButtonClick}
        >
          Start Your Project
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
        <FeatureGrid
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          {features.map((feature, index) => (
            <FeatureItem
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FeatureIcon>
                <feature.icon />
              </FeatureIcon>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
            </FeatureItem>
          ))}
        </FeatureGrid>
        <TechStack
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          {icons.map((icon, index) => (
            <TechItem key={icon.id}>
              <TechIcon>{icon.component}</TechIcon>
              <TechName>{icon.id.toUpperCase()}</TechName>
            </TechItem>
          ))}
        </TechStack>
      </GlassMorphism>
      {icons.map((icon, index) => (
        <FloatingIcon
          key={icon.id}
          custom={index}
          variants={iconVariants}
          animate="animate"
          style={{
            top: `${(index / icons.length) * 80 + 10}%`,
            left: `${((index + 0.5) / icons.length) * 80 + 10}%`,
          }}
        >
          {icon.component}
        </FloatingIcon>
      ))}
      <ParticleContainer ref={particleContainerRef} />
    </HeroSection>
  );
};

export default AdvancedWebDevHero;

