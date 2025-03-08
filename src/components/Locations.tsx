import React, { useEffect, useState } from "react";
import location from "../assets/location.png";
const Locations = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("locations");
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
    <section id="locations" className="locations">
      <div className="container">
        <div
          className={`locations-card transition-all duration-1000 ease-in-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="locations-content">
            <h2>Find our locations</h2>
            <p>
              Brew & Bites, Tabela Road, near to Purohit Oil Mill <br />
              opposite to City Plaza, Subhash Chowk <br />
              Sikar, Rajasthan - 332001
            </p>
            <button
              className="locations-btn"
              onClick={() =>
                window.open("https://maps.app.goo.gl/pj9dZsiwn2z4b3vK9", "_blank")
              }
            >
              Get Location
            </button>
          </div>
          <div className="locations-images">
            <img src={location} alt="Location Map" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locations;
