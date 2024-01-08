import { Link } from "react-router-dom";

const Ability = ({ props }: any) => {
  return (
    <div className="rounded-md flex items-center justify-between gap-5">
      <img
        src={props.ability.image}
        alt=""
        width="200px"
        className="border rounded-md"
      />
      <div className="w-full">
        <h3 className="text-xl text-white">{props.ability.title}</h3>
        <span className="text-white/60">{props.ability.projects} projects</span>
      </div>
      <Link to="">
        <i className="fa-solid fa-arrow-right p-2.5 bg-blue-500 rounded-full text-white cursor-pointer"></i>
      </Link>
    </div>
  );
};

export default Ability;
