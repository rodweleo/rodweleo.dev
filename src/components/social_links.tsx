import { Link } from "react-router-dom";

export function SocialLinks() {
  return (
    <ul className="social-links flex p-0 gap-5">
      <li>
        <Link
          to="https://www.linkedin.com/in/rodweleo"
          target="_blank"
          className="social-link-item">
          <i className="fa-brands fa-linkedin text-blue-500 bg-blue-800/20 p-2.5 rounded-full cursor-pointer"></i>
        </Link>
      </li>
      <li>
        <Link
          to="https://github.com/rodweleo"
          target="_blank"
          className="social-link-item">
          <i className="fa-brands fa-github text-blue-500 bg-blue-800/20 p-2.5 rounded-full cursor-pointer"></i>
        </Link>
      </li>
      <li>
        <Link
          to="https://www.twitter.com/Onuonga_Leo"
          target="_blank"
          className="social-link-item">
          <i className="fa-brands fa-twitter text-blue-500 bg-blue-800/20 p-2.5 rounded-full cursor-pointer"></i>
        </Link>
      </li>
    </ul>
  );
}
