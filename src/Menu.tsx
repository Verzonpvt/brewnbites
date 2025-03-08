import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Coffee, Pizza as PizzaIcon, Merge as BurgerIcon, Salad, Coffee as DrinksIcon, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const scrollToTop = () => {
  window.scrollTo(0, 0);
};

function Menu() {
  const [activeCategory, setActiveCategory] = useState('All');
  const scrollRef = useRef(null);

  const categories = [ 'All','Pizza', 'French Fries', 'Burger', 'Coffee','Shakes', 'Mocktails', 'Patties', 'Garlic Bread', 'Sandwich', 'Maggie'];
   
    const menuItems = [
      {  category: 'Pizza', image: "https://zojqhjtepbctgmqurctj.supabase.co/storage/v1/object/public/images/1741358584501-Frame%2018.png" },
      {  category: 'French Fries', image: "https://zojqhjtepbctgmqurctj.supabase.co/storage/v1/object/public/images/1741358584501-Frame%2019.png" },
      {  category:'Burger', image: "https://zojqhjtepbctgmqurctj.supabase.co/storage/v1/object/public/images/1741358584500-Frame%2025.png" },
      { category: 'Coffee', image: "https://zojqhjtepbctgmqurctj.supabase.co/storage/v1/object/public/images/1741358584503-Frame%2014.png" },
      { category: 'Shakes', image: "https://zojqhjtepbctgmqurctj.supabase.co/storage/v1/object/public/images/1741358584502-Frame%2015.png" },
      { category: 'Mocktails', image: "https://zojqhjtepbctgmqurctj.supabase.co/storage/v1/object/public/images/1741358584502-Frame%2017.png" },
      {  category: 'Patties', image: "https://zojqhjtepbctgmqurctj.supabase.co/storage/v1/object/public/images/1741358584500-Frame%2020.png" },
      { category:'Garlic Bread', image: "https://zojqhjtepbctgmqurctj.supabase.co/storage/v1/object/public/images/1741358584498-Frame%2024.png" },
      {  category: 'Sandwich', image: "https://zojqhjtepbctgmqurctj.supabase.co/storage/v1/object/public/images/1741358584500-Frame%2021.png" },
      {  category: 'Maggie', image: "https://zojqhjtepbctgmqurctj.supabase.co/storage/v1/object/public/images/1741358584501-Frame%2016.png" },
    ];
    // ========================
    
  const mitems = [
    { id: 1, name: 'Pizza', category1: 'All',image:"https://zojqhjtepbctgmqurctj.supabase.co/storage/v1/object/public/images/1741351999432-Frame%2026.png" },
    { id: 2, name: 'French Fries', category1: 'All', image:"https://zojqhjtepbctgmqurctj.supabase.co/storage/v1/object/public/images/1741351999434-Frame%2027.png" },
    { id: 3, name: 'Burger', category1: 'All', image:"https://zojqhjtepbctgmqurctj.supabase.co/storage/v1/object/public/images/1741351999434-Frame%2028.png" },
    { id: 4, name: 'Coffee', category1: 'All',image:"https://zojqhjtepbctgmqurctj.supabase.co/storage/v1/object/public/images/1741351999434-Frame%2030.png" },
    { id: 5, name: 'Shakes', category1: 'All',image:"https://zojqhjtepbctgmqurctj.supabase.co/storage/v1/object/public/images/1741351999434-Frame%2029.png" },
    { id:6, name: 'Mocktails', category1: 'All',image:"https://zojqhjtepbctgmqurctj.supabase.co/storage/v1/object/public/images/1741351999434-Frame%2031.png" },
    { id: 7, name: 'Garlic Bread', category1: 'All',image:"https://zojqhjtepbctgmqurctj.supabase.co/storage/v1/object/public/images/1741351999435-Frame%2035.png"},
    { id: 8, name: 'Sandwich', category1: 'All',image:"https://zojqhjtepbctgmqurctj.supabase.co/storage/v1/object/public/images/1741351999435-Frame%2033.png" },
    { id: 9, name: 'Maggie', category1: 'All', image:"https://zojqhjtepbctgmqurctj.supabase.co/storage/v1/object/public/images/1741351999435-Frame%2034.png" },
    { id: 10, name: 'Patties', category1: 'All', image:"https://zojqhjtepbctgmqurctj.supabase.co/storage/v1/object/public/images/1741351999434-Frame%2032.png"},
  ];

  const filteredItems1 = activeCategory === 'All' 
    ? mitems 
    : mitems.filter(item => item.category1 === activeCategory);

//this is to show all items 
  const filteredItems = activeCategory === '' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);


    const scroll = (direction) => {
      if (scrollRef.current) {
        const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;
        const scrollAmount = clientWidth * 0.8; // Adjust scroll amount for small screens
    
        if (direction === "left") {
          scrollRef.current.scrollTo({ left: Math.max(scrollLeft - scrollAmount, 0), behavior: "smooth" });
        } else {
          scrollRef.current.scrollTo({ left: Math.min(scrollLeft + scrollAmount, scrollWidth), behavior: "smooth" });
        }
      }
    };
    

  return (
    <div className="menu-page">
      <Navbar />

      {/* Menu Hero */} 
      <section className="menu-hero">
        <div className="container">
          <h1>Menu</h1>
        </div>
      </section>

    {/* Menu Categories */}

      <section className="menu-categories">
        <div className="container">
          <button className="scroll-btn left" onClick={() => scroll("left")}>
            <ChevronLeft size={24} />
          </button>
          <div className="category-tabs" ref={scrollRef}>
            {categories.map((category) => (
              <button
                key={category}
                className={`category-tab ${activeCategory === category ? "active" : ""}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <button className="scroll-btn right" onClick={() => scroll("right")}>
            <ChevronRight size={24} />
          </button>
        </div>
      </section>



{/* Menu Items */}
<section className="menu-items">
  <div className="container">
    <div className="menu-grid">
      {filteredItems.map(item => (
        <div key={item.category} className="menu-item">
          <h3>{item.category}</h3>
          <div 
            className="menu-item-image" 
            onClick={() => setActiveCategory(item.category)} 
            style={{ cursor: "pointer" }} 
          >
            <img src={item.image} alt={item.category} />
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

<section className="mitems">
  <div className="container">
    <div className="mgrid">
      {filteredItems1.map(item => (
        <div 
          key={item.id} 
          className="mitem" 
          onClick={() => setActiveCategory(item.name)} 
          style={{ cursor: "pointer" }} 
        >
          <div className="mitem-image">
            <img onClick={scrollToTop} src={item.image} alt={item.name} />
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

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
}

export default Menu;