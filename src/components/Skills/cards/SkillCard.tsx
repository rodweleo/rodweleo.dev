import { Skill } from "../../../utils/interfaces";

export const SkillCard = ({ skill, index }: { skill: Skill, index: number }) => {
    return <div key={index} className="flex flex-col items-center bg-slate-500 w-fit rounded-xl p-5 cursor-pointer hover:shadow-2xl transition-all duration-300s hover:shadow-blue-900 hover:bg-transparent hover:text-white hover:scale-[1.025]">
        <img src={skill.image} loading="lazy" className="w-full h-24 object-contain aspect-square" />
        <h1 className=" font-bold text-xl"> {skill.name}</h1>
    </div>
}