import { Link } from "react-router-dom";
import icon1 from "../../../img/servicesIllustration1.svg";

function AllServices() {
  return (
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
              Your firm will appear professional and reliable online if it has a
              nice and functional website. Customers will be able to simply
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
              Your firm will appear professional and reliable online if it has a
              nice and functional website. Customers will be able to simply
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
              Your firm will appear professional and reliable online if it has a
              nice and functional website. Customers will be able to simply
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
              Your firm will appear professional and reliable online if it has a
              nice and functional website. Customers will be able to simply
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
              Your firm will appear professional and reliable online if it has a
              nice and functional website. Customers will be able to simply
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
              Your firm will appear professional and reliable online if it has a
              nice and functional website. Customers will be able to simply
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
              Your firm will appear professional and reliable online if it has a
              nice and functional website. Customers will be able to simply
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
              Your firm will appear professional and reliable online if it has a
              nice and functional website. Customers will be able to simply
              locate you and understand what you have to offer.
            </p>
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

export default AllServices;
