// Sidebar.tsx
import React, { useEffect, useState } from 'react';
import { ThemeSwitcher } from './ThemeSwitcher';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Button } from './ui/button';
import { FaTwitter, FaLinkedin } from 'react-icons/fa';

interface SidebarProps {
  sections: string[];
  activeSection: string;
  scrollToSection: (id: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ sections, activeSection, scrollToSection }) => {



  return (
    <div className="w-full md:w-1/3 bg-gray-50 dark:bg-gray-900 p-8 md:p-12 md:fixed md:h-screen flex flex-col justify-between transition-colors duration-300">
      {/* Profil */}
      <div>
        <div className="mb-6">
          <h1 className="text-2xl font-bold mb-1 dark:text-white">Your Name</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-2">Developer</p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            I build reliable and thoughtful digital experiences.
          </p>
          <div className="flex space-x-2">
            <ThemeSwitcher />
            <LanguageSwitcher />
          </div>
        </div>

        {/* Menu de navigation */}
        <nav className="space-y-3">
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`block text-left px-3 py-2 rounded-md transition-all duration-200 ${
                activeSection === section
                  ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 font-medium'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-100'
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </nav>
      </div>

      {/* Social Icons */}
      <div className="flex space-x-4 mt-6 md:mt-0">
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
        >
          <FaTwitter className="w-5 h-5" />
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
        >
          <FaLinkedin className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
};
