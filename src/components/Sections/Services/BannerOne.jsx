import { isMobile } from "react-device-detect";
import { Link } from "react-router-dom";
import img from "../../../img/servicesImg2.webp";

function BannerOne() {
  return (
    <section
      className="banner-one"
      style={{ backgroundImage: `${isMobile ? "" : "url(" + img + ")"}` }}
    >
      <div className="text">
        <span>GETTING MORE LEADS DOESN'T HAVE TO BE HARD</span>
        <h3>We are here to help you grow.</h3>
        <p>Get in touch with us and our team</p>
        <Link to="/contact">
          <button>Free consultation</button>
        </Link>
      </div>
      <div className="overlay"></div>
      <div className="underlay"></div>
    </section>
  );
}

export default BannerOne;
