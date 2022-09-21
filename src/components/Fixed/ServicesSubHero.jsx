import { BrowserView } from "react-device-detect";
import icon1 from "../../img/servicesIllustration1.svg";
import icon2 from "../../img/servicesIllustration2.svg";
import icon3 from "../../img/servicesIllustration3.svg";
import blueArr from "../../img/arrRightBlue.svg";
import { Link } from "react-router-dom";

function ServicesSubHero() {
  return (
    <>
      <div className="item">
        <div className="icon-container">
          <img src={icon1} alt="Web design illustration" />
        </div>
        <h3>WEBSITE DESIGN</h3>
        <p>
          We believe that the right design following correct design patterns can
          provide a superior web experience for users. It is our core principle
          to make meaningful design with passion.
        </p>
        <Link to="/services/web-design">
          <img src={blueArr} alt="Blue arrow pointing to right" />
        </Link>
      </div>
      <div className="item">
        <div className="icon-container">
          <img src={icon2} alt="Web design illustration" />
        </div>
        <h3>SEO</h3>
        <p>
          All the work you put into your website would go in vain if no one
          could see it, right? That is why we offer Search Engine Optimization
          services to make your website visible to users looking for services
          you offer.
        </p>
        <Link to="/services/seo">
          <img src={blueArr} alt="Blue arrow pointing to right" />
        </Link>
      </div>
      <div className="item">
        <div className="icon-container">
          <img src={icon3} alt="Web design illustration" />
        </div>
        <h3>E-COMMERCE</h3>
        <p>
          Online shopping is growing in popularity day by day. Make your
          business stand out in that field with our custom service and find your
          way to web customers all over the world.
        </p>
        <Link to="/services/e-commerce">
          <img src={blueArr} alt="Blue arrow pointing to right" />
        </Link>
      </div>
    </>
  );
}

export default ServicesSubHero;
