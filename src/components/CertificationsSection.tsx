import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

export const CertificationsSection: React.FC = () => {
  const certifications = [
    {
      title: "Agile & SCRUM",
      provider: "Udemy",
      date: "Nov 2024",
      id: "UC-a877ed01-31ec-4e94-9381-20bc3ac428dd",
    },
    {
      title: "Spring Boot REST APIs, JPA, MVC & Microservices",
      provider: "Udemy",
      date: "Nov 2024",
      id: "UC-2dfec82a-b971-4dc5-bb43-43893cd8420e",
    },
  ];

  return (
    <section id="certifications" className="py-20">
      <h2 className="text-3xl font-bold mb-12 dark:text-white">Certifications</h2>

      <div className="space-y-10">
        {certifications.map((cert, index) => (
          <div
            key={cert.id}
            className="border-l-2 border-gray-200 dark:border-gray-700 pl-6 transition-all duration-300 hover:border-blue-500"
          >
            <div className="flex items-start gap-3 sm:gap-4 mb-4">
              <div className="p-2 sm:p-3 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-lg flex-shrink-0">
                <Award size={20} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">{cert.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-3">{cert.provider} • {cert.date}</p>
                <div className="bg-white dark:bg-gray-700 rounded-lg p-3 mb-4">
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">ID de certification:</p>
                  <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 font-mono break-all">{cert.id}</p>
                </div>
                <button
                  className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors w-full sm:w-auto"
                >
                  <ExternalLink size={16} />
                  Vérifier
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};