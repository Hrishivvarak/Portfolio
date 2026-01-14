import React from 'react';
import { Download, Eye, ArrowDown } from 'lucide-react';
import Section from './Section';
import { DATA } from '../data/portfolioData';

const HeroSection = ({ theme }) => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToStack = () => {
    document.getElementById('tech-stack')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Section id="about">
      <div className="inline-flex items-center self-start gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-bold tracking-wide uppercase mb-8">
        <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse" />
        Available for hire
      </div>
      
      <h1 className={`text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
        Hello, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">{DATA.profile.name.split(' ')[0]}</span>.
      </h1>
      
      <p className={`text-xl md:text-3xl max-w-3xl leading-relaxed mb-8 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
        {DATA.profile.tagline}
      </p>
      
      <p className={`text-lg md:text-xl max-w-3xl leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
        {DATA.profile.about}
      </p>
      
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-10">
        <a
          href={DATA.profile.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center gap-3 px-8 py-4 text-lg rounded-full font-bold hover:opacity-90 transition-transform active:scale-95 shadow-md ${theme === 'dark' ? 'bg-blue-600 text-white' : 'bg-gray-900 text-white'}`}
        >
          <Download size={22} />
          Download Resume
        </a>
        <button
          onClick={scrollToProjects}
          className={`flex items-center gap-3 px-8 py-4 text-lg rounded-full font-bold border transition-all hover:shadow-md active:scale-95 ${
            theme === 'dark' 
              ? 'border-gray-700 text-gray-300 hover:border-gray-500 hover:text-white' 
              : 'border-gray-200 text-gray-700 hover:border-gray-400 hover:text-black'
          }`}
        >
          <Eye size={22} />
          View Work
        </button>
      </div>
      
      <button 
        onClick={scrollToStack}
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce ${theme === 'dark' ? 'text-gray-600' : 'text-gray-400'}`}
      >
        <ArrowDown size={32} />
      </button>
    </Section>
  );
};

export default HeroSection;