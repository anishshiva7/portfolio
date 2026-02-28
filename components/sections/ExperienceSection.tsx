import { experiences } from '../data/content';
import { type FC } from 'react';

interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
  highlights: string[];
  publication?: {
    label: string;
    url: string;
  };
}

interface ExperienceSectionProps {
  className?: string;
}

const ExperienceCard: FC<{ experience: Experience }> = ({ experience }) => (
  <article className="glass-panel interactive-card reveal-up relative rounded-2xl p-6 md:p-7">
    <span className="timeline-dot" />
    <div className="flex items-start justify-between gap-4">
      <div>
        <h3 className="text-xl font-semibold text-slate-50">{experience.role}</h3>
        <p className="mt-1 text-sm text-slate-300/90">{experience.company}</p>
      </div>
      <div className="hidden text-right text-sm text-slate-300/80 sm:block">
        <div className="mb-2">{experience.period}</div>
      </div>
    </div>

    <p className="mt-4 text-slate-200/90">{experience.description}</p>
    {experience.publication && (
      <a
        href={experience.publication.url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 inline-flex text-sm font-medium text-zinc-100 underline underline-offset-4 hover:text-white"
      >
        {experience.publication.label}
      </a>
    )}

    <div className="mt-5 flex flex-wrap gap-2">
      {experience.technologies.map((t, i) => (
        <span
          key={i}
          className="tech-chip rounded-md border border-zinc-300/20 bg-zinc-300/10 px-2.5 py-1 text-[11px] text-zinc-100"
        >
          {t}
        </span>
      ))}
    </div>

    <ul className="mt-5 list-none space-y-2.5">
      {experience.highlights.map((h, i) => (
        <li key={i} className="flex items-start gap-3 text-slate-200/90">
          <span className="mt-1 text-sm text-zinc-300">•</span>
          <p className="text-sm leading-relaxed">{h}</p>
        </li>
      ))}
    </ul>
  </article>
);

const ExperienceSection: FC<ExperienceSectionProps> = ({ className = '' }) => {
  return (
    <section className={`mx-auto max-w-6xl px-2 py-10 ${className}`}>
      <header className="reveal-up mb-10">
        <span className="section-kicker">Experience</span>
        <h2 className="mt-4 text-3xl font-extrabold text-slate-50 md:text-5xl">Professional Experience</h2>
        <p className="mt-3 max-w-2xl text-slate-300/90">
          Real-world roles where I improved systems, shipped tooling, and made teams move faster.
        </p>
      </header>

      <div className="relative space-y-7 border-l border-zinc-200/30 pl-6 md:pl-8">
        {experiences.map((exp: Experience, idx: number) => (
          <ExperienceCard key={idx} experience={exp} />
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
