import React from 'react';
import { motion } from 'framer-motion';
import { FaRegHandshake, FaCog, FaCheckCircle, FaRocket, FaWrench } from 'react-icons/fa';

const processSteps = [
  {
    icon: <FaRegHandshake className="text-6xl text-white" />,
    title: 'Planning',
    description: 'Understanding what you want out of your site and how you plan to implement it. Created on Figma.',
    delay: 0.1,
  },
  {
    icon: <FaCog className="text-6xl text-white" />,
    title: 'Development',
    description: 'We develop content management systems for clients who need more than just the basics.',
    delay: 0.2,
  },
  {
    icon: <FaCheckCircle className="text-6xl text-white" />,
    title: 'Review & Test',
    description: 'Once the site is ready, it is thoroughly checked and tested to ensure error-free working.',
    delay: 0.3,
  },
  {
    icon: <FaRocket className="text-6xl text-white" />,
    title: 'Launch',
    description: 'After successful testing, the product is delivered/deployed to the customer for their use.',
    delay: 0.4,
  },
  {
    icon: <FaWrench className="text-6xl text-white" />,
    title: 'Maintenance',
    description: 'Maintenance ensures your site works with efficiency at all times.',
    delay: 0.5,
  },
];

const OurProcess = () => {
  return (
    <div className="flex justify-center items-center bg-gradient-to-b from-gray-100 to-[#d9edf4] py-20">
      <div className="w-full max-w-7xl px-6">
        <div className="text-center mb-12">
          <motion.h2
            className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#005880] to-[#00799d]"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Our Process
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              className="flex justify-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: step.delay, duration: 0.5 }}
            >
              <div className="text-center p-8 bg-white rounded-lg shadow-xl transform hover:scale-110 hover:shadow-2xl transition-transform duration-300 flex flex-col items-center justify-center border-t-4 border-[#005880] relative">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#005880] to-[#00799d] p-4 rounded-full shadow-lg">
                  {step.icon}
                </div>
                <h3 className="mt-16 text-2xl font-semibold text-[#005880]">{step.title}</h3>
                <p className="text-gray-600 mt-4 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurProcess;
