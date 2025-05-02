import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Bbb from './components/Bbb';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import BlogSection from './pages/BlogSection'; 
import Engine from './pages/Engine';
import Transmission from './pages/Transmission';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/engine" element={<Engine />} />
        <Route path="/transmission" element={<Transmission />} />
        <Route path="/blog" element={<BlogSection />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
