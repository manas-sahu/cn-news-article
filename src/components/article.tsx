import { ArticleProps } from "../models/newsArticle.model";

const Article = ({ title, description, urlToImage, onClick }: ArticleProps) => {
  return (
    <article className="article" onClick={onClick}>
      <img src={urlToImage} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
};

export default Article;
