import logo from "../../img/logo-white.svg";
import menuIcon from "../../img/menu-icon.svg";
import HoverNavigationElement from "./HoverNavigationElement";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import plus from "../../img/plus.svg";
import { BrowserView, MobileView } from "react-device-detect";
function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);

  // scroll to top on changed url
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  const handleClick = () => {
    setMobileMenu(true);
  };
  const handleClose = () => {
    setMobileMenu(false);
  };
  const handleChangeUrl = () => {
    setMobileMenu(false);
  };

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
            ]}
            childrenUrls={[
              "web-design",
              "web-development",
              "e-commerce",
              "seo",
            ]}
            setMenu={setMobileMenu}
          ></HoverNavigationElement>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">
            <button id="get-in-touch-btn">Contact</button>
          </Link>
        </BrowserView>
        <MobileView className="mobile-menu">
          <img
            onClick={handleClick}
            src={menuIcon}
            alt="Menu icon, three stripes"
          />
        </MobileView>
      </div>
      <MobileView
        className={`mobile-menu-hidden ${mobileMenu ? "open" : "closed"}`}
      >
        <button className="close-btn">
          <img onClick={handleClose} src={plus} alt="escape button" />
        </button>
        <Link onClick={handleChangeUrl} to="/about">
          About
        </Link>
        <HoverNavigationElement
          name={"Services"}
          url="services"
          childrenNames={[
            "Website Design",
            "Website Development",
            "E-Commerce",
            "SEO",
          ]}
          childrenUrls={["web-design", "web-development", "e-commerce", "seo"]}
        ></HoverNavigationElement>
        <Link onClick={handleChangeUrl} to="/portfolio">
          Portfolio
        </Link>
        <Link onClick={handleChangeUrl} to="/blog">
          Blog
        </Link>
        <Link onClick={handleChangeUrl} to="/contact">
          <button className="get-in-touch-btn">Contact</button>
        </Link>
      </MobileView>
    </header>
  );
}

export default Header;
