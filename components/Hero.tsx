
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 px-6 overflow-hidden relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        {/* Left Content */}
        <div className="z-10 animate-fade-in-up">
          <h1 className="text-7xl md:text-9xl font-bold tracking-tighter mb-4 leading-none">
            Vikas<br />Yadav
          </h1>
          <h2 className="text-xl md:text-2xl font-light text-gray-400 mb-8 tracking-wide">
            Senior QA Engineer & Aspirant Product Manager
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-lg mb-12 leading-relaxed font-light">
            Building reliable, high-quality products with a strong understanding of users, business needs, and product thinking.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="#experience" 
              className="px-8 py-4 bg-white text-black font-semibold hover:bg-gray-200 transition-all rounded-sm text-sm uppercase tracking-widest"
            >
              View Experience
            </a>
            <a 
              href="#projects" 
              className="px-8 py-4 border border-white/20 hover:border-white transition-all rounded-sm text-sm uppercase tracking-widest"
            >
              Projects
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 text-white/60 hover:text-white transition-all text-sm uppercase tracking-widest"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Right Content - Grayscale Image Profile */}
        <div className="relative order-first lg:order-last">
          <div className="aspect-[4/5] md:aspect-square relative grayscale contrast-125 opacity-70 hover:opacity-90 transition-opacity duration-700">
            <img 
              src="./profile.jpeg" 
              alt="Vikas Yadav Profile" 
              className="w-full h-full object-cover rounded-lg shadow-2xl"
              onError={(e) => {
                const img = e.currentTarget;
                if (img.src.includes('profile.jpeg')) img.src = './profile.jpg';
              }}
            />
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r-2 border-b-2 border-white/20 hidden md:block"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 border-l-2 border-t-2 border-white/20 hidden md:block"></div>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-1/3 h-2/3 bg-white/5 blur-[120px] rounded-full pointer-events-none"></div>
    </section>
  );
};

export default Hero;
