import React, { useState } from 'react';
import { Link } from 'react-scroll';
import logo from '../assets/tt-44.png';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { to: "about", label: "About" },
    { to: "skills", label: "Skills" },
    { to: "experience", label: "Experience" },
    { to: "projects", label: "Projects" },
    { to: "contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link to="hero" smooth={true} duration={500} className="text-2xl font-heading font-bold cursor-pointer">
            <img src={logo} alt="logo" className="w-16 h-16 rounded-full"/>
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            {menuItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth={true}
                duration={500}
                className="hover:text-blue-600 cursor-pointer"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-2">
          {menuItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth={true}
              duration={500}
              className="block py-2 px-6 hover:bg-gray-100 cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;


