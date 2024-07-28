import { SocialLinks } from "../components/social_links";
import { Button } from "@/components/ui/button";

export default function Hero() {

  const titles = [
    "software engineer",
    "full stack developer"
  ]

  return (
    <section
      id="about-leo"
      className="w-full p-5 min-h-screen flex flex-col justify-center text-center items-center">
      <div className="flex flex-col space-y-10">
        <h1 className="text-2xl">
          <p className="text-lg font-bold bg-slate-200 rounded-full px-8 py-2 w-fit">
            Hello&#128075;, I'm
            <span className=" font-bold"> Rodwell Leo</span>
          </p>{" "}
        </h1>
        <h2 className="w-full text-left font-bold text-4xl">About Me</h2>
        <p className="leading-8 text-justify text-lg max-w-[700px]">
          As an <strong className="text-blue-500">indie {titles[0]}</strong>, my focus is on creating Software as a Service (SaaS) solutions that redefine industry standards. I am driven by a passion for software craftsmanship and product innovation, leveraging technology to solve problems and create value for businesses and individuals alike.
        </p>
        <div className="flex gap-5">
         <Button></Button>
         <Button></Button>

        </div>
        <div className="text-left">
          <h2 className="font-bold text-md mb-2 text-slate-300">Follow for more:-</h2>
        <SocialLinks />
        </div>

        
      </div>
    </section>
  );
}
