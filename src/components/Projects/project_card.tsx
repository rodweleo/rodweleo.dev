import { Link } from "react-router-dom";

const ProjectCard = ({ props }: any) => {
  return (
    <div className="w-72 flex flex-col gap-2.5 bg-gray-800 rounded-md">
      <img
        src={props.project.imageUrl}
        alt={props.project.title}
        className="w-full object-fill"
      />
      <div className="flex flex-col justify-between h-full p-2">
        <h2 className="text-2xl text-white">{props.project.title}</h2>
        <p className="text-white">{props.project.description}</p>
        <Link
          to="https://smartmuscle.vercel.app"
          target="_blank"
          className="w-fit bg-blue-500 hover:bg-blue-800 px-5 py-1 rounded-md">
          <i className="fa-solid fa-play text-blue-900"></i>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
