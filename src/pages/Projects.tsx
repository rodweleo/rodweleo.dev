import { Link } from "react-router-dom";
import ProjectCard from "../components/Projects/project_card";

const projects = [
  {
    category: "Mobile App",
    title: "AfriMed",
    description:
      "This is a platform that would connect buyers and suppliers together and easy transaction betweeen them.",
    imageUrl: "src/assets/images/Mobile-App-developer-3.png",
  },
  {
    category: "Web App",
    title: "Manivas",
    description:
      "This is a web application that would bridge the gap between local and international money transfers.",
    imageUrl: "src/assets/images/web_app_development.png",
  },
  {
    category: "Web App",
    title: "Manivas",
    description:
      "This is a web application that would bridge the gap between local and international money transfers.",
    imageUrl: "src/assets/images/web_app_development.png",
  },
  {
    category: "Web App",
    title: "Manivas",
    description:
      "This is a web application that would bridge the gap between local and international money transfers.",
    imageUrl: "src/assets/images/web_app_development.png",
  },
];

const projectList = projects.map((project) => (
  <ProjectCard props={{ project: project }} />
));

export default function Projects() {
  return (
    <section id="projects" className="h-full flex flex-col justify-center p-24">
      <h2 className="text-white/70">My Best Selected Portfolio</h2>
      <p className="text-white/60">
        The following are the best projects done during my career as a software
        engineer.
      </p>
      <div className="flex flex-col items-center gap-4">
        <div className="grid grid-cols-2 place-content-center h-fit">
          {projectList}
        </div>
        <Link
          to=""
          className="bg-yellow-800/50 hover:bg-yellow-800 text-yellow-600 px-5 py-2.5 rounded-md">
          View More
        </Link>
      </div>
    </section>
  );
}
