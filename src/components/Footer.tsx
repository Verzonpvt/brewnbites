import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <img src="src\assets\logo-nav.png" alt="Brew & Bites Logo" />
            <h3>Brew & Bites</h3>
          </div>
          <div className="footer-cta">
            <button className="footer-cta-btn">Order Online</button>
          </div>
        </div>
        <div className="footer-info">
          <div className="footer-links">
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/about">About Us</Link>
          </div>
          <div className="footer-contact">
            <p>848 King Street, Mesa, AZ 85201, Boston, USA</p>
            <p>info@brewandbites.com</p>
          </div>
          <div className="footer-social">
            <a href="#"><Facebook size={16} /></a>
            <a href="#"><Twitter size={16} /></a>
            <a href="#"><Instagram size={16} /></a>
            <a href="#"><Youtube size={16} /></a>
          </div>
        </div>
        <div className="footer-copyright">
          <p>© 2023 Brew & Bites. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;