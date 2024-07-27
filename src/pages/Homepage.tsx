import { Button } from "@/components/ui/button";
import { services } from "@/utils/data/services";
import ServiceListItem from "@/components/Services/service_list_item";
import { SkillsList } from "@/components/ui/SkillsList";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Homepage = () => {

  return (
    <main className="w-full relative min-h-full">
      <section id="#" className="flex justify-center items-center gap-10 min-h-screen">
        <div className="max-w-[650px] space-y-5">
          <h1 className="font-bold text-7xl">Crafting Exceptional Digital Experiences</h1>
          <p className="text-slate-500">I'm a passionate full-stack software engineer, dedicated to creating beautiful and functional digital products. As a full stack software engineer, my focus is on creating Software as a Service (SaaS) solutions that redefine industry standards. <br/> I am driven by a passion for software craftsmanship and product innovation, leveraging technology to solve problems and create value for businesses and individuals alike.</p>
          <Button type="button">View Portfolio</Button>
        </div>
        <img src="https://th.bing.com/th/id/OIP.ytIzQCGOFD-54gPCd9yl3QHaHa?rs=1&pid=ImgDetMain" loading="lazy"/>
      </section>
      <section
      id="what-I-offer"
      className="w-full p-5 min-h-screen flex flex-col justify-center items-center space-y-2.5">
        <div className="flex flex-col items-center space-y-2.5">
          <h2 className="bg-slate-100 text-slate-800 font-semibold w-fit px-6 py-2 rounded-full">My Services</h2>
          <h1 className="w-full font-bold text-5xl">What I offer</h1>
          <p className="leading-8 text-justify text-lg max-w-[500px] text-slate-500"></p>        
        </div>
        <div className="flex flex-wrap justify-center gap-2.5">
            {services.map((service, index: number) => (
              <ServiceListItem service={service} key={index} />
            ))}
        </div>
        
      </section>
      <section className="flex flex-col w-full justify-center items-center space-y-5">
        <div className="text-center space-y-2.5">
          <h1 className="font-bold text-5xl">Technical Skills</h1>
          <p className="text-slate-500">Rodwell has a diverse set of technical skills, allowing him to tackle a wide range of projects and challenges.</p>
        </div>
        <SkillsList/>
      </section>
      <section
      id="work-experience"
      className="w-full p-5 min-h-screen flex flex-col justify-center items-center space-y-2.5">
        <div className="flex flex-col space-y-2.5">
          <h1 className="w-full font-bold text-5xl">Work Experience</h1>
          <p className="leading-8 text-justify text-lg max-w-[500px] text-slate-500"></p>        
        </div>
      </section>
      <section className="flex w-full justify-center min-h-screen">
        <div className="text-center space-y-2.5">
          <h1 className="font-bold text-5xl">Notable Projects</h1>
          <p className="text-slate-500">Rodwell has worked on a variety of projects, showcasing his versatility and problem-solving skills.</p>
        </div>
      </section>
      <section className="flex flex-col w-full min-h-screen justify-center items-center space-y-5">
        <div className="flex flex-col items-center space-y-2">
          <p className="bg-slate-100 text-slate-800 font-semibold w-fit px-6 py-2 rounded-full">Have a project in mind or just want to say hello? </p>
          <h1 className="font-bold text-5xl">Get in Touch</h1>
          <p className="text-slate-500">Fill out the form below and I'll will get back to you as soon as possible.</p>
        </div>
        <form className="space-y-4 w-[350px]">
          <Label className="flex flex-col gap-2">
            Name
            <Input type="text" placeholder="Name" />
          </Label>
          <Label className="flex flex-col gap-2">
            Email Address
            <Input type="email" placeholder="Email" />
          </Label>
          <Label className="flex flex-col gap-2">
            Message
            <Textarea placeholder="Message" />
          </Label>
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
        
      </section>
    </main >
  );
};

export default Homepage;
