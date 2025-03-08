import React from 'react';
import { Coffee, Pizza, Merge as Burger, Utensils, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SocialMedia from './components/SocialMedia'
import Locations from './components/Locations';
import AboutStory from './components/AboutStory';


import cafe1 from './assets/cafe/cafe1.jpeg';
import food1 from './assets/food/food1.png';
import food2 from './assets/food/food2.jpg';
import food3 from './assets/food/food3.jpg';
import food4 from './assets/food/food4.jpg';
import location from './assets/location.png';
import cafe3 from './assets/cafe/cafe3.jpg';
import cafe4 from './assets/cafe/cafe4.jpg';
import cafe5 from './assets/cafe/cafe5.jpg';
import cafe6 from './assets/cafe/cafe6.jpg';
import cafe8 from './assets/cafe/cafe8.jpg';
import cafe9 from './assets/cafe/cafe9.jpg';
import mission from './assets/background1.jpg'


function About() {
  return (
    <div className="about-page">
      <Navbar />

      {/* About Hero */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>Our Story</h1>
        <p>Brew and Bites was born from a love for great food and good vibes. We serve delicious, 100% vegetarian bites and brews in a cozy, welcoming space. Whether it’s a quick snack or a long coffee chat, every moment here is made special.
        Great food. Cozy vibes. Pure veg.</p>
        </div>
      </section>

      {/* About Story */}
      
      <AboutStory />

       {/* Locations Section */}
           <Locations />  
     
           {/* Social Media Section */}
           <SocialMedia />
      {/* =================Whatsapp icon */}
      <section className="whatsapp">
  <div className="floating-icons">
    <a
      href="https://maps.app.goo.gl/pj9dZsiwn2z4b3vK9" // Replace with your Google Maps link
      className="maps-icon"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src="https://img.icons8.com/?size=100&id=DcygmpZqBEd9&format=png&color=000000" alt="Maps" />
    </a>
    <a
      href="https://www.instagram.com/bb_brewandbites?igsh=NHNhY2pzdHlpdHdi"
      className="instagram-icon"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" />
    </a>
    <a
      href="https://chat.whatsapp.com/JlOAfSXq7VdInUEkYhLfHo"
      className="whatsapp-icon"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" />
    </a>
  </div>
</section>


      <Footer />
    </div>
  );
}

export default About;