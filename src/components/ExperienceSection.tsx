import React from 'react';
import { ExperienceCard } from './ExperienceCard';
import { Button } from './ui/button';
import { useTranslation } from '../contexts/LanguageContext';
import { useTranslatedData } from '../hooks/useTranslatedData';
import resumePdf from "@/resume.pdf";

export const ExperienceSection: React.FC = () => {
  const { t } = useTranslation();
  const { experiences } = useTranslatedData();

  // Trier du plus récent au plus ancien basé sur la période de fin
  const sortedExperiences = experiences.slice().sort((a, b) => {
    const getEndYear = (period: string) => {
      if (period.includes('Aujourd\'hui') || period.includes('Today') || period.includes('Depuis') || period.includes('Since')) return new Date().getFullYear();
      const match = period.match(/(\d{4})$/);
      return match ? parseInt(match[1]) : 0;
    };
    return getEndYear(b.period) - getEndYear(a.period);
  });

  // Prendre seulement les 3 expériences les plus récentes
  const top3Experiences = sortedExperiences.slice(0, 3);

  return (
    <section id="experience" className="py-20">
      <h2 className="text-3xl font-bold mb-12 dark:text-white">{t('sections.experience.title')}</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
        {t('sections.experience.subtitle')}
      </p>

      <div className="space-y-10">
        {top3Experiences.map((experience, index) => (
          <ExperienceCard key={index} {...experience} />
        ))}
      </div>

      <div className="mt-12 flex flex-wrap gap-4">
        <Button variant="outline">
          <a href={resumePdf} download>
            {t('sections.experience.downloadCV')}
          </a>
        </Button>
        <Button>
          <a href="/experiences">{t('sections.experience.allExperiences')}</a>
        </Button>
      </div>
    </section>
  );
};
