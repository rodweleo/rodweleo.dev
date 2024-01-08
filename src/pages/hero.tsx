import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section
      id="about"
      className="w-full h-screen text-center flex flex-col justify-center items-center gap-5">
      <h1 className="text-white text-5xl">
        Hello, My name is <br />
        <span className="text-blue-500 text-9xl"> Rodwell Leo</span>
      </h1>
      <p className="text-white text-2xl text-white/50">Software Engineer</p>

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
    </section>
  );
}
