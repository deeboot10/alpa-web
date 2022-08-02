import { Link } from "react-router-dom";
import icon from "../../../img/servicesIllustration1.svg";
import img from "../../../img/servicesImg4.svg";

function WebDesignServices() {
  return (
    <section className="web-design-services">
      <div className="head">
        <span>Alpa</span>
        <h1>Web Design Services</h1>
      </div>
      <div className="body">
        <div className="img">
          <img src={img} alt="Working on laptop" />
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
                <img src={icon} alt="Illustration" />
              </div>
              Website Design & Development
            </div>
            <div className="item">
              <div className="icon-container">
                <img src={icon} alt="Illustration" />
              </div>
              Branding
            </div>
            <div className="item">
              <div className="icon-container">
                <img src={icon} alt="Illustration" />
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
