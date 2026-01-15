import React from 'react';
import { Button } from './ui/button';

export interface ProjectCardProps {
  title: string;
  technologies: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  technologies,
  description,
  imageUrl,
  projectUrl,
}) => {
  return (
    <div className="project-card border border-gray-200 dark:border-gray-700 rounded-lg p-6 transition-all duration-300 hover:shadow-lg">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl font-bold mb-3 text-gray-800 dark:text-gray-200">{title}</h3>
          <p className="text-gray-500 dark:text-gray-400 mb-4">{technologies}</p>
          <p className="text-gray-600 dark:text-gray-300 mb-6">{description}</p>
          <Button variant="outline" size="sm">
            <a href={projectUrl}>{title === 'Portfolio Personnel' ? 'Voir le projet' : 'Voir le projet'}</a>
          </Button>
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 h-48 flex items-center justify-center">
          <img src={imageUrl} alt={`${title} Preview`} className="max-w-full max-h-full object-contain rounded" />
        </div>
      </div>
    </div>
  );
};