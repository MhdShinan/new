import React from 'react'
import ServiceBarWithDetailedCards from './ServiceBarWithDetailedCards'
import Footer from './Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function Pricing() {
  return (
<Router>
             
             <div>
             <Routes>
         
             <Route path="/pricing" element={
                     <>
                      <ServiceBarWithDetailedCards />
                       <Footer/>              
                     </>
                   } />
               </Routes>
             </div>
         
             </Router>
  )
}

export default Pricing