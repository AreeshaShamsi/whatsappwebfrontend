import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom"; // Make sure you have React Router set up

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full px-6 py-4 flex items-center justify-between bg-white shadow-sm sticky top-0 z-50">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <span className="text-xl font-extrabold text-gray-900 tracking-tight">Webbifi.</span>
      </div>

      {/* Desktop Nav Links */}
      <nav className="hidden md:flex space-x-10 text-sm font-semibold text-gray-900">
        <a href="#home" className="relative group hover:text-black transition">
          HOME
          <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a href="#features" className="relative group hover:text-black transition">
          FEATURES
          <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a href="#pricing" className="relative group hover:text-black transition">
          PRICING
          <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a href="#guide" className="relative group hover:text-black transition">
          GUIDE
          <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
        </a>
      </nav>

      {/* CTA Buttons */}
      <div className="hidden md:flex items-center space-x-4">
        <Link
          to="/login"
          className="font-semibold rounded-full border border-green-600 px-4 py-2 text-gray-700 hover:text-black transition"
        >
          Login
        </Link>
        <button className="px-5 py-2 rounded-full bg-white text-gray-900 border-green-600 border-2 font-semibold hover:opacity-90 transition">
          Get Started
        </button>
      </div>

      {/* Hamburger Icon */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-2xl text-gray-900">
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md px-6 py-4 md:hidden z-40">
          <nav className="flex flex-col space-y-4 text-sm font-semibold text-gray-900">
            <a href="#home" className="relative group hover:text-black transition">
              HOME
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#features" className="relative group hover:text-black transition">
              FEATURES
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#pricing" className="relative group hover:text-black transition">
              PRICING
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#guide" className="relative group hover:text-black transition">
              GUIDE
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>
          <div className="mt-4 flex flex-col space-y-3">
            <Link
              to="/login"
              className="w-full text-center font-semibold rounded-full border border-green-600 px-4 py-2 text-gray-700 hover:text-black transition"
            >
              Login
            </Link>
            <button className="w-full px-5 py-2 rounded-full bg-white text-gray-900 border-green-600 border-2 font-semibold hover:opacity-90 transition">
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
