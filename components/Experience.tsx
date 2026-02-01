
import React from 'react';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-20 uppercase tracking-tight text-center">Professional Experience</h2>
        <div className="space-y-24">
          {EXPERIENCES.map((exp, idx) => (
            <div key={idx} className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start relative">
              <div className="md:col-span-3">
                <p className="text-sm font-bold tracking-widest text-gray-500 uppercase">{exp.duration}</p>
                <h3 className="text-2xl font-bold mt-2">{exp.company}</h3>
              </div>
              <div className="md:col-span-9 border-l border-white/10 pl-8 md:pl-16 pb-4">
                <h4 className="text-xl font-medium text-white mb-6 uppercase tracking-wider">{exp.role}</h4>
                <ul className="space-y-4">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex gap-4 items-start text-gray-400 group">
                      <span className="w-1.5 h-1.5 bg-white shrink-0 mt-2 opacity-30 group-hover:opacity-100 transition-opacity"></span>
                      <p className="font-light leading-relaxed group-hover:text-white transition-colors">{bullet}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
