import React from 'react';
import Section from './Section';
import { EXPERIENCE } from '../data/profile';

const Experience = () => {
  return (
    <Section id="experience" title="Professional Journey" subtitle="7+ Years of Impact" className="bg-background">
      <div className="max-w-5xl mx-auto relative">
        
        {/* Vertical Line */}
        <div className="absolute left-0 md:left-1/2 transform -translate-x-px h-full w-px bg-gradient-to-b from-primary/50 via-secondary/50 to-transparent"></div>

        <div className="space-y-16">
          {EXPERIENCE.map((exp, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={exp.id} className={`relative flex items-center justify-between md:justify-normal ${isEven ? 'md:flex-row-reverse' : ''} group`}>
                
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full border-4 border-background bg-gradient-to-br from-primary to-secondary z-10 shadow-[0_0_20px_rgba(59,130,246,0.5)] group-hover:scale-125 transition-transform duration-300"></div>

                {/* Spacer for Desktop */}
                <div className="hidden md:block w-1/2" />

                {/* Content Card */}
                <div className={`w-full md:w-[calc(50%-40px)] pl-12 md:pl-0 ${isEven ? 'md:pr-10 text-left' : 'md:pl-10 text-left'}`}>
                  <div className="relative p-6 md:p-8 bg-surfaceHighlight/40 border border-white/5 rounded-2xl hover:bg-surfaceHighlight/60 hover:border-primary/30 transition-all duration-300 backdrop-blur-sm group-hover:shadow-glow hover:-translate-y-1">
                    
                    {/* Header */}
                    <div className="mb-4">
                       <span className="inline-block px-3 py-1 rounded-full bg-white/5 text-primary text-xs font-bold mb-2 border border-white/5">
                         {exp.period}
                       </span>
                       <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{exp.role}</h3>
                       <div className="text-lg text-secondary font-medium">{exp.company}</div>
                       {exp.location && <div className="text-sm text-slate-500 mt-1">{exp.location}</div>}
                    </div>
                    
                    {/* List */}
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-slate-300 text-sm leading-relaxed">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-primary transition-colors shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default Experience;