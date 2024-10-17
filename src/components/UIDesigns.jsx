import React from 'react';
import { ExternalLink } from 'lucide-react';

const DesignCard = ({ title, description, imageUrl, figmaUrl }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a href={figmaUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary">
        <ExternalLink size={16} className="mr-2" /> View in Figma
      </a>
    </div>
  </div>
);

const UIDesigns = () => {
  // Aquí puedes agregar el contenido que necesites para el componente UIDesigns
  const designs = [
    {
      title: "Design Project 1",
      description: "A brief description of Design Project 1.",
      imageUrl: "/cuos-illus.png",
      figmaUrl: "https://www.behance.net/gallery/204110637/Manual-de-identidad-CUOS",
    },
    {
      title: "Design Project 2",
      description: "A brief description of Design Project 2.",
      imageUrl: "https://example.com/image2.jpg",
      figmaUrl: "https://www.figma.com/file/2",
    },
    // Agrega más proyectos según sea necesario
  ];

  return (
    <section id="ui-designs" className="py-20 bg-gray-100" style={{
      background: 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(30,20,32,1) 26%, rgba(21,2,32,1) 100%)'
,
    }}>
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-heading font-bold mb-12 font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">UI Designs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {designs.map((design, index) => (
            <DesignCard key={index} {...design} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UIDesigns;
