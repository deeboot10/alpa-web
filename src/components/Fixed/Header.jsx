import logo from "../../img/logo.svg";
import HoverNavigationElement from "./HoverNavigationElement";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Company logo" />
        </Link>
      </div>
      <div className="navigation">
        <Link to="/about">About</Link>
        <HoverNavigationElement
          name={"Services"}
          url="services"
          childrenNames={["SEO", "Web Development"]}
          childrenUrls={["seo", "web-development"]}
        ></HoverNavigationElement>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/get-in-touch">
          <button>Get in touch</button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
