import React, { useEffect, useState } from "react";
import { Star, StarHalf } from "lucide-react"; // Using Lucide Icons

const Ratings = () => {
  const ratings = [
    { platform: "Google", score: 4.6, icon: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
    { platform: "Zomato", score: 4.3, icon: "https://upload.wikimedia.org/wikipedia/commons/7/75/Zomato_logo.png" },
    { platform: "Facebook", score: 4.5, icon: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" },
  ];

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("ratings-section");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run on initial load
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="ratings-section" className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-6">
          {ratings.map((rating, index) => {
            const fullStars = Math.floor(rating.score); // Number of full stars
            const hasHalfStar = rating.score % 1 >= 0.2 && rating.score % 1 <= 0.7; // Condition for half star

            return (
              <div
                key={index}
                className={`bg-gray-900 p-6 rounded-xl shadow-lg text-center w-64 transform transition-all duration-700 ease-out
                ${isVisible ? `opacity-100 scale-100 delay-${index * 200}` : "opacity-0 scale-90"}
              `}
                style={{ transitionDelay: `${index * 200}ms` }} // Stagger effect
              >
                <img src={rating.icon} alt={rating.platform} className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-lg font-semibold">{rating.platform}</h3>
                <p className="text-xl font-bold text-yellow-400">{rating.score}/5</p>
                <div className="flex justify-center mt-2">
                  {Array(fullStars).fill(0).map((_, i) => (
                    <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" />
                  ))}
                  {hasHalfStar && <StarHalf size={20} className="text-yellow-400 fill-yellow-400" />}
                  {Array(5 - fullStars - (hasHalfStar ? 1 : 0)).fill(0).map((_, i) => (
                    <Star key={i + fullStars + 1} size={20} className="text-gray-500" />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Ratings;
