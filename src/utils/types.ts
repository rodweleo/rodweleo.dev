export type SkillProps =  {
  name: string;
  image: string;
}

export type ProjectProps = {
  category: string;
  title: string;
  description: string;
  imageURL: string;
  link: string;
  images: string[];
  technologies: string[];
}

export type WorkExperienceProps = {
  title: string;
  company: string;
  achievements: string[];
  started_at: string;
  ended_at: string;
}

export type BlogPostProps = {
  title: string;
  slug: string;
  description: string;
  markdown: string;
  thumbnail: string;
  tags: string[];
  created_at: string;
}

export type ServiceProps = {
  title: string;
  description: string;
}