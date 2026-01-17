import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Routes, Route } from 'react-router-dom';

import { Sidebar } from './components/Sidebar';
import { HeroSection } from './components/HeroSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { CertificationsSection } from './components/CertificationsSection';
import { WorkSection } from './components/WorkSection';
import { ContactSection } from './components/ContactSection';
import { CursorLightEffect } from './components/CursorLightEffect';
import ProjectsPage from './pages/Projects';
import ExperiencesPage from './pages/Experiences';
import { useTranslation } from './contexts/LanguageContext';

import heroImage from './assets/me.jpeg';

const HomePage = () => {
  const [activeSection, setActiveSection] = useState<string>('about');
  const appRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  /* ----------------------------- GSAP SETUP ----------------------------- */
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  /* ------------------------ SCROLL SECTION TRACKING ---------------------- */
  useEffect(() => {
  const handleScroll = () => {
    const sections = document.querySelectorAll<HTMLElement>('section');
    const scrollY = window.scrollY;
    const viewportHeight = window.innerHeight;
    const pageHeight = document.documentElement.scrollHeight;

    // 🔥 1. Bottom de page → contact ACTIF
    if (scrollY + viewportHeight >= pageHeight - 5) {
      setActiveSection('contact');
      return;
    }

    // 🔥 2. Détection normale (on STOP dès qu'on trouve)
    for (const section of sections) {
      const rect = section.getBoundingClientRect();

      if (rect.top <= 150 && rect.bottom >= 150) {
        setActiveSection(section.id);
        return;
      }
    }
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);


  /* -------------------------- SCROLL TO SECTION -------------------------- */
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setActiveSection(id);
  };

  /* -------------------------------- RENDER ------------------------------- */
  return (
    <div
      ref={appRef}
      className="flex flex-col md:flex-row min-h-screen transition-colors duration-300"
    >
      {/* ========================= CURSOR LIGHT EFFECT ========================= */}
      <CursorLightEffect />

      {/* ============================ SIDEBAR ============================ */}
      <Sidebar
        sections={['about', 'skills', 'experience', 'certifications', 'work', 'contact']}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />

      {/* ========================= MAIN CONTENT ========================== */}
      <main className="w-full md:w-2/3 md:ml-auto p-8 md:p-12 space-y-32">
        <HeroSection
          name={t('hero.name')}
          role={t('hero.role')}

          intro={t('hero.intro')}

          mission={t('hero.mission')}

          primaryCtaText={t('hero.ctaPrimary')}
          primaryCtaLink="#contact"

          secondaryCtaText={t('hero.ctaSecondary')}
          secondaryCtaLink="https://lescracks.com"
          backgroundImage={heroImage}
        />


        <SkillsSection />
        <ExperienceSection />
        <CertificationsSection />
        <WorkSection />
        <ContactSection />
      </main>
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/experiences" element={<ExperiencesPage />} />
    </Routes>
  );
};

export default App;

