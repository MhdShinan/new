import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/Services.css';
import App from '../assets/images/app-dev.png';
import Web from '../assets/images/web-dev.png';
import Pos from '../assets/images/pos.png';

function Webcontent() {
  return (
    <div>
      <div className="services-section">
      
      <div className="services-grid">
      <Link to="" className="service-card" style={{ display: 'block', textAlign: 'center' }}>
      <img
        src={App}
         alt="App Development"
         className="imageApp"
        style={{
         width: '100%', // Make the image fit the width of the card
          height: '80%', // Maintain aspect ratio
           objectFit: 'cover', // Ensure the image fills the container proportionally
            borderRadius: '8px', // Optional: Add rounded corners
          }}
           />
         <h3>Ios App</h3>
        </Link>

        
        <Link to="" className="service-card" style={{ display: 'block', textAlign: 'center' }}>
          <img src={Web} alt="Web Development" className="imageApp"
          style={{
            width: '100%', 
             height: '80%', 
              objectFit: 'cover',
               borderRadius: '8px', 
             }}
          />
          
          <h3>Android Development</h3>
        </Link>
        
        <Link to="" className="service-card" style={{ display: 'block', textAlign: 'center' }}>
          <img src={Pos} alt="POS System" className="imageApp"
          style={{
            width: '100%', 
             height: '80%', 
              objectFit: 'cover',
               borderRadius: '8px', 
             }} />
          <h3>Cross Platform Development</h3>
        </Link>
      </div>
    </div>
    </div>
  )
}


export default Webcontent
