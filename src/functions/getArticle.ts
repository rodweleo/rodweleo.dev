import articles from "../data/articles";

const getArticle = (id: number) =>{

    for (let index = 0; index < articles.length; index++) {
        const article = articles[index];
        
        if(article.id === id){
            return article;
        }
    }
}

export default getArticle;