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
              We can run an online paid campaign to promote your products and
              services. Online marketing campaigns have showed significant
              results in all fields because of their ability to target only
              specific audience.
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
              All the work you put into your website would go in vain if no one
              could see it, right? That is why we offer Search Engine
              Optimization services to make your website visible to users
              looking for services you offer.
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
              Get free service and let us review your current websites and give
              you detailed plan of shortcomings and possible improvements. Take
              your business to the next level.
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
              Transition from perfect design to functional code and finally to a
              fully operating website has been the task of our devs for years.
              Always perfecting our skills with your business' goals in mind.
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
              Our content lets users understand your vision and ideas with ease.
              We generate meaningful texts and images that communicate to
              consumers.
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
              Make sure visitors in your area will be informed about your store.
              Specifically target the area your business is operating in and
              enjoy new customers.
            </p>
          </div>
        </div>
        <div className="item">
          <div className="icon-container">
            <img src={icon8} alt="Illustration" />
          </div>
          <div className="text">
            <span>E-commerce SEO</span>
            <p>
              Online shopping is growing in popularity day by day. Make your
              business stand out in that field with our custom service and find
              your way to web customers all over the world.
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
