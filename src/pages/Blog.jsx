import bg from "../img/blog1.webp";
import { Link } from "react-router-dom";
import BlogArticle from "../components/Sections/Blog/BlogArticle";
import blogdata from "../blog/data/blogPosts";
import { useState, useRef } from "react";
import { Helmet } from "react-helmet";

const blogKeys = Object.keys(blogdata);
function Blog() {
  const [activePage, setActivePage] = useState(0);
  const blogRef = useRef();

  const handlePageChange = (pageIndex) => {
    setActivePage(pageIndex);
    window.scrollTo({
      left: 0,
      top: blogRef.current.offsetTop,
      behavior: "smooth",
    });
  };

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

  console.log(blogdata[blogKeys[0]]);

  // pagination
  const paginationDom = [];
  const numberOfPages = Math.ceil(blogKeys.length / 6);
  for (let i = 0; i < numberOfPages; i++) {
    paginationDom.push(
      <button
        onClick={() => {
          handlePageChange(i);
        }}
        className={`pagination-item ${activePage === i ? "active" : ""}`}
        key={i}
      >
        {i + 1}
      </button>
    );
  }
  console.log(numberOfPages);

  return (
    <div className="blog">
      <Helmet>
        <title>Alpa Digital Agency | Blog</title>
      </Helmet>
      <section className="hero">
        <div className="text">
          <h1>
            Our <span>Blog</span>
          </h1>
          <p>Read our stories and learn more about our creative process.</p>
        </div>
        <Link to={"/blog/" + blogKeys[0]} className="showcase">
          <img src={bg} alt="Placeholder immage for blog article" />
          <div className="info">
            <span>{blogdata[blogKeys[0]].title}</span>
            <p>{blogdata[blogKeys[0]].description}</p>
          </div>
        </Link>
      </section>
      <div className="content">
        <section className="blog-articles" ref={blogRef}>
          {blogArticlesDom}
        </section>
        <section className="pagination">{paginationDom}</section>
      </div>
    </div>
  );
}

export default Blog;
