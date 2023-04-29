import { Link } from "../../node_modules/react-router-dom/dist/index";
import admin from "../assets/images/Profile Picture.jpg";
import project_avatar from "../assets/images/smart-muscle.jpeg";
import { SocialLinks } from "../SocialLinks";
import { ContactForm } from "../ContactForm";

export function Homepage() {
  const tech_stack = [
    { name: "Java", url: "https://www.oracle.com/ke/java/", id: 1 },
    { name: "SQL", url: "https://www.mysql.com/", id: 2 },
    { name: "ReactJS", url: "https://www.react/dev", id: 3 },
    { name: "Android", url: "https://developer.android.com/", id: 4 },
    { name: "Tomcat", url: "https://tomcat.apache.org/", id: 5 },
  ];

  const stack = tech_stack.map((tech_stack_item) => (
    <li key={tech_stack_item.id}>
      <Link to={tech_stack_item.url} style={{ color: "blue" }}>
        {tech_stack_item.name}
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
        "This is a web based application that allows the customers to enroll into a gym",
      languages: [
        {
          language: "Java",
        },
        {
          language: "JavaScript",
        },
        { language: "SQL" },
      ],
      links: [
        {
          live_demo: "http://www.smartmuscle.com",
          github: "smartmuscle",
        },
      ],
    },
    {
      id: 2,
      avatar: project_avatar,
      avatar_size: 200,
      name: "Smart Muscle Fitness Center",
      description:
        "This is a web based application that allows the customers to enroll into a gym",
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
        live_demo: "h ttp://www.smartmuscle.com",
        github: "smartmuscle",
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
