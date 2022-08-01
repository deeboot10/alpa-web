import arr from "../img/arrRight.svg";
import arrWhite from "../img/arrRightWhite.svg";
import { Link } from "react-router-dom";
import bg from "../img/aboutUsMainBg.png";
import img1 from "../img/about1.svg";
import img2 from "../img/about2.svg";
function About() {
  return (
    <div className="about">
      <section className="hero" style={{ backgroundImage: `url(${bg})` }}>
        <span>Agency that works with You</span>
        <h1>About Us</h1>
        <Link to="get-started">
          <button className="white-btn">
            Get Started <img src={arr} alt="Arrow pointing to right"></img>
          </button>
        </Link>
      </section>
      <section className="who">
        <div className="text">
          <h2>WHO WE ARE AND WHAT WE DO</h2>
          <p>
            Alpa Digital is a leading supplier of great web design and
            development services as well as a variety of internet development
            and marketing solutions for businesses of all shapes and sizes. It
            is an original, creative, talented, and results-driven digital firm.
          </p>
          <br />
          <p>
            We take huge satisfaction in our commitment to continually produce
            fresh ideas led by our laser-like focus on achieving goals and
            achieveing client satisfaction.
          </p>
        </div>
        <div className="img">
          <img src={img1} alt="Man working at the desk" />
        </div>
      </section>
      <section className="goal-driven">
        <div className="img">
          <img src={img2} alt="Man working at the desk" />
        </div>
        <div className="text">
          <h2>GOAL-DRIVEN ORGANIZATION</h2>
          <p>
            In order to create a remarkable online experience that leads to
            success, we are collaborating with small companies, legal firms,
            real estate agents, healthcare institutions, and more.
          </p>
          <br />
          <p>
            For us, establishing trusting relationships with our customers is
            crucial, and their pleasure is what drives us. We continually make
            development investments with the goal of offering premium services
            at reasonable prices.
          </p>
          <br />
          <p>
            We provide a successful online experience that will accelerate the
            overall growth of your business by utilizing cutting-edge
            technologies.
          </p>
        </div>
      </section>
      <section className="motto">
        <h3>
          We are problem solvers, and we strive every day to offer solutions
          that will advance your company.
        </h3>
        <Link to="get-started">
          <button className="black-btn">
            Get Started <img src={arrWhite} alt="Arrow pointing to right"></img>
          </button>
        </Link>
      </section>
    </div>
  );
}

export default About;
