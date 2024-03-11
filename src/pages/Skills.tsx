import { SkillContainer } from "../components/Skills/container/SkillContainer";

const Skills = () => {

  const frontend_stack = [

    {
      name: "HTML5",
      image: "images/skills_images/icons8-html-480.png",
      url: "https://www.react/dev"
    },
    {
      name: "JavaScript",
      image: "images/skills_images/icons8-javascript-240.png",
      url: "https://www.react/dev"
    },
    {
      name: "TypeScript",
      image: "images/skills_images/icons8-typescript-480.png",
      url: "https://www.typescriptlang.org/"
    },
    {
      name: "CSS3",
      image: "images/skills_images/icons8-css-480.png",
      url: "https://www.react/dev"
    },


  ]
  const backend_stack = [
    {
      name: "NodeJS",
      image: "images/skills_images/icons8-nodejs-480.png",
      url: "https://www.nodejs.org"
    }
  ]
  const database_stack = [
    {
      name: "MySQL",
      image: "images/skills_images/icons8-mysql-500.png",
      url: "https://www.mysql.com/"
    },
    {
      name: "MongoDB",
      image: "images/skills_images/icons8-mongodb-96.png",
      url: "https://www.mongodb.com/"
    },
    {
      name: "Firebase",
      image: "images/skills_images/icons8-google-firebase-console-480.png",
      url: "https://www.mongodb.com/"
    }

  ]

  const framework_stack = [
    {
      name: "Flutter",
      image: "images/skills_images/icons8-flutter-480.png",
      url: "https://www.react/dev"
    },
    {
      name: "ReactJS",
      image: "images/skills_images/icons8-react-native-480.png",
      url: "https://www.react/dev"
    },

  ]
  const devops_stack = [
    {
      name: "Git",
      image: "images/skills_images/icons8-git-480.png",
      url: "https://www.github.com/"
    },
    {
      name: "Docker",
      image: "images/skills_images/icons8-docker-240.png",
      url: "https://www.github.com/"
    }
  ]

  const api_stack = [
    {
      name: "REST API",
      image: "images/skills_images/icons8-client-server-66.png",
      url: "https://www.github.com/"
    }
  ];

  return (
    <section id="skills" className="text-center space-y-4">
      <h2 className="font-bold text-slate-200">Skills</h2>
      <p className="font-bold text-xl text-slate-400">The technologies and tools I use:</p>
      <div className="flex flex-wrap w-full gap-10 justify-center">
        <SkillContainer skill_list={frontend_stack} header="Frontend" />
        <SkillContainer skill_list={backend_stack} header="Backend" />
        <SkillContainer skill_list={framework_stack} header="Frameworks " />
        <SkillContainer skill_list={database_stack} header="Databases" />
        <SkillContainer skill_list={api_stack} header="APIs" />
        <SkillContainer skill_list={devops_stack} header="DevOps Tools" />
      </div>
    </section>
  )
}

export default Skills