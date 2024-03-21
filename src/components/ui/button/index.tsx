import { ReactNode } from "react"

interface buttonProps {
    variant: 'primary' | 'secondary' | 'accent' | undefined
    iconName?: string
    onClick?: () => void
    label?: string | ReactNode
    style?: string
    type?: "submit" | "reset" | "button" | undefined
    disabled?: boolean
    children?: ReactNode
}

interface ButtonTypes {
    options: buttonProps
}
export const Button: React.FC<ButtonTypes> = ({ options }) => {

    return <button type={options.type} disabled={options.disabled} className={`transition-all duration-300 disabled:cursor-not-allowed disabled:bg-slate-500 disabled:text-slate-400 ${options.variant === "primary" ? "bg-blue-950 text-white font-bold px-5 py-2.5 rounded-md flex w-full items-center justify-center gap-2 text-xl cursor-pointer hover:bg-blue-500"
        : "text-white border-2 border-slate-200 font-bold px-5 py-2.5 rounded-md flex w-full items-center justify-center gap-2 text-xl cursor-pointer hover:bg-slate-200 hover:text-black"}`} onClick={options.onClick}><i className={options?.iconName} id="icon-btn"></i> {options.label} {options.children} </button>
}