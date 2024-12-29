import React from "react";
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react";
// import Carears from "./Carears";
import { Link } from "react-router-dom";
function CareerJoinUs() {
  const iconVariants = {
    initial: { x: 0 },
    hover: { x: 10, transition: { duration: 0.3, ease: "easeInOut" } },
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center relative py-20">
        <div className="space-y-6">
          {/* Quote */}
          <p className="text-gray-800 font-medium mb-8">
"Success is within your reach, as long as you have the courage to navigate the journey."
          </p>

          {/* Main heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#005880] leading-tight">
            Empower Your Dream Career With RTech Solution
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-800 max-w-3xl mx-auto">
            Join our innovative team, where opportunities for growth and excellence abound.
          </p>

          {/* Advanced CTA Button */}

            <motion.div
            whileHover="hover"
            className="mt-8 inline-flex items-center bg-[#00A3FF] hover:bg-[#005880] text-white rounded-full px-8 py-3 shadow-md cursor-pointer transition"
          >
            <Link to="/Carears" className="flex items-center">
              <span className="text-lg font-medium">Access Job Opportunities</span>
            </Link>

            <motion.div
              className="ml-3"
              variants={iconVariants}
              initial="initial"
              whileHover="hover"
            >
              <ArrowRight className="h-5 w-5" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default CareerJoinUs;
