import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Sidebar } from './components/Sidebar';
import { HeroSection } from './components/HeroSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { CertificationsSection } from './components/CertificationsSection';
import { WorkSection } from './components/WorkSection';
import { ContactSection } from './components/ContactSection';

const App = () => {
  const [activeSection, setActiveSection] = useState<string>('about');
  const appRef = useRef<HTMLDivElement>(null);

  /* ----------------------------- GSAP SETUP ----------------------------- */
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  /* ------------------------ SCROLL SECTION TRACKING ---------------------- */
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let current = 'about';

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          current = section.id;
        }
      });

      setActiveSection(current);
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
      {/* ============================ SIDEBAR ============================ */}
      <Sidebar
        sections={['about', 'skills', 'experience', 'certifications', 'work', 'contact']}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />

      {/* ========================= MAIN CONTENT ========================== */}
      <main className="w-full md:w-2/3 md:ml-auto p-8 md:p-12 space-y-32">
        <HeroSection />
        <SkillsSection />
        <ExperienceSection />
        <CertificationsSection />
        <WorkSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default App;

