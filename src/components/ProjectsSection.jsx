import React from 'react';
import { ChevronRight } from 'lucide-react';
import Section from './Section';
import ProjectCard from './ProjectCard';
import { DATA } from '../data/portfolioData';

const ProjectsSection = ({ theme }) => (
  <Section id="projects">
    <div className="w-full">
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-16 gap-4">
        <h2 className={`text-4xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Featured Projects</h2>
        <a href="#" className="text-lg font-medium text-blue-600 hover:text-blue-800 flex items-center gap-1 group">
          View Archive <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {DATA.projects.map((p, i) => (
          <ProjectCard key={i} project={p} theme={theme} />
        ))}
      </div>
    </div>
  </Section>
);

export default ProjectsSection;