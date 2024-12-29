import React from 'react';
import { Link } from 'react-router-dom';
import App from '../assets/images/app-dev.png';
import Web from '../assets/images/web-dev.png';
import Pos from '../assets/images/pos.png';

function AppContent() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl">
        {/* iOS App Development */}
        <Link
          to=""
          className="service-card block text-center bg-white shadow-lg hover:shadow-xl rounded-lg"
        >
          <img
            src={App}
            alt="App Development"
            className="rounded-lg mb-2 w-full h-60 object-cover"
          />
          <h3 className="text-lg font-semibold text-gray-800">Single Page</h3>
        </Link>

        {/* Android Development */}
        <Link
          to=""
          className="service-card block text-center bg-white shadow-lg hover:shadow-xl rounded-lg"
        >
          <img
            src={Web}
            alt="Web Development"
            className="rounded-lg mb-2 w-full h-60 object-cover"
          />
          <h3 className="text-lg font-semibold text-gray-800">Portfolio</h3>
        </Link>

        {/* Cross-Platform Development */}
        <Link
          to=""
          className="service-card block text-center bg-white shadow-lg hover:shadow-xl rounded-lg"
        >
          <img
            src={Pos}
            alt="POS System"
            className="rounded-lg mb-2 w-full h-60 object-cover"
          />
          <h3 className="text-lg font-semibold text-gray-800">E-comerce</h3>
        </Link>
      </div>
    </div>
  );
}

export default AppContent;
