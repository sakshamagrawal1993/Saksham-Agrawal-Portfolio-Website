import React from 'react';
import Section from './Section';
import { PROJECTS } from '../data/profile';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';

const Projects = () => {
  return (
    <Section id="projects" title="Featured Work" subtitle="Strategic Initiatives & Products">
      <div className="grid grid-cols-1 gap-12 max-w-6xl mx-auto">
        {PROJECTS.map((project, index) => (
          <div key={project.id} className="group relative bg-surface border border-white/5 rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
               {/* Image Section */}
               <div className="relative h-64 md:h-auto overflow-hidden">
                  <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors"></div>
                  <img 
                    src={project.imageUrl} 
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
               </div>

               {/* Content Section */}
               <div className="p-8 md:p-10 flex flex-col justify-center">
                  <div className="mb-4 flex flex-wrap gap-2">
                     {project.techStack.map((tech) => (
                        <span key={tech} className="px-3 py-1 text-xs font-semibold bg-white/5 text-primary border border-white/5 rounded-full">
                           {tech}
                        </span>
                     ))}
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                     {project.title}
                  </h3>
                  
                  <p className="text-slate-400 text-lg leading-relaxed mb-8">
                     {project.description}
                  </p>
                  
                  <div className="flex items-center gap-6">
                     {project.link && (
                        <a href={project.link} className="flex items-center gap-2 text-white font-medium hover:text-primary transition-colors">
                           View Case Study <ArrowUpRight className="w-4 h-4" />
                        </a>
                     )}
                     {project.github && (
                        <a href={project.github} className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                           <Github className="w-4 h-4" /> Code
                        </a>
                     )}
                  </div>
               </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;