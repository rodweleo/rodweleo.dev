import { BsPlayFill } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  return (
    <section id="projects">
        <h2>Projects</h2>
        <div className="project">
            <img src="project-screenshot.jpg" alt="Project Screenshot"/>
            <div className="project-details">
              <h3>Smart Muscle Fitness Center</h3>
              <p>Project description and your role.</p>
              <p>Technologies used: List of technologies</p>
              <a href="github-link" className="btn-secondary"><FaGithub/></a>
              <a href="live-demo-link" className="btn-primary"><BsPlayFill/></a>
            </div>
        </div>
        <div className="project">
            <img src="project-screenshot.jpg" alt="Project Screenshot"/>
            <div className="project-details">
              <h3>Smart Muscle Fitness Center</h3>
              <p>Project description and your role.</p>
              <p>Technologies used: List of technologies</p>
              
              <a href="github-link" className="btn-secondary"><FaGithub/></a>
              <a href="live-demo-link" className="btn-primary"><BsPlayFill/></a>
            </div>
            
        </div>
      </section>
  );
}
