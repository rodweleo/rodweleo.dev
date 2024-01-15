import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section
      id="about"
      className="p-5 w-full h-screen flex flex-col justify-center gap-2.5">
      <div className="max-w-96">
        <h1 className="text-white text-2xl ">
          <p className="text-white/80">
            Hello, My name is <br />{" "}
            <span className="text-blue-500 text-4xl"> Rodwell Leo</span>
          </p>{" "}
        </h1>
        <p className="text-white text-2xl text-white/50">Software Engineer</p>
        <p className="text-white/80 leading-loose">
          With <b className="text-blue-500">3+ years of experience</b> as a
          professional Software Engineer, I have acquired the necessary skills
          to build great software applications from web to mobile applications.
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
