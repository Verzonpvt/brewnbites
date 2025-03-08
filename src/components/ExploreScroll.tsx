import { useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import explore1 from '../assets/explore/explore1.jpg';
import explore2 from '../assets/explore/explore2.jpg';
import explore3 from '../assets/explore/explore3.jpg';
import explore4 from '../assets/explore/explore4.jpg'; 
import explore5 from '../assets/explore/explore5.jpg';
import explore6 from '../assets/explore/explore6.jpg';
import explore7 from '../assets/explore/explore7.jpg';
import explore8 from '../assets/explore/explore8.jpg';
import explore9 from '../assets/explore/explore9.png';


const ExploreScroll = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollSpeed = 50; // Adjust speed (lower = faster)

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
            <img src={explore1} alt="Explore 1" />
            <img src={explore2} alt="Explore 2" />
            <img src={explore3} alt="Explore 3" />
            <img src={explore4} alt="Explore 4" />
            <img src={explore5} alt="Explore 5" />
            <img src={explore6} alt="Explore 6" />
            <img src={explore7} alt="Explore 7" />
            <img src={explore8} alt="Explore 8" />
            <img src={explore9} alt="Explore 9" />
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
