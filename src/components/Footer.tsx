import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const scrollToTop = () => {
  window.scrollTo(0, 0);
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <img src="/cafelogo.png" alt="Brew & Bites Logo" />
            <h3>Brew & Bites</h3>
          </div>
          <div className="footer-cta">
            <button className="footer-cta-btn">Order Online</button>
          </div>
        </div>
        <div className="footer-info">
          <div className="footer-links">
            <Link to="/" onClick={scrollToTop}>Home</Link><br />
            <Link to="/menu" onClick={scrollToTop}>Menu</Link><br />
            <Link to="/gallery" onClick={scrollToTop}>Gallery</Link><br />
            <Link to="/about" onClick={scrollToTop}>About Us</Link><br />
          </div>
          <div className="footer-contact">
            <p>Brew & Bites, Tabela Road, near to Purohit Oil Mill<br /> opposite to City Plaza, Subhash Chowk <br />Sikar, Rajasthan - 332001</p><br />
            <p id='email'>info@brewandbites.com</p>
          </div>
          <div className="footer-social">
            <a href="#"><Facebook size={16} /></a>
            <a href="#"><Twitter size={16} /></a>
            <a href="#"><Instagram size={16} /></a>
            <a href="#"><Youtube size={16} /></a>
          </div>
        </div>
        <div className="footer-copyright">
          <p>© 2025 Brew & Bites. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
