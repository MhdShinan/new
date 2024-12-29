import React from 'react';
import { Link } from 'react-router-dom';
import App from '../assets/images/app-dev.png';
import Web from '../assets/images/web-dev.png';
import Pos from '../assets/images/pos.png';
import './Webcontent.css'; // Import the CSS file for styles

function Webcontent() {
  return (
    <div className="services-section">
      <div className="services-grid">
        <Link to="" className="service-card">
          <img
            src={App}
            alt="App Development"
            className="service-image"
          />
          <h3>Single Page</h3>
        </Link>

        <Link to="" className="service-card">
          <img
            src={Web}
            alt="Web Development"
            className="service-image"
          />
          <h3>Portfolio</h3>
        </Link>

        <Link to="" className="service-card">
          <img
            src={Pos}
            alt="POS System"
            className="service-image"
          />
          <h3>E-commerce</h3>
        </Link>
      </div>
    </div>
  );
}

export default Webcontent;
