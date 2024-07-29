import { LatestBlogPosts } from "@/components/latest-blog-posts"

export const Blog = () => {
    return (
        <main id="blog " className="min-h-screen">
        <section>
            <div className="p-5 hidden">
                <h1 className="font-bold text-4xl">Welcome to My Blog</h1>
                <p className="text-slate-500">Explore the insights and experiences of a full stack software engineer.</p>
            </div>
            <div className="p-5">
                <LatestBlogPosts/>
            </div>
        </section>
    </main>
    )
}