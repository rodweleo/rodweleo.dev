import { Link } from "react-router-dom";

export default function About() {
  return (
    <section
      id="about"
      className="flex flex-wrap justify-around h-screen items-center">
      <div className="flex flex-col gap-5 w-fit">
        <div>
          <h2 className="text-white/50">I'm</h2>
          <div className="w-fit">
            <h1 className="text-white text-8xl">Rodwell Leo</h1>{" "}
            <div className="bg-blue-500 w-2/4 h-1" />
          </div>
        </div>
        <p className="w-auto text-white/80 text-xl">
          A software engineer who provides services for digital solutions
          through software design and development. Let's build quality products
          in programming and design with my services.
        </p>
        <ul className="flex p-0 gap-5">
          <li>
            <Link to={""}>
              <i className="fa-brands fa-linkedin text-blue-500 bg-blue-800/20 p-2.5 rounded-full cursor-pointer"></i>
            </Link>
          </li>
          <li>
            <Link to={""}>
              <i className="fa-brands fa-twitter text-blue-500 bg-blue-800/20 p-2.5 rounded-full cursor-pointer"></i>
            </Link>
          </li>
          <li>
            <Link to={""}>
              <i className="fa-brands fa-instagram text-blue-500 bg-blue-800/20 p-2.5 rounded-full cursor-pointer"></i>
            </Link>
          </li>
          <li>
            <Link to={""}>
              <i className="fa-brands fa-pinterest text-blue-500 bg-blue-800/20 p-2.5 rounded-full cursor-pointer"></i>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
