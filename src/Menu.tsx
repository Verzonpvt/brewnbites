import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Coffee, Pizza as PizzaIcon, Merge as BurgerIcon, Salad, Coffee as DrinksIcon, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import burgerall from './assets/all/burgerall.png'
import coffeeall from './assets/all/coffeeall.png'
import friesall from './assets/all/friesall.png'
import garlicbreadall from './assets/all/garlicbreadall.png'
import maggieall from './assets/all/maggieall.png'
import mocktailsall from './assets/all/mocktailsall.png'
import pattiesall from './assets/all/pattiesall.png'
import pizzaall from './assets/all/pizzaall.png'
import shakesall from './assets/all/shakesall.png'
import sandwichall from './assets/all/sandwichall.png'
import burgermenu from './assets/menu/burgermenu.png'
import coffeemenu from './assets/menu/coffeemenu.png'
import friesmenu from './assets/menu/friesmenu.png'
import garlicbreadmenu from './assets/menu/garlicbreadmenu.png'
import maggiemenu from './assets/menu/maggimenu.png'
import mocktailsmenu from './assets/menu/mocktailsmenu.png'
import pattiesmenu from './assets/menu/pattiesmenu.png'
import pizzamenu from './assets/menu/pizzamenu.png'
import shakesmenu from './assets/menu/shakesmenu.png'
import sandwichmenu from './assets/menu/sandwichmenu.png'


const scrollToTop = () => {
  window.scrollTo(0, 0);
};

function Menu() {
  const [activeCategory, setActiveCategory] = useState('All');
  const scrollRef = useRef(null);

  const categories = [ 'All','Pizza', 'French Fries', 'Burger', 'Coffee','Shakes', 'Mocktails', 'Patties', 'Garlic Bread', 'Sandwich', 'Maggie'];
   
    const menuItems = [
      {  category: 'Pizza', image: pizzamenu },
      {  category: 'French Fries', image: friesmenu },
      {  category:'Burger', image:    burgermenu },
      { category: 'Coffee', image: coffeemenu },
      { category: 'Shakes', image: shakesmenu },
      { category: 'Mocktails', image: mocktailsmenu },
      {  category: 'Patties', image: pattiesmenu },
      { category:'Garlic Bread', image: garlicbreadmenu },
      {  category: 'Sandwich', image: sandwichmenu },
      {  category: 'Maggie', image: maggiemenu },
    ];
    // ========================
    
  const mitems = [
    { id: 1, name: 'Pizza', category1: 'All',image:pizzaall },
    { id: 2, name: 'French Fries', category1: 'All', image: friesall },
    { id: 3, name: 'Burger', category1: 'All', image: burgerall },
    { id: 4, name: 'Coffee', category1: 'All',image:coffeeall },
    { id: 5, name: 'Shakes', category1: 'All',image: shakesall },
    { id:6, name: 'Mocktails', category1: 'All',image: mocktailsall },
    { id: 7, name: 'Garlic Bread', category1: 'All',image: garlicbreadall },
    { id: 8, name: 'Sandwich', category1: 'All',image: sandwichall },
    { id: 9, name: 'Maggie', category1: 'All', image: maggieall },
    { id: 10, name: 'Patties', category1: 'All', image: pattiesall },
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