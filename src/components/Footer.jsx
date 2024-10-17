
import { Github, Linkedin } from "lucide-react";
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactItem = ({ icon, text, href }) => (
  <div className="flex items-center mb-4 w-96">
    {icon}
    {href ? (
      <a href={href} className="ml-2 hover:text-blue-200 text-white"> {/* Aquí se agrega text-white */}
        {text}
      </a>
    ) : (
      <span className="ml-2 text-white">{text}</span> // Aquí se agrega text-white
    )}
  </div>
);


const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10 bg-black/[0.96]" id="contact">

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw] text-3xl font-heading mb-12 font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Let's Collaborate on Your{" "}
          <span className="text-purple">Next Project </span>
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center text-xl font-heading mb-12 font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          If you have any questions or are looking for a passionate Front-End
          Developer to elevate your projects, feel free to reach out.
        </p>
        <section id="contact" className="py-20 ">
      <div className="container mx-auto px-6">
        
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8 bg-white p-6 rounded-lg shadow-md rounded-2xl opacity-80" 
          style={{
            background: 'linear-gradient(85deg, rgb(26 6 61) 0%, rgb(20 10 59) 13%, rgb(12 8 53) 51%, rgb(22 3 33) 100%)'
          }}>
            <h2 className="text-3xl font-heading mb-12 font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Contact Me
        </h2>
          <ContactItem 
            icon={<Phone size={20} className="text-purple" />}
            text="(+54) 351 6709570"
            href="tel:+543516709570"
          />
          <ContactItem 
            icon={<Mail size={20} className="text-purple" />}
            text="tomitosello@gmail.com"
            href="mailto:tomitosello@gmail.com"
          />
          <ContactItem 
            icon={<MapPin size={20} className="text-purple" />}
            text="Córdoba, Capital, Argentina"
          />
        </div>
      </div>
    </section>

      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light text-purple">
        Copyright © 2024 Tomás Tosello
        </p>

        <div className="flex justify-center space-x-4 pt-12">
          <a
            href="https://github.com/tomitose"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline btn-light hover:text-purple"
          >
            <Github className="mr-2" /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/tomas-tosello"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline btn-light bg-aliceblue hover:text-purple"
          >
            <Linkedin className="mr-2" /> LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
