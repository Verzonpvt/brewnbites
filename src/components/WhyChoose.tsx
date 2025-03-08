import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import cafe1 from "../assets/cafe/cafe1.jpeg"; // Replace with your actual image path

const WhyChoose = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("about");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on initial render
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={`why-choose transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`} id="about">
      <div className="container">
        <div className="why-choose-content flex flex-col md:flex-row items-center">
          <div className="why-choose-image">
            <img src={cafe1} alt="Restaurant Interior" className="w-full h-auto rounded-lg shadow-lg"/>
          </div>
          <div className="why-choose-text">
            <h2 className="text-3xl font-bold">Why choose Brew & Bites?</h2>
            <div className="divider my-4 h-1 w-16 bg-red-500"></div>
            <p id='big-p' className="text-lg font-semibold">Located in SIKAR, Brew and Bites is your go-to spot for a relaxed dining experience.</p>
            <p id='small-p' className="text-gray-600">Our menu is crafted for food lovers, offering a perfect mix of comfort and flavor—freshly made pizzas, juicy burgers, classic bagels, crispy garlic bread, and a variety of beverages to complement every bite. Whether you're here for a quick snack, a coffee break, or a full meal, we've got you covered with our diverse menu options.</p>
            <div className="learn-more-btn mt-4">
              <Link to="/about" className="cta-btn px-4 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition">Learn More</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
