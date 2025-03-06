import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const images = [
  "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1562967914-608f82629710?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
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
              <span className="text-white text-lg font-semibold">Fresh Healthy Bowl</span>
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden group">
            <img src={images[1]} alt="Food 2" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <span className="text-white text-lg font-semibold">Grilled Perfection</span>
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden group">
            <img src={images[2]} alt="Food 3" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <span className="text-white text-lg font-semibold">Sweet Delights</span>
            </div>
          </div>

          {/* Second row */}
          <div className="relative rounded-xl overflow-hidden md:col-span-2 group">
            <img src={images[3]} alt="Food 4" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <span className="text-white text-lg font-semibold">Gourmet Burger</span>
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden group">
            <img src={images[4]} alt="Food 5" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <span className="text-white text-lg font-semibold">Pizza Artisan</span>
            </div>
          </div>

          {/* Third row */}
          <div className="relative rounded-xl overflow-hidden md:col-span-2 group">
            <img src={images[5]} alt="Food 6" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <span className="text-white text-lg font-semibold">Asian Fusion</span>
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden group">
            <img src={images[4]} alt="Food 5" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <span className="text-white text-lg font-semibold">Pizza Artisan</span>
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden md:col-span-2 group">
            <img src={images[6]} alt="Food 7" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <span className="text-white text-lg font-semibold">Seafood Delight</span>
            </div>
          </div>

          {/* Fourth row */}
          <div className="relative rounded-xl overflow-hidden md:col-span-2 group">
            <img src={images[5]} alt="Food 6" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <span className="text-white text-lg font-semibold">Asian Fusion</span>
            </div>
          </div>
          
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Gallery;