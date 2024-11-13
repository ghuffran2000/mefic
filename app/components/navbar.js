"use client";
import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="w-full">
      {/* Top bar for all screen sizes */}
      <div className="bg-[#1E2538] text-white flex justify-center lg:justify-end items-center py-1 px-4 lg:px-12 max-w-full">
        <div className="flex flex-wrap items-center space-x-3 justify-center lg:justify-end w-full max-w-full">
          <div className="flex items-center space-x-3">
            <img src="/call-icon.svg" alt="Call Icon" className="w-5 h-5" />
            <span>+123 (456) 7890</span>
          </div>
          <div className="flex items-center space-x-3">
            <img src="/sms-icon.svg" alt="SMS Icon" className="w-5 h-5" />
            <span>info@domain.com</span>
          </div>
          <div className="flex space-x-3">
            <img src="/facebook.svg" alt="Facebook Icon" className="w-5 h-5" />
            <img src="/linkedin.svg" alt="LinkedIn Icon" className="w-5 h-5" />
            <img src="/twitter.svg" alt="Twitter Icon" className="w-5 h-5" />
          </div>
          <a href="#language" className="text-white">العربية</a>
        </div>
      </div>

      {/* Main navigation bar */}
      <nav className="bg-[#1E2538] text-white py-4 px-4 lg:px-12 flex justify-between items-center max-w-full">
        {/* Logo */}
        <div className="w-36 h-15 ml-[2%]">
          <img src="/logo.png" alt="Logo" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-6 items-center">
          <ul className="flex space-x-6 items-center">
            <li className="flex items-center space-x-1">
              <Link href="">Our Services</Link>
              <img src="/down-arrow.svg" alt="Down Arrow" className="w-4 h-4" />
            </li>
            <li className="flex items-center space-x-1">
              <Link href="">About MEFIC</Link>
              <img src="/down-arrow.svg" alt="Down Arrow" className="w-4 h-4" />
            </li>
            <li className="flex items-center space-x-1">
              <Link href="">Media Center</Link>
              <img src="/down-arrow.svg" alt="Down Arrow" className="w-4 h-4" />
            </li>
            <li><Link href="">Careers</Link></li>
          </ul>
          <button className="bg-[#E95A0C] h-10 w-40 rounded-md">
            <Link href="">Book a Consultant</Link>
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <img src="/menu-icon.svg" alt="Menu Icon" className="w-10 h-10" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 bg-[#1E2538] bg-opacity-95 z-50 flex flex-col items-center p-8 space-y-4 text-center">
            {/* Close Button */}
            <button onClick={closeMenu} className="self-end mb-4 text-white">
              <img src="/close-icon.svg" alt="Close Icon" className="w-10 h-10" />
            </button>

            {/* Menu Links */}
            <ul className="space-y-4 text-lg">
              <li><Link href="" onClick={closeMenu}>Our Services</Link></li>
              <li><Link href="" onClick={closeMenu}>About MEFIC</Link></li>
              <li><Link href="" onClick={closeMenu}>Media Center</Link></li>
              <li><Link href="" onClick={closeMenu}>Careers</Link></li>
            </ul>

            {/* Book a Consultant Button */}
            <button className="bg-[#E95A0C] h-10 w-40 rounded-md mt-4">
              <Link href="" onClick={closeMenu}>Book a Consultant</Link>
            </button>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
