import Button from "../button/button";
import { Mail, Phone, MapPin } from "lucide-react";
import { toast } from "react-toastify";
import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import EnhancedMapSection from "./map";


const Input = ({ label, error, ...props }) => (
  <div className="space-y-2">
    {label && (
      <label className="block text-sm font-medium text-white">{label}</label>
    )}
    <input
      className={`w-full px-4 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg
                focus:ring-2 focus:ring-blue-300 focus:border-blue-300 transition-all duration-200
                text-white placeholder-blue-200 ${error ? "border-red-500" : "border-white/20"}`}
      {...props}
    />
    {error && <p className="text-sm text-red-400">{error}</p>}
  </div>
);

const TextArea = ({ label, error, ...props }) => (
  <div className="space-y-2">
    {label && (
      <label className="block text-sm font-medium text-white">{label}</label>
    )}
    <textarea
      className={`w-full px-4 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg
                focus:ring-2 focus:ring-blue-300 focus:border-blue-300 transition-all duration-200
                text-white placeholder-blue-200 ${error ? "border-red-500" : "border-white/20"}`}
      rows={4}
      {...props}
    />
    {error && <p className="text-sm text-red-400">{error}</p>}
  </div>
);

// Contact Section
const ContactSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message sent successfully!");
  };

  return (
    <section className="py-24 bg-gradient-to-br from-blue-900 via-blue-600 to-blue-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
              Get in Touch
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input name="name" placeholder="Your Name" />
              <Input name="email" type="email" placeholder="Your Email" />
              <TextArea name="message" placeholder="Your Message" />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold 
                         hover:bg-blue-50 transition-all duration-200 shadow-lg"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-6"
          >
            {[
              { Icon: Mail, text: "simbamtombe@gmail.com", href: "mailto:simbamtombe@gmail.com" },
              { Icon: Phone, text: "+263 78 594 8128", href: "tel:+263785948128" },
              { Icon: MapPin, text: "Woodlands, Waterfalls, Harare" }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ x: 4 }}
                className="flex items-center space-x-4 bg-white/10 p-6 rounded-xl backdrop-blur-lg border border-white/20"
              >
                <item.Icon className="h-6 w-6 text-blue-200" />
                {item.href ? (
                  <a href={item.href} className="text-blue-100 hover:text-white transition-colors">
                    {item.text}
                  </a>
                ) : (
                  <span className="text-blue-100">{item.text}</span>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};



const GlowingBorder = ({ children }) => (
  <div className="relative group">
    <motion.div
      className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-400 
                 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000"
      animate={{
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
    />
    {children}
  </div>
);

const ContactInfo = ({ icon, title, content }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="relative"
  >
    <GlowingBorder>
      <div className="relative bg-white/10 backdrop-blur-lg p-6 rounded-lg border border-white/20
                    flex items-start space-x-4 hover:bg-white/20 transition-all duration-300">
        <div className="p-2 bg-gradient-to-br from-blue-600 to-blue-400 rounded-lg">
          {React.cloneElement(icon, { className: "h-6 w-6 text-white" })}
        </div>
        <div>
          <h3 className="font-medium text-white">{title}</h3>
          <div className="text-blue-100">{content}</div>
        </div>
      </div>
    </GlowingBorder>
  </motion.div>
);

const Inputs = ({ ...props }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
  >
    <GlowingBorder>
      <input
        {...props}
        className="w-full bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg px-4 py-3
                   text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400
                   transition-all duration-300"
      />
    </GlowingBorder>
  </motion.div>
);

const TextAreas = ({ ...props }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
  >
    <GlowingBorder>
      <textarea
        {...props}
        rows={5}
        className="w-full bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg px-4 py-3
                   text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400
                   transition-all duration-300"
      />
    </GlowingBorder>
  </motion.div>
);

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message sent successfully!");
  };

  return (
    <div className="bg-gradient-to-br from-blue-900 via-blue-600 to-blue-800 min-h-screen mt-10">
      {/* Contact Hero */}
      <section className="relative py-20 overflow-hidden">
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
        
        <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200"
        >
          Let's Build Something Amazing Together
        </motion.h2>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white text-center"
          >
            
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-blue-100 text-center max-w-2xl mx-auto"
          >
            Transform your business with our cutting-edge solutions
          </motion.p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <GlowingBorder>
                <div className="bg-white/10 backdrop-blur-lg p-8 rounded-lg border border-white/20">
                  <h2 className="text-2xl font-bold mb-6 text-white">Send us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Inputs
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                      <Inputs
                        name="email"
                        type="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Inputs
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                      <Inputs
                        name="company"
                        placeholder="Company Name"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      />
                    </div>
                    <TextAreas
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-400 text-white py-3 rounded-lg
                               font-semibold hover:from-blue-700 hover:to-blue-500 transition-all duration-300
                               shadow-lg shadow-blue-500/30"
                    >
                      Send Message
                    </motion.button>
                  </form>
                </div>
              </GlowingBorder>
            </motion.div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-2xl font-bold mb-6 text-white"
                >
                  Contact Information
                </motion.h2>
                <div className="space-y-4">
                  <ContactInfo
                    icon={<Mail />}
                    title="Email"
                    content={
                      <a href="mailto:simbamtombe@gmail.com" className="hover:text-blue-300 transition-colors">
                        simbamtombe@gmail.com
                      </a>
                    }
                  />
                  <ContactInfo
                    icon={<Phone />}
                    title="Phone"
                    content={
                      <a href="tel:+263785948128" className="hover:text-blue-300 transition-colors">
                        +263 78 594 8128
                      </a>
                    }
                  />
                  <ContactInfo
                    icon={<MapPin />}
                    title="Address"
                    content="Woodlands, Waterfalls, Harare"
                  />
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <GlowingBorder>
                  <div className="bg-white/10 backdrop-blur-lg p-6 rounded-lg border border-white/20">
                    <h2 className="text-2xl font-bold mb-6 text-white">Office Hours</h2>
                    <div className="space-y-2 text-blue-100">
                      <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p>Saturday: 9:00 AM - 1:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </GlowingBorder>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      <EnhancedMapSection />
      <br></br>
    </div>
  );
};

export default ContactPage;