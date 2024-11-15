import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import HeroSection from './components/hero/hero';
import PortfolioSection from './components/portfolio/portfolio';
import ServicesSection from './components/services/services';
import AboutSection from './components/about/about';
import ContactSection from './components/contact/contact';


const ZettabyteWebsite = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <ToastContainer />
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <PortfolioSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default ZettabyteWebsite;
