// ContactSection.tsx
import React from 'react';
import { Button } from './ui/button';

interface ContactSectionProps {
  title?: string;
  description?: string;
  email?: string;
  ctaText?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  title = "Get In Touch",
  description = "I'm open to new opportunities. Feel free to reach out.",
  email = "your.email@example.com",
  ctaText = "Say Hello",
}) => {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 dark:text-white">{title}</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-12 text-lg">{description}</p>

        <Button
          size="lg"
          className="transition-all duration-300 hover:scale-105"
        >
          <a href={`mailto:${email}`}>{ctaText}</a>
        </Button>
      </div>
    </section>
  );
};
