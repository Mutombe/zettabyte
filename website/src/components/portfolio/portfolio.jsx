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
      image: '/acmf.png',
    },
    {
      title: 'Silver Carbon Website',
      url: 'https://silver-carbon.co.zw',
      image: '/silver1.png',
    },
    {
      title: 'Ministry of Environment and Wildlife & ACMF Portal',
      url: '/https://avccmf-frontend.onrender.com/',
      image: '/mini1.png',
    },
    {
        title: 'Content Creation Association of Zimbabwe',  
        url: '/https://avccmf-frontend.onrender.com/',
        image: '/COCAZ.png',
    },
    {
        title: 'Zettabyte Website',
        url: '/https://avccmf-frontend.onrender.com/',
        image: '/zetta1.png',
    },
    {
      title: 'Mt Zion College Website',
      url: 'https://mentorcenter.co.zw',
      image: '/mtzion.png',
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

export const PortfolioPage = () => {
    const projects = [
      {
        title: "ACMF Website",
        url: "https://acmforum.org",
        image: "/acmf.png",
        description: "A comprehensive forum platform for African Capital Markets",
        technologies: ["React", "Node.js", "MongoDB"],
        completion: "2023"
      },
      {
        title: "Silver Carbon Website",
        url: "https://silver-carbon.co.zw",
        image: "/silver1.png",
        description: "Environmental sustainability platform",
        technologies: ["Vue.js", "Django", "PostgreSQL"],
        completion: "2023"
        },
        {
            title: "Mt Zion College Website",
            url: "/event-ticketing",
            image: "/mtzion.png",
            description: "Event management and ticketing system",
            technologies: ["React", "Express", "MySQL"],
            completion: "2024"
        },
        {
            title: "Content Creation Association of Zimbabwe",
            url: "/event-ticketing",
            image: "/COCAZ.png",
            description: "Event management and ticketing system",
            technologies: ["React", "Express", "MySQL"],
            completion: "2024"
          },
      {
        title: "Ministry of Environment and Wildlife & ACMF Portal",
        url: "/https://avccmf-frontend.onrender.com/",
        image: "/mini2.png",
        description: "Event management and ticketing system",
        technologies: ["React", "Express", "MySQL"],
        completion: "2024"
      },
      {
        title: "Zettabyte Website",
        url: "https://mentorcenter.co.zw",
        image: "/zetta1.png",
        description: "A comprehensive forum platform for a Software Company",
        technologies: ["Next.js", "Node.js", "MongoDB"],
        completion: "2024"
      }
    ];
  
    return (
      <div className="bg-gray-50">
        {/* Portfolio Hero */}
        <section className="bg-blue-500 text-white py-20">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl font-bold mb-6">Our Portfolio</h1>
            <p className="text-xl">Showcasing our successful projects and implementations</p>
          </div>
        </section>
  
        {/* Projects Grid */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-64 object-cover" />
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <span key={idx} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500">Completed: {project.completion}</span>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
                      >
                        View Project
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
};

export default PortfolioSection;