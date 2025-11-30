import React from 'react';
import Section from './Section';
import { PROFILE_DATA } from '../data/profile';
import { Mail, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <Section id="contact" title="Get In Touch" subtitle="Let's build something together">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-gray-300 text-lg mb-10">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a 
            href={`mailto:${PROFILE_DATA.email}`}
            className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-xl font-medium transition-all flex items-center justify-center gap-3 shadow-lg shadow-primary/25"
          >
            <Mail className="w-5 h-5" />
            Say Hello
          </a>
          <a 
            href="https://linkedin.com/in/saksham-agrawal/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-card hover:bg-white/10 text-white rounded-xl font-medium transition-all border border-white/10 flex items-center justify-center gap-3"
          >
            <MessageSquare className="w-5 h-5" />
            Message on LinkedIn
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Contact;