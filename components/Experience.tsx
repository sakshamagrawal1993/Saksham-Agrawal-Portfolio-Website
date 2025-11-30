import React from 'react';
import Section from './Section';
import { EXPERIENCE } from '../data/profile';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  return (
    <Section id="experience" title="Professional Experience" subtitle="Track Record of Success" className="bg-surface/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col gap-12">
          {EXPERIENCE.map((exp, index) => (
            <div key={exp.id} className="group relative">
              {/* Desktop Grid Layout */}
              <div className="hidden md:grid md:grid-cols-[250px_40px_1fr] gap-4 items-start">
                
                {/* Column 1: Date & Location */}
                <div className="text-right pt-1 pr-4">
                  <h4 className="text-lg font-bold text-white leading-tight">{exp.period}</h4>
                  {exp.location && (
                    <p className="text-sm text-textMuted mt-1 font-medium">{exp.location}</p>
                  )}
                  <p className="text-sm text-primary mt-2 font-semibold tracking-wide uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {exp.company}
                  </p>
                </div>

                {/* Column 2: Timeline Line & Dot */}
                <div className="relative h-full flex justify-center">
                  <div className="w-px h-full bg-white/10 group-hover:bg-white/20 transition-colors absolute top-0 bottom-0 left-1/2 -translate-x-1/2"></div>
                  <div className="w-4 h-4 rounded-full border-2 border-primary bg-background z-10 mt-1.5 group-hover:scale-125 group-hover:bg-primary transition-all duration-300 shadow-[0_0_0_4px_rgba(15,23,42,1)]"></div>
                </div>

                {/* Column 3: Content Card */}
                <div className="pt-0 pb-8">
                  <div className="bg-surface hover:bg-surfaceHighlight/50 border border-white/5 rounded-xl p-8 transition-all duration-300 group-hover:shadow-glow group-hover:border-primary/20">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                      <div className="text-xl text-primary font-medium">{exp.company}</div>
                    </div>
                    
                    <ul className="space-y-3">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-300 text-base leading-relaxed">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Mobile Layout (Stacked) */}
              <div className="md:hidden flex gap-4">
                 <div className="flex flex-col items-center">
                    <div className="w-4 h-4 rounded-full border-2 border-primary bg-background shrink-0 z-10 mt-1"></div>
                    <div className="w-px h-full bg-white/10 my-2"></div>
                 </div>
                 <div className="pb-10">
                    <div className="mb-2">
                       <span className="inline-block px-3 py-1 rounded-full bg-white/5 text-primary text-xs font-bold mb-2">
                         {exp.period}
                       </span>
                       <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                       <p className="text-lg text-textMuted">{exp.company}</p>
                    </div>
                    <div className="bg-surface border border-white/5 rounded-xl p-5">
                      <ul className="space-y-3">
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                 </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Experience;