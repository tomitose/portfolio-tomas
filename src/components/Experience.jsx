import React from 'react';
import { Briefcase } from 'lucide-react';

const ExperienceItem = ({ title, company, period, description }) => (
  <div className="mb-8">
    <div className="flex items-center mb-2">
      <Briefcase size={20} className="mr-2 text-purple" />
      <h3 className="text-xl font-bold text-purple">{title}</h3>
    </div>
    <p className="text-lg font-semibold text-xl text-neutral-300  mx-auto">{company}</p>
    <p className="text-md text-neutral-300 mb-2">{period}</p>
    <p className="text-md text-neutral-300 mb-2">{description}</p>
  </div>
);

const Experience = () => {
  const experiences = [
    {
      title: "Front-end Developer and Ux/Ui Designer",
      company: "Cuos S.A.",
      period: "Feb 2021 - Present",
      description: "Developed and maintained responsive web applications using React and Angular. Collaborated with UX/UI designers to implement pixel-perfect designs."
    },
    {
      title: "Front-end Developer and Ux/Ui Designer",
      company: "Wishmakers",
      period: "2024 Mar - Present",
      description: "Developed and maintained responsive web applications using React. Gained experience in HTML, CSS, and JavaScript."
    },
    {
      title: "Front-end Developer Junior",
      company: "H-Virtual",
      period: "Sep 2021- Jan 2023",
      description: "Developed and maintained responsive web applications using React and Angular. Gained experience in HTML, CSS, and JavaScript."
    }
  ];

  return (
    <section id="experience" className="py-20 bg-black/[0.96]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-heading font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">Work Experience</h2>
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <ExperienceItem key={index} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
