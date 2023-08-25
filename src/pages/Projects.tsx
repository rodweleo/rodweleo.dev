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
              <p>This a smart gym that serves as a digital hub for gym-related activities, offering users a user-friendly and engaging experience while effectively promoting the gym's offerings.</p>
              <p>Technologies used: ReactJS</p>
              <div className="project-links">
                  <a href="github-link" className="btn-secondary"><FaGithub/></a>
                <a href="https://smartmuscle.vercel.app" className="btn-primary" target="_blank"><BsPlayFill/></a>
              </div>
              
            </div>
        </div>
        <div className="project">
            <img src="project-screenshot.jpg" alt="Project Screenshot"/>
            <div className="project-details">
              <h3>StreetMatt</h3>
              <p>This is an ecommerce website that allows it's customers to shop items at a cheap, pocket-friendly and discounted prize.</p>
              <p>Technologies used: ReactJS, NodeJS</p>
              <div className="project-links">
                <a href="github-link" className="btn-secondary"><FaGithub/></a>
                <a href="https://streetmatt.vercel.app" className="btn-primary" target="_blank"><BsPlayFill/></a>
              </div>
            </div>
            
        </div>
        <div className="project">
            <img src="project-screenshot.jpg" alt="Project Screenshot"/>
            <div className="project-details">
              <h3>Wheels By Mamicha</h3>
              <p>This is a car blogging site that has the latest articles and news on various trending automobiles</p>
              <p>Technologies used: ReactJS</p>
              <div className="project-links">
                <a href="github-link" className="btn-secondary"><FaGithub/></a>
                <a href="https://streetmatt.vercel.app" className="btn-primary" target="_blank"><BsPlayFill/></a>
              </div>
            </div>
            
        </div>
      </section>
  );
}
