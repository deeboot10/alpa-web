import { Link } from "react-router-dom";
function BlogArticle({ title, url, author, date, description, img }) {
  return (
    <div className="blog-article">
      <div className="img">
        <img src={img} alt="Placeholder for blog article" />
      </div>
      <div className="text">
        <span>
          Published by <u>{author}</u> on {date}{" "}
        </span>
        <h3>{title.toUpperCase()}</h3>
        <p>{description}</p>
        <Link to={"/blog/" + url}>
          Learn More <div className="line"></div>
        </Link>
      </div>
    </div>
  );
}

export default BlogArticle;
