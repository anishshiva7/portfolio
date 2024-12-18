import React, { useState } from 'react';
import { X, ExternalLink, Github } from 'lucide-react';

// Define our project type
interface Project {
  title: string;
  year: string;
  category: string;
  description: string;
  tags: string[];
  preview: {
    image: string;
    liveUrl?: string;
    githubUrl?: string;
    description: string[];
  };
}

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: "SLUGTRITION",
      year: "2024",
      category: "HEALTH & WELLNESS",
      description: "AI-POWERED DINING HALL NUTRITION TRACKING",
      tags: ["React", "Python", "Flask", "Firebase", "Node.js"],
      preview: {
        image: "/images/slug.png",
        liveUrl: "https://slugtrition.tech",
        githubUrl: "https://github.com/anishshiva7/slugtrition",
        description: [
          "Developed an innovative solution for UCSC students to track nutrition from dining hall meals",
          "Used HTML, CSS, JavaScript to create a landing page with signup/login authentication",
          "Employed Firebase for storing menu entree details and user data",
          "Implemented Node.js backend service for personalizing daily meal plans based on user profiles"
        ]
      }
    },
    {
      title: "SPDK BRIDGE",
      year: "2023",
      category: "INFRASTRUCTURE",
      description: "OPEN SOURCE STORAGE PERFORMANCE KIT",
      tags: ["Docker", "Linux", "YAML", "API", "C++"],
      preview: {
        image: "/images/spdk.png",
        githubUrl: "https://github.com/anishshiva7/spdk-bridge",
        description: [
          "Contributed to an open source project through the Linux Foundation",
          "Created SPDK bridge APIs for high-performance applications",
          "Implemented solutions for client-server architectures",
          "Utilized Docker and Linux with YAML configuration files for deployment"
        ]
      }
    },
    {
      title: "SERENE",
      year: "2023",
      category: "MENTAL HEALTH",
      description: "PANIC ATTACK RELIEF APPLICATION",
      tags: ["Python", "Flutter", "AI", "UX/UI"],
      preview: {
        image: "/images/serene.png",
        githubUrl: "https://github.com/anishshiva7/serene",
        description: [
          "Built a mental health application focused on relieving onset panic attacks",
          "Developed a chatbot feature using Python for user conversations during stress",
          "Implemented the frontend using Flutter with color psychology principles",
          "Created an intuitive and calming user experience based on psychological research"
        ]
      }
    },
    {
      title: "RATE MY PROFESSOR AI",
      year: "2023",
      category: "EDUCATION",
      description: "AI-POWERED PROFESSOR REVIEW CHATBOT",
      tags: ["Python", "OpenAI", "Next.js", "CSS"],
      preview: {
        image: "/images/rmp.png",
        liveUrl: "https://ai-rate-my-professor-nine.vercel.app/",
        githubUrl: "https://github.com/yashc73080/AI-Rate-My-Professor/tree/main",
        description: [
          "Created a real-time AI chatbot for professor reviews and insights",
          "Developed a Python scraper to collect professor data from Rate My Professor",
          "Integrated OpenAI API for intelligent response generation",
          "Built a modern interface using Next.js and CSS for optimal user experience"
        ]
      }
    }
  ];

  return (
    <div className="pt-32 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl mb-16 loading-glitch">SELECTED_WORKS</h1>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-16">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="transform transition-all duration-1000 opacity-100"
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              <div 
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="aspect-[16/9] bg-white/5 mb-4 group-hover:bg-white/10 transition-all relative overflow-hidden">
                  <img 
                    src={project.preview.image} 
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-75 transition-opacity"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xs tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                      VIEW PROJECT
                    </span>
                  </div>
                </div>
                <h2 className="text-xl mb-2">{project.title}</h2>
                <p className="text-sm opacity-50 mb-4">{project.description}</p>
                <div className="flex gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs border border-white/20 px-2 py-1">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Preview Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div className="max-w-4xl w-full bg-black border border-white/20 relative">
              {/* Close Button */}
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 hover:opacity-50 transition-opacity"
              >
                <X size={24} />
              </button>

              {/* Project Content */}
              <div className="p-8">
                {/* Header */}
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h2 className="text-2xl mb-2">{selectedProject.title}</h2>
                    <p className="text-sm opacity-50">{selectedProject.description}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm opacity-50">{selectedProject.year}</p>
                    <p className="text-sm">{selectedProject.category}</p>
                  </div>
                </div>

                {/* Preview Image */}
                <div className="aspect-[16/9] mb-8 relative overflow-hidden">
                  <img 
                    src={selectedProject.preview.image} 
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Description */}
                <div className="space-y-4 mb-8">
                  {selectedProject.preview.description.map((desc, i) => (
                    <p key={i} className="text-sm opacity-70">
                      {desc}
                    </p>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  {selectedProject.preview.liveUrl && (
                    <a 
                      href={selectedProject.preview.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm hover:opacity-50 transition-opacity"
                    >
                      <ExternalLink size={16} />
                      LIVE PREVIEW
                    </a>
                  )}
                  {selectedProject.preview.githubUrl && (
                    <a 
                      href={selectedProject.preview.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm hover:opacity-50 transition-opacity"
                    >
                      <Github size={16} />
                      VIEW CODE
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}