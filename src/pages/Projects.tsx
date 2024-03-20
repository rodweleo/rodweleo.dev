import { useState } from "react";
import { ProjectModal } from "../components/Projects/modals/ProjectModal";
import ProjectCard from "../components/Projects/project_card";
import { Project } from "../utils/interfaces";

const projects: Project[] = [
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
    <section id="projects" className="min-h-screen flex flex-col gap-5 p-2.5">
      <h2 className="text-white text-4xl font-bold text-center">Projects</h2>
      <section className="flex w-full justify-center">
        <section className="grid grid-cols-2 gap-10">
          {projects.map((project, index: number) => (
            <ProjectCard project={project} index={index} onClick={setSelectedProject} />
          ))}
        </section>
      </section>

      <ProjectModal>
        <section className="max-sm:w-[300px] md:w-2/4 h-fit overflow-y-auto bg-slate-800 rounded-md relative flex max-lg:flex-wrap items-center transition-all duration-1000">
          <button className="absolute top-0 right-0 m-2.5 cursor-pointer z-50 p-2 bg-transparent" onClick={(e) => handleClose(e)}><i className="fa-solid fa-close text-slate-400 " ></i></button>
          <div className="flex items-center relative w-full h-full">
            <button onClick={() => previousPicture()}><i className="fa-solid fa-angle-left absolute left-2 z-50 bg-slate-400/50 rounded-full p-2.5 cursor-pointer hover:bg-slate-500/50 hover:translate-x-[-4px]"></i></button>
            <div className="w-full relative">
              <img src={project?.images[selectedImage]} alt={project?.title} className="rounded-t-md w-full h-full object-fill aspect-video" />
              <p className="absolute bottom-0 right-0 bg-slate-500 px-2 py-[0.5px] rounded-l-md"><span className="text-xl text-slate-300 font-bold">{selectedImage + 1}</span> / <span>{project?.images.length}</span> </p>
            </div>
            <button onClick={() => nextPicture()}><i className="fa-solid fa-angle-right absolute right-2 bg-slate-400/50 rounded-full p-2.5 cursor-pointer hover:bg-slate-500/50 hover:translate-x-1"></i></button>
          </div>
          <div className="p-2.5 w-full flex flex-col gap-4 h-fit">
            <h1 className="text-white text-[30px] font-bold">
              {project?.title}
            </h1>
            <a href={project?.link} target="_blank" rel="noopener noreferrer" className="w-fit bg-slate-500 p-2.5 rounded-md text-white"><i className="fa-solid fa-up-right-from-square"></i> Go to Project Site</a>
            <p className="text-slate-500 font-bold text-justify">{project?.description}</p>
            <div>
              <h2 className="text-white font-bold">Technologies Utilized:</h2>
              <ul className="text-slate-400 font-bold space-y-2 list-decimal ml-4">
                {project?.technologies.map((technology, index: number) => (
                  <li key={index}>{technology}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </ProjectModal>
    </section>
  );
}
