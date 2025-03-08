import React, { useEffect, useState } from "react";
import profile1 from "../assets/profile/profile1.jpg";
import profile2 from "../assets/profile/profile2.jpg";
import profile3 from "../assets/profile/profile4.jpg";

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("testimonials");
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
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div
          className={`testimonials-title transition-all duration-1000 ease-in-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2>Our happy customers</h2>
          <div className="customers-divider"></div>
        </div>
        <div
          className={`testimonials-grid transition-all duration-1000 ease-in-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="testimonial-card">
            <div className="testimonial-header">
              <div className="testimonial-avatar">
                <img src={profile3} alt="Himanshu" />
              </div>
              <div className="testimonial-name">
                <h3>Himanshu</h3>
              </div>
            </div>
            <div className="testimonial-text">
              <p>
                Brew and Bites is a delight for vegetarians! The food is fresh, delicious, and served with great care...
              </p>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-header">
              <div className="testimonial-avatar">
                <img src={profile2} alt="Alok" />
              </div>
              <div className="testimonial-name">
                <h3>Alok</h3>
              </div>
            </div>
            <div className="testimonial-text">
              <p>
                I had an amazing experience at Brew and Bites! 🍕🍔 From the delicious pizzas to the perfectly cooked Maggi...
              </p>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-header">
              <div className="testimonial-avatar">
                <img src={profile1} alt="Tanuja" />
              </div>
              <div className="testimonial-name">
                <h3>Tanuja</h3>
              </div>
            </div>
            <div className="testimonial-text">
              <p>
                What impressed me most was the cleanliness and hygiene standards they maintain...
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
