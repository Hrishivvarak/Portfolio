import React from 'react';
import { Code, Github, ExternalLink } from 'lucide-react';

const ProjectCard = ({ project, theme }) => (
  <div className={`group relative border transition-all duration-300 p-8 rounded-2xl hover:shadow-xl ${theme === 'dark' ? 'bg-gray-800/50 border-gray-700 hover:border-gray-500' : 'bg-white border-gray-200 hover:border-black'}`}>
    <div className="flex justify-between items-start mb-6">
      <div className={`p-3 rounded-xl transition-colors ${theme === 'dark' ? 'bg-gray-700 group-hover:bg-blue-600 text-white' : 'bg-gray-50 group-hover:bg-black group-hover:text-white'}`}>
        <Code size={28} />
      </div>
      <div className="flex gap-3">
        <a href={project.github} className={`${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-400 hover:text-black'} transition-colors`}><Github size={24} /></a>
        <a href={project.link} className={`${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-400 hover:text-black'} transition-colors`}><ExternalLink size={24} /></a>
      </div>
    </div>
    
    <h3 className={`font-bold text-2xl mb-3 transition-colors ${theme === 'dark' ? 'text-gray-100 group-hover:text-blue-400' : 'text-gray-900 group-hover:text-blue-600'}`}>
      {project.title}
    </h3>
    
    <p className={`text-base leading-relaxed mb-6 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
      {project.desc}
    </p>
    
    <div className="flex flex-wrap gap-3 mt-auto">
      {project.tech.map((t, i) => (
        <span key={i} className={`text-sm font-semibold px-3 py-1.5 rounded-lg ${theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'}`}>
          {t}
        </span>
      ))}
    </div>
  </div>
);

export default ProjectCard;