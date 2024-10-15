import React from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link to="hero" smooth={true} duration={500} className="text-2xl font-heading font-bold cursor-pointer">
            TT
          </Link>
          <div className="flex items-center space-x-6">
            <Link to="about" smooth={true} duration={500} className="hover:text-blue-600 cursor-pointer">About</Link>
            <Link to="skills" smooth={true} duration={500} className="hover:text-blue-600 cursor-pointer">Skills</Link>
            <Link to="experience" smooth={true} duration={500} className="hover:text-blue-600 cursor-pointer">Experience</Link>
            <Link to="projects" smooth={true} duration={500} className="hover:text-blue-600 cursor-pointer">Projects</Link>
            <Link to="designs" smooth={true} duration={500} className="hover:text-blue-600 cursor-pointer">UI Designs</Link>
            <Link to="contact" smooth={true} duration={500} className="hover:text-blue-600 cursor-pointer">Contact</Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
