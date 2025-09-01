import React, { useState, useEffect } from "react";
import logo from '../assets/cgcu.webp';
import '../styles/header.css';

function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const toggleMobileMenu = () => {
      setMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
      const handleScroll = () => {
          setIsScrolled(window.scrollY > 50);
      };
      window.addEventListener('scroll', handleScroll);
      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);

  
  const linkClasses = "link-underline text-lg font-medium transition-colors duration-300 open-sans-hharryy";
  
  const navStateClasses = isScrolled 
    ? "text-gray-800 hover:text-rose-800" 
    : "text-white hover:text-gray-200";

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
        
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            
            {/* Logo Section */}
            <div className="flex-shrink-0">
              <img src={logo} alt="Logo" className="h-14 w-auto"></img>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex md:items-center md:space-x-12">
              <a href="#overview" className={`${linkClasses} ${navStateClasses}`}>Overview</a>
              <a href="#events" className={`${linkClasses} ${navStateClasses}`}>Event Details</a>
              <a href="#partnerships" className={`${linkClasses} ${navStateClasses}`}>Partnerships</a>
              <a href="#contactUs" className={`${linkClasses} ${navStateClasses}`}>Contact Us</a>
            </div>

            {/* Call to Action Button*/}
            {/* <div className="hidden md:block">
              <button className={`open-sans-hharryy font-semibold py-3 px-6 rounded-full transition-all duration-300 
                              ${isScrolled ? 'border-2 border-rose-800 text-rose-800 hover:bg-rose-800 hover:text-white' 
                                          : 'border-2 border-white text-white hover:bg-white hover:text-black'}`}>
                Register Now
              </button>
            </div> */}

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={toggleMobileMenu} className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-800 ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
                <span className="sr-only">Open main menu</span>
                {isMobileMenuOpen ? (
                  <svg className="h-7 w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                ) : (
                  <svg className="h-7 w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>
                )}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden bg-white`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200">
            <a href="#overview" className="text-gray-800 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium">Overview</a>
            <a href="#events" className="text-gray-800 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium">Event Details</a>
            <a href="#partnerships" className="text-gray-800 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium">Partnerships</a>
            <a href="#contactUs" className="text-gray-800 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium">Contact Us</a>
            <div className="pt-4 pb-2 px-2">
              <button className="w-full bg-rose-800 text-white font-semibold py-2 px-4 rounded-full hover:bg-rose-700 transition-colors duration-300">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;