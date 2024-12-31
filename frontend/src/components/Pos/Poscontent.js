import React from 'react'
import { Link } from 'react-router-dom';
import '../../styles/Poscontent.css';
import POS1 from '../../assets/images/Retail POS.jpg';
import POS2 from '../../assets/images/Restaurent POS.jpg';
import P0S3 from '../../assets/images/Mobile POS.jpg';
import P0S4 from '../../assets/images/image (3).jpg';
import P0S5 from '../../assets/images/image (4).jpg';
import P0S6 from '../../assets/images/image (5).jpg';
import P0S7 from '../../assets/images/image (6).jpg';
import P0S8 from '../../assets/images/image (7).jpg';
import P0S9 from '../../assets/images/image (8).jpg';
import P0S10 from'../../assets/images/image (9).jpg';
import Web from "../../assets/images/web-dev.png";


function Poscontent() {
  return (
    <div>
      <div>
            <div className="services-section">
            
            <div className="services-grid">
            <Link to="" className="service-card" style={{ display: 'block', textAlign: 'center' }}>
            <img
              src={POS1}
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
                <img src={POS2} alt=" Restaurant POS Systems" className="imageApp"
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
                <img src={P0S3} alt="Mobile POS" className="imageApp"
                style={{
                  width: '100%', 
                   height: '80%', 
                    objectFit: 'cover',
                     borderRadius: '8px', 
                   }} />
                <h3>Mobile POS (mPOS)</h3>
              </Link>
              <Link to="" className="service-card" style={{ display: 'block', textAlign: 'center' }}>
                <img src={P0S4} alt="Cloud- POS" className="imageApp"
                style={{
                  width: '100%', 
                   height: '80%', 
                    objectFit: 'cover',
                     borderRadius: '8px', 
                   }} />
                <h3>Cloud-Based POS</h3>
              </Link>
              <Link to="" className="service-card" style={{ display: 'block', textAlign: 'center' }}>
                <img src={P0S5} alt="Kiosks" className="imageApp"
                style={{
                  width: '100%', 
                   height: '80%', 
                    objectFit: 'cover',
                     borderRadius: '8px', 
                   }} />
                <h3>Self-Service Kiosks</h3>
              </Link>
              <Link to="" className="service-card" style={{ display: 'block', textAlign: 'center' }}>
                <img src={P0S6} alt="e-comerce" className="imageApp"
                style={{
                  width: '100%', 
                   height: '80%', 
                    objectFit: 'cover',
                     borderRadius: '8px', 
                   }} />
                <h3>eCommerce POS Systems</h3>
              </Link>
              <Link to="" className="service-card" style={{ display: 'block', textAlign: 'center' }}>
                <img src={P0S7} alt="saloonspa" className="imageApp"
                style={{
                  width: '100%', 
                   height: '80%', 
                    objectFit: 'cover',
                     borderRadius: '8px', 
                   }} />
                <h3>Salon and Spa POS Systems</h3>
              </Link>
              <Link to="" className="service-card" style={{ display: 'block', textAlign: 'center' }}>
                <img src={P0S8} alt="Enterprice" className="imageApp"
                style={{
                  width: '100%', 
                   height: '80%', 
                    objectFit: 'cover',
                     borderRadius: '8px', 
                   }} />
                <h3>Enterprise POS Systems</h3>
              </Link>
              <Link to="" className="service-card" style={{ display: 'block', textAlign: 'center' }}>
                <img src={P0S9} alt="on-premisesPOS" className="imageApp"
                style={{
                  width: '100%', 
                   height: '80%', 
                    objectFit: 'cover',
                     borderRadius: '8px', 
                   }} />
                <h3>On-Premise POS</h3>
              </Link>
              <Link to="" className="service-card" style={{ display: 'block', textAlign: 'center' }}>
                <img src={P0S10} alt="industrypos" className="imageApp"
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
