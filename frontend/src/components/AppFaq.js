import React, { useState } from 'react';
import { FaApple, FaAndroid, FaCode, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const AppFaq = () => {
  const [activeTab, setActiveTab] = useState('ios');
  const [expanded, setExpanded] = useState({});

  const filterFAQ = (tab) => {
    setActiveTab(tab);
    setExpanded({}); // Reset expanded state when switching tabs
  };

  const toggleFAQ = (index) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const faqData = {
    ios: [
      'How do you ensure compatibility with iOS devices?',
      'What technologies do you use for iOS development?',
      'Can you help with App Store submission?',
      'What is your experience with Swift and Objective-C?',
      'Do you provide maintenance for iOS apps?'
    ],
    android: [
      'What versions of Android do you support?',
      'Can you build apps for the Google Play Store?',
      'Do you offer support for Android tablets?',
      'What tools do you use for Android development?',
      'How do you handle Android OS fragmentation?'
    ],
    cross: [
      'What frameworks do you use for cross-platform development?',
      'Can you deploy cross-platform apps to both stores?',
      'What are the cost benefits of cross-platform development?',
      'Do cross-platform apps compromise performance?',
      'What testing tools do you use for cross-platform apps?'
    ]
  };

  const icons = {
    ios: <FaApple className="transition-colors duration-300 text-[#005880] group-hover:text-white" />,
    android: <FaAndroid className="transition-colors duration-300 text-[#005880] group-hover:text-white" />,
    cross: <FaCode className="transition-colors duration-300 text-[#005880] group-hover:text-white" />
  };

  return (
    <section className="py-10 px-6 lg:px-16">
      <div className="max-w-4xl mx-auto">
        {/* FAQ Category Bar */}
        <div className="bg-gray-100 p-2 rounded-lg shadow-md mb-6">
          <div className="flex justify-center gap-4">
            {['ios', 'android', 'cross'].map((tab) => (
              <button
                key={tab}
                className={`faq-tab group flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md transition-colors duration-300 ${
                  activeTab === tab ? 'bg-[#005880] text-white' : 'bg-white text-gray-800 hover:bg-[#005880] hover:text-white'
                }`}
                onClick={() => filterFAQ(tab)}
              >
                {icons[tab]} {tab.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Questions */}
        <div className="space-y-4">
          {faqData[activeTab].map((question, index) => (
            <div key={index} className="faq-content">
              <div className="bg-[#005880] rounded-md overflow-hidden">
                <button
                  className="w-full flex items-center justify-between p-4 text-left text-white font-medium"
                  onClick={() => toggleFAQ(index)}
                >
                  <span>{question}</span>
                  {expanded[index] ? <FaChevronUp /> : <FaChevronDown />}
                </button>
                {expanded[index] && (
                  <div className="p-4 bg-[#004259] text-white">
                    This is a detailed answer for "{question}".
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppFaq;
