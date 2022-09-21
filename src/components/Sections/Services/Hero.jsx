import { Link } from "react-router-dom";
import arr from "../../../img/arrRight.svg";
import blueArr from "../../../img/arrRightBlue.svg";
import icon1 from "../../../img/servicesIllustration1.svg";
import icon2 from "../../../img/servicesIllustration2.svg";
import icon3 from "../../../img/servicesIllustration3.svg";
import bg from "../../../img/aboutUsMainBg.webp";
import { BrowserView, MobileView } from "react-device-detect";
import ServicesSubHero from "../../Fixed/ServicesSubHero";

function Hero() {
  return (
    <>
      <section className="hero" style={{ backgroundImage: `url(${bg})` }}>
        <div className="text">
          <span>Agency That Works With You</span>
          <h1>Alpa Services & Strategies that grow your online presence</h1>
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
      <MobileView className="items">
        <ServicesSubHero></ServicesSubHero>
      </MobileView>
    </>
  );
}

export default Hero;
