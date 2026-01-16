import React from 'react';
import { ProjectCard } from './ProjectCard';
import { Button } from './ui/button';
import { projects } from '@/constants/Project';


export const WorkSection: React.FC = () => {

  return (
    <section id="work" className="py-20 min-h-screen">
      <h2 className="text-3xl font-bold mb-12 dark:text-white">Projets</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
        Quelques réalisations qui illustrent mes compétences techniques
      </p>

      <div className="space-y-16">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>

      <div className="mt-16 text-center">
        <Button variant="outline" size="lg">
          <a href="/projects">Voir tous les projets</a>
        </Button>
      </div>
    </section>
  );
};