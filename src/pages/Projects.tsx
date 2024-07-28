import ProjectCard from "../components/Projects/project_card";
import { ProjectProps } from "@/utils/types";

const projects: ProjectProps[] = [
  {
    category: "Web App",
    title: "Smart Muscle",
    description:
      "Smart Muscle is a SaaS platform tailored for gym owners, offering seamless management of memberships, class scheduling, attendance tracking, and payment processing. With intuitive features and real-time insights, Smaart Muscle streamlines operations, boosts member engagement, and drives revenue growth for fitness facilities of all sizes.",
    imageURL: "/images/smart-muscle.jpeg",
    link: "https://smartmuscle.vercel.app",
    images: ["/images/smart-muscle.jpeg"],
    technologies: ["ReactJS", "TypeScript"]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen flex flex-col gap-5 p-2.5">
      <h2 className="text-white text-4xl font-bold text-center">Projects</h2>
      <section className="flex w-full justify-center">
        <section className="grid grid-cols-2 gap-10 w-fit">
          {projects.map((project, index: number) => (
            <ProjectCard project={project} index={index} />
          ))}
        </section>
      </section>
    </section>
  );
}
