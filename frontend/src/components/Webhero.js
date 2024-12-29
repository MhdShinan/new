import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaHtml5, FaCss3Alt, FaReact, FaJsSquare, FaNodeJs } from 'react-icons/fa'; // Import icons from react-icons

const HeroSection = styled.section`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: #005880;
`;

const GlassMorphism = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2rem;
  max-width: 600px;
  width: 90%;
  z-index: 10;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: white;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Button = styled.button`
  background-color: transparent;
  border: 2px solid white;
  color: white;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background-color: white;
    transition: all 0.3s ease;
    z-index: -1;
  }

  &:hover {
    color: #005880;
  }

  &:hover:before {
    left: 0;
  }
`;

const FloatingImage = styled(motion.div)`
  position: absolute;
  max-width: 150px;
  z-index: 1;

  @media (max-width: 768px) {
    max-width: 100px;
  }
`;

const ParticleContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Particle = styled.div`
  position: absolute;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
`;

const AdvancedServiceHero = () => {
  const particleContainerRef = useRef(null);

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

  const imageVariants = {
    animate: (i) => ({
      x: Math.sin(i * 0.5) * 100,
      y: Math.cos(i * 0.5) * 100,
      rotate: Math.sin(i * 0.5) * 30,
      transition: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 10 + i * 2,
      },
    }),
  };

  const icons = [
    { id: 'html', component: <FaHtml5 size={48} color="#E34F26" /> },
    { id: 'css', component: <FaCss3Alt size={48} color="#1572B6" /> },
    { id: 'react', component: <FaReact size={48} color="#61DAFB" /> },
    { id: 'javascript', component: <FaJsSquare size={48} color="#F7DF1E" /> },
    { id: 'nodejs', component: <FaNodeJs size={48} color="#8CC84B" /> },
  ];

  return (
    <HeroSection>
      <GlassMorphism>
        <Title>Web Development Services</Title>
        <Description>
          Transform your online presence with our cutting-edge web development solutions. We create responsive, user-friendly websites that drive results.
        </Description>
        <Button>Get Started</Button>
      </GlassMorphism>
      {icons.map((icon, index) => (
        <FloatingImage
          key={icon.id}
          custom={index}
          variants={imageVariants}
          animate="animate"
          style={{
            top: `${(index / icons.length) * 100}%`,
            left: `${((index + 0.5) / icons.length) * 100}%`,
          }}
        >
          {icon.component}
        </FloatingImage>
      ))}
      <ParticleContainer ref={particleContainerRef} />
    </HeroSection>
  );
};

export default AdvancedServiceHero;
