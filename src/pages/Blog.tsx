const Blog = () =>{

    return(
        <section id="blog">
          <h2>Articles</h2>
          <div className="article">
              <h3>Article Title</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas omnis consequuntur fugiat eaque ad assumenda impedit aut, nam, corporis voluptates magni suscipit nostrum inventore? Harum repellendus voluptas quia maxime non!</p>
              <a href="article-link" className="btn btn-secondary">Read More</a>
          </div>
          <div className="article">
              <h3>Article Title</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas omnis consequuntur fugiat eaque ad assumenda impedit aut, nam, corporis voluptates magni suscipit nostrum inventore? Harum repellendus voluptas quia maxime non!</p>
              <a href="article-link" className="btn btn-secondary">Read More</a>
          </div>
      </section>
    )
}

export default Blog