
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 px-6 bg-[#0c0c0c]">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="w-24 h-1 bg-white shrink-0 mt-6"></div>
          <div>
            <h2 className="text-4xl font-bold mb-12 uppercase tracking-tight">About</h2>
            <div className="space-y-6 text-xl text-gray-400 font-light leading-relaxed">
              <p>
                I am a Senior QA Engineer with a deep passion for building software that doesn't just work, but creates genuine value for users. My expertise lies at the intersection of quality assurance, technical reliability, and user-centric product thinking.
              </p>
              <p>
                Over the years, I've realized that the best quality assurance starts long before the first line of code is written. By collaborating closely with product teams and understanding business drivers, I've consistently helped launch products that are robust and scalable.
              </p>
              <p>
                Currently, I am leveraging my QA foundation to transition into Product Management, focusing on how technical excellence can drive superior user experiences and business growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
