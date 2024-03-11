export interface Skill {
  name: string;
  image: string;
}

export interface Project {
  category: string;
  title: string;
  description: string;
  imageURL: string;
  link: string;
  images: string[];
  technologies: string[];
}

export interface Experience {
  title: string;
  company: string;
  company_logo: string;
  duration: {
    from: string;
    to: string;
    present: boolean;
  };
  summary: string;
  accomplishments: string[];
  techstack: string[];
}
