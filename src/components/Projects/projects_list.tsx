import ProjectCard from "./project_card";

const ProjectList = ({ projects }: any) => {
  return (
    <section className="flex flex-wrap w-full justify-between gap-5">
      {projects.map((project: any) => (
        <ProjectCard props={{ project: project }} />
      ))}
    </section>
  );
};

export default ProjectList;
