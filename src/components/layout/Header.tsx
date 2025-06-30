import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Menu, X } from 'lucide-react';
import TrinityLogo from '../../Assets/trinity-logo.png';

const MegaMenuAbout = lazy(() => import('../MegaMenus/MegaMenuAbout'));
import MegaMenuServices from '../MegaMenus/MegaMenuServices';
const MegaMenuTechStack = lazy(() => import('../MegaMenus/MegaMenuTechStack'));
const MegaMenuIndustries = lazy(() => import('../MegaMenus/MegaMenuIndustries'));
const MegaMenuInsights = lazy(() => import('../MegaMenus/MegaMenuInsights'));
const MegaMenuCareers = lazy(() => import('../MegaMenus/MegaMenuCareers'));

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      setActiveMenu(null);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', key: 'about' },
    { name: 'Services', key: 'services' },
    { name: 'Tech Stack', key: 'tech-stack' },
    { name: 'Industries', key: 'industries' },
    { name: 'Insights', key: 'insights' },
    { name: 'Careers', key: 'careers' },
  ];

  const renderMegaMenu = (key: string) => {
    switch (key) {
      case 'about':
        return <MegaMenuAbout />;
      case 'services':
        return <MegaMenuServices />;
      case 'tech-stack':
        return <MegaMenuTechStack />;
      case 'industries':
        return <MegaMenuIndustries />;
      case 'insights':
        return <MegaMenuInsights />;
      case 'careers':
        return <MegaMenuCareers />;
      default:
        return null;
    }
  };

  return (
    <>
      <header
<<<<<<< HEAD
        className={`fixed w-full z-50 transition-all duration-300 font-sans ${
=======
        className={`fixed w-full z-50 transition-all duration-300 font-sans -mt-2 ${
>>>>>>> e44a78a (commit)
          isScrolled ? 'bg-white shadow-md py-2' : 'bg-white py-3'
        }`}
        style={{ fontFamily: 'Poppins, sans-serif' }}
      >
        {/* Background Blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute -top-32 -right-32 w-60 h-60 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob" />
          <div className="absolute -bottom-32 -left-32 w-60 h-60 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000" />
          <div className="absolute top-20 left-40 w-60 h-60 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000" />
        </div>

        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center relative z-10">
          <a href="/" className="flex items-center">
            <img src={TrinityLogo} alt="Trinity Logo" className="h-12 md:h-14 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 ml-auto">
            {navLinks.map((link) => (
              <div
                key={link.key}
                className="relative"
                onMouseEnter={() => setActiveMenu(link.key)}
              >
                <button
                  className={`font-semibold text-base py-2 px-1 transition-colors duration-200 ${
                    activeMenu === link.key
                      ? 'text-blue-700 border-b-2 border-blue-700'
                      : 'text-blue-800 hover:text-blue-600'
                  }`}
                >
                  {link.name}
                </button>
              </div>
            ))}
          </nav>

          {/* Contact Us Button */}
          <a
            href="#contact"
            className="hidden md:inline-block font-semibold bg-blue-600 text-white px-6 py-2 rounded-md transition-colors hover:bg-blue-700 text-base ml-6"
          >
            Contact Us
          </a>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden ml-2" onClick={() => setIsOpen(!isOpen)}>
<<<<<<< HEAD
            {isOpen ? <X size={28} className="text-blue-600" /> : <Menu size={28} className="text-blue-600" />}
=======
            {isOpen ? (
              <X size={28} className="text-blue-600" />
            ) : (
              <Menu size={28} className="text-blue-600" />
            )}
>>>>>>> e44a78a (commit)
          </button>
        </div>
      </header>

      {/* Mega Menu Overlay */}
      {activeMenu && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-20 backdrop-blur-sm"
          onClick={() => setActiveMenu(null)}
        >
          <div
            className="absolute top-20 left-0 right-0 bg-white shadow-2xl border-t border-gray-200"
            onMouseEnter={() => setActiveMenu(activeMenu)}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <div className="container mx-auto px-6 py-12">
              <Suspense fallback={<div>Loading...</div>}>
                {renderMegaMenu(activeMenu)}
              </Suspense>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
