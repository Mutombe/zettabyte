import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61569849265472" },
    { icon: Instagram, href: "https://www.instagram.com/zzettabyte/" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/zzettabyte/" }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-blue-900 via-blue-600 to-blue-800 text-white py-12 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            backgroundSize: "30px 30px"
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
              Zettabyte
            </h3>
            <p className="text-blue-100">
              Zettabyte delivers innovative, secure, and scalable digital solutions that empower organizations to thrive in the digital age.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="hover:text-blue-200 transition-colors bg-white/10 p-2 rounded-lg backdrop-blur-lg"
                  >
                    <Icon className="h-5 w-5" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
              Quick Links
            </h3>
            <div className="flex flex-col space-y-2">
              {['Services', 'Portfolio', 'About', 'Contact'].map((link, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link 
                    to={`/${link.toLowerCase().replace(' ', '')}`}
                    className="hover:text-blue-200 transition-colors flex items-center space-x-2"
                  >
                    <span>→</span>
                    <span>{link}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
              Contact Us
            </h3>
            <div className="space-y-4">
              {[
                { Icon: Mail, text: "simbamtombe@gmail.com" },
                { Icon: Phone, text: "+263 78 594 8128" },
                { Icon: MapPin, text: "Woodlands, Waterfalls Harare" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 4 }}
                  className="flex items-center space-x-3 bg-white/10 p-3 rounded-lg backdrop-blur-lg"
                >
                  <item.Icon size={18} className="text-blue-200" />
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 pt-8 border-t border-white/20"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-100">&copy; {new Date().getFullYear()} Zettabyte. All rights reserved.</p>
            <div className="mt-4 md:mt-0 space-x-4">
              {['Privacy Policy', 'Terms of Service'].map((link, index) => (
                <Link
                  key={index}
                  to={`/${link.toLowerCase().replace(' ', '')}`}
                  className="hover:text-blue-200 transition-colors"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;