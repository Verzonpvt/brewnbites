import React, { useEffect, useState } from 'react';
import { Coffee, Pizza, Merge as Burger, Utensils, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ExploreScroll from './components/ExploreScroll';  
import Ratings from './components/Ratings';
import PopupModal from './components/PopupModal';
import WhyChoose from './components/WhyChoose';
import HeritageSection from './components/HeritageSection';
import Testimonials from './components/Testimonials';
import Locations from './components/Locations';
import SocialMedia from './components/SocialMedia';
// images
import heroimg from './assets/heroimg.png'; 
import cafe1 from './assets/cafe/cafe1.jpeg';
import food1 from './assets/food/food1.png';
import food2 from './assets/food/food2.jpg';
import food3 from './assets/food/food3.jpg';
import food4 from './assets/food/food4.jpg';
import profile1 from './assets/profile/profile1.jpg';
import profile2 from './assets/profile/profile2.jpg';
import profile3 from './assets/profile/profile4.jpg';
import location from './assets/location.png';
import cafe3 from './assets/cafe/cafe3.jpg';
import cafe5 from './assets/cafe/cafe5.jpg';
import cafe6 from './assets/cafe/cafe6.jpg';
import cafe8 from './assets/cafe/cafe8.jpg';
import cafe9 from './assets/cafe/cafe9.jpg';



function App() {

  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Show popup on page load if an hour has passed
    setShowPopup(true);
  }, []);

  return (
    <div className="app">
      <Navbar />

      {/* Popup Modal */}
      <PopupModal shouldShow={showPopup} />

      {/* Hero Section */}
      <section className="hero" id="home">
  <div className="container">
    <div className="hero-content">
      <div className="hero-text">
        <img src={heroimg} alt="b&b" />
      </div>
      <div className="hero-para animate-fadeIn">
        <p>
          Brew and Bites is a cozy, 100% vegetarian café serving a variety of flavorful bites <br />
          and refreshing brews. Our menu features cheesy pizzas, crispy garlic bread, loaded burgers, classic Maggi, <br />
          and handcrafted beverages, all made with fresh, high-quality ingredients.
        </p>
      </div>
    </div>
    <div className="cta-btn-hero">
      <Link to="/menu" className="cta-btn">View Menu</Link>
    </div>
  </div>
</section>

      {/* Why Choose Section */}
      <WhyChoose />

      {/* Explore Section */}
       <ExploreScroll />

      {/* Heritage Section */}  
      <HeritageSection />
      
      {/* Testimonials Section */}
      <Testimonials />

      {/* Ratings Section */}

      <Ratings />      

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

export default App;