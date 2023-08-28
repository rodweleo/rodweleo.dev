import { Link } from "react-router-dom"

const Blog = () =>{

    return(
            <section id="blog">
            <h2>Articles</h2>
                <Link to='/articles/article1' className="article">
                    <h3>Article Title</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas omnis consequuntur fugiat eaque ad assumenda impedit aut, nam, corporis voluptates magni suscipit nostrum inventore? Harum repellendus voluptas quia maxime non!</p>
                    <a href="article-link" className="btn btn-secondary">Read More</a>
                </Link>
                <Link to='/articles/article2' className="article">
                    <h3>Article Title</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas omnis consequuntur fugiat eaque ad assumenda impedit aut, nam, corporis voluptates magni suscipit nostrum inventore? Harum repellendus voluptas quia maxime non!</p>
                    <a href="article-link" className="btn btn-secondary">Read More</a>
                </Link>
            </section>
    )
}

export default Blog