import { Link } from "react-router-dom";
import icon1 from "../img/subhero-icon4.svg";
import icon2 from "../img/servicesIllustration1.svg";
import icon3 from "../img/subhero-icon5.svg";
import blueArr from "../img/arrRightBlue.svg";

import bg from "../img/services-bg4.webp";
import arr from "../img/arrRight.svg";
import AllServices from "../components/Sections/Services/AllServices";
import { Helmet } from "react-helmet";
import { BrowserView, MobileView } from "react-device-detect";
import ServicesSubHero from "../components/Fixed/ServicesSubHero";
function WebDevelopment() {
  return (
    <div className="web-design">
      <Helmet>
        <title>Alpa Digital Agency | Web Development</title>
      </Helmet>
      <section
        className="web-design-hero"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="text">
          <span>Agency That Works With You</span>
          <h1>Website Development Services</h1>
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
              <h3>WEBSITE DEVELOPMENT</h3>
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
              <h3>WEBSITE DESIGN</h3>
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
              <h3>E-COMMERCE DEVELOPMENT</h3>
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
      <BrowserView style={{ marginTop: 200 }}></BrowserView>
      <MobileView className="items">
        <ServicesSubHero></ServicesSubHero>
      </MobileView>
      <AllServices></AllServices>
    </div>
  );
}

export default WebDevelopment;
