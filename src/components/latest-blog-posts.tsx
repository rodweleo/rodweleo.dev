import { useBlogPosts } from "@/hooks/useBlogPosts"
import { User, Calendar } from "lucide-react"
import { Badge } from "./ui/badge";
import moment from "moment"
import { Link, useNavigate } from "react-router-dom"
import { Button } from "./ui/button"

export const LatestBlogPosts = () => {
    const { blogPosts } = useBlogPosts()
    const navigate = useNavigate()
    return (
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
                    {post.tags.map((tag, index: number) => (
                      <li key={index}><Badge className="bg-blue-700">{tag}</Badge></li>
                    ))}
                  </ul>
                  <h1 className="font-bold text-2xl"><Link to={`/blog/${post.slug}`} state={{ blogPost: post}}>{post.title}</Link></h1>
                  <p className="text-slate-500 text-ellipsis line-clamp-3">{post.description}</p>
                  <ul className="flex justify-between">
                    <li className="flex items-center gap-1 text-slate-500"><User size={16} absoluteStrokeWidth /> <span>{post.created_by === "leorodwel86@gmail.com" ? "Admin" : "Guest"}</span></li>
                    <li className="flex items-center gap-1 text-slate-500"><Calendar size={16} absoluteStrokeWidth /> {moment(post.created_at).format("LL")}</li>
                  </ul>
                </div>
                <Button variant="link" className="p-0" onClick={() => navigate(`/blog/${post.slug}`)}>Read more </Button>
              </div>
            ))
          }
        </div>
        
        
      </section>
    )
}