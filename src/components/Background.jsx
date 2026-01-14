import React from 'react';

const Background = ({ theme }) => {
  const gridColor = theme === 'dark' ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.03)';
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(${gridColor} 1px, transparent 1px), linear-gradient(90deg, ${gridColor} 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />
      
      {/* Ambient Orbs with slow floating animation */}
      <div className={`absolute top-0 -left-4 w-72 h-72 md:w-96 md:h-96 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob ${theme === 'dark' ? 'bg-blue-900' : 'bg-blue-200'}`} />
      <div className={`absolute top-0 -right-4 w-72 h-72 md:w-96 md:h-96 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000 ${theme === 'dark' ? 'bg-purple-900' : 'bg-purple-200'}`} />
      <div className={`absolute -bottom-8 left-20 w-72 h-72 md:w-96 md:h-96 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000 ${theme === 'dark' ? 'bg-pink-900' : 'bg-pink-200'}`} />
    </div>
  );
};

export default Background;