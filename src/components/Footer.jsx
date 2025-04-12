import React from 'react';

function Footer() {
  return (
    <footer className="bg-emerald-600 text-white py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Content */}
        <div className="flex flex-col sm:flex-row justify-between items-center">
          {/* Logo and Description */}
          <div className="text-center sm:text-left mb-4 sm:mb-0">
            <h1 className="text-2xl font-bold">AI Wallet-Hub</h1>
            <p className="text-sm mt-2">
              Your trusted partner in managing finances with the power of AI.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center sm:justify-end gap-4">
            <a
              href="/"
              className="text-sm hover:text-gray-200 transition duration-300"
            >
              Home
            </a>
            <a
              href="/about"
              className="text-sm hover:text-gray-200 transition duration-300"
            >
              About
            </a>
            <a
              href="/services"
              className="text-sm hover:text-gray-200 transition duration-300"
            >
              Services
            </a>
            <a
              href="/contact"
              className="text-sm hover:text-gray-200 transition duration-300"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-6 text-sm">
          © {new Date().getFullYear()} AI Wallet-Hub. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;