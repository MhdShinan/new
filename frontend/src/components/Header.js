import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaBars,
  FaList,
  FaTag,
  FaClipboard,
  FaRegPaperPlane,
  FaChevronDown,
  FaTimes,
  FaMobileAlt,
  FaDesktop,
  FaStore,
  FaCamera,
  FaNetworkWired,
  FaHome,
  FaSun,
  FaMoon,
} from "react-icons/fa";
import logo from "../assets/images/brand.jpg";

const Dropdown = ({ title, icon, links, isMobile, onClose }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleLinkClick = () => {
    if (isMobile && onClose) {
      onClose();
    }
    setIsOpen(false);
  };

  return (
    <div className={`relative ${isMobile ? "w-full" : ""}`} ref={dropdownRef}>
      <button
        className={`flex items-center space-x-4 px-6 py-3 text-gray-700 hover:text-primary transition-colors ${
          isOpen ? "bg-gray-100" : ""
        }`}
        aria-haspopup="true"
        onClick={toggleDropdown}
      >
        {icon}
        <span>{title}</span>
        <FaChevronDown
          className={`ml-2 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      {isOpen && (
        <ul
          className={`${
            isMobile ? "w-full bg-white bg-opacity-90" : "absolute left-0 bg-white bg-opacity-90"
          } mt-2 border border-gray-200 shadow-lg z-50 rounded-md`}
        >
          {links.map((link, index) => (
            <li key={index}>
              <Link
                to={link.to}
                className="flex items-center px-6 py-3 text-gray-700 hover:text-primary transition-colors"
                onClick={handleLinkClick}
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

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  const servicesLinks = [
    {
      to: "/services/app-development",
      icon: <FaMobileAlt className="mr-2 text-primary" />,
      label: "App Development",
    },
    {
      to: "/services/web-development",
      icon: <FaDesktop className="mr-2 text-primary" />,
      label: "Web Development",
    },
    {
      to: "/services/pos-system",
      icon: <FaStore className="mr-2 text-primary" />,
      label: "POS System",
    },
    {
      to: "/services/cctv-installation",
      icon: <FaCamera className="mr-2 text-primary" />,
      label: "CCTV Installation",
    },
    {
      to: "/services/networking",
      icon: <FaNetworkWired className="mr-2 text-primary" />,
      label: "Networking",
    },
  ];

  const closeSidebar = () => setIsSidebarOpen(false);

  const handleGetStartedClick = () => {
    closeSidebar();
    navigate("/getstarted");
  };

  return (
    <header
      className={`transition-colors ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-700"
      }`}
    >
      {/* Desktop Header */}
      <nav className="hidden lg:flex items-center justify-between py-6 px-8 lg:px-24 border-b border-gray-100 shadow-md">
        <div className="flex items-center">
          <Link to="/" className="logo-container">
            <img src={logo} alt="Company Logo" className="w-20 h-20" />
          </Link>
        </div>
        <div className="flex items-center space-x-8">
          <Dropdown
            title="Services"
            icon={<FaList className="text-primary" />}
            links={servicesLinks}
          />
          <Link to="/" className="text-sm font-medium hover:text-primary">
            Home
          </Link>
          <Link
            to="/ServiceBarWithDetailedCards"
            className="text-sm font-medium hover:text-primary"
          >
            Pricing
          </Link>
          <Link to="/Portfolio" className="text-sm font-medium hover:text-primary">
            Portfolio
          </Link>
          <Link to="/Blog" className="text-sm font-medium hover:text-primary">
            Blog
          </Link>
          <Link to="/getstarted">
            <button className="bg-primary text-white text-sm font-medium px-6 py-2.5 rounded hover:opacity-90 transition-opacity">
              Get Started
            </button>
          </Link>
          {/* <button
            onClick={toggleDarkMode}
            className="p-2 bg-transparent rounded-full hover:bg-primary focus:outline-none transition-colors"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button> */}
        </div>
      </nav>

      {/* Mobile Hamburger Menu */}
      <nav className="lg:hidden flex items-center justify-between py-6 px-8 bg-white shadow-md">
        <button
          onClick={toggleSidebar}
          className="bg-primary text-white p-2 rounded-lg"
        >
          <FaBars size={24} />
        </button>
      </nav>

      {/* Sidebar */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-40 bg-gray-800 bg-opacity-50">
          <div className="fixed top-0 left-0 h-full w-3/4 bg-white shadow-lg">
            <button
              onClick={closeSidebar}
              className="absolute top-4 right-4 text-white bg-primary p-2 rounded-full"
            >
              <FaTimes size={24} />
            </button>
            <div className="flex items-center justify-center bg-primary py-8">
              <Link to="/" onClick={closeSidebar}>
                <img src={logo} alt="Company Logo" className="w-24 h-24 rounded-full" />
              </Link>
            </div>
            <ul className="flex flex-col space-y-4 mt-6">
              <li>
                <Link
                  to="/"
                  className="flex items-center space-x-4 px-6 py-3 hover:text-primary transition-colors"
                  onClick={closeSidebar}
                >
                  <FaHome className="text-primary" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Dropdown
                  title="Services"
                  icon={<FaList className="text-primary" />}
                  links={servicesLinks}
                  isMobile
                  onClose={closeSidebar}
                />
              </li>
              <li>
                <Link
                  to="/ServiceBarWithDetailedCards"
                  className="flex items-center space-x-4 px-6 py-3 hover:text-primary transition-colors"
                  onClick={closeSidebar}
                >
                  <FaTag className="text-primary" />
                  <span>Pricing</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/Portfolio"
                  className="flex items-center space-x-4 px-6 py-3 hover:text-primary transition-colors"
                  onClick={closeSidebar}
                >
                  <FaClipboard className="text-primary" />
                  <span>Portfolio</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/Blog"
                  className="flex items-center space-x-4 px-6 py-3 hover:text-primary transition-colors"
                  onClick={closeSidebar}
                >
                  <FaRegPaperPlane className="text-primary" />
                  <span>Blog</span>
                </Link>
              </li>
              <li className="flex justify-center mt-4">
                <button
                  onClick={handleGetStartedClick}
                  className="bg-primary text-white text-sm font-medium px-6 py-2.5 rounded hover:opacity-90 transition-opacity"
                >
                  Get Started
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
