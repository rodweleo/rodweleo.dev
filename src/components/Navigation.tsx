import { useEffect } from "react";

export const NavBar = () => {
  useEffect(() => {
    const navlinks = document.getElementsByClassName("nav-link");
    //set the active nav link
    navlinks[0].classList.add("active");

    for (let i = 0; i < navlinks.length; i++) {
      const navLink = navlinks[i];
      navLink.addEventListener("click", (event) => {
        // Remove "active" class from all links
        for (let j = 0; j < navlinks.length; j++) {
          navlinks[j].classList.remove("active");
        }
        // Add "active" class to the clicked link
        navLink.classList.add("active");
      });
    }
  }, []);

  return (
    <nav>
      <ul className="flex flex-col gap-5 text-white/50 bg-blue-200 w-fit fixed right-0 top-1/3 z-50 bg-opacity-30 rounded-l-xl px-1 py-5">
        <li className="nav-link">
          <a href="#about-leo">About</a>
        </li>
        <li className="nav-link">
          <a href="#services">Services</a>
        </li>
        <li className="nav-link">
          <a href="#portfolio">Portfolio</a>
        </li>
        <li className="nav-link">
          <a href="#projects">Projects</a>
        </li>
        <li className="nav-link">
          <a href="#contact-me">Contact Me</a>
        </li>
      </ul>
    </nav>
  );
};
