import arr from "../img/arrRight.svg";
import arrWhite from "../img/arrRightWhite.svg";
import { Link } from "react-router-dom";
import bg from "../img/aboutUsMainBg.png";
import WorkTogether from "../components/Fixed/WorkTogether";
function ECommerce() {
  return (
    <div className="e-commerce">
      <section className="hero" style={{ backgroundImage: `url(${bg})` }}>
        <span>Agency that works with You</span>
        <h1>E COMMERCE WEB DESIGN & DEVELOPMENT</h1>
        <Link to="/contact">
          <button className="white-btn">
            Get Started <img src={arr} alt="Arrow pointing to right"></img>
          </button>
        </Link>
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

export default ECommerce;
