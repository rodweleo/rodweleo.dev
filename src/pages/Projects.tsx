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
    images: ["/images/smart-muscle.jpeg"],
    technologies: []
  }
];

export default function Projects() {
  const [project, setSelectedProject] = useState<Project | null>(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const handleClose = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault()
    const projectModal = document.getElementById("project-modal") as HTMLDialogElement;
    if (projectModal) {
      projectModal.classList.add("hidden");
      setSelectedProject(null)
    }
  }


  const previousPicture = () => {
    if (selectedImage > 0) {
      setSelectedImage(selectedImage - 1)
    }
  }

  const nextPicture = () => {
    if (selectedImage < project?.images.length! - 1) {
      setSelectedImage(selectedImage + 1)
    }
  }

  return (
    <section id="projects" className="min-h-screen flex flex-col items-center gap-5 p-2.5">
      <h2 className="text-white text-3xl font-bold">Projects</h2>
      <p className="font-bold text-slate-500 text-lg">Below are my latest projects:</p>
      <section className="flex flex-wrap gap-10 justify-center">
        {projects.map((project, index: number) => (
          <ProjectCard project={project} index={index} onClick={setSelectedProject} />
        ))}
      </section>

      <ProjectModal>
        <section className="max-sm:w-[300px] md:w-2/4 h-fit overflow-y-auto bg-slate-800 rounded-md relative flex max-lg:flex-wrap items-center transition-all duration-1000">
          <button className="absolute top-0 right-0 m-2.5 cursor-pointer z-50 p-2 bg-transparent" onClick={(e) => handleClose(e)}><i className="fa-solid fa-close text-slate-400 " ></i></button>
          <div className="flex items-center relative w-full h-full">
            <button onClick={() => previousPicture()}><i className="fa-solid fa-angle-left absolute left-2 z-50 bg-slate-400/50 rounded-full p-2.5 cursor-pointer hover:bg-slate-500/50 hover:translate-x-[-4px]"></i></button>
            <div className="w-full relative">
              <img src={project?.images[selectedImage]} alt={project?.title} className="rounded-t-md w-full h-[200px] object-fill aspect-video" />
              <p className="absolute bottom-0 right-0 bg-slate-500 px-2 py-[0.5px] rounded-l-md"><span className="text-xl text-slate-300 font-bold">{selectedImage + 1}</span> / <span>{project?.images.length}</span> </p>
            </div>
            <button onClick={() => nextPicture()}><i className="fa-solid fa-angle-right absolute right-2 bg-slate-400/50 rounded-full p-2.5 cursor-pointer hover:bg-slate-500/50 hover:translate-x-1"></i></button>
          </div>
          <div className="p-5 w-full flex flex-col gap-4 h-fit">
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
