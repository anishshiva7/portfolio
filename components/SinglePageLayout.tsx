import { useState, useEffect, useRef } from 'react';
import Background3D from './Background3D';
import AboutSection from './sections/AboutSection';
import ProjectsSection from './sections/ProjectsSection';
import ExperienceSection from './sections/ExperienceSection';
import ContactSection from './sections/ContactSection';
import { contactInfo } from './data/content';

type SectionRef = React.MutableRefObject<HTMLDivElement | null>;

type MenuItem = {
  name: string;
  ref: SectionRef;
};

interface SinglePageLayoutProps {
  showBackground?: boolean;
}

export default function SinglePageLayout({ showBackground = true }: SinglePageLayoutProps) {
  const [activeSection, setActiveSection] = useState('about');
  const [scrolled, setScrolled] = useState(false);
  const [loaded, setLoaded] = useState(false);
  
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const experienceRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  const menuItems: MenuItem[] = [
    { name: 'ABOUT', ref: aboutRef },
    { name: 'PROJECTS', ref: projectsRef },
    { name: 'EXPERIENCE', ref: experienceRef },
    { name: 'CONTACT', ref: contactRef }
  ];

  useEffect(() => {
    setLoaded(true);
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sectionPositions = menuItems.map(item => ({
        name: item.name,
        position: item.ref.current?.offsetTop ?? 0
      }));
      
      const currentPosition = window.scrollY + window.innerHeight / 3;
      
      for (let i = sectionPositions.length - 1; i >= 0; i--) {
        if (currentPosition >= sectionPositions[i].position) {
          setActiveSection(sectionPositions[i].name.toLowerCase());
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (ref: SectionRef) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen text-white font-mono">
      {showBackground && <Background3D />}
      
      <nav className={`fixed top-0 left-0 w-full z-50 mix-blend-difference transition-all duration-300 ${
        scrolled ? 'bg-black/50 backdrop-blur' : ''
      }`}>
        <div className="px-6 py-4 flex justify-between items-center max-w-7xl mx-auto">
          <span className="text-xs tracking-widest loading-text">
            {contactInfo.name}
          </span>
          <div className="flex space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.ref)}
                className={`text-sm hover:opacity-75 transition-all hover:tracking-wider ${
                  activeSection === item.name.toLowerCase() 
                    ? 'text-red-500' 
                    : 'text-white'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className={`transition-opacity duration-1000 ${
        loaded ? 'opacity-100' : 'opacity-0'
      }`}>
        <div ref={aboutRef} className="min-h-screen pt-32 px-4 backdrop-blur-sm bg-black/30">
          <AboutSection />
        </div>

        <div ref={projectsRef} className="min-h-screen pt-32 px-4 backdrop-blur-sm bg-black/30">
          <ProjectsSection />
        </div>

        <div ref={experienceRef} className="min-h-screen pt-32 px-4 backdrop-blur-sm bg-black/30">
          <ExperienceSection />
        </div>

        <div ref={contactRef} className="min-h-screen pt-32 px-4 backdrop-blur-sm bg-black/30">
          <ContactSection />
        </div>
      </main>

      <footer className="px-4 py-8 border-t border-white/20">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-xs">
          <span>© 2024</span>
          <div className="space-x-8">
            <a 
              href={`https://${contactInfo.social.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:line-through"
            >
              GITHUB
            </a>
            <a 
              href={`https://${contactInfo.social.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:line-through"
            >
              LINKEDIN
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}