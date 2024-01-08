const Service = ({ props }: any) => {
  return (
    <div className="bg-blue-700 w-auto p-2.5 rounded-md flex flex-col gap-2.5">
      <i
        className={`${props.service.icon} service-icon w-fit text-blue-500 font-bold bg-blue-900/40 p-3 rounded-full`}></i>
      <h3 className="text-white">{props.service.title}</h3>
    </div>
  );
};

export default Service;
