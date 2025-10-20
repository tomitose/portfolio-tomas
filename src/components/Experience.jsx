import React from 'react';
import { Briefcase } from 'lucide-react';

const ExperienceItem = ({ title, company, period, description }) => (
  <div className="mb-8">
    <div className="flex items-center mb-2">
      <Briefcase size={20} className="mr-2 text-purple" />
      <h3 className="text-xl font-bold text-purple">{title}</h3>
    </div>
    <p className="text-lg font-semibold text-neutral-300  mx-auto">{company}</p>
    <p className="text-md text-neutral-300 mb-2">{period}</p>
    <p className="text-md text-neutral-300 mb-2">{description}</p>
  </div>
);

const Experience = () => {
  const experiences = [
    {
      title: "Front-end Developer and UX/UI Designer",
      company: "Cuos S.A.",
      period: "Feb 2021 - Present",
      description: "Developed and maintained responsive web applications using React and Angular. Collaborated with a team of developers on various projects, providing innovative solutions to meet clients' needs."
    },
    {
      title: "Lead Front-end Developer and UX/UI Designer",
      company: "Wishmakers",
      period: "Mar 2024 - Present",
      description: "Leading front-end development (React) and UX/UI design (Figma,Illustrator) in a freelance team. We work on independent projects with the goal of attracting potential clients by providing them with the best services and tailored technological solutions."
    },
    {
      title: "Administrative Section",
      company: "Integrametrics",
      period: "Mar 2015 - Jul 2022",
      description: "Responsible for overseeing customer quality control, ensuring service standards are met, and handling customer inquiries and complaints with efficiency and professionalism."    },
    {
      title: "Junior Front-end Developer",
      company: "H-Virtual",
      period: "Sep 2021 - Jan 2023",
      description: "Developed and maintained the E-learning platform, focusing on responsive web applications. Gained valuable experience in HTML, CSS, and JavaScript, contributing to the improvement of user experience and platform functionality."
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
