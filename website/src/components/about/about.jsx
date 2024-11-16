import Button from "../button/button";
import { useNavigate } from "react-router-dom";
import {
  Users,
  Trophy
  , Shield, Building2, Globe
} from "lucide-react";
import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative py-24 bg-gradient-to-br from-blue-900 via-blue-600 to-blue-800 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
              About Zettabyte
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              Zettabyte is a full-service software development and digital
              solutions company specializing in creating robust, scalable, and
              innovative technology solutions for businesses and organizations.
              With our comprehensive suite of services and commitment to
              excellence, we deliver cutting-edge solutions that drive digital
              transformation and operational efficiency.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/about")}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold 
                       hover:bg-blue-50 transition-all duration-200 shadow-lg"
            >
              Learn More
            </motion.button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-blue-300 rounded-full blur-lg opacity-75 animate-pulse" />
              <img
                src="/simba.jpg"
                alt="Zettabyte Team"
                className="rounded-full w-64 h-64 object-cover relative z-10 border-4 border-white/20"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};




const AnimatedCounter = ({ value, label, duration = 2, delay = 0, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-100px" });
  const controls = useAnimation();

  // Gradient text generator
  const getGradientTransform = () => {
    if (!isPlaying) return 'translateX(0%)';
    return `translateX(${(count / parseInt(value)) * 100}%)`;
  };

  useEffect(() => {
    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;

      if (progress < duration * 1000) {
        // Enhanced easing function for more dynamic animation
        const easeOutBack = (x) => {
          const c1 = 1.70158;
          const c3 = c1 + 1;
          return 1 + c3 * Math.pow(x - 1, 3) + c1 * Math.pow(x - 1, 2);
        };

        const percentage = progress / (duration * 1000);
        const easedProgress = easeOutBack(percentage);
        const nextCount = Math.floor(parseInt(value) * Math.min(easedProgress, 1));
        
        setCount(nextCount);
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(parseInt(value));
        setIsPlaying(false);
      }
    };

    if (isInView && !isPlaying) {
      setIsPlaying(true);
      setTimeout(() => {
        animationFrame = requestAnimationFrame(animate);
      }, delay * 1000);

      // Animate the background
      controls.start({
        backgroundPosition: ["0% 50%", "100% 50%"],
        transition: { duration: 1, delay: delay }
      });
    }

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isInView, value, duration, delay, isPlaying, controls]);

  return (
    <motion.div
      ref={nodeRef}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      className="relative group"
    >
      <Card className="bg-white/10 backdrop-blur-lg border border-white/20 
                    hover:bg-white/20 transition-all duration-300 overflow-hidden">
        <CardContent className="p-6 text-center relative">
          {/* Animated background gradient */}
          <motion.div
            className="absolute inset-0 opacity-20"
            animate={controls}
            style={{
              background: "linear-gradient(90deg, rgba(59,130,246,0.5) 0%, rgba(37,99,235,0.5) 50%, rgba(59,130,246,0.5) 100%)",
              backgroundSize: "200% 100%"
            }}
          />
          
          {/* Pulse animation for active counting */}
          {isPlaying && (
            <motion.div
              className="absolute inset-0 bg-blue-500/20 rounded-lg"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0, 0.5, 0]
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          )}

          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="relative z-10"
          >
            <div className="relative">
              {/* Main counter number */}
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent mb-2"
                   style={{ transform: getGradientTransform() }}>
                {count.toLocaleString()}{suffix}
              </div>
              
              {/* Counter label */}
              <div className="text-blue-100 relative">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: delay + 0.2 }}
                >
                  {label}
                </motion.span>
              </div>
            </div>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};


const ValueCard = ({ icon: Icon, title, description, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <Card className="relative group overflow-hidden bg-white/10 backdrop-blur-lg border border-white/20 
                    hover:bg-white/20 transition-all duration-300">
      <CardContent className="p-6">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-blue-600/20 to-blue-800/20 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <motion.div 
          className="relative z-10"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex justify-center mb-4">
            <Icon className="w-12 h-12 text-blue-200" />
          </div>
          <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
          <p className="text-blue-100">{description}</p>
        </motion.div>
      </CardContent>
    </Card>
  </motion.div>
);

const StatsSection = () => {
  const stats = [
    { value: "100", label: "Technical Excellence", suffix: "%" },
    { value: "96", label: "Client Satisfaction", suffix: "%" },
    { value: "90", label: "Project Success Rate", suffix: "%" },
    { value: "100", label: "Dedicated Support", suffix: "%" }
  ];

  return (
    <section className="relative z-10 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <AnimatedCounter
              key={index}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export const AboutPage = () => {
  return (
    <div className="bg-gradient-to-br from-blue-900 via-blue-600 to-blue-800 min-h-screen mt-10">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-6 py-20 text-center relative z-10"
        >
                  <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200"
        >
          About Zettabyte
        </motion.h2>
          <p className="text-xl md:text-2xl text-blue-100">
            Transforming businesses through innovative technology solutions
          </p>
        </motion.div>
      </section>

      {/* Vision & Mission */}
      <section className="relative z-10 py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="bg-white/10 backdrop-blur-lg border border-white/20 h-full">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-4 text-blue-200">Our Vision</h2>
                  <p className="text-blue-100">
                    To be the leading technology partner of choice for organizations seeking digital excellence, 
                    recognized globally for our innovative solutions, technical expertise, and commitment to 
                    transforming businesses through technology.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="bg-white/10 backdrop-blur-lg border border-white/20 h-full">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-4 text-blue-200">Our Mission</h2>
                  <p className="text-blue-100">
                    To deliver innovative, secure, and scalable digital solutions that empower organizations 
                    to thrive in the digital age, while maintaining the highest standards of quality, 
                    integrity, and client satisfaction.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="relative z-10 py-16">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12 text-center text-white"
          >
            Our Core Values
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            <ValueCard icon={Trophy} title="Excellence" description="Pursuing the highest standards in everything we do" index={0} />
            <ValueCard icon={Users} title="Innovation" description="Embracing new technologies and creative solutions" index={1} />
            <ValueCard icon={Shield} title="Integrity" description="Maintaining ethical practices and transparency" index={2} />
            <ValueCard icon={Building2} title="Reliability" description="Delivering consistent, dependable results" index={3} />
            <ValueCard icon={Globe} title="Partnership" description="Building lasting relationships with our clients" index={4} />
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="relative z-10 py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <AnimatedCounter
  value="100" // The target value
  label="Technical Excellence" // Label text
  suffix="%" // Optional suffix
  duration={2} // Animation duration in seconds
  delay={0.2} // Delay before starting animation
/>
          </div>
        </div>
      </section>
    </div>
  );
};


export default AboutSection;
