import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, subtitle, children, className = "" }) => {
  return (
    <section id={id} className={`py-24 md:py-32 relative overflow-hidden ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-20 md:text-center max-w-3xl mx-auto">
          {subtitle && (
            <div className="flex items-center gap-3 mb-4 md:justify-center">
               <span className="w-12 h-px bg-gradient-to-r from-transparent to-primary"></span>
               <span className="text-primary font-bold uppercase tracking-[0.2em] text-xs">{subtitle}</span>
               <span className="w-12 h-px bg-gradient-to-l from-transparent to-primary"></span>
            </div>
          )}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
};

export default Section;