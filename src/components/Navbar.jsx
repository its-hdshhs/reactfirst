import React, { useState } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-emerald-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl sm:text-3xl text-white">AI Wallet-Hub</h1>

        {/* Hamburger Icon */}
        <button
          className="text-white text-2xl sm:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          ☰
        </button>

        {/* Sliding Menu */}
        <div
          className={`fixed top-0 left-0 w-full h-1/2 bg-emerald-700 bg-opacity-90 text-white transform ${
            isMenuOpen ? 'translate-y-0' : '-translate-y-full'
          } transition-transform duration-300 sm:hidden`}
        >
          {/* Close Button */}
          <button
            className="text-white text-2xl absolute top-4 right-4 focus:outline-none"
            onClick={toggleMenu}
          >
            ✕
          </button>

          {/* Navigation Links */}
          <div className="flex flex-col gap-6 mt-16 px-6">
            <a
              href="#home"
              className="text-lg hover:text-gray-200 transition duration-300"
              onClick={toggleMenu}
            >
              Home
            </a>
            <a
              href="#about"
              className="text-lg hover:text-gray-200 transition duration-300"
              onClick={toggleMenu}
            >
              About
            </a>
            <a
              href="#gallery"
              className="text-lg hover:text-gray-200 transition duration-300"
              onClick={toggleMenu}
            >
              Gallery
            </a>
            <a
              href="#contact"
              className="text-lg hover:text-gray-200 transition duration-300"
              onClick={toggleMenu}
            >
              Contact
            </a>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden sm:flex flex-row gap-4 sm:gap-10">
          <a
            href="#home"
            className="text-lg sm:text-xl text-white hover:text-gray-200 transition duration-300"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-lg sm:text-xl text-white hover:text-gray-200 transition duration-300"
          >
            About
          </a>
          <a
            href="#gallery"
            className="text-lg sm:text-xl text-white hover:text-gray-200 transition duration-300"
          >
            Gallery
          </a>
          <a
            href="#contact"
            className="text-lg sm:text-xl text-white hover:text-gray-200 transition duration-300"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;