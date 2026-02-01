
import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-32 px-6 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-20 uppercase tracking-tight text-center">Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {SKILLS.map((cat, idx) => (
            <div key={idx} className="group p-10 border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-500 rounded-sm">
              <h3 className="text-lg font-bold mb-10 uppercase tracking-widest text-white/50 group-hover:text-white transition-colors">
                {cat.title}
              </h3>
              <ul className="space-y-6">
                {cat.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="text-xl font-light text-gray-400 group-hover:text-gray-200 transition-colors">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
