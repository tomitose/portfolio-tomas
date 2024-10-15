import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="pt-20 pb-10 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <div className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl font-heading font-bold mb-4">Tomás Tosello</h1>
        <h2 className="text-3xl mb-8">Front-end Developer</h2>
        <p className="text-xl mb-10 max-w-2xl mx-auto">
          Passionate about creating beautiful and functional web experiences. Always seeking new challenges and opportunities to grow.
        </p>
        <div className="flex justify-center space-x-4">
          <a href="https://github.com/tomitose" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-light">
            <Github className="mr-2" /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/tomas-tosello" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-light">
            <Linkedin className="mr-2" /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
