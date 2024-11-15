import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-500 text-white py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p>&copy; 2024 Zettabyte. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://facebook.com/zettabyte" target="_blank" rel="noopener noreferrer">
            <Facebook className="h-6 w-6 hover:text-blue-200" />
          </a>
          <a href="https://twitter.com/zettabyte" target="_blank" rel="noopener noreferrer">
            <Twitter className="h-6 w-6 hover:text-blue-200" />
          </a>
          <a href="https://linkedin.com/company/zettabyte" target="_blank" rel="noopener noreferrer">
            <Linkedin className="h-6 w-6 hover:text-blue-200" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;