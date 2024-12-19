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
              className={`faq-tab ${activeTab === 'Office' ? 'active' : ''}`}
              onClick={() => filterFAQ('Office')}
            >
              Office
            </button>
          </div>
        </div>

        {/* FAQ Questions */}
        <div className="max-w-3xl mx-auto space-y-4">
          {/* IOS FAQ */}
          {activeTab === 'Portfolio' && (
            <div className="faq-content" data-category="Portfolio">
              <div className="bg-primary rounded-lg overflow-hidden">
                <button
                  className="w-full flex items-center justify-between p-4 text-left text-white"
                  onClick={toggleFAQ}
                >
                  <span className="font-medium pr-8">
                    Our iOS app development services focus on creating high-performance, feature-rich applications for Apple's ecosystem. We ensure that your app is compatible with the latest iOS versions and devices, offering a seamless user experience.
                  </span>
                </button>
              </div>
            </div>
          )}

          {/* Android FAQ */}
          {activeTab === 'E-comerce' && (
            <div className="faq-content" data-category="E-comerce">
              <div className="bg-[#005880] rounded-lg overflow-hidden hover:bg-[#003d4d] transition">
                <button
                  className="w-full flex items-center justify-between p-4 text-left text-white"
                  onClick={toggleFAQ}
                >
                  <span className="font-medium pr-8">Do you provide responsive web design?</span>
                </button>
              </div>
            </div>
          )}

          {/* Cross Platform FAQ */}
          {activeTab === 'Office' && (
            <div className="faq-content" data-category="Office">
              <div className="bg-[#005880] rounded-lg overflow-hidden hover:bg-[#003d4d] transition">
                <button
                  className="w-full flex items-center justify-between p-4 text-left text-white"
                  onClick={toggleFAQ}
                >
                  <span className="font-medium pr-8">Do you provide responsive web design?</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
    </div>
  )
}

export default WebFAQ
