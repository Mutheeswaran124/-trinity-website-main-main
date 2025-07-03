
// 🔧 Replace it with:
import { useState, useEffect,lazy,  Suspense } from 'react';

import { Menu, X } from 'lucide-react';
import TrinityLogo from '../../Assets/trinity-logo.png';



import MegaMenuAbout from '../MegaMenus/MegaMenuAbout';

import MegaMenuTechStack from '../MegaMenus/MegaMenuTechStack';
import MegaMenuIndustries from '../MegaMenus/MegaMenuIndustries';
import MegaMenuInsights from '../MegaMenus/MegaMenuInsights';
import MegaMenuCareers from '../MegaMenus/MegaMenuCareers';


const MegaMenuServices = lazy(() => import('../MegaMenus/MegaMenuServices'));

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      // Close menu on scroll
      setActiveMenu(null);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (activeMenu && !target.closest('.mega-menu-container') && !target.closest('.nav-button')) {
        setActiveMenu(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [activeMenu]);

  const navLinks = [
    { name: 'About', key: 'about' },
    { name: 'Services', key: 'services' },
    { name: 'Tech Stack', key: 'tech-stack' },
    { name: 'Industries', key: 'industries' },
    { name: 'Insights', key: 'insights' },
    { name: 'Careers', key: 'careers' },
  ];

  const handleMenuClick = (key: string) => {
    if (activeMenu === key) {
      setActiveMenu(null); // Close if already open
    } else {
      setActiveMenu(key); // Open the clicked menu
    }
  };

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
        return <MegaMenuInsights onClose={() => setActiveMenu(null)} />;
      case 'careers':
        return <MegaMenuCareers />;
      default:
        return null;
    }
  };

  return (
    <>
      <header
        className={`fixed w-full z-50 transition-all duration-300 font-sans ${
          isScrolled ? 'bg-white shadow-md py-2' : 'bg-white py-3'
        }`}
        style={{ fontFamily: 'Poppins, sans-serif', height: '90px' }}
      >
        {/* Background Animated Blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute -top-32 -right-32 w-60 h-60 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob" />
          <div className="absolute -bottom-32 -left-32 w-60 h-60 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000" />
          <div className="absolute top-20 left-40 w-60 h-60 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000" />
        </div>

      {/* Main Nav Content */}
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center relative z-10 h-full">
          <a href="/" className="flex items-center">
            <img src={TrinityLogo} alt="Trinity Logo" className="h-12 md:h-14 w-auto" />

          </a>

            
          <nav className="hidden md:flex items-center space-x-8 ml-auto">
            {navLinks.map((link) => (
              <div key={link.key} className="relative">
                <button
                  onClick={() => handleMenuClick(link.key)}
                  className={`nav-button font-semibold text-base py-2 px-1 transition-colors duration-200 ${
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

          <a
            href="#contact"
            className="hidden md:inline-block font-semibold bg-blue-600 text-white px-6 py-2 rounded-md transition-colors hover:bg-blue-700 text-base ml-6"
          >
            Contact Us
          </a>

          <button className="md:hidden ml-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <X size={28} className="text-blue-600" />
            ) : (
              <Menu size={28} className="text-blue-600" />
            )}
          </button>
        </div>
      </header>

      {/* Mega Menu Overlay */}
      {activeMenu && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-20 backdrop-blur-sm">
          <div className="mega-menu-container absolute top-20 left-0 right-0 bg-white shadow-2xl border-t border-gray-200">
            <div className="container mx-auto px-6 py-12">
              <Suspense fallback={<div>Loading...</div>}>
                {renderMegaMenu(activeMenu)}
              </Suspense>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-white pt-20">
          <div className="container mx-auto px-4 py-6">
            <nav className="space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.key}
                  onClick={() => {
                    handleMenuClick(link.key);
                    setIsOpen(false);
                  }}
                  className="block w-full text-left font-semibold text-blue-800 hover:text-blue-600 py-3 px-4 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  {link.name}
                </button>
              ))}
              <a
                href="#contact"
                className="block w-full text-center font-semibold bg-blue-600 text-white px-6 py-3 rounded-md transition-colors hover:bg-blue-700 mt-6"
              >
                Contact Us
              </a>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;