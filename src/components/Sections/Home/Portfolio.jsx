import web1 from "../../../img/portfolio-kraljicakafa.webp";
import web2 from "../../../img/portfolio-appainu.webp";
import web3 from "../../../img/portfolio-marusa.webp";
import web4 from "../../../img/portfolio-web3cf.webp";
import web5 from "../../../img/potrfolio-teenapesquad.webp";
import web6 from "../../../img/portfolioExample6.webp";
import { Link } from "react-router-dom";
function Portfolio() {
  return (
    <section className="portfolio">
      <h2>WEBSITE DESIGN</h2>
      <p className="paragraph">
        A great website should be both visually appealing and SEO optimized.
        Visitors should be able to interact with the website's useful and
        appealing design, as well as find it using search. In this way, a
        website visitor is transformed into a lead.
      </p>
      <div className="grid">
        <div>
          <img src={web1} alt="Portfolio website 1" />
        </div>
        <div>
          <img src={web2} alt="Portfolio website 2" />
        </div>
        <div>
          <img src={web3} alt="Portfolio website 3" />
        </div>
        <div>
          <img src={web4} alt="Portfolio website 4" />
        </div>
        <div>
          <img src={web5} alt="Portfolio website 5" />
        </div>
        <div>
          <img src={web6} alt="Portfolio website 6" />
        </div>
      </div>
      <Link className="btn-link" to="/portfolio">
        <button>WEBSITE CASE STUDIES & PRICING</button>
      </Link>
    </section>
  );
}

export default Portfolio;
