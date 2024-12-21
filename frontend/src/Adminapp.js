import React, { useState } from "react";
import { FaHome ,FaBars, FaTachometerAlt, FaStar, FaUsers, FaDollarSign, FaBlog, FaPhone, FaRocket } from "react-icons/fa";
import TestimonialsManager from "./components/admin/TestimonialForm";
import Carears from "./components/Carears";
import TeamManagement from "./components/admin/TeamManagement";

const Adminapp = () => {
  const [activePage, setActivePage] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderPage = () => {
    switch (activePage) {
      case "dashboard":
        return <h1 className="text-center text-2xl mt-10">Welcome to Dashboard</h1>;
      case "testimonials":
        return <TestimonialsManager />;
      case "satisfiedClients":
        return <h1 className="text-center text-2xl mt-10">Welcome to Satisfied Clients</h1>;
      case "team":
        return  <TeamManagement/>   ;
      case "pricing":
        return <h1 className="text-center text-2xl mt-10">Welcome to Pricing</h1>;
      case "blog":
        return <h1 className="text-center text-2xl mt-10">Welcome to Blog</h1>;
      case "contactUs":
        return <h1 className="text-center text-2xl mt-10">Welcome to Contact Us</h1>;
      case "getStarted":
        return <h1 className="text-center text-2xl mt-10">Welcome to Get Started</h1>;
        case "home":
          return <Carears/>;
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
        } bg-blue-800 text-white w-64 transition-transform duration-200 lg:translate-x-0`}
      >
        <div className="p-4 text-xl font-bold border-b border-blue-700">Navigation</div>
        <ul className="mt-4">
          <li
            onClick={() => {
              setActivePage("dashboard");
              setSidebarOpen(false);
            }}
            className={`p-3 cursor-pointer hover:bg-blue-700 ${
              activePage === "dashboard" ? "bg-blue-700" : ""
            }`}
          >
            <FaTachometerAlt className="inline-block mr-2" />
            Dashboard
          </li>
          <li
            onClick={() => {
              setActivePage("testimonials");
              setSidebarOpen(false);
            }}
            className={`p-3 cursor-pointer hover:bg-blue-700 ${
              activePage === "testimonials" ? "bg-blue-700" : ""
            }`}
          >
            <FaStar className="inline-block mr-2" />
            Testimonials
          </li>
          <li
            onClick={() => {
              setActivePage("satisfiedClients");
              setSidebarOpen(false);
            }}
            className={`p-3 cursor-pointer hover:bg-blue-700 ${
              activePage === "satisfiedClients" ? "bg-blue-700" : ""
            }`}
          >
            <FaUsers className="inline-block mr-2" />
            Satisfied Clients
          </li>
          <li
            onClick={() => {
              setActivePage("team");
              setSidebarOpen(false);
            }}
            className={`p-3 cursor-pointer hover:bg-blue-700 ${
              activePage === "team" ? "bg-blue-700" : ""
            }`}
          >
            <FaUsers className="inline-block mr-2" />
            Team
          </li>
          <li
            onClick={() => {
              setActivePage("pricing");
              setSidebarOpen(false);
            }}
            className={`p-3 cursor-pointer hover:bg-blue-700 ${
              activePage === "pricing" ? "bg-blue-700" : ""
            }`}
          >
            <FaDollarSign className="inline-block mr-2" />
            Pricing
          </li>

          <li
            onClick={() => {
              setActivePage("blog");
              setSidebarOpen(false);
            }}
            className={`p-3 cursor-pointer hover:bg-blue-700 ${
              activePage === "blog" ? "bg-blue-700" : ""
            }`}
          >
            <FaBlog className="inline-block mr-2" />
            Blog
          </li>

          <li
            onClick={() => {
              setActivePage("contactUs");
              setSidebarOpen(false);
            }}
            className={`p-3 cursor-pointer hover:bg-blue-700 ${
              activePage === "contactUs" ? "bg-blue-700" : ""
            }`}
          >
            <FaPhone className="inline-block mr-2" />
            Contact Us
          </li>
          <li
            onClick={() => {
              setActivePage("getStarted");
              setSidebarOpen(false);
            }}
            className={`p-3 cursor-pointer hover:bg-blue-700 ${
              activePage === "getStarted" ? "bg-blue-700" : ""
            }`}
          >
            <FaRocket className="inline-block mr-2" />
            Get Started
          </li>
          <li
            onClick={() => {
              setActivePage("Carears");
              setSidebarOpen(false);
            }}
            className={`p-3 cursor-pointer hover:bg-blue-700 ${
              activePage === "Carears" ? "bg-blue-700" : ""
            }`}
          >
            <FaHome className="inline-block mr-2" />
            Home
          </li>
        </ul>
      </div>

      {/* Hamburger Icon */}
      <button
        className="lg:hidden fixed top-4 left-4 bg-blue-800 text-white p-2 rounded focus:outline-none"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <FaBars />
      </button>

      {/* Main Content */}
      <div className="flex-grow p-4 bg-gray-100 ml-0 lg:ml-64">{renderPage()}</div>
    </div>
  );
};

export default Adminapp;
