import React from 'react';
import Section from './Section';
import { PROFILE_DATA, EDUCATION, AWARDS } from '../data/profile';
import { MapPin, Calendar, GraduationCap, Trophy } from 'lucide-react';

const About = () => {
  return (
    <Section id="about" title="About Me" subtitle="Professional Profile">
      <div className="max-w-6xl mx-auto">
        {/* Top: Bio & Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          <div className="lg:col-span-5 order-2 lg:order-1">
             <div className="relative group">
                <div className="absolute inset-0 bg-primary/20 rounded-2xl transform rotate-3 transition-transform group-hover:rotate-1"></div>
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-surface border border-white/10 shadow-2xl">
                   <img 
                    src="https://picsum.photos/800/1000?grayscale&random=10" 
                    alt={PROFILE_DATA.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                   <div className="absolute bottom-6 left-6 right-6">
                      <div className="flex items-center gap-4 text-white/90">
                         <div className="flex items-center gap-2 text-sm font-medium">
                            <MapPin className="w-4 h-4 text-primary" />
                            {PROFILE_DATA.location}
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2">
            <h3 className="text-3xl font-bold text-white mb-6">
              Product Leader with <span className="text-primary">7+ Years</span> Experience
            </h3>
            <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
              <p>{PROFILE_DATA.about}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
               {/* Education Block */}
               <div className="bg-surface/50 border border-white/5 rounded-xl p-6 hover:bg-surface/80 transition-colors">
                  <h4 className="flex items-center gap-2 text-white font-bold mb-4">
                     <GraduationCap className="w-5 h-5 text-primary" />
                     Education
                  </h4>
                  <div className="space-y-4">
                     {EDUCATION.map((edu) => (
                        <div key={edu.id} className="border-l-2 border-white/10 pl-4 py-1">
                           <div className="text-white font-medium">{edu.institution}</div>
                           <div className="text-sm text-textMuted">{edu.degree}</div>
                           <div className="text-xs text-primary mt-1 font-mono">{edu.period} • {edu.score}</div>
                        </div>
                     ))}
                  </div>
               </div>

               {/* Awards Block */}
               <div className="bg-surface/50 border border-white/5 rounded-xl p-6 hover:bg-surface/80 transition-colors">
                  <h4 className="flex items-center gap-2 text-white font-bold mb-4">
                     <Trophy className="w-5 h-5 text-yellow-500" />
                     Awards
                  </h4>
                  <div className="space-y-4">
                     {AWARDS.map((award) => (
                        <div key={award.id} className="flex gap-3">
                           <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-yellow-500 shrink-0"></div>
                           <div>
                              <div className="text-white font-medium text-sm">{award.title}</div>
                              <div className="text-xs text-textMuted mt-1 leading-snug">{award.description}</div>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;