
import React from 'react';
import { RECOMMENDATIONS } from '../constants';

const Recommendations: React.FC = () => {
  return (
    <section id="recommendations" className="py-32 px-6 bg-white text-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-20 uppercase tracking-tight text-center text-black">Words of Trust</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {RECOMMENDATIONS.map((rec, idx) => (
            <div key={idx} className="flex flex-col">
              <svg className="w-12 h-12 text-black/10 mb-8" fill="currentColor" viewBox="0 0 32 32">
                <path d="M10 8v8H6c0 4.418 3.582 8 8 8v4c-6.627 0-12-5.373-12-12V8h8zm18 0v8h-4c0 4.418 3.582 8 8 8v4c-6.627 0-12-5.373-12-12V8h8z" />
              </svg>
              <p className="text-2xl font-light italic leading-relaxed mb-10 text-black">
                "{rec.quote}"
              </p>
              <div className="mt-auto">
                <p className="font-bold text-lg text-black">{rec.name}</p>
                <p className="text-black/60 uppercase text-xs tracking-widest">{rec.role} at {rec.company}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-24 text-center">
          <a 
            href="https://linkedin.com/in/vikasyadav" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-5 border-2 border-black hover:bg-black hover:text-white transition-all uppercase text-sm font-bold tracking-[0.2em]"
          >
            View More on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Recommendations;
