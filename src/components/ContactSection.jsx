import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Cpu } from 'lucide-react';
import SocialLink from './SocialLink';

const ContactSection = ({ data, theme }) => (
  <div className="w-full">
    <div className="mb-16">
      <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Get in Touch</h2>
      <p className={`text-xl ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
        Feel free to reach out through any of these platforms.
      </p>
    </div>

    {/* Info Grid - Larger Cards */}
    <div className="grid md:grid-cols-3 gap-8 mb-16">
      <div className={`p-8 rounded-3xl border text-center backdrop-blur-sm ${theme === 'dark' ? 'bg-gray-800/30 border-gray-700' : 'bg-white/50 border-gray-100 shadow-sm'}`}>
        <div className="w-14 h-14 mx-auto bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-6">
          <Mail size={28} />
        </div>
        <h3 className={`text-xl font-bold mb-3 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-900'}`}>Email</h3>
        <p className={`text-base ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>{data.profile.email}</p>
      </div>
      <div className={`p-8 rounded-3xl border text-center backdrop-blur-sm ${theme === 'dark' ? 'bg-gray-800/30 border-gray-700' : 'bg-white/50 border-gray-100 shadow-sm'}`}>
        <div className="w-14 h-14 mx-auto bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6">
          <Phone size={28} />
        </div>
        <h3 className={`text-xl font-bold mb-3 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-900'}`}>Phone</h3>
        <p className={`text-base ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>{data.profile.phone}</p>
      </div>
      <div className={`p-8 rounded-3xl border text-center backdrop-blur-sm ${theme === 'dark' ? 'bg-gray-800/30 border-gray-700' : 'bg-white/50 border-gray-100 shadow-sm'}`}>
        <div className="w-14 h-14 mx-auto bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mb-6">
          <MapPin size={28} />
        </div>
        <h3 className={`text-xl font-bold mb-3 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-900'}`}>Location</h3>
        <p className={`text-base ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>{data.profile.location}</p>
      </div>
    </div>

    {/* Social Links Card - Larger buttons */}
    <div className={`p-12 rounded-3xl border backdrop-blur-sm flex flex-col items-center text-center ${theme === 'dark' ? 'bg-gray-800/30 border-gray-700' : 'bg-white/50 border-gray-200 shadow-xl'}`}>
      <h3 className={`text-3xl font-bold mb-10 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
        Connect & Collaborate
      </h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-3xl">
        <SocialLink 
          href={`mailto:${data.profile.email}`}
          icon={Mail} 
          label="Gmail" 
          theme={theme}
          colorClass="text-red-500"
        />
        <SocialLink 
          href={data.profile.github}
          icon={Github} 
          label="GitHub" 
          theme={theme}
          colorClass="text-gray-700 dark:text-gray-300"
        />
        <SocialLink 
          href={data.profile.linkedin}
          icon={Linkedin} 
          label="LinkedIn" 
          theme={theme}
          colorClass="text-blue-600"
        />
        <SocialLink 
          href={data.profile.leetcode}
          icon={Cpu} 
          label="LeetCode" 
          theme={theme}
          colorClass="text-yellow-500"
        />
      </div>
    </div>
  </div>
);

export default ContactSection;