import React from 'react';
import { navItems } from "./data/index";

import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import UIDesigns from './components/UIDesigns';
import Footer from './components/Footer';
import { FloatingNav } from './components/ui/FloatingNavbar';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <FloatingNav navItems={navItems} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <UIDesigns />
      </main>
      <Footer />
    </div>
  );
}

export default App;