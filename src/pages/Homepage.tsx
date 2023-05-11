import { Link } from "../../node_modules/react-router-dom/dist/index";
import admin from "../assets/images/Profile Picture.jpg";
import project_avatar from "../assets/images/smart-muscle.jpeg";
import { SocialLinks } from "../components/SocialLinks";
import { ContactForm } from "../components/ContactForm";
import { FaGithub } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { FaAndroid } from "react-icons/fa";
import { SiApachetomcat } from "react-icons/si";
export function Homepage() {
  const tech_stack = [
    {
      name: "Java",
      image: <FaJava />,
      url: "https://www.java.com",
      id: 1,
    },
    {
      name: "SQL",
      image: <SiMysql />,
      url: "https://www.mysql.com/",
      id: 2,
    },
    {
      name: "ReactJS",
      image: <FaReact />,
      url: "https://www.react/dev",
      id: 3,
    },
    {
      name: "Android",
      image: <FaAndroid />,
      url: "https://developer.android.com/",
      id: 4,
    },
    {
      name: "Tomcat",
      image: <SiApachetomcat />,
      url: "https://tomcat.apache.org/",
      id: 5,
    },
  ];

  const stack = tech_stack.map((tech_stack_item) => (
    <li key={tech_stack_item.id}>
      <Link to={tech_stack_item.url} className="tech_stack_item">
        {tech_stack_item.image}
      </Link>
    </li>
  ));

  //getting the projects done so far
  const projects = [
    {
      id: 1,
      avatar: project_avatar,
      avatar_size: 200,
      name: "Smart Muscle Fitness Center",
      description:
        "This is a web based application that allows the customers to enroll into a gym. This will be a great marketing strategy that makes the business shine online.",
      languages: [
        {
          language: "Java",
        },
        {
          language: "JavaScript",
        },
        { language: "SQL" },
      ],
      links: {
        live_demo: "https://smartmuscle.vercel.app",
        github: "https://www.github.com/rodweleo/smartmuscle",
      },
    },
  ];

  //get links for different projects

  const project = projects.map((project) => (
    <div className="project_container">
      <img
        className="project_avatar"
        src={project.avatar}
        style={{ width: project.avatar_size }}
        alt={project.name}
      />
      <div className="project_details">
        <h4>{project.name}</h4>
        <p>{project.description}</p>
        <div className="links">
          <Link to={project.links.github} className="link_btn">
            <FaGithub />
          </Link>
          <Link to={project.links.live_demo} className="link_btn">
            Live Demo
          </Link>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <div className="main_container">
        <div className="welcome">
          <h1>Hello, I'm Rodwell Leo.</h1>
          <hr />
          <p>
            I am a Full Stack Developer and have developed a number of
            application from simple profile websites to e-commerce and booking
            platforms.
            <br />
            I'm passionate about cutting-edge, pixel-perfect, beautiful
            interfaces and intuitively implemented UX working collaboratively
            working together with well designed backend to have a reliable and
            efficient application.
          </p>
          <h4>Tech Stack</h4>
          <ul className="techStack">{stack}</ul>
        </div>
        <div>
          <img
            src={admin}
            alt="Rodwell Leo"
            className="main_avatar"
            style={{ width: 300, height: 300 }}
          />
          <SocialLinks />
        </div>
      </div>

      <section className="projects_container">
        <h1>Projects</h1>
        <div className="projects">{project}</div>
      </section>

      <section className="contact">
        <ContactForm />
      </section>
    </>
  );
}
