// ContactSection.tsx
import React from 'react';
import { Button } from './ui/button';

interface ContactSectionProps {
  title?: string;
  description?: string;
  email?: string;
  whatsappNumber?: string; // format international ex: 2376XXXXXXXX
  emailCtaText?: string;
  whatsappCtaText?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  title = "Contactez-moi",
  description = "Une idée, un projet ou une opportunité ? Discutons-en par email ou WhatsApp.",
  email = "brandonkamga237@gmail.com",
  whatsappNumber = "237650830057",
  emailCtaText = "Me contacter par email",
  whatsappCtaText = "Me contacter sur WhatsApp",
}) => {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-2xl mx-auto text-center px-4">
        <h2 className="text-3xl font-bold mb-6 dark:text-white">
          {title}
        </h2>

        <p className="text-gray-600 dark:text-gray-300 mb-10 text-lg">
          {description}
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          {/* Email */}
          <Button
            size="lg"
            className="transition-all duration-300 hover:scale-105"
            asChild
          >
            <a href={`mailto:${email}`}>
              {emailCtaText}
            </a>
          </Button>

          {/* WhatsApp */}
          <Button
            size="lg"
            variant="outline"
            className="transition-all duration-300 hover:scale-105"
            asChild
          >
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {whatsappCtaText}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
