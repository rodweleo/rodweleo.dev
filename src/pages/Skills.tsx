import { FaJava, FaReact ,FaNodeJs } from "react-icons/fa";
import { SiMysql, SiCss3, SiJavascript, SiMongodb, SiGithub } from "react-icons/si";
import { AiFillHtml5, AiFillApi } from "react-icons/ai"
import { GrGraphQl } from "react-icons/gr"

const Skills = () =>{

    const frontend_stack = [
      {
        name: "HTML5",
        image: <AiFillHtml5 />,
        url: "https://www.react/dev"
      },
      {
        name: "JavaScript",
        image: <SiJavascript />,
        url: "https://www.react/dev"
      },
      {
        name: "CSS3",
        image: <SiCss3 />,
        url: "https://www.react/dev"
      },
      {
        name: "ReactJS",
        image: <FaReact />,
        url: "https://www.react/dev"
      },
    ]
    const backend_stack = [
      {
        name: "NodeJS",
        image: <FaNodeJs />,
        url: "https://www.nodejs.org"
      },
      {
        name: "Java",
        image: <FaJava />,
        url: "https://www.java.com"
      },
    ]
    const database_stack = [
      {
        name: "SQL",
        image: <SiMysql />,
        url: "https://www.mysql.com/"
      },
      {
      name: "MONGODB",
      image: <SiMongodb />,
      url: "https://www.mongodb.com/"
      }

    ]
    const version_stack = [
      {
        name: "GITHUB",
        image: <SiGithub />,
        url: "https://www.github.com/"
        }
    ]

    const api_stack = [
      {
        name: "GraphQL",
        image: <GrGraphQl />,
        url: "https://www.graphql.com/"
        }, 
        {
          name: "REST API",
          image: <AiFillApi />,
          url: "https://www.github.com/"
        }
    ];

    return(
          <section id="skills">
            <h2>Skills</h2>
            <div className="container">

            
            <div className="skill">
              <h3>FRONTEND </h3>
              <ul className="stack">
                {frontend_stack.map((skill, index)=>(
                  <li key={index}> {skill.image} {skill.name} </li>
                ))}
              </ul>
            </div>
            <div className="skill">
              <h3>BACKEND</h3>
              <ul className="stack">
              {backend_stack.map((skill, index)=>(
                  <li key={index}> {skill.image} {skill.name}  </li>
                ))}
              </ul>
            </div>
            <div className="skill">
              <h3>DATABASE </h3>
              <ul className="stack">
              {database_stack.map((skill, index)=>(
                  <li key={index}> {skill.image} {skill.name} </li>
                ))}
              </ul>
            </div>
            <div className="skill">
              <h3>APIs</h3>
              <ul className="stack">
              {api_stack.map((skill, index)=>(
                  <li key={index}>{skill.image} {skill.name}  </li>
                ))}
              </ul>
            </div>

            <div className="skill">
              <h3>VERSION CONTROL </h3>
              <ul className="stack">
              {version_stack.map((skill, index)=>(
                  <li key={index}> {skill.image} {skill.name}  </li>
                ))}
              </ul>
            </div>
            </div>
          </section>
    )
}

export default Skills