import { useEffect } from "react";
import blogData from "../blog/data/blogPosts";

function SingleBlog() {
  useEffect(() => {
    const url = window.location.href;
    console.log(url);
  }, [window.location]);

  return (
    <div className="single-blog">
      <h1>{window.location.href}</h1>
    </div>
  );
}

export default SingleBlog;
