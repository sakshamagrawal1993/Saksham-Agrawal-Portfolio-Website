import React from 'react';
import Section from './Section';
import { PROFILE_DATA, EDUCATION, AWARDS } from '../data/profile';
import { MapPin, GraduationCap, Trophy, Calendar } from 'lucide-react';

const About = () => {
  return (
    <Section id="about" title="About Me" subtitle="Professional Profile">
      <div className="max-w-7xl mx-auto">
        
        {/* Bio Section with Glass Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          <div className="lg:col-span-5 order-2 lg:order-1 relative group">
             <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary rounded-2xl opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-500"></div>
             <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
               <img 
                src="https://picsum.photos/800/1000?grayscale&random=10" 
                alt={PROFILE_DATA.name}
                className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80"></div>
               <div className="absolute bottom-6 left-6 right-6">
                 <div className="flex items-center gap-2 px-3 py-1.5 bg-black/40 backdrop-blur-md rounded-lg text-white/90 w-fit border border-white/10">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">{PROFILE_DATA.location}</span>
                 </div>
               </div>
             </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              Driving innovation at the intersection of <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">AI, Fintech, and Product Strategy</span>.
            </h3>
            <div className="space-y-6 text-lg text-slate-300 leading-relaxed bg-white/5 p-8 rounded-2xl border border-white/5 backdrop-blur-sm">
              <p>{PROFILE_DATA.about}</p>
            </div>
          </div>
        </div>

        {/* Awards & Education Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Education Cards */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="p-2 bg-primary/20 rounded-lg"><GraduationCap className="w-5 h-5 text-primary" /></div>
                Education
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {EDUCATION.map((edu) => (
                  <div key={edu.id} className="group bg-surfaceHighlight/30 hover:bg-surfaceHighlight/50 border border-white/5 hover:border-primary/30 p-6 rounded-2xl transition-all duration-300 hover:shadow-glow">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-bold text-white group-hover:text-primary transition-colors">{edu.institution}</h4>
                      <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">{edu.period}</span>
                    </div>
                    <p className="text-slate-300 font-medium mb-1">{edu.degree}</p>
                    <p className="text-sm text-slate-500">{edu.score}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Awards Cards */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="p-2 bg-yellow-500/20 rounded-lg"><Trophy className="w-5 h-5 text-yellow-500" /></div>
                Awards & Recognition
              </h3>
              <div className="space-y-4">
                {AWARDS.map((award) => (
                  <div key={award.id} className="bg-surfaceHighlight/30 border border-white/5 p-6 rounded-2xl flex gap-4 items-start hover:bg-surfaceHighlight/50 transition-colors">
                    <div className="mt-1 w-2 h-2 rounded-full bg-yellow-500 shrink-0 shadow-[0_0_10px_rgba(234,179,8,0.5)]"></div>
                    <div>
                      <h4 className="text-white font-bold text-lg leading-none mb-2">{award.title}</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">{award.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

        </div>

      </div>
    </Section>
  );
};

export default About;