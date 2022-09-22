import { Link } from "react-router-dom";
import icon1 from "../../../img/servicesWebDesignSvg1.svg";
import icon2 from "../../../img/servicesWebDesignSvg2.svg";
import icon3 from "../../../img/servicesWebDesignSvg3.svg";
import img from "../../../img/servicesImg4.webp";
import dots from "../../../img/dots.svg";
import rectangle from "../../../img/blue-rectangle.svg";

function WebDesignServices() {
  return (
    <section className="web-design-services">
      <div className="head">
        <span>Alpa</span>
        <h1>Web Design Services</h1>
      </div>
      <div className="body">
        <div className="img">
          <img className="main-img" src={img} alt="Working on laptop" />
          <img
            className="absolute rectangle1"
            src={rectangle}
            alt="svg rectangle"
          />
          <img
            className="absolute rectangle2"
            src={rectangle}
            alt="svg rectangle"
          />
          <img
            className="absolute rectangle3"
            src={rectangle}
            alt="svg rectangle"
          />
          <img className="absolute dots" src={dots} alt="svg dots background" />
        </div>
        <div className="text">
          <p>
            Powerful graphics design is vital in generating immediate client
            confidence in a visual environment. People believe that a company
            concerned with its own image is also interested with serving the
            needs of its customers.
          </p>
          <p>
            To accurately reflect the quality and style of your business and win
            new clients, you must have a strong, identifiable brand, both online
            and offline.
          </p>
          <div className="items">
            <div className="item">
              <div className="icon-container">
                <img src={icon1} alt="Illustration" />
              </div>
              Website Design & Development
            </div>
            <div className="item">
              <div className="icon-container">
                <img src={icon2} alt="Illustration" />
              </div>
              Branding
            </div>
            <div className="item">
              <div className="icon-container">
                <img src={icon3} alt="Illustration" />
              </div>
              Search Engine Optimization (SEO)
            </div>
          </div>
        </div>
      </div>
      <div className="navigate">
        <div className="text">
          <span>CONTACT US FOR</span>
          <br />
          <span>GROWTH OF YOUR ONLINE BRAND</span>
        </div>
        <div className="buttons">
          <Link to="/contact">
            <button className="primary-btn">Contact Us</button>
          </Link>
          <Link to="/portfolio">
            <button className="secondary-btn">Portfolio</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default WebDesignServices;
