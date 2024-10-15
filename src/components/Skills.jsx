import React from 'react';
import { Code, Database, Figma, GitBranch } from 'lucide-react';

const SkillCategory = ({ title, skills, icon }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="flex items-center mb-4">
      {icon}
      <h3 className="text-xl font-bold ml-2">{title}</h3>
    </div>
    <ul className="list-disc list-inside">
      {skills.map((skill, index) => (
        <li key={index} className="mb-2">{skill}</li>
      ))}
    </ul>
  </div>
);

const Skills = () => {
  const skillCategories = [
    {
      title: "Front-end Development",
      icon: <Code size={24} />,
      skills: ["React", "Angular", "HTML", "CSS", "JavaScript", "TypeScript"]
    },
    {
      title: "Back-end & Databases",
      icon: <Database size={24} />,
      skills: ["MySQL", "MongoDB", "Firebase", "GraphQL", "REST API", "Strapi"]
    },
    {
      title: "UI/UX Design",
      icon: <Figma size={24} />,
      skills: ["Figma", "Photoshop", "Illustrator"]
    },
    {
      title: "Tools & Others",
      icon: <GitBranch size={24} />,
      skills: ["Git", "GitHub", "Bitbucket", "Vite", "Node.js", "Socket.IO"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-heading font-bold mb-12 text-center">Skills & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCategory key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
