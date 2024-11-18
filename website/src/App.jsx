import React from "react";
import { ToastContainer } from "react-toastify";
import { Routes, Route, useLocation } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import HeroSection from "./components/hero/hero";
import { PortfolioPage } from "./components/portfolio/portfolio";
import PortfolioSection from "./components/portfolio/portfolio";
import { ServicesPage } from "./components/services/services";
import ServicesSection from "./components/services/services";
import { AboutPage } from "./components/about/about";
import AboutSection from "./components/about/about";
import { ContactPage } from "./components/contact/contact";
import ContactSection from "./components/contact/contact";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const ZettabyteWebsite = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <ToastContainer />
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <ServicesSection />
                <PortfolioSection />
                <AboutSection />
                <ContactSection />
              </>
            }
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default ZettabyteWebsite;
