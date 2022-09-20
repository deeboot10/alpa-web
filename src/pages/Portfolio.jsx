import WorkTogether from "../components/Fixed/WorkTogether";
import web1 from "../img/portfolio-kraljicakafa.webp";
import web2 from "../img/portfolio-appainu.webp";
import web3 from "../img/portfolio-marusa.webp";
import web4 from "../img/portfolio-web3cf.webp";
import web5 from "../img/potrfolio-teenapesquad.webp";
function Portoflio() {
  return (
    <div className="portfolio">
      <section className="hero">
        <div className="text">
          <h1>
            Our <span>Website Design</span> Portfolio
          </h1>
          <p>Our work doesn't just look good. It is a first step forward.</p>
        </div>
        <div className="showcase">
          <img src={web1} alt="Portfolio website for showcase" />
          <div className="info">
            <h3>Coffee resale - Kraljica Kafa</h3>
            <div className="line"></div>
            <p>SEO • Web Design • Web Development • E-Commerce</p>
          </div>
        </div>
      </section>
      <section className="our-work">
        <div className="showcase">
          <img src={web2} alt="Portfolio website for showcase" />
          <div className="info">
            <h3>Cryptocurrency - Appa Inu</h3>
            <div className="line"></div>
            <p>SEO • Web Design • Web Development</p>
          </div>
        </div>
        <div className="showcase">
          <img src={web3} alt="Portfolio website for showcase" />
          <div className="info">
            <h3>Work Shop - Machine Center Marušić</h3>
            <div className="line"></div>
            <p>SEO • Web Design • Web Development</p>
          </div>
        </div>
        <div className="showcase">
          <img src={web4} alt="Portfolio website for showcase" />
          <div className="info">
            <h3>Web3 Community - Web3 Central Florida</h3>
            <div className="line"></div>
            <p>SEO • Web Design • Web Development</p>
          </div>
        </div>
        <div className="showcase">
          <img src={web5} alt="Portfolio website for showcase" />
          <div className="info">
            <h3>Nft Collection - Teen Ape Squad</h3>
            <div className="line"></div>
            <p>SEO • Web Design • Web Development • PPC</p>
          </div>
        </div>
      </section>
      <WorkTogether></WorkTogether>
    </div>
  );
}

export default Portoflio;
