import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Layout
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Sections
import TestimonialCard from './components/sections/TestimonialsCard';
import About from './components/sections/About';
import Contact from './components/sections/Contact';
import GlobalPresence from './components/sections/GlobalPresence';
import Hero from './components/sections/Hero';
import Industries from './components/sections/Industries';
import Insights from './components/sections/Insights';
import Services from './components/sections/Services';
import TechStack from './components/sections/TechStack';
import OurBusinesses from './components/sections/OurBusinesses'; // ✅ Make sure this file uses `export default`

// Pages
import OurStory from './components/CompanyStory/OurStory';
import ServicesPage from './components/Services/ServicesPage';
import IndustriesPage from './components/IndustriesPage';

// Lazy-load MegaMenuServices
const MegaMenuServices = lazy(() => import('./components/MegaMenus/MegaMenuServices'));

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Scroll to section if redirected with state
function ScrollToServices() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/' && location.state?.scrollToServices) {
      const section = document.getElementById('services');
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return null;
}

// Home Page Layout
function HomePage() {
  return (
    <>
      <Header />
      <ScrollToServices />
      <main>
        <Hero />
        <TestimonialCard />
        <About />
        <Services onServiceClick={() => {}} />
        <TechStack />
        <Industries />
        <GlobalPresence />
        <Insights />
        <OurBusinesses />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

// App Component with Routes
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/industries" element={<IndustriesPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:serviceId" element={<ServicesPage />} />
        <Route
          path="/services-portal"
          element={
            <Suspense fallback={<div className="text-center p-10">Loading services...</div>}>
              <div className="min-h-screen bg-gray-100 p-8">
                <div className="max-w-7xl mx-auto">
                  <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                    Our Services
                  </h1>
                  <MegaMenuServices />
                </div>
              </div>
            </Suspense>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
