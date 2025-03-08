import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import cafelogo from '../assets/cafelogo.png';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0); // Scroll to top when closing mobile menu
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') {
      return 'active';
    }
    return location.pathname === path ? 'active' : '';
  };

  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <div className="logo">
            <img src={cafelogo} alt="Brew & Bites Logo" />
          </div>
          <div className="nav-links">
            <Link to="/" className={isActive('/')} onClick={scrollToTop}>Home</Link>
            <Link to="/menu" className={isActive('/menu')} onClick={scrollToTop}>Menu</Link>
            <Link to="/gallery" className={isActive('/gallery')} onClick={scrollToTop}>Gallery</Link>
            <Link to="/about" className={isActive('/about')} onClick={scrollToTop}>About</Link>
          </div>
          <button className="contact-btn">Contact Us</button>
          <button className="mobile-menu-btn" onClick={toggleMobileMenu} aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
        <Link to="/" className={isActive('/')} onClick={closeMobileMenu}>Home</Link>
        <Link to="/menu" className={isActive('/menu')} onClick={closeMobileMenu}>Menu</Link>
        <Link to="/gallery" className={isActive('/gallery')} onClick={closeMobileMenu}>Gallery</Link>
        <Link to="/about" className={isActive('/about')} onClick={closeMobileMenu}>About</Link>
        <button className="contact-btn" style={{ marginTop: '20px' }}>Contact Us</button>
      </div>
    </header>
  );
};

export default Navbar;
