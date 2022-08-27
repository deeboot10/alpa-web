import { Link } from "react-router-dom";
import bg from "../img/aboutUsMainBg.png";
import arr from "../img/arrRight.svg";
import img1 from "../img/servicesImg1.png";
import dots from "../img/dots.svg";
import img from "../img/servicesImg2.png";
import img2 from "../img/servicesImg3.png";
import blueArr from "../img/arrRightBlue.svg";
import icon1 from "../img/servicesIllustration1.svg";
import icon2 from "../img/servicesIllustration2.svg";
import icon3 from "../img/servicesIllustration3.svg";
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
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate
            </p>
            <Link to="/services/web-design">
              <img src={blueArr} alt="Blue arrow pointing to right" />
            </Link>
          </div>
        </div>
      </section>
      <section className="all-services">
        <div className="head">
          <span>OUR WEB DESIGN SERVICES</span>
          <h2>How can we help you?</h2>
        </div>
        <div className="grid">
          <div className="item">
            <div className="icon-container">
              <img src={icon1} alt="Illustration" />
            </div>
            <div className="text">
              <span>Website Design</span>
              <p>
                Your firm will appear professional and reliable online if it has
                a nice and functional website. Customers will be able to simply
                locate you and understand what you have to offer.
              </p>
            </div>
          </div>
          <div className="item">
            <div className="icon-container">
              <img src={icon1} alt="Illustration" />
            </div>
            <div className="text">
              <span>Website Design</span>
              <p>
                Your firm will appear professional and reliable online if it has
                a nice and functional website. Customers will be able to simply
                locate you and understand what you have to offer.
              </p>
            </div>
          </div>
          <div className="item">
            <div className="icon-container">
              <img src={icon1} alt="Illustration" />
            </div>
            <div className="text">
              <span>Website Design</span>
              <p>
                Your firm will appear professional and reliable online if it has
                a nice and functional website. Customers will be able to simply
                locate you and understand what you have to offer.
              </p>
            </div>
          </div>
          <div className="item">
            <div className="icon-container">
              <img src={icon1} alt="Illustration" />
            </div>
            <div className="text">
              <span>Website Design</span>
              <p>
                Your firm will appear professional and reliable online if it has
                a nice and functional website. Customers will be able to simply
                locate you and understand what you have to offer.
              </p>
            </div>
          </div>
          <div className="item">
            <div className="icon-container">
              <img src={icon1} alt="Illustration" />
            </div>
            <div className="text">
              <span>Website Design</span>
              <p>
                Your firm will appear professional and reliable online if it has
                a nice and functional website. Customers will be able to simply
                locate you and understand what you have to offer.
              </p>
            </div>
          </div>
          <div className="item">
            <div className="icon-container">
              <img src={icon1} alt="Illustration" />
            </div>
            <div className="text">
              <span>Website Design</span>
              <p>
                Your firm will appear professional and reliable online if it has
                a nice and functional website. Customers will be able to simply
                locate you and understand what you have to offer.
              </p>
            </div>
          </div>
          <div className="item">
            <div className="icon-container">
              <img src={icon1} alt="Illustration" />
            </div>
            <div className="text">
              <span>Website Design</span>
              <p>
                Your firm will appear professional and reliable online if it has
                a nice and functional website. Customers will be able to simply
                locate you and understand what you have to offer.
              </p>
            </div>
          </div>
          <div className="item">
            <div className="icon-container">
              <img src={icon1} alt="Illustration" />
            </div>
            <div className="text">
              <span>Website Design</span>
              <p>
                Your firm will appear professional and reliable online if it has
                a nice and functional website. Customers will be able to simply
                locate you and understand what you have to offer.
              </p>
            </div>
          </div>
        </div>
        <section className="work-together">
          <h2>Let's Work Together!</h2>
          <p>
            Need a quote on a re-design or a new project? Give us a bit of
            detail
          </p>
          <p>on your project and let us help!</p>
          <Link to="/get-started">
            <button className="btn-special">START A PROJECT</button>
          </Link>
        </section>
      </section>
    </div>
  );
}

export default WebDevelopment;
