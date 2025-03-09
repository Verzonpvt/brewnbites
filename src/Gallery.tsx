import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import cafe1 from  "./assets/cafe/cafe1.jpeg"
import cafe2 from "./assets/cafe/cafe2.jpeg"
import cafe3 from './assets/cafe/cafe3.jpg';
import cafe5 from './assets/cafe/cafe5.jpg';
import cafe6 from './assets/cafe/cafe6.jpg';
import cafe8 from './assets/cafe/cafe8.jpg';
import cafe9 from './assets/cafe/cafe9.jpg';
import food1 from './assets/food/food1.png';
import food2 from './assets/food/food2.jpg';
import food3 from './assets/food/food3.jpg';
import food4 from './assets/food/food4.jpg';
import food9 from './assets/food/food9.jpeg'
const images = [
  cafe1,
  food1,
  cafe6,
  cafe5,
  cafe2,
  food9,
  cafe3,
  cafe8,
  food4,
  
];

const Gallery = () => {
  return (
    <div className="min-h-screen bg-black-50">
      <Navbar />

    {/* Gallery Hero */}

      <section className="gallery-hero">
        <div className="container">
          <h1>Gallery</h1>
        </div>
      </section>
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-black">
       
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {/* First row - large images */}
          <div className="relative rounded-xl overflow-hidden md:col-span-2 md:row-span-2 group">
            <img src={images[0]} alt="Food 1" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden group">
            <img src={images[1]} alt="Food 2" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden group">
            <img src={images[2]} alt="Food 3" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              
            </div>
          </div>

          {/* Second row */}
          <div className="relative rounded-xl overflow-hidden md:col-span-2 group">
            <img src={images[3]} alt="Food 4" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden group">
            <img src={images[4]} alt="Food 5" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              
            </div>
          </div>

          {/* Third row */}
          <div className="relative rounded-xl overflow-hidden md:col-span-2 group">
            <img src={images[5]} alt="Food 6" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden group">
            <img src={images[6]} alt="Food 5" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden md:col-span-2 group">
            <img src={images[7]} alt="Food 7" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              
            </div>
          </div>

          {/* Fourth row */}
          <div className="relative rounded-xl overflow-hidden md:col-span-2 group">
            <img src={images[8]} alt="Food 6" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              
            </div>
          </div>
          
        </div>
      </main>

      {/* =================Whatsapp icon */}
      <section className="whatsapp">
  <div className="floating-icons">
    <a
      href="https://maps.app.goo.gl/pj9dZsiwn2z4b3vK9" // Replace with your Google Maps link
      className="maps-icon"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src="https://img.icons8.com/?size=100&id=DcygmpZqBEd9&format=png&color=000000" alt="Maps" />
    </a>
    <a
      href="https://www.instagram.com/bb_brewandbites?igsh=NHNhY2pzdHlpdHdi"
      className="instagram-icon"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" />
    </a>
    <a
      href="https://chat.whatsapp.com/JlOAfSXq7VdInUEkYhLfHo"
      className="whatsapp-icon"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" />
    </a>
  </div>
</section>


      <Footer />
    </div>
  );
};

export default Gallery;