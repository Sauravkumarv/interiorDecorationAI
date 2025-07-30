import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { FaUserCircle } from "react-icons/fa";
import Logo from "./Logo.jsx";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 60) {
        setShowNavbar(false); // Hide on scroll down
      } else {
        setShowNavbar(true); // Show on scroll up
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line
  }, [lastScrollY]);

  const handleToggle = () => {
    setDarkMode((prevMode) => !prevMode);
    document.body.classList.toggle("dark-mode", !darkMode);
  };
  const goToHome = () => navigate("/home");
  const goToProfile = () => navigate("/profile");
  const goToSignIn = () => navigate("/signin");
  const goToSignUp = () => navigate("/signup");
  

  return (
    <nav className={`navbar ${showNavbar ? "navbar--visible" : "navbar--hidden"}`}>
      <div className="navbar-left">
        <Logo className="logo" onClick={goToHome} style={{ cursor: "pointer" }} />
      </div>
      <div className="navbar-right">
        <button className="toggle-btn" onClick={handleToggle}>
          {darkMode ? "🌙 Dark" : "☀️ Light"}
        </button>
        <FaUserCircle
          className="profile-icon"
          onClick={goToProfile}
          style={{ cursor: "pointer" }}
        />
        <button className="nav-btn" onClick={goToSignIn}>
          Sign In
        </button>
        <button className="nav-btn signup" onClick={goToSignUp}>
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;