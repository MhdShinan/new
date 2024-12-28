import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS styles
import { FaRegHandshake, FaCog, FaCheckCircle, FaRocket, FaWrench } from 'react-icons/fa';

const processSteps = [
  {
    icon: <FaRegHandshake className="text-6xl text-white" />,
    title: 'Planning',
    description: 'Understanding what you want out of your site and how you plan to implement it. Created on Figma.',
    delay: 100,
  },
  {
    icon: <FaCog className="text-6xl text-white" />,
    title: 'Development',
    description: 'We develop content management systems for clients who need more than just the basics.',
    delay: 200,
  },
  {
    icon: <FaCheckCircle className="text-6xl text-white" />,
    title: 'Review & Test',
    description: 'Once the site is ready, it is thoroughly checked and tested to ensure error-free working.',
    delay: 300,
  },
  {
    icon: <FaRocket className="text-6xl text-white" />,
    title: 'Launch',
    description: 'After successful testing, the product is delivered/deployed to the customer for their use.',
    delay: 400,
  },
  {
    icon: <FaWrench className="text-6xl text-white" />,
    title: 'Maintenance',
    description: 'Maintenance ensures your site works with efficiency at all times.',
    delay: 500,
  },
];

const OurProcess = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div className="flex justify-center items-center bg-gradient-to-b from-gray-100 to-[#d9edf4] py-20">
      <div className="w-full max-w-7xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#005880] to-[#00799d]">
            Our Process
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className="flex justify-center"
              data-aos="fade-up"
              data-aos-delay={step.delay}
            >
              <div className="text-center p-8 bg-white rounded-lg shadow-xl flex flex-col items-center justify-center border-t-4 border-[#005880] relative">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#005880] to-[#00799d] p-4 rounded-full shadow-lg">
                  {step.icon}
                </div>
                <h3 className="mt-16 text-2xl font-semibold text-[#005880]">{step.title}</h3>
                <p className="text-gray-600 mt-4 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurProcess;
