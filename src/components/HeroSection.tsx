// HeroSection.tsx
import React from 'react';
import { Button } from './ui/button';

interface HeroSectionProps {
  name: string;
  role?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  name,
  role = 'Developer',
  description = "I build reliable and thoughtful digital experiences.",
  ctaText,
  ctaLink,
  backgroundImage,
}) => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Background Image */}
      {backgroundImage && (
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <img
            src={backgroundImage}
            alt="Background"
            className="w-full h-full object-cover"
            style={{ filter: 'blur(2px)' }}
          />
        </div>
      )}

      <div className="relative z-10 max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white">
          Hi, my name is
          <br />
          <span className="text-blue-600 dark:text-blue-400">{name}</span>
        </h2>

        {role && (
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
            {role}
          </p>
        )}

        {description && (
          <p className="text-lg text-gray-500 dark:text-gray-400 mb-6">
            {description}
          </p>
        )}

        {ctaText && ctaLink && (
          <Button variant="outline" size="lg">
            <a href={ctaLink}>{ctaText}</a>
          </Button>
        )}
      </div>
    </section>
  );
};
