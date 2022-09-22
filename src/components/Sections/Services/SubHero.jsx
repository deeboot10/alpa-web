import { Link } from "react-router-dom";
import img1 from "../../../img/servicesImg1.webp";
import dots from "../../../img/dots.svg";

function SubHero() {
  return (
    <section className="sub-hero">
      <div className="text">
        <span>SEO - Web Design - Brand Strategy </span>
        <h2>Website Design for Your Business</h2>
        <p>
          Alpa Digital can meet all of your needs for website design. There are
          many ways that design may make our lives easier. Every place where
          people have lived has some sort of design, whether it's to address an
          immediate issue or create the foundation for an entirely new
          undertaking.
        </p>
        <p>
          Professional designers focus on what makes one design stand out from
          another. Then they start attempting to deliver the best outcome. At
          Alpa Digital, we think that an organization's branding, websites, and
          mobile applications can all significantly affect how well the business
          thrives.
        </p>
        <Link to="/services/web-design">
          <button>Learn More</button>
        </Link>
      </div>
      <div className="img">
        <img
          className="real-img"
          src={img1}
          alt="Two people discussing solutions on pc"
        />
        <img className="dots" src={dots} alt="Background svg texture" />
        <img className="dots1" src={dots} alt="Background svg texture" />
      </div>
    </section>
  );
}

export default SubHero;
