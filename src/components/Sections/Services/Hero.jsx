import { Link } from "react-router-dom";
import arr from "../../../img/arrRight.svg";
import blueArr from "../../../img/arrRightBlue.svg";
import icon1 from "../../../img/servicesIllustration1.svg";
import icon2 from "../../../img/servicesIllustration2.svg";
import icon3 from "../../../img/servicesIllustration3.svg";
import bg from "../../../img/aboutUsMainBg.png";

function Hero() {
  return (
    <section className="hero" style={{ backgroundImage: `url(${bg})` }}>
      <div className="text">
        <span>Agency That Works With You</span>
        <h1>Alpa Services & Strategies that grow your online presence</h1>
        <Link to="get-started">
          <button className="black-btn">
            Get Started <img src={arr} alt="Arrow pointing to right"></img>
          </button>
        </Link>
      </div>
      <div className="items">
        <div className="item">
          <div className="icon-container">
            <img src={icon1} alt="Web design illustration" />
          </div>
          <h3>WEBSITE DESIGN</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate
          </p>
          <Link to="/services/web-design">
            <img src={blueArr} alt="Blue arrow pointing to right" />
          </Link>
        </div>
        <div className="item">
          <div className="icon-container">
            <img src={icon3} alt="Web design illustration" />
          </div>
          <h3>PPC</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate
          </p>
          <Link to="/services/web-design">
            <img src={blueArr} alt="Blue arrow pointing to right" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
