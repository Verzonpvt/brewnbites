import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import cafelogo from '../assets/cafelogo.png';
import logo from '../assets/logo.jpg';

const scrollToTop = () => {
  window.scrollTo(0, 0);
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <img src={cafelogo} alt="Brew & Bites Logo" />
            <h3>Brew & Bites</h3>
          </div>
          <div className="footer-cta">
          <button 
            className="footer-cta-btn" 
             onClick={() => window.open("https://chat.whatsapp.com/JlOAfSXq7VdInUEkYhLfHo", "_blank")}
          >
  Order Online
</button>          </div>
        </div>
        <div className="footer-info">
          <div className="footer-links">
            <Link to="/" onClick={scrollToTop}>Home</Link><br />
            <Link to="/menu" onClick={scrollToTop}>Menu</Link><br />
            <Link to="/gallery" onClick={scrollToTop}>Gallery</Link><br />
            <Link to="/about" onClick={scrollToTop}>About Us</Link><br />
            <Link to="/contact" onClick={scrollToTop}>Contact Us</Link>
          </div>
          <div className="footer-contact">
            <p>Brew & Bites, Tabela Road, near to Purohit Oil Mill<br /> opposite to City Plaza, Subhash Chowk <br />Sikar, Rajasthan - 332001</p><br />
           
            <h5>Powered By <br /></h5>
            <div className="verzon">
              <img src={logo} alt="verzon" />
            </div>
          </div>
          <div className="footer-social">
            <div className="contact-footer">
            <p id='email'><b>brewandbitescafee@gmail.com</b></p>
            <p id="email">+91 0987654321</p>
            </div>
          
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
