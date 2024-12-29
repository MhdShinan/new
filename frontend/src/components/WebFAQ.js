import React, { useState } from 'react';

const WebFAQ = () => {
  const [activeTab, setActiveTab] = useState('Portfolio');

  const filterFAQ = (tab) => {
    setActiveTab(tab);
  };

  const toggleFAQ = (event) => {
    const button = event.currentTarget;
    const content = button.nextElementSibling;
    if (content) {
      content.classList.toggle('hidden');
    }
  };

  return (
    <div>
      <section className="py-16 px-8 lg:px-24">
        <div className="max-w-4xl mx-auto">
          {/* FAQ Category Bar */}
          <div className="bg-gray-100 p-4 rounded-xl shadow-lg mb-8">
            <div className="flex flex-wrap justify-between items-center gap-2">
              <button
                className={`faq-tab ${activeTab === 'Portfolio' ? 'active' : ''}`}
                onClick={() => filterFAQ('Portfolio')}
              >
                Portfolio
              </button>
              <button
                className={`faq-tab ${activeTab === 'E-comerce' ? 'active' : ''}`}
                onClick={() => filterFAQ('E-comerce')}
              >
                E-comerce
              </button>
              <button
                className={`faq-tab ${activeTab === 'Single_page' ? 'active' : ''}`}
                onClick={() => filterFAQ('Single_page')}
              >
                Single_page
              </button>
            </div>
          </div>

          {/* FAQ Questions */}
          <div className="max-w-3xl mx-auto space-y-4">
            {/* Portfolio FAQ */}
            {activeTab === 'Portfolio' && (
              <div className="faq-content" data-category="Portfolio">
                {['What is portfolio development?', 'How to choose the right platform?', 'What are the benefits of having a portfolio?', 'How long does it take to build a portfolio website?', 'Can you integrate a blog in the portfolio?'].map((question, index) => (
                  <div key={index} className="bg-primary rounded-lg overflow-hidden mb-4">
                    <button
                      className="w-full flex items-center justify-between p-4 text-left text-white"
                      onClick={toggleFAQ}
                    >
                      <span className="font-medium pr-8">{question}</span>
                    </button>
                    <div className="hidden p-4 text-white bg-[#003d4d]">
                      {/* You can add detailed answer content here */}
                      <p>Answer for {question}.</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* E-commerce FAQ */}
            {activeTab === 'E-comerce' && (
              <div className="faq-content" data-category="E-comerce">
                {['What is e-commerce?', 'How can I start an online store?', 'What payment methods do you offer?', 'How secure is the online store?', 'Do you provide marketing solutions for e-commerce?'].map((question, index) => (
                  <div key={index} className="bg-[#005880] rounded-lg overflow-hidden mb-4 hover:bg-[#003d4d] transition">
                    <button
                      className="w-full flex items-center justify-between p-4 text-left text-white"
                      onClick={toggleFAQ}
                    >
                      <span className="font-medium pr-8">{question}</span>
                    </button>
                    <div className="hidden p-4 text-white">
                      {/* You can add detailed answer content here */}
                      <p>Answer for {question}.</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Single-page FAQ */}
            {activeTab === 'Single_page' && (
              <div className="faq-content" data-category="Single_page">
                {['What is a single-page website?', 'How does a single-page website work?', 'What are the advantages of single-page sites?', 'Can I add multiple sections in a single-page website?', 'Do you offer customization for single-page websites?'].map((question, index) => (
                  <div key={index} className="bg-[#005880] rounded-lg overflow-hidden mb-4 hover:bg-[#003d4d] transition">
                    <button
                      className="w-full flex items-center justify-between p-4 text-left text-white"
                      onClick={toggleFAQ}
                    >
                      <span className="font-medium pr-8">{question}</span>
                    </button>
                    <div className="hidden p-4 text-white">
                      {/* You can add detailed answer content here */}
                      <p>Answer for {question}.</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebFAQ;
