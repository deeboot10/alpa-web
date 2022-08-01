import { Link } from "react-router-dom";
import image from "../../../img/heroImg.png";
import circleArrow from "../../../img/circleArrow.svg";
import mainBg from "../../../img/mainBg.svg";
function Hero() {
  return (
    <section className="hero" style={{ backgroundImage: `url(${mainBg})` }}>
      <div className="text">
        <Link to="get-in-touch">
          <button className="secondary-btn">
            Get a free audit{" "}
            <img
              src={circleArrow}
              alt="Arrow pointing to the right in a circle"
            />
          </button>
        </Link>
        <h1>
          Agency that <br /> generates more <br /> <span>leads for you.</span>
        </h1>
        <p className="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco
        </p>
        <div className="buttons">
          <Link to="get-in-touch">
            <button className="primary-btn">Get a free SEO consultation</button>
          </Link>
          <Link to="get-started" className="second-btn">
            <button className="secondary-btn">
              Get started
              <img
                src={circleArrow}
                alt="Arrow pointing to the right in a circle"
              />
            </button>
          </Link>
        </div>
      </div>
      <div className="img">
        <img src={image} alt="Laptop with many websites open inside of it" />
      </div>
    </section>
  );
}

export default Hero;
