import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-black/[0.96] ">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-heading font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">About Me</h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-normal text-xl text-neutral-300 text-center mx-auto">
          I am a passionate Front-end Developer and UX/UI Designer dedicated to creating engaging and intuitive web experiences. My focus is on blending design with functionality to deliver solutions that enhance user interaction.
          Always seeking new challenges, I strive to expand my skills and stay updated with the latest industry tools. As a proactive and responsible team player, I thrive on collaboration to bring innovative projects to life.
          My goal is to contribute to impactful digital solutions that resonate with users and drive positive change.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
