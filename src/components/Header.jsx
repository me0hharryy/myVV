import React,{ useState, useEffect} from "react";
import logo from '../assets/hharryy.svg'
import '../styles/header.css'

function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const toggleMobileMenu = () => {
      setMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
          const handleScroll = () => {
              setIsScrolled(window.scrollY > 10);
          };
          window.addEventListener('scroll', handleScroll);
          return () => {
              window.removeEventListener('scroll', handleScroll);
          };
      }, []);

  return (
    <>
      
      <nav className={`fixed top-0 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 rounded-full mt-2 w-11/12 max-w-7xl ${isScrolled ? 'bg-white/40 backdrop-blur-sm' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    
                    {/* Logo Section */}
                    <div className="flex-shrink-0">
                        <img src={logo} alt="Logo" className="h-30 w-auto mt-1"></img>
                    </div>

                    {/* Desktop Navigation Links */}
                    <div className="hidden md:flex md:items-center md:space-x-10">
                        <a href="#" className={`link-underline text-l font-medium transition-colors duration-300 open-sans-hharryy ${isScrolled ? 'text-black hover:text-gray-900' : 'text-black hover:text-rose-800'}`}>Overview</a>
                        <a href="#" className={`link-underline text-l font-medium transition-colors duration-300 open-sans-hharryy ${isScrolled ? 'text-black hover:text-gray-900' : 'text-black hover:text-rose-800'}`}>Event Details</a>
                        <a href="#" className={`link-underline text-l font-medium transition-colors duration-300 open-sans-hharryy ${isScrolled ? 'text-black hover:text-gray-900' : 'text-black hover:text-rose-800'}`}>Partnerships</a>
                        <a href="#" className={`link-underline text-l font-medium transition-colors duration-300 open-sans-hharryy ${isScrolled ? 'text-black hover:text-gray-900' : 'text-black hover:text-rose-800'}`}>More</a>
                    </div>

                    {/* Call to Action Button (Desktop) */}
                    <div className="hidden md:block">
                         <button className="open-sans-hharryy border-2 border-rose-800 text-rose-800 hover:bg-rose-800 hover:text-white font-semibold py-2 px-5 rounded-full transition-all duration-300 ">
                            Register Now
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={toggleMobileMenu} className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-800 transition-colors duration-300 ${isScrolled ? 'text-gray-700' : 'text-rose-800'}`}>
                            <span className="sr-only">Open main menu</span>
                            {isMobileMenuOpen ? (
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                            ) : (
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu (conditionally rendered) */}
            <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden bg-white/60 backdrop-blur-sm`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200">
                    <a href="#" className="text-black hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium">Overview</a>
                    <a href="#" className="text-black hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium">Event Details</a>
                    <a href="#" className="text-black hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium">Partnerships</a>
                    <a href="#" className="text-black hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium">More</a>
                    <div className="pt-4 pb-2 px-2">
                        <button className="w-full bg-rose-800 text-white font-semibold py-2 px-4 rounded-full hover:bg-rose-700 transition-colors duration-300">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </nav>
      
      
      
    </>
  );
}

export default Header