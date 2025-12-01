import React from 'react';
import Section from './Section';
import { SKILLS } from '../data/profile';
import { CheckCircle2 } from 'lucide-react';

const Skills = () => {
  return (
    <Section id="skills" title="Competencies" subtitle="Technical Arsenal" className="bg-background relative overflow-hidden">
      
      {/* Decorator */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SKILLS.map((skillGroup, index) => (
            <div key={index} className="bg-surfaceHighlight/30 border border-white/5 p-8 rounded-3xl backdrop-blur-md hover:bg-surfaceHighlight/40 transition-colors">
              <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 mb-6 pb-4 border-b border-white/5">
                 {skillGroup.category}
              </h3>
              <div className="space-y-3">
                {skillGroup.items.map((skill) => (
                  <div key={skill} className="flex items-center gap-3 text-slate-300 group">
                    <CheckCircle2 className="w-4 h-4 text-primary/50 group-hover:text-primary transition-colors" />
                    <span className="text-sm font-medium group-hover:text-white transition-colors">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Skills;