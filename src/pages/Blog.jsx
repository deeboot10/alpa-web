import bg from "../img/blogImg1.png";
import { Link } from "react-router-dom";
import BlogArticle from "../components/Sections/Blog/BlogArticle";
import blogdata from "../blog/data/blogPostsPage1.json";
import ReactMarkdown from "react-markdown";

function Blog() {
  console.log(blogdata["How we innovate in blooming industry?"]);

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
      <section className="blog-articles">
        <BlogArticle
          title={"WHY DOES THE LOCAL SEO MATTER?"}
          author={"Elia G"}
          date={"August 1, 2022."}
          description={
            "Local SEO (search engine optimization) refers to optimizing a website to rank for searches that are specific to a particular geographic area. Google automatically prioritizes some search queries to display local results first, or customers may query businesses local to them."
          }
        ></BlogArticle>
      </section>
      {/* TEST ZONE */}
      {/* TODO: REMOVE EVERYTHING UNDER THIS */}
      <ReactMarkdown>
        {blogdata["How we innovate in blooming industry?"]["markdown"]}
      </ReactMarkdown>
    </div>
  );
}

export default Blog;
