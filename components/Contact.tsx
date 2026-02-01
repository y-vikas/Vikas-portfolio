
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-40 px-6 bg-[#050505] text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm uppercase tracking-[0.5em] text-white/40 mb-10">Let's connect</h2>
        <a 
          href="mailto:vikas.yadav@example.com" 
          className="text-4xl md:text-7xl font-bold hover:text-gray-400 transition-colors tracking-tighter block mb-16 underline decoration-1 underline-offset-12 decoration-white/20"
        >
          vikas.yadav@email.com
        </a>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-12">
          <a 
            href="https://linkedin.com/in/vikasyadav" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-lg font-light tracking-widest hover:text-white text-gray-400 transition-colors uppercase"
          >
            LinkedIn
          </a>
          <a 
            href="https://github.com/vikasyadav" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-lg font-light tracking-widest hover:text-white text-gray-400 transition-colors uppercase"
          >
            GitHub
          </a>
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              alert("Resume download triggered. (This would normally serve a PDF file)");
            }}
            className="px-10 py-5 bg-white text-black font-bold uppercase text-xs tracking-[0.3em] hover:bg-gray-200 transition-all shadow-xl"
          >
            Download Resume
          </a>
        </div>

        <footer className="mt-40 text-xs text-white/20 uppercase tracking-[0.4em]">
          &copy; {new Date().getFullYear()} Vikas Yadav. All Rights Reserved.
        </footer>
      </div>
    </section>
  );
};

export default Contact;
