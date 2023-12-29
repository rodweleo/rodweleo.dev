import { Link } from "react-router-dom";

const ProjectCard = ({ props }: any) => {
  return (
    <div className="w-2/4 flex flex-col gap-2.5">
      <h3 className="text-yellow-600">{props.project.category}</h3>
      <h2 className="text-2xl text-white">{props.project.title}</h2>
      <img
        src={props.project.imageUrl}
        alt={props.project.title}
        className="w-60 rounded-md"
      />
      <p className="text-white/80">{props.project.description}</p>
      <Link
        to="https://smartmuscle.vercel.app"
        target="_blank"
        className="w-fit bg-yellow-800/50 hover:bg-yellow-800 px-5 py-2 rounded-md">
        <i className="fa-solid fa-play text-yellow-600"></i>
      </Link>
    </div>
  );
};

export default ProjectCard;
