import { Button } from "@/components/ui/button";
import { services } from "@/utils/data/services";
import ServiceListItem from "@/components/Services/service_list_item";
import { SkillsList } from "@/components/ui/SkillsList";
import { WorkExperience } from "@/components/work-experience";
import { NotableProjects } from "@/components/notable-projects";
import { LatestBlogPosts } from "@/components/latest-blog-posts";
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react";

const Homepage = () => {
  return (
    <main className="w-full relative min-h-screen">
      <section id="#" className="mt-10 flex flex-wrap justify-center items-center gap-10 min-h-screen p-5">
        <div className="max-w-[650px] space-y-5">
          <p className="px-5 py-2 rounded-full bg-slate-100 w-fit font-semibold text-lg">Hello &#128075;, I'm Rodwell Leo</p>
          <h1 className="font-bold text-6xl max-md:text-5xl">Crafting Exceptional Digital Experiences.</h1>
          <p className="text-slate-500">I'm a passionate full-stack software engineer, dedicated to creating beautiful and functional digital products. <br/> As a full stack software engineer, my focus is on creating Software as a Service (SaaS) solutions that redefine industry standards. <br/> I am driven by a passion for software craftsmanship and product innovation, leveraging technology to solve problems and create value for businesses and individuals alike.</p>
          <ul className="flex items-center gap-5">
            <li><Link to="https://github.com/rodweleo" target="_blank" title="Github"><Github /></Link></li>
            <li><Link to="https://www.linkedin.com/in/rodweleo/" target="_blank" title="LinkedIn"><Linkedin /></Link></li>
            <li><Link to="mailto:leorodwel86@gmail.com" title="Send a mail"><Mail /></Link></li>
          </ul>
          <ul className="flex flex-wrap gap-5">
            <li><Button type="button" variant="secondary"><a href="#contact-me">Contact Me</a></Button></li>
            <li><Button type="button"  onClick={() => window.open("https://drive.google.com/file/d/1Cvs5ZY6oT44_3AdLt5Dy77cWGwjCC4Qa/view?usp=drive_link", "_blank")}>View Resume</Button></li>
          </ul>
        </div>
        <img src="/images/an-african-american-young-software-engineer-b_OdLAJEa.jpg" width="450px" loading="lazy" className="rounded-xl" alt="Rodwell Leo's Image"/>
      </section>
      <section
      id="what-I-offer"
      className="w-full p-5 min-h-screen flex flex-col justify-center items-center space-y-2.5">
        <div className="flex flex-col items-center space-y-2.5">
          <h2 className="bg-slate-100 text-slate-800 font-semibold w-fit px-6 py-2 rounded-full text-lg">My Services</h2>
          <h1 className="w-full font-bold text-5xl">What I offer</h1>
          <p className="leading-8 text-justify text-lg max-w-[500px] text-slate-500"></p>        
        </div>
        <div className="flex flex-wrap justify-center gap-2.5">
            {services.map((service, index: number) => (
              <ServiceListItem service={service} index={index} />
            ))}
        </div>
        
      </section>
      <section id="technical-skills" className="flex flex-col w-full justify-center items-center space-y-5 min-h-screen p-5">
        <div className="text-center space-y-2.5 flex flex-col">
          <h1 className="font-bold text-5xl">Technical Skills</h1>
          <p className="text-slate-500">I have experience working with a wide range of technologies, from front-end frameworks to back-end services.</p>
        </div>
        <SkillsList/>
      </section>
      <WorkExperience/>
      <NotableProjects/>
      <div className="p-5">
        <LatestBlogPosts/>
      </div>
      
    </main >
  );
};

export default Homepage;
