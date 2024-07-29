import { ExternalLink } from "lucide-react"
import { Button } from "./ui/button"
import { useProjects } from "@/hooks/useProjects";
import { Badge } from "./ui/badge";

export const NotableProjects = () => {
    const { projects } = useProjects()
    return (
        <section id="projects" className="flex flex-col w-full justify-center items-center min-h-screen space-y-5 p-5">
        <div className="text-center space-y-2.5">
          <h1 className="font-bold text-5xl">Notable Projects</h1>
          <p className="text-slate-500">Rodwell has worked on a variety of projects, showcasing his versatility and problem-solving skills.</p>
        </div>
        <div className="w-fit flex flex-wrap justify-center gap-10">
          {
            projects.map((project, index: number) => (
              <div className="max-w-[400px] h-auto space-y-2 rounded-xl border flex flex-col justify-between" key={index}>
                <img src={project.thumbnail_url} className="w-full rounded-[20px] p-2.5" loading="lazy"/>
                <div className="p-2.5 flex flex-col h-full">
                  <h1 className="font-bold text-2xl">{project.name}</h1>
                  <p className="text-slate-500 text-ellipsis line-clamp-3">{project.description}</p>
                  <ul className="flex flex-wrap gap-1">
                    {
                      project.tech_stack.map((stack, index: number) => (
                        <Badge key={index}>{stack}</Badge>
                      ))
                    }
                  </ul>
                </div>
                <ul className="flex justify-between p-2.5">
                    <li><Button variant="secondary">Github</Button></li>
                    <li><Button className="flex items-center gap-1" onClick={() => window.open(project.live_link, "_blank")}><ExternalLink className="size-4"/> <span>View Project</span>  </Button></li>
                  </ul>
              </div>
            ))
          }
        </div>
      </section>
    )
}