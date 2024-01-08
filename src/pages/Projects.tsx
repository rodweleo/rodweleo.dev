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
    <section id="projects" className="h-screen flex flex-col">
      <h2 className="text-white">Projects</h2>
      <div className="grid grid-cols-2 place-items-center gap-y-10">
        {projectList}
      </div>
      <div className="flex flex-col items-center gap-4">
        <Link
          to=""
          className="bg-blue-800/40 hover:bg-blue-800 text-white px-5 py-2.5 rounded-md">
          View More
        </Link>
      </div>
    </section>
  );
}
