import { Link } from "react-router-dom";
import arr from "../../img/arrRight.svg";

function Optimization() {
  return (
    <section className="optimization">
      <h2>SEARCH ENGINE OPTIMIZATION</h2>
      <p>
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
          <Link to="/seo/on-page-and-off-page">
            <img src={arr} alt="Arrow pointing to the right" />
          </Link>
        </div>
        <div className="item">
          <h3>ON PAGE SEO AND OFF PAGE SEO</h3>
          <p>
            On-page SEO refers to SEO factors and techniques focused on
            optimizing aspects of your website that are under your control.
            Off-page SEO refers to SEO factors and strategies focused on
            promoting your site or brand around the web.
          </p>
          <Link to="/seo/on-page-and-off-page">
            <img src={arr} alt="Arrow pointing to the right" />
          </Link>
        </div>
        <div className="item">
          <h3>ON PAGE SEO AND OFF PAGE SEO</h3>
          <p>
            On-page SEO refers to SEO factors and techniques focused on
            optimizing aspects of your website that are under your control.
            Off-page SEO refers to SEO factors and strategies focused on
            promoting your site or brand around the web.
          </p>
          <Link to="/seo/on-page-and-off-page">
            <img src={arr} alt="Arrow pointing to the right" />
          </Link>
        </div>
      </div>
      <Link to="/seo">
        <button>GET A FREE SEO AUDIT</button>
      </Link>
    </section>
  );
}

export default Optimization;
