import React from "react";
import { Star } from "lucide-react";

const Ratings = () => {
  const ratings = [
    { platform: "Google", score: "4.6/5", icon: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
    { platform: "Zomato", score: "4.6/5", icon: "https://upload.wikimedia.org/wikipedia/commons/7/75/Zomato_logo.png" },
    { platform: "Facebook", score: "4.5/5", icon: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" },
  ];

  return (
    <div className="bg-black text-white py-12">
      <div className="flex flex-wrap justify-center gap-6">
        {ratings.map((rating, index) => (
          <div key={index} className="bg-gray-900 p-6 rounded-xl shadow-lg text-center w-60">
            <img src={rating.icon} alt={rating.platform} className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-lg font-semibold">{rating.platform}</h3>
            <p className="text-xl font-bold text-yellow-400">{rating.score}</p>
            <div className="flex justify-center mt-2">
              {Array(5).fill(0).map((_, i) => (
                <Star key={i} size={18} className={`text-yellow-400 ${i < 4 ? "fill-yellow-400" : "fill-gray-500"}`} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ratings;
