import { Link } from "react-router-dom";
import arrow from "../../../img/arrowRight.svg";
import illustration from "../../../img/readyIllustration.svg";
function AuditReport() {
  return (
    <section className="audit-report">
      <div className="text">
        <h2>ARE YOU READY FOR COMPLETE SITE AUDIT REPORT?</h2>
        <span className="mini-text">HOW DO I ACHIEVE GOOD SEO?</span>
        <p className="paragraph">
          A website performance audit can help identify where your site fails to
          provide and determine where your online opportunity for growth exists.
          Your website performance report gives you the essential information to
          understand how your site can deliver the most impact for your
          business.
        </p>
        <Link className="link-btn" to="/contact">
          <button>
            GET MORE LEADS WITH SEO{" "}
            <img src={arrow} alt="Arrow pointing to the right" />
          </button>
        </Link>
      </div>
      <div className="img">
        <img
          src={illustration}
          alt="Illustration of people launching a rocket"
        />
      </div>
    </section>
  );
}

export default AuditReport;
