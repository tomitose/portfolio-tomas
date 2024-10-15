import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ title, description, technologies, liveUrl, isPersonal = true }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="mb-4">
        <h4 className="font-semibold mb-2">Technologies used:</h4>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="flex space-x-4">
        <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary">
          <ExternalLink size={16} className="mr-2" /> View Project
        </a>
        {isPersonal && (
          <a href="https://github.com/tomitose" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline">
            <Github size={16} className="mr-2" /> GitHub
          </a>
        )}
      </div>
    </div>
  </div>
);

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A fully functional e-commerce website with product catalog, shopping cart, and secure checkout.",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      liveUrl: "https://example-ecommerce.com",
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates and team features.",
      technologies: ["Angular", "Firebase", "RxJS"],
      liveUrl: "https://example-taskmanager.com",
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather dashboard that displays current conditions and forecasts for multiple locations.",
      technologies: ["React", "OpenWeatherMap API", "Chart.js"],
      liveUrl: "https://example-weather.com",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-heading font-bold mb-12 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
