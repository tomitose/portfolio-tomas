import React from 'react';
import { Code, Database, Figma, GitBranch } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SkillLogo = ({ name }) => {
  const baseUrl = `/logos/${name.toLowerCase().replace(/\s+/g, '-')}`;
  const logoUrlSvg = `${baseUrl}.svg`;
  const logoUrlPng = `${baseUrl}.png`;
  const logoUrlWebp = `${baseUrl}.webp`;

  const handleError = (e) => {
    if (e.target.src.endsWith('.svg')) {
      e.target.src = logoUrlPng; // si falla el SVG → intenta PNG
    } else if (e.target.src.endsWith('.png')) {
      e.target.src = logoUrlWebp; // si falla el PNG → intenta WEBP
    } else {
      e.target.onerror = null; // si también falla el WEBP, corta el bucle
      e.target.src = '/logos/default.png'; // opcional: imagen fallback final
    }
  };



  // Usamos un evento onError para intentar cargar el PNG si el SVG falla
  return (
    <img
      src={logoUrlSvg}
      onError={handleError}
      alt={`${name} logo`}
      className="w-6 h-6 mr-2"
    />
  );
};

const SkillItem = ({ name, index }) => (
  <motion.li
    variants={{
      hidden: { opacity: 0, x: -20 },
      visible: { opacity: 1, x: 0 }
    }}
    transition={{ duration: 0.3, delay: index * 0.1 }}
    className="mb-2 flex items-center hover:text-purple-400 transition-colors duration-300"
  >
    <SkillLogo name={name} />
    {name}
  </motion.li>
);

const SkillCategory = ({ title, skills, icon, index }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 }
    }}
    transition={{ duration: 0.5, delay: index * 0.2 }}
    className="bg-white p-6 shadow-lg rounded-2xl transform hover:scale-105 transition-all duration-300"
    style={{
      background: 'linear-gradient(85deg, rgb(26 6 61) 0%, rgb(20 10 59) 13%, rgb(12 8 53) 51%, rgb(22 3 33) 100%)',
    }}
  >
    <div className="flex items-center mb-4 text-purple">
      <motion.div
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.5 }}
      >
        {icon}
      </motion.div>
      <h3 className="text-xl font-bold ml-2 text-white">{title}</h3>
    </div>
    <motion.ul
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.1
          }
        }
      }}
      className="list-none text-white"
    >
      {skills.map((skill, idx) => (
        <SkillItem key={idx} name={skill} index={idx} />
      ))}
    </motion.ul>
  </motion.div>
);

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: "Front-end Development",
      icon: <Code size={24} />,
      skills: ["React","Next", "Angular", "HTML", "CSS", "JavaScript", "TypeScript", "Wordpress"]
    },
    {
      title: "Back-end & Databases",
      icon: <Database size={24} />,
      skills: ["MySQL", "MongoDB", "GraphQL", "Strapi","RestApi"]
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
    <section id="skills" className="py-20 bg-black/[0.96] bg-grid-white/[0.02]">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.3
              }
            }
          }}
        >
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-heading font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50"
          >
            Skills & Expertise
          </motion.h2>
          <motion.div
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {skillCategories.map((category, index) => (
              <SkillCategory key={index} {...category} index={index} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
