import React from 'react';
import { Button } from '../components/ui/button';

const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      name: 'Project One',
      description: 'A comprehensive web application built with React and TypeScript.',
      stack: ['React', 'TypeScript', 'Node.js'],
      link: '#',
    },
    {
      id: 2,
      name: 'Project Two',
      description: 'An e-commerce platform with a focus on performance and scalability.',
      stack: ['Next.js', 'Tailwind CSS', 'Docker'],
      link: '#',
    },
    {
      id: 3,
      name: 'Project Three',
      description: 'A mobile application for task management and productivity.',
      stack: ['React Native', 'Firebase', 'Redux'],
      link: '#',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-12">My Projects</h1>

      <div className="space-y-12">
        {projects.map((project) => (
          <div key={project.id} className="border-b border-gray-200 pb-8">
            <h2 className="text-2xl font-semibold mb-2">{project.name}</h2>
            <p className="text-gray-600 mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.stack.map((tech) => (
                <span key={tech} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>

            <Button variant="outline" asChild>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </Button>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <Button>
          <a href="/">Back to Home</a>
        </Button>
      </div>
    </div>
  );
};

export default ProjectsPage;