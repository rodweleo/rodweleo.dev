import { Link } from "react-router-dom";

export default function About() {
  return (
    <section id="about" className="flex justify-around h-[75vh]">
      <div className="flex flex-col gap-5 w-fit">
        <div>
          <h2 className="text-white/50">I'm</h2>
          <div className="w-fit">
            <h1 className="text-white text-8xl">Rodwell Leo</h1>{" "}
            <div className="bg-yellow-600 w-2/4 h-1" />
          </div>
        </div>
        <p className="w-2/4 text-white/80 text-xl">
          A software engineer who provides services for digital solutions
          through software design and development
        </p>
      </div>

      <div className="w-1/4 flex flex-col gap-2.5">
        <h2 className="text-xl text-white/50">Services</h2>
        <p className="text-white text-xl">
          Let's build quality products in programming and design with my
          services.
        </p>
        <Link to="" className="text-yellow-600">
          Show more <i className="fa-solid fa-arrow-right"></i>
        </Link>
        <ul className="flex p-0 gap-5">
          <li>
            <i className="fa-brands fa-twitter text-yellow-600 bg-yellow-800/20 p-2.5 rounded-full"></i>
          </li>
          <li>
            <i className="fa-brands fa-instagram text-yellow-600 bg-yellow-800/20 p-2.5 rounded-full"></i>
          </li>
          <li>
            <i className="fa-brands fa-pinterest text-yellow-600 bg-yellow-800/20 p-2.5 rounded-full"></i>
          </li>
        </ul>
      </div>
    </section>
  );
}
