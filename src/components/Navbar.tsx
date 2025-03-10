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
          <Link to="/">
            <img onClick={scrollToTop} src={cafelogo} alt="Brew & Bites Logo" />
           </Link>
          </div>
          <div className="nav-links">
            <Link to="/" className={isActive('/')} onClick={scrollToTop}>Home</Link>
            <Link to="/menu" className={isActive('/menu')} onClick={scrollToTop}>Menu</Link>
            <Link to="/gallery" className={isActive('/gallery')} onClick={scrollToTop}>Gallery</Link>
            <Link to="/about" className={isActive('/about')} onClick={scrollToTop}>About</Link>
          </div>
          <Link to="/contact" className="contact-btn">Contact Us</Link>
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
        <Link to="/contact" className={isActive('/contact')} >Contact Us</Link>
      </div>
    </header>
  );
};

export default Navbar;
