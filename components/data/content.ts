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
    title: "SALUTATIONS",
    introduction: [
      "I'm a computer science student at UC Santa Cruz with passion for creating innovative solutions to real world problems.",
      "Specializing in artificial intelligence and machine learning, I have had hands-on experience in developing machine learning models.",
      "I craft innovative solutions as a focused developer, combining technical expertise with collaborative drive to create meaningful impact."
    ],
    location: "SF BAY AREA",
    status: "",
    additionalInfo: [
      "5+ YEARS OF PROFESSIONAL EXPERIENCE",
      "SPECIALIZED IN WEB3 AND BLOCKCHAIN",
      "PASSIONATE ABOUT OPEN SOURCE"
    ]
  };
  
  export const skills = [
    {
      category: "LANGUAGES",
      items: ["PYTHON", "JAVA", "C/C++", "JAVASCRIPT", "SQL", "GOLANG"]
    },
    {
      category: "FRAMEWORKS",
      items: ["REACT", "TENSORFLOW", "PYTORCH", "ANGULAR", "FLASK"]
    },
    {
      category: "CLOUD & DEVOPS",
      items: ["AWS", "KUBERNETES", "DOCKER", "TERRAFORM", "GIT"]
    }
  ];
  
  
  export const experiences: Experience[] = [
    {
      role: "SWE FELLOWSHIP",
      company: "HEADSTARTER AI",
      period: "JULY 2024 - SEPTEMBER 2024",
      description: "AI AND MACHINE LEARNING DEVELOPMENT",
      technologies: ["OpenAI", "Pinecone", "Full Stack"],
      highlights: [
        "WORKED WITH AI/ML CURRICULUM AND OPENAI INTEGRATION",
        "GAINED MENTORSHIP FROM SOFTWARE PROFESSIONALS",
        "DEVELOPED FULL STACK APPLICATIONS"
      ]
    },
    {
      role: "UNDERGRADUATE RESEARCHER",
      company: "UCSC TECH4GOOD LAB",
      period: "JANUARY 2024 - JUNE 2024",
      description: "WIDGET AND COMPONENT DEVELOPMENT",
      technologies: ["TypeScript", "Node.js", "HTML/CSS", "Angular"],
      highlights: [
        "DEVELOPED HIGH-LEVEL WIDGETS USING FIGMA",
        "CREATED RESPONSIVE COMPONENTS FOR CAMPUS ORGANIZATIONS",
        "CONTRIBUTED TO BLOSSOM AND EXPLORE CAREERS WEBSITES"
      ]
    },
    {
        role: "TUTOR FOR DATA STRUCTURES/ALGORITHMS ANALYSIS/ARTIFICIAL INTELLIGENCE/COMPUTER ARCHITECTURE",
        company: "UCSC BASKIN SCHOOL OF ENGINEERING",
        period: "JANUARY 2024 - PRESENT",
        description: "COMPUTER SCIENCE COURSE TUTORING",
        technologies: ["C/C++", "Data Structures", "Algorithms", "AI"],
        highlights: [
          "TUTORED DATA STRUCTURES, ALGORITHMS, COMPUTER ARCHITECTURE, AND AI",
          "ASSISTED 200+ STUDENTS WITH C/C++ CONCEPTS",
          "DEVELOPED EFFECTIVE STUDY STRATEGIES AND GRADED ASSIGNMENTS",
          "PROVIDED FEEDBACK AND SUPPORT FOR CONCEPTUAL UNDERSTANDING"
        ]
      },
  
    {
      role: "COMPUTER VISION RESEARCHER",
      company: "3D FACES LAB",
      period: "MARCH 2023 - JUNE 2023",
      description: "ML MODEL DEVELOPMENT FOR AVATAR GENERATION",
      technologies: ["Python", "Machine Learning", "Computer Vision"],
      highlights: [
        "DEVELOPED ML MODEL FOR PERSONALIZED AVATARS",
        "PUBLISHED RESEARCH PAPER ON ARXIV",
        "ANNOTATED 2000+ FACIAL FEATURE DATASETS"
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
    location: "SANTA CRUZ, CA",
    status: "OPEN TO RELOCATE", 
    email: "anishshiva7@gmail.com",
    social: {
      github: "github.com/anishshiva7",
      linkedin: "linkedin.com/in/anish-shivamurthy",
      twitter: "#"
    }
};