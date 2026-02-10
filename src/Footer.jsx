import React from "react";
import Navbar from "./Navbar";

const Footer = () => {
  return (
    <footer className="studio-footer">
      <Navbar/>
      <div className="footer-content">

        {/* Brand */}
        <div className="footer-box brand">
          <h2><span>M</span>oment Capture 📸</h2>
          <p>We freeze your beautiful moments forever.</p>
        </div>

        {/* Contact */}
        <div className="footer-box contact">
          <h3>Contact Us</h3>
          <p>📞 <span>7056862965</span></p>
          <p>💌 <span>momentcapture@gmail.com</span></p>
        </div>

        {/* Address */}
        <div className="footer-box address">
          <h3>Studio Address</h3>
          <p>📍 Near Railway Flyover</p>
          <p>Kaithal Road, Karnal</p>
        </div>

        {/* Social */}
        <div className="footer-box social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <span>📘</span>
            <span>📷</span>
            <span>▶️</span>
            <span>💬</span>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Moment Capture Studio | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
