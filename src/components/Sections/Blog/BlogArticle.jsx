import { Link } from "react-router-dom";
import placeholder from "../../../img/blogPlaceholder.png";
function BlogArticle({ title, url, author, date, description }) {
  return (
    <div className="blog-article">
      <div className="img">
        <img src={placeholder} alt="Placeholder for blog article" />
      </div>
      <div className="text">
        <span>
          Published by {author} on {date}{" "}
        </span>
        <h3>{title}</h3>
        <p>{description}</p>
        <Link to={"/blog/" + url}>Learn More</Link>
      </div>
    </div>
  );
}

export default BlogArticle;
