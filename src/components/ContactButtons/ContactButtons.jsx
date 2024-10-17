import { Github, Linkedin } from 'lucide-react';

export function ContactButtons() {
  return (
    <div className="flex justify-center space-x-4 pt-12">
      <a 
        href="mailto:tomitosello@gmail.com" 
        className="btn btn-outline btn-light flex items-center"
      >
        <span className="mr-2">📧</span> Email Me
      </a>
      <a 
        href="https://wa.me/543516709570" 
        className="btn btn-outline btn-light flex items-center"
      >
        <span className="mr-2">📱</span> WhatsApp
      </a>
      <a 
        href="https://www.linkedin.com/in/tomas-tosello/" 
        className="btn btn-outline btn-light flex items-center"
      >
        <Linkedin className="mr-2" /> LinkedIn
      </a>
    </div>
  );
}
