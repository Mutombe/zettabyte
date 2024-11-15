import React from 'react';
import Button from '../button/button';

const HeroSection = () => {
  return (
    <section className="bg-blue-500 text-white py-20">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Transforming Businesses Through Technology</h1>
        <p className="text-lg mb-8">Zettabyte delivers innovative, secure, and scalable digital solutions that empower organizations to thrive in the digital age.</p>
        <Button href="/contact" className="bg-white text-blue-500 hover:bg-blue-200">Get Started</Button>
      </div>
    </section>
  );
};

export default HeroSection;