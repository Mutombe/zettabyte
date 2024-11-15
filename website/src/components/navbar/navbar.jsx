import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Menu, X, Download } from 'lucide-react';

const Logo = () => {
  return (
    <Link to="/" className="flex items-center space-x-2">
      <img src="/zettabyte.png" alt="Zettabyte Logo" className="h-10 w-10 bg-white rounded-lg" />
      <span className="text-lg font-bold hidden sm:block">Zettabyte</span>
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
      className={`px-4 py-2 rounded-lg transition-all duration-200 ${
        isActive 
          ? 'bg-white text-blue-500 font-medium shadow-sm' 
          : 'text-white hover:bg-blue-400'
      }`}
    >
      {children}
    </Link>
  );
};

const DownloadButton = () => {
  return (
    <a
      href="/z-b-profile.pdf"
      download
      className="flex items-center space-x-2 bg-white text-blue-500 px-4 py-2 rounded-lg 
                 hover:bg-blue-50 transition-colors duration-200 shadow-sm"
    >
      <Download size={18} />
      <span className="">Business Profile</span>
    </a>
  );
};

 const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-blue-500 text-white py-4 px-6 shadow-md sticky top-0 z-50">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Logo />
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
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
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 hover:bg-blue-400 rounded-lg transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 py-4 space-y-2">
            <div className="flex flex-col space-y-2">
              <NavLink to="/" onClick={closeMenu}>Home</NavLink>
              <NavLink to="/services" onClick={closeMenu}>Services</NavLink>
              <NavLink to="/portfolio" onClick={closeMenu}>Portfolio</NavLink>
              <NavLink to="/about" onClick={closeMenu}>About</NavLink>
              <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
            </div>
            <div className="pt-4">
              <DownloadButton />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;