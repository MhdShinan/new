// import React, { useEffect, useState } from "react";
// import StarRatings from "react-star-ratings";
// import Marquee from "react-fast-marquee"; // For smooth sliding effect
// import { FaSuitcase } from "react-icons/fa"; // For the suitcase icon
// import { FaUser } from "react-icons/fa"; // For the person icon
// import '../styles/Testimonials.css'; // Import custom styles
// import { backEndURL } from "../Backendurl";
// import { imageURL } from "../Backendurl";

// const Testimonials = () => {
//   const [testimonials, setTestimonials] = useState([]);
//   const [isHovered, setIsHovered] = useState(false);

//   // Fetch testimonials data from the API
//   const fetchTestimonials = async () => {
//     try {
//       const response = await fetch(`${backEndURL}/api/testimonials`);
//       const data = await response.json();
//       setTestimonials(data);
//     } catch (error) {
//       console.error("Error fetching testimonials:", error);
//     }
//   };

//   useEffect(() => {
//     fetchTestimonials();
//   }, []);

//   const handleHover = (status) => {
//     setIsHovered(status);
//   };

//   // Pause marquee if there are less than 3 testimonials or if it's hovered
//   const shouldPauseMarquee = testimonials.length <= 3 || isHovered;

//   return (
//     <section
//       className="testimonials-section"
//       onMouseEnter={() => handleHover(true)}
//       onMouseLeave={() => handleHover(false)}
//     >
//       {/* Section Header */}
//       <div className="header">
//         <h2 className="title">What Our Clients Say</h2>
//       </div>

//       {/* Sliding Testimonials */}
//       <Marquee
//         gradient={false}
//         speed={50}
//         className={`marquee ${shouldPauseMarquee ? "paused" : ""}`}
//       >
//         {testimonials.map((testimonial, index) => (
//           <div key={index} className="testimonial-card">
//             {/* Header Section */}
//             <div className="card-header">
//               <StarRatings
//                 rating={testimonial.rating}
//                 starRatedColor="#FFD700" // Gold color
//                 starHoverColor="#FFC107" // Shine effect
//                 starDimension="30px"
//                 starSpacing="5px"
//                 numberOfStars={5}
//                 name={`rating-${index}`}
//               />
//             </div>

//             {/* Body Section */}
//             <div className="card-body">
//               <p className="testimonial-message">"{testimonial.message}"</p>
//             </div>

//             {/* Footer Section */}
//             <div className="card-footer">
//               <div className="footer-content">
//                 {/* Image on the left */}
//                 <div className="client-image-container">
//                   <img 
//                     src={testimonial.image ? `${imageURL}${testimonial.image}` : 'images/default-avatar.png'} 
//                     alt={testimonial.name} 
//                     className="client-logo"
//                   />
//                 </div>
//                 {/* Name, Role, and Icons on the right */}
//                 <div className="name-position-container">
//                   <div className="name-position">
//                     <div className="icon-container">
//                       <FaUser className="icon person-icon" />
//                       <h3 className="client-name">{testimonial.name}</h3>
//                     </div>
//                     <div className="icon-container">
//                       <FaSuitcase className="icon suitcase-icon" />
//                       <p className="client-role">{testimonial.role}</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Marquee>
//     </section>
//   );
// };

// export default Testimonials;

import React, { useState } from "react";
import StarRatings from "react-star-ratings";
import Marquee from "react-fast-marquee"; // For smooth sliding effect
import { FaSuitcase } from "react-icons/fa"; // For the suitcase icon
import { FaUser } from "react-icons/fa"; // For the person icon
import '../styles/Testimonials.css'; // Import custom styles
import Id01 from '../assets/images/download (1).png';
import Id02 from '../assets/images/download.png';

const Testimonials = () => {
  const [isHovered, setIsHovered] = useState(false);

  // Hardcoded testimonials array
  const testimonials = [
    {
      rating: 5,
      message: "Adspire DIGITAL's site is sleek, easy to navigate, and the new analytics tools are impressive. Brilliant work!",
      image: Id01,
      name: "Adspire DIGITAL",
      role: "Owner",
    },
    {
      rating: 5,
      message: "Champika Export Marketing did an amazing job on our site! It's user-friendly, visually appealing, and the 5/5 rating system is a hit with our clients.",
      image: Id01,
      name: "Champika Export",
      role: "Owner",
    },
    {
      rating: 5,
      message: "Echo Tours Lanka's website is fantastic - user-friendly, visually appealing, and the booking process is smooth. Great job by Rtech Solution!",
      image: Id01,
      name: "Echo Tours Lanka's",
      role: "Owner",
    },
    {
      rating: 5,
      message: "ELINE Technologies nailed it with our website! Love the sleek design, intuitive navigation, and the 5/5 rating system for customer feedback. Brilliant work!",
      image: Id01,
      name: "ELINE Technologies",
      role: "Owner",
    },
    {
      rating: 5,
      message: "Heartland Trading's site is spot-on! The layout's clean, navigation's smooth, and the 5/5 rating system really connects us with our customers. Excellent!",
      image: Id02,
      name: "Heartland Trading",
      role: "Owner",
    },
    {
      rating: 5,
      message: "Ride With Me's site is a game-changer for us! Love the easy navigation, the route planner, and the 5/5 review system for our services. Brilliant!",
      image: Id01,
      name: "Ride With Me",
      role: "Owner",
    },
    {
      rating: 5,
      message: "Twilight Blue's site is perfect! The layout, security features display, and the 5/5 customer rating system are all spot-on. Great work!",
      image: Id01,
      name: "Twilight Blue",
      role: "Owner",
    },
    {
      rating: 5,
      message: "X-guard's website is top-notch! The design, ease of use, and the 5/5 rating feature really showcase our services well. Fantastic!",
      image: Id01,
      name: "X-guard",
      role: "Owner",
    },
  ];

  const handleHover = (status) => {
    setIsHovered(status);
  };

  // Pause marquee if there are less than 3 testimonials or if it's hovered
  const shouldPauseMarquee = testimonials.length <= 3 || isHovered;
  return (
    <section
      className="testimonials-section"
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
    >
      {/* Section Header */}
      <div className="header">
        <h2 className="title">What Our Clients Say</h2>
      </div>

      {/* Sliding Testimonials */}
      <Marquee
        gradient={false}
        speed={50}
        className={`marquee ${shouldPauseMarquee ? "paused" : ""}`}
      >
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            {/* Header Section */}
            <div className="card-header">
              <StarRatings
                rating={testimonial.rating}
                starRatedColor="#FFD700" // Gold color
                starHoverColor="#FFC107" // Shine effect
                starDimension="30px"
                starSpacing="5px"
                numberOfStars={5}
                name={`rating-${index}`}
              />
            </div>

            {/* Body Section */}
            <div className="card-body">
              <p className="testimonial-message">"{testimonial.message}"</p>
            </div>

            {/* Footer Section */}
            <div className="card-footer">
              <div className="footer-content">
                {/* Image on the left */}
                <div className="client-image-container">
                  <img
                    src={testimonial.image || "images/default-avatar.png"}
                    alt={testimonial.name}
                    className="client-logo"
                  />
                </div>
                {/* Name, Role, and Icons on the right */}
                <div className="name-position-container">
                  <div className="name-position">
                    <div className="icon-container">
                      <FaUser className="icon person-icon" />
                      <h3 className="client-name">{testimonial.name}</h3>
                    </div>
                    <div className="icon-container">
                      <FaSuitcase className="icon suitcase-icon" />
                      <p className="client-role">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default Testimonials;
