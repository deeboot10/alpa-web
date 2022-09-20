import arr from "../img/arrRight.svg";
import arrWhite from "../img/arrRightWhite.svg";
import { Link } from "react-router-dom";
import bg from "../img/aboutUsMainBg.webp";
import img1 from "../img/about1.webp";
import img2 from "../img/about2.webp";
import rectangle from "../img/blue-rectangle.svg";
import circle from "../img/blue-circle.svg";
import { MobileView, BrowserView } from "react-device-detect";
function About() {
  return (
    <div className="about">
      <section className="hero" style={{ backgroundImage: `url(${bg})` }}>
        <span>Agency that works with You</span>
        <h1>About Us</h1>
        <Link to="/contact">
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
          <img src={img1} className="main-img" alt="Man working at the desk" />
          <img
            className="rectangle rectangle1"
            src={rectangle}
            alt="svg rectangle"
          />
          <img
            className="rectangle rectangle2"
            src={rectangle}
            alt="svg rectangle"
          />
          <img
            className="rectangle rectangle3"
            src={rectangle}
            alt="svg rectangle"
          />
        </div>
      </section>
      <section className="goal-driven">
        <BrowserView className="img">
          <img className="main-img" src={img2} alt="Man working at the desk" />
          <img className="circle circle1" src={circle} alt="svg circle" />
          <img className="circle circle2" src={circle} alt="svg circle" />
        </BrowserView>
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
        <MobileView className="img">
          <img className="main-img" src={img2} alt="Man working at the desk" />
          <img className="circle circle1" src={circle} alt="svg circle" />
          <img className="circle circle2" src={circle} alt="svg circle" />
        </MobileView>
      </section>
      <section className="motto">
        <h3>
          We are problem solvers, and we strive every day to offer solutions
          that will advance your company.
        </h3>
        <Link to="/contact">
          <button className="black-btn">
            Get Started <img src={arrWhite} alt="Arrow pointing to right"></img>
          </button>
        </Link>
      </section>
    </div>
  );
}

export default About;
