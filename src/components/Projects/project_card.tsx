const ProjectCard = (project: any, key: number) => {
  return (
    <div
      className="w-72 flex flex-col gap-2.5 bg-gray-800 rounded-md h-fit"
      key={key}>
      <img
        src={project.project.imageUrl}
        alt={project.project.title}
        className="object-fill w-full"
      />
      <div className="flex flex-col justify-between p-2">
        <h2 className="text-2xl text-white">{project.project.title}</h2>
        <p className="text-white">{project.project.description}</p>
        <a
          href={project.project.link}
          target="_blank"
          className="w-fit bg-blue-500 hover:bg-blue-800 px-5 py-1 rounded-md">
          <i className="fa-solid fa-play text-blue-900"></i>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
