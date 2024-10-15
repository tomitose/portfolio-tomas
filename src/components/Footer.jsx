import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2024 Tomás Tosello. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a href="https://github.com/tomitose" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/tomas-tosello" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
