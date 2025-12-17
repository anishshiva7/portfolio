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
}

export interface About {
  title: string;
  introduction: string[];
  location: string;
  status: string;
  additionalInfo: string[];
}

  
  export const about: About = {
  title: "HI, I'M ANISH",
  introduction: [
    "I’m a Master’s student in Computer Science at UC Irvine with a strong foundation in algorithms, systems, and artificial intelligence.",
    "I’ve built and deployed full-stack and AI-driven systems used by hundreds of users, with experience spanning backend APIs, cloud infrastructure, and machine learning pipelines.",
    "I enjoy working close to the metal when needed, but I’m equally comfortable designing scalable abstractions, improving performance, and shipping production-ready software."
  ],
  location: "IRVINE, CALIFORNIA",
  status: "OPEN TO FULL-TIME SOFTWARE ENGINEERING & AI/ML ROLES",
  additionalInfo: [
    "M.S. COMPUTER SCIENCE @ UC IRVINE (DEC 2026)",
    "B.S. COMPUTER SCIENCE @ UC SANTA CRUZ",
    "EXPERIENCE IN FULL-STACK, SYSTEMS, AND AI/ML",
    "STRONG ALGORITHMS & DATA STRUCTURES BACKGROUND"
  ]
};
  
  export const skills: Skill[] = [
  {
    category: "LANGUAGES & SYSTEMS",
    items: [
      "PYTHON",
      "C",
      "C++",
      "JAVA",
      "JAVASCRIPT",
      "TYPESCRIPT",
      "SQL",
      "BASH",
      "HTML"
    ]
  },
  {
    category: "FRAMEWORKS & LIBRARIES",
    items: [
      "REACT",
      "NEXT.JS",
      "FLASK",
      "ANGULAR",
      "PANDAS",
      "PYTORCH",
      "TENSORFLOW"
    ]
  },
  {
    category: "CLOUD, DEVOPS & TOOLS",
    items: [
      "AWS (EC2, LAMBDA, RDS)",
      "DOCKER",
      "KUBERNETES",
      "LINUX",
      "TERRAFORM",
      "GIT",
      "NODE.JS",
      "FIGMA"
    ]
  },
  {
    category: "CORE COMPETENCIES",
    items: [
      "SOFTWARE DEVELOPMENT LIFECYCLE (SDLC)",
      "API DESIGN & INTEGRATION",
      "OBJECT-ORIENTED DESIGN",
      "DEBUGGING & PERFORMANCE OPTIMIZATION",
      "AI / ML FUNDAMENTALS",
      "SYSTEM DOCUMENTATION"
    ]
  }
];
  
  
  export const experiences: Experience[] = [
    
    {
    role: "INSTRUCTIONAL ASSISTANT",
    company: "UCSC BASKIN SCHOOL OF ENGINEERING",
    period: "JAN 2024 – JUNE 2025",
    description:
      "Instructional support and systems automation for core computer science courses.",
    technologies: [
      "C++",
      "PYTHON",
      "LINUX",
      "BASH",
      "DATA STRUCTURES",
      "ALGORITHMS"
    ],
    highlights: [
      "Mentored 200+ students in C++ and Python, strengthening algorithmic reasoning, debugging skills, and memory management.",
      "Supported upper-division courses including Artificial Intelligence, Computer Architecture, Data Structures, and Algorithm Analysis.",
      "Built automated grading frameworks using Bash and Linux utilities, reducing assignment turnaround time by 30% while improving grading consistency.",
      "Provided targeted feedback on code quality, efficiency, and conceptual understanding in lab and discussion sections."
    ]
  },
  {
  role: "SOFTWARE ENGINEERING FELLOW",
  company: "HEADSTARTER AI",
  period: "JULY 2024 – SEPTEMBER 2024",
  description:
    "Software engineering fellowship focused on building AI-powered, production-ready applications.",
  technologies: [
    "OPENAI API",
    "PINECONE",
    "TYPESCRIPT",
    "NODE.JS",
    "REACT",
    "FULL-STACK DEVELOPMENT"
  ],
  highlights: [
    "Built and deployed full-stack applications integrating large language models using the OpenAI API.",
    "Designed and implemented vector-based retrieval pipelines with Pinecone to enable semantic search and context-aware responses.",
    "Collaborated with experienced software engineers through structured mentorship, code reviews, and system design discussions.",
    "Applied best practices in API design, state management, and deployment to deliver maintainable, production-oriented features."
  ]
},
  {
    role: "UNDERGRADUATE RESEARCHER",
    company: "UCSC TECH4GOOD LAB",
    period: "JAN 2024 – JUNE 2024",
    description:
      "Backend and data infrastructure development for interactive educational platforms.",
    technologies: [
      "TYPESCRIPT",
      "NODE.JS",
      "PYTHON",
      "POSTGRESQL",
      "API DESIGN"
    ],
    highlights: [
      "Designed and deployed TypeScript + Node.js APIs for interactive educational platforms serving 150+ users.",
      "Improved backend performance by ~15% through optimized request handling and data flow.",
      "Automated data integration pipelines using Python and PostgreSQL, enabling faster synchronization of analytics dashboards.",
      "Collaborated with designers and stakeholders to translate requirements into reliable, maintainable backend systems."
    ]
  },
  
    {
    role: "COMPUTER VISION RESEARCHER",
    company: "UCSC 3D FACES LAB",
    period: "MAR 2023 – JUNE 2023",
    description:
      "Computer vision research focused on dataset annotation and deep learning model training.",
    technologies: [
      "PYTHON",
      "PYTORCH",
      "JAVASCRIPT",
      "HTML",
      "COMPUTER VISION"
    ],
    highlights: [
      "Developed a JavaScript/HTML-based annotation system used for large-scale dataset preprocessing.",
      "Contributed to training a PyTorch ResNet152 model, improving facial recognition accuracy by 46%.",
      "Implemented data validation and memory-efficient storage to support a 2,000+ image training dataset.",
      "Worked closely with research leads to ensure dataset quality and experimental reproducibility."
    ]
  }
  ];

  export interface Project {
    title: string;
    year: string;
    category: string;
    description: string;
    tags: string[];
    link?: string;
    imageUrl?: string;
  }
  
  // Add this with your other exports
  export const projects: Project[] = [
    {
    title: "MINECRAFT VOICE AGENT",
    year: "2025",
    category: "AI / SYSTEMS",
    description:
      "Voice-controlled intelligent agent enabling natural language automation inside a live Minecraft environment.",
    tags: ["PYTHON", "WHISPER", "LLM", "OLLAMA", "AI PLANNING"],
    },
    {
      title: "SLUGTRITION",
      year: "2024",
      category: "FULL STACK",
      description: "UCSC DINING HALL MEAL PLANNER",
      tags: ["HTML", "CSS", "JavaScript", "Firebase", "Node.js"]
    },
    {
      title: "SPDK BRIDGE",
      year: "2023",
      category: "INFRASTRUCTURE",
      description: "OPEN SOURCE STORAGE PERFORMANCE KIT",
      tags: ["Docker", "Linux", "YAML", "API"]
    },
    {
      title: "SERENE",
      year: "2023",
      category: "MOBILE",
      description: "MENTAL HEALTH APP WITH AI CHAT",
      tags: ["Python", "Flutter", "OpenAI"]
    },
    {
      title: "RATE MY PROFESSOR AI",
      year: "2023",
      category: "AI/ML",
      description: "AI CHATBOT FOR PROFESSOR REVIEWS",
      tags: ["Python", "OpenAI", "Next.js", "CSS"]
    }
  ];
  
  export const contactInfo = {
    name: "ANISH SHIVAMURTHY",
    location: "IRVINE, CALIFORNIA",
    status: "OPEN TO RELOCATION",
    email: "ashivamu@uci.edu",
    social: {
      github: "https://github.com/anishshiva7",
      linkedin: "https://linkedin.com/in/anish-shivamurthy",
      twitter: ""
  }
};