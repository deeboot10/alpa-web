import logo from "../../img/logoWhite.svg";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer>
      <div className="grid">
        <div className="item logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="item">
          <h3>GENERAL</h3>
          <Link to="/about">About</Link>
          <Link to="/portfolio">Clients</Link>
          <Link to="/">Testimonials</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="item">
          <h3>SERVICES</h3>
          <Link to="/services/web-design">Website Design</Link>
          <Link to="/services/web-development">Website Development</Link>
          <Link to="/services/seo">Search Engine Optimization</Link>
          <Link to="/services/e-commerce">E Commerce</Link>
        </div>
        <div className="item">
          <h3>CONTACT</h3>
          <a href="mailto:info@alpadigital.com">info@alpadigital.com</a>
        </div>
        <div className="item">
          <h3>SOCIAL MEDIA</h3>
          <a href="https://www.instagram.com" target="__blank">
            Instagram
          </a>
          <a href="https://www.linkedin.com" target="__blank">
            LinkedIn
          </a>
          <a href="https://www.twitter.com" target="__blank">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
