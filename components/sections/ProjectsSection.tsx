import React, { useState } from 'react';
import { X, ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { projects, type Project } from '../data/content';

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className="px-2 pb-16 pt-10">
      <div className="mx-auto max-w-6xl">
        <header className="reveal-up mb-10">
          <span className="section-kicker">Projects</span>
          <h2 className="mt-4 text-3xl font-extrabold text-slate-50 md:text-5xl">Selected Projects</h2>
          <p className="mt-3 max-w-2xl text-slate-300/90">
            Focused builds where technical depth meets practical UX and measurable outcomes.
          </p>
          <p className="tech-chip mt-4 inline-flex items-center gap-1 text-[11px] text-zinc-300/75">
            Click any card to open full preview <ArrowUpRight size={12} />
          </p>
        </header>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project, i) => (
            <div key={i} className="group reveal-up" style={{ animationDelay: `${i * 90}ms` }}>
              <div
                className="glass-panel interactive-card relative cursor-pointer overflow-hidden rounded-2xl transition duration-300 hover:-translate-y-1.5 hover:border-zinc-200/45"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative aspect-[16/9] w-full bg-slate-900/30">
                  <Image
                    src={project.preview.image}
                    alt={project.title}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover opacity-70 transition duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020812]/85 via-[#071224]/35 to-transparent p-5">
                    <div className="text-white">
                      <p className="tech-chip text-[11px] uppercase tracking-[0.14em] text-zinc-100/90">{project.category}</p>
                      <h3 className="mt-2 text-2xl font-semibold">{project.title}</h3>
                      <p className="mt-1 text-sm text-slate-200/90">{project.description}</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-5">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 4).map((t, k) => (
                      <span
                        key={k}
                        className="tech-chip rounded-md border border-zinc-300/20 bg-zinc-300/10 px-2.5 py-1 text-[11px] text-zinc-100"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="tech-chip text-xs text-slate-300/80">{project.year}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
            <div className="absolute inset-0 bg-[#020611]/85 backdrop-blur-sm" onClick={() => setSelectedProject(null)} />
            <div className="glass-panel interactive-card relative max-h-[90vh] w-full max-w-4xl overflow-auto rounded-2xl">
              <button onClick={() => setSelectedProject(null)} className="absolute right-4 top-4 text-slate-200 hover:opacity-80">
                <X size={20} />
              </button>

              <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-slate-50">{selectedProject.title}</h3>
                    <p className="mt-1 text-sm text-slate-300">{selectedProject.description}</p>
                  </div>
                  <div className="text-right text-sm text-slate-300/80">
                    <div>{selectedProject.category}</div>
                    <div className="mt-1">{selectedProject.year}</div>
                  </div>
                </div>

                <div className="relative mb-6 aspect-[16/9] overflow-hidden rounded-lg bg-slate-900/20">
                  {selectedProject.preview.videoUrl ? (
                    <video
                      src={selectedProject.preview.videoUrl}
                      className="h-full w-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                      controls
                      poster={selectedProject.preview.image}
                    />
                  ) : (
                    <Image
                      src={selectedProject.preview.image}
                      alt={selectedProject.title}
                      fill
                      sizes="(min-width: 1024px) 900px, 100vw"
                      className="object-cover"
                    />
                  )}
                </div>

                <div className="mb-5 space-y-3">
                  {selectedProject.preview.description.map((d, idx) => (
                    <p key={idx} className="text-sm text-slate-200/90">{d}</p>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  {selectedProject.preview.liveUrl && (
                    <a
                      href={selectedProject.preview.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-md bg-zinc-500/20 px-4 py-2 text-white ring-1 ring-zinc-200/40"
                    >
                      <ExternalLink size={16} /> Live Preview
                    </a>
                  )}
                  {selectedProject.preview.githubUrl && (
                    <a
                      href={selectedProject.preview.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/10 px-4 py-2 text-white"
                    >
                      <Github size={16} /> View Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
