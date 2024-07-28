import moment from "moment";
import { useLocation } from "react-router-dom";

export const BlogPage = () => {
  const location = useLocation()
  const { blogPost } = location.state
  return (
    <article className="p-5 space-y-5" translate="yes">
      <div className="space-y-2 5">
        <h1 className="font-bold text-5xl">
          {blogPost.title}
        </h1>
        <ul className="text-slate-500 flex items-center gap-5">
          <li>Admin</li>
          <li>{moment().format("LL")}</li>
        </ul>
      </div>
      <figure className="flex flex-col items-center">
        <img
          src={blogPost.thumbnail}
          alt=""
          className="w-full rounded-xl"
          loading="lazy"
        />
        <figcaption className="text-sm text-slate-500">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </figcaption>
      </figure>
      <section dangerouslySetInnerHTML={{__html: blogPost.markdown}}>
      </section>
    </article>
  );
};
