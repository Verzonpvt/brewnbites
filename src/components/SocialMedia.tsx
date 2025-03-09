import React, { useEffect, useState } from "react";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

import food2 from '../assets/food/food2.jpg';
import food3 from '../assets/food/food3.jpg';
import food4 from '../assets/food/food4.jpg';

import cafe3 from '../assets/cafe/cafe3.jpg';
import cafe5 from '../assets/cafe/cafe5.jpg';
import cafe6 from '../assets/cafe/cafe6.jpg';
import cafe8 from '../assets/cafe/cafe8.jpg';
import cafe9 from '../assets/cafe/cafe9.jpg';

const SocialMedia = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("gallery");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="social-media" id="gallery">
      <div className="container">
        <div
          className={`social-media-content transition-all duration-1000 ease-in-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="social-media-header">
            <h2>Follow us</h2>
            <p>@brewandbites</p>
            <p>
              To stay updated with the latest news, promotions, and offerings
              from the poke restaurant, make sure to follow us on our social
              media accounts. Don't miss out on any updates!
            </p>
            <div className="social-icons flex gap-4">
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

          <div
            className={`gallery-grid transition-all duration-1000 ease-in-out delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="gallery-item">
              <img src={cafe3} alt="Food" />
            </div>
            <div className="gallery-item">
              <img
                src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                alt="Food"
              />
            </div>
            <div className="gallery-item">
              <img src={cafe5} alt="Food" />
            </div>
            <div className="gallery-item">
              <img src={food4} alt="Food" />
            </div>
            <div className="gallery-item">
              <img src={cafe9} alt="Food" />
            </div>
            <div className="gallery-item">
              <img src={food3} alt="Food" />
            </div>
            <div className="gallery-item">
              <img src={cafe8} alt="Food" />
            </div>
            <div className="gallery-item">
              <img src={food2} alt="Food" />
            </div>
            <div className="gallery-item">
              <img src={cafe6} alt="Food" />
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
