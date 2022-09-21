import { Link } from "react-router-dom";
import bg from "../img/aboutUsMainBg.webp";
import arr from "../img/arrRight.svg";
import img1 from "../img/servicesImg1.webp";
import dots from "../img/dots.svg";
import img from "../img/servicesImg2.webp";
import img2 from "../img/servicesImg3.webp";
import blueArr from "../img/arrRightBlue.svg";
import icon1 from "../img/servicesIllustration1.svg";
import icon2 from "../img/servicesIllustration2.svg";
import icon3 from "../img/servicesIllustration3.svg";
import AllServices from "../components/Sections/Services/AllServices";
import WorkTogether from "../components/Fixed/WorkTogether";
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
