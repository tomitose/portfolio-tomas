import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactItem = ({ icon, text, href }) => (
  <div className="flex items-center mb-4">
    {icon}
    {href ? (
      <a href={href} className="ml-2 hover:text-blue-600">{text}</a>
    ) : (
      <span className="ml-2">{text}</span>
    )}
  </div>
);

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-heading font-bold mb-12 text-center">Contact Me</h2>
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
          <ContactItem 
            icon={<Phone size={20} className="text-blue-600" />}
            text="(+54) 351 6709570"
            href="tel:+543516709570"
          />
          <ContactItem 
            icon={<Mail size={20} className="text-blue-600" />}
            text="tomitosello@gmail.com"
            href="mailto:tomitosello@gmail.com"
          />
          <ContactItem 
            icon={<MapPin size={20} className="text-blue-600" />}
            text="Córdoba, Capital, Argentina"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
