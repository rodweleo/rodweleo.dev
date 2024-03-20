import { SocialLinks } from "../../components/social_links"

export const Blog = () => {
    return <section id="blog " className="flex flex-col items-center justify-center min-h-screen">
        <div className=" max-w-xl">
            <img src="images/Developer Working On Desk (HD).png" alt="" className="w-full" loading="lazy" />
        </div>
        <h1 className="font-bold text-2xl text-slate-400 max-w-xl text-center leading-loose">We're coming soon! <br />We're working hard to give you the best experience.</h1>
        <SocialLinks />
    </section>
}