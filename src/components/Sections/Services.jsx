import icon1 from "../../img/svgIcon1.svg";
import icon2 from "../../img/svgIcon2.svg";
import icon3 from "../../img/svgIcon3.svg";
import icon4 from "../../img/svgIcon4.svg";
import arr from "../../img/arrRight.svg";
import { Link } from "react-router-dom";
import bg from "../../img/servicesBg.svg";
import mainBg from "../../img/mainBg.svg";

function Services() {
  return (
    <section
      style={{
        backgroundImage: `url(${bg}), url(${mainBg})`,
      }}
      className="services"
    >
      <div className="item">
        <img src={icon1} className="icon1" alt="Design illustration" />
        <h3>WEBSITE DESIGN</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate
        </p>
        <Link to="/services/website-design">
          <img src={arr} className="icon2" alt="Arrow pointing to the right" />
        </Link>
      </div>
      <div className="item">
        <img src={icon2} className="icon1" alt="Design illustration" />
        <h3>SEO</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate
        </p>
        <Link to="/services/website-design">
          <img src={arr} className="icon2" alt="Arrow pointing to the right" />
        </Link>
      </div>
      <div className="item">
        <img src={icon3} className="icon1" alt="Design illustration" />
        <h3>PAY PER CLICK</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate
        </p>
        <Link to="/services/website-design">
          <img src={arr} className="icon2" alt="Arrow pointing to the right" />
        </Link>
      </div>
      <div className="item">
        <img src={icon4} className="icon1" alt="Design illustration" />
        <h3>LOCAL SEO</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate
        </p>
        <Link to="/services/website-design">
          <img src={arr} className="icon2" alt="Arrow pointing to the right" />
        </Link>
      </div>
    </section>
  );
}

export default Services;
