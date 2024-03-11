import { ReactNode } from "react";

export const ProjectModal = ({ children }: { children: ReactNode }) => {


    return <dialog id="project-modal" className="hidden fixed top-0 w-full z-50 h-screen bg-black bg-opacity-50 flex items-center justify-center inset-0 backdrop-blur-sm">
        {children}
    </dialog>
}