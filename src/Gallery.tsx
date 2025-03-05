import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function Gallery() {
 

  return (
    <>
    <div className="gallery-page">
      <Navbar />
      <section className="gallery-hero">
        <div className="container">
          <h1>Gallery</h1>
        </div>
      </section>

      <br />
      <br />
      <div className="gallery-grid-m">
              <div className="gallery-item">
                <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Food" />
              </div>
              <div className="gallery-item">
                <img src="https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Food" />
              </div>
              <div className="gallery-item">
                <img src="https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Food" />
              </div>
              <div className="gallery-item">
                <img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Food" />
              </div>
              <div className="gallery-item">
                <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Food" />
              </div>
              <div className="gallery-item">
                <img src="https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Food" />
              </div>
              <div className="gallery-item">
                <img src="https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Food" />
              </div>
              <div className="gallery-item">
                <img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Food" />
              </div>
              <div className="gallery-item">
                <img src="https://images.unsplash.com/photo-1562967914-608f82629710?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Food" />
              </div>
            </div>
            <br />
            <br />
     
    </div>
    <Footer />

    </>
  );
}

export default Gallery;
