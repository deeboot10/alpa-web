import logo1 from "../../../img/portfolio-img/logo1.png";
import bg1 from "../../../img/portfolio-img/bg1.webp";
import color1 from "../../../img/portfolio-img/color1.svg";
import logo2 from "../../../img/portfolio-img/logo2.svg";
import bg2 from "../../../img/portfolio-img/bg2.webp";
import color2 from "../../../img/portfolio-img/color2.svg";
import logo3 from "../../../img/portfolio-img/logo3.webp";
import bg3 from "../../../img/portfolio-img/bg3.webp";
import color3 from "../../../img/portfolio-img/color3.svg";
import logo4 from "../../../img/portfolio-img/logo4.svg";
import bg4 from "../../../img/portfolio-img/bg4.webp";
import color4 from "../../../img/portfolio-img/color4.svg";
import logo5 from "../../../img/portfolio-img/logo5.png";
import bg5 from "../../../img/portfolio-img/bg5.webp";
import color5 from "../../../img/portfolio-img/color5.svg";

import { Link } from "react-router-dom";
function Portfolio() {
  return (
    <section className="portfolio">
      <h2>WEBSITE DESIGN</h2>
      <p className="paragraph">
        A great website should be both visually appealing and SEO optimized.
        Visitors should be able to interact with the website's useful and
        appealing design, as well as find it using search. In this way, a
        website visitor is transformed into a lead.
      </p>
      <div className="grid">
        <a href="https://kraljicakafa.com/" target="_blank" className="item">
          <div className="imgs">
            <img className="main" src={bg1} alt="Portfolio website 1" />
            <img src={color1} className="color" alt="Color website 1" />
            <div className="logo">
              <img src={logo1} alt="Logo website 1" />
            </div>
          </div>
          <div className="text">
            <span className="label">WEBSHOP</span>
            <h4>Kraljica coffee ☕</h4>
            <p>
              Kraljica coffee is an online marketplace for one of leading coffee
              brands in Serbia. First of its kind.
            </p>
            <span className="link">Go to website</span>
          </div>
        </a>
        <a href="https://appainu.org/" target="_blank" className="item">
          <div className="imgs">
            <img className="main" src={bg2} alt="Portfolio website 2" />
            <img src={color2} className="color" alt="Color website 2" />
            <div className="logo">
              <img src={logo2} alt="Logo website 2" />
            </div>
          </div>
          <div className="text">
            <span className="label">CRYPTOCURRENCY</span>
            <h4>Appa Inu Coin ☁️</h4>
            <p>
              Appa Inu is a promising new Cryptocurrency setting its foot in the
              worlds newest industry.
            </p>
            <span className="link">Go to website</span>
          </div>
        </a>
        <a
          href="https://marusa-2d821.web.app/"
          target="_blank"
          className="item"
        >
          <div className="imgs">
            <img className="main" src={bg3} alt="Portfolio website 3" />
            <img src={color3} className="color" alt="Color website 3" />
            <div className="logo">
              <img src={logo3} alt="Logo website 3" />
            </div>
          </div>
          <div className="text">
            <span className="label">LANDING PAGE</span>
            <h4>Machine Center Marušić 🛠️</h4>
            <p>Landing page for Machine Center Located in Serbia.</p>
            <span className="link">Go to website</span>
          </div>
        </a>
        <a href="https://web3-cfl.web.app/" target="_blank" className="item">
          <div className="imgs">
            <img className="main" src={bg4} alt="Portfolio website 4" />
            <img src={color4} className="color" alt="Color website 4" />
            <div className="logo">
              <img src={logo4} alt="Logo website 4" />
            </div>
          </div>
          <div className="text">
            <span className="label">WEB3</span>
            <h4>Central Florida Web3 Community 🌐</h4>
            <p>
              Provide IRL Web3 events centered around Culture supporting Central
              Florida creatives. Exposing people to Web3 through the things they
              know and love. Games, Art, Music , Memes.
            </p>
            <span className="link">Go to website</span>
          </div>
        </a>
        <a
          href="https://teen-ape-squad.web.app/"
          target="_blank"
          className="item"
        >
          <div className="imgs">
            <img className="main" src={bg5} alt="Portfolio website 5" />
            <img src={color5} className="color" alt="Color website 5" />
            <div className="logo">
              <img src={logo5} alt="Logo website 5" />
            </div>
          </div>
          <div className="text">
            <span className="label">NFT COLLECTION</span>
            <h4>Teen Ape Squad 🐒</h4>
            <p>
              Teen Ape Squad is a NFT collection of 9,999 NFTs living in the
              Metaverse. Our goal is to onboard millions to the NFT space and to
              make the world a better place.
            </p>
            <span className="link">Go to website</span>
          </div>
        </a>
      </div>
      <Link className="btn-link" to="/portfolio">
        <button>WEBSITE CASE STUDIES & PRICING</button>
      </Link>
    </section>
  );
}

export default Portfolio;
