import React, { useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css'; 
import './App.css'; // Import your global CSS
import Footer from './components/Footer'; // Import the Footer component

const App = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: containerRef.current,
      smooth: true,
      smartphone: {
        smooth: true
      },
      tablet: {
        smooth: true
      }
    });

    // Cleanup on unmount
    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  return (<>
      <Navbar />
    <div data-scroll-container ref={containerRef}>
      <Home />
      <Footer />
    </div>
      </>
    
  );
};

export default App;
