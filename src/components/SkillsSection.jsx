import React from 'react';
import { Code, Layout, Database, Command } from 'lucide-react';
import Section from './Section';
import { DATA } from '../data/portfolioData';

const SkillsSection = ({ theme }) => (
  <Section id="tech-stack" fullHeight={false}>
    <div className="w-full">
      <h2 className={`text-base font-bold uppercase tracking-widest mb-16 ${theme === 'dark' ? 'text-gray-500' : 'text-gray-400'}`}>Tech Stack</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {DATA.skills.map((category, i) => (
          <div key={i} className={`p-8 rounded-3xl transition-all duration-300 ${theme === 'dark' ? 'bg-gray-800/30 border border-gray-700 hover:bg-gray-800/50' : 'bg-white/50 border border-gray-100 hover:shadow-xl'}`}>
            <h3 className={`text-xl font-bold flex items-center gap-3 mb-6 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-900'}`}>
              {i === 0 && <Code size={24} className="text-blue-500"/>}
              {i === 1 && <Layout size={24} className="text-purple-500"/>}
              {i === 2 && <Database size={24} className="text-green-500"/>}
              {i === 3 && <Command size={24} className="text-orange-500"/>}
              {category.category}
            </h3>
            <ul className={`text-base space-y-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              {category.items.map((skill) => (
                <li key={skill} className={`flex items-center gap-3 transition-colors cursor-default ${theme === 'dark' ? 'hover:text-white' : 'hover:text-black'}`}>
                  <div className={`w-2 h-2 rounded-full ${theme === 'dark' ? 'bg-gray-600' : 'bg-gray-300'}`} />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </Section>
);

export default SkillsSection;