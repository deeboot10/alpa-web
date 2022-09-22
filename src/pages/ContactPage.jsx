import bg from "../img/aboutUsMainBg.webp";
import Contact from "../components/Sections/Home/Contact";
import { Helmet } from "react-helmet";
function ContactPage() {
  return (
    <div className="contact-page home about">
      <Helmet>
        <title>Alpa Digital Agency | Contact</title>
      </Helmet>
      <section className="hero" style={{ backgroundImage: `url(${bg})` }}>
        <h1>LET'S WORK TOGETHER!</h1>
        <p>Need a quote on a re-design or a new project?</p>
        <p>Give us more details on your project and let us help!</p>
        <span className="email">
          Email: <a href="mailto:info@alpadigital.com">info@alpadigital.com</a>
        </span>
      </section>
      <Contact></Contact>
    </div>
  );
}

export default ContactPage;
