import React, { useState, useEffect } from 'react';
import { DATA } from './data/portfolioData';

// Components
import Background from './components/Background';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Section from './components/Section';
import Footer from './components/Footer';

export default function App() {
  // 1. Initialize theme based on user's system preference
  const [theme, setTheme] = useState(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  });

  // 2. Listen for system theme changes in real-time
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e) => {
      setTheme(e.matches ? 'dark' : 'light');
    };

    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const getBgColor = () => {
    return theme === 'dark' ? 'bg-gray-950' : 'bg-white';
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 ${getBgColor()}`}>
      
      <Background theme={theme} />
      
      <Navbar theme={theme} setTheme={setTheme} />

      <main className="max-w-7xl mx-auto px-6 animate-fade-in-up">
        <HeroSection theme={theme} />
        <SkillsSection theme={theme} />
        <ProjectsSection theme={theme} />
        
        <Section id="contact">
          <ContactSection data={DATA} theme={theme} />
          <Footer theme={theme} />
        </Section>
      </main>

    </div>
  );
}