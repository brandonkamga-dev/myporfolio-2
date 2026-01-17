// Sidebar.tsx
import React from 'react';
import { ThemeSwitcher } from './ThemeSwitcher';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useTranslation } from '../contexts/LanguageContext';
import {
  FaLinkedin,
  FaWhatsapp,
  FaXTwitter,
  FaYoutube,
} from 'react-icons/fa6';

interface SidebarProps {
  sections: string[];
  activeSection: string;
  scrollToSection: (id: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  sections,
  activeSection,
  scrollToSection,
}) => {
  const { t } = useTranslation();

  return (
    <aside className="w-full md:w-1/3 bg-gray-50 dark:bg-gray-900 px-8 py-10 md:fixed md:h-screen flex flex-col justify-between">

      {/* Profil */}
      <div>
        <div className="mb-10">
          <h1 className="text-2xl font-bold dark:text-white">
            {t('sidebar.name')}
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            {t('sidebar.role')}
          </p>

          <p className="mt-3 text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
            {t('sidebar.description')}
          </p>

          <div className="flex gap-2 mt-5">
            <ThemeSwitcher />
            <LanguageSwitcher />
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-4">
          {sections.map((section) => {
            const isActive = activeSection === section;

            return (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="group flex items-center gap-4 text-left"
              >
                {/* Trait */}
                <span
                  className={`h-px bg-blue-500 transition-all duration-300 ${
                    isActive ? 'w-8' : 'w-0'
                  }`}
                />

                {/* Texte */}
                <span
                  className={`text-sm tracking-wide transition-colors duration-200 ${
                    isActive
                      ? 'text-blue-600 dark:text-blue-400 font-medium'
                      : 'text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-200'
                  }`}
                >
                  {t(`nav.${section}`)}
                </span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Réseaux sociaux */}
      <div className="flex items-center gap-5 pt-10">
        <a
          href="https://www.linkedin.com/in/brandon-duclerc-tamwa-kamga/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition"
        >
          <FaLinkedin size={18} />
        </a>

        <a
          href="https://whatsapp.com/channel/0029VbAyFN21HsprPN1amr2a"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-green-500 transition"
        >
          <FaWhatsapp size={18} />
        </a>

        <a
          href="https://x.com/TamwaKamga51178"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-black dark:hover:text-white transition"
        >
          <FaXTwitter size={18} />
        </a>

        <a
          href="https://www.youtube.com/@brandonkamga"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-red-600 transition"
        >
          <FaYoutube size={18} />
        </a>
      </div>
    </aside>
  );
};
