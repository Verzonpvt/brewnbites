import { useEffect } from "react";
import cafe1 from "../assets/cafe/cafe1.jpeg";
import cafe4 from "../assets/cafe/cafe4.jpg";
import mission from "../assets/background1.jpg";
const AboutStory = () => {
  useEffect(() => {
    const sections = document.querySelectorAll(".about-story-section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            entry.target.style.animationDelay = `${index * 0.3}s`; // Staggered effect
          }
        });
      },
      { threshold: 0.3 } // Triggers when 30% of the section is visible
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <section className="about-story">
      <div className="container">
        <div className="about-story-container">

          <div className="about-story-section">
            <div className="about-story-text">
              <h2>What's Brew & Bites</h2>
              <div className="divider"></div>
              <p>"Brew" for aromatic coffees & chilled shakes, "Bites" for delicious pizzas, burgers, Maggi, and more.</p>
            </div>
            <div className="about-story-image">
              <img src={cafe1} alt="Poke Bowl" />
            </div>
          </div>

          <div className="about-story-section">
            <div className="about-story-text">
              <h2>Traditional Heritage, Modern Result</h2>
              <div className="divider"></div>
              <p>Located in Sikar, Brew & Bites is your go-to spot for delicious comfort food.</p>
            </div>
            <div className="about-story-image">
              <img src={cafe4} alt="Restaurant Interior" />
            </div>
          </div>

          <div className="about-story-section">
            <div className="about-story-text">
              <h2>Our Mission</h2>
              <div className="divider"></div>
              <p>At Brew & Bite, we blend tradition with modern flavors to create a warm and welcoming dining experience.</p>
            </div>
            <div className="about-story-image">
              <img src={mission} alt="Restaurant Atmosphere" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutStory;
