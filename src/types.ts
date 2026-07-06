export interface Social {
  name: string;
  url: string;
  icon: string; // Lucide icon name
  username: string;
}

export interface SocialsData {
  github: string;
  linkedin: string;
  gfg: string;
  email: string;
  location: string;
  resume: string;
}

export interface SkillItem {
  name: string;
  level?: number; // percentage or general grading
  icon?: string; // Optional icon name
}

export interface SkillCategory {
  category: string;
  skills: SkillItem[];
}

export interface Experience {
  id: string;
  company: string;
  logo?: string; // fallback initials if no image
  role: string;
  duration: string;
  responsibilities: string[];
  skillsUsed: string[];
  technologies: string[];
  achievements?: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  duration: string;
  grade?: string;
  coursework?: string[];
  highlights?: string[];
}

export interface Project {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  techStack: string[];
  features: string[];
  duration: string;
  status: string;
  github: string;
  demo: string;
  image?: string;
  problemStatement?: string;
  architecture?: string;
  challenges?: string;
  learningOutcomes?: string;
  futureScope?: string;
}

export interface Achievement {
  id: string;
  title: string;
  organization: string;
  date: string;
  description: string;
  icon?: string;
}

export interface Certificate {
  id: string;
  title: string;
  organization: string;
  date: string;
  credentialLink?: string;
  image?: string;
}
