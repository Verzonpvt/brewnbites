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
          <p>At Brew & Bites, we believe fast food should be fresh food. From our premium ingredients to our exceptional service, eating healthy has never been easier—or more enjoyable! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae adipisci, praesentium ipsa corrupti cumque molestias omnis eveniet porro repellat laboriosam. Alias, voluptatibus. Voluptatibus, rerum. Eos alias iusto harum animi eveniet.</p>
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
                <p>Poke is a traditional Hawaiian dish that typically consists of diced raw fish (such as tuna or salmon) marinated in soy sauce and other flavorful ingredients. It is often served over a bed of rice and topped with various toppings like seaweed, cucumber, avocado, and sesame seeds.</p>
                <p>One of the reasons for poke's popularity is its versatility. While the traditional Hawaiian version features raw fish, modern variations substitute ingredients to cater to different dietary preferences, ensuring everyone can enjoy this nutritious and flavorful dish according to their preferences.</p>
              </div>
              <div className="about-story-image">
                <div className="accent"></div>
                <img src="https://zojqhjtepbctgmqurctj.supabase.co/storage/v1/object/public/images/1741166212784-abouthome.jpg" alt="Poke Bowl" />
                <div className="accent"></div>
              </div>
            </div>

            <div className="about-story-section">
              <div className="about-story-image">
                <div className="accent"></div>
                <img src="https://zojqhjtepbctgmqurctj.supabase.co/storage/v1/object/public/images/1741177036843-close-up-delicious-burger-meal.jpg" alt="Restaurant Interior" />
                <div className="accent"></div>
              </div>
              <div className="about-story-text">
                <h2>Traditional Heritage, Modern Result</h2>
                <div className="divider"></div>
                <p>Located in Boston, Brew and Bites is your go-to spot for a relaxed dining experience. Our menu is crafted for food lovers, offering a perfect mix of comfort and flavor—freshly made pizzas, juicy burgers, classic bagels, crispy garlic bread, and a variety of beverages to complement every bite.</p>
                <p>Whether you're here for a quick snack, a coffee break, or a full meal, we've got you covered with our diverse menu options. Our commitment to quality ingredients and exceptional service ensures that every visit to Brew & Bites is a memorable one.</p>
              </div>
            </div>

            <div className="about-story-section">
              <div className="about-story-text">
                <h2>Our Mission</h2>
                <div className="divider"></div>
                <p>At Brew & Bites, our mission is to serve delicious, nutritious food in a welcoming environment. We believe that good food brings people together, and we're committed to creating a space where our community can gather, connect, and enjoy exceptional meals.</p>
                <p>We source the freshest ingredients, support local producers whenever possible, and prepare everything with care and attention to detail. Our team is passionate about food and dedicated to providing an outstanding dining experience for every guest.</p>
              </div>
              <div className="about-story-image">
                <div className="accent"></div>
                <img src="https://zojqhjtepbctgmqurctj.supabase.co/storage/v1/object/public/images/1741177433534-vecteezy_ai-generated-grill-burger-pizza-salad-lettuce-on-wooden_36801692.jpg" alt="Restaurant Atmosphere" />
                <div className="accent"></div>
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
              <p>Serving fresh fish daily at Boston Harbor Islands, Boylston St, Congress St.</p>
              <button className="locations-btn">Locations & Hours</button>
            </div>
            <div className="locations-images">
              <div className="location-image">
                <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" alt="Poke Bowl" />
              </div>
              <div className="location-image">
                <img src="https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" alt="Poke Bowl" />
              </div>
              
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
                <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Food" />
              </div>
              <div className="gallery-item">
                <img src="https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Food" />
              </div>
              <div className="gallery-item">
                <img src="https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Food" />
              </div>
              <div className="gallery-item">
                <img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Food" />
              </div>
              <div className="gallery-item">
                <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Food" />
              </div>
              <div className="gallery-item">
                <img src="https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Food" />
              </div>
              <div className="gallery-item">
                <img src="https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Food" />
              </div>
              <div className="gallery-item">
                <img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Food" />
              </div>
              <div className="gallery-item">
                <img src="https://images.unsplash.com/photo-1562967914-608f82629710?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Food" />
              </div>
              <div className="gallery-item">
                <img src="https://images.unsplash.com/photo-1562967914-608f82629710?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Food" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default About;