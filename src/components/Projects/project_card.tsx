import { Link } from "react-router-dom";
import { Project } from "../../utils/interfaces";
import { Dispatch } from "react";

const ProjectCard = ({ project, index, onClick }: { project: Project, index: number, onClick: Dispatch<React.SetStateAction<Project | null>> }) => {
  const handleClick = () => {
    const projectModal = document.getElementById("project-modal") as HTMLDialogElement;
    projectModal.classList.remove("hidden")
    onClick(project)
  }
  return (
    <div
      className="p-5 w-72 flex flex-col gap-2.5 bg-slate-800 rounded-xl h-fit cursor-pointer shadow hover:shadow-xl transition-all duration-300 hover:shadow-blue-900 hover:scale-[1.025]"
      key={index}
      onClick={() => handleClick()}
    >
      <img
        src={project.imageURL}
        alt={project.title}
        className="object-fill w-full rounded-xl"
      />
      <div className="flex flex-col justify-between p-2">
        <h2 className="text-2xl text-white font-bold">{project.title}</h2>
        <p className="text-slate-500 font-bold">{project.description}</p>
        <Link
          to={project.link}
          target="_blank"
          className="hidden w-fit bg-blue-500 hover:bg-blue-800 px-5 py-1 rounded-md">
          <i className="fa-solid fa-play text-blue-900"></i>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
