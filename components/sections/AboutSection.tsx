import { about, skills } from '../data/content';
import { type FC } from 'react';

interface AboutSectionProps {
  className?: string;
}

const AboutSection: FC<AboutSectionProps> = ({ className = '' }) => {
  return (
    <section className={`mx-auto max-w-6xl px-2 py-10 ${className}`}>
      <header className="reveal-up mb-12">
        <span className="section-kicker">About</span>
        <h1 className="mt-5 text-4xl font-extrabold leading-tight text-slate-50 md:text-6xl">
          {about.title}
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-slate-200/90">
          {about.subtitle || 'Product-focused engineer — building reliable, elegant experiences.'}
        </p>
      </header>

      <div className="grid items-start gap-8 lg:grid-cols-3">
        <div className="glass-panel interactive-card reveal-up space-y-6 rounded-2xl p-7 md:col-span-2">
          {about.introduction.map((text, idx) => (
            <p key={idx} className="text-base leading-relaxed text-slate-200 md:text-lg">
              {text}
            </p>
          ))}

          <div className="mt-8 grid gap-4 border-t border-white/10 pt-5 sm:grid-cols-2">
            <div className="glass-panel-soft rounded-xl p-4">
              <h3 className="text-xs uppercase tracking-[0.16em] text-slate-400">Location</h3>
              <p className="mt-2 text-sm font-semibold text-slate-100">{about.location}</p>
            </div>
            {about.status && (
              <div className="glass-panel-soft rounded-xl p-4">
                <h3 className="text-xs uppercase tracking-[0.16em] text-slate-400">Status</h3>
                <p className="mt-2 text-sm font-semibold text-slate-100">{about.status}</p>
              </div>
            )}
          </div>

          <div className="mt-4 border-t border-white/10 pt-5">
            <h3 className="tech-chip text-[11px] uppercase tracking-[0.14em] text-zinc-200/80">
              Craft + Discipline
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {about.additionalInfo.map((info, i) => (
                <span
                  key={i}
                  className="rounded-md border border-zinc-300/20 bg-zinc-300/10 px-2.5 py-1 text-xs text-zinc-100/90"
                >
                  {info}
                </span>
              ))}
            </div>
          </div>
        </div>

        <aside className="space-y-5">
          {skills.map((category, i) => (
            <div key={i} className="glass-panel interactive-card reveal-up rounded-2xl p-5" style={{ animationDelay: `${i * 80}ms` }}>
              <h4 className="text-sm font-semibold tracking-[0.09em] text-zinc-100">{category.category}</h4>
              <div className="mt-4 grid grid-cols-2 gap-2">
                {category.items.map((item, j) => (
                  <span
                    key={j}
                    className="tech-chip inline-flex items-center justify-center rounded-md border border-zinc-300/20 bg-zinc-300/10 px-2.5 py-1.5 text-[11px] text-zinc-100 transition hover:-translate-y-0.5 hover:bg-zinc-300/15"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </aside>
      </div>
    </section>
  );
};

export default AboutSection;
