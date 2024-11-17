import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Menu, X, Download } from 'lucide-react';
import { motion } from "framer-motion";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center space-x-3 group">
      <div className="relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-200" />
        <img 
          src="/zet.png" 
          alt="Zettabyte Logo" 
          className="relative h-10 w-full bg-white rounded-lg transform group-hover:scale-105 transition duration-200"
        />
      </div>
      <span className="text-xl font-bold sm:block bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
        Zettabyte
      </span>
    </Link>
  );
};

const NavLink = ({ to, children, onClick }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      onClick={onClick}
      className={`relative px-4 py-2 rounded-lg transition-all duration-300 overflow-hidden group ${
        isActive 
          ? 'text-blue-600 font-medium' 
          : 'text-blue-100 hover:text-white'
      }`}
    >
      {/* Background effect */}
      <div className={`absolute inset-0 rounded-lg transition-all duration-300 ${
        isActive 
          ? 'bg-white opacity-100' 
          : 'bg-white/10 opacity-0 group-hover:opacity-100'
      }`} />
      
      {/* Text */}
      <span className="relative z-10">{children}</span>
      
      {/* Underline effect */}
      <div className={`absolute bottom-0 left-0 w-full h-0.5 bg-white transform origin-left transition-transform duration-300 ${
        isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
      }`} />
    </Link>
  );
};

const DownloadButton = () => {
  return (
    <a
      href="/z-b-profile.pdf"
      download
      className="relative group flex items-center space-x-2 bg-gradient-to-r from-white to-blue-100 
                 text-blue-600 px-4 py-2 rounded-lg transition-all duration-300 
                 hover:shadow-lg hover:shadow-white/20"
    >
      {/* Hover glow effect */}
      <div className="absolute inset-0 rounded-lg bg-white opacity-0 group-hover:opacity-20 
                    blur-sm transition-opacity duration-300" />
      
      {/* Content */}
      <Download size={18} className="relative z-10 group-hover:scale-110 transition-transform duration-300" />
      <span className="relative z-10 font-medium">Business Profile</span>
    </a>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300  ${
      scrolled 
        ? 'bg-blue-900/80 backdrop-blur-lg shadow-lg shadow-blue-900/20' 
        : 'bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900'
    }`}>
      <div className="container mx-auto py-4 px-6">
        <div className="flex justify-between items-center">
          <Logo />
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex space-x-2">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/services">Services</NavLink>
              <NavLink to="/portfolio">Portfolio</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </div>
            <div className="ml-4">
              <DownloadButton />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={toggleMenu}
            className="md:hidden relative group p-2 rounded-lg transition-colors duration-300
                     hover:bg-white/10"
          >
            {isOpen ? <X size={24} className='text-white'/> : <Menu size={24} className='text-white'/>}
            <div className="absolute inset-0 rounded-lg bg-white opacity-0 group-hover:opacity-10 
                          blur-sm transition-opacity duration-300" />
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-4 py-4 space-y-2 border-t border-white/10"
          >
            <div className="flex flex-col space-y-2">
              <NavLink to="/" onClick={closeMenu}>Home</NavLink>
              <NavLink to="/services" onClick={closeMenu}>Services</NavLink>
              <NavLink to="/portfolio" onClick={closeMenu}>Portfolio</NavLink>
              <NavLink to="/about" onClick={closeMenu}>About</NavLink>
              <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
            </div>
            <div className="pt-4 border-t border-white/10">
              <DownloadButton />
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;