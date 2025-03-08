import { useEffect, useRef } from "react";
import { Link } from 'react-router-dom';

const ExploreScroll = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollSpeed = 40; // Adjust speed (lower = faster)

  useEffect(() => {
    const scrollContent = scrollRef.current;
    if (scrollContent) {
      const duplicateContent = scrollContent.innerHTML;
      scrollContent.innerHTML += duplicateContent; // Duplicate images for seamless scrolling
      
      // Apply CSS animation
      scrollContent.style.setProperty('--scroll-speed', `${scrollSpeed}s`);
    }
  }, [scrollSpeed]);

  const handleMouseEnter = () => {
    if (scrollRef.current) {
      scrollRef.current.style.animationPlayState = 'paused';
    }
  };

  const handleMouseLeave = () => {
    if (scrollRef.current) {
      scrollRef.current.style.animationPlayState = 'running';
    }
  };

  return (
    <section className="explore" id="menu">
      <div className="container">
        <div className="explore-title">
          <h2>
            Explore <br />
            <div className="explore-divider"></div>
          </h2>
        </div>

        {/* Infinite Scroll Container */}
        <div className="scroll-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <div className="scroll-content" ref={scrollRef}>
            <img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Pizza" />
            <img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Burger" />
            <img src="https://zojqhjtepbctgmqurctj.supabase.co/storage/v1/object/public/images/1741176237007-pexels-photo-312418.webp" alt="Coffee" />
            <img src="https://images.unsplash.com/photo-1562967914-608f82629710?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Cocktails" />
          </div>
        </div>

        <Link to="/menu" onClick={() => window.scrollTo(0, 0)} className="explore-more-btn">
          Explore More
        </Link>
      </div>
    </section>
  );
};

export default ExploreScroll;
