const Testimonial = ({ props }: any) => {
  return (
    <div className=" w-96 bg-[#3d29148f] border border-yellow-800/40 rounded-md hover:overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out">
      <img
        src={props.testimonial.avatar}
        alt={props.testimonial.name}
        className="w-full transform transition-transform duration-300 ease-in-out hover:scale-105"
      />

      <div className="p-2 w-full">
        <div>
          <i className="fa-solid fa-quote-left text-yellow-600 scale-150"></i>
          <br />
          <p className="text-white/80 text-lg p-2.5">
            {props.testimonial.testimonial}
          </p>
          <i className="fa-solid fa-quote-right text-yellow-600 scale-150"></i>
        </div>
      </div>
      <div className="p-2">
        <h3 className="text-white text-xl">{props.testimonial.name}</h3>
        <p className="text-white/80 text-sm">
          {props.testimonial.position} at {props.testimonial.company}
        </p>
      </div>
    </div>
  );
};

export default Testimonial;
