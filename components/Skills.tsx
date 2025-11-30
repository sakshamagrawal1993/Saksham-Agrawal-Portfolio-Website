import React from 'react';
import Section from './Section';
import { SKILLS } from '../data/profile';
import { Check } from 'lucide-react';

const Skills = () => {
  return (
    <Section id="skills" title="Competencies & Tools" subtitle="Technical Expertise" className="bg-surface/20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SKILLS.map((skillGroup, index) => (
            <div key={index} className="bg-surface border border-white/5 p-8 rounded-2xl hover:border-primary/20 hover:bg-surfaceHighlight/30 transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-6 pb-4 border-b border-white/5 flex items-center gap-3">
                 <span className="w-1 h-6 bg-primary rounded-full"></span>
                 {skillGroup.category}
              </h3>
              <div className="space-y-4">
                {skillGroup.items.map((skill) => (
                  <div key={skill} className="flex items-center gap-3 text-slate-300 group">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                       <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-base font-medium">{skill}</span>
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