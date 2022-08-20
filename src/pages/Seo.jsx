import { Link } from "react-router-dom";
import bg from "../img/aboutUsMainBg.png";
import arr from "../img/arrRight.svg";
import img1 from "../img/servicesImg1.png";
import dots from "../img/dots.svg";
import img from "../img/servicesImg2.png";
import img2 from "../img/servicesImg3.png";
import icon1 from "../img/servicesIllustration1.svg";

function Seo() {
  return (
    <div className="seo">
      <section className="seo-hero" style={{ backgroundImage: `url(${bg})` }}>
        <span>Agency that works with You</span>
        <h1>Search Engine Optimisation (SEO) Services</h1>
        <Link to="get-started">
          <button className="white-btn">
            Get Started <img src={arr} alt="Arrow pointing to right"></img>
          </button>
        </Link>
      </section>
      <section className="sub-hero">
        <div className="text">
          <span>SEO - Web Design - Ads </span>
          <h2>Website Design for Your Business</h2>
          <p>
            Alpa Digital can meet all of your needs for website design. There
            are many ways that design may make our lives easier. Every place
            where people have lived has some sort of design, whether it's to
            address an immediate issue or create the foundation for an entirely
            new undertaking.
          </p>
          <p>
            Professional designers focus on what makes one design stand out from
            another. Then they start attempting to deliver the best outcome. At
            Alpa Digital, we think that an organization's branding, websites,
            and mobile applications can all significantly affect how well the
            business thrives.
          </p>
          <Link to="/services/web-design">
            <button>Learn More</button>
          </Link>
        </div>
        <div className="img">
          <img
            className="real-img"
            src={img1}
            alt="Two people discussing solutions on pc"
          />
          <img className="dots" src={dots} alt="Background svg texture" />
          <img className="dots1" src={dots} alt="Background svg texture" />
        </div>
      </section>
      <section
        className="banner-one"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="text">
          <span>GETTING MORE LEADS DOESN'T HAVE TO BE HARD</span>
          <h3>We are here to help you grow.</h3>
          <p>Get in touch with us and our team</p>
          <Link to="/consultation">
            <button>Free consultation</button>
          </Link>
        </div>
        <div className="overlay"></div>
        <div className="underlay"></div>
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
      <section
        className="banner-two"
        style={{ backgroundImage: `url(${img2})` }}
      >
        <div className="text">
          <span>Web design and Development</span>
          <h3>We are here to help you grow.</h3>
          <p>
            Since each customer and each project is different, we always begin
            by getting to know your company's needs and online goals.
            Understanding your expectations and how we can support your success
            is the first step in making sure you obtain a results-driven
            solution. We'll lay the groundwork for the rest of your project
            during the discovery phase.
          </p>
          <Link to="/consultation">
            <button>Free web solutions</button>
          </Link>
        </div>
        <div className="overlay"></div>
        <div className="underlay"></div>
      </section>
      <section className="work-together">
        <h2>Let's Work Together!</h2>
        <p>
          Need a quote on a re-design or a new project? Give us a bit of detail
        </p>
        <p>on your project and let us help!</p>
        <Link to="/get-started">
          <button className="btn-special">START A PROJECT</button>
        </Link>
      </section>
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
    </div>
  );
}

export default Seo;
