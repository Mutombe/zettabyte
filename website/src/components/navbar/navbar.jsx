import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/">
      <img src="/zettabyte-logo.png" alt="Zettabyte Logo" className="h-8" />
    </Link>
  );
};

const NavLink = ({ to, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`hover:text-blue-200 transition-colors ${
        isActive ? 'font-medium text-white' : 'text-blue-200'
      }`}
    >
      {children}
    </Link>
  );
};

const Navbar = () => {
  return (
    <nav className="bg-blue-500 text-white py-4 px-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Logo />
        <div className="flex space-x-4">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/portfolio">Portfolio</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;