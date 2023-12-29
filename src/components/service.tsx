import { Link } from "react-router-dom";

const Service = ({ props }: any) => {
  return (
    <div className="bg-[#3d29148f] w-1/3 p-2.5 flex flex-col gap-2.5">
      <i
        className={`${props.service.icon} service-icon w-fit text-yellow-600 font-bold bg-yellow-900/40 p-3 rounded-full`}></i>
      <h3 className="text-white/90">{props.service.title}</h3>
      <p className="text-white/70">{props.service.description}</p>
      <Link to="" className="text-yellow-600 hover:text-yellow-800">
        Show More <i className="fa-solid fa-arrow-right"></i>
      </Link>
    </div>
  );
};

export default Service;
