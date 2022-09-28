import { Link } from "react-router-dom";
import bg from "../img/aboutUsMainBg.webp";
import arr from "../img/arrRight.svg";
import img1 from "../img/servicesImg1.webp";
import dots from "../img/dots.svg";
import img from "../img/servicesImg2.webp";
import img2 from "../img/servicesImg3.webp";
import WorkTogether from "../components/Fixed/WorkTogether";
import AllServices from "../components/Sections/Services/AllServices";
import { isMobile } from "react-device-detect";
import { Helmet } from "react-helmet";
function Seo() {
  return (
    <div className="seo">
      <Helmet>
        <title>Alpa Digital Agency | Seo</title>
      </Helmet>
      <section className="seo-hero" style={{ backgroundImage: `url(${bg})` }}>
        <span>Agency that works with You</span>
        <h1>Search Engine Optimisation (SEO) Services</h1>
        <Link to="/contact">
          <button className="white-btn">
            Get Started <img src={arr} alt="Arrow pointing to right"></img>
          </button>
        </Link>
      </section>
      <section className="sub-hero">
        <div className="text">
          <span>SEO - Web Design - Brand Strategy </span>
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
        style={{ backgroundImage: `${isMobile ? "" : "url(" + img + ")"}` }}
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
      <AllServices></AllServices>
      <section
        className="banner-two"
        style={{ backgroundImage: `${isMobile ? "" : "url(" + img2 + ")"}` }}
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
      <WorkTogether></WorkTogether>

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
