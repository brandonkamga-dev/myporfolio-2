import React from 'react';
import { Award, ExternalLink } from 'lucide-react';
import { useTranslation } from '../contexts/LanguageContext';
import { useTranslatedData } from '../hooks/useTranslatedData';



export const CertificationsSection: React.FC = () => {
  const { t } = useTranslation();
  const { certifications } = useTranslatedData();

  return (
    <section id="certifications" className="py-20">
      <h2 className="text-3xl font-bold mb-12 dark:text-white">{t('sections.certifications.title')}</h2>

      <div className="space-y-10">
        {certifications.map((cert, index) => (
          <div
            key={cert.title}
            className="border-l-2 border-gray-200 dark:border-gray-700 pl-6 transition-all duration-300 hover:border-blue-500"
          >
            <div className="flex items-start gap-3 sm:gap-4 mb-4">
              <div className="p-2 sm:p-3 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-lg flex-shrink-0">
                <Award size={20} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">{cert.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-3">{cert.provider} • {cert.date}</p>
                <button
                  className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors w-full sm:w-auto"
                >
                  <ExternalLink size={16} />
                  <a href={cert.link} target="_blank" rel="noopener noreferrer">{t('sections.certifications.verify')}</a>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};