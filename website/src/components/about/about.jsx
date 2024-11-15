import React from 'react';
import Button from '../button/button';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Building2, Users, Trophy, BarChart, Globe, Shield, Code, CloudUpload, Laptop, Clipboard } from 'lucide-react';

const AboutSection = () => {
    const navigate = useNavigate();

  return (
    <section className="py-16 bg-blue-500 text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-4">About Zettabyte</h2>
            <p className="mb-8">
              Zettabyte is a full-service software development and digital solutions company specializing in creating robust, scalable, and innovative technology solutions for businesses and organizations. With our comprehensive suite of services and commitment to excellence, we deliver cutting-edge solutions that drive digital transformation and operational efficiency.
            </p>
            <Button href="/about" onClick={() => {navigate('/about');}} className="bg-white text-blue-500 hover:bg-blue-200">
              Learn More
            </Button>
          </div>
          <div className="flex items-center justify-center">
            <img src="/simba.jpg" alt="Zettabyte Team" className="rounded-lg shadow-lg w-60 h-60" />
          </div>
        </div>
      </div>
    </section>
  );
};

const ValueCard = ({ icon, title, description }) => (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <div className="text-blue-500 w-12 h-12 mx-auto mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
);
  
const StatCard = ({ value, label }) => (
    <div className="text-center">
      <div className="text-4xl font-bold text-blue-500 mb-2">{value}</div>
      <div className="text-gray-600">{label}</div>
    </div>
  );

export const AboutPage = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-500 text-white py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-6">About Zettabyte</h1>
          <p className="text-xl">Transforming businesses through innovative technology solutions</p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4 text-blue-500">Our Vision</h2>
              <p className="text-gray-700">
                To be the leading technology partner of choice for organizations seeking digital
                excellence, recognized globally for our innovative solutions, technical expertise, and
                commitment to transforming businesses through technology.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4 text-blue-500">Our Mission</h2>
              <p className="text-gray-700">
                To deliver innovative, secure, and scalable digital solutions that empower
                organizations to thrive in the digital age, while maintaining the highest standards of
                quality, integrity, and client satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            <ValueCard icon={<Trophy />} title="Excellence" description="Pursuing the highest standards in everything we do" />
            <ValueCard icon={<Users />} title="Innovation" description="Embracing new technologies and creative solutions" />
            <ValueCard icon={<Shield />} title="Integrity" description="Maintaining ethical practices and transparency" />
            <ValueCard icon={<Building2 />} title="Reliability" description="Delivering consistent, dependable results" />
            <ValueCard icon={<Globe />} title="Partnership" description="Building lasting relationships with our clients" />
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCard value="100%" label="Technical Excellence" />
            <StatCard value="96%" label="Client Satisfaction" />
            <StatCard value="90%" label="Project Success Rate" />
            <StatCard value="100%" label="Dedicated Support" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;


