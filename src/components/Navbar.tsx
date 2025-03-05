import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const isActive = (path: string) => {
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
            <img src="https://zojqhjtepbctgmqurctj.supabase.co/storage/v1/object/public/images/1741166891570-logo-nav.png" alt="Brew & Bites Logo" />
          </div>
          <div className="nav-links">
            <Link to="/" className={isActive('/')}>Home</Link>
            <Link to="/menu" className={isActive('/menu')}>Menu</Link>
            <Link to="/gallery" className={isActive('/gallery')}>Gallery</Link>
            <Link to="/about" className={isActive('/about')}>About</Link>
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