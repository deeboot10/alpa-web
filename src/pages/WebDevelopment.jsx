import { Link } from "react-router-dom";
import bg from "../img/services-bg4.webp";
import arr from "../img/arrRight.svg";
import AllServices from "../components/Sections/Services/AllServices";
import { Helmet } from "react-helmet";
import { BrowserView, MobileView } from "react-device-detect";
import ServicesSubHero from "../components/Fixed/ServicesSubHero";
function WebDevelopment() {
  return (
    <div className="web-design">
      <Helmet>
        <title>Alpa Digital Agency | Web Development</title>
      </Helmet>
      <section
        className="web-design-hero"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="text">
          <span>Agency That Works With You</span>
          <h1>Website Development Services</h1>
          <Link to="/contact">
            <button className="black-btn">
              Get Started <img src={arr} alt="Arrow pointing to right"></img>
            </button>
          </Link>
        </div>
        <BrowserView className="items">
          <ServicesSubHero></ServicesSubHero>
        </BrowserView>
      </section>
      <BrowserView style={{ marginTop: 200 }}></BrowserView>
      <MobileView className="items">
        <ServicesSubHero></ServicesSubHero>
      </MobileView>
      <AllServices></AllServices>
    </div>
  );
}

export default WebDevelopment;
