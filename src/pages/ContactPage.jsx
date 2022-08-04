import bg from "../img/aboutUsMainBg.png";
import Contact from "../components/Sections/Home/Contact";
function ContactPage() {
  return (
    <div className="contact-page home about">
      <section className="hero" style={{ backgroundImage: `url(${bg})` }}>
        <h1>Let's work together!</h1>
        <p>Need a quote on a re-design or a new project?</p>
        <p>Give us a bit of detailon your project and let us help!</p>
        <span>
          Email: <a href="mailto:info@alpa.digital">info@alpa.digital</a>
        </span>
      </section>
      <Contact></Contact>
    </div>
  );
}

export default ContactPage;
