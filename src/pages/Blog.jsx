import bg from "../img/blogImg1.png";
import { Link } from "react-router-dom";
import BlogArticle from "../components/Sections/Blog/BlogArticle";
import blogdata from "../blog/data/blogPosts";
import { useState } from "react";

const blogKeys = Object.keys(blogdata);
function Blog() {
  const [activePage, setActivePage] = useState(0);

  // loading dom articles
  // show 6 articles per page
  const blogArticlesDom = [];
  blogKeys.forEach((key, i) => {
    console.log(i);
    const min = activePage * 6;
    const max = min + 6;
    if (i < max && i >= min) {
      blogArticlesDom.push(
        <BlogArticle
          img={blogdata[key]["img"]}
          author={blogdata[key]["author"]}
          description={blogdata[key]["description"]}
          key={key}
          title={blogdata[key]["title"]}
          url={key}
          date={blogdata[key]["date"]}
        ></BlogArticle>
      );
    }
  });
  return (
    <div className="blog">
      <section className="hero">
        <div className="text">
          <h1>
            Our <span>Website Design</span> Portfolio
          </h1>
          <p>Our work doesn't just look good. It is a first step forward.</p>
        </div>
        <Link to="/blog/local-seo" className="showcase">
          <img src={bg} alt="Placeholder immage for blog article" />
          <div className="info">
            <span>Local SEO</span>
            <p>
              Local SEO (search engine optimization) refers to optimizing a
              website to rank for searches that are specific to a particular
              geographic area.
            </p>
          </div>
        </Link>
      </section>
      <section className="blog-articles">{blogArticlesDom}</section>
      <section className="pagination"></section>
    </div>
  );
}

export default Blog;
