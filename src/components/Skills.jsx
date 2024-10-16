import React from 'react';
import { Code, Database, Figma, GitBranch } from 'lucide-react';

const SkillLogo = ({ name }) => {
  const logoUrl = `/logos/${name.toLowerCase().replace(/\s+/g, '-')}.svg`;
  return (
    <img src={logoUrl} alt={`${name} logo`} className="w-6 h-6 mr-2" />
  );
};

const SkillItem = ({ name }) => (
  <li className="mb-2 flex items-center">
    <SkillLogo name={name} />
    {name}
  </li>
);

const SkillCategory = ({ title, skills, icon }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="flex items-center mb-4">
      {icon}
      <h3 className="text-xl font-bold ml-2">{title}</h3>
    </div>
    <ul className="list-none">
      {skills.map((skill, index) => (
        <SkillItem key={index} name={skill} />
      ))}
    </ul>
  </div>
);

const Skills = () => {
  const skillCategories = [
    {
      title: "Front-end Development",
      icon: <Code size={24} />,
      skills: ["React", "Angular", "HTML", "CSS", "JavaScript", "TypeScript", "Wordpress"]
    },
    {
      title: "Back-end & Databases",
      icon: <Database size={24} />,
      skills: ["MySQL", "MongoDB", "GraphQL", "RESTAPI", "Strapi"]
    },
    {
      title: "UI/UX Design",
      icon: <Figma size={24} />,
      skills: ["Figma", "Photoshop", "Illustrator"]
    },
    {
      title: "Tools & Others",
      icon: <GitBranch size={24} />,
      skills: ["Git", "GitHub", "Vite", "Node", "Socket"]
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
