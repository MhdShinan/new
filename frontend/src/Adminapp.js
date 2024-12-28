import React, { useState } from "react";
import {
  FaHome,
  FaBars,
  FaTachometerAlt,
  FaStar,
  FaUsers,
  FaDollarSign,
  FaBlog,
  FaPhone,
  FaRocket,
  FaArrowLeft,
  FaTimes,
} from "react-icons/fa";
import TestimonialsManager from "./components/admin/TestimonialForm";
import Carears from "./components/Carears";
import TeamManagement from "./components/admin/TeamManagement";

const Adminapp = () => {
  const [activePage, setActivePage] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [compactSidebar, setCompactSidebar] = useState(false);

  const renderPage = () => {
    switch (activePage) {
      case "dashboard":
        return <h1 className="text-center text-2xl mt-10">Welcome to Dashboard</h1>;
      case "testimonials":
        return <TestimonialsManager />;
      case "satisfiedClients":
        return <h1 className="text-center text-2xl mt-10">Welcome to Satisfied Clients</h1>;
      case "team":
        return <TeamManagement />;
      case "pricing":
        return <h1 className="text-center text-2xl mt-10">Welcome to Pricing</h1>;
      case "blog":
        return <h1 className="text-center text-2xl mt-10">Welcome to Blog</h1>;
      case "contactUs":
        return <h1 className="text-center text-2xl mt-10">Welcome to Contact Us</h1>;
      case "getStarted":
        return <h1 className="text-center text-2xl mt-10">Welcome to Get Started</h1>;
      case "home":
        return <Carears />;
      default:
        return <h1 className="text-center text-2xl mt-10">Page Not Found</h1>;
    }
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } ${compactSidebar ? "w-20" : "w-64"} bg-[#005880] text-white transition-all duration-300 lg:translate-x-0`}
      >
        <div className="p-4 flex items-center justify-between border-b border-blue-700">
          <span className={`text-xl font-bold ${compactSidebar ? "hidden" : "block"}`}>Navigation</span>
          <button
            className="text-white focus:outline-none"
            onClick={() => setCompactSidebar(!compactSidebar)}
          >
            {compactSidebar ? <FaArrowLeft /> : <FaTimes />}
          </button>
        </div>
        <ul className="mt-4 space-y-1">
          {/* Sidebar Menu Items */}
          {[
            { page: "dashboard", icon: FaTachometerAlt, label: "Dashboard" },
            { page: "testimonials", icon: FaStar, label: "Testimonials" },
            { page: "satisfiedClients", icon: FaUsers, label: "Satisfied Clients" },
            { page: "team", icon: FaUsers, label: "Team" },
            { page: "pricing", icon: FaDollarSign, label: "Pricing" },
            { page: "blog", icon: FaBlog, label: "Blog" },
            { page: "contactUs", icon: FaPhone, label: "Contact Us" },
            { page: "getStarted", icon: FaRocket, label: "Get Started" },
            { page: "home", icon: FaHome, label: "Home" },
          ].map(({ page, icon: Icon, label }) => (
            <li
              key={page}
              onClick={() => {
                setActivePage(page);
                if (!compactSidebar) setSidebarOpen(false);
              }}
              className={`p-3 cursor-pointer hover:bg-blue-700 ${
                activePage === page ? "bg-blue-700" : ""
              } flex items-center`}
            >
              <Icon className="inline-block mr-2" />
              <span className={compactSidebar ? "hidden" : "block"}>{label}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Sidebar Toggle Button (Hidden on mobile) */}
      <button
        className="lg:hidden fixed top-4 left-4 bg-[#005880] text-white p-2 rounded-md focus:outline-none"
        onClick={() => setSidebarOpen(!sidebarOpen)}
        style={{ display: sidebarOpen ? 'none' : 'block' }} // Hide on mobile when sidebar is open
      >
        <FaBars />
      </button>

      {/* Main Content */}
      <div
        className={`flex-grow bg-gray-100 transition-all duration-300 ${
          sidebarOpen && !compactSidebar ? "ml-64" : compactSidebar ? "ml-20" : "ml-0"
        } p-4`}
        style={{ marginTop: "60px" }} 
      >
        {renderPage()}
      </div>
    </div>
  );
};

export default Adminapp;
