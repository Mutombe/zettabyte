import React from 'react';
import { Code, CloudUpload, Laptop, Clipboard } from 'lucide-react';

const ServiceCard = ({ icon, title, description }) => {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 hover:scale-105 transition-transform">
        <div className="flex items-center mb-4">
          {icon}
          <h3 className="text-xl font-bold ml-4">{title}</h3>
        </div>
        <p>{description}</p>
      </div>
    );
  };

const ServicesSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard
            icon={<Code className="h-8 w-8" />}
            title="Software Development"
            description="Our expert team specializes in creating robust, scalable, and innovative web, mobile, and desktop applications."
          />
          <ServiceCard
            icon={<CloudUpload className="h-8 w-8" />}
            title="Cloud Services"
            description="We offer a range of cloud solutions, including IaaS, SaaS, and cloud storage, to empower your business in the digital age."
          />
          <ServiceCard
            icon={<Laptop className="h-8 w-8" />}
            title="IT Consulting"
            description="Our IT consultants help you develop a comprehensive technology strategy, drive digital transformation, and optimize your infrastructure."
          />
          <ServiceCard
            icon={<Clipboard className="h-8 w-8" />}
            title="Project Management"
            description="We assist businesses in effectively managing IT projects, from planning and budgeting to execution and delivery."
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;