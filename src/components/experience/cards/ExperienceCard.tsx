import { Experience } from "../../../utils/interfaces"

export const ExperienceCard = ({ experience, index }: { experience: Experience, index: number }) => {

    const handleClick = (e) => {
        if (e.target.getElementsByTagName("i")[0].classList.contains("fa-add")) {
            e.target.getElementsByTagName("i")[0].classList.remove("fa-add");
            e.target.getElementsByTagName("i")[0].classList.add("fa-minus")
        } else {
            e.target.getElementsByTagName("i")[0].classList.remove("fa-minus");
            e.target.getElementsByTagName("i")[0].classList.add("fa-add")
        }
    }
    return <div key={index} className="flex even:flex-row-reverse max-w-[760px]  h-fit">
        <div className="w-auto">
            <h1 className="font-bold text-slate-200">{experience.title}</h1>
            <h2 className="font-bold text-slate-400">{experience.company}</h2>
            <h3 className="text-slate-500"><i>{experience.duration.from} - {experience.duration.present ? "Present" : experience.duration.to} </i></h3>
            <div className="space-y-2 sm:w-[400px] transition-all duration-300">
                <details>
                    <summary className="cursor-pointer font-bold text-white list-none flex items-center justify-between bg-blue-900/50 py-4 px-2 rounded-md" onClick={(e) => handleClick(e)}>Summary <i className="fa-solid fa-add"></i></summary>
                    <p className="text-slate-300 font-bold text-sm">{experience.summary}</p>
                </details>
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
        <div className="relative flex flex-col items-center">
            <div className="h-4 w-4 bg-blue-700 rounded-full"></div>
            <div className="bg-slate-400 w-[2px] min-h-full relative items-center justify-center" />
        </div>
        <img src={experience.company_logo} alt={experience.company} className="bg-white rounded-2xl ml-2 max-w-32 min-w-32 h-24 object-fill aspect-video" />
    </div>
}