import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioCard = ({ title, url, image }) => {
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <Link to={url}>
          <img src={image} alt={title} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-bold">{title}</h3>
          </div>
        </Link>
      </div>
    );
  };

const PortfolioSection = () => {
  const projects = [
    {
      title: 'ACMF Website',
      url: 'https://acmforum.org',
      image: '/acmf-website.jpg',
    },
    {
      title: 'Silver Carbon Website',
      url: 'https://silver-carbon.co.zw',
      image: '/silver-carbon-website.jpg',
    },
    {
      title: 'Ministry of Environment and Wildlife',
      url: '/event-ticketing',
      image: '/environment-wildlife.jpg',
    },
    {
      title: 'Mentor Center Website',
      url: 'https://mentorcenter.co.zw',
      image: '/mentor-center-website.jpg',
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <PortfolioCard
              key={index}
              title={project.title}
              url={project.url}
              image={project.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;