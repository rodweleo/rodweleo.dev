import ProjectCard from "../components/Projects/project_card";

const projects = [
  {
    category: "Mobile App",
    title: "AfriMed",
    description:
      "This is a platform that would connect buyers and suppliers of medical equipment and products together and easy transaction betweeen them.",
    imageUrl: "/images/Mobile-App-developer-3.png",
    link: "https://www.afrimed.com",
  },
  {
    category: "Web App",
    title: "Manivas",
    description:
      "This is a web application that would bridge the gap between local and international money transfers.",
    imageUrl: "/images/web_app_development.png",
    link: "https://www.manivas.com",
  },
  {
    category: "Web App",
    title: "LinkApp",
    description:
      "This is a web application that connects people around the world.",
    imageUrl: "/images/web_app_development.png",
    link: "https://linkapp.vercel.app",
  },
  {
    category: "Web App",
    title: "Smart Muscle",
    description:
      "This is a web application that helps in marketing and business management for a gym centre.",
    imageUrl: "/images/smart-muscle.jpeg",
    link: "https://smartmuscle.vercel.app",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="h-auto flex flex-col gap-5 p-5">
      <h2 className="text-white text-5xl">Projects</h2>
      <section className="flex flex-wrap w-full justify-between gap-5">
        {projects.map((project: any, index: number) => (
          <ProjectCard project={project} key={index} />
        ))}
      </section>

      <div className="flex flex-col items-center gap-4">
        <a
          href=""
          className="bg-blue-800/40 hover:bg-blue-800 text-white px-5 py-2.5 rounded-md">
          View More
        </a>
      </div>
    </section>
  );
}
