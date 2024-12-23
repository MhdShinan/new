import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaUsers, FaCode } from 'react-icons/fa';

const projects = [
  { id: 1, name: "Project Alpha", description: "AI-powered analytics platform.", techStack: "React, Node.js, TensorFlow", image: "project-alpha.jpg" },
  { id: 2, name: "Project Beta", description: "E-commerce platform with real-time recommendations.", techStack: "Vue.js, Firebase, Python", image: "project-beta.jpg" },
  { id: 3, name: "Project Gamma", description: "Custom CRM solution for small businesses.", techStack: "Angular, Spring Boot, MongoDB", image: "project-gamma.jpg" },
  { id: 4, name: "Project Delta", description: "Blockchain-based document verification system.", techStack: "React, Solidity, IPFS", image: "project-delta.jpg" },
];

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 py-10 px-5 space-y-20">
      {/* About Section */}
      <section className="text-center space-y-6">
        <motion.h1
          className="text-5xl font-bold tracking-wide"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to RTech Solution
        </motion.h1>
        <motion.p
          className="text-lg max-w-3xl mx-auto leading-relaxed text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          We specialize in delivering cutting-edge IT solutions to businesses worldwide. Explore our portfolio to see how we turn ideas into reality.
        </motion.p>
      </section>

      {/* Projects Section */}
      <section className="space-y-10">
        <motion.h1
          className="text-4xl font-bold text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Our Projects
        </motion.h1>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center gap-10`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="w-full md:w-1/2">
                <img
                  src={project.image}
                  alt={project.name}
                  className="rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
                />
              </div>

              <div className="w-full md:w-1/2 space-y-4">
                <h2 className="text-2xl font-bold">{project.name}</h2>
                <p className="text-gray-600">{project.description}</p>
                <p className="text-sm font-semibold text-gray-500">Tech Stack: {project.techStack}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Highlights Section */}
      <section className="space-y-10">
        <motion.h1
          className="text-4xl font-bold text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Why Choose Us
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            className="flex flex-col items-center space-y-4 bg-gray-100 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <FaRocket className="text-blue-500 text-4xl" />
            <p className="text-center text-gray-600">Innovative and scalable IT solutions tailored to your needs.</p>
          </motion.div>
          <motion.div
            className="flex flex-col items-center space-y-4 bg-gray-100 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <FaUsers className="text-blue-500 text-4xl" />
            <p className="text-center text-gray-600">Customer-centric approach ensuring maximum satisfaction.</p>
          </motion.div>
          <motion.div
            className="flex flex-col items-center space-y-4 bg-gray-100 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <FaCode className="text-blue-500 text-4xl" />
            <p className="text-center text-gray-600">Expertise in cutting-edge technologies and frameworks.</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
