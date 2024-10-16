import React from "react";
import { Spotlight } from "../ui/Spotlight";
import { Github, Linkedin } from 'lucide-react';


export function SpotlightPreview() {
  return (
    <div className="h-screen w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden md:mt-3 mt-20">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen "
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Tomás Tosello
        </h1>
        <h2 className="text-3xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 pb-3">
          Front-end Developer
        </h2>
        <h2 className="text-2xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 pb-8">
          UX/UI Designer
        </h2>

        <p className="mt-4 font-normal text-xl text-neutral-300 max-w-lg text-center mx-auto">
          Passionate about creating beautiful and functional web experiences.
          Always seeking new challenges and opportunities to grow.
        </p>
        <div className="flex justify-center space-x-4 pt-12">
          <a href="https://github.com/tomitose" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-light">
            <Github className="mr-2" /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/tomas-tosello" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-light">
            <Linkedin className="mr-2" /> LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
