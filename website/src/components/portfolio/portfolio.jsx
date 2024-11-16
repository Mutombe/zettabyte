import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

const PortfolioCard = ({ title, url, image, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="group relative overflow-hidden rounded-2xl"
    >
      <Link to={url}>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <img src={image} alt={title} className="w-full h-64 object-cover" />
          <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <h3 className="text-lg font-bold text-white">{title}</h3>
            <span className="text-blue-200 text-sm">View Project →</span>
          </div>
        </div>
      </Link>
    </motion.div>
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
    <section className="py-24 bg-gradient-to-br from-blue-900 via-blue-700 to-blue-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200"
        >
          Our Portfolio
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <PortfolioCard key={index} {...project} index={index} />
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
      <div className="bg-gray-50 mt-10">
        {/* Portfolio Hero */}
        <section className="bg-blue-500 text-white py-20" style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            backgroundSize: "30px 30px",
          }}>
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