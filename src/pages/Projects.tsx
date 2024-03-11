import { useState } from "react";
import { ProjectModal } from "../components/Projects/modals/ProjectModal";
import ProjectCard from "../components/Projects/project_card";
import { Project } from "../utils/interfaces";

const projects: Project[] = [
  {
    category: "Web App",
    title: "Smart Muscle",
    description:
      "This is a web application that helps in marketing and business management for a gym centre.",
    imageURL: "/images/smart-muscle.jpeg",
    link: "https://smartmuscle.vercel.app",
    images: []
  },
];

export default function Projects() {
  const [project, setSelectedProject] = useState<Project | null>(null);

  const handleClose = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault()
    const projectModal = document.getElementById("project-modal") as HTMLDialogElement;
    if (projectModal) {
      projectModal.classList.add("hidden");
      setSelectedProject(null)
    }
  }

  return (
    <section id="projects" className="h-auto flex flex-col gap-5 p-5">
      <h2 className="text-white text-5xl font-bold">Projects</h2>
      <section className="flex flex-wrap w-full justify-between gap-5">
        {projects.map((project: any, index: number) => (
          <ProjectCard project={project} index={index} onClick={setSelectedProject} />
        ))}
      </section>

      <ProjectModal>
        <section className="w-2/4 h-fit bg-slate-800 rounded-md relative flex items-center justi">
          <i className="fa-solid fa-close text-slate-400 absolute top-0 right-0 m-2.5 cursor-pointer z-50 p-2 rounded-full hover:bg-slate-700" onClick={(e) => handleClose(e)}></i>
          <div className="flex items-center relative w-full h-full">
            <i className="fa-solid fa-angle-left absolute left-2 z-50 bg-slate-400/50 rounded-full p-2.5 cursor-pointer"></i>
            <img src={project?.imageURL} alt={project?.title} className="w-full h-28 object-fill aspect-video" />
            <i className="fa-solid fa-angle-right absolute right-2 bg-slate-400/50 rounded-full p-2.5 cursor-pointer"></i>
          </div>
          <div className="p-5 max-w-72 flex flex-col gap-4 h-fit">
            <h1 className="text-slate-400 text-[30px] font-bold">
              {project?.title}
            </h1>
            <a href={project?.link} target="_blank" rel="noopener noreferrer" className="w-fit bg-slate-500 p-2.5 rounded-md text-white"><i className="fa-solid fa-up-right-from-square"></i> Go to Project Site</a>
            <p className="text-slate-500 font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione debitis iste, modi natus quod explicabo quisquam labore perferendis quibusdam, minus assumenda ipsa, error nemo! Commodi tenetur possimus eos quae consectetur!</p>
            <h2 className="text-white font-bold">Technologies</h2>
            <ul className="text-slate-500 font-bold">
              <li>ReactJS</li>
            </ul>
          </div>
        </section>
      </ProjectModal>
    </section>
  );
}
