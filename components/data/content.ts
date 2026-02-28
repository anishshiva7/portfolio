export interface Skill {
  category: string;
  items: string[];
}

export interface Experience {
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

export interface About {
  title: string;
  subtitle?: string;
  introduction: string[];
  location: string;
  status: string;
  additionalInfo: string[];
}

export interface ProjectPreview {
  image: string;
  videoUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
  description: string[];
}

export interface Project {
  title: string;
  year: string;
  category: string;
  description: string;
  tags: string[];
  preview: ProjectPreview;
}

export interface ContactInfo {
  name: string;
  location: string;
  status: string;
  email: string;
  social: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
}

export const about: About = {
  title: 'ANISH SHIVAMURTHY',
  subtitle: 'I build practical software systems with a strong mix of engineering depth and product focus.',
  introduction: [
    'Hi, I’m Anish. I’m currently pursuing my Master of Computer Science at UC Irvine, and I’m genuinely excited about building software that is useful, reliable, and thoughtfully engineered.',
    'I completed my Bachelor of Science in Computer Science at UC Santa Cruz, where I built a strong foundation in algorithms, systems, and machine learning while gaining hands-on experience through research and instructional roles.',
    'Over the past few years, I’ve worked on backend APIs, data pipelines, and AI-driven applications, including educational platforms and real-time voice systems.',
    'What motivates me most is software engineering and AI: designing clean systems, solving meaningful problems, and building technology that creates real impact for users and teams.'
  ],
  location: 'Irvine, California',
  status: 'Open to software engineering and AI/ML roles',
  additionalInfo: [
    'M.S. Computer Science, UC Irvine (Expected Dec 2026)',
    'B.S. Computer Science, UC Santa Cruz',
    'Coursework: Algorithms, Artificial Intelligence, Machine Learning, Data Management',
    'Coursework: Computer Networks, Computer Architecture, Language Processing'
  ]
};

export const skills: Skill[] = [
  {
    category: 'Languages',
    items: [
      'Python',
      'Java',
      'JavaScript',
      'C',
      'C++',
      'TypeScript',
      'Golang',
      'HTML/CSS',
      'Scala',
      'Assembly'
    ]
  },
  {
    category: 'Frameworks & Libraries',
    items: ['Flask', 'Angular', 'NumPy', 'PyTorch', 'React', 'Pandas', 'Node.js', 'Next.js']
  },
  {
    category: 'Tools & Platforms',
    items: [
      'Firebase',
      'AWS',
      'Docker',
      'Linux',
      'Git',
      'Figma',
      'SDLC',
      'IT Automation',
      'RESTful APIs',
      'API Integration',
      'Object-Oriented Design'
    ]
  }
];

export const experiences: Experience[] = [
  {
    role: 'INSTRUCTIONAL ASSISTANT',
    company: 'UCSC BASKIN SCHOOL OF ENGINEERING',
    period: 'JAN 2024 – JUNE 2025',
    description: 'Supported core CS courses while building automation to improve grading reliability and turnaround.',
    technologies: ['C++', 'Java', 'Python', 'Linux', 'Bash'],
    highlights: [
      'Mentored 200+ students across Data Structures, AI, and Computer Architecture with a strong focus on debugging and problem-solving.',
      'Maintained assignment pipelines and grading infrastructure for large course enrollments.',
      'Built Linux/Bash-based auto-grading workflows, including hidden tests and timeout checks, and helped reduce grading turnaround by about 30%.',
      'Standardized scoring logic to keep evaluations consistent across submissions and sections.'
    ]
  },
  {
    role: 'UNDERGRADUATE RESEARCHER',
    company: 'TECH4GOOD LAB, UCSC',
    period: 'JAN 2024 – JUNE 2024',
    description: 'Built backend services and data pipelines for onboarding and team assignment workflows.',
    technologies: ['TypeScript', 'Node.js', 'REST APIs', 'PostgreSQL', 'Python'],
    highlights: [
      'Implemented TypeScript/Node.js APIs for onboarding tools and assignment workflows.',
      'Designed endpoint and payload contracts to make internal feature integration smoother across the team.',
      'Built ETL pipelines backed by PostgreSQL staging tables for data validation and cleanup.',
      'Added schema enforcement and pre-insert checks that reduced recurring dashboard data issues.'
    ]
  },
  {
    role: 'COMPUTER VISION RESEARCHER',
    company: '3D FACES LAB, UCSC',
    period: 'MAR 2023 – JUNE 2023',
    description: 'Contributed to facial recognition research through data tooling, model support, and publication work.',
    publication: {
      label: 'Publication',
      url: 'https://arxiv.org/abs/2308.12642'
    },
    technologies: ['JavaScript', 'Python', 'PyTorch'],
    highlights: [
      'Built a browser-based annotation interface and structured input flow for facial attribute labeling.',
      'Added validation constraints and a cleaner processing workflow to reduce human labeling variance in a 2,000+ image dataset.',
      'Helped improve a ResNet152 pipeline and contributed to a measured 46% model performance gain.',
      'Supported research write-up and publication for face-creation methodology.'
    ]
  }
];

export const projects: Project[] = [
  {
    title: 'Texera',
    year: '2026',
    category: 'AI/ML Engineering',
    description: 'Open-source app for building and sharing collaborative data science and AI workflows.',
    tags: ['Java', 'Spark', 'Scala', 'Visualization', 'TypeScript'],
    preview: {
      image: '/images/texera-peacock.svg',
      liveUrl: 'https://texera.io/',
      description: [
        'Architected and implemented full-stack workflow features for external dataset ingestion (Hugging Face, Kaggle).',
        'Built orchestration logic for long-running execution jobs and asynchronous progress updates.',
        'Designed and deployed custom scientific visualization panels with backend Scala integration.',
        'Improved workflow usability by refining chart operators and data interaction flows.'
      ]
    }
  },
  {
    title: 'Serene',
    year: '2022',
    category: 'AI Mental Health',
    description: 'AI-powered mental health support chatbot built for CruzHacks 2022.',
    tags: ['Python', 'React', 'Firebase', 'PyTorch', 'Tkinter', 'NLP'],
    preview: {
      image: '/images/serene.png',
      githubUrl: 'https://github.com/anishshiva7/serene',
      description: [
        'Built for CruzHacks 2022 as an AI mental health support chatbot.',
        'Integrated machine learning and NLP techniques to improve response relevance.',
        'Implemented keyword-aware response handling for better user support flows.',
        'Combined Python-based AI workflows with a practical app interface.'
      ]
    }
  },
  {
    title: 'Minecraft Voice Agent',
    year: '2025',
    category: 'Voice + AI Systems',
    description: 'Voice-controlled automation system for natural language actions in Minecraft.',
    tags: ['Python', 'Whisper', 'Ollama', 'MCP', 'Mineflayer'],
    preview: {
      image: '/images/minecraft-thumb.jpg',
      videoUrl: '/videos/minecraft-preview.mp4',
      githubUrl: 'https://github.com/anishshiva7/Minecraft-voice-agent',
      description: [
        'Built a fully offline speech-to-action stack using Whisper, Ollama, and Mineflayer.',
        'Implemented local natural language intent parsing and command routing for in-game actions.',
        'Added speaker-aware voice identity matching with OpenAI embeddings for personalized controls.',
        'Optimized command latency by keeping inference and orchestration local instead of cloud-backed.'
      ]
    }
  },
  {
    title: 'AI Rate My Professors Assistant',
    year: '2023',
    category: 'AI + Education',
    description: 'AI assistant for exploring professor feedback and getting quick course insights.',
    tags: [
      'Pinecone',
      'Firebase',
      'Retrieval-Augmented Generation (RAG)',
      'React.js',
      'OpenAI API',
      'Web Scraping',
      'Next.js',
      'Vercel'
    ],
    preview: {
      image: '/images/rmp.png',
      liveUrl: 'https://ai-rate-my-professor-nine.vercel.app/',
      githubUrl: 'https://github.com/yashc73080/AI-Rate-My-Professor',
      description: [
        'Built an AI-powered assistant to help students search and summarize professor reviews.',
        'Integrated language-model responses with retrieved review context for better relevance.',
        'Designed a simple interface for asking natural language questions about instructors.',
        'Focused on fast retrieval and clear answers for practical course-planning decisions.'
      ]
    }
  }
];

export const contactInfo: ContactInfo = {
  name: 'ANISH SHIVAMURTHY',
  location: 'Irvine, California 92617',
  status: 'Open to relocation',
  email: 'ashivamu@uci.edu',
  social: {
    github: 'https://github.com/anishshivamurthy',
    linkedin: 'https://linkedin.com/in/anish-shivamurthy',
    twitter: ''
  }
};
