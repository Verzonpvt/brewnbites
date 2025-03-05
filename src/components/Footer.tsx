import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <img src="https://zojqhjtepbctgmqurctj.supabase.co/storage/v1/object/public/images/1741166891570-logo-nav.png" alt="Brew & Bites Logo" />
            <h3>Brew & Bites</h3>
          </div>
          <div className="footer-cta">
            <button className="footer-cta-btn">Order Online</button>
          </div>
        </div>
        <div className="footer-info">
          <div className="footer-links">
            <Link to="/">Home</Link><br />
            <Link to="/menu">Menu</Link><br />
            <Link to="/gallery">Gallery</Link><br />
            <Link to="/about">About Us</Link><br />
          </div>
          <div className="footer-contact">
            <p>Brew & Bites, Tabela Road, near to Purohit Oil Mill<br /> opposite to City Plaza, Subhash Chowk <br />Sikar, Rajasthan - 332001</p><br />
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