import React from 'react';
import logo from '../assets/hharryy.svg';

const Loader = ({ isFadingOut }) => {
  return (
    <div 
      className={`fixed inset-0 bg-rose-100 z-[100] flex flex-col items-center justify-center transition-opacity duration-700 ease-in-out
                  ${isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
    >
      <img src={logo} alt="Loading Logo" className="w-48 h-48 loader-animation" />
      
    </div>
  );
};

export default Loader;