import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import BlogSection from './pages/BlogSection'; 
import Engine from './pages/Engine';
import Transmission from './pages/Transmission';
import Warranty from './pages/Warranty';
import Return from './pages/Return';
import Privacy from './pages/Privacy';

const App = () => {


  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/engine" element={<Engine />} />
        <Route path="/transmission" element={<Transmission />} />
        <Route path="/blog" element={<BlogSection />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<Warranty />} />
        <Route path="/return" element={<Return />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="*" element={<Home/>} />
      </Routes>
    </>
  );
};

export default App;
