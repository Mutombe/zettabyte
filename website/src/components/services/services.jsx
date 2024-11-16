import React from 'react';
import { Code, CloudUpload, Laptop, Clipboard, TabletSmartphone, Globe, SquareDashed, Database, BarChart } from 'lucide-react';
import { motion } from "framer-motion";
         
const ServiceCard = ({ icon: Icon, title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ y: -5, scale: 1.02 }}
    className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 
              hover:bg-white/20 transition-all duration-300 group"
  >
    <div className="text-blue-200 w-12 h-12 mb-6 group-hover:scale-110 transition-transform">
      {Icon}
    </div>
    <h3 className="text-xl font-bold mb-4 text-white">{title}</h3>
    <p className="text-blue-100">{description}</p>
  </motion.div>
);

// Services Section
const ServicesSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-800 via-blue-600 to-blue-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200"
        >
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard
            icon={<Code className="h-8 w-8" />}
            title="Software Development"
            description="Our expert team specializes in creating robust, scalable, and innovative web, mobile, and desktop applications."
            delay={0.1}
          />
          <ServiceCard
            icon={<CloudUpload className="h-8 w-8" />}
            title="Cloud Services"
            description="We offer a range of cloud solutions, including IaaS, SaaS, and cloud storage, to empower your business in the digital age."
            delay={0.2}
          />
          <ServiceCard
            icon={<Laptop className="h-8 w-8" />}
            title="IT Consulting"
            description="Our IT consultants help you develop a comprehensive technology strategy, drive digital transformation, and optimize your infrastructure."
            delay={0.3}
          />
          <ServiceCard
            icon={<Clipboard className="h-8 w-8" />}
            title="Project Management"
            description="We assist businesses in effectively managing IT projects, from planning and budgeting to execution and delivery."
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
};



const ServiceCards = ({ icon, title, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.05 }}
    className="bg-white/10 p-8 rounded-2xl backdrop-blur-lg border border-white/20 
              hover:bg-white/20 transition-all duration-300 relative group"
  >
    {/* Gradient border effect */}
    <motion.div
      className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-400 
                 rounded-2xl blur opacity-0 group-hover:opacity-50 transition duration-300"
    />
    
    {/* Content */}
    <div className="relative">
      <div className="mb-6 p-3 bg-blue-500/20 rounded-lg w-fit">
        {icon} {/* Direct rendering of the icon prop */}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
      <p className="text-blue-100">{description}</p>
    </div>
  </motion.div>
);

const CategorySection = ({ category, description, items, index }) => (
  <motion.section
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: 0.2 }}
    className="py-20 relative overflow-hidden"
  >
    {/* Background gradient */}
    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-800/90 to-blue-900/90" />
    
    {/* Animated background pattern */}
    <motion.div
      className="absolute inset-0 opacity-20"
      animate={{
        backgroundPosition: ['0% 0%', '100% 100%'],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        repeatType: 'reverse',
      }}
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: '30px 30px',
      }}
    />

    <div className="container mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold mb-4 text-white">{category}</h2>
        <p className="text-xl text-blue-100 max-w-2xl mx-auto">{description}</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.map((service, idx) => (
          <ServiceCards 
            key={idx}
            icon={React.cloneElement(service.icon, { 
              className: "w-6 h-6 text-blue-200" 
            })}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  </motion.section>
);

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
          icon: <TabletSmartphone />,
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
    <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 min-h-screen">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative py-24 overflow-hidden"
      >
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center max-w-3xl mx-auto"
          >
                    <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200"
        >
          Our Services
        </motion.h2>
            <p className="text-xl text-blue-100">
              Empowering businesses with cutting-edge technology solutions that drive growth and innovation
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Service Categories */}
      {services.map((category, index) => (
        <CategorySection key={index} {...category} index={index} />
      ))}
    </div>
  );
};

export default ServicesSection;