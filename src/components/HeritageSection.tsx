import { useEffect, useState } from "react";
import food1 from "../assets/food/food1.png"; // Replace with your actual image path

const HeritageSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("heritage");
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
    <section id="heritage" className="heritage py-16 bg-gray-100">
      <div className="container">
        <div className="heritage-content flex flex-col md:flex-row items-center gap-10">
          
          {/* Left Text Section */}
          <div className={`heritage-text w-full md:w-1/2 transition-all duration-1000 ease-in-out ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            <h2 className="text-3xl font-bold ">Traditional Heritage, Modern Result</h2>
            <p className="text-gray-700 mt-4">
              Located in the heart of Sikar, Brew & Bite reflects Rajasthan’s rich heritage with a modern twist. Inspired by traditional hospitality, we now serve crispy pizzas, juicy burgers, and refreshing beverages to delight every palate. Crafted with the finest ingredients, our menu brings you flavors both classic and new. Experience the perfect mix of tradition and taste at <b>Brew & Bite, Sikar!</b>
            </p>
          </div>

          {/* Right Image Section */}
          <div className={`heritage-image w-full md:w-1/2 flex justify-center transition-all duration-1000 ease-in-out delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
  <img src={food1} alt="Pizza Image" className="w-[80%] max-w-xs sm:max-w-md md:max-w-full h-auto rounded-lg shadow-lg"/>
</div>

        </div>
      </div>
    </section>
  );
};

export default HeritageSection;
