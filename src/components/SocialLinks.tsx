import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { HiMail } from "react-icons/hi";


export function SocialLinks() {
  return (
    <div className="social_links">
      <a href="https://www.github.com/rodweleo" className="social_link">
        <FaGithub />
      </a>
      <a href="https://www.linkedin.com/rodweleo" className="social_link">
        <BsLinkedin />
      </a>
      <a href="mailto:leorodwel86@gmail.com" className="social_link">
        <HiMail />
      </a>
    </div>
  );
}
