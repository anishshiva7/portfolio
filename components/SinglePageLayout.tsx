import { useState, useEffect, useMemo, useRef } from 'react';
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

export default function SinglePageLayout({ showBackground = false }: SinglePageLayoutProps) {
  const [activeSection, setActiveSection] = useState('about');
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const aboutRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const experienceRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  const menuItems = useMemo<MenuItem[]>(
    () => [
      { name: 'ABOUT', ref: aboutRef },
      { name: 'EXPERIENCE', ref: experienceRef },
      { name: 'PROJECTS', ref: projectsRef },
      { name: 'CONTACT', ref: contactRef }
    ],
    []
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = documentHeight > 0 ? Math.min(1, window.scrollY / documentHeight) : 0;
      setScrollProgress(progress);

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

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [menuItems]);

  const scrollToSection = (ref: SectionRef) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div
      className={`app-shell min-h-screen antialiased ${showBackground ? 'bg-transparent' : ''}`}
      style={{ color: 'rgb(var(--foreground-rgb))' }}
    >
      <div
        className="scroll-progress"
        aria-hidden
        style={{ transform: `scaleX(${scrollProgress})` }}
      />
      <header className="sticky top-0 z-50 px-4 sm:px-6 pt-4">
        <div
          className={`glass-panel mx-auto max-w-6xl rounded-2xl px-5 py-4 transition-all ${
            scrolled ? 'shadow-2xl' : ''
          }`}
        >
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div
              aria-label="AS logo"
              className="group relative inline-flex h-12 w-20 items-center justify-center overflow-hidden"
            >
              <span className="absolute -translate-x-[2px] translate-y-[1px] font-serif text-[3.1rem] leading-none tracking-[-0.05em] text-zinc-200/88">
                AS
              </span>
              <span className="relative translate-x-[2px] -translate-y-[1px] text-[2.85rem] font-black leading-none tracking-[-0.08em] text-white/96 transition-transform duration-200 group-hover:scale-[1.03]">
                AS
              </span>
            </div>
            <nav className="flex flex-wrap gap-2">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.ref)}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold tracking-[0.08em] transition ${
                  activeSection === item.name.toLowerCase()
                    ? 'bg-zinc-400/20 text-zinc-100 ring-1 ring-zinc-200/35'
                    : 'text-slate-300 hover:-translate-y-0.5 hover:bg-white/10 hover:text-white'
                }`}
              >
                {item.name}
              </button>
            ))}
            </nav>
          </div>
        </div>
      </header>

      <main className="craft-grid relative z-10 mx-auto max-w-6xl px-4 pb-8 pt-10 sm:px-6">
        <section ref={aboutRef} id="about" className="min-h-screen py-16">
          <AboutSection />
        </section>

        <section ref={experienceRef} id="experience" className="py-16">
          <ExperienceSection />
        </section>

        <section ref={projectsRef} id="projects" className="py-16">
          <ProjectsSection />
        </section>

        <section ref={contactRef} id="contact" className="pb-24 pt-10">
          <ContactSection />
        </section>
      </main>

      <footer className="mx-auto max-w-6xl px-6 pb-10 text-center text-xs text-slate-400/75">
        © {new Date().getFullYear()} {contactInfo.name}
      </footer>
    </div>
  );
}
