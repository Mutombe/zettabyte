import React from 'react';
import Button from '../button/button';

const AboutSection = () => {
  return (
    <section className="py-16 bg-blue-500 text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-4">About Zettabyte</h2>
            <p className="mb-8">
              Zettabyte is a full-service software development and digital solutions company specializing in creating robust, scalable, and innovative technology solutions for businesses and organizations. With our comprehensive suite of services and commitment to excellence, we deliver cutting-edge solutions that drive digital transformation and operational efficiency.
            </p>
            <Button href="/about" className="bg-white text-blue-500 hover:bg-blue-200">
              Learn More
            </Button>
          </div>
          <div className="flex items-center justify-center">
            <img src="/zettabyte-team.jpg" alt="Zettabyte Team" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;