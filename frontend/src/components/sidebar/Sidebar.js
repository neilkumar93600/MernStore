// Import necessary modules and components, sorted alphabetically

import React, { useState } from "react"; // React core library and hooks
import { HiMenuAlt3 } from "react-icons/hi"; // Hamburger menu icon
import { useNavigate } from "react-router-dom"; // For navigation
import "./Sidebar.scss"; // Custom styles for the Sidebar component
import logo from "../../assets/logo.png"; // Import logo image
import menu from "../../data/sidebar"; // Sidebar menu data
import SidebarItem from "./SidebarItem"; // SidebarItem component

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true); // Sidebar open/close state
  const toggle = () => setIsOpen(!isOpen); // Toggle sidebar
  const navigate = useNavigate(); // Navigation hook

  // Navigate to home page
  const goHome = () => {
    navigate("/");
  };

  return (
    <div className="layout">
      {/* Sidebar section */}
      <div className="sidebar" style={{ width: isOpen ? "230px" : "60px" }}>
        {/* Top section with logo and toggle */}
        <div className="top_section">
          <div className="logo" style={{ display: isOpen ? "block" : "none" }}>
            {/* Logo image with click handler */}
            <img
              src={logo}
              alt="MereStore Logo"
              style={{ cursor: "pointer", width: "35px", height: "35px" }}
              onClick={goHome}
            />
          </div>

          {/* Toggle button */}
          <div
            className="bars"
            style={{ marginLeft: isOpen ? "100px" : "0px" }}
          >
            <HiMenuAlt3 onClick={toggle} />
          </div>
        </div>

        {/* Sidebar items */}
        {menu.map((item, index) => {
          return <SidebarItem key={index} item={item} isOpen={isOpen} />;
        })}
      </div>

      {/* Main content area */}
      <main
        style={{
          paddingLeft: isOpen ? "230px" : "60px",
          transition: "all .5s",
        }}
      >
        {children}
      </main>
    </div>
  );
};

export default Sidebar;
