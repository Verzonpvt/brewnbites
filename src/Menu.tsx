import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Coffee, Pizza as PizzaIcon, Merge as BurgerIcon, Salad, Coffee as DrinksIcon, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Menu() {
  const [activeCategory, setActiveCategory] = useState('All');
  const scrollRef = useRef(null);

  const categories = [ 'All','Pizza', 'French Fries', 'Burger', 'Coffee/Shakes', 'Mocktails', 'Patties', 'Garlic Bread', 'Sandwich', 'Maggie'];
  
    const menuItems = [
      {  category: 'Pizza', image: "https://zojqhjtepbctgmqurctj.supabase.co/storage/v1/object/public/images/1741255979559-Frame%209%20(1).png" },
      {  category: 'French Fries', image: "https://zojqhjtepbctgmqurctj.supabase.co/storage/v1/object/public/images/1741255144245-Group%2012.png" },
      {  category:'Burger', image: "https://zojqhjtepbctgmqurctj.supabase.co/storage/v1/object/public/images/1741255860904-Group%2010.png" },
      { category: 'Coffee & Shakes', image: "https://zojqhjtepbctgmqurctj.supabase.co/storage/v1/object/public/images/1741254641124-Group%208.png" },
      { category: 'Mocktails', image: "https://zojqhjtepbctgmqurctj.supabase.co/storage/v1/object/public/images/1741255979559-Frame%209%20(1).png" },
      {  category: 'Patties', image: "https://zojqhjtepbctgmqurctj.supabase.co/storage/v1/object/public/images/1741255144245-Group%2012.png" },
      { category:'Garlic Bread', image: "https://zojqhjtepbctgmqurctj.supabase.co/storage/v1/object/public/images/1741255860904-Group%2010.png" },
      {  category: 'Sandwich', image: "https://zojqhjtepbctgmqurctj.supabase.co/storage/v1/object/public/images/1741256266736-Group%2013.png" },
      {  category: 'Maggie', image: "https://zojqhjtepbctgmqurctj.supabase.co/storage/v1/object/public/images/1741254641124-Group%208.png" },
    ];


    // ========================
    
  const mitems = [
    { id: 1, name: 'Pizza', category1: 'All', icon: <PizzaIcon size={40} color="#ff6b00" />, description: 'Some description in one two lines of the jla,jax,s' },
    { id: 2, name: 'French Fries', category1: 'All', icon: <img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" alt="Pizza" style={{width: '40px', height: '40px'}} />, description: 'Some description in one two lines of the jla,jax,s' },
    { id: 3, name: 'Burger', category1: 'All', icon: <BurgerIcon size={40} color="#ff6b00" />, description: 'Some description in one two lines of the jla,jax,s' },
    { id: 4, name: 'Coffee & Shakes', category1: 'All', icon: <PizzaIcon size={40} color="#ff6b00" />, description: 'Some description in one two lines of the jla,jax,s' },
    { id: 5, name: 'Mocktails', category1: 'All', icon: <Coffee size={40} color="#ff6b00" />, description: 'Some description in one two lines of the jla,jax,s' },
    { id: 6, name: 'Patties', category1: 'All', icon: <Coffee size={40} color="#ff6b00" />, description: 'Some description in one two lines of the jla,jax,s' },
    { id: 7, name: 'Garlic Bread', category1: 'All', icon: <PizzaIcon size={40} color="#ff6b00" />, description: 'Some description in one two lines of the jla,jax,s' },
    { id: 8, name: 'Sandwich', category1: 'All', icon: <Coffee size={40} color="#ff6b00" />, description: 'Some description in one two lines of the jla,jax,s' },
    { id: 9, name: 'Maggie', category1: 'All', icon: <Coffee size={40} color="#ff6b00" />, description: 'Some description in one two lines of the jla,jax,s' },
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
        const { scrollLeft, clientWidth } = scrollRef.current;
        const scrollAmount = clientWidth / 2;
        scrollRef.current.scrollTo({
          left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
          behavior: "smooth",
        });
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
        <div key={item.id} className="menu-item">
          <h3>{item.name}</h3>
          <div className="menu-item-image">
            <img src={item.image} alt={item.name} />
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

{/* ================= */}

<section className="mitems">
  <div className="container">
    <div className="mgrid">
      {filteredItems1.map(item => (
        <div key={item.id} className="mitem">
          <h3>{item.name}</h3>
          <div className="mitem-image">
            <img src={item.image} alt={item.name} />
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
    href="https://www.instagram.com/bb_brewandbites?igsh=NHNhY2pzdHlpdHdi" // Replace with your Instagram link
    className="instagram-icon"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" />
  </a>
  <a
    href="https://chat.whatsapp.com/JlOAfSXq7VdInUEkYhLfHo" // Replace with your WhatsApp number
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