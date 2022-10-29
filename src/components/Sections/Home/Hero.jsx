import { Link } from "react-router-dom";
import image from "../../../img/heroImg.webp";
import circleArrow from "../../../img/circleArrow.svg";
import circleArrowWhite from "../../../img/arrow-right-white.svg";
import mainBg from "../../../img/bg-hero.png";
import vectors from "../../../img/vectors.svg";

function Hero() {
  return (
    <section className="hero" style={{ backgroundImage: `url(${mainBg})` }}>
      <div className="bg"></div>
      <div className="content">
        <div className="text">
          <h1>
            Website & <span>Brand</span> <br />
            <span>Building</span> Agency
          </h1>
          <div className="buttons">
            <Link to="/contact">
              <button className="primary-btn">
                Work with Us{" "}
                <img
                  src={circleArrow}
                  alt="Arrow pointing to the right in a circle"
                />
              </button>
            </Link>
            <Link to="/portfolio" className="second-btn">
              <button className="secondary-btn">
                Our Work
                <img
                  src={circleArrowWhite}
                  alt="Arrow pointing to the right in a circle"
                />
              </button>
            </Link>
          </div>
          <p className="paragraph ">
            It is our goal to never do things just to get them done, our main
            source of inspiration are good deeds do along the way. That is how
            our products stand out
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
