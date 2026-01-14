
export interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  description: string[];
}

export interface Certification {
  name: string;
  date: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Achievement {
  title: string;
  organization: string;
  date: string;
  description: string;
  link?: string;
  tags: string[];
}

export interface Project {
  title: string;
  description: string;
  status: 'Deployed' | 'Pipeline';
  link?: string;
  tags: string[];
  features?: string[];
}
