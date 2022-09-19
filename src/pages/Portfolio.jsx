import bg from "../img/portfolio1.png";
import { Link } from "react-router-dom";
import WorkTogether from "../components/Fixed/WorkTogether";
function Portoflio() {
  return (
    <div className="portfolio">
      <section className="hero">
        <div className="text">
          <h1>
            Our <span>Website Design</span> Portfolio
          </h1>
          <p>Our work doesn't just look good. It is a first step forward.</p>
        </div>
        <Link to="/portfolio/case1" className="showcase">
          <img src={bg} alt="Portfolio website for showcase" />
          <div className="info">
            <span>Recent Project </span>
            <h3>4 Doors More Whores</h3>
            <p>SEO • Web Design • Web Development</p>
          </div>
        </Link>
      </section>
      <section className="our-work">
        <Link to="/portfolio/case2" className="showcase">
          <img src={bg} alt="Portfolio website for showcase" />
          <div className="info">
            <h3>4 Doors More Whores</h3>
            <div className="line"></div>
            <p>SEO • Web Design • Web Development</p>
          </div>
        </Link>
        <Link to="/portfolio/case2" className="showcase">
          <img src={bg} alt="Portfolio website for showcase" />
          <div className="info">
            <h3>4 Doors More Whores</h3>
            <div className="line"></div>
            <p>SEO • Web Design • Web Development</p>
          </div>
        </Link>
        <Link to="/portfolio/case2" className="showcase">
          <img src={bg} alt="Portfolio website for showcase" />
          <div className="info">
            <h3>4 Doors More Whores</h3>
            <div className="line"></div>
            <p>SEO • Web Design • Web Development</p>
          </div>
        </Link>
        <Link to="/portfolio/case2" className="showcase">
          <img src={bg} alt="Portfolio website for showcase" />
          <div className="info">
            <h3>4 Doors More Whores</h3>
            <div className="line"></div>
            <p>SEO • Web Design • Web Development</p>
          </div>
        </Link>
      </section>
      <WorkTogether></WorkTogether>
    </div>
  );
}

export default Portoflio;
