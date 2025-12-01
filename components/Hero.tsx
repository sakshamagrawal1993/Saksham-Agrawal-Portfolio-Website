import React from 'react';
import { ArrowRight, Download, Linkedin, Github, Mail, ChevronDown } from 'lucide-react';
import { PROFILE_DATA, SOCIAL_LINKS } from '../data/profile';

interface HeroProps {
  onNavigate?: (view: any) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Linkedin': return <Linkedin className="w-5 h-5" />;
      case 'Github': return <Github className="w-5 h-5" />;
      case 'Mail': return <Mail className="w-5 h-5" />;
      default: return null;
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Dynamic Backgrounds */}
      <div className="absolute inset-0 bg-hero-pattern opacity-20"></div>
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      {/* Gradient Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-pulse-slow"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px] animate-pulse-slow delay-1000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-20">
        <div className="flex flex-col items-center text-center">
          
          <div className="mb-8 animate-fade-in-up">
             <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-primary text-sm font-semibold tracking-wide uppercase shadow-lg shadow-primary/10">
               <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
               Senior Product Manager
             </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-slate-400 mb-6 tracking-tight leading-[1.1] drop-shadow-sm">
            {PROFILE_DATA.name}
          </h1>
          
          <p className="text-xl md:text-2xl font-light text-slate-300 mb-8 max-w-3xl leading-relaxed">
            {PROFILE_DATA.title} <span className="text-slate-600 px-2">•</span> {PROFILE_DATA.tagline}
          </p>

          <p className="text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed text-lg">
            A product leader with <span className="text-white font-medium">7+ years</span> of experience defining product vision and executing strategy in high-growth Fintech and cutting-edge AI sectors.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 w-full sm:w-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <a
              href="#projects"
              className="group w-full sm:w-auto px-8 py-4 bg-white text-slate-900 rounded-xl font-bold transition-all flex items-center justify-center gap-2 hover:bg-slate-200 hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            >
              View My Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <button
              onClick={() => onNavigate && onNavigate('resume')}
              className="group w-full sm:w-auto px-8 py-4 bg-white/5 backdrop-blur-sm text-white rounded-xl font-medium transition-all border border-white/10 hover:bg-white/10 hover:border-white/20 flex items-center justify-center gap-2"
            >
              Download Resume
              <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </button>
          </div>

          <div className="flex items-center justify-center gap-8 py-8 border-t border-white/5 w-full max-w-lg animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-slate-400 hover:text-white hover:bg-white/5 rounded-full transition-all duration-200 hover:scale-110"
                aria-label={link.platform}
              >
                {getIcon(link.icon)}
              </a>
            ))}
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-500">
        <ChevronDown className="w-6 h-6" />
      </div>
    </section>
  );
};

export default Hero;