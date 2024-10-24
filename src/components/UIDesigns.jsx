import React from "react";
import { ExternalLink } from "lucide-react";

const UIDesigns = () => {
  const designs = [
    {
      title: "Cuos Re-branding Project",
      description:
        "A Re-branding Project for the company CUOS SA that i made for the course of Illustrator in Coderhouse",
      imageUrl: "/cuos-illus.png",
      figmaUrl:
        "https://www.behance.net/gallery/204110637/Manual-de-identidad-CUOS",
    },
    {
      title: "Divishare Prototype Views",
      description:
        "Divishare is a cost-sharing application developed as part of an independent project with Wishmakers. These are the prototype views created to visualize the app's core functionalities.",
      imageUrl: "/divishare-prototype.png",
      figmaUrl:
        "https://www.figma.com/design/hLQZXFW1UEvYGsC0vW5AEc/Divishare?node-id=0-1&m=dev&t=OCKFTZ6gTtE4JLIR-1",
    },
    {
      title: "Scorza Prototype Views",
      description:
        "Scorza is an application we developed with Cuos to manage their product inventory. These prototype views were designed and approved by the company for development.",
      imageUrl: "/scorza-prototype.png",
      figmaUrl:
        "https://www.figma.com/design/zMVCicMsv4zNnt9TvMql53/Scorza?node-id=0-1&m=dev&t=yRqw89PRuwc3eMTC-1",
    },
    {
      title: "Cuos Prototype Cards",
      description: 
      "Designed and developed a variety of prototype cards and banners for the company, focusing on modern aesthetics, user engagement, and brand consistency. These prototypes were created to align with the company's visual identity and marketing goals.",
      imageUrl: "/cuos-hero.png",
      figmaUrl:
        "https://www.figma.com/design/VV9r5nzxlTFA60CFiajKUM/CUOS-Cards?node-id=0-1&m=dev&t=ljCtiSgE0EevTaSq-1",
    },
  ];

const DesignCard = ({ title, description, imageUrl, figmaUrl }) => (
  <div className="bg-black shadow-md overflow-hidden rounded-xl border border-gray-900 flex flex-col justify-between">
    <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6 flex flex-col flex-grow">
      {" "}
      {/* Flex column + grow */}
      <h3 className="text-xl font-bold mb-2 font-bold lg:text-2xl md:text-xl text-base line-clamp-1 font-bold bg-clip-text text-transparent bg-gradient-to-b from-purple to-neutral-400 bg-opacity-50">
        {title}
      </h3>
      <p
        className="lg:text-xl lg:font-normal font-light text-sm text-gray-600 mb-4 flex-grow"
        style={{
          color: "#BEC1DD",
          margin: "1vh 0",
        }}
      >
        {description}
      </p>{" "}
      <a
        href={figmaUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-outline btn-light text-zinc-400 hover:text-purple"
      >
        View Project <ExternalLink size={16} className="mr-2" />
      </a>
    </div>
  </div>
);


  return (
    <section
      id="ui-designs"
      className="py-20 bg-gray-100"
      style={{
        background:
          "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(30,20,32,1) 26%, rgba(21,2,32,1) 100%)",
      }}
    >
      <div className="container mx-auto px-6 ">
        <h2 className="text-3xl font-heading font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Some of my <span className="text-purple"> UI Design Projects</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {designs.map((design, index) => (
            <DesignCard key={index} {...design} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UIDesigns;
