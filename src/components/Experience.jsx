import React from 'react';
import { Briefcase } from 'lucide-react';

const ExperienceItem = ({ title, company, period, description }) => (
  <div className="mb-8">
    <div className="flex items-center mb-2">
      <Briefcase size={20} className="mr-2 text-blue-600" />
      <h3 className="text-xl font-bold">{title}</h3>
    </div>
    <p className="text-lg font-semibold">{company}</p>
    <p className="text-sm text-gray-600 mb-2">{period}</p>
    <p>{description}</p>
  </div>
);

const Experience = () => {
  const experiences = [
    {
      title: "Front-end Developer",
      company: "Tech Solutions Inc.",
      period: "January 2020 - Present",
      description: "Developed and maintained responsive web applications using React and Angular. Collaborated with UX/UI designers to implement pixel-perfect designs."
    },
    {
      title: "Junior Web Developer",
      company: "Digital Creations Co.",
      period: "June 2018 - December 2019",
      description: "Assisted in the development of WordPress websites and custom themes. Gained experience in HTML, CSS, and JavaScript."
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-heading font-bold mb-12 text-center">Work Experience</h2>
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
