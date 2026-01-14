import React from 'react';
import { DATA } from '../data/portfolioData';

const Footer = ({ theme }) => (
  <footer className={`mt-20 border-t pt-10 pb-6 flex flex-col md:flex-row justify-between items-center text-sm gap-4 w-full ${theme === 'dark' ? 'border-gray-800 text-gray-500' : 'border-gray-200 text-gray-500'}`}>
    <p className="text-center md:text-left">&copy; {new Date().getFullYear()} {DATA.profile.name}. All rights reserved.</p>
    <p className="text-center md:text-right">Designed in React & Tailwind</p>
  </footer>
);

export default Footer;