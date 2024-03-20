import { Skill } from "../../../utils/interfaces";

export const SkillCard = ({ skill, index }: { skill: Skill, index: number }) => {
    return <div key={index} className="flex flex-col items-center bg-slate-500 w-24 rounded-xl p-2 cursor-pointer hover:shadow-2xl transition-all duration-300 hover:shadow-blue-900 hover:bg-transparent hover:text-white hover:scale-[1.025]">
        <img src={skill.image} loading="lazy" className="w-full h-14 object-contain aspect-square" />
        <h1 className=" font-bold text-sm"> {skill.name}</h1>
    </div>
}