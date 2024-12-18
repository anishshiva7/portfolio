import { experiences } from '../data/content';
import { type FC } from 'react';

interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
  highlights: string[];
}

interface ExperienceSectionProps {
  className?: string;
}

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard: FC<ExperienceCardProps> = ({ experience }) => (
  <div className="border-l-2 border-white/20 pl-8 relative">
    <div className="absolute -left-1.5 top-0 w-3 h-3 bg-white/20" />
    
    <h2 className="text-2xl font-bold mb-2">{experience.role}</h2>
    
    <div className="text-sm opacity-50 mb-4">
      {experience.company} | {experience.period}
    </div>
    
    <p className="text-sm mb-6">{experience.description}</p>
    
    <div className="flex flex-wrap gap-2 mb-6">
      {experience.technologies.map((tech: string, index: number) => (
        <span 
          key={index}
          className="text-xs border border-white/20 px-2 py-1 hover:border-white/50 transition-colors"
        >
          {tech}
        </span>
      ))}
    </div>
    
    <ul className="space-y-2">
      {experience.highlights.map((highlight: string, index: number) => (
        <li 
          key={index}
          className="text-sm opacity-70 hover:opacity-100 transition-opacity flex items-center"
        >
          <span className="mr-2 text-xs opacity-50">{'>'}</span>
          {highlight}
        </li>
      ))}
    </ul>
  </div>
);

const ExperienceSection: FC<ExperienceSectionProps> = ({ className = '' }) => {
  return (
    <div className={`max-w-4xl mx-auto ${className}`}>
      <h1 className="text-4xl mb-16 loading-glitch">EXPERIENCE.exe</h1>
      
      <div className="space-y-24">
        {experiences.map((experience: Experience, index: number) => (
          <ExperienceCard 
            key={`experience-${index}`}
            experience={experience}
          />
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;