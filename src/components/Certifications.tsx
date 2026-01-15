"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import useTranslation from "../hooks/useTranslation";

const Certifications = () => {
  const { t } = useTranslation();
  const certifications = [
    {
      title: "Agile & SCRUM",
      provider: "Udemy",
      date: "Nov 2024",
      id: "UC-a877ed01-31ec-4e94-9381-20bc3ac428dd",
      color: "from-blue-500 to-indigo-600",
    },
    {
      title: "Spring Boot REST APIs, JPA, MVC & Microservices",
      provider: "Udemy",
      date: "Nov 2024",
      id: "UC-2dfec82a-b971-4dc5-bb43-43893cd8420e",
      color: "from-green-500 to-emerald-600",
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t.certifications.title}
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4">
            {t.certifications.subtitle}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4 sm:p-6 hover:shadow-lg hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -3 }}
            >
              <div className="flex items-start gap-3 sm:gap-4 mb-4">
                <div className="p-2 sm:p-3 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-lg flex-shrink-0">
                  <Award size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                    {cert.date}
                  </span>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-1 sm:mb-2 leading-tight">
                    {cert.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 font-medium">
                    {cert.provider}
                  </p>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-700 rounded-lg p-3 mb-4">
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                  {t.certifications.idLabel}
                </p>
                <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 font-mono break-all">
                  {cert.id}
                </p>
              </div>

              <motion.button 
                className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors w-full sm:w-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink size={16} />
                {t.certifications.verifyButton}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
