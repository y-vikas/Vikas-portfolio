
import React, { useState, useEffect, useCallback } from 'react';
import { EXPERIENCES, SKILLS, PROJECTS, RECOMMENDATIONS } from './constants';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [projectFilter, setProjectFilter] = useState<'ALL' | 'QA' | 'Product'>('ALL');
  
  const variations = ['profile.jpeg', 'profile.jpg', 'profile.png', 'Profile.jpeg', 'Profile.jpg', 'profile.JPG'];
  const [attemptIndex, setAttemptIndex] = useState(0);
  const [imgStatus, setImgStatus] = useState<'loading' | 'loaded' | 'error'>('loading');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = useCallback((id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, []);

  const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Experience', id: 'experience' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];

  const filteredProjects = projectFilter === 'ALL' ? PROJECTS : PROJECTS.filter(p => p.category === projectFilter);

  const handleImageError = () => {
    if (attemptIndex < variations.length - 1) {
      setAttemptIndex(prev => prev + 1);
    } else {
      setImgStatus('error');
    }
  };

  const handleImageLoad = () => {
    setImgStatus('loaded');
  };

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white selection:bg-white selection:text-black font-['Inter',sans-serif]">
      <style>{`
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in-up { animation: fadeInUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .image-reveal { clip-path: inset(0 100% 0 0); animation: reveal 1.8s cubic-bezier(0.77, 0, 0.175, 1) forwards; }
        @keyframes reveal { from { clip-path: inset(0 100% 0 0); } to { clip-path: inset(0 0 0 0); } }
        .vertical-text { writing-mode: vertical-rl; }
        
        .editorial-image {
          filter: grayscale(100%) contrast(1.15) brightness(0.9);
          transition: all 1.2s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .editorial-image:hover {
          filter: grayscale(0%) contrast(1) brightness(1);
          transform: scale(1.02);
        }
        .monogram-gradient {
          background: linear-gradient(180deg, #141414 0%, #080808 100%);
        }
      `}</style>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${scrolled || mobileMenuOpen ? 'bg-[#0a0a0a]/95 backdrop-blur-xl py-5' : 'bg-transparent py-10'}`}>
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
          <button onClick={() => scrollToSection('hero')} className="text-2xl font-bold tracking-tighter hover:opacity-50 transition-opacity">VY.</button>
          
          <div className="hidden md:flex space-x-12">
            {navLinks.map((link) => (
              <button key={link.name} onClick={() => scrollToSection(link.id)} className="text-[10px] uppercase tracking-[0.4em] text-gray-500 hover:text-white transition-all font-semibold">
                {link.name}
              </button>
            ))}
          </div>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white p-2 z-[110]" aria-label="Toggle Menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M4 8h16M4 16h16" />}
            </svg>
          </button>
        </div>

        <div className={`fixed inset-0 bg-black z-[105] flex flex-col items-center justify-center transition-all duration-700 ease-in-out md:hidden ${mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full pointer-events-none'}`}>
          <div className="flex flex-col space-y-10 text-center">
            {navLinks.map((link) => (
              <button key={link.name} onClick={() => scrollToSection(link.id)} className="text-4xl uppercase tracking-[0.1em] text-neutral-800 hover:text-white transition-colors font-black">
                {link.name}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section id="hero" className="min-h-screen flex items-center px-8 relative overflow-hidden pt-20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center w-full">
            <div className="lg:col-span-7 z-10 animate-fade-in-up">
              <h1 className="text-[14vw] lg:text-[120px] font-black tracking-tighter mb-4 leading-[0.8] text-white">
                Vikas<br />Yadav
              </h1>
              
              <div className="flex items-center space-x-6 mb-12">
                <div className="h-[1px] w-12 bg-neutral-800"></div>
                <span className="text-[11px] uppercase tracking-[0.4em] text-neutral-500 font-bold">
                  Senior QA Engineer & Aspirant Product Manager
                </span>
              </div>

              <h2 className="text-xl md:text-2xl font-light text-neutral-400 mb-14 tracking-wide max-w-xl leading-relaxed">
                Building reliable, high quality products with a strong understanding of users, business needs, and product thinking.
              </h2>

              <div className="flex flex-wrap gap-8">
                <button onClick={() => scrollToSection('experience')} className="group relative px-12 py-6 bg-white text-black font-bold uppercase text-[10px] tracking-[0.4em] overflow-hidden transition-all shadow-xl">
                  <span className="relative z-10">Explore Work</span>
                  <div className="absolute inset-0 bg-neutral-200 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </button>
                <button onClick={() => scrollToSection('contact')} className="px-12 py-6 border border-white/5 hover:border-white/20 transition-all text-[10px] uppercase tracking-[0.4em] font-bold text-neutral-500 hover:text-white">
                  Get In Touch
                </button>
              </div>
            </div>
            
            <div className="lg:col-span-5 relative mt-12 lg:mt-0">
              <div className="image-reveal relative">
                <div className="aspect-[3/4] bg-neutral-900 overflow-hidden relative group border border-white/[0.03] shadow-[0_0_100px_rgba(0,0,0,0.5)]">
                  {imgStatus !== 'error' ? (
                    <img 
                      key={variations[attemptIndex]}
                      src={variations[attemptIndex]} 
                      alt="Vikas Yadav Profile" 
                      className={`w-full h-full object-cover object-top editorial-image transition-opacity duration-1000 ${imgStatus === 'loading' ? 'opacity-0' : 'opacity-100'}`}
                      onLoad={handleImageLoad}
                      onError={handleImageError}
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center monogram-gradient">
                      <div className="text-center opacity-40">
                        <span className="text-[160px] font-black tracking-tighter text-white/[0.02] select-none block leading-none">VY</span>
                        <div className="mt-6 px-6 py-2 border border-white/5 inline-block">
                           <span className="text-[8px] uppercase tracking-[0.6em] text-white/40 block">Quality & Product Engineering</span>
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90 pointer-events-none"></div>
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/10 pointer-events-none"></div>
                </div>
                <div className="absolute -bottom-16 -right-6 text-[10px] uppercase tracking-[0.8em] text-white/5 vertical-text hidden lg:block select-none font-black italic">
                  PRODUCT QUALITY SPECIALIST
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-10 left-8 flex items-center space-x-6 opacity-10 hidden lg:flex">
            <div className="w-[1px] h-20 bg-white"></div>
            <span className="text-[9px] uppercase tracking-[0.6em] vertical-text">Scroll To Experience</span>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-48 px-8 bg-[#0c0c0c] border-y border-white/[0.02]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-[10px] uppercase tracking-[0.6em] text-neutral-700 mb-20 font-black">01 — The Approach</h2>
            <div className="space-y-16 text-3xl md:text-5xl font-light leading-[1.2] tracking-tight text-neutral-600">
              <p>Great products are built on <span className="text-white">trust</span> — and trust starts with <span className="text-white">quality</span>.</p>
              <p>My approach to QA goes beyond finding defects. I evaluate features the way <span className="text-white">users experience</span> them and the way <span className="text-white">businesses rely</span> on them.</p>
              <div className="h-[1px] w-20 bg-neutral-800 my-10"></div>
              <p className="text-xl md:text-2xl text-neutral-500 max-w-2xl font-light italic leading-relaxed">By pairing disciplined testing with strong product awareness, I ensure releases are stable, intuitive, and ready to perform in real-world conditions.</p>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-48 px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-[10px] uppercase tracking-[0.6em] text-neutral-700 mb-24 font-black">02 — Professional History</h2>
            <div className="space-y-32">
              {EXPERIENCES.map((exp, idx) => (
                <div key={idx} className="border-t border-white/[0.03] pt-24 mb-48 last:mb-0">
                  {/* Main Role Info */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 group">
                    <div className="lg:col-span-4">
                      <span className="text-[11px] font-bold tracking-[0.5em] text-neutral-600 block mb-4 uppercase">{exp.duration}</span>
                      {exp.location && <span className="text-[9px] font-medium tracking-[0.3em] text-neutral-800 block mb-6 uppercase">{exp.location}</span>}
                      <h3 className="text-6xl font-black tracking-tighter group-hover:text-neutral-500 transition-all duration-700 leading-none">{exp.company}</h3>
                    </div>
                    <div className="lg:col-span-8 lg:pl-24">
                      <h4 className="text-2xl font-bold text-white mb-12 uppercase tracking-[0.3em]">{exp.role}</h4>
                      
                      <div className="mb-20">
                        <p className="text-[9px] uppercase tracking-[0.4em] text-neutral-700 font-black mb-10">Key Achievements</p>
                        <ul className="space-y-8">
                          {exp.bullets.map((bullet, bIdx) => (
                            <li key={bIdx} className="text-xl font-light text-neutral-500 leading-relaxed hover:text-neutral-300 transition-colors relative pl-10">
                              <span className="absolute left-0 top-[0.7em] w-4 h-[1px] bg-neutral-800 group-hover:bg-white transition-colors"></span>
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Strategic Product Contributions */}
                  {exp.productFocus && (
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mt-32 pt-32 border-t border-white/[0.02]">
                      <div className="lg:col-span-4">
                        <div className="flex items-center lg:items-start lg:flex-col space-x-5 lg:space-x-0">
                          <span className="text-4xl mb-4">💡</span>
                          <h4 className="text-[14px] uppercase tracking-[0.4em] text-white font-black leading-relaxed">
                            Strategic<br />Product<br />Contributions
                          </h4>
                        </div>
                        <div className="mt-8 h-1 w-16 bg-white hidden lg:block"></div>
                      </div>
                      <div className="lg:col-span-8 lg:pl-24">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-24">
                          {exp.productFocus.map((focus, fIdx) => (
                            <div key={fIdx} className="group/focus">
                              <h5 className="text-xl font-bold uppercase tracking-[0.2em] text-white/80 mb-10 group-hover/focus:text-white transition-colors">
                                {focus.title}
                              </h5>
                              <ul className="space-y-6">
                                {focus.bullets.map((b, bi) => (
                                  <li key={bi} className="text-xl font-light text-neutral-500 leading-relaxed hover:text-neutral-300 transition-colors relative pl-10 group/item">
                                    <span className="absolute left-0 top-[0.7em] w-4 h-[1px] bg-neutral-800 group-hover/item:bg-white transition-colors"></span>
                                    {b}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-48 px-8 bg-[#0f0f0f] border-y border-white/[0.02]">
          <div className="max-w-7xl mx-auto">
             <h2 className="text-[10px] uppercase tracking-[0.6em] text-neutral-700 mb-32 font-black">03 — Core Competencies</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-24">
              {SKILLS.map((cat, idx) => (
                <div key={idx} className="group">
                  <h3 className="text-[11px] font-black mb-16 uppercase tracking-[0.5em] text-neutral-800 group-hover:text-white transition-colors">{cat.title}</h3>
                  <div className="flex flex-col space-y-6">
                    {cat.skills.map((skill, sIdx) => (
                      <span key={sIdx} className="text-2xl font-light text-neutral-600 hover:text-neutral-200 transition-colors cursor-default tracking-tight">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-48 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-baseline mb-32 gap-12">
              <h2 className="text-[10px] uppercase tracking-[0.6em] text-neutral-700 font-black">04 — Selected Projects</h2>
              <div className="flex gap-16">
                {['ALL', 'QA', 'Product'].map((f) => (
                  <button key={f} onClick={() => setProjectFilter(f as any)} className={`text-[10px] uppercase tracking-[0.4em] transition-all font-black ${projectFilter === f ? 'text-white border-b border-white pb-2' : 'text-neutral-800 hover:text-neutral-500'}`}>
                    {f}
                  </button>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.03] border border-white/[0.03]">
              {filteredProjects.map((project, idx) => (
                <div key={idx} className="group p-20 bg-black hover:bg-[#080808] transition-all duration-700 flex flex-col justify-between min-h-[600px]">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.5em] text-neutral-800 mb-12 block font-black">{project.category}</span>
                    <h3 className="text-5xl font-black mb-12 group-hover:translate-x-6 transition-transform duration-700 leading-[0.9] tracking-tighter">{project.title}</h3>
                    <p className="text-neutral-600 font-light leading-relaxed text-2xl tracking-tight">{project.description}</p>
                  </div>
                  <div className="pt-20">
                    <p className="text-[10px] font-black text-neutral-900 uppercase tracking-[0.4em] mb-6">Strategic Outcome</p>
                    <p className="text-white font-medium italic text-xl leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">"{project.outcome}"</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recommendations Section */}
        <section id="recommendations" className="py-48 px-8 bg-white text-black">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-[10px] uppercase tracking-[0.6em] text-black/20 mb-32 font-black text-center">05 — Endorsements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-40">
              {RECOMMENDATIONS.map((rec, idx) => (
                <div key={idx} className="flex flex-col relative">
                  <p className="text-4xl font-light italic leading-[1.2] mb-20 tracking-tighter text-neutral-900">"{rec.quote}"</p>
                  <div className="mt-auto border-t border-black/10 pt-12">
                    <p className="font-black text-2xl tracking-tighter">{rec.name}</p>
                    <p className="text-black/40 uppercase text-[10px] tracking-[0.5em] mt-3 font-black">{rec.role} @ {rec.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-64 px-8 bg-black text-center relative overflow-hidden">
          <div className="max-w-5xl mx-auto relative z-10">
            <h2 className="text-[11px] uppercase tracking-[1em] text-neutral-900 mb-20 font-black">Initiate Collaboration</h2>
            <a href="mailto:vikas.yadav@example.com" className="text-[10vw] lg:text-[130px] font-black hover:text-neutral-900 transition-all duration-700 tracking-[calc(-0.05em)] block mb-40 leading-none text-white">
              Vikas Yadav
            </a>
            <div className="flex flex-col md:flex-row justify-center items-center gap-24">
              <a href="https://linkedin.com/in/vikasyadav" target="_blank" rel="noopener noreferrer" className="text-[10px] font-black tracking-[0.8em] hover:text-white text-neutral-800 transition-colors uppercase">LinkedIn</a>
              <a href="https://github.com/vikasyadav" target="_blank" rel="noopener noreferrer" className="text-[10px] font-black tracking-[0.8em] hover:text-white text-neutral-800 transition-colors uppercase">GitHub</a>
              <button onClick={() => alert("Resume triggered.")} className="px-14 py-7 border border-white/5 hover:border-white/20 transition-all text-[10px] font-black uppercase tracking-[0.8em] text-neutral-500 hover:text-white">
                Resume / CV
              </button>
            </div>
            <footer className="mt-56 text-[9px] text-neutral-900 uppercase tracking-[1.5em] font-black select-none">
              &copy; {new Date().getFullYear()} Vikas Yadav — London, UK
            </footer>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-white/[0.015] blur-[200px] rounded-full pointer-events-none"></div>
        </section>
      </main>
    </div>
  );
};

export default App;
