export function SocialLinks() {
  return (
    <ul className="social-links flex p-0 gap-5">
      <li>
        <a
          href="https://www.linkedin.com/in/rodweleo"
          target="_blank"
          className="social-link-item"
          aria-label="LinkedIn">
          <i className="fa-brands fa-linkedin text-blue-500 bg-blue-800/20 p-2.5 rounded-full cursor-pointer"></i>
        </a>
      </li>
      <li>
        <a
          href="https://github.com/rodweleo"
          target="_blank"
          className="social-link-item"
          aria-label="Github">
          <i className="fa-brands fa-github text-blue-500 bg-blue-800/20 p-2.5 rounded-full cursor-pointer"></i>
        </a>
      </li>
      <li>
        <a
          href="https://www.twitter.com/Onuonga_Leo"
          target="_blank"
          className="social-link-item"
          aria-label="Twitter">
          <i className="fa-brands fa-twitter text-blue-500 bg-blue-800/20 p-2.5 rounded-full cursor-pointer"></i>
        </a>
      </li>
    </ul>
  );
}
