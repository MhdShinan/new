import React from 'react';

function ServiceCard({ title }) {
  return React.createElement(
    'div',
    {
      className: 'service-card bg-white shadow-md hover:shadow-lg rounded-md overflow-hidden transition-shadow duration-300 h-full flex flex-col'
    },
    React.createElement('div', {
      className: 'w-full h-48 sm:h-56 md:h-64 lg:h-72 bg-gray-300 flex items-center justify-center'
    }, 
    React.createElement('span', { className: 'text-gray-600' }, 'Image Placeholder')
    ),
    React.createElement(
      'div',
      { className: 'p-4 flex-grow flex items-center justify-center' },
      React.createElement(
        'h3',
        { className: 'text-lg font-semibold text-gray-800 text-center' },
        title
      )
    )
  );
}

function AppContent() {
  const services = [
    { title: 'iOS App Development' },
    { title: 'Android Development' },
    { title: 'Cross-Platform Development' }
  ];

  return React.createElement(
    'div',
    { className: 'min-h-screen bg-gray-100 px-4 py-8 flex items-center justify-center' },
    React.createElement(
      'div',
      { className: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl' },
      services.map((service, index) =>
        React.createElement(ServiceCard, {
          key: index,
          title: service.title
        })
      )
    )
  );
}

export default AppContent;

