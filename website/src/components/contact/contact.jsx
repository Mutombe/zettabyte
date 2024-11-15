import React from 'react';
import Button from '../button/button';
import { Mail, Phone, MapPin } from 'lucide-react';
import { toast } from 'react-toastify';
import { useState } from 'react';

const Input = ({ label, error, ...props }) => (
    <div className="space-y-1">
      {label && <label className="block text-sm font-medium text-gray-700">{label}</label>}
      <input
        className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
          error ? 'border-red-500' : 'border-gray-300'
        }`}
        {...props}
      />
      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  );
  
  const TextArea = ({ label, error, ...props }) => (
    <div className="space-y-1">
      {label && <label className="block text-sm font-medium text-gray-700">{label}</label>}
      <textarea
        className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
          error ? 'border-red-500' : 'border-gray-300'
        }`}
        rows={4}
        {...props}
      />
      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  );


const ContactSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Message sent successfully!');
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input name="name" placeholder="Name" />
              <Input name="email" type="email" placeholder="Email" />
              <TextArea name="message" placeholder="Message" />
              <Button type="submit" className="bg-blue-500 text-white hover:bg-blue-600">
                Submit
              </Button>
            </form>
          </div>
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-4">
              <Mail className="h-6 w-6 text-blue-500" />
              <a href="mailto:simbamtombe@gmail.com" className="text-blue-500 hover:underline">
                simbamtombe@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="h-6 w-6 text-blue-500" />
              <a href="tel:+263785948128" className="text-blue-500 hover:underline">
                +263 78 594 8128
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="h-6 w-6 text-blue-500" />
              <p>Woodlands, Waterfalls, Harare</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactInfo = ({ icon, title, content }) => (
    <div className="flex items-start space-x-4">
      {icon}
      <div>
        <h3 className="font-medium text-gray-900">{title}</h3>
        <div className="text-gray-600">{content}</div>
      </div>
    </div>
  )

export const ContactPage = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: ''
    });
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission
      console.log(formData);
      toast.success('Message sent successfully!');
    };
  
    return (
      <div className="bg-gray-50">
        {/* Contact Hero */}
        <section className="bg-blue-500 text-white py-20">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl">Let's discuss how we can help transform your business</p>
          </div>
        </section>
  
        {/* Contact Form and Info */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                    <Input
                      name="email"
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                    <Input
                      name="company"
                      placeholder="Company Name"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                    />
                  </div>
                  <TextArea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                  />
                  <Button type="submit" className="w-full bg-blue-500 text-white hover:bg-blue-600">
                    Send Message
                  </Button>
                </form>
              </div>
  
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                  <div className="space-y-4">
                    <ContactInfo
                      icon={<Mail className="h-6 w-6 text-blue-500" />}
                      title="Email"
                      content={<a href="mailto:simbamtombe@gmail.com">simbamtombe@gmail.com</a>}
                    />
                    <ContactInfo
                      icon={<Phone className="h-6 w-6 text-blue-500" />}
                      title="Phone"
                      content={<a href="tel:+263785948128">+263 78 594 8128</a>}
                    />
                    <ContactInfo
                      icon={<MapPin className="h-6 w-6 text-blue-500" />}
                      title="Address"
                      content="Woodlands, Waterfalls, Harare"
                    />
                  </div>
                </div>
  
                <div>
                  <h2 className="text-2xl font-bold mb-6">Office Hours</h2>
                  <div className="space-y-2">
                    <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p>Saturday: 9:00 AM - 1:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  };

export default ContactSection;