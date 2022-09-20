import { Link } from "react-router-dom";
import bg from "../img/aboutUsMainBg.webp";
import arr from "../img/arrRight.svg";
import img1 from "../img/servicesImg1.webp";
import dots from "../img/dots.svg";
import img from "../img/servicesImg2.webp";
import img2 from "../img/servicesImg3.webp";
import blueArr from "../img/arrRightBlue.svg";
import icon1 from "../img/servicesIllustration1.svg";
import icon2 from "../img/servicesIllustration2.svg";
import icon3 from "../img/servicesIllustration3.svg";
import AllServices from "../components/Sections/Services/AllServices";
import WorkTogether from "../components/Fixed/WorkTogether";
function WebDevelopment() {
  return (
    <div className="web-design">
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
        <div className="items">
          <div className="item">
            <div className="icon-container">
              <img src={icon1} alt="Web design illustration" />
            </div>
            <h3>WEBSITE DESIGN</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
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
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate
            </p>
            <Link to="/services/seo">
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
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate
            </p>
            <Link to="/services/e-commerce">
              <img src={blueArr} alt="Blue arrow pointing to right" />
            </Link>
          </div>
        </div>
      </section>
      <div style={{ marginTop: 200 }}></div>
      <AllServices></AllServices>
    </div>
  );
}

export default WebDevelopment;
