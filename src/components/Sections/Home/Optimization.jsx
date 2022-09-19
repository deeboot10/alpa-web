import { Link } from "react-router-dom";
import arr from "../../../img/arrRightWhite.svg";

function Optimization() {
  return (
    <section className="optimization">
      <h2>SEARCH ENGINE OPTIMIZATION</h2>
      <p className="paragraph">
        Every one of our clients benefits from SEO since it establishes a strong
        online presence for them, increasing their revenue, profitability, and
        cost-effectiveness while also enhancing their leads and sales.
      </p>
      <div className="grid">
        <div className="item">
          <h3>ON PAGE SEO AND OFF PAGE SEO</h3>
          <p>
            On-page SEO refers to SEO factors and techniques focused on
            optimizing aspects of your website that are under your control.
            Off-page SEO refers to SEO factors and strategies focused on
            promoting your site or brand around the web.
          </p>
        </div>
        <div className="item">
          <h3>LOCAL SEO</h3>
          <p>
            Local SEO is a search engine optimization (SEO) strategy that helps
            your business be more visible in local search results on Google. Any
            business that has a physical location or serves a geographic area
            can benefit from local SEO.
          </p>
        </div>
        <div className="item">
          <h3>BUILDING AUTHORITY</h3>
          <p>
            Link building is a search engine optimization technique that
            increases your search engine ranking. Having a good number of links
            to a website indicates that the content is there is valuable.
          </p>
        </div>
        <div className="item">
          <h3>TECHNICAL SEO</h3>
          <p>
            Technical SEO refers to improving the technical aspects of a website
            in order to increase the ranking of its pages in the search engines.
            Making a website faster, easier to crawl and understandable for
            search engines are the pillars of technical optimization.
          </p>
        </div>
      </div>
      <Link className="btn-link" to="/seo">
        <button>GET A FREE SEO AUDIT</button>
      </Link>
    </section>
  );
}

export default Optimization;
