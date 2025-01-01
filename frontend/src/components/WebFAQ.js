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
                {[
                  {
                    question: 'What is portfolio development?',
                    answer:
                      'Portfolio development involves creating a personal or professional website to showcase your work, skills, and achievements using tools like HTML, CSS, and React.',
                  },
                  {
                    question: 'How to choose the right platform?',
                    answer:
                      'Choosing the right platform depends on your needs. We use technologies like WordPress for ease of use and customization, or React and Node.js for more advanced and dynamic portfolios.',
                  },
                  {
                    question: 'What are the benefits of having a portfolio?',
                    answer:
                      'A portfolio enhances your professional image, helps you stand out, and serves as an online resume or showcase of your work. It is built using HTML, CSS, and PHP for functionality.',
                  },
                  {
                    question: 'How long does it take to build a portfolio website?',
                    answer:
                      'The time required depends on the complexity. Using React and Node.js can speed up development for dynamic features.',
                  },
                  {
                    question: 'Can you integrate a blog in the portfolio?',
                    answer:
                      'Yes, we can integrate a blog using WordPress or React, depending on your preference.',
                  },
                ].map((faq, index) => (
                  <div key={index} className="bg-primary rounded-lg overflow-hidden mb-4">
                    <button
                      className="w-full flex items-center justify-between p-4 text-left text-white"
                      onClick={toggleFAQ}
                    >
                      <span className="font-medium pr-8">{faq.question}</span>
                    </button>
                    <div className="hidden p-4 text-white bg-[#003d4d]">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* E-commerce FAQ */}
            {activeTab === 'E-comerce' && (
              <div className="faq-content" data-category="E-comerce">
                {[
                  {
                    question: 'What is e-commerce?',
                    answer:
                      'E-commerce refers to online buying and selling. We use technologies like PHP, WordPress, and Node.js to build secure and scalable e-commerce platforms.',
                  },
                  {
                    question: 'How can I start an online store?',
                    answer:
                      'We can help you set up an online store using platforms like WordPress or custom-built solutions using React and Node.js.',
                  },
                  {
                    question: 'What payment methods do you offer?',
                    answer:
                      'We integrate various payment gateways like PayPal, Stripe, and local payment systems using PHP and JavaScript.',
                  },
                  {
                    question: 'How secure is the online store?',
                    answer:
                      'We ensure security by using HTTPS, secure databases, and following best practices in Node.js and PHP development.',
                  },
                  {
                    question: 'Do you provide marketing solutions for e-commerce?',
                    answer:
                      'Yes, we can integrate SEO tools and analytics using WordPress plugins or custom solutions in React and Node.js.',
                  },
                ].map((faq, index) => (
                  <div key={index} className="bg-[#005880] rounded-lg overflow-hidden mb-4 hover:bg-[#003d4d] transition">
                    <button
                      className="w-full flex items-center justify-between p-4 text-left text-white"
                      onClick={toggleFAQ}
                    >
                      <span className="font-medium pr-8">{faq.question}</span>
                    </button>
                    <div className="hidden p-4 text-white">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Single-page FAQ */}
            {activeTab === 'Single_page' && (
              <div className="faq-content" data-category="Single_page">
                {[
                  {
                    question: 'What is a single-page website?',
                    answer:
                      'A single-page website is a modern design approach where all content is displayed on a single page. We use React for seamless navigation and interactivity.',
                  },
                  {
                    question: 'How does a single-page website work?',
                    answer:
                      'It uses JavaScript and React to dynamically load content, providing a smooth user experience without reloading the page.',
                  },
                  {
                    question: 'What are the advantages of single-page sites?',
                    answer:
                      'Single-page sites are faster, more responsive, and easier to maintain. We use HTML, CSS, and React for these benefits.',
                  },
                  {
                    question: 'Can I add multiple sections in a single-page website?',
                    answer:
                      'Yes, you can add as many sections as you need. We use React to handle navigation and smooth scrolling between sections.',
                  },
                  {
                    question: 'Do you offer customization for single-page websites?',
                    answer:
                      'Yes, we offer full customization using technologies like HTML, CSS, and React to match your requirements.',
                  },
                ].map((faq, index) => (
                  <div key={index} className="bg-[#005880] rounded-lg overflow-hidden mb-4 hover:bg-[#003d4d] transition">
                    <button
                      className="w-full flex items-center justify-between p-4 text-left text-white"
                      onClick={toggleFAQ}
                    >
                      <span className="font-medium pr-8">{faq.question}</span>
                    </button>
                    <div className="hidden p-4 text-white">
                      <p>{faq.answer}</p>
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
