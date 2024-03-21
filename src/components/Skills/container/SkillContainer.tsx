import { Skill } from "../../../utils/interfaces";
import { SkillCard } from "../cards/SkillCard";

export const SkillContainer = ({ skill_list, header }: { skill_list: Skill[], header: string }) => {
    return <div className="w-fit h-auto flex flex-col items-center space-y-4 bg-slate-800 p-2.5 rounded-md ">
        <h1 className="text-white font-bold text-xl">{header} </h1>
        <ul className="grid grid-cols-2 w-fit gap-5 place-items-center justify-center items-center">
            {skill_list.map((skill, index: number) => (
                <SkillCard skill={skill} index={index} />
            ))}
        </ul>
    </div>
}