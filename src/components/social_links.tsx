import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import { Link } from "react-router-dom";

export function SocialLinks() {
  return (
    <ul className="social_links">
      <Link to="https://www.github.com/rodweleo" className="social_link">
        <FaGithub />
      </Link>
      <Link to="https://www.linkedin.com/rodweleo" className="social_link">
        <BsLinkedin />
      </Link>
      <Link to="mailto:leorodwel86@gmail.com" className="social_link">
        <HiMail />
      </Link>
    </ul>
  );
}
