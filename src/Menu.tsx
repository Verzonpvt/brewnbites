import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function Menu() {
  const [activeCategory, setActiveCategory] = useState('All');

  const all_c= ['All']
  
  const categories = [ 'Burger', 'Pizza', 'Sandwich', 'Patties', 'Shakes'];
  

    const menuItems = [
      { name: 'Pizza-Menu', category: 'Pizza', image: "https://zojqhjtepbctgmqurctj.supabase.co/storage/v1/object/public/images/1741255979559-Frame%209%20(1).png" },
      { name: 'Cheese Burger', category: 'Burger', image: "https://zojqhjtepbctgmqurctj.supabase.co/storage/v1/object/public/images/1741255144245-Group%2012.png" },
      { name: 'Sandwich',category:'Sandwich', image: "https://zojqhjtepbctgmqurctj.supabase.co/storage/v1/object/public/images/1741255860904-Group%2010.png" },
      { name: 'Patties', category: 'Patties', image: "https://zojqhjtepbctgmqurctj.supabase.co/storage/v1/object/public/images/1741256266736-Group%2013.png" },
      { name: 'Shakes', category: 'Shakes', image: "https://zojqhjtepbctgmqurctj.supabase.co/storage/v1/object/public/images/1741254641124-Group%208.png" }
    ];
  


  const filteredItems = activeCategory === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

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
    <div className="category-tabs">
      {categories.map(category => (
        <button 
          key={category}
          className={`category-tab ${activeCategory === category ? 'active' : ''}`}
          onClick={() => setActiveCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
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

      <Footer />
    </div>
  );
}

export default Menu;