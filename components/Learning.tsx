
import React from 'react';
import { LEARNING } from '../constants';

const Learning: React.FC = () => {
  return (
    <section id="learning" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 uppercase tracking-tight text-center">Continuous Growth</h2>
        <div className="space-y-4">
          {LEARNING.map((item, idx) => (
            <div key={idx} className="group flex justify-between items-center py-8 border-b border-white/10 hover:border-white/40 transition-all">
              <div>
                <h3 className="text-xl font-medium group-hover:text-white transition-colors">{item.title}</h3>
                <p className="text-gray-500 uppercase text-xs tracking-widest mt-1">{item.issuer}</p>
              </div>
              <span className="text-gray-600 font-mono text-sm">{item.year}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Learning;
