import React, { useState, useEffect } from "react";
import { X } from 'lucide-react';
import popup from '../assets/popup.jpg';
interface PopupModalProps {
  shouldShow: boolean;
}

const PopupModal: React.FC<PopupModalProps> = ({ shouldShow }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (shouldShow) {
      const lastPopupTime = localStorage.getItem("lastPopupTime");
      const currentTime = new Date().getTime();
      
      if (!lastPopupTime || currentTime - parseInt(lastPopupTime) >= 3600000) { // 1 hour in milliseconds
        setIsOpen(true);
        localStorage.setItem("lastPopupTime", currentTime.toString());
      }
    }
  }, [shouldShow]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50 p-4">
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-xs sm:max-w-md md:max-w-lg overflow-hidden animate-fade-in">
        <button
          className="absolute top-3 right-3 bg-black/50 hover:bg-black/70 text-white rounded-full w-8 h-8 flex items-center justify-center transition-colors duration-200 z-10"
          onClick={() => setIsOpen(false)}
          aria-label="Close popup"
        >
          <X size={20} strokeWidth={2.5} />
        </button>

        <img
          src={popup}
          alt="Popup"
          className="w-full rounded-2xl"
        />
      </div>
    </div>
  );
};

export default PopupModal;