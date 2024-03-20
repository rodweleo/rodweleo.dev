import { Experience } from "../../../utils/interfaces"

export const ExperienceCard = ({ experience, index }: { experience: Experience, index: number }) => {

    const handleClick = (e: any) => {
        if (e.target.getElementsByTagName("i")[0].classList.contains("fa-add")) {
            e.target.getElementsByTagName("i")[0].classList.remove("fa-add");
            e.target.getElementsByTagName("i")[0].classList.add("fa-minus")
        } else {
            e.target.getElementsByTagName("i")[0].classList.remove("fa-minus");
            e.target.getElementsByTagName("i")[0].classList.add("fa-add")
        }
    }
    return <div key={index} className="max-w-[500px] space-y-4">
        <div className="flex justify-between w-full">
            <div className="space-y-1">
                <h1 className="font-bold text-slate-200">{experience.title}</h1>
                <h2 className="font-bold text-slate-400">{experience.company}</h2>
                <h3 className="text-slate-500"><i>{experience.duration.from} - {experience.duration.present ? "Present" : experience.duration.to} </i></h3>
            </div>
            <img src={experience.company_logo} alt={experience.company} className="bg-white rounded-md ml-2 w-36 h-full object-fill aspect-video" />
        </div>
        <div className="space-y-2 transition-all duration-300">
            <details>
                <summary className="cursor-pointer font-bold text-white list-none flex items-center justify-between bg-blue-900/50 py-4 px-2 rounded-md" onClick={(e) => handleClick(e)}>Accomplishments <i className="fa-solid fa-add"></i></summary>
                <ul className="list-decimal text-slate-300 p-5 leading-loose">
                    {experience.accomplishments.map((accomplishment, index: number) => (
                        <li key={index}>{accomplishment}</li>
                    ))}
                </ul>
            </details>
            <details>
                <summary className="cursor-pointer font-bold text-white list-none flex items-center justify-between bg-blue-900/50 py-4 px-2 rounded-md" onClick={(e) => handleClick(e)}>Technologies Utilized <i className="fa-solid fa-add"></i></summary>
                <ul className="ml-5 list-decimal">
                    {experience.techstack.map((stack, index: number) => (
                        <li key={index} className="font-bold text-slate-200 py-1.5">{stack}</li>
                    ))}
                </ul>
            </details>
        </div>

    </div>
}