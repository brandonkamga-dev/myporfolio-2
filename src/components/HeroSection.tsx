import React from 'react';
import { Button } from './ui/button';

interface HeroSectionProps {
  name: string;
  role?: string;

  intro?: string;
  mission?: string;

  primaryCtaText?: string;
  primaryCtaLink?: string;

  secondaryCtaText?: string;
  secondaryCtaLink?: string;

  backgroundImage?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  name,
  role = 'Developer',

  intro = 'I build reliable and thoughtful digital experiences.',
  mission,

  primaryCtaText = 'Me contacter',
  primaryCtaLink = '#contact',

  secondaryCtaText,
  secondaryCtaLink,

  backgroundImage,
}) => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden px-6"
    >
      {/* Background */}
      {backgroundImage && (
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <img
            src={backgroundImage}
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <div className="relative z-10 max-w-3xl">
        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight dark:text-white">
          Hi, my name is
          <br />
          <span className="text-blue-600 dark:text-blue-400">
            {name}
          </span>
        </h1>

        {/* Role */}
        {role && (
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6">
            {role}
          </p>
        )}

        {/* Intro */}
        {intro && (
          <p className="text-lg text-gray-500 dark:text-gray-400 mb-4">
            {intro}
          </p>
        )}

        {/* Mission / LesCracks */}
        {mission && (
          <p className="text-lg text-gray-500 dark:text-gray-400 mb-8">
            {mission}
          </p>
        )}

        {/* CTA */}
        <div className="flex flex-wrap gap-4">
          {primaryCtaText && primaryCtaLink && (
            <Button size="lg">
              <a href={primaryCtaLink}>{primaryCtaText}</a>
            </Button>
          )}

          {secondaryCtaText && secondaryCtaLink && (
            <Button variant="outline" size="lg">
              <a href={secondaryCtaLink}>{secondaryCtaText}</a>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};
