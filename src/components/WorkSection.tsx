import React from 'react';
import { ProjectCard } from './ProjectCard';
import { Button } from './ui/button';
import { useTranslation } from '../contexts/LanguageContext';
import { useTranslatedData } from '../hooks/useTranslatedData';

export const WorkSection: React.FC = () => {
  const { t } = useTranslation();
  const { projects } = useTranslatedData();

  // Prendre seulement les 3 projets les plus récents (on suppose que le tableau est déjà trié)
  const top3Projects = projects.slice(0, 3);

  return (
    <section id="work" className="py-20 min-h-screen">
      <h2 className="text-3xl font-bold mb-12 dark:text-white">{t('sections.work.title')}</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
        {t('sections.work.subtitle')}
      </p>

      <div className="space-y-16">
        {top3Projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>

      <div className="mt-16 text-center">
        <Button variant="outline" size="lg">
          <a href="/projects">{t('sections.work.viewAll')}</a>
        </Button>
      </div>
    </section>
  );
};