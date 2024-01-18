const ServiceListItem = (service: any, key: number) => {
  return (
    <div
      className="w-72 flex flex-col bg-gray-800 p-5 rounded-md gap-2.5 leading-loose mt-2.5"
      key={key}>
      <h3 className="text-white text-xl flex gap-2.5 items-center">
        {" "}
        <i
          className={`${service.service.icon} scale-150 w-fit text-blue-500 font-bold `}></i>
        {service.service.title}
      </h3>
      <p className="text-white/50 ">{service.service.description}</p>
    </div>
  );
};

export default ServiceListItem;