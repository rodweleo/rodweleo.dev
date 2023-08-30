import { Link } from "react-router-dom"
import articles from "../data/articles"

const Blog = () =>{
    
    const articleList = articles.map((article, index)=>(
        <Link to={`/articles/${article.title.toLowerCase().replaceAll(" ", "-") + "_" + article.id}`} className="article" key={index}>
                    <h3>{article.title}</h3>
                    <p>{article.body}</p>
                    <a href="article-link" className="btn btn-secondary">Read More</a>
        </Link>
    ))

    return(
            <section id="blog">
            <h2>Articles</h2>
                {articleList}
            </section>
    )
}

export default Blog