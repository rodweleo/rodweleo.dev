import { useNavigate } from "react-router-dom"

export const NotFound = () => {
    const navigate = useNavigate()
    return <section className="min-h-screen flex flex-col text-center items-center justify-center space-y-4">
        <h1 className="flex gap-2 font-bold text-slate-200 text-9xl items-center">4<div className="h-24 w-14 shadow-md shadow-slate-400 rounded-3xl bg-slate-200"></div>4 </h1>
        <h2 className="font-bold text-slate-200 text-5xl">PAGE NOT FOUND</h2>
        <p className="font-bold text-slate-400">The page you are looking for might have been removed, had its name changed or temporarily made unavailbale</p>

        <button className="w-fit px-5 py-2 rounded-full font-bold hover:bg-blue-950 hover:text-white transition-all duration-300" onClick={() => navigate(-1)}>
            <i className="fa-solid fa-arrow-left"></i>
            &nbsp;
            GO BACK</button>
    </section>
}