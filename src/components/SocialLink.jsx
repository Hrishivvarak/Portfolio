import React from 'react';

const SocialLink = ({ href, icon: Icon, label, theme, colorClass }) => (
  <a 
    href={href}
    target="_blank" 
    rel="noopener noreferrer"
    className={`flex items-center gap-3 px-6 py-4 rounded-xl border transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg w-full sm:w-auto justify-center sm:justify-start ${
      theme === 'dark' 
        ? 'bg-gray-800/50 border-gray-700 hover:border-gray-500 hover:bg-gray-800' 
        : 'bg-white border-gray-200 hover:border-gray-400 hover:bg-gray-50'
    }`}
  >
    <div className={`p-2 rounded-lg transition-colors ${theme === 'dark' ? 'bg-gray-700 group-hover:text-white' : 'bg-gray-100 group-hover:text-black'} ${colorClass}`}>
      <Icon size={20} />
    </div>
    <span className={`font-medium ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>{label}</span>
  </a>
);

export default SocialLink;