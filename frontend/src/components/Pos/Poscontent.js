import React from 'react'
import { Link } from 'react-router-dom';
import '../../styles/Poscontent.css';
import App from '../../assets/images/app-dev.png';
import Web from '../../assets/images/web-dev.png';
import Pos from '../../assets/images/pos.png';

function Poscontent() {
  return (
    <div>
      <div>
            <div className="services-section">
            
            <div className="services-grid">
            <Link to="" className="service-card" style={{ display: 'block', textAlign: 'center' }}>
            <img
              src={App}
               alt="Retail POS Systems"
               className="imageApp"
              style={{
               width: '100%', // Make the image fit the width of the card
                height: '80%', // Maintain aspect ratio
                 objectFit: 'cover', // Ensure the image fills the container proportionally
                  borderRadius: '8px', // Optional: Add rounded corners
                }}
                 />
               <h3>Retail POS Systems</h3>
              </Link>
      
              
              <Link to="" className="service-card" style={{ display: 'block', textAlign: 'center' }}>
                <img src={Web} alt=" Restaurant POS Systems" className="imageApp"
                style={{
                  width: '100%', 
                   height: '80%', 
                    objectFit: 'cover',
                     borderRadius: '8px', 
                   }}
                />
                
                <h3> Restaurant POS Systems</h3>
              </Link>
              
              <Link to="" className="service-card" style={{ display: 'block', textAlign: 'center' }}>
                <img src={Pos} alt="Mobile POS" className="imageApp"
                style={{
                  width: '100%', 
                   height: '80%', 
                    objectFit: 'cover',
                     borderRadius: '8px', 
                   }} />
                <h3>Mobile POS (mPOS)</h3>
              </Link>
              <Link to="" className="service-card" style={{ display: 'block', textAlign: 'center' }}>
                <img src={Pos} alt="Cloud- POS" className="imageApp"
                style={{
                  width: '100%', 
                   height: '80%', 
                    objectFit: 'cover',
                     borderRadius: '8px', 
                   }} />
                <h3>Cloud-Based POS</h3>
              </Link>
              <Link to="" className="service-card" style={{ display: 'block', textAlign: 'center' }}>
                <img src={Pos} alt="Kiosks" className="imageApp"
                style={{
                  width: '100%', 
                   height: '80%', 
                    objectFit: 'cover',
                     borderRadius: '8px', 
                   }} />
                <h3>Self-Service Kiosks</h3>
              </Link>
              <Link to="" className="service-card" style={{ display: 'block', textAlign: 'center' }}>
                <img src={Pos} alt="e-comerce" className="imageApp"
                style={{
                  width: '100%', 
                   height: '80%', 
                    objectFit: 'cover',
                     borderRadius: '8px', 
                   }} />
                <h3>eCommerce POS Systems</h3>
              </Link>
              <Link to="" className="service-card" style={{ display: 'block', textAlign: 'center' }}>
                <img src={Pos} alt="saloonspa" className="imageApp"
                style={{
                  width: '100%', 
                   height: '80%', 
                    objectFit: 'cover',
                     borderRadius: '8px', 
                   }} />
                <h3>Salon and Spa POS Systems</h3>
              </Link>
              <Link to="" className="service-card" style={{ display: 'block', textAlign: 'center' }}>
                <img src={Pos} alt="Enterprice" className="imageApp"
                style={{
                  width: '100%', 
                   height: '80%', 
                    objectFit: 'cover',
                     borderRadius: '8px', 
                   }} />
                <h3>Enterprise POS Systems</h3>
              </Link>
              <Link to="" className="service-card" style={{ display: 'block', textAlign: 'center' }}>
                <img src={Pos} alt="on-premisesPOS" className="imageApp"
                style={{
                  width: '100%', 
                   height: '80%', 
                    objectFit: 'cover',
                     borderRadius: '8px', 
                   }} />
                <h3>On-Premise POS</h3>
              </Link>
              <Link to="" className="service-card" style={{ display: 'block', textAlign: 'center' }}>
                <img src={Pos} alt="industrypos" className="imageApp"
                style={{
                  width: '100%', 
                   height: '80%', 
                    objectFit: 'cover',
                     borderRadius: '8px', 
                   }} />
                <h3>Industry-Specific POS Systems</h3>
              </Link>
            </div>
          </div>
          </div>
    </div>
  )
}

export default Poscontent
