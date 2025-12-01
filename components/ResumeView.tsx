import React, { useEffect } from 'react';
import { PROFILE_DATA, EXPERIENCE, EDUCATION, SKILLS, PROJECTS, AWARDS } from '../data/profile';
import { Mail, Linkedin, Phone } from 'lucide-react';

interface ResumeViewProps {
  onBack: () => void;
}

const ResumeView: React.FC<ResumeViewProps> = ({ onBack }) => {
  useEffect(() => {
    // Automatically trigger print when this view loads
    setTimeout(() => {
        window.print();
    }, 500);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8 print:p-0 print:bg-white text-gray-900">
      {/* Navigation for Screen only */}
      <div className="max-w-[210mm] mx-auto mb-6 print:hidden flex justify-between items-center">
        <button 
          onClick={onBack}
          className="px-4 py-2 bg-slate-800 text-white rounded hover:bg-slate-700 transition-colors"
        >
          ← Back to Portfolio
        </button>
        <button 
          onClick={() => window.print()}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition-colors font-medium"
        >
          Print / Save PDF
        </button>
      </div>

      {/* A4 Resume Page */}
      <div className="max-w-[210mm] mx-auto bg-white shadow-xl print:shadow-none p-[10mm] print:p-0 min-h-[297mm]">
        
        {/* Header */}
        <header className="border-b-2 border-gray-800 pb-4 mb-4">
          <div className="flex justify-between items-end">
            <div>
              <h1 className="text-3xl font-bold uppercase tracking-wide text-gray-900">{PROFILE_DATA.name}</h1>
              <p className="text-lg font-medium text-gray-700 mt-1">{PROFILE_DATA.title}</p>
            </div>
            <div className="text-right text-sm">
              <div className="flex items-center justify-end gap-2 text-gray-600">
                <span>{PROFILE_DATA.email}</span>
                <Mail className="w-3 h-3" />
              </div>
              <div className="flex items-center justify-end gap-2 text-gray-600 mt-1">
                <span>linkedin.com/in/saksham-agrawal</span>
                <Linkedin className="w-3 h-3" />
              </div>
              <div className="flex items-center justify-end gap-2 text-gray-600 mt-1">
                <span>{PROFILE_DATA.location}</span>
              </div>
            </div>
          </div>
        </header>

        {/* Summary */}
        <section className="mb-4">
          <p className="text-sm leading-relaxed text-gray-700 text-justify">
            {PROFILE_DATA.about}
          </p>
        </section>

        {/* Experience */}
        <section className="mb-4">
          <h2 className="text-sm font-bold uppercase border-b border-gray-300 mb-3 text-blue-800">Professional Experience</h2>
          <div className="space-y-4">
            {EXPERIENCE.map((exp) => (
              <div key={exp.id}>
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-gray-900">{exp.company}</h3>
                  <span className="text-xs font-medium text-gray-600">{exp.period}</span>
                </div>
                <div className="flex justify-between items-baseline mb-1">
                   <span className="italic text-sm text-gray-800">{exp.role}</span>
                   <span className="text-xs text-gray-500">{exp.location}</span>
                </div>
                <ul className="list-disc list-outside ml-4 space-y-0.5">
                  {exp.description.map((desc, i) => (
                    <li key={i} className="text-xs text-gray-700 leading-snug pl-1">{desc}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-4">
          <h2 className="text-sm font-bold uppercase border-b border-gray-300 mb-3 text-blue-800">Education</h2>
          <div className="space-y-2">
            {EDUCATION.map((edu) => (
              <div key={edu.id} className="flex justify-between">
                <div>
                  <div className="font-bold text-sm text-gray-900">{edu.institution}</div>
                  <div className="text-xs text-gray-700">{edu.degree}</div>
                </div>
                <div className="text-right">
                   <div className="text-xs font-medium text-gray-600">{edu.period}</div>
                   <div className="text-xs text-gray-500">{edu.score}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Awards */}
        <section className="mb-4">
          <h2 className="text-sm font-bold uppercase border-b border-gray-300 mb-3 text-blue-800">Awards</h2>
          <ul className="list-disc list-outside ml-4 space-y-1">
             {AWARDS.map((award) => (
                <li key={award.id} className="text-xs text-gray-700">
                   <span className="font-bold">{award.title}:</span> {award.description}
                </li>
             ))}
          </ul>
        </section>

        {/* Skills */}
        <section>
          <h2 className="text-sm font-bold uppercase border-b border-gray-300 mb-3 text-blue-800">Skills</h2>
          <div className="grid grid-cols-1 gap-2">
             {SKILLS.map((skill) => (
                <div key={skill.category} className="text-xs">
                   <span className="font-bold text-gray-900">{skill.category}:</span> <span className="text-gray-700">{skill.items.join(', ')}</span>
                </div>
             ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default ResumeView;