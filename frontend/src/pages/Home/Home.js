// Import necessary modules and components, sorted alphabetically
import React, { useEffect } from "react"; // React core library and useEffect hook
import { Link } from "react-router-dom"; // For navigation
import "./Home.scss"; // Custom styles for the Home component
import logoImg from "../../assets/logo.png"; // Logo image

const Home = () => {
  useEffect(() => {
    // Handler to update gradient position based on cursor movement
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      document.body.style.background = `radial-gradient(circle at ${clientX}px ${clientY}px, #1e3a8a, #3b82f6)`;
    };

    // Add event listener for mouse movement
    document.addEventListener('mousemove', handleMouseMove);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="home">
      {/* Navigation Bar */}
      <nav className="container --flex-between">
        {/* Logo Section */}
        <div className="logo">
          <img src={logoImg} alt="MereStore Logo" className="logo-circle" />
        </div>

        {/* Links Section */}
        <ul className="home-links">
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </nav>

      {/* Main Content Section */}
      <section className="main-content">
        <h1 className="project-name">MereStore</h1>
      </section>
    </div>
  );
};

export default Home;
