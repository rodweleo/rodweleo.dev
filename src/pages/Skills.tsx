import { FaJava, FaReact, FaAndroid } from "react-icons/fa";
import { SiMysql, SiApachetomcat } from "react-icons/si";

const Skills = () =>{
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
          <a href={tech_stack_item.url} className="tech_stack_item">
            {tech_stack_item.image}
          </a>
        </li>
      ));
    return(
          <section id="skills">
            <h2>Tech Stack</h2>
            <ul className="techStack">{stack}</ul>
          </section>
    )
}

export default Skills