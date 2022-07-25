import { Link } from "react-router-dom";
import image from "../../img/heroImg.png";
function Hero() {
  return (
    <section className="hero">
      <div className="text">
        <h1>Web Design And SEO Agency That Generates More Leads</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <Link to="get-in-touch">
          <button>Get a free SEO consultation</button>
        </Link>
      </div>
      <div className="img">
        <img src={image} alt="Laptop with many websites open inside of it" />
      </div>
    </section>
  );
}

export default Hero;
