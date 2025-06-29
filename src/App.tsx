import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Global Styles
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Layout
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Homepage Sections
import Hero from './components/sections/Hero';
import TestimonialCard from './components/sections/TestimonialsCard';
import About from './components/sections/About';
import Services from './components/sections/Services';
import TechStack from './components/sections/TechStack';
import Industries from './components/sections/Industries';
import GlobalPresence from './components/sections/GlobalPresence';
import Insights from './components/sections/Insights';
import Contact from './components/sections/Contact';

// Pages
import OurStory from './components/CompanyStory/OurStory';
import ServicesPage from './components/Services/ServicesPage';
import IndustriesPage from './components/IndustriesPage';
import MegaMenuServices from './components/MegaMenus/MegaMenuServices';

// HomePage with scroll-to-hash
const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 200);
      }
    }
  }, [location]);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <TestimonialCard />
        <About />
        <Services />
        <TechStack />
        <Industries />
        <GlobalPresence />
        <Insights />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/industries" element={<IndustriesPage />} />
        <Route path="/services" element={<Services />} /> {/* Optional: main section list */}
        <Route path="/services/:serviceId" element={<ServicesPage />} /> {/* ✅ Fix: dynamic route */}
        <Route
          path="/services-portal"
          element={
            <div className="min-h-screen bg-gray-100 p-8">
              <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center font-[Poppins]">
                  Our Services
                </h1>
                <MegaMenuServices />
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
