import './App.css'
import Navbar from './component/common/Navbar'
import { useState } from "react";
import HeroSection from './component/Home/HeroSection';
import Features from './component/Features/Features';
import Choose from './component/WhyChooseUs/Choose';
import SpecialMenu from './component/MenuPage/SpecialMenu';
import Footer from './component/common/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './Pages/About';
import OurStory from './Pages/OurStory';
import Contact from './Pages/Contact';
import Menu from './Pages/Menu';
import Home from './Pages/Home';

function App() {
  const [open, setOpen] = useState(false);

  return (
    <Router>
      <Navbar />

      <Routes>
        {/* <Route
          path="/"
          element={
            <>
              <HeroSection />
              <Features />
              <Choose />
              <SpecialMenu />
            </>
          }
        /> */}
        <Route path='/' element={<Home/>}/>
        <Route path="/about" element={<About />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
