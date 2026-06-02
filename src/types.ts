export interface Skill {
  id: string;
  name: string;
  percentage: number;
  category: 'frontend' | 'backend' | 'other';
  color: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string; // Used to dynamically map Lucide Icons
}

export interface ExperienceHighlight {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
}
