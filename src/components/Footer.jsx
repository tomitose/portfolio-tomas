
import { Github, Linkedin } from "lucide-react";
import { Phone, Mail, MapPin } from 'lucide-react';



const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10 bg-black/[0.96]" id="contact">

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw] text-3xl font-heading mb-12 font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
        Let's Connect for{" "}
          <span className="text-purple">Future Opportunities </span>
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center text-xl font-heading mb-12 font-bold  bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          If you have any questions or are looking for a passionate Front-End
          Developer to elevate your projects, feel free to reach out.
        </p>
        <section id="contact" className="py-20 ">
      <div className="container mx-auto px-6">
        
        <div className="max-w-md mx-auto bg-white shadow-md p-8   rounded-2xl opacity-80" 
          style={{
            background: 'linear-gradient(85deg, rgb(26 6 61) 0%, rgb(20 10 59) 13%, rgb(12 8 53) 51%, rgb(22 3 33) 100%)'
          }}>
            <h2 className="text-3xl font-heading mb-12 font-bold  text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
              Contact Me
            </h2>
            <div className="flex justify-center space-x-4 pt-12">
              <a
                href="https://github.com/tomitose"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-light text-zinc-400 hover:text-purple"
              >
                <Github className="mr-2" /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/tomas-tosello"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-light text-zinc-400 hover:text-purple"
              >
                <Linkedin className="mr-2" /> LinkedIn
              </a>
              <a
                href="mailto:tomitosello@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-light text-zinc-400 hover:text-purple"
              >
                <Mail className="mr-2" /> Mail
              </a>
            </div>
        </div>
      </div>
    </section>

      </div>
      <div className="flex mt-16 flex-col justify-between items-center">
        <img src="/tt-violet.png" alt="logo" className="text-center h-28"/>
        <p className="md:text-base text-sm md:font-normal font-light text-purple pt-4 ">
        Copyright © 2024 Tomás Tosello
        </p>
        <p className="md:text-base text-sm md:font-normal font-light text-purple pt-4 ">
        Córdoba, Argentina 
        </p>
      </div>
    </footer>
  );
};

export default Footer;
