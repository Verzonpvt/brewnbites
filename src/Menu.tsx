import React, { useState } from 'react';
import { Coffee, Pizza as PizzaIcon, Merge as BurgerIcon, Salad, Dessert, Coffee as DrinksIcon, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function Menu() {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const categories = ['All', 'Burger', 'Pizza', 'Salad', 'Desserts', 'Drinks'];
  
  const menuItems = [
    { id: 1, name: 'Pizza',category:"Pizza", icon: <PizzaIcon size={40} color="#ff6b00" />, description: 'Some description in one two lines of the jla,jax,s' },
    { id: 2, name: 'Pizza', icon: <BurgerIcon size={40} color="#ff6b00" />,  description: 'Some description in one two lines of the jla,jax,s' },
    { id: 3, name: 'Pizza', icon: <BurgerIcon size={40} color="#ff6b00" />, description: 'Some description in one two lines of the jla,jax,s' },
    { id: 4, name: 'Pizza', icon: <PizzaIcon size={40} color="#ff6b00" />, description: 'Some description in one two lines of the jla,jax,s' },
    { id: 5, name: 'Pizza', icon: <Coffee size={40} color="#ff6b00" />, description: 'Some description in one two lines of the jla,jax,s' },
    { id: 6, name: 'Pizza', icon: <Coffee size={40} color="#ff6b00" />, description: 'Some description in one two lines of the jla,jax,s' },
    { id: 7, name: 'Pizza', icon: <PizzaIcon size={40} color="#ff6b00" />, description: 'Some description in one two lines of the jla,jax,s' },
    { id: 8, name: 'Pizza', icon: <Coffee size={40} color="#ff6b00" />, description: 'Some description in one two lines of the jla,jax,s' },
    { id: 9, name: 'Pizza', icon: <Coffee size={40} color="#ff6b00" />, description: 'Some description in one two lines of the jla,jax,s' },
  ];

  const filteredItems = activeCategory === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <div className="menu-page">
      <Navbar />

      {/* Menu Hero */}
      <section className="gallery-hero">
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
                <div className="menu-item-icon">
                  {item.icon}
                </div>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
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