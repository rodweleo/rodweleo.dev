import { useParams } from "react-router-dom"
import getArticle from "../functions/getArticle";

const Article = () => {
    const { id } = useParams();

    //getting the article id
    var articleId = Number(id?.slice(id?.indexOf('_') + 1, id?.length))

    //getting the specific article
    const article = getArticle(articleId);
    
    return(
        <main>
            <h1>{article?.title.toUpperCase()}</h1>
            <p>Created By: {article?.author}</p>
            <img src="https://foundersguide.com/wp-content/uploads/2020/07/startup2.jpg" alt="Start Up"  />
            <article>{article?.body}</article>
            <div className="tags">
                {article?.tags.map((tag, index)=>(
                    <a href="" key={index}>#{tag}</a>
                ))}
            </div>
            <div className="comments">
                <form action="" method="post">
                    <h3>Leave a Comment</h3>
                </form>
            </div>
        </main>
    )
}

export default Article