export interface Project {
  id: string;
  title: string;
  company: string; // Added for context
  role: string;    // Added for context
  timeline: string; // Added for context
  description: string;
  techStack: string[];
  link?: string;
  github?: string;
  imageUrl: string;
  bullets: string[]; // Detailed metrics/points from resume
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location?: string;
  description: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  period: string;
  score: string;
}

export interface Award {
  id: string;
  title: string;
  description: string;
}