import React from 'react';
import { SkillCard } from './SkillCard';

/* Languages */
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiHtml5,
  SiCss3,
} from 'react-icons/si';

/* Frameworks & Backend */
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiSpringboot,
  SiFastapi,
} from 'react-icons/si';

/* Tools */
import {
  SiGit,
  SiDocker,
  SiFigma,
  SiPostman,
} from 'react-icons/si';
import { DiJava, DiVisualstudio } from 'react-icons/di';

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-20">
      <h2 className="text-3xl font-bold mb-14 dark:text-white">
        Skills & Technologies
      </h2>

      <div className="space-y-16">
        <SkillTable
          title="Languages"
          skills={[
            { name: 'JavaScript', icon: SiJavascript },
            { name: 'TypeScript', icon: SiTypescript },
            { name: 'Python', icon: SiPython },
            { name: 'Java', icon: DiJava },
            { name: 'HTML5', icon: SiHtml5 },
            { name: 'CSS3', icon: SiCss3 },
          ]}
        />

        <SkillTable
          title="Frameworks & Librairies"
          skills={[
            { name: 'React', icon: SiReact },
            { name: 'Next.js', icon: SiNextdotjs },
            { name: 'Node.js', icon: SiNodedotjs },
            { name: 'Express', icon: SiExpress },
            { name: 'Spring Boot', icon: SiSpringboot },
            { name: 'FastAPI', icon: SiFastapi },
            { name: 'Tailwind CSS', icon: SiTailwindcss },
          ]}
        />

        <SkillTable
          title="Tools"
          skills={[
            { name: 'Git', icon: SiGit },
            { name: 'Docker', icon: SiDocker },
            { name: 'VS Code', icon: DiVisualstudio },
            { name: 'Figma', icon: SiFigma },
            { name: 'Postman', icon: SiPostman },
          ]}
        />
      </div>
    </section>
  );
};

/* ---------------- TABLE STYLE GRID (sans bordure) ---------------- */

const SkillTable = ({
  title,
  skills,
}: {
  title: string;
  skills: { name: string; icon: any }[];
}) => (
  <div>
    <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
      {title}
    </h3>

    <div
      className="
        grid
        grid-cols-2
        sm:grid-cols-3
        md:grid-cols-4
        lg:grid-cols-6
        gap-6
      "
    >
      {skills.map((skill) => (
        <SkillCard
          key={skill.name}
          name={skill.name}
          icon={skill.icon}
        />
      ))}
    </div>
  </div>
);
