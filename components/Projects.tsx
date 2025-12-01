import React from 'react';
import Section from './Section';
import { PROJECTS } from '../data/profile';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';

interface ProjectsProps {
  onNavigate?: (view: any) => void;
}

const Projects: React.FC<ProjectsProps> = ({ onNavigate }) => {
  return (
    <Section id="projects" title="Featured Work" subtitle="Strategic Initiatives" className="relative">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-[600px] bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {PROJECTS.map((project) => (
          <div 
            key={project.id} 
            onClick={() => onNavigate && onNavigate({ type: 'project', id: project.id })}
            className="group relative flex flex-col bg-surfaceHighlight/30 border border-white/5 rounded-3xl overflow-hidden hover:border-primary/40 transition-all duration-500 hover:shadow-2xl cursor-pointer hover:-translate-y-2 backdrop-blur-md"
          >
            {/* Image Container */}
            <div className="relative h-56 overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent z-10"></div>
               <img 
                 src={project.imageUrl} 
                 alt={project.title}
                 className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
               />
               <div className="absolute top-4 right-4 z-20 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.github && (
                    <div className="p-2 bg-black/50 backdrop-blur-md rounded-full text-white hover:bg-primary transition-colors">
                      <Github className="w-4 h-4" />
                    </div>
                  )}
                  {project.link && (
                     <div className="p-2 bg-black/50 backdrop-blur-md rounded-full text-white hover:bg-primary transition-colors">
                       <ExternalLink className="w-4 h-4" />
                     </div>
                  )}
               </div>
            </div>

            {/* Content */}
            <div className="flex-1 p-8 pt-4 flex flex-col">
               <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.slice(0, 3).map((tech) => (
                     <span key={tech} className="px-2.5 py-1 text-[10px] uppercase font-bold tracking-wider bg-white/5 text-primary border border-white/5 rounded-md">
                        {tech}
                     </span>
                  ))}
               </div>
               
               <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  {project.title}
               </h3>
               
               <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
                  {project.description}
               </p>
               
               <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                  <span className="text-sm font-medium text-white group-hover:text-primary transition-colors">Read Case Study</span>
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                     <ArrowRight className="w-4 h-4" />
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