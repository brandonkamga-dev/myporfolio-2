import React from 'react';
import { ExperienceCard } from './ExperienceCard';
import { Button } from './ui/button';

export const ExperienceSection: React.FC = () => {
  const experiences = [
    {
      title: 'Baccalauréat C – Mention Assez Bien',
      company: 'Collège FAPO',
      period: '2021 – 2022',
      location: 'Cameroun',
      description: '',
      responsibilities: [],
    },
    {
      title: 'Backend Co-Lead',
      company: 'Google Developer Student Club',
      period: '2023 – 2024',
      location: 'Université de Yaoundé 1',
      description: '',
      responsibilities: [
        'Organisation d\'ateliers backend modernes (Spring Boot)',
        'Encadrement technique de projets étudiants',
        'Formation de 20+ développeurs juniors',
      ],
    },
    {
      title: 'Technical Instructor',
      company: 'Technopole Training School',
      period: 'Avril – Juin 2024',
      location: 'Yaoundé',
      description: '',
      responsibilities: [
        'Formateur HTML, CSS, JS, Node.js pour étudiants et pros en reconversion',
        'Développement de programmes de formation personnalisés',
        'Taux de réussite de 100% des apprenants',
      ],
    },
    {
      title: 'DevOps & Full Stack Developer',
      company: 'PropentaTech Saving Solution',
      period: 'Depuis Avril 2025',
      location: 'Yaoundé',
      description: '',
      responsibilities: [
        'Stack Spring Boot + React',
        'CI/CD avec Jenkins, GitHub Actions, Docker',
        'Architecture microservices scalable',
      ],
    },
    {
      title: 'Full Stack AI Developer internship',
      company: 'Seed Softengine',
      period: 'Depuis Mai 2025',
      location: 'Yaoundé',
      description: '',
      responsibilities: [
        'Développement d\'extension web',
        'Développement backend avec Node.js',
        'Responsable de la culture DevOps d\'équipe',
        'Intégration d\'API d\'IA générative',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20">
      <h2 className="text-3xl font-bold mb-12 dark:text-white">Parcours</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
        Education, expériences professionnelles et leadership technique
      </p>

      <div className="space-y-10">
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} {...experience} />
        ))}
      </div>

      <div className="mt-12">
        <Button variant="outline">
          <a href="/resume.pdf" download>
            Télécharger mon CV
          </a>
        </Button>
      </div>
    </section>
  );
};

