import React from 'react';

export interface NavigationMenuProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

export const NavigationMenu: React.FC<NavigationMenuProps> = ({ activeSection, scrollToSection }) => {
  const sections = ['about', 'skills', 'experience', 'certifications', 'work', 'contact'];

  return (
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
  );
};