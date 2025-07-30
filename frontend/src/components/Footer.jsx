import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import Logo from './Logo.jsx';



const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Left: Brand */}
        <div className="footer-brand">
          <Logo className="footer-logo" />
                    <p>Curating Comfort and Style for Every Home</p>
        </div>

        {/* Center: Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <div className="links-grid">
            <a href="/">Home</a>
                        <a href="/about">About</a>
            <a href="/contact">Contact</a>
            
          </div>
        </div>

        {/* Right: Social */}
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="/" target="_blank" rel="noreferrer"><FaFacebookF /></a>
            <a href="/" target="_blank" rel="noreferrer"><FaTwitter /></a>
            <a href="/" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href="/" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} DesignHomes. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
