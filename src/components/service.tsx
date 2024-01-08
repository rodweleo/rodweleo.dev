const Service = ({ props }: any) => {
  return (
    <div className="w-72 flex flex-col gap-2.5 bg-gray-800 p-5 rounded-md gap-2.5 leading-loose">
      <h3 className="text-white text-xl flex gap-2.5 items-center">
        {" "}
        <i
          className={`${props.service.icon} scale-150 w-fit text-blue-500 font-bold `}></i>
        {props.service.title}
      </h3>
      <p className="text-white/50 ">{props.service.description}</p>
    </div>
  );
};

export default Service;
