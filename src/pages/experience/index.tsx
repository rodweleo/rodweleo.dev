import { ExperienceCard } from "../../components/experience/cards/ExperienceCard"
import { Experience } from "../../utils/interfaces"

export const ExperiencePage = () => {
    const experiences: Experience[] = [
        {
            title: "Software Engineer",
            company: "Jamii Telecommunications LTD",
            company_logo: "/images/logo_jtl.png",
            duration: {
                from: "July 2023",
                to: "",
                present: true
            },
            summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quasi optio quod incidunt architecto consequuntur ipsum delectus et illum repellendus dicta, facere vero assumenda expedita dolores velit iure itaque nulla!",
            accomplishments: [
                "Spearheaded the development of cutting-edge web and native applications, leveraging advanced technologies and Agile engineering practices to ensure optimal performance and user satisfaction",
                "Collaborated closely with cross-functional teams to translate business requirements into technical solutions, driving competitive differentiation and enhancing the organisation's technology stack",
                "Led initiatives to streamline DevOps processes and tooling, resulting in improved efficiency, scalability, and reliability of software delivery pipelines.",
                "Provided strategic guidance on system architecture, design patterns, and best practices, fostering innovation and continuous improvement within the development team",
                "Played a pivotal role in system testing, documentation, and user training, ensuring seamless adoption and utilisation of technology solutions across the organisation",
                " Established and maintained strong relationships with internal stakeholders, fostering a culture of collaboration, transparency, and accountability."
            ],
            techstack: ["ReactJS", "TypeScript", "NodeJS - ExpressJS", "MySQL", "Git", "Docker"
            ]
        }
    ]
    return <section className="space-y-10 p-5 w-full">
        <h1 className="font-bold text-slate-200 text-4xl">Experience</h1>
        <section className="flex flex-col w-full items-center">
            {experiences.map((experience, index: number) => (
                <ExperienceCard experience={experience} index={index} />
            ))}
        </section>
    </section>
}