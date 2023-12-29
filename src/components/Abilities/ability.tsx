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
        <h3 className="text-xl text-white/90">{props.ability.title}</h3>
        <span className="text-white/60">{props.ability.projects} projects</span>
      </div>
      <i className="fa-solid fa-arrow-right p-2.5 bg-yellow-600 rounded-full"></i>
    </div>
  );
};

export default Ability;
