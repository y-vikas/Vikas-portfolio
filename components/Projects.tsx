
import React, { useState } from 'react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'ALL' | 'QA' | 'Product'>('ALL');

  const filteredProjects = filter === 'ALL' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <h2 className="text-4xl font-bold uppercase tracking-tight">Selected Projects</h2>
          <div className="flex gap-4">
            {['ALL', 'QA', 'Product'].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f as any)}
                className={`px-6 py-2 text-xs uppercase tracking-widest transition-all ${filter === f ? 'bg-white text-black font-bold' : 'text-gray-500 hover:text-white border border-white/10'}`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <div key={idx} className="group relative p-12 bg-[#121212] hover:bg-[#1a1a1a] transition-all duration-500 flex flex-col justify-between min-h-[400px]">
              <div>
                <span className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-6 block">
                  {project.category === 'QA' ? 'Quality Assurance' : 'Product Thinking'}
                </span>
                <h3 className="text-3xl font-bold mb-6 group-hover:translate-x-2 transition-transform duration-500">
                  {project.title}
                </h3>
                <p className="text-gray-400 font-light leading-relaxed mb-8 text-lg">
                  {project.description}
                </p>
              </div>
              <div className="pt-8 border-t border-white/5">
                <p className="text-sm font-medium text-white/70 uppercase tracking-widest mb-2">Outcome</p>
                <p className="text-white italic">{project.outcome}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
