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
              <img src="https://zojqhjtepbctgmqurctj.supabase.co/storage/v1/object/public/images/1741273114266-Frame%2012%20(1).png" alt="b&b" />
            </div>
            <div  className="hero-para">
              <p>Brew and Bites is a cozy, 100% vegetarian café serving a variety of flavorful bites and refreshing <br /> brews. Our menu features cheesy pizzas, crispy garlic bread, loaded burgers, classic Maggi, <br /> and handcrafted beverages, all made with fresh, high-quality ingredients.</p>
            </div> 
          </div>
          <div className="cta-btn-hero">
            <Link to="/menu" className="cta-btn">View Menu</Link>
          </div>
        </div>
        
      </section>

      {/* Why Choose Section */}
      <section className="why-choose" id="about">
        <div className="container">
          <div className="why-choose-content">
            <div className="why-choose-image">
              <img src="https://zojqhjtepbctgmqurctj.supabase.co/storage/v1/object/public/images/1741166212784-abouthome.jpg" alt="Restaurant Interior" />
            </div>
            <div className="why-choose-text">
              <h2>Why choose Brew & Bites?</h2>
              <div className="divider"></div>
              <p id='big-p' >Located in SIKAR, Brew and Bites is your go-to spot for a relaxed dining experience.</p>
              <p id='small-p'>Our menu is crafted for food lovers, offering a perfect mix of comfort and flavor—freshly made pizzas, juicy burgers, classic bagels, crispy garlic bread, and a variety of beverages to complement every bite. Whether you're here for a quick snack, a coffee break, or a full meal, we've got you covered with our diverse menu options.</p>
              <div className="learn-more-btn">
                <Link to="/about" className="cta-btn">Learn More</Link>
              </div>     
            </div>
            
          </div>
        </div>
      </section>

      {/* Explore Section */}
      <section className="explore" id="menu">
        <div className="container">
          <div className="explore-title">
            <h2>Explore <br />
            <div className="explore-divider"></div></h2>
            
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
              <p>Located in the heart of Sikar, Brew & Bite reflects Rajasthan’s rich heritage with a modern twist. Inspired by traditional hospitality, we now serve crispy pizzas, juicy burgers, and refreshing beverages to delight every palate. Crafted with the finest ingredients, our menu brings you flavors both classic and new. Experience the perfect mix of tradition and taste at <b>Brew & Bite, Sikar!</b> </p>
            </div>
            <div className="heritage-image">
              <img src="https://zojqhjtepbctgmqurctj.supabase.co/storage/v1/object/public/images/1741379538520-404920538_14d9a501-5da7-411a-a965-3bb7d47951fd-removebg-preview.png" alt="Pizza Image" />
            </div>
          </div>
          <div className="heritage-bg"></div>
        
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <div className="testimonials-title">
            <h2>Our happy customers</h2>
            <div className="customers-divider"></div>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-header">
                <div className="testimonial-avatar">
                  <img src="https://zojqhjtepbctgmqurctj.supabase.co/storage/v1/object/public/images/1741376140380-1686249143827.jpg" alt="Alok Shah" />
                </div>
                <div className="testimonial-name">
                  <h3>Himanshu</h3>
                </div>
              </div>
              <div className="testimonial-text">
                <p>Brew and Bites is a delight for vegetarians! The food is fresh, delicious, and served with great care. Their cheesy pizzas, crispy garlic bread, and refreshing beverages make every visit worthwhile. The cozy ambiance adds to the experience. A must-visit for food lovers!</p>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-header">
                <div className="testimonial-avatar">
                  <img src="https://zojqhjtepbctgmqurctj.supabase.co/storage/v1/object/public/images/1741376488021-112468319.jpg" alt="Alok Shah" />
                </div>
                <div className="testimonial-name">
                  <h3>Alok</h3>
                </div>
              </div>
              <div className="testimonial-text">
                <p>I had an amazing experience at Brew and Bites! 🍕🍔 From the delicious pizzas to the perfectly cooked Maggi, every bite was a delight. The ambiance is cozy, and the staff is super friendly. Loved their refreshing beverages and crispy garlic bread! A must-visit spot in Sikar for all vegetarian food lovers. Highly recommended! ⭐⭐⭐⭐⭐</p>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-header">
                <div className="testimonial-avatar">
                  <img src="https://zojqhjtepbctgmqurctj.supabase.co/storage/v1/object/public/images/1741376716523-vikas-makwana-upn798iEEYM-unsplash.jpg" alt="Alok Shah" />
                </div>
                <div className="testimonial-name">
                  <h3>Soumya</h3>
                </div>
              </div>
              <div className="testimonial-text">
                <p>What impressed me most was the cleanliness and hygiene standards they maintain. A great spot for a safe and tasty meal!</p>
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

export default App;