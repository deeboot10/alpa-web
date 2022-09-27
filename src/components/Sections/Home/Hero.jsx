import { Link } from "react-router-dom";
import image from "../../../img/heroImg.webp";
import circleArrow from "../../../img/circleArrow.svg";
import mainBg from "../../../img/pattern.svg";
import vectors from "../../../img/vectors.svg";
function Hero() {
  return (
    <section className="hero" style={{ backgroundImage: `url(${mainBg})` }}>
      <div className="content">
        <div className="text">
          <Link to="/contact">
            <button className="secondary-btn">
              Get a free audit{" "}
              <img
                src={circleArrow}
                alt="Arrow pointing to the right in a circle"
              />
            </button>
          </Link>
          <h1>
            Agency that <br /> generates more <br />
            <span>leads for you.</span>
          </h1>
          <p className="paragraph">
            It is our goal to never do things just to get them done, our main
            source of inspiration are good deeds do along the way. That is how
            our products stand out
          </p>
          <div className="buttons">
            <Link to="/contact">
              <button className="primary-btn">Free consultation</button>
            </Link>
            <Link to="/contact" className="second-btn">
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
          <img
            className="main-img"
            src={image}
            alt="Laptop with many websites open inside of it"
          />
          <img src={vectors} alt="Vector background" className="vectors" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
