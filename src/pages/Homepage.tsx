import { Button } from "@/components/ui/button";
import { services } from "@/utils/data/services";
import ServiceListItem from "@/components/Services/service_list_item";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useWorkExperiences } from "@/hooks/useWorkExperiences";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import moment from "moment"
import { Calendar, User } from "lucide-react";
import { Link } from "react-router-dom";
import { useBlogPosts } from "@/hooks/useBlogPosts";
import { Badge } from "@/components/ui/badge";
import { SkillsList } from "@/components/ui/SkillsList";

const Homepage = () => {
  const { workExperiences } = useWorkExperiences()
  const { blogPosts } = useBlogPosts()

  return (
    <main className="w-full relative min-h-screen">
      <section id="#" className="mt-10 flex flex-wrap justify-center items-center gap-10 min-h-screen">
        <div className="max-w-[650px] space-y-5">
          <p className="px-5 py-2 rounded-full bg-slate-100 w-fit font-semibold text-xl">Hello, I'm Rodwell Leo</p>
          <h1 className="font-bold text-7xl">Crafting Exceptional Digital Experiences.</h1>
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
              <ServiceListItem service={service} index={index} />
            ))}
        </div>
        
      </section>
      <section className="flex flex-col w-full justify-center items-center space-y-5 min-h-screen">
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
        <div className="flex justify-center gap-10 flex-wrap">
          {
            workExperiences.map((experience, index: number) => (
              <Card key={index} className="max-w-[400px]">
                <CardHeader>
                  <CardTitle>{experience.title}</CardTitle>
                  <CardDescription>{experience.company}, {moment(experience.started_at).format("MM/YYYY")} - {moment(experience.ended_at).format("MM/YYYY")}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h2 className="font-semibold">Achievements</h2>
                  <ul className="list-disc ml-5">
                    {
                      experience.achievements.map((achievement) => {
                        return <li>{achievement}</li>
                      })
                    }
                  </ul>
                </CardContent>
              </Card>
            ))
          }
        </div>
      </section>
      <section id="projects" className="flex flex-col w-full justify-center items-center min-h-screen space-y-5">
        <div className="text-center space-y-2.5">
          <h1 className="font-bold text-5xl">Notable Projects</h1>
          <p className="text-slate-500">Rodwell has worked on a variety of projects, showcasing his versatility and problem-solving skills.</p>
        </div>
        <div className="w-fit">
          <div className="max-w-[300px] space-y-2 rounded-xl">
            <img src="https://th.bing.com/th/id/OIP.ytIzQCGOFD-54gPCd9yl3QHaHa?rs=1&pid=ImgDetMain" className="w-full rounded-xl"/> 
            <h1 className="font-bold text-2xl">Project 1</h1>
            <p className="text-slate-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id iusto dolore a dolorem voluptatum est distinctio sint ea nam fugit sit quis labore aspernatur, ipsam, molestias quos minima deserunt nesciunt?</p>
            <ul className="flex justify-between">
              <li><Button variant="secondary">Github</Button></li>
              <li><Button>View Project</Button></li>
            </ul>
          </div>
        </div>
      </section>
      <section id="latest-blog-posts" className="flex flex-col w-full min-h-screen justify-center items-center space-y-5">
        <div className="flex flex-col items-center text-center space-y-2">
          <h1 className="font-bold text-5xl">Latest Blog Posts</h1>
          <p className="text-slate-500">Dive into my latest thoughts and insights on software engineering, technology, and more.</p>
        </div>
        <div>
          {
            blogPosts.map((post) => (
              <div className="p-5 border rounded-xl max-w-[350px] space-y-2.5">
                <img src={post.thumbnail} alt={post.title} className="rounded-xl w-full" loading="lazy"/>
                <div className="space-y-1">
                  <ul className="tags-container">
                    {post.tags.map((tag) => (
                      <li><Badge className="bg-blue-700">{tag}</Badge></li>
                    ))}
                  </ul>
                  <h1 className="font-bold text-2xl"><Link to={`blog/${post.slug}`} state={{ blogPost: post}}>{post.title}</Link></h1>
                  <p className="text-slate-500 text-ellipsis line-clamp-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor non esse natus sit nihil cum provident quaerat hic ducimus exercitationem? Facere accusantium qui, magnam necessitatibus inventore voluptatum minima? Sint, minus!</p>
                  <ul className="flex justify-between">
                    <li className="flex items-center gap-1 text-slate-500"><User size={16} absoluteStrokeWidth /> <span>Admin</span></li>
                    <li className="flex items-center gap-1 text-slate-500"><Calendar size={16} absoluteStrokeWidth /> {moment().format("LL")}</li>
                  </ul>
                </div>
                <Button variant="link" className="p-0">Read more </Button>
              </div>
            ))
          }
        </div>
        
        
      </section>
      <section id="contact-me" className="flex flex-col w-full min-h-screen justify-center items-center space-y-5 bg-slate-200">
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
