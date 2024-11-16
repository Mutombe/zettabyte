import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
      <footer className="bg-blue-500 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Zettabyte</h3>
              <p className="text-blue-100">
              Zettabyte delivers innovative, secure, and scalable digital solutions that empower organizations to thrive in the digital age.
              </p>
              <div className="flex space-x-4">
                <a href="https://facebook.com/zettabyte" className="hover:text-blue-200 transition-colors">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="https://twitter.com/zettabyte" className="hover:text-blue-200 transition-colors">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="https://linkedin.com/company/zettabyte" className="hover:text-blue-200 transition-colors">
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
  
            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Quick Links</h3>
              <div className="flex flex-col space-y-2">
                <Link to="/services" className="hover:text-blue-200 transition-colors">Services</Link>
                <Link to="/portfolio" className="hover:text-blue-200 transition-colors">Portfolio</Link>
                <Link to="/about" className="hover:text-blue-200 transition-colors">About Us</Link>
                <Link to="/contact" className="hover:text-blue-200 transition-colors">Contact</Link>
              </div>
            </div>
  
            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Contact Us</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Mail size={18} />
                  <span>simbamtombe@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone size={18} />
                  <span>+263 78 594 8128</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin size={18} />
                  <span>Woodlands, Waterfalls Harare</span>
                </div>
              </div>
            </div>
          </div>
  
          {/* Bottom Bar */}
          <div className="mt-8 pt-8 border-t border-blue-400">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p>&copy; {new Date().getFullYear()} Zettabyte. All rights reserved.</p>
              <div className="mt-4 md:mt-0 space-x-4">
                <Link to="/privacy" className="hover:text-blue-200 transition-colors">Privacy Policy</Link>
                <Link to="/terms" className="hover:text-blue-200 transition-colors">Terms of Service</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  

export default Footer;