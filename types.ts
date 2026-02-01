
export interface Experience {
  role: string;
  company: string;
  duration: string;
  location?: string;
  bullets: string[];
  productFocus?: {
    title: string;
    bullets: string[];
  }[];
}

export interface Project {
  title: string;
  description: string;
  outcome: string;
  category: 'QA' | 'Product';
}

export interface Recommendation {
  quote: string;
  name: string;
  role: string;
  company: string;
  linkedInUrl?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface LearningItem {
  title: string;
  issuer: string;
  year: string;
}
