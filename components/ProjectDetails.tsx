import React, { useEffect } from 'react';
import { Project } from '../types';
import { ArrowLeft, Calendar, User, Code2, CheckCircle2 } from 'lucide-react';

interface ProjectDetailsProps {
  project: Project;
  onBack: () => void;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project, onBack }) => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background pt-24 pb-12 animate-fade-in-up">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Button */}
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8"
        >
          <div className="p-2 rounded-full bg-surface border border-white/5 group-hover:border-primary/50 transition-colors">
            <ArrowLeft className="w-4 h-4" />
          </div>
          <span className="font-medium">Back to Projects</span>
        </button>

        {/* Hero Section */}
        <div className="rounded-2xl overflow-hidden border border-white/10 bg-surface shadow-2xl mb-10">
           <div className="relative h-64 md:h-80 lg:h-96">
              <img 
                src={project.imageUrl} 
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-90"></div>
              <div className="absolute bottom-0 left-0 p-6 md:p-10">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map(tech => (
                    <span key={tech} className="px-3 py-1 text-xs font-semibold bg-primary text-white rounded-full shadow-lg shadow-primary/20">
                      {tech}
                    </span>
                  ))}
                </div>
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">{project.title}</h1>
                <p className="text-lg text-slate-300 max-w-2xl">{project.description}</p>
              </div>
           </div>
           
           {/* Meta Data */}
           <div className="grid grid-cols-1 md:grid-cols-3 border-t border-white/10 divide-y md:divide-y-0 md:divide-x divide-white/10 bg-surfaceHighlight/20">
              <div className="p-6 flex items-start gap-4">
                 <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                    <User className="w-5 h-5" />
                 </div>
                 <div>
                    <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Role</div>
                    <div className="font-medium text-white">{project.role}</div>
                 </div>
              </div>
              <div className="p-6 flex items-start gap-4">
                 <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400">
                    <Calendar className="w-5 h-5" />
                 </div>
                 <div>
                    <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Timeline</div>
                    <div className="font-medium text-white">{project.timeline}</div>
                 </div>
              </div>
              <div className="p-6 flex items-start gap-4">
                 <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400">
                    <Code2 className="w-5 h-5" />
                 </div>
                 <div>
                    <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Company</div>
                    <div className="font-medium text-white">{project.company}</div>
                 </div>
              </div>
           </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
           <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                 Key Contributions & Impact
                 <span className="h-px flex-1 bg-white/10"></span>
              </h2>
              <div className="bg-surface border border-white/5 rounded-2xl p-8 space-y-6">
                 {project.bullets.map((bullet, idx) => (
                    <div key={idx} className="flex gap-4 group">
                       <div className="mt-1 shrink-0">
                          <CheckCircle2 className="w-5 h-5 text-primary/50 group-hover:text-primary transition-colors" />
                       </div>
                       <p className="text-slate-300 leading-relaxed text-lg">
                          {bullet}
                       </p>
                    </div>
                 ))}
              </div>
           </div>
        </div>

      </div>
    </div>
  );
};

export default ProjectDetails;