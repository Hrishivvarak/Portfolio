import React, { useState } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { DATA } from '../data/portfolioData';

const Navbar = ({ theme, setTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Tech Stack', id: 'tech-stack' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];

  const scrollToSection = (id) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      theme === 'dark' ? 'bg-gray-950/80 backdrop-blur-md border-b border-gray-800' : 'bg-white/80 backdrop-blur-md border-b border-gray-100'
    }`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo - Increased text size */}
        <div 
          className="flex items-center gap-3 font-bold text-xl tracking-tight cursor-pointer z-50"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${theme === 'light' ? 'bg-black text-white' : 'bg-white text-black'}`}>
            <span className="font-mono text-base">&gt;_</span>
          </div>
          <span className={`${theme === 'light' ? 'text-gray-900' : 'text-white'} text-xl`}>{DATA.profile.name}</span>
        </div>
        <div className="hidden md:flex gap-10 text-base font-medium">
          {navLinks.map((link) => (
            <button key={link.name} onClick={() => scrollToSection(link.id)} className={`${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-black'} transition-colors`}>
              {link.name}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            className={`p-3 rounded-full transition-colors ${theme === 'dark' ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
          >
            {theme === 'light' ? <Moon size={22} /> : <Sun size={22} />}
          </button>
          <button className={`md:hidden p-2 rounded-lg ${theme === 'dark' ? 'text-white' : 'text-black'}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className={`md:hidden absolute top-20 left-0 right-0 border-b p-6 shadow-xl ${theme === 'dark' ? 'bg-gray-950 border-gray-800' : 'bg-white border-gray-100'}`}>
          <div className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <button key={link.name} onClick={() => scrollToSection(link.id)} className={`text-left text-lg py-2 px-4 rounded-lg font-medium transition-colors ${theme === 'dark' ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-600 hover:bg-gray-50'}`}>
                {link.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;