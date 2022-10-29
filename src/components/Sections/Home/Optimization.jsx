import { Link } from "react-router-dom";
import arr from "../../../img/arrRightWhite.svg";
import icon1 from "../../../img/svgIcon1.svg";
import icon2 from "../../../img/svgIcon2.svg";
import icon3 from "../../../img/svgIcon3.svg";
import icon4 from "../../../img/svgIcon4.svg";
function Optimization() {
  return (
    <section className="optimization">
      <div className="content">
        <h2>OUR SERVICES</h2>
        <p className="paragraph">
          Every one of our clients benefits from SEO since it establishes a
          strong online presence for them, increasing their revenue,
          profitability, and cost-effectiveness while also enhancing their leads
          and sales.
        </p>
        <div className="grid">
          <Link to="/services/web-design" className="item">
            <div className="img">
              <img src={icon1} className="icon1" alt="Design illustration" />
            </div>
            <h3>WEBSITE DESIGN</h3>
            <p>
              We believe that the right design following correct design patterns
              can provide a superior web experience for users. It is our core
              principle to make meaningful design with passion.
            </p>
          </Link>
          <Link to="/services/seo" className="item">
            <div className="img">
              <img src={icon2} className="icon1" alt="Design illustration" />
            </div>
            <h3>SEO</h3>
            <p>
              All the work you put into your website would go in vain if no one
              could see it, right? That is why we offer Search Engine
              Optimization services to make your website visible to users
              looking for services you offer.
            </p>
          </Link>
          <Link to="/services/e-commerce" className="item">
            <div className="img">
              <img src={icon3} className="icon1" alt="Design illustration" />
            </div>
            <h3>E-COMMERCE</h3>
            <p>
              Online shopping is growing in popularity day by day. Make your
              business stand out in that field with our custom service and find
              your way to web customers all over the world.
            </p>
          </Link>
          <Link to="/services/web-design" className="item">
            <div className="img">
              <img src={icon4} className="icon1" alt="Design illustration" />
            </div>
            <h3>BRAND STRATEGY</h3>
            <p>
              Make sure visitors in your area will be informed about your store.
              Specificaly target the area your business is operating in and
              enjoy new customers.
            </p>
          </Link>
        </div>
        <Link className="btn-link" to="/contact">
          <button>GET A FREE SEO AUDIT</button>
        </Link>
      </div>
    </section>
  );
}

export default Optimization;
