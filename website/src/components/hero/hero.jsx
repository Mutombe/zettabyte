import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useAnimation, useInView } from "framer-motion";
import { ArrowRight, Code, Shield, Zap } from "lucide-react";

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
    className="bg-white/10 p-6 rounded-2xl backdrop-blur-lg border border-white/20 
              hover:bg-white/20 transition-all duration-300"
  >
    <Icon className="w-10 h-10 mb-4 text-blue-200" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-blue-100">{description}</p>
  </motion.div>
);

const ImageCollage = () => {
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({
      x: (e.clientX - rect.left) / rect.width - 0.5,
      y: (e.clientY - rect.top) / rect.height - 0.5,
    });
  };

  const images = [
    {
      src: "/consult.png",
      alt: "Software Development",
      className: "rounded-2xl object-cover w-full h-full",
      desktopPosition: { top: '5%', left: '0%' },
      rotation: -5
    },
    {
      src: "/mobile.png",
      alt: "Mobile Development",
      className: "rounded-2xl object-cover w-full h-full",
      desktopPosition: { top: '15%', left: '25%' },
      rotation: 5
    },
  ];

  return (
    <motion.div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full h-[400px] md:h-[600px] px-4 md:px-0"
      style={{ perspective: '1000px' }}
    >
      {/* Container for absolute positioning on desktop */}
      <div className="relative h-full w-full">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: 1,
              ...(!window.matchMedia("(max-width: 768px)").matches && {
                rotateY: mousePosition.x * 15,
                rotateX: -mousePosition.y * 15,
              }),
            }}
            transition={{
              duration: 0.8,
              delay: 0.2 * index,
              type: "spring",
              stiffness: 100,
            }}
            className="group mb-6 md:mb-0 md:absolute"
            style={{
              ...image.desktopPosition,
              zIndex: images.length - index,
              width: 'min(100%, 450px)',
            }}
          >
            <div className="relative">
              {/* Enhanced shadow effect */}
              <div 
                className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition duration-300"
                style={{
                  transform: `rotate(${image.rotation}deg)`,
                }}
              />

              {/* Main image container */}
              <motion.div
                whileHover={{
                  scale: 1.02,
                  rotate: image.rotation + (index % 2 === 0 ? 2 : -2),
                }}
                transition={{ duration: 0.3 }}
                className="relative bg-blue-900/20 rounded-2xl overflow-hidden"
                style={{
                  transform: `rotate(${image.rotation}deg)`,
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 30px rgba(0, 0, 255, 0.2)',
                }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className={`
                    w-full
                    h-[250px] md:h-[350px] 
                    ${image.className}
                  `}
                />

                {/* Enhanced overlay effects */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/30 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-blue-900/20" />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Interactive background effect */}
      <motion.div
        className="hidden md:block absolute inset-0"
        animate={{
          background: [
            "radial-gradient(circle at 50% 50%, rgba(120,119,198,0.15) 0%, transparent 60%)",
            "radial-gradient(circle at 60% 40%, rgba(120,119,198,0.15) 0%, transparent 60%)",
            "radial-gradient(circle at 40% 60%, rgba(120,119,198,0.15) 0%, transparent 60%)",
            "radial-gradient(circle at 50% 50%, rgba(120,119,198,0.15) 0%, transparent 60%)",
          ],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </motion.div>
  );
};


const HeroSection = () => {
  const navigate = useNavigate();
  const controls = useAnimation();

  const features = [
    {
      icon: Code,
      title: "Custom Solutions",
      description: "Tailored software development to meet your specific needs",
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Enterprise-grade security and dependable performance",
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "Rapid development and deployment of solutions",
    },
  ];

  const stats = [
    { value: 100, label: "Projects Completed", suffix: "+" },
    { value: 50, label: "Happy Clients", suffix: "+" },
    { value: 24, label: "Support", suffix: "/7" },
    { value: 98, label: "Success Rate", suffix: "%" },
  ];

  return (
    <section
      className="relative bg-gradient-to-br from-blue-900 via-blue-600 to-blue-800 
        text-white min-h-screen flex items-center overflow-hidden mt-10"
    >
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6"
            >
              Transforming Businesses Through Technology
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl lg:text-2xl mb-8 text-blue-100"
            >
              Zettabyte delivers innovative, secure, and scalable digital
              solutions that empower organizations to thrive in the digital age.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/services")}
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
                onClick={() => navigate("/portfolio")}
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg 
                             font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200"
              >
                View Our Work
              </motion.button>
            </motion.div>
          </motion.div>

          <div className="w-full mt-8 lg:mt-0">
            <ImageCollage />
            <br />
            <br />
            <br />
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 md:mt-20">
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
          className="mt-16 md:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center"
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
