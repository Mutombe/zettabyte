import React from 'react';
import { Code, CloudUpload, Laptop, Clipboard, TabletSmartphone, Globe, SquareDashed, Database, BarChart } from 'lucide-react';

const ServiceCard = ({ icon, title, description }) => (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="text-blue-500 w-12 h-12 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );

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

export const ServicesPage = () => {
    const services = [
      {
        category: "Software Development",
        description: "Custom software solutions tailored to your business needs",
        items: [
          {
            icon: <Code />,
            title: "Web Applications",
            description: "Enterprise-grade web applications with powerful functionality and intuitive UX"
          },
          {
            icon: <TabletSmartphone/>,
            title: "Mobile Applications",
            description: "Native and cross-platform mobile solutions for iOS and Android"
          },
          {
            icon: <Globe />,
            title: "Web Development",
            description: "Professional websites that serve as powerful business tools"
          }
        ]
      },
      {
        category: "Cloud Services",
        description: "Comprehensive cloud solutions for modern businesses",
        items: [
          {
            icon: <CloudUpload />,
            title: "Infrastructure as a Service",
            description: "Scalable virtualized computing infrastructure resources"
          },
          {
            icon: <SquareDashed />,
            title: "Software as a Service",
            description: "Subscription-based software delivery over the internet"
          },
          {
            icon: <Database />,
            title: "Cloud Storage",
            description: "Secure and scalable cloud storage solutions"
          }
        ]
      },
      {
        category: "IT Consulting",
        description: "Strategic technology guidance for your business",
        items: [
          {
            icon: <BarChart />,
            title: "Technology Strategy",
            description: "Comprehensive technology planning aligned with business goals"
          },
          {
            icon: <Laptop />,
            title: "Digital Transformation",
            description: "Guide your business through digital evolution"
          },
          {
            icon: <Clipboard />,
            title: "Project Management",
            description: "Expert IT project planning and execution"
          }
        ]
      }
    ];
  
    return (
      <div className="bg-gray-50">
        {/* Services Hero */}
        <section className="bg-blue-500 text-white py-20">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl font-bold mb-6">Our Services</h1>
            <p className="text-xl">Comprehensive technology solutions for your business success</p>
          </div>
        </section>
  
        {/* Service Categories */}
        {services.map((category, index) => (
          <section key={index} className={`py-16 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}`}>
            <div className="container mx-auto px-6">
              <h2 className="text-3xl font-bold mb-4">{category.category}</h2>
              <p className="text-gray-600 mb-8">{category.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {category.items.map((service, idx) => (
                  <ServiceCard key={idx} {...service} />
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>
    );
  };

export default ServicesSection;