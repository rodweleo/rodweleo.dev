import { useWorkExperiences } from "@/hooks/useWorkExperiences"
import moment from "moment"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./ui/card"

export const WorkExperience = () => {
    const { workExperiences } = useWorkExperiences()
    return (
        <section
      id="work-experience"
      className="w-full p-5 min-h-screen flex flex-col justify-center items-center space-y-2.5">
        <div className="flex flex-col space-y-2.5 text-center">
          <h1 className="w-full font-bold text-5xl">Work Experience</h1>
          <p className="leading-8 text-justify text-lg max-w-[500px] text-slate-500"></p>        
        </div>
        <div className="flex justify-center gap-10 flex-wrap">
          {
            workExperiences.map((experience, index: number) => (
              <Card key={index} className="max-w-[500px]">
                <CardHeader>
                  <CardTitle>{experience.title}</CardTitle>
                  <CardDescription>{experience.company}, {moment(experience.started_at).format("MM/YYYY")} - {moment(experience.ended_at).format("MM/YYYY")}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h2 className="font-semibold text-xl">Achievements</h2>
                  <ul className="list-disc ml-5">
                    {
                      experience.achievements.map((achievement, index: number) => {
                        return <li key={index}>{achievement}</li>
                      })
                    }
                  </ul>
                </CardContent>
              </Card>
            ))
          }
        </div>
      </section>
    )
}