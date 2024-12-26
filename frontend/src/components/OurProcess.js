import React from 'react';
import { motion } from 'framer-motion';
import { FaRegHandshake, FaCog, FaCheckCircle, FaRocket, FaWrench } from 'react-icons/fa';

const OurProcess = () => {
  return (
    <div className="flex justify-center items-center bg-gray-100 py-20">
      <div className="w-full max-w-7xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Our Process</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* First step */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <div className="text-center p-6 bg-white rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300 flex flex-col items-center justify-center">
              <FaRegHandshake className="text-6xl text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">Planning</h3>
              <p className="text-gray-600 mt-2">Understanding what you want out of your site and how you plan to implement it. Created on Figma.</p>
            </div>
          </motion.div>

          {/* Second step */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="text-center p-6 bg-white rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300 flex flex-col items-center justify-center">
              <FaCog className="text-6xl text-green-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">Development</h3>
              <p className="text-gray-600 mt-2">We develop content management systems for clients who need more than just the basics.</p>
            </div>
          </motion.div>

          {/* Third step */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="text-center p-6 bg-white rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300 flex flex-col items-center justify-center">
              <FaCheckCircle className="text-6xl text-yellow-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">Review & Test</h3>
              <p className="text-gray-600 mt-2">Once the site is ready, it is thoroughly checked and tested to ensure error-free working.</p>
            </div>
          </motion.div>

          {/* Fourth step */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <div className="text-center p-6 bg-white rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300 flex flex-col items-center justify-center">
              <FaRocket className="text-6xl text-red-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">Launch</h3>
              <p className="text-gray-600 mt-2">After successful testing, the product is delivered/deployed to the customer for their use.</p>
            </div>
          </motion.div>

          {/* Fifth step */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <div className="text-center p-6 bg-white rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300 flex flex-col items-center justify-center">
              <FaWrench className="text-6xl text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">Maintenance</h3>
              <p className="text-gray-600 mt-2">Maintenance ensures your site works with efficiency at all times.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default OurProcess;
