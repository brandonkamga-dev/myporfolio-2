import coachMyMove from "@/assets/coach-my-move.png"
import egolya from "@/assets/egolya.png"
import lesCraKs from "@/assets/lescracks.png"
import dishTrad from "@/assets/dishtrad.png"
import portfolio from "@/assets/portfolio.png"

export const projectsData = {
  fr: [
    {
      title: 'Egolya',
      technologies: 'Node.js • Express • LangChain • Gemini AI • Docker',
      description: 'Extension web intelligente connectée à WhatsApp, agissant comme un assistant personnel d\'apprentissage et de productivité. Elle permet d\'analyser le contenu, reformuler, générer des résumés et interagir contextuellement grâce à l\'IA.',
      imageUrl: egolya,
      projectUrl: '#',
    },
    {
      title: 'CoachMyMove',
      technologies: 'React • Tailwind CSS • Node.js • Express • LangChain • ChromaDB • Gemini AI API • Docker',
      description: 'Plateforme interactive conçue pour apprendre à jouer aux échecs avec un assistant IA. Elle guide les utilisateurs pas à pas, explique les stratégies et propose des scénarios personnalisés.',
      imageUrl: coachMyMove,
      projectUrl: '#',
    },
    {
      title: 'LesCraKs Website',
      technologies: 'React • Tailwind CSS',
      description: 'Site vitrine officiel de LesCraKs, agence EdTech dédiée à la formation, au mentorat et à l\'insertion professionnelle des jeunes talents dans la tech.',
      imageUrl: lesCraKs,
      projectUrl: '#',
    },
    {
      title: 'DishTrad',
      technologies: 'React • Tailwind CSS • Node.js • FastAPI • RabbitMQ • LangChain • ChromaDB • TensorFlow • PostgreSQL • Docker',
      description: 'Plateforme dédiée à la valorisation des mets traditionnels africains, intégrant un assistant IA conversationnel pour répondre aux questions, recommander des plats et partager leur histoire culinaire.',
      imageUrl: dishTrad,
      projectUrl: '#',
    },
    {
      title: 'Portfolio Personnel',
      technologies: 'React • TypeScript • Tailwind CSS • Framer Motion',
      description: 'Portfolio moderne développé avec les dernières technologies web.',
      imageUrl: portfolio,
      projectUrl: 'https://brandonkamga.griote.org/blog',
    },
  ],
  en: [
    {
      title: 'Egolya',
      technologies: 'Node.js • Express • LangChain • Gemini AI • Docker',
      description: 'Intelligent web extension connected to WhatsApp, acting as a personal learning and productivity assistant. It allows content analysis, rephrasing, summary generation and contextual interaction thanks to AI.',
      imageUrl: '/placeholder.svg',
      projectUrl: '#',
    },
    {
      title: 'CoachMyMove',
      technologies: 'React • Tailwind CSS • Node.js • Express • LangChain • ChromaDB • Gemini AI API • Docker',
      description: 'Interactive platform designed to learn chess with an AI assistant. It guides users step by step, explains strategies and offers personalized scenarios.',
      imageUrl: '/placeholder.svg',
      projectUrl: '#',
    },
    {
      title: 'LesCraKs Website',
      technologies: 'React • Tailwind CSS',
      description: 'Official showcase website of LesCraKs, EdTech agency dedicated to training, mentoring and professional integration of young talents in tech.',
      imageUrl: '/placeholder.svg',
      projectUrl: '#',
    },
    {
      title: 'DishTrad',
      technologies: 'React • Tailwind CSS • Node.js • FastAPI • RabbitMQ • LangChain • ChromaDB • TensorFlow • PostgreSQL • Docker',
      description: 'Platform dedicated to the valorization of traditional African dishes, integrating a conversational AI assistant to answer questions, recommend dishes and share their culinary history.',
      imageUrl: '/placeholder.svg',
      projectUrl: '#',
    },
    {
      title: 'Personal Portfolio',
      technologies: 'React • TypeScript • Tailwind CSS • Framer Motion',
      description: 'Modern portfolio developed with the latest web technologies.',
      imageUrl: '/placeholder.svg',
      projectUrl: 'https://brandonkamga.griote.org/blog',
    },
  ],
};

export const getProjects = (language: 'fr' | 'en' = 'fr') => {
  return projectsData[language] || projectsData.fr;
};

// Backward compatibility
export const projects = getProjects();
