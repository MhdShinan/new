import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaList, FaTag, FaClipboard, FaRegPaperPlane, FaChevronDown, FaTimes, FaMobileAlt, FaDesktop, FaStore, FaCamera, FaNetworkWired, FaHome } from "react-icons/fa"; // Imported icons
import logo from "../../assets/images/brand.jpg";

const Dropdown = ({ title, icon, links }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center space-x-4 px-6 py-3 text-gray-700 hover:text-primary transition-colors"
      >
        {icon}
        <span>{title}</span>
        <FaChevronDown className={`ml-2 ${isOpen ? 'rotate-180' : ''} transition-transform`} />
      </button>
      {isOpen && (
        <ul className="absolute left-0 mt-2 w-full bg-white border border-gray-200 shadow-lg z-50 rounded-md">
          {links.map((link, index) => (
            <li key={index}>
              <Link
                to={link.to}
                className="flex items-center px-6 py-3 text-gray-700 hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                {link.icon}
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const AdminHeader = () => {
      const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    
      const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <header>
          {/* Desktop Header */}
          <nav className="hidden lg:flex items-center justify-between py-6 px-8 lg:px-24 border-b border-gray-100 bg-white shadow-md">
            <div className="flex items-center">
              <Link to="/" className="logo-container">
                <img src={logo} alt="Company Logo" className="w-20 h-20" />
              </Link>
            </div>
            <div className="flex items-center space-x-8">
              <Link to="/" className="text-gray-700 text-sm font-medium hover:text-primary">Home</Link>
              <Link to="/TestimonialsForm" className="text-gray-700 text-sm font-medium hover:text-primary">Testimonials</Link>
              <Link to="/Portfolio" className="text-gray-700 text-sm font-medium hover:text-primary">SatisfiedClients</Link>
              <Link to="/blog" className="text-gray-700 text-sm font-medium hover:text-primary">Team</Link>
              <Link to="/blog" className="text-gray-700 text-sm font-medium hover:text-primary">ContactUs</Link>
            </div>
          </nav>
    
          {/* Mobile Hamburger Menu */}
          <nav className="lg:hidden flex items-center justify-between py-6 px-8 bg-white shadow-md">
            <button onClick={toggleSidebar} className="bg-primary text-white p-2 rounded-lg">
              <FaBars size={24} />
            </button>
          </nav>
    
          {/* Sidebar */}
          {isSidebarOpen && (
            <div className="fixed inset-0 z-40 bg-gray-800 bg-opacity-50">
              <div className="fixed top-0 left-0 h-full w-3/4 bg-white shadow-lg">
                {/* Close Button */}
                <button
                  onClick={() => setIsSidebarOpen(false)}
                  className="absolute top-4 right-4 text-white bg-primary p-2 rounded-full"
                >
                  <FaTimes size={24} />
                </button>
    
                {/* Logo Section */}
                <div className="flex items-center justify-center bg-primary py-8">
                  <Link to="/" onClick={() => setIsSidebarOpen(false)}>
                    <img src={logo} alt="Company Logo" className="w-24 h-24 rounded-full" />
                  </Link>
                </div>
    
                {/* Menu Items */}
                <ul className="flex flex-col space-y-4 mt-6">
                  <li>
                    <Link to="/" className="flex items-center space-x-4 px-6 py-3 text-gray-700 hover:text-primary transition-colors" onClick={() => setIsSidebarOpen(false)}>
                      <FaHome className="text-primary" />
                      <span>Home</span>
                    </Link>
                  </li>
                  <li>
                  </li>
                  <li>
                    <Link to="/pricing" className="flex items-center space-x-4 px-6 py-3 text-gray-700 hover:text-primary transition-colors" onClick={() => setIsSidebarOpen(false)}>
                      <FaTag className="text-primary" />
                      <span>Pricing</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/portfolio" className="flex items-center space-x-4 px-6 py-3 text-gray-700 hover:text-primary transition-colors" onClick={() => setIsSidebarOpen(false)}>
                      <FaClipboard className="text-primary" />
                      <span>Portfolio</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog" className="flex items-center space-x-4 px-6 py-3 text-gray-700 hover:text-primary transition-colors" onClick={() => setIsSidebarOpen(false)}>
                      <FaRegPaperPlane className="text-primary" />
                      <span>Blog</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </header>
  )
}

export default AdminHeader
