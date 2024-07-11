import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-300 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">MyApp</div>
        <div className="block md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
        <div className={`w-full md:flex md:items-center md:w-auto ${isOpen ? '' : 'hidden'}`}>
          <ul className="text-white flex flex-col md:flex-row md:space-x-4 mt-2 md:mt-0">
            <li><a href="#home" className="block px-4 py-2">Home</a></li>
            <li><a href="#about" className="block px-4 py-2">About</a></li>
            <li><a href="#services" className="block px-4 py-2">Services</a></li>
            <li><a href="#contact" className="block px-4 py-2">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
