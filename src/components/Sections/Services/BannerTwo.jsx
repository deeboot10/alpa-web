import { Link } from "react-router-dom";
import img from "../../../img/servicesImg3.png";

function BannerTwo() {
  return (
    <section className="banner-two" style={{ backgroundImage: `url(${img})` }}>
      <div className="text">
        <span>Web design and Development</span>
        <h3>We are here to help you grow.</h3>
        <p>
          Since each customer and each project is different, we always begin by
          getting to know your company's needs and online goals. Understanding
          your expectations and how we can support your success is the first
          step in making sure you obtain a results-driven solution. We'll lay
          the groundwork for the rest of your project during the discovery
          phase.
        </p>
        <Link to="/consultation">
          <button>Free web solutions</button>
        </Link>
      </div>
      <div className="overlay"></div>
      <div className="underlay"></div>
    </section>
  );
}

export default BannerTwo;
