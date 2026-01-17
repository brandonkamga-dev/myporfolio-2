import { useMemo } from 'react';
import { useTranslation } from '../contexts/LanguageContext';
import { getExperiences } from '../constants/Experience';
import { getProjects } from '../constants/Project';
import { getCertifications } from '../constants/Certification';

export const useTranslatedData = () => {
  const { language } = useTranslation();

  const experiences = useMemo(() => getExperiences(language), [language]);
  const projects = useMemo(() => getProjects(language), [language]);
  const certifications = useMemo(() => getCertifications(language), [language]);

  return {
    experiences,
    projects,
    certifications,
  };
};