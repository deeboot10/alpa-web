import icon1 from "../../../img/svgIcon1.svg";
import icon2 from "../../../img/svgIcon2.svg";
import icon3 from "../../../img/svgIcon3.svg";
import icon4 from "../../../img/svgIcon4.svg";
import arr from "../../../img/arrRight.svg";
import { Link } from "react-router-dom";
import bg from "../../../img/servicesBg.svg";
import mainBg from "../../../img/mainBg.svg";

function Services() {
  return (
    <section
      style={{
        backgroundImage: `url(${bg}), url(${mainBg})`,
      }}
      className="services"
    >
      <div className="item">
        <img src={icon1} className="icon1" alt="Design illustration" />
        <h3>WEBSITE DESIGN</h3>
        <p>
          We believe that the right design following correct design patterns can
          provide a superior web experience for users. It is our core principle
          to make meaningful design with passion.
        </p>
        <Link to="/services/web-design">
          <img src={arr} className="icon2" alt="Arrow pointing to the right" />
        </Link>
      </div>
      <div className="item">
        <img src={icon2} className="icon1" alt="Design illustration" />
        <h3>SEO</h3>
        <p>
          All the work you put into your website would go in vain if no one
          could see it, right? That is why we offer Search Engine Optimization
          services to make your website visible to users looking for services
          you offer.
        </p>
        <Link to="/services/seo">
          <img src={arr} className="icon2" alt="Arrow pointing to the right" />
        </Link>
      </div>
      <div className="item">
        <img src={icon3} className="icon1" alt="Design illustration" />
        <h3>E-COMMERCE</h3>
        <p>
          Online shopping is growing in popularity day by day. Make your
          business stand out in that field with our custom service and find your
          way to web customers all over the world.
        </p>
        <Link to="/services/e-commerce">
          <img src={arr} className="icon2" alt="Arrow pointing to the right" />
        </Link>
      </div>
      <div className="item">
        <img src={icon4} className="icon1" alt="Design illustration" />
        <h3>LOCAL SEO</h3>
        <p>
          Make sure visitors in your area will be informed about your store.
          Specificaly target the area your business is operating in and enjoy
          new customers.
        </p>
        <Link to="/services/seo">
          <img src={arr} className="icon2" alt="Arrow pointing to the right" />
        </Link>
      </div>
    </section>
  );
}

export default Services;
