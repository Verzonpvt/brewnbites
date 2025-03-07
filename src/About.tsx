import React from 'react';
import { Coffee, Pizza, Merge as Burger, Utensils, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

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
      <section className="about-story">
        <div className="container">
          <div className="about-story-container">
            <div className="about-story-section">
              <div className="about-story-text">
                <h2>What's Brew & Bites</h2>
                <div className="divider"></div>
                <p>"Brew" for aromatic coffees & chilled shakes, "Bites" for delicious pizzas, burgers, Maggi, and more. A pure veg café with cozy vibes, serving fresh flavors for every craving.
                Great brews. Tasty bites. Pure joy. </p>
              </div>
              <div className="about-story-image">
                <div className="accent"></div>
                <img src="https://zojqhjtepbctgmqurctj.supabase.co/storage/v1/object/public/images/1741166212784-abouthome.jpg" alt="Poke Bowl" />
                <div className="accent"></div>
              </div>
            </div>

            <div className="about-story-section">
              
              <div className="about-story-text">
                <h2>Traditional Heritage, Modern Result</h2>
                <div className="divider"></div>
                <p>Located in Sikar, Brew & Bites is your go-to spot for delicious comfort food. Enjoy fresh pizzas, juicy burgers, crispy garlic bread, and refreshing beverages in a relaxed setting. Whether it's a quick snack, coffee break, or full meal, we’ve got you covered with quality ingredients and great service.</p>
                </div>
              <div className="about-story-image">
                <div className="accent"></div>
                <img src="https://zojqhjtepbctgmqurctj.supabase.co/storage/v1/object/public/images/1741375100622-126.jpg" alt="Restaurant Interior" />
                <div className="accent"></div>
              </div>

            </div>

            <div className="about-story-section">
              <div className="about-story-text">
                <h2>Our Mission</h2>
                <div className="divider"></div>
                <p>At Brew & Bite, we blend tradition with modern flavors to create a warm and welcoming dining experience. Our mission is to serve fresh, high-quality pizzas, burgers, and beverages with great taste and hospitality. We strive to be a place where people come together, enjoy delicious food, and make lasting memories.</p>
                </div>
              <div className="about-story-image">
                <div className="accent"></div>
                <img src="https://zojqhjtepbctgmqurctj.supabase.co/storage/v1/object/public/images/1741177433534-vecteezy_ai-generated-grill-burger-pizza-salad-lettuce-on-wooden_36801692.jpg" alt="Restaurant Atmosphere" />
                
              </div>
            </div>
          </div>
        </div>
      </section>

       {/* Locations Section */}
            <section className="locations">
             <div className="container">
               <div className="locations-card">
                 <div className="locations-content">
                   <h2>Find our locations</h2>
                   <p> Brew & Bites, Tabela Road, near to Purohit Oil Mill  <br />
     opposite to City Plaza, Subhash Chowkbr <br />
     Sikar, Rajasthan - 332001</p>
                   <button
       className="locations-btn"
       onClick={() => window.open("https://maps.app.goo.gl/pj9dZsiwn2z4b3vK9", "_blank")}
     >
       Get Location
     </button>
                 </div>
                 <div className="locations-images">
                   <img src="https://zojqhjtepbctgmqurctj.supabase.co/storage/v1/object/public/images/1741187542747-Screenshot%20(123).png" alt="" />
                 </div>
               </div>
             </div>
           </section>  
     
           {/* Social Media Section */}
           <section className="social-media" id="gallery">
             <div className="container">
               <div className="social-media-content">
                 <div className="social-media-header">
                   <h2>Follow us</h2>
                   <p>@brewandbites</p>
                   <p>To stay updated with the latest news, promotions, and offerings from the poke restaurant, make sure to follow us on our social media accounts. Don't miss out on any updates!</p>
                   <div className="social-icons">
                     <a href="#" className="social-icon">
                       <Facebook size={20} color="#ffffff" />
                     </a>
                     <a href="#" className="social-icon">
                       <Twitter size={20} color="#ffffff" />
                     </a>
                     <a href="#" className="social-icon">
                       <Instagram size={20} color="#ffffff" />
                     </a>
                      <a href="#" className="social-icon">
                       <Youtube size={20} color="#ffffff" />
                     </a>
                   </div>
                 </div>
                 <div className="gallery-grid">
                   <div className="gallery-item">
                     <img src="https://zojqhjtepbctgmqurctj.supabase.co/storage/v1/object/public/images/1741375100623-130.jpg" alt="Food" />
                   </div>
                   <div className="gallery-item">
                     <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Food" />
                   </div>
                   <div className="gallery-item">
                     <img src="https://zojqhjtepbctgmqurctj.supabase.co/storage/v1/object/public/images/1741375100619-123.jpg" alt="Food" />
                   </div>
                   <div className="gallery-item">
                     <img src="https://zojqhjtepbctgmqurctj.supabase.co/storage/v1/object/public/images/1741375657071-Veg-Burger.jpg" alt="Food" />
                   </div>
                   <div className="gallery-item">
                     <img src="https://zojqhjtepbctgmqurctj.supabase.co/storage/v1/object/public/images/1741375100622-128.jpg" alt="Food" />
                   </div>
                   <div className="gallery-item">
                     <img src="https://zojqhjtepbctgmqurctj.supabase.co/storage/v1/object/public/images/1741375870739-2151846528.jpg" alt="Food" />
                   </div>
                   <div className="gallery-item">
                     <img src="https://zojqhjtepbctgmqurctj.supabase.co/storage/v1/object/public/images/1741375100623-129.jpg" alt="Food" />
                   </div>
                   <div className="gallery-item">
                     <img src="https://zojqhjtepbctgmqurctj.supabase.co/storage/v1/object/public/images/1741375975659-1367.jpg" alt="Food" />
                   </div>
                   <div className="gallery-item">
                     <img src="https://zojqhjtepbctgmqurctj.supabase.co/storage/v1/object/public/images/1741375100621-125.jpg" alt="Food" />
                   </div>
                 </div>
               </div>
             </div>
           </section>
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