import { Link } from "react-router-dom";
import icon1 from "../../../img/servicesIllustration1.svg";
import icon2 from "../../../img/servicesIllustration2.svg";
import icon3 from "../../../img/servicesIllustration3.svg";
import icon4 from "../../../img/servicesIllustration4.svg";
import icon5 from "../../../img/servicesIllustration5.svg";
import icon6 from "../../../img/servicesIllustration6.svg";
import icon7 from "../../../img/servicesIllustration7.svg";
import icon8 from "../../../img/servicesIllustration8.svg";

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
            <img src={icon2} alt="Illustration" />
          </div>
          <div className="text">
            <span>Online Paid Advertising (PPC)</span>
            <p>
              Your company will appear professional and reliable online only if
              it has a nice and functional website. Customers will be able to
              simply locate you and understand what you have to offer.
            </p>
          </div>
        </div>
        <div className="item">
          <div className="icon-container">
            <img src={icon3} alt="Illustration" />
          </div>
          <div className="text">
            <span>Search Engine Optimisation(SEO)</span>
            <p>
              Your firm will appear professional and reliable online if it has a
              nice and functional website. Customers will be able to simply
              locate you and understand what you have to offer.
            </p>
          </div>
        </div>
        <div className="item">
          <div className="icon-container">
            <img src={icon4} alt="Illustration" />
          </div>
          <div className="text">
            <span>Website Audit</span>
            <p>
              Your firm will appear professional and reliable online if it has a
              nice and functional website. Customers will be able to simply
              locate you and understand what you have to offer.
            </p>
          </div>
        </div>
        <div className="item">
          <div className="icon-container">
            <img src={icon5} alt="Illustration" />
          </div>
          <div className="text">
            <span>Website Development</span>
            <p>
              Your firm will appear professional and reliable online if it has a
              nice and functional website. Customers will be able to simply
              locate you and understand what you have to offer.
            </p>
          </div>
        </div>
        <div className="item">
          <div className="icon-container">
            <img src={icon6} alt="Illustration" />
          </div>
          <div className="text">
            <span>Content Strategy</span>
            <p>
              Your firm will appear professional and reliable online if it has a
              nice and functional website. Customers will be able to simply
              locate you and understand what you have to offer.
            </p>
          </div>
        </div>
        <div className="item">
          <div className="icon-container">
            <img src={icon7} alt="Illustration" />
          </div>
          <div className="text">
            <span>Local SEO</span>
            <p>
              Your firm will appear professional and reliable online if it has a
              nice and functional website. Customers will be able to simply
              locate you and understand what you have to offer.
            </p>
          </div>
        </div>
        <div className="item">
          <div className="icon-container">
            <img src={icon8} alt="Illustration" />
          </div>
          <div className="text">
            <span>Ecomrece SEO</span>
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
