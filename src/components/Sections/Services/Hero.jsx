import { Link } from "react-router-dom";
import arr from "../../../img/arrRight.svg";
import blueArr from "../../../img/arrRightBlue.svg";
import icon1 from "../../../img/servicesIllustration1.svg";
import icon2 from "../../../img/subhero-icon1.svg";
import icon3 from "../../../img/subhero-icon2.svg";
import bg from "../../../img/services-bg1.png";
import { BrowserView, MobileView } from "react-device-detect";
import ServicesSubHero from "../../Fixed/ServicesSubHero";

function Hero() {
  return (
    <>
      <section className="hero" style={{ backgroundImage: `url(${bg})` }}>
        <div className="text">
          <span>Agency That Works With You</span>
          <h1>Alpa Services & Strategies that grow your online presence</h1>
          <Link to="/contact">
            <button className="black-btn">
              Get Started <img src={arr} alt="Arrow pointing to right"></img>
            </button>
          </Link>
        </div>
        <BrowserView className="items">
          <div className="content">
            <div className="item">
              <div className="icon-container">
                <img src={icon1} alt="Web design illustration" />
              </div>
              <h3>WEBSITE DESIGN</h3>
              <p>
                We believe that the right design following correct design
                patterns can provide a superior web experience for users. It is
                our core principle to make meaningful design with passion.
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
                All the work you put into your website would go in vain if no
                one could see it, right? That is why we offer Search Engine
                Optimization services to make your website visible to users
                looking for services you offer.
              </p>
              <Link to="/services/seo">
                <img src={blueArr} alt="Blue arrow pointing to right" />
              </Link>
            </div>
            <div className="item">
              <div className="icon-container">
                <img src={icon3} alt="Web design illustration" />
              </div>
              <h3>BRANDING</h3>
              <p>
                Online shopping is growing in popularity day by day. Make your
                business stand out in that field with our custom service and
                find your way to web customers all over the world.
              </p>
              <Link to="/services/e-commerce">
                <img src={blueArr} alt="Blue arrow pointing to right" />
              </Link>
            </div>
          </div>
        </BrowserView>
      </section>
      <MobileView className="items">
        <ServicesSubHero></ServicesSubHero>
      </MobileView>
    </>
  );
}

export default Hero;
