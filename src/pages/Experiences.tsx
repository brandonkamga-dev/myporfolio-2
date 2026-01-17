import React from 'react';
import { Button } from '../components/ui/button';
import { ExperienceCard } from '../components/ExperienceCard';
import { CursorLightEffect } from '../components/CursorLightEffect';
import { ThemeSwitcher } from '../components/ThemeSwitcher';
import { LanguageSwitcher } from '../components/LanguageSwitcher';
import { useIsMobile } from '../hooks/use-mobile';
import { useTranslation } from '../contexts/LanguageContext';
import { useTranslatedData } from '../hooks/useTranslatedData';

const ExperiencesPage = () => {
  const isMobile = useIsMobile();
  const { t } = useTranslation();
  const { experiences } = useTranslatedData();

  // Initialize dark mode from localStorage
  React.useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  // Trier du plus récent au plus ancien basé sur la période de fin
  const sortedExperiences = experiences.slice().sort((a, b) => {
    const getEndYear = (period: string) => {
      if (period.includes('Aujourd\'hui') || period.includes('Today') || period.includes('Depuis') || period.includes('Since')) return new Date().getFullYear();
      const match = period.match(/(\d{4})$/);
      return match ? parseInt(match[1]) : 0;
    };
    return getEndYear(b.period) - getEndYear(a.period);
  });

  return (
    <div className="min-h-screen transition-colors duration-300">
      <CursorLightEffect />

      {/* Mobile Navigation Header */}
      {isMobile && (
        <div className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border px-4 py-3">
          <div className="flex items-center justify-between">
            <Button variant="outline" size="sm">
              <a href="/">← {t('common.back')}</a>
            </Button>
            <div className="flex gap-2">
              <ThemeSwitcher />
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}

      <div className={`container mx-auto px-4 py-12 ${isMobile ? 'pt-20' : ''}`}>
        {!isMobile && (
          <div className="mb-8">
            <Button variant="outline">
              <a href="/">← {t('pages.experiences.back')}</a>
            </Button>
          </div>
        )}

        <h1 className="text-4xl font-bold mb-12 dark:text-white">{t('pages.experiences.title')}</h1>

        <div className="space-y-12">
          {sortedExperiences.map((experience, index) => (
            <ExperienceCard key={index} {...experience} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperiencesPage;
