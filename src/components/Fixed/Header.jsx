import logo from "../../img/logo.svg";
import HoverNavigationElement from "./HoverNavigationElement";
import { Link } from "react-router-dom";
import { BrowserView, MobileView } from "react-device-detect";
function Header() {
  return (
    <header>
      <div className="content">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Company logo" />
          </Link>
        </div>
        <BrowserView className="navigation">
          <Link to="/about">About</Link>
          <HoverNavigationElement
            name={"Services"}
            url="services"
            childrenNames={[
              "Website Design",
              "Website Development",
              "E-Commerce",
              "SEO",
              "Maintenance",
            ]}
            childrenUrls={[
              "web-design",
              "web-development",
              "e-commerce",
              "seo",
              "maintenance",
            ]}
          ></HoverNavigationElement>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/get-in-touch">
            <button id="get-in-touch-btn">Get in touch</button>
          </Link>
        </BrowserView>
        <MobileView className="mobile-menu">
          <span>MENU</span>
        </MobileView>
      </div>
    </header>
  );
}

export default Header;
