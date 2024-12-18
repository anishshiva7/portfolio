import { about, skills, type Skill } from '../data/content';
import { type FC } from 'react';

interface AboutSectionProps {
  className?: string;
}

const AboutSection: FC<AboutSectionProps> = ({ className = '' }) => {
  return (
    <div className={`max-w-4xl mx-auto ${className}`}>
      {/* Main title with stronger presence */}
      <h1 className="text-5xl md:text-6xl font-bold mb-16 tracking-wider text-white loading-glitch glow-text">
        {about.title}
      </h1>
      
      {/* Introduction section with larger, clearer text */}
      <div className="mb-16 space-y-8">
        {about.introduction.map((text, index) => (
          <p 
            key={index} 
            className="text-xl md:text-2xl font-medium leading-relaxed text-white/90 
                       hover:text-white transition-colors tracking-wide"
          >
            {text}
          </p>
        ))}
        
        {/* Location and status with distinct styling */}
        <div className="text-xl md:text-2xl font-medium tracking-wider text-white/80 
                    hover:text-white/100 transition-colors pt-4 border-t border-white/20">
          <p>{about.location}</p>
          {about.status && <p>{about.status}</p>}
        </div>
      </div>

      {/* Skills grid with enhanced visibility */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {skills.map((category, index) => (
          <div 
            key={index}
            className="space-y-6 transform transition-all duration-500"
            style={{
              transitionDelay: `${(index + 2) * 0.2}s`,
              animation: 'fadeIn 0.5s ease-out forwards'
            }}
          >
            {/* Category headers with better contrast */}
            <h2 className="text-xl md:text-2xl font-bold tracking-wider text-white/90 glow-text-subtle">
              {category.category}
            </h2>
            
            {/* Skill items with improved visibility and interaction */}
            <div className="space-y-3">
              {category.items.map((item, i) => (
                <div 
                  key={i}
                  className="text-lg md:text-xl font-medium px-4 py-3 
                           border border-white/20 hover:border-white/60
                           bg-black/30 hover:bg-black/50
                           text-white/80 hover:text-white
                           transition-all duration-300 ease-in-out
                           transform hover:translate-x-1
                           hover:glow-text-subtle"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Add these classes to your global CSS
const styles = `
  .glow-text {
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.5),
                 0 0 20px rgba(255, 255, 255, 0.3),
                 0 0 30px rgba(255, 255, 255, 0.2);
  }

  .glow-text-subtle {
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.3),
                 0 0 20px rgba(255, 255, 255, 0.2);
  }

  .hover-glow:hover {
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.4),
                 0 0 20px rgba(255, 255, 255, 0.2);
  }
`;

export default AboutSection;