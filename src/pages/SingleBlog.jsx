import blogData from "../blog/data/blogPosts";
import ReactMarkdown from "react-markdown";
import linkedin from "../img/linkedin-white.svg";
import facebook from "../img/facebook-white.svg";
import twitter from "../img/twitter-white.svg";
import pinterest from "../img/pinterest-white.svg";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
function SingleBlog() {
  const length = window.location.href.split("/").length - 1;
  const id = window.location.href.split("/")[length];
  const data = blogData[id];
  const navigate = useNavigate();

  // getting data for next and previous blog posts to feature them on the bottom of the page
  let previousUrl;
  let nextUrl;
  const allUrls = Object.keys(blogData);
  allUrls.forEach((key, i) => {
    if (key === id) {
      if (i !== 0) {
        previousUrl = allUrls[i - 1];
      } else {
        previousUrl = allUrls[allUrls.length - 1];
      }
      if (i !== allUrls.length - 1) {
        nextUrl = allUrls[i + 1];
      } else {
        nextUrl = allUrls[0];
      }
    }
  });

  const handleClickLink = (url) => {
    navigate("/blog/" + url);
    window.scrollTo(0, 0);
  };

  return (
    <div className="single-blog">
      <Helmet>
        <title>Alpa Digital Agency | {data.title}</title>
        <meta name="description" content={data.description} />
      </Helmet>
      <div className="main">
        <h1 className="title">{data.title}</h1>
        <span className="date-and-author">
          {data.author}, {data.date}
        </span>
        <img src={data.img} alt={data.title} />
        <ReactMarkdown>{data.markdown}</ReactMarkdown>
      </div>
      <div className="line"></div>
      <div className="share">
        <span>Share:</span>
        <div className="items">
          <a href="https://www.linkedin.com" target="_blank" className="item">
            <img src={linkedin} alt="Linkedin icon" />
          </a>
          <a href="https://www.pinterest.com" target="_blank" className="item">
            <img src={pinterest} alt=" icon" />
          </a>
          <a href="https://www.twitter.com" target="_blank" className="item">
            <img src={twitter} alt=" icon" />
          </a>
          <a href="https://www.facebook.com" target="_blank" className="item">
            <img src={facebook} alt=" icon" />
          </a>
        </div>
      </div>
      <div className="more">
        <div
          onClick={() => {
            handleClickLink(previousUrl);
          }}
          className="previous"
          style={{ backgroundImage: `url(${blogData[previousUrl].img})` }}
        >
          <div className="text">
            <h4>{blogData[previousUrl].title}</h4>
            <p>{blogData[previousUrl].description}</p>
          </div>
          <div className="overlay"></div>
        </div>
        <div
          onClick={() => {
            handleClickLink(nextUrl);
          }}
          className="next"
          style={{ backgroundImage: `url(${blogData[nextUrl].img})` }}
        >
          <div className="text">
            <h4>{blogData[nextUrl].title}</h4>
            <p>{blogData[nextUrl].description}</p>
          </div>
          <div className="overlay"></div>
        </div>
      </div>
    </div>
  );
}

export default SingleBlog;
