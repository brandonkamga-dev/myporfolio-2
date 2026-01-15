import React from 'react';

export interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  location?: string;
  description: string;
  responsibilities: string[];
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  company,
  period,
  location,
  description,
  responsibilities,
}) => {
  return (
    <div className="border-l-2 border-gray-200 dark:border-gray-700 pl-6 transition-all duration-300 hover:border-blue-500">
      <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">{title}</h3>
      <p className="text-gray-500 dark:text-gray-400 mb-3">{company} • {period}{location ? ` • ${location}` : ''}</p>
      {description && <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>}
      {responsibilities.length > 0 && (
        <ul className="list-disc list-inside text-gray-500 dark:text-gray-400 space-y-1">
          {responsibilities.map((responsibility, index) => (
            <li key={index}>{responsibility}</li>
          ))}
        </ul>
      )}
    </div>
  );
};