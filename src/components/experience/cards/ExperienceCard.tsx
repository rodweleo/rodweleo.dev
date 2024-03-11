import { Experience } from "../../../utils/interfaces"

export const ExperienceCard = ({ experience, index }: { experience: Experience, index: number }) => {
    return <div key={index} className="flex gap-2 even:flex-row-reverse max-w-[760px]  h-fit">
        <div className="w-auto">
            <h1 className="font-bold text-slate-200">{experience.title}</h1>
            <h2 className="font-bold text-slate-400">{experience.company}</h2>
            <h3 className="text-slate-500"><i>{experience.duration.from} - {experience.duration.present ? "Present" : experience.duration.to} </i></h3>
            <p>{experience.summary}</p>
            <h4 className="font-bold text-slate-300 underline">Accomplishments</h4>
            <ul className="list-decimal text-slate-300 p-5 leading-loose">
                {experience.accomplishments.map((accomplishment, index: number) => (
                    <li key={index}>{accomplishment}</li>
                ))}
            </ul>
            <button className="px-5 py-2 rounded-full bg-slate-400 text-slate-200 font-bold"><i className="fa-solid fa-arrow-up"></i> See Less</button>
        </div>
        <div className="relative flex flex-col items-center">
            <div className="h-4 w-4 bg-blue-700 rounded-full"></div>
            <div className="bg-slate-400 w-[2px] min-h-full relative items-center justify-center" />
        </div>
        <img src={experience.company_logo} alt={experience.company} className="bg-white rounded-2xl w-full h-24 object-fill aspect-video" />
    </div>
}