import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Code,
  Calendar,
  Building,
  Award,
  Star,
  Users,
} from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Link } from "react-router-dom";

const ProjectModal1 = ({ project, isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white border-none">
        <div className="relative p-6">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 p-1 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
      
          </button>

          <div className="space-y-6">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-[400px] object-cover rounded-xl shadow-2xl"
            />

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">{project.title}</h2>

              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-blue-300" />
                <span>Completed: {project.completion || "2024"}</span>
              </div>

              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-blue-900 hover:bg-blue-50 transition-colors"
              >
                Visit Project <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const PortfolioCard = ({ title, url, image, index, onClick }) => {
  const getTechBadges = (projectTitle) => {
    const badges = {
      "Garget Shop Web Application": ["React", "Django", "PostgreSQ"],
      "ACMF Website": ["React", "Node.js", "MongoDB"],
      "Silver Carbon Website": ["Next.js", "Prisma", "PostgreSQL"],
      "Zettabyte Website": ["Vue.js", "Express", "MySQL"],
      "Ministry of Environment and Wildlife & ACMF Portal": [
        "React",
        "Django",
        "PostgreSQL",
      ],
      "Content Creation Association of Zimbabwe": [
        "Next.js",
        "Supabase",
        "Tailwind",
      ],
      "Mt Zion College Website": ["React", "Firebase", "Material-UI"],
    };
    return badges[projectTitle] || ["React", "Node.js", "MongoDB"];
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-900/10 to-blue-800/10 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      <div
        className="cursor-pointer relative overflow-hidden"
        onClick={onClick}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-800/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
        />

        {/* Enhanced content container */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="relative z-10">
            <div className="bg-gradient-to-r from-blue-900/95 to-blue-800/95 p-4 rounded-xl backdrop-blur-md border border-white/10 shadow-lg">
              {/* Top row: Logo and rating */}
              <div className="flex items-center justify-between mb-3">
                {/* Company logo placeholder */}
                <div className="bg-white/10 rounded-lg p-2 w-10 h-10 flex items-center justify-center">
                  <Award className="w-6 h-6 text-blue-300" />
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <span className="text-yellow-400 text-sm font-medium">
                    4.9
                  </span>
                </div>
              </div>

              {/* Middle row: Title and completion */}
              <div className="mb-3">
                <h3 className="text-lg font-bold text-white mb-1 tracking-wide">
                  {title}
                </h3>
                <div className="flex items-center gap-2 text-blue-200 text-sm">
                  <Calendar className="w-4 h-4" />
                  <span>2024</span>
                  <span className="w-1 h-1 bg-blue-400 rounded-full"></span>
                  <Users className="w-4 h-4" />
                  <span>Team of 4</span>
                </div>
              </div>

              {/* Tech stack badges */}
              <div className="flex flex-wrap gap-2 mb-3">
                {getTechBadges(title).map((tech, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 rounded-md text-xs font-medium bg-blue-800/50 text-blue-200 border border-blue-700/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Bottom row: View details and metrics */}
              <div className="flex items-center justify-between">
                <div className="flex items-center text-blue-200 text-sm group-hover:text-blue-300 transition-colors duration-300">
                  <span className="mr-2 font-medium">View Details</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                </div>

                {/* Project metrics */}
                <div className="flex items-center gap-3 text-xs text-blue-300">
                  <div className="flex items-center gap-1">
                    <Code className="w-3 h-3" />
                    <span>15 Pages</span>
                  </div>
                  <span className="w-1 h-1 bg-blue-400 rounded-full"></span>
                  <span className="text-blue-400 font-medium">Live</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const PortfolioSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openInNewTab = (url) => {
    window.open(url, '_blank');
  };

  const projects = [
    {
      title: "Wonderland Panelbeaters",
      url: "https://wenderland.onrender.com/",
      image: "/wonder.png",
      completion: "In Progress",
    },
    {
      title: "Organic Landscaping",
      url: "https://organic-landscaping.onrender.com",
      image: "/organic.png",
      completion: "In Progress",
    },
    {
      title: "Garget Shop Web Application",
      url: "https://thegadgetshopsa.co.za/",
      image: "/gad.png",
      completion: "2023",
    },
    {
      title: "ACMF Website",
      url: "https://acmforum.org",
      image: "/acmf.png",
      completion: "2023",
    },
    {
      title: "Silver Carbon Website",
      url: "https://silver-carbon.co.zw",
      image: "/silver1.png",
      completion: "2023",
    },
    {
      title: "Ministry of Environment and Wildlife & ACMF Portal",
      url: "https://avccmf-frontend.onrender.com/",
      image: "/mini1.png",
      completion: "2024",
    },
    {
      title: "Content Creation Association of Zimbabwe",
      url: "https://cocaz.org.zw/",
      image: "/COCAZ.png",
      completion: "2024",
    },
    {
      title: "Zettabyte Website",
      url: "https://zettabyte.co.zw/",
      image: "/zetta1.png",
      completion: "2024",
    },
    {
      title: "Mt Zion College Website",
      url: "https://mtzioncollege-1.onrender.com",
      image: "/mtzion.png",
      completion: "2024",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-blue-900 via-blue-700 to-blue-800 relative overflow-hidden">
      <div className="absolute inset-0">
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

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
            Our Portfolio
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Explore our successful projects and see how we've helped businesses
            transform their digital presence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <PortfolioCard
              key={index}
              {...project}
              index={index}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal1
            project={selectedProject}
            isOpen={!!selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

const ProjectModal = ({ project, isOpen, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [project.image, ...(project.additionalImages || [])];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white border-none overflow-hidden flex flex-col">
        <div className="p-6 flex-1 overflow-y-auto">
          {/* Close button - Fixed position */}
          <button
            onClick={onClose}
            className="fixed right-4 top-4 z-50 p-1 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
       
          </button>

          <div className="flex flex-col md:grid md:grid-cols-2 gap-6">
            {/* Image Section */}
            <div className="relative group min-h-[300px]">
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={images[currentImageIndex]}
                  alt={project.title}
                  className="w-full h-[300px] object-cover rounded-xl"
                />

                {images.length > 1 && (
                  <div className="absolute inset-0 flex items-center justify-between px-2">
                    <button
                      onClick={() =>
                        setCurrentImageIndex((prev) =>
                          prev === 0 ? images.length - 1 : prev - 1
                        )
                      }
                      className="p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
                    >
                      <ArrowLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() =>
                        setCurrentImageIndex((prev) =>
                          prev === images.length - 1 ? 0 : prev + 1
                        )
                      }
                      className="p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
                    >
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                )}
              </div>

              {images.length > 1 && (
                <div className="flex justify-center mt-4 gap-2">
                  {images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        idx === currentImageIndex ? "bg-white" : "bg-white/30"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Content Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <img
                  src={project.logo}
                  alt={`${project.title} logo`}
                  className="w-12 h-12 rounded-lg object-contain bg-white p-1"
                />
                <h2 className="text-2xl font-bold">{project.title}</h2>
              </div>

              <p className="text-blue-100">{project.description}</p>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-blue-300" />
                  <span>Completed: {project.completion}</span>
                </div>

                <div className="flex items-center gap-2">
                  <Code className="w-5 h-5 text-blue-300" />
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full text-sm bg-blue-500/20 border border-blue-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <a
        href={project.url.startsWith("https://") ? project.url : `https://${project.url}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-blue-900 hover:bg-blue-50 transition-colors"
        onClick={() => openInNewTab(project.url)}
      >
        Visit Site <ExternalLink className="w-4 h-4" />
      </a>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export const PortfolioPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Wonderland Panelbeaters",
      url: "wenderland.onrender.com/",
      image: "/wonder.png",
      logo: "/wpb.png",
      description: "An E-Commerce website for Gadgets",
      technologies: ["React", "Django", "PostgreSQL", "AWS"],
      completion: "2023",
      additionalImages: ["/wonder.png", "/wonder.png"],
    },
    {
      title: "Organic Landscaping",
      url: "organic-landscaping.onrender.com",
      image: "/organic.png",
      logo: "/logol2.png",
      description: "An E-Commerce website for Gadgets",
      technologies: ["React", "Django", "PostgreSQL", "AWS"],
      completion: "2023",
      additionalImages: ["/organic.png", "/organic.png"],
    },
    {
      title: "Garget Shop Web Application",
      url: "thegadgetshopsa.co.za/",
      image: "/gad.png",
      logo: "/gad-logo.png",
      description: "An E-Commerce website for Gadgets",
      technologies: ["React", "Django", "PostgreSQL", "AWS"],
      completion: "2023",
      additionalImages: ["/gad.png", "/gad.png"],
    },
    {
      title: "ACMF Website",
      url: "acmforum.org",
      image: "/acmf.png",
      logo: "/ACMF.svg",
      description:
        "A comprehensive forum platform for African Capital Markets, facilitating discussions and knowledge sharing across the continent's Carbon Markets.",
      technologies: ["React", "Node.js", "MongoDB", "AWS"],
      completion: "2023",
      additionalImages: ["/acmf.png", "/acmf.png"],
    },
    {
      title: "Silver Carbon Website",
      url: "silver-carbon.co.zw",
      image: "/silver1.png",
      logo: "/silver-logo.svg",
      description: "Environmental sustainability platform",
      technologies: ["Vue.js", "Django", "PostgreSQL"],
      completion: "2023",
      additionalImages: ["/silver1.png", "/silver1.png"],
    },
    {
      title: "Mt Zion College Website",
      url: "mtzioncollege-1.onrender.com",
      image: "/mtzion.png",
      logo: "/mtzion1.png",
      description: "Mt Zion College Website",
      technologies: ["React", "Express", "MySQL"],
      completion: "2024",
      additionalImages: ["/mtzion.png", "/mtzion.png", "/c1.png", "/c2.png"],
    },
    {
      title: "Content Creation Association of Zimbabwe",
      url: "cocaz.org.zw",
      image: "/COCAZ.png",
      logo: "/cocaz3.jpg",
      description: "Content Creation Association of Zimbabwe Website",
      technologies: ["React", "Express", "MySQL"],
      completion: "2024",
      additionalImages: ["/cocaz3.jpg", "/cocaz3.jpg"],
    },
    {
      title: "Ministry of Environment and Wildlife & ACMF Portal",
      url: "avccmf-frontend.onrender.com/",
      image: "/mini1.png",
      logo: "/AVCCMFLogo.png",
      description: "Event management and ticketing system",
      technologies: ["React", "Express", "MySQL"],
      completion: "2024",
      additionalImages: ["/mini1.png", "/mini2.png"],
    },
    {
      title: "Zettabyte Website",
      url: "zettabyte.co.zw",
      image: "/zetta.png",
      logo: "/zet.png",
      description: "A comprehensive forum platform for a Software Company",
      technologies: ["Next.js", "Node.js", "MongoDB"],
      completion: "2024",
      additionalImages: ["/zettabyte.png", "/zetta.png"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
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

      <section className="relative z-10 py-20 text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200"
            >
              Our Track Record
            </motion.h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Explore our successful projects and see how we've helped
              businesses transform their digital presence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative bg-white/10 rounded-2xl overflow-hidden backdrop-blur-lg border border-white/20">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <img
                        src={project.logo}
                        alt={`${project.title} logo`}
                        className="w-10 h-10 rounded-lg object-contain bg-white p-1"
                      />
                      <h3 className="text-xl font-semibold">{project.title}</h3>
                    </div>

                    <p className="text-blue-100 mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-full text-sm bg-blue-500/20 border border-blue-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-3 py-1 rounded-full text-sm bg-blue-500/20 border border-blue-500/30">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    <div className="flex justify-between items-center text-sm text-blue-200">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {project.completion}
                      </div>
                      <button className="flex items-center gap-1 hover:text-white transition-colors">
                        Learn More <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            isOpen={!!selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default PortfolioSection;
