import { useState, useEffect } from 'react';
import { Button } from './components/ui/button';

const App = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let currentSection = 'hero';

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Left Column - Fixed */}
      <div className="w-full md:w-1/3 bg-gray-50 p-8 md:p-12 md:fixed md:h-screen flex flex-col justify-between">
        <div>
          <h1 className="text-2xl font-bold mb-2">Your Name</h1>
          <p className="text-gray-600 mb-6">Developer</p>
          <p className="text-sm text-gray-500 mb-8">
            I build reliable and thoughtful digital experiences.
          </p>

          {/* Navigation Menu */}
          <nav className="space-y-4">
            {['hero', 'about', 'experience', 'work', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`block text-left ${
                  activeSection === section
                    ? 'text-blue-600 font-medium'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </nav>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4">
          <a href="#" className="text-gray-400 hover:text-gray-600">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-600">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Right Column - Scrollable */}
      <div className="w-full md:w-2/3 md:ml-auto p-8 md:p-12">
        {/* Hero Section */}
        <section id="hero" className="min-h-screen flex items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Hi, my name is
              <br />
              <span className="text-blue-600">Your Name</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-md">
              I build reliable and thoughtful digital experiences.
            </p>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            I'm a developer focused on building clean, maintainable, and useful web applications.
          </p>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {['JavaScript', 'React', 'TypeScript', 'Node.js', 'Docker'].map((tech) => (
                <span key={tech} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20">
          <h2 className="text-3xl font-bold mb-8">Experience</h2>
          <div className="space-y-8">
            <div className="border-l-2 border-gray-200 pl-6">
              <h3 className="text-xl font-semibold">Senior Developer</h3>
              <p className="text-gray-500 mb-2">Company Name • 2020 - Present</p>
              <p className="text-gray-600">
                Led a team of developers to build scalable web applications using modern technologies.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <Button variant="outline">
              <a href="/resume.pdf" download>Download Resume</a>
            </Button>
          </div>
        </section>

        {/* Work Section */}
        <section id="work" className="py-20">
          <h2 className="text-3xl font-bold mb-8">My Work</h2>
          <div className="space-y-12">
            <div className="border-b border-gray-200 pb-8">
              <h3 className="text-xl font-semibold mb-2">Project Name</h3>
              <p className="text-gray-500 mb-4">Technology Stack</p>
              <p className="text-gray-600 mb-4">
                A brief description of the project and its impact.
              </p>
              <a href="#" className="text-blue-600 hover:underline">
                View Project
              </a>
            </div>
          </div>

          <div className="mt-12">
            <Button variant="outline">
              <a href="/projects">View All Projects</a>
            </Button>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            I'm open to new opportunities. Feel free to reach out.
          </p>

          <Button>
            <a href="mailto:your.email@example.com">Say Hello</a>
          </Button>
        </section>
      </div>
    </div>
  );
};

export default App;
