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
      <div className="relative bg-white rounded-lg shadow-lg w-full max-w-xs sm:max-w-md md:max-w-lg overflow-hidden">
        {/* Close Button inside the image */}
        <button
          className="absolute top-2 right-2 bg-black bg-opacity-50 text-white rounded-full w-8 h-8 flex items-center justify-center text-xl"
          onClick={() => setIsOpen(false)}
        >
          ✖
        </button>

        {/* Popup Image with rounded borders */}
        <img
          src={popup} // Change this to your image URL
          alt="Popup"
          className="w-full rounded-lg"
        />
      </div>
    </div>
  );
};

export default PopupModal;
