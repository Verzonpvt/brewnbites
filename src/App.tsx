import React from 'react';
import { Coffee, Pizza, Merge as Burger, Utensils, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Perfect Gateway for your cravings</h1>
              <p>Poke is a traditional Hawaiian dish that typically consists of diced raw fish (such as tuna or salmon) marinated in soy sauce and sesame oil.</p>
              <Link to="/menu" className="cta-btn">View Menu</Link>
            </div>
            <div className="hero-image">
              <div className="food-circle">
                <div className="food-item">
                  <img src="https://zojqhjtepbctgmqurctj.supabase.co/storage/v1/object/public/images/1741170129943-download-removebg-preview%20(5)%201.png" alt="Cocktail" />
                </div>
                <div className="food-item">
                  <img src="https://zojqhjtepbctgmqurctj.supabase.co/storage/v1/object/public/images/1741170129954-pizza%206.png" alt="Burger" />
                </div>
                <div className="food-item">
                  <img src="https://zojqhjtepbctgmqurctj.supabase.co/storage/v1/object/public/images/1741170129954-3361135%201.png" alt="Pizza" />
                </div>
                <div className="food-item">
                  <img src="https://zojqhjtepbctgmqurctj.supabase.co/storage/v1/object/public/images/1741170129940-877951%201.png" alt="Pizza" />
                </div>
                <div className="food-item">
                  <img src="https://zojqhjtepbctgmqurctj.supabase.co/storage/v1/object/public/images/1741170129943-download-removebg-preview%20(7)%201.png" alt="Pizza" />
                </div>
                <div className="food-item">
                  <img src="https://zojqhjtepbctgmqurctj.supabase.co/storage/v1/object/public/images/1741170129943-download-removebg-preview%20(4)%201.png" alt="item" />
                </div>
                <div className="food-item">
                  <img src="https://zojqhjtepbctgmqurctj.supabase.co/storage/v1/object/public/images/1741178756005-pngegg.png" alt="item2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="why-choose" id="about">
        <div className="container">
          <div className="why-choose-content">
            <div className="why-choose-text">
              <h2>Why choose Brew & Bites?</h2>
              <div className="divider"></div>
              <p>Located in SIKAR, Brew and Bites is your go-to spot for a relaxed dining experience.</p>
              <p>Our menu is crafted for food lovers, offering a perfect mix of comfort and flavor—freshly made pizzas, juicy burgers, classic bagels, crispy garlic bread, and a variety of beverages to complement every bite. Whether you're here for a quick snack, a coffee break, or a full meal, we've got you covered with our diverse menu options.</p>
              <button className="learn-more-btn">Learn More</button>
            </div>
            <div className="why-choose-image">
              <img src="https://zojqhjtepbctgmqurctj.supabase.co/storage/v1/object/public/images/1741166212784-abouthome.jpg" alt="Restaurant Interior" />
            </div>
          </div>
        </div>
      </section>

      {/* Explore Section */}
      <section className="explore" id="menu">
        <div className="container">
          <div className="explore-title">
            <h2>Explore</h2>
            <div className="explore-divider"></div>
          </div>
          <div className="explore-grid">
            <div className="explore-item">
              <img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Pizza" />
              <div className="explore-item-content">
                <h3>Pizza</h3>
                <p>Located in SIKAR, Brew and Bites is your go-to spot for a relaxed dining experience. Our signature pizzas.</p>
              </div>
            </div>
            <div className="explore-item">
              <img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Burger" />
              <div className="explore-item-content">
                <h3>Burger</h3>
                <p>Juicy, flavorful burgers with premium toppings and our special sauce.</p>
              </div>
            </div>
            <div className="explore-item">
              <img src="https://zojqhjtepbctgmqurctj.supabase.co/storage/v1/object/public/images/1741176237007-pexels-photo-312418.webp" alt="Coffee" />
              <div className="explore-item-content">
                <h3>Coffee</h3>
                <p>Premium coffee blends, expertly brewed to perfection.</p>
              </div>
            </div>
            <div className="explore-item">
              <img src="https://images.unsplash.com/photo-1562967914-608f82629710?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Cocktails" />
              <div className="explore-item-content">
                <h3>Cocktails</h3>
                <p>Refreshing signature cocktails crafted by our expert mixologists.</p>
              </div>
            </div>
          </div>
          <Link to="/menu" className="explore-more-btn">Explore more</Link>
        </div>
      </section>

      {/* Heritage Section */}
      <section className="heritage">
        <div className="container">
          <div className="heritage-content">
            <div className="heritage-text">
              <h2>Traditional Heritage, Modern Result</h2>
              <p>One of the reasons for poke's popularity is its versatility. While the traditional Hawaiian version features raw fish, modern variations substitute ingredients to cater to different dietary preferences, ensuring everyone can enjoy this nutritious and flavorful dish according to their preferences.</p>
            </div>
            <div className="heritage-image">
              <img src="https://zojqhjtepbctgmqurctj.supabase.co/storage/v1/object/public/images/1741176089970-delicious-pizza-on-white-background-top-view-ai-generated-free-photo.jpg" alt="Pizza Image" />
            </div>
          </div>
          <div className="heritage-bg"></div>
          <div className="heritage-accent"></div>
          <div className="heritage-accent"></div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <div className="testimonials-title">
            <h2>Our happy customers</h2>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-header">
                <div className="testimonial-avatar">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" alt="Alok Shah" />
                </div>
                <div className="testimonial-name">
                  <h3>Alok Shah</h3>
                </div>
              </div>
              <div className="testimonial-text">
                <p>I'm a big fan of Brew & Bites, and this place always delivers! The quality of the ingredients is top-notch, and the variety of beverages makes you high-reach, and the variety of toppings allows you to customize your bowl.</p>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-header">
                <div className="testimonial-avatar">
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" alt="Alok Shah" />
                </div>
                <div className="testimonial-name">
                  <h3>Alok Shah</h3>
                </div>
              </div>
              <div className="testimonial-text">
                <p>I'm a big fan of Brew & Bites, and this place always delivers! The quality of the ingredients is top-notch, and the variety of beverages makes you high-reach, and the variety of toppings allows you to customize your bowl.</p>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-header">
                <div className="testimonial-avatar">
                  <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" alt="Alok Shah" />
                </div>
                <div className="testimonial-name">
                  <h3>Alok Shah</h3>
                </div>
              </div>
              <div className="testimonial-text">
                <p>I'm a big fan of Brew & Bites, and this place always delivers! The quality of the ingredients is top-notch, and the variety of beverages makes you high-reach, and the variety of toppings allows you to customize your bowl.</p>
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
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;