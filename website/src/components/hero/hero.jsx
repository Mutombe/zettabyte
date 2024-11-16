import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useAnimation, useInView } from 'framer-motion';
import { ArrowRight, Code, Shield, Zap } from 'lucide-react';

const Counter = ({ end, duration = 2 }) => {
  const [count, setCount] = React.useState(0);
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef);

  useEffect(() => {
    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      
      if (progress < duration * 1000) {
        const percentage = progress / (duration * 1000);
        const easeOut = 1 - Math.pow(1 - percentage, 3); // Cubic ease-out
        setCount(Math.floor(end * easeOut));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    if (isInView) {
      animationFrame = requestAnimationFrame(animate);
    }

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, isInView]);

  return <span ref={nodeRef}>{count}</span>;
};

const FeatureCard = ({ icon: Icon, title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ scale: 1.05 }}
    className="bg-blue-400 bg-opacity-20 p-6 rounded-lg backdrop-blur-sm"
  >
    <Icon className="w-10 h-10 mb-4 text-blue-200" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-blue-100">{description}</p>
  </motion.div>
);


const ImageCollage = () => {
    const images = [
      {
        src: "/consult.png",
        alt: "Software Development",
        className: "rounded-lg shadow-xl transform -rotate-3 object-cover w-full h-full"
      },
      {
        src: "/mobile.png",
        alt: "Mobile Development",
        className: "rounded-lg shadow-xl transform -rotate-6 object-cover w-full h-full"
      }
    ];
  
    return (
      <div className="relative lg:h-[500px] w-full max-w-2xl mx-auto gap-8 lg:gap-8">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2 * index,
              ease: "easeOut"
            }}
            className="relative lg:static"
            style={{
              top: `${index * 60}px`,
              left: '10%',
              transform: 'translateX(-50%)',
              zIndex: 3 - index
            }}
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: 0 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className={`w-64 h-80 object-cover ${image.className}`}
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    );
};
  

const HeroSection = () => {
    const navigate = useNavigate();
    const controls = useAnimation();
  
    const features = [
      {
        icon: Code,
        title: "Custom Solutions",
        description: "Tailored software development to meet your specific needs"
      },
      {
        icon: Shield,
        title: "Secure & Reliable",
        description: "Enterprise-grade security and dependable performance"
      },
      {
        icon: Zap,
        title: "Fast Delivery",
        description: "Rapid development and deployment of solutions"
      }
    ];
  
    const stats = [
      { value: 100, label: "Projects Completed", suffix: "+" },
      { value: 50, label: "Happy Clients", suffix: "+" },
      { value: 24, label: "Support", suffix: "/7" },
      { value: 98, label: "Success Rate", suffix: "%" }
    ];
  
    return (
<section className="relative bg-gradient-to-br from-blue-600 to-blue-500 text-white min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            backgroundSize: '30px 30px'
          }} />
        </div>
  
        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left mt-12 lg:mt-0"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-6xl font-bold mb-6"
              >
                Transforming Businesses Through Technology
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-2xl mb-8 text-blue-100"
              >
                Zettabyte delivers innovative, secure, and scalable digital solutions 
                that empower organizations to thrive in the digital age.
              </motion.p>
  
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate('/services')}
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold 
                             hover:bg-blue-50 transition-all duration-200
                             flex items-center space-x-2 shadow-lg"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
  
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate('/portfolio')}
                  className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg 
                             font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200"
                >
                  View Our Work
                </motion.button>
              </motion.div>
            </motion.div>
  
            {/* Image Collage */}
            <ImageCollage />
          </div>
  
          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={0.2 * (index + 1)}
              />
            ))}
          </div>
  
          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {stats.map((stat, index) => (
              <div key={index} className="p-4">
                <div className="text-3xl font-bold mb-2">
                  <Counter end={stat.value} />
                  {stat.suffix}
                </div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    );
};
  
export default HeroSection;