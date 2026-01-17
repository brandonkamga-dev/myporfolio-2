export const experiencesData = {
  fr: [
    {
      title: 'Baccalauréat C – Mention Assez Bien',
      company: 'Collège FAPO',
      period: '2021 – 2022',
      location: 'Yaoundé - Cameroun',
      description: 'Obtention du Baccalauréat scientifique avec mention, préparant le terrain pour des études supérieures en informatique.',
      responsibilities: [],
    },
    {
      title: 'Backend Co-Lead',
      company: 'Google Developer Student Club',
      period: '2023 – 2024',
      location: 'Université de Yaoundé 1',
      description: 'Encadrement et accompagnement des projets backend pour les étudiants développeurs.',
      responsibilities: [
        'Organisation d\'ateliers pratiques sur les technologies backend modernes (Spring Boot, Node.js).',
        'Encadrement technique de projets étudiants et résolution de problèmes complexes.',
        'Formation et mentorat de 20+ développeurs juniors.',
      ],
    },
    {
      title: 'Technical Instructor',
      company: 'Technopole Training School',
      period: 'Avril – Juin 2024',
      location: 'Yaoundé - Cameroun',
      description: 'Formateur spécialisé en développement web et backend pour étudiants et professionnels en reconversion.',
      responsibilities: [
        'Formation complète HTML, CSS, JavaScript et Node.js.',
        'Développement de programmes pédagogiques personnalisés adaptés aux besoins des apprenants.',
        'Taux de réussite de 100% des étudiants formés.',
      ],
    },
    {
      title: 'Full Stack AI Developer Internship',
      company: 'Seed Softengine',
      period: 'Depuis Mai 2025',
      location: 'Yaoundé - Cameroun',
      description: 'Stage full-stack orienté IA et DevOps, intégrant le développement backend et frontend ainsi que l\'IA générative.',
      responsibilities: [
        'Développement d\'extensions web et applications full-stack.',
        'Intégration de services et API d\'IA générative.',
        'Responsable de la culture DevOps au sein de l\'équipe.',
      ],
    },
    {
      title: 'Founder & Mentor',
      company: 'LesCracks',
      period: 'Août 2025 – Aujourd\'hui',
      location: 'Yaoundé - Cameroun',
      description: 'Création de l\'agence LesCracks pour accompagner de jeunes talents dans leur montée en compétences et leur insertion professionnelle.',
      responsibilities: [
        'Accompagnement de jeunes profils en développement web frontend, DevOps et machine learning.',
        'Mentorat sur l\'acquisition de soft skills essentiels pour le monde professionnel.',
        'Aide à la recherche et à l\'accès à des opportunités professionnelles pertinentes.',
      ],
    },
    {
      title: 'Tech Lead & Chef de Projet',
      company: 'Griote – Project Africa',
      period: 'Depuis 2025',
      location: 'Yaoundé - Cameroun',
      description: 'Responsable du développement et de la coordination technique des projets de la plateforme Project Africa.',
      responsibilities: [
        'Direction technique du développement full-stack (React, Node.js, Docker).',
        'Supervision de l\'implémentation des outils de monitoring (Grafana, Prometheus).',
        'Coordination des efforts de l\'équipe et encadrement des nouveaux arrivants.',
        'Gestion de projets, planification des sprints et suivi des livrables.',
      ],
    },
  ],
  en: [
    {
      title: 'Baccalaureate C – Fair Mention',
      company: 'Collège FAPO',
      period: '2021 – 2022',
      location: 'Yaoundé - Cameroon',
      description: 'Obtained the scientific baccalaureate with mention, preparing the ground for higher studies in computer science.',
      responsibilities: [],
    },
    {
      title: 'Backend Co-Lead',
      company: 'Google Developer Student Club',
      period: '2023 – 2024',
      location: 'University of Yaoundé 1',
      description: 'Leadership and support for backend projects for student developers.',
      responsibilities: [
        'Organization of practical workshops on modern backend technologies (Spring Boot, Node.js).',
        'Technical supervision of student projects and resolution of complex problems.',
        'Training and mentoring of 20+ junior developers.',
      ],
    },
    {
      title: 'Technical Instructor',
      company: 'Technopole Training School',
      period: 'April – June 2024',
      location: 'Yaoundé - Cameroon',
      description: 'Specialized instructor in web and backend development for students and professionals in career transition.',
      responsibilities: [
        'Complete training in HTML, CSS, JavaScript and Node.js.',
        'Development of personalized educational programs adapted to learners\' needs.',
        '100% success rate of trained students.',
      ],
    },
    {
      title: 'Full Stack AI Developer Internship',
      company: 'Seed Softengine',
      period: 'Since May 2025',
      location: 'Yaoundé - Cameroon',
      description: 'AI and DevOps oriented full-stack internship, integrating backend and frontend development as well as generative AI.',
      responsibilities: [
        'Development of web extensions and full-stack applications.',
        'Integration of generative AI services and APIs.',
        'Responsible for DevOps culture within the team.',
      ],
    },
    {
      title: 'Founder & Mentor',
      company: 'LesCracks',
      period: 'August 2025 – Today',
      location: 'Yaoundé - Cameroon',
      description: 'Creation of the LesCracks agency to support young talents in their skill development and professional integration.',
      responsibilities: [
        'Support for young profiles in frontend web development, DevOps and machine learning.',
        'Mentoring on the acquisition of essential soft skills for the professional world.',
        'Help with searching and accessing relevant professional opportunities.',
      ],
    },
    {
      title: 'Tech Lead & Project Manager',
      company: 'Griote – Project Africa',
      period: 'Since 2025',
      location: 'Yaoundé - Cameroon',
      description: 'Responsible for the development and technical coordination of Project Africa platform projects.',
      responsibilities: [
        'Technical direction of full-stack development (React, Node.js, Docker).',
        'Supervision of monitoring tools implementation (Grafana, Prometheus).',
        'Coordination of team efforts and onboarding of new members.',
        'Project management, sprint planning and deliverables tracking.',
      ],
    },
  ],
};

export const getExperiences = (language: 'fr' | 'en' = 'fr') => {
  return experiencesData[language] || experiencesData.fr;
};

// Backward compatibility
export const experiences = getExperiences();