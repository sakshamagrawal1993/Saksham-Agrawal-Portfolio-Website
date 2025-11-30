import React from 'react';
import { ArrowRight, Download, Linkedin, Github, Mail } from 'lucide-react';
import { PROFILE_DATA, SOCIAL_LINKS } from '../data/profile';

const Hero = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Linkedin': return <Linkedin className="w-5 h-5" />;
      case 'Github': return <Github className="w-5 h-5" />;
      case 'Mail': return <Mail className="w-5 h-5" />;
      default: return null;
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-16 overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-20" 
           style={{ backgroundImage: 'radial-gradient(#334155 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
      </div>
      
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col items-center text-center">
          
          <div className="mb-6 animate-fade-in-up">
             <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold tracking-wide uppercase">
               <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
               Available for opportunities
             </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-6 tracking-tight leading-tight">
            {PROFILE_DATA.name}
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-light text-textMuted mb-8 max-w-3xl">
            {PROFILE_DATA.title}
          </h2>
          
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            {PROFILE_DATA.tagline}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 w-full sm:w-auto">
            <a
              href="#projects"
              className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primaryDark text-white rounded-lg font-semibold transition-all flex items-center justify-center gap-2 shadow-glow hover:shadow-lg hover:-translate-y-0.5"
            >
              View My Work
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={PROFILE_DATA.resumeUrl}
              className="w-full sm:w-auto px-8 py-4 bg-surface hover:bg-surfaceHighlight text-white rounded-lg font-medium transition-all border border-white/5 flex items-center justify-center gap-2"
              onClick={(e) => {
                if(PROFILE_DATA.resumeUrl === '#') {
                  e.preventDefault();
                  alert("Resume link is currently a placeholder. Please update it in data/profile.ts");
                }
              }}
            >
              Download Resume
              <Download className="w-4 h-4" />
            </a>
          </div>

          <div className="flex items-center justify-center gap-8 py-6 border-t border-white/5 w-full max-w-lg">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors duration-200"
                aria-label={link.platform}
              >
                {getIcon(link.icon)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;