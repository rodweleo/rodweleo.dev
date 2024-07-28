import { Link } from "react-router-dom";
import { ProjectProps } from "@/utils/types";

const ProjectCard = ({ project, index }: { project: ProjectProps, index: number }) => {
  return (
    <div
      className="w-80 p-2.5 flex flex-col gap-2.5 bg-slate-800 rounded-xl h-fit cursor-pointer shadow hover:shadow-lg transition-all duration-300 hover:shadow-slate-900 hover:scale-[1.015]"
      key={index}
    >
      <img
        src={project.imageURL}
        alt={project.title}
        className="object-fill aspect-square w-full rounded-xl h-[200px]"
      />
      <div className="flex flex-col justify-between p-2">
        <h2 className="text-2xl text-white font-bold">{project.title}</h2>
        <p className="text-slate-500 font-bold text-justify">{project.description}</p>
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
