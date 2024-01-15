import { Link } from "react-router-dom";

export function SocialLinks() {
  return (
    <ul className="flex p-0 gap-5">
      <li>
        <Link to={""}>
          <i className="fa-brands fa-linkedin text-white bg-blue-800/20 p-2.5 rounded-full cursor-pointer"></i>
        </Link>
      </li>
      <li>
        <Link to={""}>
          <i className="fa-brands fa-twitter text-white bg-blue-800/20 p-2.5 rounded-full cursor-pointer"></i>
        </Link>
      </li>
      <li>
        <Link to={""}>
          <i className="fa-brands fa-instagram text-white bg-blue-800/20 p-2.5 rounded-full cursor-pointer"></i>
        </Link>
      </li>
    </ul>
  );
}
