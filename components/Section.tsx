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
    <section id={id} className={`py-24 md:py-32 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          {subtitle && (
            <div className="flex items-center gap-2 mb-3">
               <span className="w-8 h-px bg-primary"></span>
               <span className="text-primary font-bold uppercase tracking-widest text-sm">{subtitle}</span>
            </div>
          )}
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
};

export default Section;