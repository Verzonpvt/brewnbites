import React, { useState, useEffect } from "react";
import popup from "../assets/popup.jpg";

const PopupModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem("hasSeenPopup");

    if (!hasSeenPopup) {
      setIsOpen(true);
      localStorage.setItem("hasSeenPopup", "true"); // Store in localStorage
    }
  }, []);

  if (!isOpen) return null; // Hide the modal when closed

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50 p-4">
      <div className="relative bg-white p-4 rounded-lg shadow-lg w-full max-w-xs sm:max-w-md md:max-w-lg">
        {/* Close Button */}
        <button
          className="absolute top-2 right-2 text-gray-700 hover:text-red-500 text-2xl"
          onClick={() => setIsOpen(false)}
        >
          ✖
        </button>

        {/* Popup Image */}
        <img
          src={popup} // Change this to your image URL
          alt="Popup"
          className="w-full rounded-lg object-cover"
        />
      </div>
    </div>
  );
};

export default PopupModal;
